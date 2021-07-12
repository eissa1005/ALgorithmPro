/// <reference path="../../Common/Helpers/SelectableEntityGrid.ts" />
namespace ALgorithmPro.ALgorithm {

    import fld = ACCMFRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ACCMFGrid extends SelectableEntityGrid<ACCMFRow, any> {
        protected getColumnsKey() { return 'ALgorithm.ACCMF'; }
        protected getDialogType() { return ACCMFDialog; }
        protected getIdProperty() { return ACCMFRow.idProperty; }
        protected getInsertPermission() { return ACCMFRow.insertPermission; }
        protected getLocalTextPrefix() { return ACCMFRow.localTextPrefix; }
        protected getService() { return ACCMFService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
      
    }
}