
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CashRestoreASTRHGrid extends Serenity.EntityGrid<CashRestoreASTRHRow, any> {
        protected getColumnsKey() { return 'ALgorithm.CashRestoreASTRH'; }
        protected getDialogType() { return CashRestoreASTRHDialog; }
        protected getIdProperty() { return CashRestoreASTRHRow.idProperty; }
        protected getInsertPermission() { return CashRestoreASTRHRow.insertPermission; }
        protected getLocalTextPrefix() { return CashRestoreASTRHRow.localTextPrefix; }
        protected getService() { return CashRestoreASTRHService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }
        protected addButtonClick() {

            var row = ALgorithm.DefaultTableRow.getLookup().items[0];

            this.editItem(<ALgorithm.CashRestoreASTRHRow>{

                TR_TY: row.CashRestore,
                StoreID: row.StoreID,
                ACC_NO: row.SupplierID,
                ACC_NAME: row.Supplier_Name,
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

