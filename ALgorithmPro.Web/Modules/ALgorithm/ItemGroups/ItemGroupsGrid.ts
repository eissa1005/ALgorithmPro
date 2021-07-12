/// <reference path="../../UilitiesScript/SelectableEntityGrid.ts" />
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ItemGroupsGrid extends SelectableEntityGrid<ItemGroupsRow, any> {
        protected getColumnsKey() { return 'ALgorithm.ItemGroups'; }
        protected getDialogType() { return ItemGroupsDialog; }
        protected getIdProperty() { return ItemGroupsRow.idProperty; }
        protected getInsertPermission() { return ItemGroupsRow.insertPermission; }
        protected getLocalTextPrefix() { return ItemGroupsRow.localTextPrefix; }
        protected getService() { return ItemGroupsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
