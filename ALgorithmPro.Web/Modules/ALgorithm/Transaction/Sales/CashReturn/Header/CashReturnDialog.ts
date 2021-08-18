
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CashReturnDialog extends Serenity.EntityDialog<CashReturnRow, any> {
        protected getFormKey() { return CashReturnForm.formKey; }
        protected getIdProperty() { return CashReturnRow.idProperty; }
        protected getLocalTextPrefix() { return CashReturnRow.localTextPrefix; }
        protected getNameProperty() { return CashReturnRow.nameProperty; }
        protected getService() { return CashReturnService.baseUrl; }
        protected getDeletePermission() { return CashReturnRow.deletePermission; }
        protected getInsertPermission() { return CashReturnRow.insertPermission; }
        protected getUpdatePermission() { return CashReturnRow.updatePermission; }

        private ACCNOGrid: JQuery;
        protected form: CashReturnForm;;
        public static OldValue: string;
        public static NewValue: string;
        public static StoreID: string;
        public static Grid: Slick.Grid;
        public SelectTRTY: AS.TRTYType;

        constructor() {
            super();

            this.ACCNOGrid = this.byId('ACCMFGrid');
            this.form = new CashReturnForm(this.idPrefix);

            this.form.TR_NO.changeSelect2(() => {
                this.getNextNumber();
            });

            this.form.TR_NO.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });

            // Event Account Click
            this.form.ACC_NO.element.dblclick(() => {
                this.SelectTRTY = AS.TRTYType.CashReturn;
                var dialog = new CustomerSupplierDialog(this.SelectTRTY);
                dialog.dialogOpen();

            });

            this.form.ACC_NO.element.keydown((e) => {
                if (e.keyCode == AS.KeyCode.F2) {
                    this.SelectTRTY = AS.TRTYType.CashReturn;
                    var dialog = new CustomerSupplierDialog(this.SelectTRTY);
                    dialog.dialogOpen();
                }
            });

            this.form.TR_TY.changeSelect2(() => {
                this.getNextNumber();
            });

            // Event Reference Number Cliclk
            this.form.ReferenceNo.element.dblclick(() => {
                this.SelectTRTY = AS.TRTYType.CashSales;
                var dialog = new ASTRHDialog(this.SelectTRTY);
                dialog.dialogOpen();

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

                CashReturnDialog.OldValue = oldValue;
                CashReturnDialog.NewValue = NewValue;

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

            CashReturnDialog.StoreID = this.form.StoreID.value;

        }

        private getNextNumber() {

            var StoreID = Q.trimToNull(this.form.StoreID.value);
            var TRTY = Q.trimToNull(this.form.TR_TY.value);

            if (!Q.isEmptyOrNull(StoreID) && !Q.isEmptyOrNull(TRTY)) {

                var prefix = StoreID;
                CashReturnService.GetNextNumber({
                    StoreID: StoreID,
                    TR_TY: Q.parseInteger(TRTY),
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
                cssClass: 'print-button',
                reportKey: 'ALgorithm.CashRestoreASTRD',
                Url: 'CashReturnSales/Index',
                getParams: () => ({
                    DetailID: this.get_entityId()
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