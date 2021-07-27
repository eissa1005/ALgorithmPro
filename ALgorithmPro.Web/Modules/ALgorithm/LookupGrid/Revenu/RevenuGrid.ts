/// <reference path="../../ACCMF/ACCMFGrid.ts" />

namespace ALgorithmPro.ALgorithm {

    import FLD = ACCMFRow.Fields;
    @Serenity.Decorators.registerClass()
    export class RevenuGrid extends ACCMFGrid {
        protected getColumnsKey() { return 'ALgorithm.ACCMF'; }
        protected getDialogType() { return ACCMFDialog; }
        protected getIdProperty() { return ACCMFRow.idProperty; }
        protected getInsertPermission() { return ACCMFRow.insertPermission; }
        protected getLocalTextPrefix() { return ACCMFRow.localTextPrefix; }
        protected getService() { return ACCMFService.baseUrl; }
        public SelectTRTY: AS.TRTYType;
        protected form: any;
        public IdPrefixed: string;

        constructor(container: JQuery) {
            super(container);

            switch (RevenuDialog.SelectTRTY) {
                case AS.TRTYType.Revenu:
                    this.SelectTRTY = AS.TRTYType.Revenu;
                    this.IdPrefixed = BS.GetPrefixId(RevenuesForm.formKey);
                    this.form = new RevenuesForm(this.IdPrefixed);
                    break;

                default:
                    break;
            }

            var grid = this.slickGrid;
            grid.onSelectedRowsChanged.subscribe(() => {
                var selectedRow = grid.getSelectedRows()[0];
                var ACCMFRow: ACCMFRow = grid.getDataItem(selectedRow);

                if (ACCMFRow != null || ACCMFRow.ID > 0) {
                    this.form.ACC_NO.value = ACCMFRow.ACC_NO;
                    this.form.ACC_NAME.value = ACCMFRow.ACC_NM_AR;
                }

                this.element.closest(".ui-dialog").find(".ui-dialog-titlebar-close").click();

            });
        }
        protected getInitialTitle() {
            return null;
        }

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return new Common.UserPreferenceStorage();
        }
        protected onViewSubmit() {

            if (!super.onViewSubmit()) {
                return false;
            }

            var request = this.view.params as Serenity.ListRequest;
            request.Criteria = Serenity.Criteria.and(
                request.Criteria, [[FLD.Status], '>', 0],
                request.Criteria, [[FLD.ACC_TY], '=', 2],
                request.Criteria, [[FLD.REC_ID], '=', 8]);
            return true;
        }


    }
}