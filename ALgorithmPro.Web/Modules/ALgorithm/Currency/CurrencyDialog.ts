
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CurrencyDialog extends Serenity.EntityDialog<CurrencyRow, any> {
        protected getFormKey() { return CurrencyForm.formKey; }
        protected getIdProperty() { return CurrencyRow.idProperty; }
        protected getLocalTextPrefix() { return CurrencyRow.localTextPrefix; }
        protected getNameProperty() { return CurrencyRow.nameProperty; }
        protected getService() { return CurrencyService.baseUrl; }
        protected getDeletePermission() { return CurrencyRow.deletePermission; }
        protected getInsertPermission() { return CurrencyRow.insertPermission; }
        protected getUpdatePermission() { return CurrencyRow.updatePermission; }

        protected form = new CurrencyForm(this.idPrefix);
        constructor() {
            super();
            this.form.CurrencyID.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
            this.form.Name_AR.changeSelect2((e) => { this.form.Name_EN.value = this.form.Name_AR.value })

        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.CurrencyID.value);

            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'PC-').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                CurrencyService.GetNextNumber({
                    Prefix: prefix,
                    Length: prefix.length + 15 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.CurrencyID.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.CurrencyID.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }

    }
}