
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()

    export class REPSDialog extends Serenity.EntityDialog<REPSRow, any> {
        protected getFormKey() { return REPSForm.formKey; }
        protected getIdProperty() { return REPSRow.idProperty; }
        protected getLocalTextPrefix() { return REPSRow.localTextPrefix; }
        protected getNameProperty() { return REPSRow.nameProperty; }
        protected getService() { return REPSService.baseUrl; }
        protected getDeletePermission() { return REPSRow.deletePermission; }
        protected getInsertPermission() { return REPSRow.insertPermission; }
        protected getUpdatePermission() { return REPSRow.updatePermission; }

        protected form = new REPSForm(this.idPrefix);

        constructor() {
            super();
            this.form.REP_CD.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
            this.form.REP_NAME.changeSelect2((e) => { this.form.REP_NAME_EN.value = this.form.REP_NAME.value })

        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.REP_CD.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'PC-').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                REPSService.GetNextNumber({
                    Prefix: prefix,
                    Length: prefix.length + 15 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.REP_CD.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.REP_CD.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }


    }
}