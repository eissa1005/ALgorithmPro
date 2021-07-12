
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ASCSTDialog extends Serenity.EntityDialog<ASCSTRow, any> {
        protected getFormKey() { return ASCSTForm.formKey; }
        protected getIdProperty() { return ASCSTRow.idProperty; }
        protected getLocalTextPrefix() { return ASCSTRow.localTextPrefix; }
        protected getNameProperty() { return ASCSTRow.nameProperty; }
        protected getService() { return ASCSTService.baseUrl; }
        protected getDeletePermission() { return ASCSTRow.deletePermission; }
        protected getInsertPermission() { return ASCSTRow.insertPermission; }
        protected getUpdatePermission() { return ASCSTRow.updatePermission; }

        protected form = new ASCSTForm(this.idPrefix);
       

        constructor() {
            super();
           

            this.form.CST_CD.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
                this.form.CST_NM_AR.changeSelect2((e) => { this.form.CST_NM_EN.value = this.form.CST_NM_AR.value })

            });
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.CST_CD.value);

            // we will only get next number when CST CD is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'PC-').toUpperCase();

                // call our service, see ASCST  Endpoint.cs and CustomerRepository.cs
                ASCSTService.GetNextNumber({
                    Prefix: prefix,
                    Length: prefix.length + 15 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.CST_CD.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.CST_CD.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }


    }
}