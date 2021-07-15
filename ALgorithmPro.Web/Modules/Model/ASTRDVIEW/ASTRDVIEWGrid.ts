/// <reference path="../../../Modules/Common/Helpers/SelectableEntityGrid.ts" />

namespace ALgorithmPro {

    @Serenity.Decorators.registerClass()
    export class ASTRDVIEWGrid extends SelectableEntityGrid<ASTRDVIEWRow, any> {
        protected getColumnsKey() { return 'ALgorithmPro.ASTRDVIEW'; }
        protected getDialogType() { return ASTRDVIEWDialog; }
        protected getIdProperty() { return ASTRDVIEWRow.idProperty; }
        protected getInsertPermission() { return ASTRDVIEWRow.insertPermission; }
        protected getLocalTextPrefix() { return ASTRDVIEWRow.localTextPrefix; }
        protected getService() { return ASTRDVIEWService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}