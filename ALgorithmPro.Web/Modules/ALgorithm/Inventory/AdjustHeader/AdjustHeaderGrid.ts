
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class AdjustHeaderGrid extends Serenity.EntityGrid<AdjustHeaderRow, any> {
        protected getColumnsKey() { return 'ALgorithm.AdjustHeader'; }
        protected getDialogType() { return AdjustHeaderDialog; }
        protected getIdProperty() { return AdjustHeaderRow.idProperty; }
        protected getInsertPermission() { return AdjustHeaderRow.insertPermission; }
        protected getLocalTextPrefix() { return AdjustHeaderRow.localTextPrefix; }
        protected getService() { return AdjustHeaderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }
        protected addButtonClick() {

            var row = ALgorithm.DefaultTableRow.getLookup().items[0];

            this.editItem(<ALgorithm.SalesASTRHRow>{

                TR_TY: row.AddInventory,
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
