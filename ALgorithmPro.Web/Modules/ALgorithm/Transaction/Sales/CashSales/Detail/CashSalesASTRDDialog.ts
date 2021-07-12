/// <reference path="../../../../../Common//Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CashSalesASTRDDialog extends Common.GridEditorDialog<CashSalesASTRDRow> {
        protected getFormKey() { return CashSalesASTRDForm.formKey; }
        protected getIdProperty() { return CashSalesASTRDRow.idProperty; }
        protected getLocalTextPrefix() { return CashSalesASTRDRow.localTextPrefix; }
        protected getNameProperty() { return CashSalesASTRDRow.nameProperty; }
        protected getService() { return CashSalesASTRDService.baseUrl; }
        protected getDeletePermission() { return CashSalesASTRDRow.deletePermission; }
        protected getInsertPermission() { return CashSalesASTRDRow.insertPermission; }
        protected getUpdatePermission() { return CashSalesASTRDRow.updatePermission; }

        private ItemGrid: JQuery;
        protected form: CashSalesASTRDForm;

        constructor() {
            super();

            this.ItemGrid = this.byId('ItemsGrid');
            this.form = new CashSalesASTRDForm(this.idPrefix);
           
        }

        protected getDialogButtons() {
            var buttons = super.getDialogButtons();
            return buttons;
        }
    }
}