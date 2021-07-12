/// <reference path="../../UilitiesScript/SelectableEntityGrid.ts" />
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class SUMSGrid extends SelectableEntityGrid<SUMSRow, any> {
        protected getColumnsKey() { return 'ALgorithm.SUMS'; }
        protected getDialogType() { return SUMSDialog; }
        protected getIdProperty() { return SUMSRow.idProperty; }
        protected getInsertPermission() { return SUMSRow.insertPermission; }
        protected getLocalTextPrefix() { return SUMSRow.localTextPrefix; }
        protected getService() { return SUMSService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}