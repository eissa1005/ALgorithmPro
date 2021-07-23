
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CashReceiveDialog extends Serenity.EntityDialog<CashReceiveRow, any> {
        protected getFormKey() { return CashReceiveForm.formKey; }
        protected getIdProperty() { return CashReceiveRow.idProperty; }
        protected getLocalTextPrefix() { return CashReceiveRow.localTextPrefix; }
        protected getNameProperty() { return CashReceiveRow.nameProperty; }
        protected getService() { return CashReceiveService.baseUrl; }
        protected getDeletePermission() { return CashReceiveRow.deletePermission; }
        protected getInsertPermission() { return CashReceiveRow.insertPermission; }
        protected getUpdatePermission() { return CashReceiveRow.updatePermission; }

        protected form = new CashReceiveForm(this.idPrefix);

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
                    var CashReceive = AS.TRTYType.CashReceive;
                    var dlg = new CustomerSupplierDialog(CashReceive);
                    dlg.dialogOpen();
                }

            });

            // Account dbClick
            this.form.ACC_NO.element.dblclick((e) => {
                var CashReceive = AS.TRTYType.CashReceive;
                var dlg = new CustomerSupplierDialog(CashReceive);
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
                reportKey: 'ALgorithm.CashReceive',
                Url: 'CashReceive/Index',
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

        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton('export-pdf-button').toggle(this.isNew()).hide();
            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            this.toolbar.findButton('print-button').toggle(this.isNew()).hide();
            this.toolbar.findButton('print-button').toggle(this.isEditMode()).show();
        }

    }
}