
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ReturnASTRHDialog extends Serenity.EntityDialog<ReturnASTRHRow, any> {
        protected getFormKey() { return ReturnASTRHForm.formKey; }
        protected getIdProperty() { return ReturnASTRHRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnASTRHRow.localTextPrefix; }
        protected getNameProperty() { return ReturnASTRHRow.nameProperty; }
        protected getService() { return ReturnASTRHService.baseUrl; }
        protected getDeletePermission() { return ReturnASTRHRow.deletePermission; }
        protected getInsertPermission() { return ReturnASTRHRow.insertPermission; }
        protected getUpdatePermission() { return ReturnASTRHRow.updatePermission; }

        public static HeaderPrefix: string;
        protected form: ReturnASTRHForm;;
        public static PrefixID: string;
        private ACCNOGrid: JQuery;
        constructor() {
            super();

            this.form = new ReturnASTRHForm(this.idPrefix);
            ReturnASTRHDialog.PrefixID = this.form.idPrefix;
            this.ACCNOGrid = this.byId('ACCMFGrid');

            this.form.TR_NO.changeSelect2(() => {
                this.getNextNumber();
            });

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
        }

        protected initDialog() {
            super.initDialog();
            ReturnASTRHDialog.PrefixID = this.form.idPrefix;
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
                ReturnASTRHService.GetNextNumber({
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