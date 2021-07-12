
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class SUMSDialog extends Serenity.EntityDialog<SUMSRow, any> {
        protected getFormKey() { return SUMSForm.formKey; }
        protected getIdProperty() { return SUMSRow.idProperty; }
        protected getLocalTextPrefix() { return SUMSRow.localTextPrefix; }
        protected getNameProperty() { return SUMSRow.nameProperty; }
        protected getService() { return SUMSService.baseUrl; }
        protected getDeletePermission() { return SUMSRow.deletePermission; }
        protected getInsertPermission() { return SUMSRow.insertPermission; }
        protected getUpdatePermission() { return SUMSRow.updatePermission; }

        protected form = new SUMSForm(this.idPrefix);
        constructor() {
            super();
            this.form.SUM_CD.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
            this.form.SUM_NM_AR.changeSelect2((e) => { this.form.SUM_NM_EN.value = this.form.SUM_NM_AR.value })
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.SUM_CD.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'PC-').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                SUMSService.GetNextNumber({
                    Prefix: prefix,
                    Length: prefix.length + 15 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.SUM_CD.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.SUM_CD.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }


    }
}