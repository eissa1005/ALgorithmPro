
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ExpensesGrid extends AS.GridBase<ExpensesRow, any> {
        protected getColumnsKey() { return 'ALgorithm/Expenses'; }
        protected getDialogType() { return ExpensesDialog; }
        protected getIdProperty() { return ExpensesRow.idProperty; }
        protected getInsertPermission() { return ExpensesRow.insertPermission; }
        protected getLocalTextPrefix() { return ExpensesRow.localTextPrefix; }
        protected getService() { return ExpensesService.baseUrl; }

        public static isEditedFlag = 'isEdited';

        constructor(container: JQuery) {
            super(container);

        }

        protected getItemCssClass(item: ALgorithm.ExpensesRow, index: number): string {
            let klass: string = "";
            let IsEdited = item[ExpensesGrid.isEditedFlag] as boolean;
            if (!IsEdited) {
                IsEdited = false;
            }

            if (IsEdited == true) {
                klass += " text-bold";
            }
            return Q.trimToNull(klass);
        }

        protected getSlickOptions() {
            let opt = super.getSlickOptions();
            opt.editable = false;
            opt.autoEdit = false;
            opt.autoHeight = false;
            opt.forceFitColumns = false;
            return opt;
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ExpensesService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    
        protected addButtonClick() {
            var row = ALgorithm.DefaultTableRow.getLookup().items[0];
            this.editItem(<ALgorithm.ExpensesRow>{
                TR_TY: row.Expenses,
                StoreID: row.StoreID,
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

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }
    }
}