
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class RevenuesGrid extends AS.GridBase<RevenuesRow, any> {
        protected getColumnsKey() { return 'ALgorithm/Revenues'; }
        protected getDialogType() { return RevenuesDialog; }
        protected getIdProperty() { return RevenuesRow.idProperty; }
        protected getInsertPermission() { return RevenuesRow.insertPermission; }
        protected getLocalTextPrefix() { return RevenuesRow.localTextPrefix; }
        protected getService() { return RevenuesService.baseUrl; }

        public static isEditedFlag = 'isEdited';

        constructor(container: JQuery) {
            super(container);

        }

        protected getItemCssClass(item: ALgorithm.RevenuesRow, index: number): string {
            let klass: string = "";
            let IsEdited = item[RevenuesGrid.isEditedFlag] as boolean;
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
                service: RevenuesService.baseUrl + '/ListExcel',
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
            this.editItem(<ALgorithm.RevenuesRow>{
                TR_TY: row.Revenue,
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