/// <reference path="../../../../../ALgorithmsys/Editors/GridEditorBase.ts" />

namespace ALgorithmPro.ALgorithm {

    import FLD = ALgorithmPro.ALgorithm.SalesASTRDRow.Fields;
    @Serenity.Decorators.registerClass()
    export class SalesASTRDEditor extends AS.GridBaseEditor<SalesASTRDRow> {
        protected getColumnsKey() { return 'ALgorithm.SalesASTRD'; }
        protected getDialogType() { return SalesASTRDDialog; }
        protected getIdProperty() { return SalesASTRDRow.idProperty; }
        protected getInsertPermission() { return SalesASTRDRow.insertPermission; }
        protected getLocalTextPrefix() { return SalesASTRDRow.localTextPrefix; }
        protected getService() { return SalesASTRDService.baseUrl; }

        public static GridName: Slick.Grid;
        protected form: SalesForm;
        public static isEditedFlag = 'isEdited';

        constructor(container: JQuery) {
            super(container);

            var SelectTRTY: AS.TRTYType;
            var PrefixId = BS.GetPrefixId(SalesForm.formKey);
            this.form = new SalesForm(PrefixId);

            // KeyDown 👈
            this.slickGrid.onKeyDown.subscribe((e) => {
                if (e.keyCode == AS.KeyCode.F2) {

                    SalesASTRDEditor.GridName = this.slickGrid;
                    SelectTRTY = AS.TRTYType.Sales;
                    var dialog = new ItemsLookupDialog(SelectTRTY);
                    dialog.dialogOpen();
                }
            })

            // on Dbouble Click 👈
            this.slickGrid.onDblClick.subscribe((e, args) => {

                var grd = args.grid as Slick.Grid;
                var columns = grd.getColumns();
                var cell = args.cell;
                var field = columns[cell].field;
                if (field == FLD.Item_CD) {
                    SelectTRTY = AS.TRTYType.Purchase;
                    SalesASTRDEditor.GridName = this.slickGrid;
                    var dialog = new ItemsLookupDialog(SelectTRTY);
                    dialog.dialogOpen();
                }
            })

            // on Selected Rows Changed 👈
            this.slickGrid.setSelectionModel(new Slick.RowSelectionModel());
            this.slickGrid.onSelectedRowsChanged.subscribe((e, args) => {
                var grd = args.grid as Slick.Grid;
                var CountRows = grd.getDataLength();
                if (CountRows > 0) {
                    this.UpdateFooter();
                }
            });

            // onCellChange 👈
            this.slickGrid.onCellChange.subscribe((e, args) => {

                Q.getRemoteData
                var grd = args.grid as Slick.Grid;
                var row = args.item;
                var cell = args.cell;
                var index = args.row;
                var columns = grd.getColumns();
                var field = columns[cell].field;
                row.ItemBAL = BS.GetItemBAL(row.StoreID, row.Item_CD);
                BS.PackageChange(grd, field, index, row);
                BS.UpdateGrid(grd, index, row);
                var items = this.slickGrid.getData().slice();
                this.value = items;
                if (row) {
                    this.validateEntity(row);
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

                SalesDialog.OldValue = oldValue;
                SalesDialog.NewValue = NewValue;

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

        protected onItemsChanged(items: any) {

            if (items) {
                this.validateEntity(items);
                this.UpdateFooter();
            }
        }

        protected onBeforeGetValue(items) {

        }

        protected getItemCssClass(item: ALgorithm.SalesASTRDRow, index: number): string {

            let klass: string = "";
            klass += " text-bold";

            return Q.trimToNull(klass);
        }

        protected getSlickOptions() {

            let opt = super.getSlickOptions();
            opt.editable = true;
            opt.autoEdit = true;
            opt.enableAddRow = true;
            opt.enableCellNavigation = true;
            opt.enableColumnReorder = false;
            opt.enableCellRangeSelection = true;
            opt.syncColumnCellResize = true;
            return opt;
        }

        // validateEntity 👈
        protected validateEntity(row: SalesASTRDRow) {
           
            var Grid = this.slickGrid;
            if (AS.IsNullObject(row)) return true;
            let RATE = BS.GetCurrencyRAT(SalesDialog.OldValue, SalesDialog.NewValue);
            if (AS.IsNullValue(RATE)) RATE = 1;
            let value = AS.IsNull(row.Value) * RATE;
            let SumDisc = (AS.IsNull(row.DISC1) + AS.IsNull(row.DISC2) + AS.IsNull(row.DISC3)) * RATE;
            let SumTax = (AS.IsNull(row.TAX1) + AS.IsNull(row.TAX2) + AS.IsNull(row.TAX3)) * RATE;
            let NET = value + SumTax;
            let ItemBAL = BS.GetItemBAL(row.StoreID, row.Item_CD);

            if (row.QTY == 0) {
                Q.alert("Quantity Should Gertter Than Zero");
                return true;
            }
            if (row.Price == 0) {
                Q.alert("Price Should Gertter Than Zero");
                return true;
            }
            if (row.Value == 0) {
                Q.alert("Value Should Gertter Than Zero");
                return true;
            }
            if (SumDisc > row.Value) {
                Q.alert("Disc Should be Less Than Value");
                return true;
            }
            if (SumDisc > NET) {
                Q.alert("Disc Should be Less Than NET");
                return true;
            }
            if (!AS.IsNullValue(ItemBAL)) {
                if (ItemBAL < row.QTY) {
                    Q.alert("Item balance is not allowed");
                    Grid.invalidate();
                   
                    return true;
                }
            }
            return false;
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