
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CashSalesDialog extends Serenity.EntityDialog<CashSalesRow, any> {
        protected getFormKey() { return CashSalesForm.formKey; }
        protected getIdProperty() { return CashSalesRow.idProperty; }
        protected getLocalTextPrefix() { return CashSalesRow.localTextPrefix; }
        protected getNameProperty() { return CashSalesRow.nameProperty; }
        protected getService() { return CashSalesService.baseUrl; }
        protected getDeletePermission() { return CashSalesRow.deletePermission; }
        protected getInsertPermission() { return CashSalesRow.insertPermission; }
        protected getUpdatePermission() { return CashSalesRow.updatePermission; }

        protected form: CashSalesForm;;
        public static OldValue: string;
        public static NewValue: string;
        public static StoreID: string;
        public SelectTRTY: AS.TRTYType;
        private ACCNOGrid: JQuery;
        constructor() {
            super();

            this.ACCNOGrid = this.byId('ACCMFGrid');

            this.form = new CashSalesForm(this.idPrefix);

            this.form.TR_NO.changeSelect2(() => {
                this.getNextNumber();
            });

            this.form.TR_NO.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });

            // AccountDialog
            this.form.ACC_NO.element.dblclick(() => {
                this.SelectTRTY = AS.TRTYType.CashSales;
                var dialog = new CustomerSupplierDialog(this.SelectTRTY);
                dialog.dialogOpen();

            });

            this.form.ACC_NO.element.keydown((e) => {
                if (e.keyCode == 113) {
                    this.SelectTRTY = AS.TRTYType.CashSales;
                    var dialog = new CustomerSupplierDialog(this.SelectTRTY);
                    dialog.dialogOpen();
                }

            });

            this.form.TR_TY.changeSelect2(() => {
                this.getNextNumber();
            });

            this.form.HAddtions.changeSelect2(() => {

                let addtion = this.form.HAddtions.value;
                let total = this.form.Total.value;
                let Disc = this.form.HDISC.value;
                let TAX = this.form.HTAX.value;
                let NET = AS.IsNull(total) + AS.IsNull(TAX) - AS.IsNull(Disc);
                this.form.NetTotal.value = NET;
                this.form.NetTotal.value = NET + AS.IsNull(addtion);
            });

            // Change Currency
            this.form.CurrencyID.changeSelect2((e) => {

                var CurrencyID = this.form.CurrencyID.value;
                var oldValue = e["removed"].id;
                var NewValue = e["added"].id;

                CashSalesDialog.OldValue = oldValue;
                CashSalesDialog.NewValue = NewValue;

                let RATE = 1;
                if (!AS.IsNullValue(oldValue) && !AS.IsNullValue(NewValue)) {
                    RATE = BS.GetCurrencyRAT(oldValue, NewValue);
                    this.form.RATE.value = Q.tryFirst(CurrencyRow.getLookup().items, x => x.CurrencyID == NewValue).CUR_RAT;

                } else {
                    RATE = Q.tryFirst(CurrencyRow.getLookup().items, x => x.CurrencyID == NewValue).CUR_RAT;
                    this.form.RATE.value = RATE;
                }
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew())
                this.getNextNumber();

            CashSalesDialog.StoreID = this.form.StoreID.value;

        }

        private getNextNumber() {

            var StoreID = Q.trimToNull(this.form.StoreID.value);
            var TRTY = Q.trimToNull(this.form.TR_TY.value);

            if (!Q.isEmptyOrNull(StoreID) && !Q.isEmptyOrNull(TRTY)) {

                var prefix = StoreID;
                CashSalesService.GetNextNumber({
                    Prefix: TRTY,
                    Length: prefix.length + 15
                }, response => {
                    this.form.TR_NO.value = Q.parseInteger(response.Serial);

                    (this.form.TR_NO.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }

        getToolbarButtons() {

            var buttons = super.getToolbarButtons();

            buttons.push(ALgorithmPro.Common.ReportHelper.CreateReportButton({
                title: 'Print',
                cssClass: 'pdf-button',
                reportKey: 'ALgorithm.CashSalesASTRD',
                Url: 'CashSales/Index',
                getParams: () => ({
                    HeaderID: this.get_entityId()
                })
            }));

            return buttons;
        }

        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton('export-pdf-button').toggle(this.isNew()).hide();
            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            this.toolbar.findButton('pdf-button').toggle(this.isNew()).hide();
            this.toolbar.findButton('pdf-button').toggle(this.isEditMode()).show();

        }
    }
}