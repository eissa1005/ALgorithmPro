
namespace ALgorithmPro.ALgorithm {
    
    @Serenity.Decorators.registerClass()
    export class CustomerSupplierDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return ACCMFForm.formKey; }
        protected getIdProperty() { return ACCMFRow.idProperty; }
        protected getLocalTextPrefix() { return ACCMFRow.localTextPrefix; }
        protected getNameProperty() { return ACCMFRow.nameProperty; }
        protected getService() { return ACCMFService.baseUrl; }
        protected getDeletePermission() { return ACCMFRow.deletePermission; }
        protected getInsertPermission() { return ACCMFRow.insertPermission; }
        protected getUpdatePermission() { return ACCMFRow.updatePermission; }
        protected form = new ACCMFForm(this.idPrefix);
        private ACCMFGrid: CustomerSupplierGrid;
        public static SelectTRTY: AS.TRTYType;

        constructor(SelectTRTY: AS.TRTYType) {
            super();
            CustomerSupplierDialog.SelectTRTY = SelectTRTY;
            this.ACCMFGrid = new CustomerSupplierGrid(this.byId('ACCMFGrid'));
        }
    }
}