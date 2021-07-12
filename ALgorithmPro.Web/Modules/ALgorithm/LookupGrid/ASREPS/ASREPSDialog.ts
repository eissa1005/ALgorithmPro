
namespace ALgorithmPro.ALgorithm {
    
    @Serenity.Decorators.registerClass()
    export class ASREPSDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return REPSForm.formKey; }
        protected getIdProperty() { return REPSRow.idProperty; }
        protected getLocalTextPrefix() { return REPSRow.localTextPrefix; }
        protected getNameProperty() { return REPSRow.nameProperty; }
        protected getService() { return REPSService.baseUrl; }
        protected getDeletePermission() { return REPSRow.deletePermission; }
        protected getInsertPermission() { return REPSRow.insertPermission; }
        protected getUpdatePermission() { return REPSRow.updatePermission; }
        public static SelectTRTY: AS.TRTYType;
        private ASREPSGrid: ASREPSGrid;
        protected form = new ASCSTForm(this.idPrefix);

        constructor(SelectTRTY) {
            super();
            ASREPSDialog.SelectTRTY = SelectTRTY;
            this.ASREPSGrid = new ASREPSGrid(this.byId('ASREPSGrid'));
        }
    }
}