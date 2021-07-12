
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ItemSubGroupsDialog extends Serenity.EntityDialog<ItemSubGroupsRow, any> {
        protected getFormKey() { return ItemSubGroupsForm.formKey; }
        protected getIdProperty() { return ItemSubGroupsRow.idProperty; }
        protected getLocalTextPrefix() { return ItemSubGroupsRow.localTextPrefix; }
        protected getNameProperty() { return ItemSubGroupsRow.nameProperty; }
        protected getService() { return ItemSubGroupsService.baseUrl; }
        protected getDeletePermission() { return ItemSubGroupsRow.deletePermission; }
        protected getInsertPermission() { return ItemSubGroupsRow.insertPermission; }
        protected getUpdatePermission() { return ItemSubGroupsRow.updatePermission; }

        protected form = new ItemSubGroupsForm(this.idPrefix);
        constructor() {
            super();
            this.form.CITM_CD.element.on('keyup', (e) => {
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

            var val = Q.trimToNull(this.form.CITM_CD.value);

            // we will only get next number when ItemGroup ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'PC-').toUpperCase();

                // call our service, see ItemGroupEndpoint.cs and CustomerRepository.cs
                ItemSubGroupsService.GetNextNumber({
                    Prefix: prefix,
                    Length: prefix.length + 15 // we want service to search for and return serials of 5 in length
                }, response => {
                        this.form.CITM_CD.value = response.Serial;

                    // this is to mark numerical part after prefix
                        (this.form.CITM_CD.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }


    }
}