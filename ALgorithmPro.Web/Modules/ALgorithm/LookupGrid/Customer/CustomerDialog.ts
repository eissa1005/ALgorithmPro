
namespace ALgorithmPro.ALgorithm {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    export class CustomerDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return ACCMFForm.formKey; }
        protected getIdProperty() { return ACCMFRow.idProperty; }
        protected getLocalTextPrefix() { return ACCMFRow.localTextPrefix; }
        protected getNameProperty() { return ACCMFRow.nameProperty; }
        protected getService() { return ACCMFService.baseUrl; }
        protected getDeletePermission() { return ACCMFRow.deletePermission; }
        protected getInsertPermission() { return ACCMFRow.insertPermission; }
        protected getUpdatePermission() { return ACCMFRow.updatePermission; }
        public static SelectTRTY: AS.TRTYType;
        private CustomerGrid: CustomerGrid;
        protected form = new ACCMFForm(this.idPrefix);

        constructor(SelectTRTY) {
            super();
            CustomerDialog.SelectTRTY = SelectTRTY;
            this.CustomerGrid = new CustomerGrid(this.byId('ACCMFGrid'));
        }

       
    }
}