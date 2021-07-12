/// <reference path="./../LookupGrid/Checks/CustomChecksDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class CheckTRDialog extends Serenity.EntityDialog<CheckTRRow, any> {
        protected getFormKey() { return CheckTRForm.formKey; }
        protected getIdProperty() { return CheckTRRow.idProperty; }
        protected getLocalTextPrefix() { return CheckTRRow.localTextPrefix; }
        protected getNameProperty() { return CheckTRRow.nameProperty; }
        protected getService() { return CheckTRService.baseUrl; }
        protected getDeletePermission() { return CheckTRRow.deletePermission; }
        protected getInsertPermission() { return CheckTRRow.insertPermission; }
        protected getUpdatePermission() { return CheckTRRow.updatePermission; }
        protected form: CheckTRForm;
        public static PrefixID: string;
        private ChecksGrid: JQuery;
        public ID: number;
        public Checks: ChecksRow;
       
        constructor() {
            super();

            this.form = new CheckTRForm(this.idPrefix);
            this.ChecksGrid = this.byId('ChecksGrid');

            // Event dblclick
            this.form.CHK_NO.element.dblclick(() => {

                var dialog = new CustomChecksDialog();
                dialog.dialogOpen();

            });
            // Event keydown
            this.form.CHK_NO.element.keydown((e) => {
                if (e.keyCode == 113) {
                    var dialog = new CustomChecksDialog();
                    dialog.dialogOpen();
                }
            });


            // TRTY Changed
            this.form.TR_TY.changeSelect2(() => { this.form.STAT.value = this.form.TR_TY.value; });

            // Event AMT Changed
            this.form.AMT.changeSelect2(() => {

                this.form.TotalValue.value = this.form.AMT.value - this.form.AMT_PAID.value;

            });

            // Event AMT PAID Changed
            this.form.AMT_PAID.changeSelect2(() => {

                this.form.TotalValue.value = this.form.AMT.value - this.form.AMT_PAID.value;
                if (this.form.TotalValue.value < 0) this.form.TotalValue.value = 0;

                this.form.AMT_PAID.addValidationRule(this.uniqueName, e => {
                    var AMT = this.form.AMT.value;
                    var Paid = this.form.AMT_PAID.value;
                    if (Paid > AMT) {
                        return "Amount Paid is Gretter Than Amount,Please Change this";
                    }

                });

            });

            // Event TotalValue Changed
            this.form.TotalValue.changeSelect2(() => {

                this.form.TotalValue.value = this.form.AMT.value - this.form.AMT_PAID.value;
                if (this.form.TotalValue.value < 0) this.form.TotalValue.value = 0;

                this.form.TotalValue.addValidationRule(this.uniqueName, e => {
                    var AMT = this.form.AMT.value;
                    var Paid = this.form.AMT_PAID.value;
                    var TotalValue = this.form.TotalValue.value;
                    if (TotalValue > AMT) {
                        return "TotalValue is Gretter Than Amount,Please Change this";
                    }
                });

            });

            // Event - IF TRTY Is Cash Or Paritial Amtount Paid is Require
            this.form.TR_TY.changeSelect2(() => {
                if (this.form.TR_TY.value == "702") {

                    this.form.AMT_PAID.value = this.form.AMT.value;
                }

                this.form.AMT_PAID.addValidationRule(this.uniqueName, e => {

                    var AmountPaid = this.form.AMT_PAID.value;

                    if (this.form.TR_TY.value == "702" || this.form.TR_TY.value == "703") {
                        if (Q.isEmptyOrNull(AmountPaid.toString()) || AmountPaid == 0) {
                            return "This Field Is Required ";
                        }
                    }
                });
            });
        }
        protected initDialog() {
            super.initDialog();
            CheckTRDialog.PrefixID = this.form.idPrefix;
        }
    }
}