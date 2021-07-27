
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class RevenuesDialog extends Serenity.EntityDialog<RevenuesRow, any> {
        protected getFormKey() { return RevenuesForm.formKey; }
        protected getIdProperty() { return RevenuesRow.idProperty; }
        protected getLocalTextPrefix() { return RevenuesRow.localTextPrefix; }
        protected getNameProperty() { return RevenuesRow.nameProperty; }
        protected getService() { return RevenuesService.baseUrl; }
        protected getDeletePermission() { return RevenuesRow.deletePermission; }
        protected getInsertPermission() { return RevenuesRow.insertPermission; }
        protected getUpdatePermission() { return RevenuesRow.updatePermission; }

        protected form = new RevenuesForm(this.idPrefix);

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

            // ExpensesID Changed keydown
            this.form.ACC_NO.element.keydown((e) => {
                if (e.keyCode == AS.KeyCode.F2) {
                    var Revenue = AS.TRTYType.Revenu;
                    var dlg = new RevenuDialog(Revenue);
                    dlg.dialogOpen();
                }

            });

            // Account dbClick
            this.form.ACC_NO.element.dblclick((e) => {
                var Revenue = AS.TRTYType.Revenu;
                var dlg = new RevenuDialog(Revenue);
                dlg.dialogOpen();
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
                RevenuesService.GetNextNumber({
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

        }

    }
}