namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ACCMFDialog extends Serenity.EntityDialog<ACCMFRow, any> {
        protected getFormKey() { return ACCMFForm.formKey; }
        protected getIdProperty() { return ACCMFRow.idProperty; }
        protected getLocalTextPrefix() { return ACCMFRow.localTextPrefix; }
        protected getNameProperty() { return ACCMFRow.nameProperty; }
        protected getService() { return ACCMFService.baseUrl; }
        protected getDeletePermission() { return ACCMFRow.deletePermission; }
        protected getInsertPermission() { return ACCMFRow.insertPermission; }
        protected getUpdatePermission() { return ACCMFRow.updatePermission; }

        protected form = new ACCMFForm(this.idPrefix);
        constructor() {
            super();
            this.form.REC_ID.changeSelect2((e) => {
                this.getNextNumber();
            });
            this.form.ACC_NM_AR.changeSelect2((e) => { this.form.ACC_NM_EN.value = this.form.ACC_NM_AR.value })
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            //if (this.isNew())
            //    this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.ACC_NO.value);
            var RECID = Q.trimToNull(this.form.REC_ID.value);

            if (!Q.isEmptyOrNull(RECID)) {

                var prefix = RECID;
                ACCMFService.GetNextNumber({
                    Prefix: RECID,
                    Length: prefix.length + 15
                }, response => {
                    this.form.ACC_NO.value = response.Serial;

                    (this.form.ACC_NO.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }


    }
}