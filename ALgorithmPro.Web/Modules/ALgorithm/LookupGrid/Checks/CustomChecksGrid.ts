/// <reference path="../../Checks/ChecksGrid.ts" />

namespace ALgorithmPro.ALgorithm {

    import FLD = ALgorithm.ChecksRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CustomChecksGrid extends ChecksGrid {
        protected getColumnsKey() { return 'ALgorithm.Checks'; }
        protected getDialogType() { return ChecksDialog; }
        protected getIdProperty() { return ChecksRow.idProperty; }
        protected getInsertPermission() { return ChecksRow.insertPermission; }
        protected getLocalTextPrefix() { return ChecksRow.localTextPrefix; }
        protected getService() { return ChecksService.baseUrl; }
        protected Checksform: CheckTRForm;
        public IdPrefixed: string;

        constructor(container: JQuery) {
            super(container);


            this.IdPrefixed = BS.GetPrefixId(CheckTRForm.formKey);
            this.Checksform = new CheckTRForm(this.IdPrefixed);

            var grid = this.slickGrid;
            grid.onSelectedRowsChanged.subscribe(() => {
                var selectedRow = grid.getSelectedRows()[0];
                var ChecksRow: ALgorithm.ChecksRow = grid.getDataItem(selectedRow);

                if (ChecksRow != null || ChecksRow.ID > 0) {
                    this.Checksform.CHK_NO.value = ChecksRow.CHK_NO;
                    this.Checksform.CHK_TYP.value = ChecksRow.CHK_TYP.toString();
                    this.Checksform.Doc_TYP.value = ChecksRow.DOC_TYP.toString();
                    this.Checksform.StoreID.value = ChecksRow.StoreID;
                    this.Checksform.TRTY_NAME.value = ChecksRow.TRTY_NAME;
                    this.Checksform.ACC_NO.value = ChecksRow.ACC_NO;
                    this.Checksform.ACC_NAME.value = ChecksRow.ACC_NAME;
                    this.Checksform.Notes_ACCID.value = ChecksRow.Notes_ACCNO;
                    this.Checksform.Notes_ACCNAME.value = ChecksRow.Notes_ACCNAME;
                    this.Checksform.ACC_NO2.value = ChecksRow.Notes_ACCNO;
                    this.Checksform.ACC_NAME2.value = ChecksRow.Notes_ACCNAME;
                    this.Checksform.AMT.value = ChecksRow.AMT;
                    this.Checksform.AMT_PAID.value = ChecksRow.AMT_PAID;
                    this.Checksform.TotalValue.value = ChecksRow.TotalValue;
                    this.Checksform.ExpenseValue.value = ChecksRow.ExpenseValue;
                    this.Checksform.ISU_DT.value = ChecksRow.ISU_DT;
                    this.Checksform.DUE_DT.value = ChecksRow.DUE_DT;
                    this.Checksform.BNKID.value = ChecksRow.BNKID;
                    this.Checksform.BNK_NAME.value = ChecksRow.BNK_NAME;
                    this.Checksform.CBNKID.value = ChecksRow.CBNKID;
                    this.Checksform.CBNK_NAME.value = ChecksRow.CBNK_NAME;
                    this.Checksform.DEPT_BNKID.value = ChecksRow.DEPT_BNKID;
                    this.Checksform.DEPT_BNKNM.value = ChecksRow.DEPT_BNKNM;
                    this.Checksform.RPACC_NO.value = ChecksRow.RPACC_NO;
                    this.Checksform.RPACC_NAME.value = ChecksRow.RPACC_NAME;
                    this.Checksform.REP_CD.value = ChecksRow.Rep_CD;
                    this.Checksform.REP_NAME.value = ChecksRow.Rep_NAME;
                    this.Checksform.CRDB.value = ChecksRow.CRDB;
                    this.Checksform.CurrencyID.value = ChecksRow.CurrencyID;
                    this.Checksform.Currency_NAME.value = ChecksRow.Currency_NAME;
                    this.Checksform.CashBoxID.value = ChecksRow.CashBoxID;
                    this.Checksform.Cash_NAME.value = ChecksRow.Cash_NAME;
                    this.Checksform.STAT.value = this.Checksform.TR_TY.value;
                    this.Checksform.CUR_VL.value = ChecksRow.CUR_VL;
                    this.Checksform.RATE.value = ChecksRow.RATE;
                    this.Checksform.DIFF_VL.value = ChecksRow.AMT - ChecksRow.AMT_PAID;
                    this.Checksform.File_NO.value = ChecksRow.File_NO;
                    this.Checksform.TR_NO.value = ChecksRow.TR_NO;
                    this.Checksform.SER_NO.value = ChecksRow.TR_NO;
                    this.Checksform.Store_NAME.value = ChecksRow.Store_NAME;
                }

                this.element.closest(".ui-dialog").find(".ui-dialog-titlebar-close").click();

            });
        }
        protected getInitialTitle() {
            return null;
        }

        protected onViewSubmit() {

            if (!super.onViewSubmit()) {
                return false;
            }
            var request = this.view.params as Serenity.ListRequest;
            request.Criteria = Serenity.Criteria.and(request.Criteria, [[FLD.Status], '>', 0]);
            return true;
        }


    }
}