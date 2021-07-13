
namespace ALgorithmPro.Model {

    @Serenity.Decorators.registerClass()
    export class ASTRHVIEWDialog extends Serenity.EntityDialog<ASTRHVIEWRow, any> {
        protected getFormKey() { return ASTRHVIEWForm.formKey; }
        protected getIdProperty() { return ASTRHVIEWRow.idProperty; }
        protected getLocalTextPrefix() { return ASTRHVIEWRow.localTextPrefix; }
        protected getNameProperty() { return ASTRHVIEWRow.nameProperty; }
        protected getService() { return ASTRHVIEWService.baseUrl; }

        protected form = new ASTRHVIEWForm(this.idPrefix);

    }
}