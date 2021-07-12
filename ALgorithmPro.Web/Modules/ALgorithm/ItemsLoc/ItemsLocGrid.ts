namespace ALgorithmPro.ALgorithm {

    import FLD = ItemsLocRow.Fields;
    
    @Serenity.Decorators.registerClass()
    export class ItemsLocGrid extends AS.GridBase<ItemsLocRow, any> {
        protected getColumnsKey() { return 'ALgorithm.ItemsLoc'; }
        protected getDialogType() { return ItemsLocDialog; }
        protected getIdProperty() { return ItemsLocRow.idProperty; }
        protected getInsertPermission() { return ItemsLocRow.insertPermission; }
        protected getLocalTextPrefix() { return ItemsLocRow.localTextPrefix; }
        protected getService() { return ItemsLocService.baseUrl; }
       
        public static isEditedFlag = 'isEdited';

        constructor(container: JQuery) {
            super(container);

            this.slickGrid.onCellChange.subscribe((e, args) => {
                let item = args.item as ALgorithm.ItemsLocRow;
                item[ItemsLocGrid.isEditedFlag] = true;
                this.view.updateItem(item[this.getIdProperty()], item);
            });

            this.slickGrid.onBeforeEditCell.subscribe((e, args) => {
                let item = args.item as ALgorithm.ItemsLocRow;
                let column = args.column as Slick.Column;
              

            });

        }
        protected getItemCssClass(item: ALgorithm.ItemsLocRow, index: number): string {
            let klass: string = "";
            let IsEdited = item[ItemsLocGrid.isEditedFlag] as boolean;
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

                    var items = this.view.getItems().filter(q => q[ItemsLocGrid.isEditedFlag] == true);
                    items.forEach(item => {
                        if (item['RowNum'])
                            delete item['RowNum'];
                        if (item[ItemsLocGrid.isEditedFlag])
                            delete item[ItemsLocGrid.isEditedFlag];

                        ALgorithm.ItemsLocService.Update({ EntityId: item.ID, Entity: item },
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