
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ReturnASTRHGrid extends Serenity.EntityGrid<ReturnASTRHRow, any> {
        protected getColumnsKey() { return 'ALgorithm.ReturnASTRH'; }
        protected getDialogType() { return ReturnASTRHDialog; }
        protected getIdProperty() { return ReturnASTRHRow.idProperty; }
        protected getInsertPermission() { return ReturnASTRHRow.insertPermission; }
        protected getLocalTextPrefix() { return ReturnASTRHRow.localTextPrefix; }
        protected getService() { return ReturnASTRHService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }
        protected addButtonClick() {

            var row = ALgorithm.DefaultTableRow.getLookup().items[0];

            this.editItem(<ALgorithm.ReturnASTRHRow>{

                TR_TY: row.ReturnSales,
                StoreID: row.StoreID,
                ACC_NO: row.CustomerID,
                ACC_NAME: row.Customer_Name,
                REP_CD: row.REP_CD,
                REP_NAME: row.REP_NAME,
                REP_CD2: row.REP_CD,
                REP_NAME2: row.REP_NAME,
                CashBoxID: row.Cash_NO,
                Cash_NAME: row.Cash_NAME,
                CST_CD: row.CST_CD,
                CurrencyID: row.CurrencyID,

            });

        }
    }
}
