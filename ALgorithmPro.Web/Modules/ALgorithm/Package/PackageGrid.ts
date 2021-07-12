
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class PackageGrid extends Serenity.EntityGrid<PackageRow, any> {
        protected getColumnsKey() { return 'ALgorithm.Package'; }
        protected getDialogType() { return PackageDialog; }
        protected getIdProperty() { return PackageRow.idProperty; }
        protected getInsertPermission() { return PackageRow.insertPermission; }
        protected getLocalTextPrefix() { return PackageRow.localTextPrefix; }
        protected getService() { return PackageService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}