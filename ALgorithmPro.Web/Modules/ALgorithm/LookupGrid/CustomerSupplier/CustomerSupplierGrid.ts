/// <reference path="../../../Common/Helpers/SelectableEntityGrid.ts" />

namespace ALgorithmPro.ALgorithm {

    import FLD = ACCMFRow.Fields;
    @Serenity.Decorators.registerClass()
    export class CustomerSupplierGrid extends SelectableEntityGrid<ACCMFRow, any> {
        protected getColumnsKey() { return 'ALgorithm.ACCMF'; }
        protected getDialogType() { return ACCMFDialog; }
        protected getIdProperty() { return ACCMFRow.idProperty; }
        protected getInsertPermission() { return ACCMFRow.insertPermission; }
        protected getLocalTextPrefix() { return ACCMFRow.localTextPrefix; }
        protected getService() { return ACCMFService.baseUrl; }
        public SelectTRTY: AS.TRTYType;
        protected form: any;
        public IdPrefixed: string;

        constructor(container: JQuery) {
            super(container);

            switch (CustomerSupplierDialog.SelectTRTY) {
                case AS.TRTYType.CashPurchase:
                    this.SelectTRTY = AS.TRTYType.CashPurchase;
                    this.IdPrefixed = BS.GetPrefixId(CashPurchForm.formKey);
                    this.form = new CashPurchForm(this.IdPrefixed);
                    break;
                case AS.TRTYType.Purchase:
                    this.SelectTRTY = AS.TRTYType.Purchase;
                    this.IdPrefixed = BS.GetPrefixId(PurchaseForm.formKey);
                    this.form = new PurchaseForm(this.IdPrefixed);
                    break;
                case AS.TRTYType.CashRestore:
                    this.SelectTRTY = AS.TRTYType.CashRestore;
                    this.IdPrefixed = BS.GetPrefixId(CashRestoreForm.formKey);
                    this.form = new CashRestoreForm(this.IdPrefixed);
                    break;
                case AS.TRTYType.RestorePurch:
                    this.SelectTRTY = AS.TRTYType.RestorePurch;
                    this.IdPrefixed = BS.GetPrefixId(RestorePurchaseForm.formKey);
                    this.form = new RestorePurchaseForm(this.IdPrefixed);
                    break;
                case AS.TRTYType.CashSales:
                    this.SelectTRTY = AS.TRTYType.CashSales;
                    this.IdPrefixed = BS.GetPrefixId(CashSalesForm.formKey);
                    this.form = new CashSalesForm(this.IdPrefixed);
                    break;
                case AS.TRTYType.Sales:
                    this.SelectTRTY = AS.TRTYType.Sales;
                    this.IdPrefixed = BS.GetPrefixId(SalesForm.formKey);
                    this.form = new SalesForm(this.IdPrefixed);
                    break;
                case AS.TRTYType.CashReturn:
                    this.SelectTRTY = AS.TRTYType.CashReturn;
                    this.IdPrefixed = BS.GetPrefixId(CashReturnForm.formKey);
                    this.form = new CashReturnForm(this.IdPrefixed);
                    break;
                case AS.TRTYType.ReturnSales:
                    this.SelectTRTY = AS.TRTYType.ReturnSales;
                    this.IdPrefixed = BS.GetPrefixId(ReturnSalesForm.formKey);
                    this.form = new ReturnSalesForm(this.IdPrefixed);
                    break;
                case AS.TRTYType.AddInventory:
                    this.SelectTRTY = AS.TRTYType.AddInventory;
                    break;
                case AS.TRTYType.RemoveInventory:
                    this.SelectTRTY = AS.TRTYType.RemoveInventory;
                    break;

                case AS.TRTYType.CashReceive:
                    this.SelectTRTY = AS.TRTYType.CashReceive;
                    this.IdPrefixed = BS.GetPrefixId(CashReceiveForm.formKey);
                    this.form = new CashReceiveForm(this.IdPrefixed);
                    break;

                case AS.TRTYType.CashPayed:
                    this.SelectTRTY = AS.TRTYType.CashPayed;
                    this.IdPrefixed = BS.GetPrefixId(CashPayedForm.formKey);
                    this.form = new CashPayedForm(this.IdPrefixed);
                    break;

                default:
                    break;
            }

            var grid = this.slickGrid;
            grid.onSelectedRowsChanged.subscribe(() => {
                var selectedRow = grid.getSelectedRows()[0];
                var ACCMFRow: ACCMFRow = grid.getDataItem(selectedRow);

                if (ACCMFRow != null || ACCMFRow.ID > 0) {
                    this.form.ACC_NO.value = ACCMFRow.ACC_NO;
                    this.form.ACC_NAME.value = ACCMFRow.ACC_NM_AR;
                }

                this.element.closest(".ui-dialog").find(".ui-dialog-titlebar-close").click();

            });
        }

      

        protected getInitialTitle() {
            return null;
        }

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }
        protected onViewSubmit() {

            if (!super.onViewSubmit()) {
                return false;
            }

            var request = this.view.params as Serenity.ListRequest;
          
            request.Criteria = Serenity.Criteria.and(request.Criteria, [[FLD.Status], '>', 0],request.Criteria, [[FLD.ACC_TY], '=', 2],
            Serenity.Criteria.or(request.Criteria, [[FLD.REC_ID], '=', 3],request.Criteria, [[FLD.REC_ID], '=', 4]));
            return true;
        }


    }
}