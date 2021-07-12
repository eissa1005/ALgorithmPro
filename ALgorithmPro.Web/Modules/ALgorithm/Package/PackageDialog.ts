
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class PackageDialog extends Serenity.EntityDialog<PackageRow, any> {
        protected getFormKey() { return PackageForm.formKey; }
        protected getIdProperty() { return PackageRow.idProperty; }
        protected getLocalTextPrefix() { return PackageRow.localTextPrefix; }
        protected getNameProperty() { return PackageRow.nameProperty; }
        protected getService() { return PackageService.baseUrl; }
        protected getDeletePermission() { return PackageRow.deletePermission; }
        protected getInsertPermission() { return PackageRow.insertPermission; }
        protected getUpdatePermission() { return PackageRow.updatePermission; }

        protected form = new PackageForm(this.idPrefix);
        constructor() {
            super();

            this.form.PK_NM_AR.changeSelect2((e) => { this.form.PK_NM_EN.value = this.form.PK_NM_AR.value })

        }

    }
}