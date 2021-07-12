﻿/// <reference path="../../SSUMS/SSUMSGrid.ts" />

namespace ALgorithmPro.ALgorithm {

    import FLD = ACCMFRow.Fields;
    @Serenity.Decorators.registerClass()
    export class AZSSUMSGrid extends SSUMSGrid {
        protected getColumnsKey() { return 'ALgorithm.SSUMS'; }
        protected getDialogType() { return SSUMSDialog; }
        protected getIdProperty() { return SSUMSRow.idProperty; }
        protected getInsertPermission() { return SSUMSRow.insertPermission; }
        protected getLocalTextPrefix() { return SSUMSRow.localTextPrefix; }
        protected getService() { return SSUMSService.baseUrl; }
        public SelectTRTY: AS.TRTYType;
        protected form: any;
        public IdPrefixed: string;
       

        constructor(container: JQuery) {
            super(container);

            switch (AZSSUMSDialog.SelectTRTY) {
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
                    this.IdPrefixed = BS.GetPrefixId(CashRestoreASTRHForm.formKey);
                    this.form = new CashRestoreASTRHForm(this.IdPrefixed);
                    break;
                case AS.TRTYType.RestorePurch:
                    this.SelectTRTY = AS.TRTYType.RestorePurch;
                    this.IdPrefixed = BS.GetPrefixId(RestoreASTRHForm.formKey);
                    this.form = new RestoreASTRHForm(this.IdPrefixed);
                    break;
                case AS.TRTYType.CashSales:
                    this.SelectTRTY = AS.TRTYType.CashSales;
                    this.IdPrefixed = BS.GetPrefixId(CashSalesASTRHForm.formKey);
                    this.form = new CashSalesASTRHForm(this.IdPrefixed);
                    break;
                case AS.TRTYType.Sales:
                    this.SelectTRTY = AS.TRTYType.Sales;
                    this.IdPrefixed = BS.GetPrefixId(SalesASTRHForm.formKey);
                    this.form = new SalesASTRHForm(this.IdPrefixed);
                    break;
                case AS.TRTYType.CashReturn:
                    this.SelectTRTY = AS.TRTYType.CashReturn;
                    this.IdPrefixed = BS.GetPrefixId(CashReturnASTRHForm.formKey);
                    this.form = new CashReturnASTRHForm(this.IdPrefixed);
                    break;
                case AS.TRTYType.ReturnSales:
                    this.SelectTRTY = AS.TRTYType.ReturnSales;
                    this.IdPrefixed = BS.GetPrefixId(ReturnASTRHForm.formKey);
                    this.form = new ReturnASTRHForm(this.IdPrefixed);
                    break;
                case AS.TRTYType.AddInventory:
                    this.SelectTRTY = AS.TRTYType.AddInventory;
                    break;
                case AS.TRTYType.RemoveInventory:
                    this.SelectTRTY = AS.TRTYType.RemoveInventory;
                    break;

                default:
                    break;
            }

            var grid = this.slickGrid;
            grid.onSelectedRowsChanged.subscribe(() => {
                var selectedRow = grid.getSelectedRows()[0];
                var SSUMSRow: SSUMSRow = grid.getDataItem(selectedRow);

                if (SSUMSRow != null || SSUMSRow.ID > 0) {
                    this.form.SSUM_CD.value = SSUMSRow.SSUM_CD;
                    this.form.SSUM_NAME.value = SSUMSRow.SSUM_NM_AR;
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
          
            request.Criteria = Serenity.Criteria.and(request.Criteria, [[FLD.Status], '>', 0])
           
            return true;
        }


    }
}