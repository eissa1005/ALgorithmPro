
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CashReturnGrid extends Serenity.EntityGrid<CashReturnRow, any> {
        protected getColumnsKey() { return 'ALgorithm.CashReturn'; }
        protected getDialogType() { return CashReturnDialog; }
        protected getIdProperty() { return CashReturnRow.idProperty; }
        protected getInsertPermission() { return CashReturnRow.insertPermission; }
        protected getLocalTextPrefix() { return CashReturnRow.localTextPrefix; }
        protected getService() { return CashReturnService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }
        protected addButtonClick() {

            var row = ALgorithm.DefaultTableRow.getLookup().items[0];

            this.editItem(<ALgorithm.CashReturnRow>{

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

