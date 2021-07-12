
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ItemsDialog extends Serenity.EntityDialog<ItemsRow, any> {
        protected getFormKey() { return ItemsForm.formKey; }
        protected getIdProperty() { return ItemsRow.idProperty; }
        protected getLocalTextPrefix() { return ItemsRow.localTextPrefix; }
        protected getNameProperty() { return ItemsRow.nameProperty; }
        protected getService() { return ItemsService.baseUrl; }
        protected getDeletePermission() { return ItemsRow.deletePermission; }
        protected getInsertPermission() { return ItemsRow.insertPermission; }
        protected getUpdatePermission() { return ItemsRow.updatePermission; }

        protected form = new ItemsForm(this.idPrefix);
        
        constructor() {
            super();

           
            // MaxNumber
            this.form.Item_CD.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });

                this.form.Item_Name_AR.changeSelect2(e => { this.form.Item_Name_EN.value = this.form.Item_Name_AR.value });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }
        private getNextNumber() {

            var val = Q.trimToNull(this.form.Item_CD.value);

            if (!val || val.length <= 1) {

                var prefix = (val || 'PC-').toUpperCase();

                ItemsService.GetNextNumber({
                    Prefix: prefix,
                    Length: prefix.length + 5 
                }, response => {
                        this.form.Item_CD.value = response.Serial;
                        (this.form.Item_CD.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
    }
    
}