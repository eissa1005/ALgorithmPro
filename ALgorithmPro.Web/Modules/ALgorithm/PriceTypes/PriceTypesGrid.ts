/// <reference path="../../UilitiesScript/SelectableEntityGrid.ts" />
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class PriceTypesGrid extends SelectableEntityGrid<PriceTypesRow, any> {
        protected getColumnsKey() { return 'ALgorithm.PriceTypes'; }
        protected getDialogType() { return PriceTypesDialog; }
        protected getIdProperty() { return PriceTypesRow.idProperty; }
        protected getInsertPermission() { return PriceTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return PriceTypesRow.localTextPrefix; }
        protected getService() { return PriceTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}