
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class BranchDialog extends Serenity.EntityDialog<BranchRow, any> {
        protected getFormKey() { return BranchForm.formKey; }
        protected getIdProperty() { return BranchRow.idProperty; }
        protected getLocalTextPrefix() { return BranchRow.localTextPrefix; }
        protected getNameProperty() { return BranchRow.nameProperty; }
        protected getService() { return BranchService.baseUrl; }
        protected getDeletePermission() { return BranchRow.deletePermission; }
        protected getInsertPermission() { return BranchRow.insertPermission; }
        protected getUpdatePermission() { return BranchRow.updatePermission; }

        protected form = new BranchForm(this.idPrefix);
        constructor() {
            super();
            this.form.BranchID.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });

            this.form.Name_AR.changeSelect2((e) => { this.form.Name_EN.value = this.form.Name_AR.value });
          
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.BranchID.value);

            // we will only get next number when Branch  is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'PC-').toUpperCase();

                // call our service, see BranchEndpoint.cs and CustomerRepository.cs
                BranchService.GetNextNumber({
                    Prefix: prefix,
                    Length: prefix.length + 5 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.BranchID.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.BranchID.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }


    }
}