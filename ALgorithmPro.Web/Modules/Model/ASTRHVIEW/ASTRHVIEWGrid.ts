/// <reference path="../../Common/Helpers/SelectableEntityGrid.ts" />

namespace ALgorithmPro.Model {

    @Serenity.Decorators.registerClass()
    export class ASTRHVIEWGrid extends SelectableEntityGrid<ASTRHVIEWRow, any> {
        protected getColumnsKey() { return 'Model.ASTRHVIEW'; }
        protected getDialogType() { return ASTRHVIEWDialog; }
        protected getIdProperty() { return ASTRHVIEWRow.idProperty; }
        protected getLocalTextPrefix() { return ASTRHVIEWRow.localTextPrefix; }
        protected getService() { return ASTRHVIEWService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}