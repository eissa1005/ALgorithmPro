
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class RestorePurchaseDialog extends Serenity.EntityDialog<RestorePurchaseRow, any> {
        protected getFormKey() { return RestorePurchaseForm.formKey; }
        protected getIdProperty() { return RestorePurchaseRow.idProperty; }
        protected getLocalTextPrefix() { return RestorePurchaseRow.localTextPrefix; }
        protected getNameProperty() { return RestorePurchaseRow.nameProperty; }
        protected getService() { return RestorePurchaseService.baseUrl; }
        protected getDeletePermission() { return RestorePurchaseRow.deletePermission; }
        protected getInsertPermission() { return RestorePurchaseRow.insertPermission; }
        protected getUpdatePermission() { return RestorePurchaseRow.updatePermission; }

        private ACCNOGrid: JQuery;
        protected form: RestorePurchaseForm;;
        public static OldValue: string;
        public static NewValue: string;
        public static StoreID: string;
        public static Grid: Slick.Grid;
        public SelectTRTY: AS.TRTYType;

        constructor() {
            super();

            this.ACCNOGrid = this.byId('ACCMFGrid');

            this.form = new RestorePurchaseForm(this.idPrefix);

            this.form.TR_NO.changeSelect2(() => {
                this.getNextNumber();
            });

            this.form.TR_NO.element.on('keyup', (e) => {

                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });

            // Event Account Click
            this.form.ACC_NO.element.dblclick(() => {
                this.SelectTRTY = AS.TRTYType.RestorePurch;
                var dialog = new CustomerSupplierDialog(this.SelectTRTY);
                dialog.dialogOpen();

            });

            this.form.ACC_NO.element.keydown((e) => {
                if (e.keyCode == AS.KeyCode.F2) {
                    this.SelectTRTY = AS.TRTYType.RestorePurch;
                    var dialog = new CustomerSupplierDialog(this.SelectTRTY);
                    dialog.dialogOpen();
                }
            });

            this.form.TR_TY.changeSelect2(() => {
                this.getNextNumber();
            });

            // Event Reference Number Cliclk
            this.form.ReferenceNo.element.dblclick(() => {
                this.SelectTRTY = AS.TRTYType.RestorePurch;
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

                RestorePurchaseDialog.OldValue = oldValue;
                RestorePurchaseDialog.NewValue = NewValue;

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

            RestorePurchaseDialog.StoreID = this.form.StoreID.value;

        }

        private getNextNumber() {

            var StoreID = Q.trimToNull(this.form.StoreID.value);
            var TRTY = Q.trimToNull(this.form.TR_TY.value);

            if (!Q.isEmptyOrNull(StoreID) && !Q.isEmptyOrNull(TRTY)) {

                var prefix = StoreID;
                RestorePurchaseService.GetNextNumber({
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
                reportKey: 'ALgorithm.RestoreASTRD',
                Url: 'RestorePurch/Index',
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