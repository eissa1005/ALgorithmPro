/// <reference path="../../../../../Common//Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class SalesASTRDDialog extends Common.GridEditorDialog<SalesASTRDRow> {
        protected getFormKey() { return SalesASTRDForm.formKey; }
        protected getIdProperty() { return SalesASTRDRow.idProperty; }
        protected getLocalTextPrefix() { return SalesASTRDRow.localTextPrefix; }
        protected getNameProperty() { return SalesASTRDRow.nameProperty; }
        protected getService() { return SalesASTRDService.baseUrl; }
        protected getDeletePermission() { return SalesASTRDRow.deletePermission; }
        protected getInsertPermission() { return SalesASTRDRow.insertPermission; }
        protected getUpdatePermission() { return SalesASTRDRow.updatePermission; }

        private ItemGrid: JQuery;
        protected form: SalesASTRDForm;
       

        constructor() {
            super();

            this.ItemGrid = this.byId('ItemsGrid');
            this.form = new SalesASTRDForm(this.idPrefix);
        }

        protected getDialogButtons() {
            var buttons = super.getDialogButtons();
            return buttons;
        }
       
    }
}