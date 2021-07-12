/// <reference path="../../UilitiesScript/SelectableEntityGrid.ts" />
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class BranchGrid extends SelectableEntityGrid<BranchRow, any> {
        protected getColumnsKey() { return 'ALgorithm.Branch'; }
        protected getDialogType() { return BranchDialog; }
        protected getIdProperty() { return BranchRow.idProperty; }
        protected getInsertPermission() { return BranchRow.insertPermission; }
        protected getLocalTextPrefix() { return BranchRow.localTextPrefix; }
        protected getService() { return BranchService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}