
namespace ALgorithmPro.ALgorithm {

    /**
     * Our custom product editor type
     */
    @Serenity.Decorators.registerEditor()
    export class ChangingLookupTextEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, ItemsBarcodeRow> {

        constructor(container: JQuery, options: Serenity.LookupEditorOptions) {
            super(container, options);
        }

        protected getLookupKey() {
            return ALgorithm.ItemsBarcodeRow.localTextPrefix;
        }

        protected getItemText(item: ALgorithm.ItemsBarcodeRow, lookup: Q.Lookup<ALgorithm.ItemsBarcodeRow>) {
            return super.getItemText(item, lookup) +
                ' (' +
                '$' + Q.formatNumber(item.SPRC2, '#,##0.00') +
                '$' + Q.formatNumber(item.SPRC3, '#,##0.00') +
                '$' + Q.formatNumber(item.SPRC4, '#,##0.00') +
                '$' + Q.formatNumber(item.SPRC5, '#,##0.00') +
                '$' + Q.formatNumber(item.SPRC6, '#,##0.00') +
                '$' + Q.formatNumber(item.UCST, '#,##0.00') + ')';
        }
    }
}