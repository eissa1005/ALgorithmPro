namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ItemsLookupDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return ItemsForm.formKey; }
        protected getIdProperty() { return ItemsRow.idProperty; }
        protected getLocalTextPrefix() { return ItemsRow.localTextPrefix; }
        protected getNameProperty() { return ItemsRow.nameProperty; }
        protected getService() { return ItemsService.baseUrl; }
        protected getDeletePermission() { return ItemsRow.deletePermission; }
        protected getInsertPermission() { return ItemsRow.insertPermission; }
        protected getUpdatePermission() { return ItemsRow.updatePermission; }
        protected form = new ItemsForm(this.idPrefix);
        private ItemsGrid: ItemsLookupGrid;
        public static SelectTRTY: AS.TRTYType;

        constructor(SelectTRTY) {
            super();

            ItemsLookupDialog.SelectTRTY = SelectTRTY;
            this.ItemsGrid = new ItemsLookupGrid(this.byId('ItemsGrid'));
          
        }
       
    }
}


