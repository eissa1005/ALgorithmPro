
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class PriceTypesDialog extends Serenity.EntityDialog<PriceTypesRow, any> {
        protected getFormKey() { return PriceTypesForm.formKey; }
        protected getIdProperty() { return PriceTypesRow.idProperty; }
        protected getLocalTextPrefix() { return PriceTypesRow.localTextPrefix; }
        protected getNameProperty() { return PriceTypesRow.nameProperty; }
        protected getService() { return PriceTypesService.baseUrl; }
        protected getDeletePermission() { return PriceTypesRow.deletePermission; }
        protected getInsertPermission() { return PriceTypesRow.insertPermission; }
        protected getUpdatePermission() { return PriceTypesRow.updatePermission; }

        protected form = new PriceTypesForm(this.idPrefix);

    }
}