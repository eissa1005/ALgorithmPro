namespace ALgorithmPro.ALgorithm {
    export interface ItemsBarcodeForm {
        ItemID: Serenity.StringEditor;
        Barcode: Serenity.StringEditor;
        Item_CD: Serenity.StringEditor;
        PKID: Serenity.LookupEditor;
        PKName: Serenity.StringEditor;
        PKRAT: Serenity.DecimalEditor;
        SPRC2: Serenity.DecimalEditor;
        SPRC3: Serenity.DecimalEditor;
        SPRC4: Serenity.DecimalEditor;
        SPRC5: Serenity.DecimalEditor;
        SPRC6: Serenity.DecimalEditor;
        BGNCST: Serenity.DecimalEditor;
        UCST: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        UpdatedBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class ItemsBarcodeForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.ItemsBarcode';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ItemsBarcodeForm.init)  {
                ItemsBarcodeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.EnumEditor;
                var w4 = s.DateEditor;

                Q.initFormType(ItemsBarcodeForm, [
                    'ItemID', w0,
                    'Barcode', w0,
                    'Item_CD', w0,
                    'PKID', w1,
                    'PKName', w0,
                    'PKRAT', w2,
                    'SPRC2', w2,
                    'SPRC3', w2,
                    'SPRC4', w2,
                    'SPRC5', w2,
                    'SPRC6', w2,
                    'BGNCST', w2,
                    'UCST', w2,
                    'Price', w2,
                    'Status', w3,
                    'EnteredBy', w0,
                    'UpdatedBy', w0,
                    'EntryDate', w4,
                    'UpdateDate', w4
                ]);
            }
        }
    }
}
