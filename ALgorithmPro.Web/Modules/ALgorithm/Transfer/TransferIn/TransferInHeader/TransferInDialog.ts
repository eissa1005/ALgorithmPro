
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class TransferInDialog extends Serenity.EntityDialog<TransferInRow, any> {
        protected getFormKey() { return TransferInForm.formKey; }
        protected getIdProperty() { return TransferInRow.idProperty; }
        protected getLocalTextPrefix() { return TransferInRow.localTextPrefix; }
        protected getNameProperty() { return TransferInRow.nameProperty; }
        protected getService() { return TransferInService.baseUrl; }
        protected getDeletePermission() { return TransferInRow.deletePermission; }
        protected getInsertPermission() { return TransferInRow.insertPermission; }
        protected getUpdatePermission() { return TransferInRow.updatePermission; }

        protected form: TransferInForm;
        public static OldValue: string;
        public static NewValue: string;
        public static StoreID: string;
        public static Grid: Slick.Grid;
        public SelectTRTY: AS.TRTYType;

        constructor() {
            super();

            this.form = new TransferInForm(this.idPrefix);
            this.form.TR_NO.changeSelect2(()=> {
                this.getNextNumber();
            });

            this.form.TR_TY.changeSelect2(() => {
                this.getNextNumber();
            });

            // Change Currency
            this.form.CurrencyID.changeSelect2((e) => {

                var CurrencyID = this.form.CurrencyID.value;
                var oldValue = e["removed"].id;
                var NewValue = e["added"].id;

                TransferInDialog.OldValue = oldValue;
                TransferInDialog.NewValue = NewValue;

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

        }

        private getNextNumber() {

            var StoreID = Q.trimToNull(this.form.StoreID.value);
            var TRTY = Q.trimToNull(this.form.TR_TY.value);

            if (!Q.isEmptyOrNull(StoreID) && !Q.isEmptyOrNull(TRTY)) {

                var prefix = StoreID;
               TransferInService.GetNextNumber({
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
            var isEdit = false;
            var data = this.get_entityId();

           
            buttons.push(ALgorithmPro.Common.ReportHelper.CreateReportButton({
                title: 'Print',
                cssClass: 'print-button',
                reportKey: 'ALgorithm.TransferInDetail',
                Url: 'TransferIn/Index',
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
            this.toolbar.findButton('print-button').toggle(this.isNew()).hide();
            this.toolbar.findButton('print-button').toggle(this.isEditMode()).show();
        }
    }
}