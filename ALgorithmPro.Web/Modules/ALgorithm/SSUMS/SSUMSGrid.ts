/// <reference path="../../UilitiesScript/SelectableEntityGrid.ts" />
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class SSUMSGrid extends SelectableEntityGrid<SSUMSRow, any> {
        protected getColumnsKey() { return 'ALgorithm.SSUMS'; }
        protected getDialogType() { return SSUMSDialog; }
        protected getIdProperty() { return SSUMSRow.idProperty; }
        protected getInsertPermission() { return SSUMSRow.insertPermission; }
        protected getLocalTextPrefix() { return SSUMSRow.localTextPrefix; }
        protected getService() { return SSUMSService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}