
namespace ALgorithmPro.Model {

    @Serenity.Decorators.registerClass()
    export class ASTRDVIEWDialog extends Serenity.EntityDialog<ASTRDVIEWRow, any> {
        protected getFormKey() { return ASTRDVIEWForm.formKey; }
        protected getIdProperty() { return ASTRDVIEWRow.idProperty; }
        protected getLocalTextPrefix() { return ASTRDVIEWRow.localTextPrefix; }
        protected getNameProperty() { return ASTRDVIEWRow.nameProperty; }
        protected getService() { return ASTRDVIEWService.baseUrl; }
     

        protected form = new ASTRDVIEWForm(this.idPrefix);

    }
}