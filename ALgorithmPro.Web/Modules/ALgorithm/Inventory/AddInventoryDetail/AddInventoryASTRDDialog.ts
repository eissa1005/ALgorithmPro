/// <reference path="../../../Common//Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class AddInventoryASTRDDialog extends Common.GridEditorDialog<AddInventoryASTRDRow> {
        protected getFormKey() { return AddInventoryASTRDForm.formKey; }
        protected getIdProperty() { return AddInventoryASTRDRow.idProperty; }
        protected getLocalTextPrefix() { return AddInventoryASTRDRow.localTextPrefix; }
        protected getNameProperty() { return AddInventoryASTRDRow.nameProperty; }
        protected getService() { return AddInventoryASTRDService.baseUrl; }
        protected getDeletePermission() { return AddInventoryASTRDRow.deletePermission; }
        protected getInsertPermission() { return AddInventoryASTRDRow.insertPermission; }
        protected getUpdatePermission() { return AddInventoryASTRDRow.updatePermission; }


        private ItemGrid: JQuery;
        protected form: AddInventoryASTRDForm;

        constructor() {
            super();

            this.ItemGrid = this.byId('ItemsGrid');
            this.form = new AddInventoryASTRDForm(this.idPrefix);

        }

        protected getDialogButtons() {
            var buttons = super.getDialogButtons();
            return buttons;
        }
    }
}