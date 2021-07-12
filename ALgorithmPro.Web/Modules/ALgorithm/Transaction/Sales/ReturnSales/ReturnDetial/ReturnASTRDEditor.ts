/// <reference path="../../../../../ALgorithmsys/Editors/GridEditorBase.ts" />
/// <reference path="../../../../../ALgorithmsys/Editors/GridEditorBase.ts" />

namespace ALgorithmPro.ALgorithm {
    import FLD = ALgorithmPro.ALgorithm.ReturnASTRDRow.Fields;
    @Serenity.Decorators.registerClass()
    export class ReturnASTRDEditor extends AS.GridEditorBase<ReturnASTRDRow> {
        protected getColumnsKey() { return 'ALgorithm.ReturnASTRD'; }
        protected getDialogType() { return ReturnASTRDDialog; }
        protected getIdProperty() { return ReturnASTRDRow.idProperty; }
        protected getInsertPermission() { return ReturnASTRDRow.insertPermission; }
        protected getLocalTextPrefix() { return ReturnASTRDRow.localTextPrefix; }
        protected getService() { return ReturnASTRDService.baseUrl; }

        protected form: ReturnASTRHForm;

        constructor(container: JQuery) {
            super(container);

            this.form = new ReturnASTRHForm("ALgorithmPro_ALgorithm_ReturnASTRHDialog8_");

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

        protected validateEntity(row: ReturnASTRDRow, id) {

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
            let RATE = Currency.CurrencyRate;
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
    }
}