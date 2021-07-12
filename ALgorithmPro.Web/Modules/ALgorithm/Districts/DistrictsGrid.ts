
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class DistrictsGrid extends AS.GridBase<DistrictsRow, any> {
        protected getColumnsKey() { return 'ALgorithm.Districts'; }
        protected getDialogType() { return DistrictsDialog; }
        protected getIdProperty() { return DistrictsRow.idProperty; }
        protected getInsertPermission() { return DistrictsRow.insertPermission; }
        protected getLocalTextPrefix() { return DistrictsRow.localTextPrefix; }
        protected getService() { return DistrictsService.baseUrl; }

        public static isEditedFlag = 'isEdited';

        constructor(container: JQuery) {
            super(container);

            this.slickGrid.onCellChange.subscribe((e, args) => {
                let item = args.item as ALgorithm.DistrictsRow;
                item[DistrictsGrid.isEditedFlag] = true;
                this.view.updateItem(item[this.getIdProperty()], item);
            });

            this.slickGrid.onBeforeEditCell.subscribe((e, args) => {
                let item = args.item as ALgorithm.DistrictsRow;
                let column = args.column as Slick.Column;

            });

        }

        protected getItemCssClass(item: ALgorithm.DistrictsRow, index: number): string {
            let klass: string = "";
            let IsEdited = item[DistrictsGrid.isEditedFlag] as boolean;
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

                    var items = this.view.getItems().filter(q => q[DistrictsGrid.isEditedFlag] == true);
                    items.forEach(item => {
                        if (item['RowNum'])
                            delete item['RowNum'];
                        if (item[DistrictsGrid.isEditedFlag])
                            delete item[DistrictsGrid.isEditedFlag];

                        ALgorithm.DistrictsService.Update({ EntityId: item.ID, Entity: item },
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