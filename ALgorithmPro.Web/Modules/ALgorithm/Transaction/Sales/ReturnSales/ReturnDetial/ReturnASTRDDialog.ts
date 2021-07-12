
/// <reference path="../../../../../ALgorithm/LookupGrid/Items/ItemsLookupDialog.ts" />
/// <reference path="../../../../../Common//Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ReturnASTRDDialog extends Common.GridEditorDialog<ReturnASTRDRow> {
        protected getFormKey() { return ReturnASTRDForm.formKey; }
        protected getIdProperty() { return ReturnASTRDRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnASTRDRow.localTextPrefix; }
        protected getNameProperty() { return ReturnASTRDRow.nameProperty; }
        protected getService() { return ReturnASTRDService.baseUrl; }
        protected getDeletePermission() { return ReturnASTRDRow.deletePermission; }
        protected getInsertPermission() { return ReturnASTRDRow.insertPermission; }
        protected getUpdatePermission() { return ReturnASTRDRow.updatePermission; }

        private ItemGrid: JQuery;
        protected form: ReturnASTRDForm;
        public static PrefixID: string;
        protected header: ReturnASTRHForm;

        constructor() {
            super();

            this.ItemGrid = this.byId('ItemsGrid');

            this.form = new ReturnASTRDForm(this.idPrefix);
            ReturnASTRDDialog.PrefixID = this.form.idPrefix;


            // Event dblclick ItemCD
            this.form.Item_CD.element.dblclick(() => {
                var ID = this.form.PKID.items[0].id;
                this.form.PKID.value = ID;
                var dialog = new ItemsLookupDialog();

                dialog.dialogOpen();
            });

            // Event keydown ItemCD
            this.form.Item_CD.element.keydown((e) => {
                var ID = this.form.PKID.items[0].id;
                this.form.PKID.value = ID;
                if (e.keyCode == 113) {
                    var dialog = new ItemsLookupDialog();
                    dialog.dialogOpen();
                }
            });

            this.form.QTY.changeSelect2(() => {
                this.QTYChanged();
                this.GetNET();
            });
            this.form.Price.changeSelect2(() => {
                this.PriceChanged();
                this.GetNET();
            });
            this.form.PKID.changeSelect2(() => {
                let ID = this.form.PKID.items[0].id;
                if (Q.isEmptyOrNull(this.form.Item_CD.value)) {
                    Q.notifyWarning("Items must be chosen first ", "warning");
                    this.form.PKID.value = ID;
                    return;
                }
                this.PackageChanged();
                this.GetNET();
            });

            this.form.Value.changeSelect2(() => {
                this.GetNET();
            });

            this.form.DISC1.changeSelect2(() => {
                this.GetNET();
            });
            this.form.DISC2.changeSelect2(() => {
                this.GetNET();
            });
            this.form.DISC3.changeSelect2(() => {
                this.GetNET();
            });
            this.form.TAX1.changeSelect2(() => {
                this.GetNET();
            });
            this.form.TAX2.changeSelect2(() => {
                this.GetNET();
            });
            this.form.TAX3.changeSelect2(() => {
                this.GetNET();
            });

        }

        protected initDialog() {
            super.initDialog();
            ReturnASTRDDialog.PrefixID = this.form.idPrefix;
        }

        private array = Array<object>();

        private QTYChanged() {
            var PKID = this.form.PKID.value;
            var PK = Q.tryFirst(PackageRow.getLookup().items, x => x.PKID == PKID).PKCNT;
            this.form.PK.value = PK;
            var QTY = Q.toId(this.form.QTY.value);
            var Price = Q.toId(this.form.Price.value);
            this.form.Price.value = Price;
            this.form.PKPRC.value = Price / PK;
            this.form.Value.value = QTY * Q.round(Price, 0);
        }

        private PriceChanged() {
            var PKID = this.form.PKID.value;
            var PK = Q.tryFirst(PackageRow.getLookup().items, x => x.PKID == PKID).PKCNT;
            this.form.PK.value = PK;
            var QTY = Q.toId(this.form.QTY.value);
            var Price = Q.toId(this.form.Price.value);
            this.form.Price.value = Price;
            this.form.PKPRC.value = Price / PK;
            this.form.Value.value = QTY * Q.round(Price, 0);

        }

        private PackageChanged() {

            var PKID = Q.toId(this.form.PKID.value);
            if (this.array.length == 0)
                this.array.push(PKID);
            else if (this.array.length > 0) {
                if (!AS.ContainKey(this.array, PKID)) {
                    this.array.push(PKID);
                }
            }
            if (this.array.length == 1) {
                var QTY = Q.toId(this.form.QTY.value);
                var Price = Q.toId(this.form.Price.value);
                var newPrice: number;
                var PK = Q.tryFirst(PackageRow.getLookup().items, x => x.PKID == PKID).PKCNT;
                this.form.PK.value = PK;
                if (Price != null && PK != null) {
                    newPrice = PK * Q.parseDecimal(Price)
                    this.form.Price.value = newPrice;
                    this.form.PKPRC.value = newPrice / PK;
                }
                this.form.Value.value = newPrice * Q.parseDecimal(QTY);
            }
            else if (this.array.length > 1) {
                var PKIDS = this.form.PKID.value;
                var PK = Q.tryFirst(PackageRow.getLookup().items, x => x.PKID == PKIDS).PKCNT;
                var FACT = Q.tryFirst(PackageRow.getLookup().items, x => x.PKID == PKIDS).FACT;
                this.form.PK.value = PK;
                var QTY = Q.toId(this.form.QTY.value);
                var Price = Q.toId(this.form.Price.value);
                var newPrice: number;
                if (Price != null && FACT != null) {
                    newPrice = FACT * Q.parseDecimal(Price)
                    newPrice = Q.round(newPrice, 0);
                    this.form.Price.value = newPrice;
                    this.form.PKPRC.value = newPrice / PK;
                }

                this.form.Value.value = newPrice * Q.parseDecimal(QTY);
            }
        }

        //GetNET
        private GetNET() {

            let CurrencyID = this.header.CurrencyID.value;
            var Currency = Q.tryFirst(CurrencyRow.getLookup().items, x => x.CurrencyID == CurrencyID);
            let RATE = 1;
            if (Currency != undefined) RATE = Currency.CurrencyRate;
            var total = AS.IsNull(this.form.Value.value);
            var DISC1 = AS.IsNull(this.form.DISC1.value);
            var DISC2 = AS.IsNull(this.form.DISC2.value);
            var DISC3 = AS.IsNull(this.form.DISC3.value);
            var SumDisc = DISC1 + DISC2 + DISC3;
            var TAX1 = AS.IsNull(this.form.TAX1.value);
            var TAX2 = AS.IsNull(this.form.TAX2.value);
            var TAX3 = AS.IsNull(this.form.TAX3.value);
            var NETBeforeTAX = total - SumDisc;
            var SumTax = TAX1 + TAX2 + TAX3;
            var NETAfterTAX = total + SumTax - SumDisc;
            var NET = total + AS.IsNull(SumTax) - AS.IsNull(SumDisc);
            this.form.Value.value = total;
            this.form.NetBeforeTAX.value = AS.IsNull(NETBeforeTAX);
            this.form.NetAfterTAX.value = AS.IsNull(NETAfterTAX);
            this.form.NET.value = NET;

        }

    }
}