
namespace ALgorithmPro.ALgorithm {
    
    @Serenity.Decorators.registerClass()
    export class BankDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return ACCMFForm.formKey; }
        protected getIdProperty() { return ACCMFRow.idProperty; }
        protected getLocalTextPrefix() { return ACCMFRow.localTextPrefix; }
        protected getNameProperty() { return ACCMFRow.nameProperty; }
        protected getService() { return ACCMFService.baseUrl; }
        protected getDeletePermission() { return ACCMFRow.deletePermission; }
        protected getInsertPermission() { return ACCMFRow.insertPermission; }
        protected getUpdatePermission() { return ACCMFRow.updatePermission; }
        public static SelectTRTY: AS.TRTYType;
        private BankGrid: BankGrid;
        protected form = new ACCMFForm(this.idPrefix);

        constructor(SelectTRTY) {
            super();
            BankDialog.SelectTRTY = SelectTRTY;
            this.BankGrid = new BankGrid(this.byId('ACCMFGrid'));
        }
    }
}