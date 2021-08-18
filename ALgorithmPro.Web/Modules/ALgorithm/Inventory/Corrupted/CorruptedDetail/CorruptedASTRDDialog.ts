/// <reference path="../../../../Common//Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CorruptedASTRDDialog extends Common.GridEditorDialog<CorruptedASTRDRow> {
        protected getFormKey() { return CorruptedASTRDForm.formKey; }
        protected getIdProperty() { return CorruptedASTRDRow.idProperty; }
        protected getLocalTextPrefix() { return CorruptedASTRDRow.localTextPrefix; }
        protected getNameProperty() { return CorruptedASTRDRow.nameProperty; }
        protected getService() { return CorruptedASTRDService.baseUrl; }
        protected getDeletePermission() { return CorruptedASTRDRow.deletePermission; }
        protected getInsertPermission() { return CorruptedASTRDRow.insertPermission; }
        protected getUpdatePermission() { return CorruptedASTRDRow.updatePermission; }


        private ItemGrid: JQuery;
        protected form: CorruptedASTRDForm;

        constructor() {
            super();

            this.ItemGrid = this.byId('ItemsGrid');
            this.form = new CorruptedASTRDForm(this.idPrefix);

        }

        protected getDialogButtons() {
            var buttons = super.getDialogButtons();
            return buttons;
        }
    }
}