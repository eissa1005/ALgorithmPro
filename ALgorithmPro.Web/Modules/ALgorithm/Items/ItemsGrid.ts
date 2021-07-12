/// <reference path="../../Common/Helpers/SelectableEntityGrid.ts" />
namespace ALgorithmPro.ALgorithm {
    @Serenity.Decorators.registerClass()
    export class ItemsGrid extends SelectableEntityGrid<ItemsRow, any> {
        protected getColumnsKey() { return 'ALgorithm.Items'; }
        protected getDialogType() { return ItemsDialog; }
        protected getIdProperty() { return ItemsRow.idProperty; }
        protected getInsertPermission() { return ItemsRow.insertPermission; }
        protected getLocalTextPrefix() { return ItemsRow.localTextPrefix; }
        protected getService() { return ItemsService.baseUrl; }
        
        
        public Prefix: string;
        constructor(container: JQuery) {
            super(container);
         
        }
       
        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }
    }
    
}