/// <reference path="../../../../../Common//Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CashPurchASTRDDialog extends Common.GridEditorDialog<CashPurchASTRDRow> {
        protected getFormKey() { return CashPurchASTRDForm.formKey; }
        protected getIdProperty() { return CashPurchASTRDRow.idProperty; }
        protected getLocalTextPrefix() { return CashPurchASTRDRow.localTextPrefix; }
        protected getNameProperty() { return CashPurchASTRDRow.nameProperty; }
        protected getService() { return CashPurchASTRDService.baseUrl; }
        protected getDeletePermission() { return CashPurchASTRDRow.deletePermission; }
        protected getInsertPermission() { return CashPurchASTRDRow.insertPermission; }
        protected getUpdatePermission() { return CashPurchASTRDRow.updatePermission; }
        
        private ItemGrid: JQuery;
        protected form: CashPurchASTRDForm;
       

        constructor() {
            super();

            this.ItemGrid = this.byId('ItemsGrid');
            this.form = new CashPurchASTRDForm(this.idPrefix);
           
        }
      
        protected getDialogButtons() {
            var buttons = super.getDialogButtons();
            return buttons;
        }
    }
}