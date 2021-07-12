namespace ALgorithmPro.ALgorithm {
    export interface ItemsForm {
        Item_CD: Serenity.StringEditor;
        Item_Name_AR: Serenity.StringEditor;
        Item_Name_EN: Serenity.StringEditor;
        MITM_CD: Serenity.LookupEditor;
        CITM_CD: Serenity.LookupEditor;
        ItemTypes: Serenity.LookupEditor;
        SLS_PK: Serenity.LookupEditor;
        PRCH_PK: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        ItemSupplier: Serenity.BooleanEditor;
        RMRK: Serenity.TextAreaEditor;
        DetailList: ItemBarcodeEditor;
        ItemCost: Serenity.DecimalEditor;
        PPRC2: Serenity.DecimalEditor;
        SPRC2: Serenity.DecimalEditor;
        PPRC3: Serenity.DecimalEditor;
        SPRC3: Serenity.DecimalEditor;
        PPRC4: Serenity.DecimalEditor;
        SPRC4: Serenity.DecimalEditor;
        PPRC5: Serenity.DecimalEditor;
        SPRC5: Serenity.DecimalEditor;
        PPRC6: Serenity.DecimalEditor;
        SPRC6: Serenity.DecimalEditor;
        SALDISC_TYPE: Serenity.EnumEditor;
        PURDISC_TYPE: Serenity.EnumEditor;
        SDISC1: Serenity.DecimalEditor;
        PDISC1: Serenity.DecimalEditor;
        SDISC2: Serenity.DecimalEditor;
        PDISC2: Serenity.DecimalEditor;
        SDISC3: Serenity.DecimalEditor;
        PDISC3: Serenity.DecimalEditor;
        TAX_TYPE: Serenity.EnumEditor;
        TAX1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        TAX4: Serenity.DecimalEditor;
        BGNBAL: Serenity.DecimalEditor;
        BGNCOST: Serenity.DecimalEditor;
        UCOST: Serenity.DecimalEditor;
        ItemBAL: Serenity.DecimalEditor;
        MinQty: Serenity.DecimalEditor;
        MaxQty: Serenity.DecimalEditor;
        Itemlimit: Serenity.DecimalEditor;
        MITM_NM_AR: Serenity.StringEditor;
        MITM_NM_EN: Serenity.StringEditor;
        ItemPhoto: Serenity.StringEditor;
        GLNO1: Serenity.StringEditor;
        GLNO2: Serenity.StringEditor;
        GLNO3: Serenity.StringEditor;
        EnteredBy: Serenity.StringEditor;
        UpdatedBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class ItemsForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.Items';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ItemsForm.init)  {
                ItemsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EnumEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.TextAreaEditor;
                var w5 = ItemBarcodeEditor;
                var w6 = s.DecimalEditor;
                var w7 = s.DateEditor;

                Q.initFormType(ItemsForm, [
                    'Item_CD', w0,
                    'Item_Name_AR', w0,
                    'Item_Name_EN', w0,
                    'MITM_CD', w1,
                    'CITM_CD', w1,
                    'ItemTypes', w1,
                    'SLS_PK', w1,
                    'PRCH_PK', w1,
                    'StoreID', w1,
                    'Status', w2,
                    'ItemSupplier', w3,
                    'RMRK', w4,
                    'DetailList', w5,
                    'ItemCost', w6,
                    'PPRC2', w6,
                    'SPRC2', w6,
                    'PPRC3', w6,
                    'SPRC3', w6,
                    'PPRC4', w6,
                    'SPRC4', w6,
                    'PPRC5', w6,
                    'SPRC5', w6,
                    'PPRC6', w6,
                    'SPRC6', w6,
                    'SALDISC_TYPE', w2,
                    'PURDISC_TYPE', w2,
                    'SDISC1', w6,
                    'PDISC1', w6,
                    'SDISC2', w6,
                    'PDISC2', w6,
                    'SDISC3', w6,
                    'PDISC3', w6,
                    'TAX_TYPE', w2,
                    'TAX1', w6,
                    'TAX2', w6,
                    'TAX3', w6,
                    'TAX4', w6,
                    'BGNBAL', w6,
                    'BGNCOST', w6,
                    'UCOST', w6,
                    'ItemBAL', w6,
                    'MinQty', w6,
                    'MaxQty', w6,
                    'Itemlimit', w6,
                    'MITM_NM_AR', w0,
                    'MITM_NM_EN', w0,
                    'ItemPhoto', w0,
                    'GLNO1', w0,
                    'GLNO2', w0,
                    'GLNO3', w0,
                    'EnteredBy', w0,
                    'UpdatedBy', w0,
                    'EntryDate', w7,
                    'UpdateDate', w7
                ]);
            }
        }
    }
}
