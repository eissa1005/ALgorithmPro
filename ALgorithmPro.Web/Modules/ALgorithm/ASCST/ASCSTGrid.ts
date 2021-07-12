/// <reference path="../../Common/Helpers/SelectableEntityGrid.ts" />
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ASCSTGrid extends SelectableEntityGrid<ASCSTRow, any> {
        protected getColumnsKey() { return 'ALgorithm.ASCST'; }
        protected getDialogType() { return ASCSTDialog; }
        protected getIdProperty() { return ASCSTRow.idProperty; }
        protected getInsertPermission() { return ASCSTRow.insertPermission; }
        protected getLocalTextPrefix() { return ASCSTRow.localTextPrefix; }
        protected getService() { return ASCSTService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}