
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class SSUMSDialog extends Serenity.EntityDialog<SSUMSRow, any> {
        protected getFormKey() { return SSUMSForm.formKey; }
        protected getIdProperty() { return SSUMSRow.idProperty; }
        protected getLocalTextPrefix() { return SSUMSRow.localTextPrefix; }
        protected getNameProperty() { return SSUMSRow.nameProperty; }
        protected getService() { return SSUMSService.baseUrl; }
        protected getDeletePermission() { return SSUMSRow.deletePermission; }
        protected getInsertPermission() { return SSUMSRow.insertPermission; }
        protected getUpdatePermission() { return SSUMSRow.updatePermission; }

        protected form = new SSUMSForm(this.idPrefix);
        constructor() {
            super();
            this.form.SSUM_CD.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
            this.form.SSUM_NM_AR.changeSelect2((e) => { this.form.SSUM_NM_EN.value = this.form.SSUM_NM_AR.value })

        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.SSUM_CD.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'PC-').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                SSUMSService.GetNextNumber({
                    Prefix: prefix,
                    Length: prefix.length +15 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.SSUM_CD.value = response.Serial;

                        // this is to mark numerical part after prefix
                        (this.form.SSUM_CD.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }


    }
}