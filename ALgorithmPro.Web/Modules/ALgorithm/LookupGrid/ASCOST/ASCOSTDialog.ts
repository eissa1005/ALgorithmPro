
namespace ALgorithmPro.ALgorithm {
    
    @Serenity.Decorators.registerClass()
    export class ASCOSTDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return ASCSTForm.formKey; }
        protected getIdProperty() { return ASCSTRow.idProperty; }
        protected getLocalTextPrefix() { return ASCSTRow.localTextPrefix; }
        protected getNameProperty() { return ASCSTRow.nameProperty; }
        protected getService() { return ASCSTService.baseUrl; }
        protected getDeletePermission() { return ASCSTRow.deletePermission; }
        protected getInsertPermission() { return ASCSTRow.insertPermission; }
        protected getUpdatePermission() { return ASCSTRow.updatePermission; }
        public static SelectTRTY: AS.TRTYType;
        private COSTGrid: ASCOSTGrid;
        protected form = new ASCSTForm(this.idPrefix);

        constructor(SelectTRTY) {
            super();
            ASCOSTDialog.SelectTRTY = SelectTRTY;
            this.COSTGrid = new ASCOSTGrid(this.byId('COSTGrid'));
        }
    }
}