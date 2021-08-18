
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class TransferToDialog extends Serenity.EntityDialog<TransferToRow, any> {
        protected getFormKey() { return TransferToForm.formKey; }
        protected getIdProperty() { return TransferToRow.idProperty; }
        protected getLocalTextPrefix() { return TransferToRow.localTextPrefix; }
        protected getNameProperty() { return TransferToRow.nameProperty; }
        protected getService() { return TransferToService.baseUrl; }
        protected getDeletePermission() { return TransferToRow.deletePermission; }
        protected getInsertPermission() { return TransferToRow.insertPermission; }
        protected getUpdatePermission() { return TransferToRow.updatePermission; }

        protected form: TransferToForm;
        public static OldValue: string;
        public static NewValue: string;
        public static StoreID: string;
        public static Grid: Slick.Grid;
        public SelectTRTY: AS.TRTYType;

        constructor() {
            super();

            this.form = new TransferToForm(this.idPrefix);

        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.toolbar.findButton('tool-button add-button').toggle(this.isNew()).hide();
            this.toolbar.findButton('tool-button add-button').toggle(this.isEditMode()).hide();
            this.toolbar.findButton('tool-button add-button').toggle(this.isDeleted()).hide();
        }

        protected getDialogButtons() {

            var buttons = super.getDialogButtons();
            var button = buttons.filter(x => x.cssClass = 'tool-button add-button');
            return buttons;
        }

        getToolbarButtons() {

            var buttons = super.getToolbarButtons();
            buttons.push(ALgorithmPro.Common.ReportHelper.CreateReportButton({
                title: 'Print',
                cssClass: 'print-button',
                reportKey: 'ALgorithm.TransferToDetail',
                Url: 'TransferTo/Index',
                getParams: () => ({
                    DetailID: this.get_entityId()
                })
            }));

            return buttons;
        }

        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton('tool-button add-button"').toggle(this.isNew()).hide();
            this.toolbar.findButton('tool-button add-button"').toggle(this.isEditMode()).hide();
            this.toolbar.findButton('tool-button add-button"').toggle(this.isDeleted()).hide();


            this.toolbar.findButton('export-pdf-button').toggle(this.isNew()).hide();
            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            this.toolbar.findButton('pdf-button').toggle(this.isNew()).hide();
            this.toolbar.findButton('pdf-button').toggle(this.isEditMode()).show();
        }
    }
}