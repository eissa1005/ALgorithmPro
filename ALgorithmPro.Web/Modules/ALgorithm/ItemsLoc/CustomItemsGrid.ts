/// <reference path="../Items/ItemsGrid.ts" />

namespace ALgorithmPro.ALgorithm {

    import fld = ALgorithm.ItemsRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CustomItemsGrid extends ItemsGrid {
        protected getColumnsKey() { return 'ALgorithm.Items'; }
        protected getDialogType() { return ItemsDialog; }
        protected getIdProperty() { return ItemsRow.idProperty; }
        protected getInsertPermission() { return ItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return ItemsRow.localTextPrefix; }
        protected getService() { return ItemsService.baseUrl; }
        protected Itemsform = new ItemsForm("ALgorithmPro_ALgorithm_ItemsLocDialog8_");

        constructor(container: JQuery) {
            super(container);

            var grid = this.slickGrid;
            grid.onSelectedRowsChanged.subscribe(() => {
                var selectedRow = grid.getSelectedRows()[0];
                var itemsRow: ALgorithm.ItemsRow = grid.getDataItem(selectedRow);

                this.Itemsform.Item_CD.value = itemsRow.Item_CD;
                this.Itemsform.Item_Name_AR.value = itemsRow.Item_Name_AR;
                this.element.closest(".ui-dialog").find(".ui-dialog-titlebar-close").click();

            });
        }
        protected getInitialTitle() {
            return null;
        }
       
    }
}