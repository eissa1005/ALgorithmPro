namespace ALgorithmPro.ALgorithm {
    export interface ItemsLocForm {
        StoreID: Serenity.LookupEditor;
        Item_CD: Serenity.StringEditor;
        Item_Name_AR: Serenity.StringEditor;
        Item_Name_EN: Serenity.StringEditor;
        TR_TY: Serenity.IntegerEditor;
        BGNBAL: Serenity.DecimalEditor;
        BGNCST: Serenity.DecimalEditor;
        UCST: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        INQTY: Serenity.DecimalEditor;
        OUTQTY: Serenity.DecimalEditor;
        BAL: Serenity.DecimalEditor;
        PackageID: Serenity.LookupEditor;
        BGNBONASQTY: Serenity.DecimalEditor;
        BONASQTY: Serenity.DecimalEditor;
        MinQty: Serenity.DecimalEditor;
        MaxQty: Serenity.DecimalEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class ItemsLocForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.ItemsLoc';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ItemsLocForm.init)  {
                ItemsLocForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.DateEditor;

                Q.initFormType(ItemsLocForm, [
                    'StoreID', w0,
                    'Item_CD', w1,
                    'Item_Name_AR', w1,
                    'Item_Name_EN', w1,
                    'TR_TY', w2,
                    'BGNBAL', w3,
                    'BGNCST', w3,
                    'UCST', w3,
                    'Price', w3,
                    'INQTY', w3,
                    'OUTQTY', w3,
                    'BAL', w3,
                    'PackageID', w0,
                    'BGNBONASQTY', w3,
                    'BONASQTY', w3,
                    'MinQty', w3,
                    'MaxQty', w3,
                    'EnteredBy', w1,
                    'EntryDate', w4,
                    'UpdatedBy', w1,
                    'UpdateDate', w4
                ]);
            }
        }
    }
}
