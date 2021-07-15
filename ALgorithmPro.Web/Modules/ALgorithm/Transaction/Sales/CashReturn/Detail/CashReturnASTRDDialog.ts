/// <reference path="../../../../../Common//Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CashReturnASTRDDialog extends Common.GridEditorDialog<CashReturnASTRDRow> {
        protected getFormKey() { return CashReturnASTRDForm.formKey; }
        protected getIdProperty() { return CashReturnASTRDRow.idProperty; }
        protected getLocalTextPrefix() { return CashReturnASTRDRow.localTextPrefix; }
        protected getNameProperty() { return CashReturnASTRDRow.nameProperty; }
        protected getService() { return CashReturnASTRDService.baseUrl; }
        protected getDeletePermission() { return CashReturnASTRDRow.deletePermission; }
        protected getInsertPermission() { return CashReturnASTRDRow.insertPermission; }
        protected getUpdatePermission() { return CashReturnASTRDRow.updatePermission; }

        private ItemGrid: JQuery;
        protected form: CashReturnASTRDForm;

        constructor() {
            super();

            this.ItemGrid = this.byId('ItemsGrid');
            this.form = new CashReturnASTRDForm(this.idPrefix);
        }
        protected getDialogButtons() {
            var buttons = super.getDialogButtons();
            return buttons;
        }

    }
}