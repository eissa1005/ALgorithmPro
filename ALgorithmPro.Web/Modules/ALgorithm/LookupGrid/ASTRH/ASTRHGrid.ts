/// <reference path="../../../Model/ASTRHVIEW/ASTRHVIEWGrid.ts" />

namespace ALgorithmPro.ALgorithm {

    import FLD = ALgorithmPro.Model.ASTRHVIEWRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ASTRHGrid extends ALgorithmPro.Model.ASTRHVIEWGrid {
        protected getColumnsKey() { return 'Model.ASTRHVIEW'; }
        protected getDialogType() { return ALgorithmPro.Model.ASTRHVIEWDialog; }
        protected getIdProperty() { return ALgorithmPro.Model.ASTRHVIEWRow.idProperty; }
        protected getLocalTextPrefix() { return ALgorithmPro.Model.ASTRHVIEWRow.localTextPrefix; }
        protected getService() { return ALgorithmPro.Model.ASTRHVIEWService.baseUrl; }
        public form: any;
        public IdPrefixed: string
        public SelectTRTY: AS.TRTYType;
      

        constructor(container: JQuery) {
            super(container);

            switch (ASTRHDialog.SelectTRTY) {

                case AS.TRTYType.CashPurchase:
                    this.SelectTRTY = AS.TRTYType.CashPurchase;
                    this.IdPrefixed = BS.GetPrefixId(CashRestoreForm.formKey);
                    this.form = new CashRestoreForm(this.IdPrefixed);
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

                default:
                    break;
            }

            var grid = this.slickGrid;

            grid.onSelectedRowsChanged.subscribe(() => {
                var selectedRow = grid.getSelectedRows()[0];
                var ASTRH: ALgorithmPro.Model.ASTRHVIEWRow = grid.getDataItem(selectedRow);

                if (ASTRH != null || ASTRH.HeaderID > 0) {

                    this.form.ReferenceNo.value = ASTRH.ReferenceNo;
                    this.form.ACC_NO.value = ASTRH.ACC_NO2;
                    this.form.ACC_NAME.value = ASTRH.ACC_NAME2;
                    this.form.CashBoxID.value = ASTRH.CashBoxID;
                    this.form.Cash_NAME.value = ASTRH.Cash_NAME;
                    this.form.REP_CD.value = ASTRH.REP_CD;
                    this.form.REP_NAME.value = ASTRH.REP_NAME;
                    this.form.REP_CD2.value = ASTRH.REP_CD2;
                    this.form.REP_NAME2.value = ASTRH.REP_NAME2;
                    this.form.CST_CD.value = ASTRH.CST_CD;
                    this.form.CST_NAME.value = ASTRH.CST_NAME;
                    this.form.PriceID.value = ASTRH.PriceID;

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


            if (this.SelectTRTY == AS.TRTYType.CashPurchase) {

                var request = this.view.params as Serenity.ListRequest;
                request.Criteria = Serenity.Criteria.and(
                    request.Criteria, [[FLD.Status], '>', 0],
                    request.Criteria, [[FLD.TR_TY], '=', AS.TRTYType.CashPurchase]);
                return true;
            }
            else if (this.SelectTRTY == AS.TRTYType.Purchase) {

                var request = this.view.params as Serenity.ListRequest;
                request.Criteria = Serenity.Criteria.and(
                    request.Criteria, [[FLD.Status], '>', 0],
                    request.Criteria, [[FLD.TR_TY], '=', AS.TRTYType.Purchase]);
                return true;
            }

            else if (this.SelectTRTY == AS.TRTYType.CashReturn) {

                var request = this.view.params as Serenity.ListRequest;
                request.Criteria = Serenity.Criteria.and(
                    request.Criteria, [[FLD.Status], '>', 0],
                    request.Criteria, [[FLD.TR_TY], '=', AS.TRTYType.CashReturn]);
                return true;
            }

            else if (this.SelectTRTY == AS.TRTYType.ReturnSales) {

                var request = this.view.params as Serenity.ListRequest;
                request.Criteria = Serenity.Criteria.and(
                    request.Criteria, [[FLD.Status], '>', 0],
                    request.Criteria, [[FLD.TR_TY], '=', AS.TRTYType.ReturnSales]);
                return true;
            }
           
        }
    }
}