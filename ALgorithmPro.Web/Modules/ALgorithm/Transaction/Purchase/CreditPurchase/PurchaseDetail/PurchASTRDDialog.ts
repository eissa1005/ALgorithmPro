/// <reference path="../../../../../Common//Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class PurchASTRDDialog extends Common.GridEditorDialog<PurchASTRDRow> {
        protected getFormKey() { return PurchASTRDForm.formKey; }
        protected getIdProperty() { return PurchASTRDRow.idProperty; }
        protected getLocalTextPrefix() { return PurchASTRDRow.localTextPrefix; }
        protected getNameProperty() { return PurchASTRDRow.nameProperty; }
        protected getService() { return PurchASTRDService.baseUrl; }
        protected getDeletePermission() { return PurchASTRDRow.deletePermission; }
        protected getInsertPermission() { return PurchASTRDRow.insertPermission; }
        protected getUpdatePermission() { return PurchASTRDRow.updatePermission; }

        private ItemGrid: JQuery;
        protected form: PurchASTRDForm;

        constructor() {
            super();

            this.ItemGrid = this.byId('ItemsGrid');
            this.form = new PurchASTRDForm(this.idPrefix);

        }
        protected getDialogButtons() {
            var buttons = super.getDialogButtons();
            return buttons;
        }
       
    }
}