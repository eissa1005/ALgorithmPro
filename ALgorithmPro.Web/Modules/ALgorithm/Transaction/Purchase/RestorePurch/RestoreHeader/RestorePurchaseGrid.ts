
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class RestorePurchaseGrid extends Serenity.EntityGrid<RestorePurchaseRow, any> {
        protected getColumnsKey() { return 'ALgorithm.RestorePurchase'; }
        protected getDialogType() { return RestorePurchaseDialog; }
        protected getIdProperty() { return RestorePurchaseRow.idProperty; }
        protected getInsertPermission() { return RestorePurchaseRow.insertPermission; }
        protected getLocalTextPrefix() { return RestorePurchaseRow.localTextPrefix; }
        protected getService() { return RestorePurchaseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }
        protected addButtonClick() {

            var row = ALgorithm.DefaultTableRow.getLookup().items[0];

            this.editItem(<ALgorithm.RestorePurchaseRow>{

                TR_TY: row.RestorePurchase,
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

