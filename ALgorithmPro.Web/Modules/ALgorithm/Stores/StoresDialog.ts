
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class StoresDialog extends Serenity.EntityDialog<StoresRow, any> {
        protected getFormKey() { return StoresForm.formKey; }
        protected getIdProperty() { return StoresRow.idProperty; }
        protected getLocalTextPrefix() { return StoresRow.localTextPrefix; }
        protected getNameProperty() { return StoresRow.nameProperty; }
        protected getService() { return StoresService.baseUrl; }
        protected getDeletePermission() { return StoresRow.deletePermission; }
        protected getInsertPermission() { return StoresRow.insertPermission; }
        protected getUpdatePermission() { return StoresRow.updatePermission; }

        protected form = new StoresForm(this.idPrefix);
        constructor() {
            super();
            this.form.StoreID.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
          this.form.Store_Name_AR.changeSelect2((e) => { this.form.Store_Name_EN.value = this.form.Store_Name_AR.value })
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.StoreID.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'PC-').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                StoresService.GetNextNumber({
                    Prefix: prefix,
                    Length: prefix.length + 15 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.StoreID.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.StoreID.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }


    }
}