﻿
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class PurchaseDialog extends Serenity.EntityDialog<PurchaseRow, any> {
        protected getFormKey() { return PurchaseForm.formKey; }
        protected getIdProperty() { return PurchaseRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseRow.nameProperty; }
        protected getService() { return PurchaseService.baseUrl; }
        protected getDeletePermission() { return PurchaseRow.deletePermission; }
        protected getInsertPermission() { return PurchaseRow.insertPermission; }
        protected getUpdatePermission() { return PurchaseRow.updatePermission; }

        protected form: PurchaseForm;;
        private ACCNOGrid: JQuery;
        public static HeaderPrefix: string;
        public static PrefixID: string;
        public static OldValue: string;
        public static NewValue: string;
        public static StoreID: string;
        public SelectTRTY: AS.TRTYType;
        constructor() {
            super();


            this.ACCNOGrid = this.byId('ACCMFGrid');
            this.form = new PurchaseForm(this.idPrefix);

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
                this.SelectTRTY = AS.TRTYType.Purchase;
                var dialog = new CustomerSupplierDialog(this.SelectTRTY);
                dialog.dialogOpen();

            });

            this.form.ACC_NO.element.keydown((e) => {
                if (e.keyCode == 113) {
                    this.SelectTRTY = AS.TRTYType.Purchase;
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

                PurchaseDialog.OldValue = oldValue;
                PurchaseDialog.NewValue = NewValue;

                let RATE = 1;
                if (!AS.IsNullValue(oldValue) && !AS.IsNullValue(NewValue)) {
                    RATE = BS.GetCurrencyRAT(oldValue, NewValue);
                    this.form.RATE.value = Q.tryFirst(CurrencyRow.getLookup().items, x => x.CurrencyID == NewValue).CUR_RAT;

                } else {
                    RATE = Q.tryFirst(CurrencyRow.getLookup().items, x => x.CurrencyID == NewValue).CUR_RAT;
                    this.form.RATE.value = RATE;
                }
            });

            this.form.Paid.changeSelect2(() => {

                let total = this.form.Total.value;
                let paid = this.form.Paid.value;
                let Disc = this.form.HDISC.value;
                let addtion = this.form.HAddtions.value;
                let TAX = this.form.HTAX.value;
                let NET = AS.IsNull(total) + AS.IsNull(TAX) - AS.IsNull(Disc) - AS.IsNull(paid);
                this.form.NetTotal.value = NET;
                this.form.NetTotal.value = NET + AS.IsNull(addtion);
            })
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew())
                this.getNextNumber();

            PurchaseDialog.StoreID = this.form.StoreID.value;
        }

        private getNextNumber() {

            var StoreID = Q.trimToNull(this.form.StoreID.value);
            var TRTY = Q.trimToNull(this.form.TR_TY.value);

            if (!Q.isEmptyOrNull(StoreID) && !Q.isEmptyOrNull(TRTY)) {

                var prefix = StoreID;
                PurchaseService.GetNextNumber({
                    StoreID: StoreID,
                    TR_TY: Q.parseInteger(TRTY),
                    Prefix: StoreID,
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
                reportKey: 'ALgorithm.PurchASTRD',
                Url: 'Purch/Index',
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