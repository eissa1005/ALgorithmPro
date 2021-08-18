
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class TransferToGrid extends Serenity.EntityGrid<TransferToRow, any> {
        protected getColumnsKey() { return 'ALgorithm.TransferTo'; }
        protected getDialogType() { return TransferToDialog; }
        protected getIdProperty() { return TransferToRow.idProperty; }
        protected getInsertPermission() { return TransferToRow.insertPermission; }
        protected getLocalTextPrefix() { return TransferToRow.localTextPrefix; }
        protected getService() { return TransferToService.baseUrl; }

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
                service: TransferToService.baseUrl + '/ListExcel',
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
            this.editItem(<TransferToRow>{

                TR_TY: row.TransferTO,
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

