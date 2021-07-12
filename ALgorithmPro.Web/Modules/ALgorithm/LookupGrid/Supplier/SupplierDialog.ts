
namespace ALgorithmPro.ALgorithm {
    
    @Serenity.Decorators.registerClass()
    export class SupplierDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return ACCMFForm.formKey; }
        protected getIdProperty() { return ACCMFRow.idProperty; }
        protected getLocalTextPrefix() { return ACCMFRow.localTextPrefix; }
        protected getNameProperty() { return ACCMFRow.nameProperty; }
        protected getService() { return ACCMFService.baseUrl; }
        protected getDeletePermission() { return ACCMFRow.deletePermission; }
        protected getInsertPermission() { return ACCMFRow.insertPermission; }
        protected getUpdatePermission() { return ACCMFRow.updatePermission; }
        public static SelectTRTY: AS.TRTYType;
        private SupplierGrid: SupplierGrid;
        protected form = new ACCMFForm(this.idPrefix);

        constructor(SelectTRTY) {
            super();
            SupplierDialog.SelectTRTY = SelectTRTY;
            this.SupplierGrid = new SupplierGrid(this.byId('ACCMFGrid'));
        }
    }
}