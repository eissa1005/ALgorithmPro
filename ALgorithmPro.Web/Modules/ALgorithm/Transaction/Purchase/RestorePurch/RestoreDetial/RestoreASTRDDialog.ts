/// <reference path="../../../../../Common//Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class RestoreASTRDDialog extends Common.GridEditorDialog<RestoreASTRDRow> {
        protected getFormKey() { return RestoreASTRDForm.formKey; }
        protected getIdProperty() { return RestoreASTRDRow.idProperty; }
        protected getLocalTextPrefix() { return RestoreASTRDRow.localTextPrefix; }
        protected getNameProperty() { return RestoreASTRDRow.nameProperty; }
        protected getService() { return RestoreASTRDService.baseUrl; }
        protected getDeletePermission() { return RestoreASTRDRow.deletePermission; }
        protected getInsertPermission() { return RestoreASTRDRow.insertPermission; }
        protected getUpdatePermission() { return RestoreASTRDRow.updatePermission; }

        private ItemGrid: JQuery;
        protected form: RestoreASTRDForm;

        constructor() {
            super();

            this.ItemGrid = this.byId('ItemsGrid');
            this.form = new RestoreASTRDForm(this.idPrefix);
        }
        protected getDialogButtons() {
            var buttons = super.getDialogButtons();
            return buttons;
        }

    }
}