
namespace ALgorithmPro.ALgorithm {
    
    @Serenity.Decorators.registerClass()
    export class AZSSUMSDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return SSUMSForm.formKey; }
        protected getIdProperty() { return SSUMSRow.idProperty; }
        protected getLocalTextPrefix() { return SSUMSRow.localTextPrefix; }
        protected getNameProperty() { return SSUMSRow.nameProperty; }
        protected getService() { return SSUMSService.baseUrl; }
        protected getDeletePermission() { return SSUMSRow.deletePermission; }
        protected getInsertPermission() { return SSUMSRow.insertPermission; }
        protected getUpdatePermission() { return SSUMSRow.updatePermission; }
        public static SelectTRTY: AS.TRTYType;
        private AZSSUMSGrid: AZSSUMSGrid;
        protected form = new SSUMSForm(this.idPrefix);

        constructor(SelectTRTY) {
            super();
            AZSSUMSDialog.SelectTRTY = SelectTRTY;
            this.AZSSUMSGrid = new AZSSUMSGrid(this.byId('AZSSUMSGrid'));
        }
    }
}