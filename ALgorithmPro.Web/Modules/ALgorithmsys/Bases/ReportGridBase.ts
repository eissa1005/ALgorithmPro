namespace AS {
    @Serenity.Decorators.filterable()
    export class ReportGridBase<TItem, TOptions> extends AS.GridBase<TItem, TOptions> {

        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(0, 1);

            return buttons;
        }

        protected getColumns() {
            let columns = super.getColumns();

            columns.splice(0, 1);

            return columns;
        }

    }
}