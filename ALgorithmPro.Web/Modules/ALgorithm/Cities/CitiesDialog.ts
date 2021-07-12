
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CitiesDialog extends Serenity.EntityDialog<CitiesRow, any> {
        protected getFormKey() { return CitiesForm.formKey; }
        protected getIdProperty() { return CitiesRow.idProperty; }
        protected getLocalTextPrefix() { return CitiesRow.localTextPrefix; }
        protected getNameProperty() { return CitiesRow.nameProperty; }
        protected getService() { return CitiesService.baseUrl; }
        protected getDeletePermission() { return CitiesRow.deletePermission; }
        protected getInsertPermission() { return CitiesRow.insertPermission; }
        protected getUpdatePermission() { return CitiesRow.updatePermission; }
        
        protected form = new CitiesForm(this.idPrefix);
        constructor() {
            super();
            this.form.CityID.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
            this.form.Name_AR.changeSelect2((e) => { this.form.Name_EN.value = this.form.Name_AR.value })

        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.CityID.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'PC-').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                CitiesService.GetNextNumber({
                    Prefix: prefix,
                    Length: prefix.length + 15 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.CityID.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.CityID.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }

    }
}