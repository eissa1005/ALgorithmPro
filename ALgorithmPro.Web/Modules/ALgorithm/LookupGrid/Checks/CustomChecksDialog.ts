
namespace ALgorithmPro.ALgorithm {
    
    @Serenity.Decorators.registerClass()
    export class CustomChecksDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return ChecksForm.formKey; }
        protected getIdProperty() { return ChecksRow.idProperty; }
        protected getLocalTextPrefix() { return ChecksRow.localTextPrefix; }
        protected getNameProperty() { return ChecksRow.nameProperty; }
        protected getService() { return ChecksService.baseUrl; }
        protected getDeletePermission() { return ChecksRow.deletePermission; }
        protected getInsertPermission() { return ChecksRow.insertPermission; }
        protected getUpdatePermission() { return ChecksRow.updatePermission; }
        private ChecksGrid: CustomChecksGrid;
        protected form = new ChecksForm(this.idPrefix);

        constructor(SelectTRTY) {
            super();

           
            this.ChecksGrid = new CustomChecksGrid(this.byId('ChecksGrid'));

            
        }
    }
}