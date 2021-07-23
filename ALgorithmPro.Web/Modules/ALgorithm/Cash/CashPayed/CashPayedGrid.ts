
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CashPayedGrid extends AS.GridBase<CashPayedRow, any> {
        protected getColumnsKey() { return 'ALgorithm/CashPayed'; }
        protected getDialogType() { return CashPayedDialog; }
        protected getIdProperty() { return CashPayedRow.idProperty; }
        protected getInsertPermission() { return CashPayedRow.insertPermission; }
        protected getLocalTextPrefix() { return CashPayedRow.localTextPrefix; }
        protected getService() { return CashPayedService.baseUrl; }

        public static isEditedFlag = 'isEdited';

        constructor(container: JQuery) {
            super(container);

        }

        protected getItemCssClass(item: ALgorithm.CashPayedRow, index: number): string {
            let klass: string = "";
            let IsEdited = item[CashPayedGrid.isEditedFlag] as boolean;
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
                service: CashPayedService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }

        //protected getColumns() {
        //    var columns = super.getColumns();

        //    columns.unshift({
        //        field: 'Delete Row',
        //        name: '',
        //        format: ctx => '<a class="inline-action delete-row" title="delete">' +
        //            '<i class="fa fa-trash-o text-red"></i></a>',
        //        width: 24,
        //        minWidth: 24,
        //        maxWidth: 24
        //    });

        //    columns.splice(1, 0, {
        //        field: 'View Details',
        //        name: '',
        //        format: ctx => '<a class="inline-action view-details" title="view details"></a>',
        //        width: 24,
        //        minWidth: 24,
        //        maxWidth: 24
        //    });
        //    return columns;
        //}
        // Default Values 
        protected addButtonClick() {
            var row = ALgorithm.DefaultTableRow.getLookup().items[0];
            this.editItem(<ALgorithm.CashPayedRow>{
                TR_TY: row.CashPayed,
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