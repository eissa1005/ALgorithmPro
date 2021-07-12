/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ItemBarcodeEditor extends Common.GridEditorBase<ItemsBarcodeRow> {
        protected getColumnsKey() { return "ALgorithm.ItemsBarcode"; }
        protected getDialogType() { return ItemsBarcodeDialog; }
        protected getLocalTextPrefix() { return ItemsBarcodeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);

        }

        validateEntity(row, id) {

            row.Item_CD = Q.toId(row.Item_CD);
            var sameItems = Q.tryFirst(this.view.getItems(), x => x.Item_CD === row.Item_CD && x.PKID === row.PKID);
            if (sameItems && this.id(sameItems) !== id) {
                Q.alert('This Items is already in Packages!');
                return false;
            }

            return true;
        }

        //Override Columns
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();

            columns.unshift({
                field: 'Delete Row',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="delete">' +
                    '<i class="fa fa-trash-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            columns.splice(1, 0, {
                field: 'View Details',
                name: '',
                format: ctx => '<a class="inline-action view-details" title="view details">' +
                    '<i class="fa fa-search text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
            super.onClick(e, row, cell);

           // if (e.isDefaultPrevented()) return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('delete-row')) {
                    Q.confirm('Delete row ?', () => {
                        var id = this.id(item);  
                        this.view.deleteItem(id);
                    });
                }
                else if (target.hasClass('view-details')) {

                    var editRow = (('``' + (row) as unknown) as number);
                    var id = this.view.getIdxById(editRow);
                    if (id == null) {

                        editRow = (('`' + (row) as unknown) as number);
                        id = this.view.getIdxById(editRow);
                        if (id == null) {
                            editRow = row;
                            id = this.view.getIdxById(editRow);
                        }
                    }

                    //Edit Row !!!
                    this.createEntityDialog(this.getItemType(), dlg => {
                        var dialog = dlg as ItemsBarcodeDialog;
                        dialog.onDelete = (opt, callback) => {
                            if (!this.deleteEntity(editRow)) {
                                return;
                            }
                            callback({});
                        };

                        dialog.onSave = (opt, callback) => this.save(opt, callback);
                        dialog.loadEntityAndOpenDialog(item);
                    });;
                }
            }
        }
    }
}