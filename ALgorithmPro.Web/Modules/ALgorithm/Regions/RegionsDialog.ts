
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class RegionsDialog extends Serenity.EntityDialog<RegionsRow, any> {
        protected getFormKey() { return RegionsForm.formKey; }
        protected getIdProperty() { return RegionsRow.idProperty; }
        protected getLocalTextPrefix() { return RegionsRow.localTextPrefix; }
        protected getNameProperty() { return RegionsRow.nameProperty; }
        protected getService() { return RegionsService.baseUrl; }
        protected getDeletePermission() { return RegionsRow.deletePermission; }
        protected getInsertPermission() { return RegionsRow.insertPermission; }
        protected getUpdatePermission() { return RegionsRow.updatePermission; }

        protected form = new RegionsForm(this.idPrefix);
        constructor() {
            super();

            this.form.RegionID.element.on('keyup', (e) => {
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
            this.form.Name_AR.changeSelect2((e) => { this.form.Name_EN.value = this.form.Name_AR.value })

        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.RegionID.value);

            if (!val || val.length <= 1) {

                var prefix = (val || 'PC-').toUpperCase();
                RegionsService.GetNextNumber({
                    Prefix: prefix,
                    Length: prefix.length + 15 
                }, response => {
                    this.form.RegionID.value = response.Serial;

                    (this.form.RegionID.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }


    }
}