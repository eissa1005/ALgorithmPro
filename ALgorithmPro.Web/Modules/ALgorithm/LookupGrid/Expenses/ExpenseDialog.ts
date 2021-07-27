
namespace ALgorithmPro.ALgorithm {
    
    @Serenity.Decorators.registerClass()
    export class ExpenseDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return ACCMFForm.formKey; }
        protected getIdProperty() { return ACCMFRow.idProperty; }
        protected getLocalTextPrefix() { return ACCMFRow.localTextPrefix; }
        protected getNameProperty() { return ACCMFRow.nameProperty; }
        protected getService() { return ACCMFService.baseUrl; }
        protected getDeletePermission() { return ACCMFRow.deletePermission; }
        protected getInsertPermission() { return ACCMFRow.insertPermission; }
        protected getUpdatePermission() { return ACCMFRow.updatePermission; }
        public static SelectTRTY: AS.TRTYType;
        protected form = new ACCMFForm(this.idPrefix);
        private ExpensesGrid: ExpenseGrid;

        constructor(SelectTRTY) {
            super();
            ExpenseDialog.SelectTRTY = SelectTRTY;
            this.ExpensesGrid = new ExpenseGrid(this.byId('ACCMFGrid'));
        }
    }
}