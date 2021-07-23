/// <reference path="../../../Common//Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class RemoveInventoryASTRDDialog extends Common.GridEditorDialog<RemoveInventoryASTRDRow> {
        protected getFormKey() { return RemoveInventoryASTRDForm.formKey; }
        protected getIdProperty() { return RemoveInventoryASTRDRow.idProperty; }
        protected getLocalTextPrefix() { return RemoveInventoryASTRDRow.localTextPrefix; }
        protected getNameProperty() { return RemoveInventoryASTRDRow.nameProperty; }
        protected getService() { return RemoveInventoryASTRDService.baseUrl; }
        protected getDeletePermission() { return RemoveInventoryASTRDRow.deletePermission; }
        protected getInsertPermission() { return RemoveInventoryASTRDRow.insertPermission; }
        protected getUpdatePermission() { return RemoveInventoryASTRDRow.updatePermission; }


        private ItemGrid: JQuery;
        protected form: RemoveInventoryASTRDForm;

        constructor() {
            super();

            this.ItemGrid = this.byId('ItemsGrid');
            this.form = new RemoveInventoryASTRDForm(this.idPrefix);

        }

        protected getDialogButtons() {
            var buttons = super.getDialogButtons();
            return buttons;
        }
    }
}