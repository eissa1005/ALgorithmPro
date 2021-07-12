
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CashReturnASTRHGrid extends Serenity.EntityGrid<CashReturnASTRHRow, any> {
        protected getColumnsKey() { return 'ALgorithm.CashReturnASTRH'; }
        protected getDialogType() { return CashReturnASTRHDialog; }
        protected getIdProperty() { return CashReturnASTRHRow.idProperty; }
        protected getInsertPermission() { return CashReturnASTRHRow.insertPermission; }
        protected getLocalTextPrefix() { return CashReturnASTRHRow.localTextPrefix; }
        protected getService() { return CashReturnASTRHService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }
        protected addButtonClick() {

            var row = ALgorithm.DefaultTableRow.getLookup().items[0];

            this.editItem(<ALgorithm.CashReturnASTRHRow>{

                TR_TY: row.CashReturn,
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

