/// <reference path="../../../../../ALgorithmsys/Editors/GridBaseEditor.ts" />

namespace ALgorithmPro.ALgorithm {

    import FLD = ALgorithmPro.ALgorithm.CashRestoreASTRDRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CashRestoreASTRDEditor extends AS.GridBaseEditor<CashRestoreASTRDRow> {
        protected getColumnsKey() { return 'ALgorithm.CashRestoreASTRD'; }
        protected getDialogType() { return CashRestoreASTRDDialog; }
        protected getIdProperty() { return CashRestoreASTRDRow.idProperty; }
        protected getInsertPermission() { return CashRestoreASTRDRow.insertPermission; }
        protected getLocalTextPrefix() { return CashRestoreASTRDRow.localTextPrefix; }
        protected getService() { return CashRestoreASTRDService.baseUrl; }

        public array = Array<object>();
        public static GridName: Slick.Grid;
        protected form: CashRestoreForm;
        public static isEditedFlag = 'isEdited';

        constructor(container: JQuery) {
            super(container);

            var SelectTRTY: AS.TRTYType;
            var PrefixId = BS.GetPrefixId(CashRestoreForm.formKey);
            this.form = new CashRestoreForm(PrefixId);

           
            // KeyDown 👈
            this.slickGrid.onKeyDown.subscribe((e) => {

                if (e.keyCode == AS.KeyCode.F2) {
                    var dialog;
                    SelectTRTY = AS.TRTYType.CashRestore;
                    CashRestoreASTRDEditor.GridName = this.slickGrid;
                    var ReferenNumer = this.form.ReferenceNo.value;
                    if (ReferenNumer > 0) {
                        dialog = new ASTRDDialog(SelectTRTY, ReferenNumer);
                        dialog.dialogOpen();
                    } else {
                        dialog = new ItemsLookupDialog(SelectTRTY);
                        dialog.dialogOpen();
                    }
                }
            })

            // on Dbouble Click 👈
            this.slickGrid.onDblClick.subscribe((e, args) => {

                var grd = args.grid as Slick.Grid;
                var columns = grd.getColumns();
                var cell = args.cell;
                var field = columns[cell].field;
                if (field == FLD.Item_CD) {
                    var dialog;
                    SelectTRTY = AS.TRTYType.CashRestore;
                    CashRestoreASTRDEditor.GridName = this.slickGrid;
                    var ReferenNumer = this.form.ReferenceNo.value;
                    if (ReferenNumer > 0) {
                        dialog = new ASTRDDialog(SelectTRTY, ReferenNumer);
                        dialog.dialogOpen();
                    } else {
                        dialog = new ItemsLookupDialog(SelectTRTY);
                        dialog.dialogOpen();
                    }
                }
            })

            // on Selected Rows Changed 👈
            this.slickGrid.setSelectionModel(new Slick.RowSelectionModel());
            this.slickGrid.onSelectedRowsChanged.subscribe((e, args) => {
                var grd = args.grid as Slick.Grid;
                var CountRows = grd.getDataLength();
                if (CountRows > 0) {
                    // this.UpdateFooter();
                }
            });

            // onCellChange 👈
            this.slickGrid.onCellChange.subscribe((e, args) => {

                var grd = args.grid as Slick.Grid;
                var row = args.item;
                var cell = args.cell;
                var index = args.row;
                var columns = grd.getColumns();
                var field = columns[cell].field;
                this.PackageChange(field, index, row);
                this.UpdateGrid(index, row);
                var items = this.slickGrid.getData().slice();
                this.value = items;
                if (row) {
                    // this.validateEntity(row);
                }
            });

            // Delete Row 👈
            this.slickGrid.onClick.subscribe((e, args) => {

                if (e.isDefaultPrevented()) return;
                var target = $(e.target);

                if (target.hasClass('delete-row')) {

                    // Delete record 
                    Q.confirm('Delete record?', () => {

                        var grid = this.slickGrid as Slick.Grid;
                        var data = grid.getData();
                        var currentRow = grid.getActiveCell().row;
                        data.splice(currentRow, 1);
                        var r = currentRow;
                        while (r < data.length) {
                            grid.invalidateRow(r);
                            r++;
                        }
                        grid.updateRowCount();
                        grid.render();
                        BS.ResetRowNumber(grid);
                        grid.invalidate();
                        this.UpdateFooter();
                    });
                }

            });

            // Currency Changed 👈
            this.form.CurrencyID.changeSelect2((e) => {

                var oldValue = e["removed"].id;
                var NewValue = e["added"].id;

                CashRestoreDialog.OldValue = oldValue;
                CashRestoreDialog.NewValue = NewValue;

                let RATE = 1;
                if (!AS.IsNullValue(oldValue) && !AS.IsNullValue(NewValue)) {
                    RATE = BS.GetCurrencyRAT(oldValue, NewValue);

                    this.form.RATE.value = Q.tryFirst(CurrencyRow.getLookup().items,
                        x => x.CurrencyID == NewValue).CUR_RAT;

                } else {
                    RATE = Q.tryFirst(CurrencyRow.getLookup().items, x => x.CurrencyID == NewValue).CUR_RAT;
                    this.form.RATE.value = RATE;
                }

                BS.UpdateGRD(this.slickGrid, RATE);
                this.UpdateFooter();
            })
        }


        protected getColumns() {
            var columns = super.getColumns();
            return columns;
        }

        protected onItemsChanged(items: any) {

            if (items) {
                this.validateEntity(items);
                this.UpdateFooter();
            }
        }

        protected onBeforeGetValue(items) {

        }

        protected getItemCssClass(item: ALgorithm.CashRestoreASTRDRow, index: number): string {

            let klass: string = "";
            klass += " text-bold";

            return Q.trimToNull(klass);
        }

        protected getSlickOptions() {

            let opt = super.getSlickOptions();
            opt.editable = true;
            opt.autoEdit = true;
            opt.enableAddRow = true;
            opt.enableCellRangeSelection = true;
            opt.syncColumnCellResize = true;
            return opt;
        }

        // validateEntity 👈
        protected validateEntity(row: CashRestoreASTRDRow) {

            if (AS.IsNullObject(row)) return true;
            var ASTRD: CashPurchASTRDRow;
            if (!AS.IsNullValue(this.form.ReferenceNo)) {
                var ACCNO = this.form.ACC_NO.value;
                var ReferenceNumber = this.form.ReferenceNo.value;
                ASTRD = Q.tryFirst(CashPurchASTRDRow.getLookup().items,
                        x => x.TR_TY == AS.TRTYType.CashPurchase && x.ACC_NO2 == ACCNO && x.TR_NO == ReferenceNumber)
            }
           
            let RATE = BS.GetCurrencyRAT(CashRestoreDialog.OldValue, CashRestoreDialog.NewValue);
            if (AS.IsNullValue(RATE)) RATE = 1;
            let value = AS.IsNull(row.Value) * RATE;
            let SumDisc = (AS.IsNull(row.DISC1) + AS.IsNull(row.DISC2) + AS.IsNull(row.DISC3)) * RATE;
            let SumTax = (AS.IsNull(row.TAX1) + AS.IsNull(row.TAX2) + AS.IsNull(row.TAX3)) * RATE;
            let NET = value + SumTax;
            let ItemBAL = BS.GetItemBAL(row.StoreID, row.Item_CD);

            if (row == null) return true;
            if (row.RestoreQty == 0) {
                Q.alert("Quantity must be Gertter Than Zero");
                return true;
            }

            if (row.RestoreQty > row.QTY) {
                Q.alert("The Quantity must be less than or equal to the Basic Quantity");
                return true;
            }
            if (row.Price == 0) {
                Q.alert("Price must be Gertter Than Zero");
                return true;
            }
            if (row.Value == 0) {
                Q.alert("The Value must be Gertter Than Zero");
                return true;
            }
            if (SumDisc > row.Value) {
                Q.alert("Disc must be be Less Than Value");
                return true;
            }
            if (SumDisc > NET) {
                Q.alert("Disc must be Less Than NET");
                return true;
            }
            if (!AS.IsNullValue(ItemBAL)) {
                if (ItemBAL < row.RestoreQty) {
                    Q.alert("Item balance is not allowed");
                    return true;
                }
            }
            if (!AS.IsNullObject(ASTRD)) {
                if (!AS.IsNullValue(ASTRD.Item_CD)) {
                    if (row.Item_CD !== ASTRD.Item_CD)
                        Q.alert("The Item is Not Found on the invoice");
                }

                if (!AS.IsNullValue(ASTRD.Price)) {
                    if (row.Price !== ASTRD.Price) {
                        Q.alert("The price is different from the price on the cashPurchase invoice");
                        var ActiveCell = this.slickGrid.getActiveCell();
                        var cell = ActiveCell.cell;
                        var rowss = ActiveCell.row;
                    }
                }
                if (!AS.IsNullValue(ASTRD.DISC1)) {
                    if (row.DISC1 !== ASTRD.DISC1)
                        Q.alert("The DISC1 is different from the disc1 on the invoice");
                }
                if (!AS.IsNullValue(ASTRD.DISC2)) {
                    if (row.DISC2 !== ASTRD.DISC2)
                        Q.alert("The DISC2 is different from the disc2 on the invoice");
                }
                if (!AS.IsNullValue(ASTRD.DISC3)) {
                    if (row.DISC3 !== ASTRD.DISC3)
                        Q.alert("The DISC3 is different from the disc3 on the invoice");
                }
                if (!AS.IsNullValue(ASTRD.TAX1)) {
                    if (row.TAX1 !== ASTRD.TAX1)
                        Q.alert("The TAX1 is different from the TAX1 on the invoice");
                }
                if (!AS.IsNullValue(ASTRD.TAX2)) {
                    if (row.TAX2 !== ASTRD.TAX2)
                        Q.alert("The TAX2 is different from the TAX2 on the invoice");
                }

            }
            return false;
        }

        //PackageChange
        private PackageChange(Field, index, items: CashRestoreASTRDRow) {

            if (AS.IsNullObject(items)) return;
            var FLD = ALgorithmPro.ASTRDVIEWRow;
            var item = items;

            if (Field == FLD.Fields.PKID) {

                var PKID = Q.toId(item.PKID);

                if (this.array.length == 0)
                    this.array.push(PKID);

                else if (this.array.length > 0) {
                    if (!AS.ContainKey(this.array, PKID)) {
                        this.array.push(PKID);
                    }
                }
                if (this.array.length == 1) {
                    var QTY = Q.toId(item.RestoreQty);
                    var Price = Q.toId(item.Price);
                    item.RestoreQty = QTY;
                    var newPrice: number;
                    var PK = Q.tryFirst(ALgorithmPro.ALgorithm.PackageRow.getLookup().items, x => x.PKID == PKID).PKCNT;
                    item.PK = PK;
                    if (Price != null && PK != null) {
                        newPrice = PK * Q.parseDecimal(Price)
                        item.Price = newPrice;
                        item.PKPRC = newPrice / PK;
                    }
                    item.Value = newPrice * Q.parseDecimal(QTY);
                    this.slickGrid.updateRow(index, item);
                    this.slickGrid.render();
                }
                else if (this.array.length > 1) {
                    var PKIDS = item.PKID;
                    var PK = Q.tryFirst(ALgorithmPro.ALgorithm.PackageRow.getLookup().items, x => x.PKID == PKIDS).PKCNT;
                    var FACT = Q.tryFirst(ALgorithmPro.ALgorithm.PackageRow.getLookup().items, x => x.PKID == PKIDS).FACT;
                    item.PK = PK;
                    var QTY = Q.toId(item.RestoreQty);
                    item.RestoreQty = QTY;
                    var Price = Q.toId(item.Price);
                    var newPrice: number;
                    if (Price != null && FACT != null) {
                        newPrice = FACT * Q.parseDecimal(Price)
                        newPrice = Q.round(newPrice, 0);
                        item.Price = newPrice;
                        item.PKPRC = newPrice / PK;
                    }

                    item.Value = newPrice * Q.parseDecimal(QTY);
                    this.slickGrid.updateRow(index, item);
                    this.slickGrid.render();
                }
            }
        }
        // UpdateGrid 
        private UpdateGrid(index, row: CashRestoreASTRDRow) {

            if (AS.IsNullObject(row)) return;
            var price = row.Price;
            var RestoreQty = AS.IsNull(row.RestoreQty);
            var value = RestoreQty * price;
            var DISC1 = AS.IsNull(row.DISC1);
            var DISC2 = AS.IsNull(row.DISC2);
            var DISC3 = AS.IsNull(row.DISC3);
            var SumDisc = DISC1 + DISC2 + DISC3;
            var TAX1 = AS.IsNull(row.TAX1);
            var TAX2 = AS.IsNull(row.TAX2);
            var TAX3 = AS.IsNull(row.TAX3);
            var SumTAX = TAX1 + TAX2 + TAX3;
            var PKID = row.PKID;
            var PK = Q.tryFirst(ALgorithmPro.ALgorithm.PackageRow.getLookup().items, x => x.PKID == PKID).PKCNT;
            row.PK = PK;
            row.Price = price;
            row.RestoreQty = RestoreQty;
            row.Value = value;
            row.DISC1 = DISC1;
            row.DISC2 = DISC2;
            row.DISC3 = DISC3;
            row.NetBeforeTAX = value - SumDisc;
            row.NetAfterTAX = value + SumTAX;
            row.NET = value + SumTAX - SumDisc;
            row.ItemBAL = BS.GetItemBAL(row.StoreID, row.Item_CD);
            this.slickGrid.updateRow(index, row);
            this.slickGrid.render();
        }

        // Clear Footer 👈
        private ClearFooter() {
            this.form.Total.value = 0;
            this.form.HDISC.value = 0;
            this.form.NetBeforeTAX.value = 0;
            this.form.HTAX.value = 0;
            this.form.NetAfterTAX.value = 0;
            this.form.NetTotal.value = 0;
            this.form.Paid.value = 0;
        }
        // Update Footer 👈
        private UpdateFooter() {

            var grid = this.slickGrid as Slick.Grid;
            var ASTRD = this.slickGrid.getData(); // 👈 Rows Of Grid
            var RowCount = grid.getDataLength();
            if (!AS.IsNullObject(ASTRD)) {
                if (RowCount > 0) {
                    var total = AS.Sum(ASTRD, FLD.Value);
                    var DISC1 = AS.Sum(ASTRD, FLD.DISC1);
                    var DISC2 = AS.Sum(ASTRD, FLD.DISC2);
                    var DISC3 = AS.Sum(ASTRD, FLD.DISC3);
                    var SumDISC = AS.IsNull(DISC1) + AS.IsNull(DISC2) + AS.IsNull(DISC3);
                    var NETBeforeTAX = AS.IsNull(total) - AS.IsNull(SumDISC);
                    var TAX1 = AS.Sum(ASTRD, FLD.TAX1);
                    var TAX2 = AS.Sum(ASTRD, FLD.TAX2);
                    var TAX3 = AS.Sum(ASTRD, FLD.TAX3);
                    var SumTAX = AS.IsNull(TAX1) + AS.IsNull(TAX2) + AS.IsNull(TAX3);
                    var NETAfterTAX = AS.IsNull(total) + AS.IsNull(SumTAX) - AS.IsNull(SumDISC);
                    var Adtional = Q.toId(this.form.HAddtions.value);
                    var Total = Q.round(total, 0);
                    var NET = Total + SumTAX - SumDISC + Adtional;
                    this.form.Total.value = Q.round(Total, 0);
                    this.form.HDISC.value = SumDISC;
                    this.form.NetBeforeTAX.value = Q.round(NETBeforeTAX, 0);
                    this.form.HTAX.value = SumTAX;
                    this.form.NetAfterTAX.value = Q.round(NETAfterTAX, 0);
                    this.form.NetTotal.value = Q.round(NET, 0);
                    this.form.Paid.value = Q.round(NET, 0);
                } else {
                    this.ClearFooter();
                }
            }
            if (RowCount == 0)
                this.ClearFooter();
        }

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();

        }
    }
}