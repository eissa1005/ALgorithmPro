
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class AddInventoryGrid extends Serenity.EntityGrid<AddInventoryRow, any> {
        protected getColumnsKey() { return 'ALgorithm.AddInventory'; }
        protected getDialogType() { return AddInventoryDialog; }
        protected getIdProperty() { return AddInventoryRow.idProperty; }
        protected getInsertPermission() { return AddInventoryRow.insertPermission; }
        protected getLocalTextPrefix() { return AddInventoryRow.localTextPrefix; }
        protected getService() { return AddInventoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: AddInventoryService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));
            return buttons;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented()) return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

            }
        }

        // Default Values 
        protected addButtonClick() {

            var row = ALgorithm.DefaultTableRow.getLookup().items[0];
            this.editItem(<AddInventoryRow>{

                TR_TY: row.AddInventory,
                StoreID: row.StoreID,
                ACC_NO: row.SupplierID,
                ACC_NAME: row.Supplier_Name,
                REP_CD: row.REP_CD,
                REP_NAME: row.REP_NAME,
                REP_CD2: row.REP_CD,
                REP_NAME2: row.REP_NAME,
                CashBoxID: row.Cash_NO,
                Cash_NAME: row.Cash_NAME,
                PriceID: row.PriceID,
                CST_CD: row.CST_CD,
                CurrencyID: row.CurrencyID,
            });

        }
    }
}

