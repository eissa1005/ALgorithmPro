
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CashRestoreASTRHDialog extends Serenity.EntityDialog<CashRestoreASTRHRow, any> {
        protected getFormKey() { return CashRestoreASTRHForm.formKey; }
        protected getIdProperty() { return CashRestoreASTRHRow.idProperty; }
        protected getLocalTextPrefix() { return CashRestoreASTRHRow.localTextPrefix; }
        protected getNameProperty() { return CashRestoreASTRHRow.nameProperty; }
        protected getService() { return CashRestoreASTRHService.baseUrl; }
        protected getDeletePermission() { return CashRestoreASTRHRow.deletePermission; }
        protected getInsertPermission() { return CashRestoreASTRHRow.insertPermission; }
        protected getUpdatePermission() { return CashRestoreASTRHRow.updatePermission; }

        protected form:CashRestoreASTRHForm;;
        private ACCNOGrid: JQuery;
        constructor() {
            super();

            this.ACCNOGrid = this.byId('ACCMFGrid');

            this.form = new CashRestoreASTRHForm(this.idPrefix);

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
                var dialog = new CustomerSupplierDialog();
                dialog.dialogOpen();

            });

            this.form.ACC_NO.element.keydown((e) => {
                if (e.keyCode == 113) {
                    var dialog = new CustomerSupplierDialog();
                    dialog.dialogOpen();
                }

            });

            this.form.TR_TY.changeSelect2(() => {
                this.getNextNumber();
            });

            this.form.DetailList.changeSelect2(() => {

                var item = this.form.DetailList.view.getItems();
                var value = item.filter(x => x.Value);
                var x = AS.Sum(item, value);
                var xxx = AS.Sum(item, value);
                this.form.Total.value = x;

            });
        }

        protected initDialog() {
            super.initDialog();
            CashRestoreASTRHDialog.PrefixID = this.form.idPrefix;
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
                CashRestoreASTRHService.GetNextNumber({
                    Prefix: StoreID,
                    Length: prefix.length + 15
                }, response => {
                    this.form.TR_NO.value = Q.parseInteger(response.Serial);

                    (this.form.TR_NO.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }



    }
}