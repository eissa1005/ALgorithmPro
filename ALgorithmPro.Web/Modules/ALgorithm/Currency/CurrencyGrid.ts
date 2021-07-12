
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CurrencyGrid extends AS.GridBase<CurrencyRow, any> {
        protected getColumnsKey() { return 'ALgorithm.Currency'; }
        protected getDialogType() { return CurrencyDialog; }
        protected getIdProperty() { return CurrencyRow.idProperty; }
        protected getInsertPermission() { return CurrencyRow.insertPermission; }
        protected getLocalTextPrefix() { return CurrencyRow.localTextPrefix; }
        protected getService() { return CurrencyService.baseUrl; }

        public static isEditedFlag = 'isEdited';

        constructor(container: JQuery) {
            super(container);

            this.slickGrid.onCellChange.subscribe((e, args) => {
                let item = args.item as ALgorithm.CurrencyRow;
                item[CurrencyGrid.isEditedFlag] = true;
                this.view.updateItem(item[this.getIdProperty()], item);
            });

            this.slickGrid.onBeforeEditCell.subscribe((e, args) => {
                let item = args.item as ALgorithm.CurrencyRow;
                let column = args.column as Slick.Column;

            });

        }
        protected getItemCssClass(item: ALgorithm.CurrencyRow, index: number): string {
            let klass: string = "";
            let IsEdited = item[CurrencyGrid.isEditedFlag] as boolean;
            if (!IsEdited) {
                IsEdited = false;
            }

            if (IsEdited == true) {
                klass += " text-bold";
            }
            return Q.trimToNull(klass);
        }


        protected getSlickOptions() {
            let opt = super.getSlickOptions();
            opt.editable = true;
            opt.autoEdit = true;
            return opt;
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons.push({
                title: 'Save',
                cssClass: 'apply-changes-button',
                onClick: e => {
                    (this.slickGrid as any).getEditController().commitCurrentEdit();

                    var items = this.view.getItems().filter(q => q[CurrencyGrid.isEditedFlag] == true);
                    items.forEach(item => {
                        if (item['RowNum'])
                            delete item['RowNum'];
                        if (item[CurrencyGrid.isEditedFlag])
                            delete item[CurrencyGrid.isEditedFlag];

                        ALgorithm.CurrencyService.Update({ EntityId: item.ID, Entity: item },
                            response => {
                                Q.notifySuccess("Success !");
                            }
                        );
                    })
                },
                separator: true
            });
            return buttons;
        }
    }
}