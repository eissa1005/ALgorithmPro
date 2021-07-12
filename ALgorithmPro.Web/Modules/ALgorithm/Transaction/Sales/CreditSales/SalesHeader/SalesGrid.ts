
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class SalesGrid extends Serenity.EntityGrid<SalesRow, any> {
        protected getColumnsKey() { return 'ALgorithm.Sales'; }
        protected getDialogType() { return SalesDialog; }
        protected getIdProperty() { return SalesRow.idProperty; }
        protected getInsertPermission() { return SalesRow.insertPermission; }
        protected getLocalTextPrefix() { return SalesRow.localTextPrefix; }
        protected getService() { return SalesService.baseUrl; }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: SalesService.baseUrl + '/ListExcel',
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
            this.editItem(<ALgorithm.SalesRow>{

                TR_TY: row.Sales,
                StoreID: row.StoreID,
                ACC_NO: row.CustomerID,
                ACC_NAME: row.Customer_Name,
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

