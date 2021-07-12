
namespace ALgorithmPro.ALgorithm {
    
    @Serenity.Decorators.registerClass()
    export class CustomDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return ItemsForm.formKey; }
        protected getIdProperty() { return ItemsRow.idProperty; }
        protected getLocalTextPrefix() { return ItemsRow.localTextPrefix; }
        protected getNameProperty() { return ItemsRow.nameProperty; }
        protected getService() { return ItemsService.baseUrl; }
        protected getDeletePermission() { return ItemsRow.deletePermission; }
        protected getInsertPermission() { return ItemsRow.insertPermission; }
        protected getUpdatePermission() { return ItemsRow.updatePermission; }

        private ItemsGrid: CustomItemsGrid;
        protected form = new ItemsForm(this.idPrefix);

        constructor() {
            super();

            this.ItemsGrid = new CustomItemsGrid(this.byId('ItemGrid'));

            
        }
    }
}