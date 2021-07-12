
namespace ALgorithmPro.ALgorithm {

    import FLD = CitiesRow.Fields;
    @Serenity.Decorators.registerClass()
    export class CitiesGrid extends AS.GridBase<CitiesRow, any> {
        protected getColumnsKey() { return 'ALgorithm.Cities'; }
        protected getDialogType() { return CitiesDialog; }
        protected getIdProperty() { return CitiesRow.idProperty; }
        protected getInsertPermission() { return CitiesRow.insertPermission; }
        protected getLocalTextPrefix() { return CitiesRow.localTextPrefix; }
        protected getService() { return CitiesService.baseUrl; }

        public static isEditedFlag = 'isEdited';

        constructor(container: JQuery) {
            super(container);

            this.slickGrid.onCellChange.subscribe((e, args) => {
                let item = args.item as ALgorithm.CitiesRow;
                item[CitiesGrid.isEditedFlag] = true;
                this.view.updateItem(item[this.getIdProperty()], item);
            });

            this.slickGrid.onBeforeEditCell.subscribe((e, args) => {
                let item = args.item as ALgorithm.CitiesRow;
                let column = args.column as Slick.Column;
               
            });

        }
        protected getItemCssClass(item: ALgorithm.CitiesRow, index: number): string {
            let klass: string = "";
            let IsEdited = item[CitiesGrid.isEditedFlag] as boolean;
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

                    var items = this.view.getItems().filter(q => q[CitiesGrid.isEditedFlag] == true);
                    items.forEach(item => {
                        if (item['RowNum'])
                            delete item['RowNum'];
                        if (item[CitiesGrid.isEditedFlag])
                            delete item[CitiesGrid.isEditedFlag];

                        ALgorithm.CitiesService.Update({ EntityId: item.ID, Entity: item },
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