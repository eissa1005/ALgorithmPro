/// <reference path="../../../../../Common//Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ReturnASTRDDialog extends Common.GridEditorDialog<ReturnASTRDRow> {
        protected getFormKey() { return ReturnASTRDForm.formKey; }
        protected getIdProperty() { return ReturnASTRDRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnASTRDRow.localTextPrefix; }
        protected getNameProperty() { return ReturnASTRDRow.nameProperty; }
        protected getService() { return ReturnASTRDService.baseUrl; }
        protected getDeletePermission() { return ReturnASTRDRow.deletePermission; }
        protected getInsertPermission() { return ReturnASTRDRow.insertPermission; }
        protected getUpdatePermission() { return ReturnASTRDRow.updatePermission; }

        private ItemGrid: JQuery;
        protected form: ReturnASTRDForm;

        constructor() {
            super();

            this.ItemGrid = this.byId('ItemsGrid');
            this.form = new ReturnASTRDForm(this.idPrefix);
        }
        protected getDialogButtons() {
            var buttons = super.getDialogButtons();
            return buttons;
        }

    }
}