
namespace ALgorithmPro.ALgorithm {
    
    @Serenity.Decorators.registerClass()
    export class CashBoxDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return ACCMFForm.formKey; }
        protected getIdProperty() { return ACCMFRow.idProperty; }
        protected getLocalTextPrefix() { return ACCMFRow.localTextPrefix; }
        protected getNameProperty() { return ACCMFRow.nameProperty; }
        protected getService() { return ACCMFService.baseUrl; }
        protected getDeletePermission() { return ACCMFRow.deletePermission; }
        protected getInsertPermission() { return ACCMFRow.insertPermission; }
        protected getUpdatePermission() { return ACCMFRow.updatePermission; }
        public static SelectTRTY: AS.TRTYType;
        private CashBoxGrid: CashBoxGrid;
        protected form = new ACCMFForm(this.idPrefix);

        constructor(SelectTRTY) {
            super();
            CashBoxDialog.SelectTRTY = SelectTRTY;
            this.CashBoxGrid = new CashBoxGrid(this.byId('ACCMFGrid'));
        }
    }
}