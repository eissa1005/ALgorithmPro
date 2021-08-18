
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class TransferInGrid extends Serenity.EntityGrid<TransferInRow, any> {
        protected getColumnsKey() { return 'ALgorithm.TransferIn'; }
        protected getDialogType() { return TransferInDialog; }
        protected getIdProperty() { return TransferInRow.idProperty; }
        protected getInsertPermission() { return TransferInRow.insertPermission; }
        protected getLocalTextPrefix() { return TransferInRow.localTextPrefix; }
        protected getService() { return TransferInService.baseUrl; }

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
                service: TransferInService.baseUrl + '/ListExcel',
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
            this.editItem(<TransferInRow>{

                TR_TY: row.TransferIN,
                StoreID: row.StoreID,
                PStoreID: row.StoreID,
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

