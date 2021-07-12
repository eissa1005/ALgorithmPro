/// <reference path="../../UilitiesScript/SelectableEntityGrid.ts" />
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ItemSubGroupsGrid extends SelectableEntityGrid<ItemSubGroupsRow, any> {
        protected getColumnsKey() { return 'ALgorithm.ItemSubGroups'; }
        protected getDialogType() { return ItemSubGroupsDialog; }
        protected getIdProperty() { return ItemSubGroupsRow.idProperty; }
        protected getInsertPermission() { return ItemSubGroupsRow.insertPermission; }
        protected getLocalTextPrefix() { return ItemSubGroupsRow.localTextPrefix; }
        protected getService() { return ItemSubGroupsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}