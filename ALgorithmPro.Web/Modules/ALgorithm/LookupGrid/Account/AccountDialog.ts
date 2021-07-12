
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class AccountDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return ACCMFForm.formKey; }
        protected getIdProperty() { return ACCMFRow.idProperty; }
        protected getLocalTextPrefix() { return ACCMFRow.localTextPrefix; }
        protected getNameProperty() { return ACCMFRow.nameProperty; }
        protected getService() { return ACCMFService.baseUrl; }
        protected getDeletePermission() { return ACCMFRow.deletePermission; }
        protected getInsertPermission() { return ACCMFRow.insertPermission; }
        protected getUpdatePermission() { return ACCMFRow.updatePermission; }

        protected form = new ACCMFForm(this.idPrefix);
        private AccountGrid: AccountGrid;
        public static SelectTRTY: AS.TRTYType;

        constructor(SelectTRTY) {
            super();

            this.AccountGrid = new AccountGrid(this.byId('ACCMFGrid'));
            AccountDialog.SelectTRTY = SelectTRTY;
          
        }
       
    }
}


