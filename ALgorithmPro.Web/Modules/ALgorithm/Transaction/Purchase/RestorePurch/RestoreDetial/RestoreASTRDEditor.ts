/// <reference path="../../../../../ALgorithmsys/Editors/GridEditorBase.ts" />
/// <reference path="../../../../../ALgorithmsys/Editors/GridEditorBase.ts" />

namespace ALgorithmPro.ALgorithm {

    import FLD = ALgorithmPro.ALgorithm.RestoreASTRDRow.Fields;
    @Serenity.Decorators.registerClass()
    export class RestoreASTRDEditor extends AS.GridEditorBase<RestoreASTRDRow> {
        protected getColumnsKey() { return 'ALgorithm.RestoreASTRD'; }
        protected getDialogType() { return RestoreASTRDDialog; }
        protected getIdProperty() { return RestoreASTRDRow.idProperty; }
        protected getInsertPermission() { return RestoreASTRDRow.insertPermission; }
        protected getLocalTextPrefix() { return RestoreASTRDRow.localTextPrefix; }
        protected getService() { return RestoreASTRDService.baseUrl; }

        protected form: RestoreASTRHForm;
        public static isEditedFlag = 'isEdited';

        constructor(container: JQuery) {
            super(container);

            this.slickGrid.onCellChange.subscribe((e, args) => {
                let item = args.item as ALgorithm.RestoreASTRDRow;
                item[RestoreASTRDEditor.isEditedFlag] = true;
                this.view.updateItem(item[this.getIdProperty()], item);

            });

            this.slickGrid.onBeforeEditCell.subscribe((e, args) => {
                let item = args.item as ALgorithm.RestoreASTRDRow;
                let column = args.column as Slick.Column;

            });

            this.form = new RestoreASTRHForm("ALgorithmPro_ALgorithm_RestoreASTRHDialog8_");

            this.form.DetailList.view.onDataChanged.subscribe((e, args) => {
                this.GetDetial();
            });
            this.form.DetailList.view.onRowsChanged.subscribe((e, args) => {
                this.GetDetial();

            });
            this.form.DetailList.view.onRowsOrCountChanged.subscribe((e, args) => {
                this.GetDetial();
            });
        }

        protected getItemCssClass(item: ALgorithm.RestoreASTRDRow, index: number): string {
            let klass: string = "";
            let IsEdited = item[RestoreASTRDEditor.isEditedFlag] as boolean;
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

                    var items = this.view.getItems().filter(q => q[RestoreASTRDEditor.isEditedFlag] == true);
                    items.forEach(item => {
                        if (item['RowNum'])
                            delete item['RowNum'];
                        if (item[RestoreASTRDEditor.isEditedFlag])
                            delete item[RestoreASTRDEditor.isEditedFlag];

                        ALgorithm.RestoreASTRDService.Update({ EntityId: item.ID, Entity: item },
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

        protected validateEntity(row: RestoreASTRDRow, id) {

            let value = AS.IsNull(row.Value);
            let SumDisc = AS.IsNull(row.DISC1) + AS.IsNull(row.DISC2) + AS.IsNull(row.DISC3);
            let SumTax = AS.IsNull(row.TAX1) + AS.IsNull(row.TAX2) + AS.IsNull(row.TAX3);
            let NET = value + SumTax;
            row.NetBeforeTAX = value - SumDisc;
            row.NetAfterTAX = value + SumTax - SumDisc;
            row.NET = value + SumTax - SumDisc;;

            var Items = Q.tryFirst(this.view.getItems(), x => x.Item_CD === row.Item_CD && x.PKID === row.PKID);

            if (row == null) return false;

            if (row.QTY == 0) {
                Q.notifyError("Quantity Should Gertter Than Zero", "Notify");
                return false;
            }
            if (row.Price == 0) {
                Q.notifyError("Price Should Gertter Than Zero", "Notify");
                return false;
            }
            if (row.Value == 0) {
                Q.notifyError("Value Should Gertter Than Zero", "Notify");
                return false;
            }
            if (SumDisc > row.Value) {
                Q.notifyError("Disc Should be Less Than Value", "Notify");
                return false;
            }
            if (SumDisc > NET) {
                Q.notifyError("Disc Should be Less Than NET", "Notify");
                return false;
            }
            if (Items != null) {
                if (row && this.id(Items) !== id) {
                    Q.alert('This Items is already in ASTRD!');
                    return false;
                }
            }

            return true;
        }

        protected editItem(entity) {
            super.editItem(entity);
            this.GetDetial();
        }

        private GetDetial() {

            let CurrencyID = this.form.CurrencyID.value;
            var Currency = Q.tryFirst(CurrencyRow.getLookup().items, x => x.CurrencyID == CurrencyID);
            let RATE = Currency.CUR_RAT;
            var ASTRD = this.view.getItems();
            if (ASTRD != null && RATE != null) {
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
                var Total = AS.IsNull(total);
                var NET = Total + SumTAX - SumDISC + AS.IsNull(Adtional);
                this.form.Total.value = Total * RATE;
                this.form.HDISC.value = SumDISC * RATE;
                this.form.NetBeforeTAX.value = NETBeforeTAX * RATE;
                this.form.HTAX.value = SumTAX * RATE;
                this.form.NetAfterTAX.value = NETAfterTAX * RATE;
                this.form.NetTotal.value = NET * RATE;
                this.form.Paid.value = NET * RATE;
            }
        }

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }

        //protected onViewProcessData(response: Serenity.ListResponse<ALgorithm.RestoreASTRDRow>): Serenity.ListResponse<ALgorithm.RestoreASTRDRow> {
        //    super.onViewProcessData(response);

        //    this.renderCustomHtml(response.Entities);

        //    return response;
        //}
        //private renderCustomHtml(items: ALgorithm.RestoreASTRDRow[]) {

        //    let tr = `<tr>
        //                <th>Item Code</th>
        //                <th>Item Name</th>
        //                <th>QTY</th>
        //                <th>Price</th>
        //                <th>Value</th>
        //              </tr>`;

        //    items.forEach(item => tr +=
        //        `<tr>
        //            <td>${item.Item_CD}</td>
        //            <td>${item.ITM_NM_AR}</td>
        //            <td>${item.QTY}</td>
        //            <td>${item.Price}</td>
        //            <td>${item.Value}</td>
        //        </tr>`);

        //    let html = `<table class="table table-striped table-bordered">
        //                    ${tr}
        //                <table>
        //                `;

        //    this.customHtmlDiv.html(html);
        //}
    }
}