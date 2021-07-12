
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ASTRTYDialog extends Serenity.EntityDialog<ASTRTYRow, any> {
        protected getFormKey() { return ASTRTYForm.formKey; }
        protected getIdProperty() { return ASTRTYRow.idProperty; }
        protected getLocalTextPrefix() { return ASTRTYRow.localTextPrefix; }
        protected getNameProperty() { return ASTRTYRow.nameProperty; }
        protected getService() { return ASTRTYService.baseUrl; }
        protected getDeletePermission() { return ASTRTYRow.deletePermission; }
        protected getInsertPermission() { return ASTRTYRow.insertPermission; }
        protected getUpdatePermission() { return ASTRTYRow.updatePermission; }

        protected form = new ASTRTYForm(this.idPrefix);

    }
}