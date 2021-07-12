
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ASTRTYGrid extends Serenity.EntityGrid<ASTRTYRow, any> {
        protected getColumnsKey() { return 'ALgorithm.ASTRTY'; }
        protected getDialogType() { return ASTRTYDialog; }
        protected getIdProperty() { return ASTRTYRow.idProperty; }
        protected getInsertPermission() { return ASTRTYRow.insertPermission; }
        protected getLocalTextPrefix() { return ASTRTYRow.localTextPrefix; }
        protected getService() { return ASTRTYService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}