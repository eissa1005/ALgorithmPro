
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class AddInventoryDialog extends Serenity.EntityDialog<AddInventoryRow, any> {
        protected getFormKey() { return AddInventoryForm.formKey; }
        protected getIdProperty() { return AddInventoryRow.idProperty; }
        protected getLocalTextPrefix() { return AddInventoryRow.localTextPrefix; }
        protected getNameProperty() { return AddInventoryRow.nameProperty; }
        protected getService() { return AddInventoryService.baseUrl; }
        protected getDeletePermission() { return AddInventoryRow.deletePermission; }
        protected getInsertPermission() { return AddInventoryRow.insertPermission; }
        protected getUpdatePermission() { return AddInventoryRow.updatePermission; }

        protected form: AddInventoryForm;
        public static OldValue: string;
        public static NewValue: string;
        public static StoreID: string;
        public static Grid: Slick.Grid;
        public SelectTRTY: AS.TRTYType;

        constructor() {
            super();

            this.form = new AddInventoryForm(this.idPrefix);
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

                AddInventoryDialog.OldValue = oldValue;
                AddInventoryDialog.NewValue = NewValue;

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
                AddInventoryService.GetNextNumber({
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
                cssClass: 'print-button',
                reportKey: 'ALgorithm.AddInventoryDetail',
                Url: 'AddInventory/Index',
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