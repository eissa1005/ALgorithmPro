
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class DistrictsDialog extends Serenity.EntityDialog<DistrictsRow, any> {
        protected getFormKey() { return DistrictsForm.formKey; }
        protected getIdProperty() { return DistrictsRow.idProperty; }
        protected getLocalTextPrefix() { return DistrictsRow.localTextPrefix; }
        protected getNameProperty() { return DistrictsRow.nameProperty; }
        protected getService() { return DistrictsService.baseUrl; }
        protected getDeletePermission() { return DistrictsRow.deletePermission; }
        protected getInsertPermission() { return DistrictsRow.insertPermission; }
        protected getUpdatePermission() { return DistrictsRow.updatePermission; }

        protected form = new DistrictsForm(this.idPrefix);
        constructor() {
            super();

            // Districts Keyup
            this.form.DistrictsID.element.on('keyup', (e) => {
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
            this.form.Name_AR.changeSelect2((e) => { this.form.Name_EN.value = this.form.Name_AR.value });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew())
                this.getNextNumber();
        }
        private getNextNumber() {

            var val = Q.trimToNull(this.form.DistrictsID.value);

            if (!val || val.length <= 1) {

                var prefix = (val || 'C').toUpperCase();

                DistrictsService.GetNextNumber({
                    Prefix: prefix,
                    Length: prefix.length + 15 
                }, response => {
                        this.form.DistrictsID.value = response.Serial;

                        (this.form.DistrictsID.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }

    }
}