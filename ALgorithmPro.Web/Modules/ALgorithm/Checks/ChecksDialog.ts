
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ChecksDialog extends Serenity.EntityDialog<ChecksRow, any> {
        protected getFormKey() { return ChecksForm.formKey; }
        protected getIdProperty() { return ChecksRow.idProperty; }
        protected getLocalTextPrefix() { return ChecksRow.localTextPrefix; }
        protected getNameProperty() { return ChecksRow.nameProperty; }
        protected getService() { return ChecksService.baseUrl; }
        protected getDeletePermission() { return ChecksRow.deletePermission; }
        protected getInsertPermission() { return ChecksRow.insertPermission; }
        protected getUpdatePermission() { return ChecksRow.updatePermission; }

       
        protected form = new ChecksForm(this.idPrefix);
        constructor() {
            super();
           
            // Amount Change
            this.form.AMT.change((e) => {
                let AMT = Q.toId(this.form.AMT.value);
                let AMTPaid = Q.toId(this.form.AMT_PAID.value) ?? 0;
                if (!Q.isEmptyOrNull(AMT)) {
                    this.form.TotalValue.value = Q.parseDecimal(AMT) - Q.parseDecimal(AMTPaid);
                }
            });
            // AmountPaid Change
            this.form.AMT_PAID.change((e) => {
                let AMT = Q.toId(this.form.AMT.value);
                let AMTPaid = Q.toId(this.form.AMT_PAID.value) ?? 0;
                let TotalValue = Q.toId(this.form.TotalValue.value) ?? 0;
                if (!Q.isEmptyOrNull(AMT)) {
                    if (AMTPaid > AMT) {
                        Q.alert("AmountPaid Gretter Than Amount , Should be Less Than OR Equal Amount ");
                        this.form.AMT_PAID.value = 0;
                    }
                    this.form.TotalValue.value = Q.parseDecimal(AMT) - Q.parseDecimal(AMTPaid);
                }
            });

            // CurrencyID Change
            this.form.CurrencyID.changeSelect2((e) => {

                let CurrencyID = this.form.CurrencyID.value;
                if (Q.isEmptyOrNull(CurrencyID)) return;
                CurrencyService.List({}, response => {

                response.Entities.filter(x => x.CurrencyID == CurrencyID)
                        .forEach(e => this.form.RATE.value = e.CurrencyRate);
                });
            });

        }
    }
}