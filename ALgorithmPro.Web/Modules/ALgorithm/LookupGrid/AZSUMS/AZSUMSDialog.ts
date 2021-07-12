
namespace ALgorithmPro.ALgorithm {
    
    @Serenity.Decorators.registerClass()
    export class AZSUMSDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return SUMSForm.formKey; }
        protected getIdProperty() { return SUMSRow.idProperty; }
        protected getLocalTextPrefix() { return SUMSRow.localTextPrefix; }
        protected getNameProperty() { return SUMSRow.nameProperty; }
        protected getService() { return SUMSService.baseUrl; }
        protected getDeletePermission() { return SUMSRow.deletePermission; }
        protected getInsertPermission() { return SUMSRow.insertPermission; }
        protected getUpdatePermission() { return SUMSRow.updatePermission; }
        public static SelectTRTY: AS.TRTYType;
        private AZSUMSGrid: AZSUMSGrid;
        protected form = new SUMSForm(this.idPrefix);

        constructor(SelectTRTY) {
            super();
            AZSUMSDialog.SelectTRTY = SelectTRTY;
            this.AZSUMSGrid = new AZSUMSGrid(this.byId('AZSUMSGrid'));
        }
    }
}