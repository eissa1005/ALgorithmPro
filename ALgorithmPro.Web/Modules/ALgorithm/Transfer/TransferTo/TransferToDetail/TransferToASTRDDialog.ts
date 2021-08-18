/// <reference path="../../../../Common//Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class TransferToASTRDDialog extends Common.GridEditorDialog<TransferToASTRDRow> {
        protected getFormKey() { return TransferToASTRDForm.formKey; }
        protected getIdProperty() { return TransferToASTRDRow.idProperty; }
        protected getLocalTextPrefix() { return TransferToASTRDRow.localTextPrefix; }
        protected getNameProperty() { return TransferToASTRDRow.nameProperty; }
        protected getService() { return TransferToASTRDService.baseUrl; }
        protected getDeletePermission() { return TransferToASTRDRow.deletePermission; }
        protected getInsertPermission() { return TransferToASTRDRow.insertPermission; }
        protected getUpdatePermission() { return TransferToASTRDRow.updatePermission; }


        private ItemGrid: JQuery;
        protected form: TransferToASTRDForm;

        constructor() {
            super();

            this.ItemGrid = this.byId('ItemsGrid');
            this.form = new TransferToASTRDForm(this.idPrefix);

        }

        protected getDialogButtons() {
            var buttons = super.getDialogButtons();
            return buttons;
        }
    }
}