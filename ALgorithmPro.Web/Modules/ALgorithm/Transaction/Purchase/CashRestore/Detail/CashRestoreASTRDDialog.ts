/// <reference path="../../../../../Common//Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CashRestoreASTRDDialog extends Common.GridEditorDialog<CashRestoreASTRDRow> {
        protected getFormKey() { return CashRestoreASTRDForm.formKey; }
        protected getIdProperty() { return CashRestoreASTRDRow.idProperty; }
        protected getLocalTextPrefix() { return CashRestoreASTRDRow.localTextPrefix; }
        protected getNameProperty() { return CashRestoreASTRDRow.nameProperty; }
        protected getService() { return CashRestoreASTRDService.baseUrl; }
        protected getDeletePermission() { return CashRestoreASTRDRow.deletePermission; }
        protected getInsertPermission() { return CashRestoreASTRDRow.insertPermission; }
        protected getUpdatePermission() { return CashRestoreASTRDRow.updatePermission; }

        private ItemGrid: JQuery;
        protected form: CashRestoreASTRDForm;

        constructor() {
            super();

            this.ItemGrid = this.byId('ItemsGrid');
            this.form = new CashRestoreASTRDForm(this.idPrefix);
        }
        protected getDialogButtons() {
            var buttons = super.getDialogButtons();
            return buttons;
        }

    }
}