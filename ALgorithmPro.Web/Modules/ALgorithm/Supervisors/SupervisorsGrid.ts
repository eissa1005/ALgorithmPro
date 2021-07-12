/// <reference path="../../UilitiesScript/SelectableEntityGrid.ts" />
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class SupervisorsGrid extends SelectableEntityGrid<SupervisorsRow, any> {
        protected getColumnsKey() { return 'ALgorithm.Supervisors'; }
        protected getDialogType() { return SupervisorsDialog; }
        protected getIdProperty() { return SupervisorsRow.idProperty; }
        protected getInsertPermission() { return SupervisorsRow.insertPermission; }
        protected getLocalTextPrefix() { return SupervisorsRow.localTextPrefix; }
        protected getService() { return SupervisorsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}