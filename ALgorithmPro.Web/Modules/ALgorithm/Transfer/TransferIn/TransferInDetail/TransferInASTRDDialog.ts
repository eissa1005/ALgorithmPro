/// <reference path="../../../../Common//Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class TransferInASTRDDialog extends Common.GridEditorDialog<TransferInASTRDRow> {
        protected getFormKey() { return TransferInASTRDForm.formKey; }
        protected getIdProperty() { return TransferInASTRDRow.idProperty; }
        protected getLocalTextPrefix() { return TransferInASTRDRow.localTextPrefix; }
        protected getNameProperty() { return TransferInASTRDRow.nameProperty; }
        protected getService() { return TransferInASTRDService.baseUrl; }
        protected getDeletePermission() { return TransferInASTRDRow.deletePermission; }
        protected getInsertPermission() { return TransferInASTRDRow.insertPermission; }
        protected getUpdatePermission() { return TransferInASTRDRow.updatePermission; }


        private ItemGrid: JQuery;
        protected form: TransferInASTRDForm;

        constructor() {
            super();

            this.ItemGrid = this.byId('ItemsGrid');
            this.form = new TransferInASTRDForm(this.idPrefix);

        }

        protected getDialogButtons() {
            var buttons = super.getDialogButtons();
            return buttons;
        }
    }
}