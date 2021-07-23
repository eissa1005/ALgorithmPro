
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CashPayedDialog extends Serenity.EntityDialog<CashPayedRow, any> {
        protected getFormKey() { return CashPayedForm.formKey; }
        protected getIdProperty() { return CashPayedRow.idProperty; }
        protected getLocalTextPrefix() { return CashPayedRow.localTextPrefix; }
        protected getNameProperty() { return CashPayedRow.nameProperty; }
        protected getService() { return CashPayedService.baseUrl; }
        protected getDeletePermission() { return CashPayedRow.deletePermission; }
        protected getInsertPermission() { return CashPayedRow.insertPermission; }
        protected getUpdatePermission() { return CashPayedRow.updatePermission; }

        protected form = new CashPayedForm(this.idPrefix);

        constructor() {
            super();

            this.form.TR_NO.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });

            this.form.TR_TY.changeSelect2(() => {
                this.getNextNumber();
            });

            // Account Changed keydown
            this.form.ACC_NO.element.keydown((e) => {
                if (e.keyCode == AS.KeyCode.F2) {
                    var CashPayed = AS.TRTYType.CashPayed;
                    var dlg = new CustomerSupplierDialog(CashPayed);
                    dlg.dialogOpen();
                }

            });

            // Account dbClick
            this.form.ACC_NO.element.dblclick((e) => {
                var CashPayed = AS.TRTYType.CashPayed;
                var dlg = new CustomerSupplierDialog(CashPayed);
                dlg.dialogOpen();
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew())
                this.getNextNumber();
        }

        getToolbarButtons() {

            var buttons = super.getToolbarButtons();

            buttons.push(ALgorithmPro.Common.ReportHelper.CreateReportButton({
                title: 'Print',
                cssClass: 'print-button',
                reportKey: 'ALgorithm.CashPayed',
                Url: 'CashPayed/Index',
                getParams: () => ({
                    HeaderID: this.get_entityId()
                })
            }));

            return buttons;
        }

        private getNextNumber() {

            var StoreID = Q.trimToNull(this.form.StoreID.value);
            var TRTY = Q.trimToNull(this.form.TR_TY.value);

            if (!Q.isEmptyOrNull(StoreID) && !Q.isEmptyOrNull(TRTY)) {

                var prefix = StoreID;
                CashPayedService.GetNextNumber({
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

        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton('export-pdf-button').toggle(this.isNew()).hide();
            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            this.toolbar.findButton('print-button').toggle(this.isNew()).hide();
            this.toolbar.findButton('print-button').toggle(this.isEditMode()).show();
        }

    }
}