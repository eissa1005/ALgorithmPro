
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class REPSGrid extends AS.GridBase<REPSRow, any> {
        protected getColumnsKey() { return 'ALgorithm.REPS'; }
        protected getDialogType() { return REPSDialog; }
        protected getIdProperty() { return REPSRow.idProperty; }
        protected getInsertPermission() { return REPSRow.insertPermission; }
        protected getLocalTextPrefix() { return REPSRow.localTextPrefix; }
        protected getService() { return REPSService.baseUrl; }

        public static isEditedFlag = 'isEdited';

        constructor(container: JQuery) {
            super(container);

            this.slickGrid.onCellChange.subscribe((e, args) => {
                let item = args.item as ALgorithm.REPSRow;
                item[REPSGrid.isEditedFlag] = true;
                this.view.updateItem(item[this.getIdProperty()], item);
            });

            this.slickGrid.onBeforeEditCell.subscribe((e, args) => {
                let item = args.item as ALgorithm.REPSRow;
                let column = args.column as Slick.Column;

            });

        }

        protected getItemCssClass(item: ALgorithm.REPSRow, index: number): string {
            let klass: string = "";
            let IsEdited = item[REPSGrid.isEditedFlag] as boolean;
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

                    var items = this.view.getItems().filter(q => q[REPSGrid.isEditedFlag] == true);
                    items.forEach(item => {
                        if (item['RowNum'])
                            delete item['RowNum'];
                        if (item[REPSGrid.isEditedFlag])
                            delete item[REPSGrid.isEditedFlag];

                        ALgorithm.REPSService.Update({ EntityId: item.ID, Entity: item },
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
        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }
    }
}