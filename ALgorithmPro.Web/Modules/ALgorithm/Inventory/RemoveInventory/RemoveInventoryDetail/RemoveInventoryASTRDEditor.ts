/// <reference path="../../../../ALgorithmsys/Editors/GridBaseEditor.ts" />

namespace ALgorithmPro.ALgorithm {

    import FLD = ALgorithmPro.ALgorithm.RemoveInventoryASTRDRow.Fields;

    @Serenity.Decorators.registerClass()
    export class RemoveInventoryASTRDEditor extends AS.GridBaseEditor<RemoveInventoryASTRDRow> {
        protected getColumnsKey() { return 'ALgorithm.RemoveInventoryASTRD'; }
        protected getDialogType() { return RemoveInventoryASTRDDialog; }
        protected getLocalTextPrefix() { return RemoveInventoryASTRDRow.localTextPrefix; }

        public static GridName: Slick.Grid;
        protected form: RemoveInventoryForm;
        public static isEditedFlag = 'isEdited';

        constructor(container: JQuery) {
            super(container);

            var SelectTRTY: AS.TRTYType;
            var PrefixId = BS.GetPrefixId(RemoveInventoryForm.formKey);
            this.form = new RemoveInventoryForm(PrefixId);

            // KeyDown 👈
            this.slickGrid.onKeyDown.subscribe((e) => {
                if (e.keyCode == AS.KeyCode.F2) {

                    RemoveInventoryASTRDEditor.GridName = this.slickGrid;
                    SelectTRTY = AS.TRTYType.AddInventory;
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
                    SelectTRTY = AS.TRTYType.AddInventory;
                    RemoveInventoryASTRDEditor.GridName = this.slickGrid;
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
                var grd = args.grid as Slick.Grid;
                var row = args.item;
                var cell = args.cell;
                var index = args.row;
                var columns = grd.getColumns();
                var field = columns[cell].field;
                if (field == FLD.PKID) {
                    BS.PackageChange(grd, field, index, row);
                }
                BS.UpdateGrid(grd, index, row);
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
                RemoveInventoryDialog.OldValue = oldValue;
                RemoveInventoryDialog.NewValue = NewValue;

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

        protected getItemCssClass(item: ALgorithm.RemoveInventoryASTRDRow, index: number): string {

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
        protected validateEntity(row) {

            var GRD = this.slickGrid;
            if (AS.IsNullObject(row)) return true;

            let RowsCount = GRD.getDataLength();

            if (row == null) return true;

            if (RowsCount == 0) {
                Q.alert("At least one Row must be registered");
                return true;
            }

            if (AS.IsNullValue(row.Item_CD)) {
                Q.alert("Item ISNULL ");
                return true;
            }
            
            if (AS.IsNullValue(row.ITM_NM_AR)) {
                Q.alert("Item Name ISNULL ");
                return true;
            }

            if (row.QTY == 0) {
                Q.alert("Quantity must be Gertter Than Zero");
                return true;
            }
            if (row.Price == 0) {
                Q.alert("Price must be Gertter Than Zero");
                return true;
            }

            if (row.Value == 0) {
                Q.alert("Value must be Gertter Than Zero");
                return true;
            }
            if (row.NET == 0) {
                Q.alert("NET must be Gertter Than Zero");
                return true;
            }
           
            return false;
        }

        // Clear Footer 👈
        private ClearFooter() {
            this.form.Total.value = 0;
            this.form.SQTY.value = 0;
        }
        // Update Footer 👈
        private UpdateFooter() {

            var grid = this.slickGrid as Slick.Grid;
            var ASTRD = this.slickGrid.getData(); // 👈 Rows Of Grid
            var RowCount = grid.getDataLength();
            if (!AS.IsNullObject(ASTRD)) {
                if (RowCount > 0) {
                    var total = AS.Sum(ASTRD, FLD.Value);
                    var Total = Q.round(total, 0);
                    var NET = Total;
                    var SumQTY = AS.Sum(ASTRD, FLD.QTY);
                    this.form.NetTotal.value = Q.round(NET, 0);
                    this.form.SQTY.value = AS.IsNull(SumQTY, 1);

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