
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CashPurchDialog extends Serenity.EntityDialog<CashPurchRow, any> {
        protected getFormKey() { return CashPurchForm.formKey; }
        protected getIdProperty() { return CashPurchRow.idProperty; }
        protected getLocalTextPrefix() { return CashPurchRow.localTextPrefix; }
        protected getNameProperty() { return CashPurchRow.nameProperty; }
        protected getService() { return CashPurchService.baseUrl; }
        protected getDeletePermission() { return CashPurchRow.deletePermission; }
        protected getInsertPermission() { return CashPurchRow.insertPermission; }
        protected getUpdatePermission() { return CashPurchRow.updatePermission; }

        private ACCNOGrid: JQuery;
        protected form: CashPurchForm;;
        public static OldValue: string;
        public static NewValue: string;
        public static StoreID: string;
        public static Grid: Slick.Grid;
        public  SelectTRTY: AS.TRTYType;

        constructor() {
            super();
           
            this.ACCNOGrid = this.byId('ACCMFGrid');
            this.form = new CashPurchForm(this.idPrefix);

            this.form.TR_NO.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });

            // AccountDialog
            this.form.ACC_NO.element.dblclick(() => {
                this.SelectTRTY = AS.TRTYType.CashPurchase;
                var dialog = new CustomerSupplierDialog(this.SelectTRTY);
                dialog.dialogOpen();
            });

            this.form.ACC_NO.element.keydown((e) => {
                if (e.keyCode == AS.KeyCode.F2) {
                    this.SelectTRTY = AS.TRTYType.CashPurchase;
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
               
                CashPurchDialog.OldValue = oldValue;
                CashPurchDialog.NewValue = NewValue;

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

            CashPurchDialog.StoreID = this.form.StoreID.value;

        }

        private getNextNumber() {

            var StoreID = Q.trimToNull(this.form.StoreID.value);
            var TRTY = Q.trimToNull(this.form.TR_TY.value);

            if (!Q.isEmptyOrNull(StoreID) && !Q.isEmptyOrNull(TRTY)) {

                var prefix = StoreID;
                CashPurchService.GetNextNumber({
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
                reportKey: 'ALgorithm.CashPurchASTRD',
                Url:'CashPurch/Index',
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