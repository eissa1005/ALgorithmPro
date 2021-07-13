
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CashRestoreGrid extends Serenity.EntityGrid<CashRestoreRow, any> {
        protected getColumnsKey() { return 'ALgorithm.CashRestore'; }
        protected getDialogType() { return CashRestoreDialog; }
        protected getIdProperty() { return CashRestoreRow.idProperty; }
        protected getInsertPermission() { return CashRestoreRow.insertPermission; }
        protected getLocalTextPrefix() { return CashRestoreRow.localTextPrefix; }
        protected getService() { return CashRestoreService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }

        protected addButtonClick() {

            var row = ALgorithm.DefaultTableRow.getLookup().items[0];

            this.editItem(<ALgorithm.CashRestoreRow>{

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

