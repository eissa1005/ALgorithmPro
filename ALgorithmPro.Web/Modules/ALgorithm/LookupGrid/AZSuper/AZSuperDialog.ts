
namespace ALgorithmPro.ALgorithm {
    
    @Serenity.Decorators.registerClass()
    export class AZSuperDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return SupervisorsForm.formKey; }
        protected getIdProperty() { return SupervisorsRow.idProperty; }
        protected getLocalTextPrefix() { return SupervisorsRow.localTextPrefix; }
        protected getNameProperty() { return SupervisorsRow.nameProperty; }
        protected getService() { return SupervisorsService.baseUrl; }
        protected getDeletePermission() { return SupervisorsRow.deletePermission; }
        protected getInsertPermission() { return SupervisorsRow.insertPermission; }
        protected getUpdatePermission() { return SupervisorsRow.updatePermission; }
        public static SelectTRTY: AS.TRTYType;
        private AZSuperGrid: SupervisorsGrid;
        protected form = new SupervisorsForm(this.idPrefix);

        constructor(SelectTRTY) {
            super();
            AZSuperDialog.SelectTRTY = SelectTRTY;
            this.AZSuperGrid = new SupervisorsGrid(this.byId('AZSuperGrid'));
        }
    }
}