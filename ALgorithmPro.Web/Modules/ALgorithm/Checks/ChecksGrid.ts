/// <reference path="../../UilitiesScript/SelectableEntityGrid.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ChecksGrid extends SelectableEntityGrid<ChecksRow, any> {
        protected getColumnsKey() { return 'ALgorithm.Checks'; }
        protected getDialogType() { return ChecksDialog; }
        protected getIdProperty() { return ChecksRow.idProperty; }
        protected getInsertPermission() { return ChecksRow.insertPermission; }
        protected getLocalTextPrefix() { return ChecksRow.localTextPrefix; }
        protected getService() { return ChecksService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }
    }
}