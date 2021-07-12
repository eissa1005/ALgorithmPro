
namespace ALgorithmPro.ALgorithm {

    import FLD = CheckTRRow.Fields;
    @Serenity.Decorators.registerClass()
    export class CheckTRGrid extends Serenity.EntityGrid<CheckTRRow, any> {
        protected getColumnsKey() { return 'ALgorithm.CheckTR'; }
        protected getDialogType() { return CheckTRDialog; }
        protected getIdProperty() { return CheckTRRow.idProperty; }
        protected getInsertPermission() { return CheckTRRow.insertPermission; }
        protected getLocalTextPrefix() { return CheckTRRow.localTextPrefix; }
        protected getService() { return CheckTRService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

        }
        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }
       
    }
}