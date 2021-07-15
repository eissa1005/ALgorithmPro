
/// <reference path="../../../Common/Helpers/SelectableEntityGrid.ts" />

namespace ALgorithmPro.ALgorithm {

    import FLD = ItemsRow.Fields;
    @Serenity.Decorators.registerClass()
    export class ItemsLookupGrid extends SelectableEntityGrid<ItemsRow, any> {
        protected getColumnsKey() { return 'ALgorithm.Items'; }
        protected getDialogType() { return ItemsDialog; }
        protected getIdProperty() { return ItemsRow.idProperty; }
        protected getInsertPermission() { return ItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return ItemsRow.localTextPrefix; }
        protected getService() { return ItemsService.baseUrl; }
        public SelectTRTY: AS.TRTYType;
        public Grid: Slick.Grid;
        public One: number = 1;
        protected form: any;

        constructor(container: JQuery) {
            super(container);

            if (ItemsLookupDialog.SelectTRTY == AS.TRTYType.CashPurchase) {
                this.SelectTRTY = AS.TRTYType.CashPurchase;
                this.Grid = CashPurchASTRDEditor.GridName;
            }

            if (ItemsLookupDialog.SelectTRTY == AS.TRTYType.Purchase) {
                this.SelectTRTY = AS.TRTYType.Purchase;
                this.Grid = PurchASTRDEditor.GridName;
            }

            if (ItemsLookupDialog.SelectTRTY == AS.TRTYType.CashRestore) {
                this.SelectTRTY = AS.TRTYType.CashRestore;
                this.Grid = CashRestoreASTRDEditor.GridName;
            }
            //if (ItemsLookupDialog.SelectTRTY == AS.TRTYType.RestorePurch) {
            //    this.SelectTRTY = AS.TRTYType.RestorePurch;
            //    this.Grid = RestoreASTRDEditor.GridName;
            //}

            if (ItemsLookupDialog.SelectTRTY == AS.TRTYType.CashSales) {
                this.SelectTRTY = AS.TRTYType.CashSales;
                this.Grid = CashSalesASTRDEditor.GridName;
            }
            if (ItemsLookupDialog.SelectTRTY == AS.TRTYType.Sales) {
                this.SelectTRTY = AS.TRTYType.Sales;
                this.Grid = SalesASTRDEditor.GridName;
            }

            var grid = this.slickGrid;
            grid.onSelectedRowsChanged.subscribe(() => {

                var selectedRow = grid.getSelectedRows()[0];
                var ItemsRow: ItemsRow = grid.getDataItem(selectedRow);

                if (ItemsRow != null || ItemsRow.ID > 0) {

                    var CountRows = this.Grid.getDataLength();
                    if (CountRows == 0) {
                        this.SetDataGrid(this.Grid, ItemsRow);
                        this.Grid.render();
                    }
                    else {
                        if (BS.IsExistItem(this.Grid, ItemsRow)) {
                            Q.alert('This Items is already in ASTRD!');
                        } else {
                            this.SetDataGrid(this.Grid, ItemsRow);
                            this.Grid.render();
                        }
                    }
                }

                this.element.closest(".ui-dialog").find(".ui-dialog-titlebar-close").click();

            });
        }

        private SetDataGrid(grd: Slick.Grid, _row: ItemsRow) {

            if (AS.IsNullObject(_row)) return;
            var SumDisc = 0;
            var SumTAX = 0;
            var nextId: number = 1;
            var NewRow = new Array();
            var data = grd.getData();
            var RowsCount = grd.getDataLength();
            if (RowsCount == 0) {

                var row: ASTRD = new ASTRD();
                row.ID = 0;
                row.HeaderID = 0;
                row.DetailID = 0;
                row.RowNum = nextId;
                row.Item_CD = _row.Item_CD;
                row.ITM_NM_AR = _row.Item_Name_AR;
                row.QTY = this.One;
                row.PKCST = _row.UCOST;
                row.ItemBAL = _row.ItemBAL;
                row.StoreID = _row.StoreID;

                switch (this.SelectTRTY) {
                    case AS.TRTYType.CashPurchase:
                    case AS.TRTYType.Purchase:
                    case AS.TRTYType.CashRestore:
                    case AS.TRTYType.RestorePurch:
                        row.Price = _row.PPRC2;
                        row.PKID = _row.PRCH_PK;
                        row.Value = _row.PPRC2 * this.One;
                        row.DISC1 = _row.PDISC1;
                        row.DISC2 = _row.PDISC2;
                        row.DISC3 = _row.PDISC3;
                        row.TAX1 = _row.TAX1;
                        row.TAX2 = _row.TAX2;
                        row.TAX3 = _row.TAX3;
                        SumDisc = AS.IsNull(row.DISC1) + AS.IsNull(row.DISC2) + AS.IsNull(row.DISC3);
                        row.NetBeforeTAX = row.Value - SumDisc;
                        SumTAX = AS.IsNull(row.TAX1) + AS.IsNull(row.TAX2) + AS.IsNull(row.TAX3);
                        row.NetAfterTAX = row.Value + SumTAX;
                        row.NET = row.Value + SumTAX - SumDisc;
                        break;

                    case AS.TRTYType.CashSales:
                    case AS.TRTYType.Sales:
                    case AS.TRTYType.CashReturn:
                    case AS.TRTYType.ReturnSales:
                        row.Price = _row.SPRC6;
                        row.PKID = _row.SLS_PK;
                        row.Value = _row.SPRC6 * this.One;
                        row.DISC1 = _row.SDISC1;
                        row.DISC2 = _row.SDISC2;
                        row.DISC3 = _row.SDISC3;
                        row.TAX1 = _row.TAX1;
                        row.TAX2 = _row.TAX2;
                        row.TAX3 = _row.TAX3;
                        SumDisc = AS.IsNull(row.DISC1) + AS.IsNull(row.DISC2) + AS.IsNull(row.DISC3);
                        row.NetBeforeTAX = row.Value - SumDisc;
                        SumTAX = AS.IsNull(row.TAX1) + AS.IsNull(row.TAX2) + AS.IsNull(row.TAX3);
                        row.NetAfterTAX = row.Value + SumTAX;
                        row.NET = row.Value + SumTAX - SumDisc;
                        break;

                    default:
                        break;
                }
                NewRow.push(row);
                grd.setData(NewRow, true);

            } else {
                var LNNO = RowsCount + 1;
                var row: ASTRD = new ASTRD();
                row.ID = 0;
                row.HeaderID = 0;
                row.DetailID = 0;
                row.RowNum = LNNO;
                row.Item_CD = _row.Item_CD;
                row.ITM_NM_AR = _row.Item_Name_AR;
                row.QTY = this.One;
                row.PKCST = _row.UCOST;
                row.ItemBAL = _row.ItemBAL;
                switch (this.SelectTRTY) {
                    case AS.TRTYType.CashPurchase:
                    case AS.TRTYType.Purchase:
                    case AS.TRTYType.CashRestore:
                    case AS.TRTYType.RestorePurch:
                        row.Price = _row.PPRC2;
                        row.PKID = _row.PRCH_PK;
                        row.Value = _row.PPRC2 * this.One;
                        row.DISC1 = _row.PDISC1;
                        row.DISC2 = _row.PDISC2;
                        row.DISC3 = _row.PDISC3;
                        row.TAX1 = _row.TAX1;
                        row.TAX2 = _row.TAX2;
                        row.TAX3 = _row.TAX3;
                        SumDisc = AS.IsNull(row.DISC1) + AS.IsNull(row.DISC2) + AS.IsNull(row.DISC3);
                        row.NetBeforeTAX = row.Value - SumDisc;
                        SumTAX = AS.IsNull(row.TAX1) + AS.IsNull(row.TAX2) + AS.IsNull(row.TAX3);
                        row.NetAfterTAX = row.Value + SumTAX;
                        row.NET = row.Value + SumTAX - SumDisc;
                        break;

                    case AS.TRTYType.CashSales:
                    case AS.TRTYType.Sales:
                    case AS.TRTYType.CashReturn:
                    case AS.TRTYType.ReturnSales:
                        SumDisc = 0;
                        SumTAX = 0;
                        row.Price = _row.SPRC6;
                        row.PKID = _row.SLS_PK;
                        row.Value = _row.SPRC6 * this.One;
                        row.DISC1 = _row.SDISC1;
                        row.DISC2 = _row.SDISC2;
                        row.DISC3 = _row.SDISC3;
                        SumDisc = AS.IsNull(row.DISC1) + AS.IsNull(row.DISC2) + AS.IsNull(row.DISC3);
                        row.NetBeforeTAX = row.Value - SumDisc;
                        SumTAX = AS.IsNull(row.TAX1) + AS.IsNull(row.TAX2) + AS.IsNull(row.TAX3);
                        row.NetAfterTAX = row.Value + SumTAX;
                        row.NET = row.Value + SumTAX - SumDisc;
                        break;

                    default:
                        break;
                }

                data.push(row);
               grd.setData(data, false);
            }
        }

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }

        protected onViewSubmit() {

            if (!super.onViewSubmit()) {
                return false;
            }

            var request = this.view.params as Serenity.ListRequest;
            request.Criteria = Serenity.Criteria.and(
                request.Criteria, [[FLD.Status], '>', 0]);
            return true;
        }

    }
}