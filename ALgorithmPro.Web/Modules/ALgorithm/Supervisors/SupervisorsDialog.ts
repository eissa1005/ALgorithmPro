
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class SupervisorsDialog extends Serenity.EntityDialog<SupervisorsRow, any> {
        protected getFormKey() { return SupervisorsForm.formKey; }
        protected getIdProperty() { return SupervisorsRow.idProperty; }
        protected getLocalTextPrefix() { return SupervisorsRow.localTextPrefix; }
        protected getNameProperty() { return SupervisorsRow.nameProperty; }
        protected getService() { return SupervisorsService.baseUrl; }
        protected getDeletePermission() { return SupervisorsRow.deletePermission; }
        protected getInsertPermission() { return SupervisorsRow.insertPermission; }
        protected getUpdatePermission() { return SupervisorsRow.updatePermission; }

        protected form = new SupervisorsForm(this.idPrefix);
        constructor() {
            super();
            this.form.SupervisorID.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();

                this.form.Name_AR.changeSelect2((e) => { this.form.Name_EN.value = this.form.Name_AR.value });
            });
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.SupervisorID.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'PC-').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                SupervisorsService.GetNextNumber({
                    Prefix: prefix,
                    Length: prefix.length + 15 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.SupervisorID.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.SupervisorID.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }


    }
}