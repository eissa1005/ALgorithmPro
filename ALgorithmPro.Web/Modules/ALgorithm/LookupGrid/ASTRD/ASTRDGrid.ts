
/// <reference path="../../../Common/Helpers/SelectableEntityGrid.ts" />

namespace ALgorithmPro.ALgorithm {

    import FLD = ASTRDVIEWRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ASTRDGrid extends SelectableEntityGrid<ASTRDVIEWRow, any> {
        protected getColumnsKey() { return 'ALgorithmPro.ASTRDVIEW'; }
        protected getDialogType() { return ASTRDDialog; }
        protected getIdProperty() { return ASTRDVIEWRow.idProperty; }
        protected getInsertPermission() { return ASTRDVIEWRow.insertPermission; }
        protected getLocalTextPrefix() { return ASTRDVIEWRow.localTextPrefix; }
        protected getService() { return ASTRDVIEWService.baseUrl; }

        public SelectTRTY: AS.TRTYType;
        public Grid: Slick.Grid;
        public ReferenceNumer: number;
        protected form: any;
        public IdPrefix: string;

        constructor(container: JQuery) {
            super(container);

            if (ASTRDDialog.SelectTRTY == AS.TRTYType.CashRestore) {
                this.SelectTRTY = AS.TRTYType.CashRestore;
                this.Grid = CashRestoreASTRDEditor.GridName;
                this.ReferenceNumer = ASTRDDialog.ReferenceNumer;
                this.IdPrefix = BS.GetPrefixId(CashRestoreForm.formKey);
                this.form = new CashRestoreForm(this.IdPrefix);

            }

            var grid = this.slickGrid;
            grid.onSelectedRowsChanged.subscribe(() => {
                var selectedRow = grid.getSelectedRows()[0];
                var ASTRDRow: ASTRDVIEWRow = grid.getDataItem(selectedRow);

                if (ASTRDRow != null || ASTRDRow.HeaderID > 0) {

                    var CountRows = this.Grid.getDataLength();
                    if (CountRows == 0) {
                        this.SetDataGrid(this.Grid, ASTRDRow);
                        this.Grid.render();
                    }
                    else {
                        if (BS.IsExistItem(this.Grid, ASTRDRow)) {
                            Q.alert('This Items is already in ASTRD!');
                        }
                        else {
                            this.SetDataGrid(this.Grid, ASTRDRow);
                            this.Grid.render();
                        }
                    }
                }

                this.element.closest(".ui-dialog").find(".ui-dialog-titlebar-close").click();

            });
        }

        private SetDataGrid(grd: Slick.Grid, ASTRDVIEW: ASTRDVIEWRow) {

            if (AS.IsNullObject(ASTRDVIEW)) return;
            var SumDisc = 0;
            var SumTAX = 0;
            var data = grd.getData();

            switch (this.SelectTRTY) {
                case AS.TRTYType.CashRestore:
                case AS.TRTYType.RestorePurch:
                    var row: ASTRD = new ASTRD();
                    row.ID = 0;
                    row.HeaderID = ASTRDVIEW.HeaderID;
                    row.TR_TY = ASTRDVIEW.TR_TY;
                    row.RowNum = ASTRDVIEW.LN_NO;
                    row.Item_CD = ASTRDVIEW.Item_CD;
                    row.ITM_NM_AR = ASTRDVIEW.Item_Name_AR;
                    row.PKID = ASTRDVIEW.PKID;
                    row.PK = ASTRDVIEW.PK;
                    row.QTY = ASTRDVIEW.QTY;
                    row.RestoreQty = 0;
                    row.Price = ASTRDVIEW.Price;
                    row.Value = ASTRDVIEW.Value;
                    row.DISC1 = ASTRDVIEW.DISC1;
                    row.DISC2 = ASTRDVIEW.DISC2;
                    row.DISC3 = ASTRDVIEW.DISC3;
                    SumDisc = ASTRDVIEW.DISC1 + ASTRDVIEW.DISC2 + ASTRDVIEW.DISC3;
                    row.NetBeforeTAX = row.Value - SumDisc;
                    row.TAX1 = ASTRDVIEW.TAX1;
                    row.TAX2 = ASTRDVIEW.TAX2;
                    row.TAX3 = ASTRDVIEW.TAX3;
                    SumTAX = ASTRDVIEW.TAX1 + ASTRDVIEW.TAX2 + ASTRDVIEW.TAX3;
                    row.NetAfterTAX = ASTRDVIEW.Value + SumTAX;
                    row.NET = ASTRDVIEW.Value + SumTAX - SumDisc;
                    row.PKCST = ASTRDVIEW.PKCST;
                    row.ItemBAL = ASTRDVIEW.ItemBAL;
                    break;
                case AS.TRTYType.CashReturn:
                case AS.TRTYType.ReturnSales:
                    var row: ASTRD = new ASTRD();
                    row.ID = 0;
                    row.HeaderID = ASTRDVIEW.HeaderID;
                    row.TR_TY = ASTRDVIEW.TR_TY;
                    row.RowNum = ASTRDVIEW.LN_NO;
                    row.Item_CD = ASTRDVIEW.Item_CD;
                    row.ITM_NM_AR = ASTRDVIEW.Item_Name_AR;
                    row.PKID = ASTRDVIEW.PKID;
                    row.PK = ASTRDVIEW.PK;
                    row.QTY = ASTRDVIEW.QTY;
                    row.ReturnQty = 0;
                    row.Price = ASTRDVIEW.Price;
                    row.Value = ASTRDVIEW.Value;
                    row.DISC1 = ASTRDVIEW.DISC1;
                    row.DISC2 = ASTRDVIEW.DISC2;
                    row.DISC3 = ASTRDVIEW.DISC3;
                    SumDisc = ASTRDVIEW.DISC1 + ASTRDVIEW.DISC2 + ASTRDVIEW.DISC3;
                    row.NetBeforeTAX = row.Value - SumDisc;
                    row.TAX1 = ASTRDVIEW.TAX1;
                    row.TAX2 = ASTRDVIEW.TAX2;
                    row.TAX3 = ASTRDVIEW.TAX3;
                    SumTAX = ASTRDVIEW.TAX1 + ASTRDVIEW.TAX2 + ASTRDVIEW.TAX3;
                    row.NetAfterTAX = ASTRDVIEW.Value + SumTAX;
                    row.NET = ASTRDVIEW.Value + SumTAX - SumDisc;
                    row.PKCST = ASTRDVIEW.PKCST;
                    row.ItemBAL = ASTRDVIEW.ItemBAL;
                    break;
            }

            data.push(row);
            grd.setData(data, false);
        }

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }

        protected onViewSubmit() {

            if (!super.onViewSubmit()) {
                return false;
            }

            if (this.SelectTRTY == AS.TRTYType.CashRestore) {

                var request = this.view.params as Serenity.ListRequest;
                var ACCNO = this.form.ACC_NO.value;
                if (this.ReferenceNumer > 0 && !AS.IsNullValue(ACCNO)) {
                    request.Criteria = Serenity.Criteria.and(
                    request.Criteria, [[FLD.TR_TY], '=', AS.TRTYType.CashPurchase],
                    request.Criteria, [[FLD.ReferenNumer], '=', this.ReferenceNumer],
                    request.Criteria, [[FLD.ACC_NO2], '=', ACCNO]);
                    return true;
                }
            }
            else if (this.SelectTRTY == AS.TRTYType.RestorePurch) {

                var request = this.view.params as Serenity.ListRequest;
                if (this.ReferenceNumer > 0) {
                    request.Criteria = Serenity.Criteria.and(
                        request.Criteria, [[FLD.TR_TY], '=', AS.TRTYType.Purchase],
                        request.Criteria, [[FLD.ReferenNumer], '=', this.ReferenceNumer]);
                    return true;
                } else {
                    request.Criteria = Serenity.Criteria.and(
                        request.Criteria, [[FLD.TR_TY], '=', AS.TRTYType.Purchase]);
                    return true;
                }
            }

            else if (this.SelectTRTY == AS.TRTYType.CashReturn) {

                var request = this.view.params as Serenity.ListRequest;
                if (this.ReferenceNumer > 0) {
                    request.Criteria = Serenity.Criteria.and(
                        request.Criteria, [[FLD.TR_TY], '=', AS.TRTYType.CashSales],
                        request.Criteria, [[FLD.ReferenNumer], '=', this.ReferenceNumer]);
                    return true;
                } else {
                    request.Criteria = Serenity.Criteria.and(
                        request.Criteria, [[FLD.TR_TY], '=', AS.TRTYType.CashSales]);
                    return true;
                }
            }

            else if (this.SelectTRTY == AS.TRTYType.ReturnSales) {

                var request = this.view.params as Serenity.ListRequest;
                if (this.ReferenceNumer > 0) {
                    request.Criteria = Serenity.Criteria.and(
                        request.Criteria, [[FLD.TR_TY], '=', AS.TRTYType.Sales],
                        request.Criteria, [[FLD.ReferenNumer], '=', this.ReferenceNumer]);
                    return true;
                } else {
                    request.Criteria = Serenity.Criteria.and(
                        request.Criteria, [[FLD.TR_TY], '=', AS.TRTYType.Sales]);
                    return true;
                }
            }

        }

    }
}