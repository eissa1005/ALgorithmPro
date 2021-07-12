
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ItemsBarcodeGrid extends Serenity.EntityGrid<ItemsBarcodeRow, any> {
        protected getColumnsKey() { return 'ALgorithm.ItemsBarcode'; }
        protected getDialogType() { return ItemsBarcodeDialog; }
        protected getIdProperty() { return ItemsBarcodeRow.idProperty; }
        protected getInsertPermission() { return ItemsBarcodeRow.insertPermission; }
        protected getLocalTextPrefix() { return ItemsBarcodeRow.localTextPrefix; }
        protected getService() { return ItemsBarcodeService.baseUrl; }

        
        constructor(container: JQuery) {
            super(container);



        }

        
       
    }
}