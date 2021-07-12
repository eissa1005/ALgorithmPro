/// <reference path="../../UilitiesScript/SelectableEntityGrid.ts" />
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class RegionsGrid extends SelectableEntityGrid<RegionsRow, any> {
        protected getColumnsKey() { return 'ALgorithm.Regions'; }
        protected getDialogType() { return <any>RegionsDialog; }
        protected getIdProperty() { return RegionsRow.idProperty; }
        protected getInsertPermission() { return RegionsRow.insertPermission; }
        protected getLocalTextPrefix() { return RegionsRow.localTextPrefix; }
        protected getService() { return RegionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ALgorithmPro.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'ALgorithm/Regions/ListExcel',
                separator: true
            }));

            buttons.push(ALgorithmPro.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}