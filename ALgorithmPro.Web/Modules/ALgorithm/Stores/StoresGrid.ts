/// <reference path="../../UilitiesScript/SelectableEntityGrid.ts" />
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class StoresGrid extends SelectableEntityGrid<StoresRow, any> {
        protected getColumnsKey() { return 'ALgorithm.Stores'; }
        protected getDialogType() { return StoresDialog; }
        protected getIdProperty() { return StoresRow.idProperty; }
        protected getInsertPermission() { return StoresRow.insertPermission; }
        protected getLocalTextPrefix() { return StoresRow.localTextPrefix; }
        protected getService() { return StoresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}