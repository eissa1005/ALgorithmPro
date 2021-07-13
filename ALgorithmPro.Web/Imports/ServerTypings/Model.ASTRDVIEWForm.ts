namespace ALgorithmPro.Model {
    export interface ASTRDVIEWForm {
        HeaderID: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_TY: Serenity.IntegerEditor;
        TR_DT: Serenity.DateEditor;
        TRTY_NAME: Serenity.StringEditor;
        StoreID: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        ReferenNumer: Serenity.IntegerEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        HDSCR_AR: Serenity.StringEditor;
        TR_DS_AR: Serenity.StringEditor;
        SupervisorID: Serenity.StringEditor;
        Supervisor_NAME: Serenity.StringEditor;
        TR_DS_EN: Serenity.StringEditor;
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_CD2: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        CST_CD: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_CD: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_CD: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        PStoreID: Serenity.StringEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        Priceedit: Serenity.BooleanEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        HdrAddtionsR: Serenity.DecimalEditor;
        CurrencyID: Serenity.StringEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        LN_NO: Serenity.IntegerEditor;
        Item_CD: Serenity.StringEditor;
        Item_Name_AR: Serenity.StringEditor;
        ItemBarCode: Serenity.StringEditor;
        ITM_NM_AR: Serenity.StringEditor;
        PKID: Serenity.StringEditor;
        PKName: Serenity.StringEditor;
        PK: Serenity.DecimalEditor;
        ItemBAL: Serenity.DecimalEditor;
        QTY: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        PKPRC: Serenity.DecimalEditor;
        PKCST: Serenity.DecimalEditor;
        Value: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        DISC1: Serenity.DecimalEditor;
        DISC2: Serenity.DecimalEditor;
        DISC3: Serenity.DecimalEditor;
        DISC4: Serenity.DecimalEditor;
        DISCVAL: Serenity.DecimalEditor;
        TAX1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        TAXVAL: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NET: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        CostValue: Serenity.DecimalEditor;
        FIFOVL: Serenity.DecimalEditor;
        LIFOVL: Serenity.DecimalEditor;
        PriceID: Serenity.StringEditor;
        PriceName: Serenity.StringEditor;
        ValueAfterTAX: Serenity.DecimalEditor;
        RestoreQty: Serenity.DecimalEditor;
        ReturnQty: Serenity.DecimalEditor;
        GRP: Serenity.IntegerEditor;
        Phone1: Serenity.StringEditor;
        Phone2: Serenity.StringEditor;
        Phone3: Serenity.StringEditor;
        ADDRS1: Serenity.StringEditor;
        ADDRS2: Serenity.StringEditor;
        MOBIL1: Serenity.StringEditor;
        MOBIL2: Serenity.StringEditor;
        REC_ID: Serenity.IntegerEditor;
        HDISC1R: Serenity.DecimalEditor;
        HDISC2R: Serenity.DecimalEditor;
        HDISC3R: Serenity.DecimalEditor;
        SHDISCR: Serenity.DecimalEditor;
        DISC1R: Serenity.DecimalEditor;
        DISC2R: Serenity.DecimalEditor;
        DISC3R: Serenity.DecimalEditor;
        SDISCR: Serenity.DecimalEditor;
        TAX1R: Serenity.DecimalEditor;
        TAX2R: Serenity.DecimalEditor;
        TAX3R: Serenity.DecimalEditor;
        STAXR: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        DISC_CUR_VAL: Serenity.DecimalEditor;
        TAX_CUR_VAL: Serenity.DecimalEditor;
        ACCBAL_CUR_VL: Serenity.DecimalEditor;
        SPRC6: Serenity.DecimalEditor;
        SPRC5: Serenity.DecimalEditor;
        SPRC4: Serenity.DecimalEditor;
        SPRC3: Serenity.DecimalEditor;
        SPRC2: Serenity.DecimalEditor;
        UCST: Serenity.DecimalEditor;
        Status: Serenity.IntegerEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class ASTRDVIEWForm extends Serenity.PrefixedContext {
        static formKey = 'Model.ASTRDVIEW';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ASTRDVIEWForm.init)  {
                ASTRDVIEWForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DecimalEditor;

                Q.initFormType(ASTRDVIEWForm, [
                    'HeaderID', w0,
                    'TR_NO', w1,
                    'TR_TY', w1,
                    'TR_DT', w2,
                    'TRTY_NAME', w0,
                    'StoreID', w0,
                    'Store_NAME', w0,
                    'ReferenNumer', w1,
                    'ACC_NO', w0,
                    'ACC_NAME', w0,
                    'ACC_NO2', w0,
                    'ACC_NAME2', w0,
                    'ACC_NO3', w0,
                    'ACC_NAME3', w0,
                    'HDSCR_AR', w0,
                    'TR_DS_AR', w0,
                    'SupervisorID', w0,
                    'Supervisor_NAME', w0,
                    'TR_DS_EN', w0,
                    'REP_CD', w0,
                    'REP_NAME', w0,
                    'REP_CD2', w0,
                    'REP_NAME2', w0,
                    'CST_CD', w0,
                    'CST_NAME', w0,
                    'SUM_CD', w0,
                    'SUM_NAME', w0,
                    'SSUM_CD', w0,
                    'SSUM_NAME', w0,
                    'PStoreID', w0,
                    'PTR_NO', w1,
                    'PTR_TY', w1,
                    'Priceedit', w3,
                    'EXPENSEVL', w4,
                    'HAddtions', w4,
                    'HdrAddtionsR', w4,
                    'CurrencyID', w0,
                    'Currency_NAME', w0,
                    'RATE', w4,
                    'LN_NO', w1,
                    'Item_CD', w0,
                    'Item_Name_AR', w0,
                    'ItemBarCode', w0,
                    'ITM_NM_AR', w0,
                    'PKID', w0,
                    'PKName', w0,
                    'PK', w4,
                    'ItemBAL', w4,
                    'QTY', w4,
                    'Price', w4,
                    'PKPRC', w4,
                    'PKCST', w4,
                    'Value', w4,
                    'Total', w4,
                    'DISC1', w4,
                    'DISC2', w4,
                    'DISC3', w4,
                    'DISC4', w4,
                    'DISCVAL', w4,
                    'TAX1', w4,
                    'TAX2', w4,
                    'TAX3', w4,
                    'TAXVAL', w4,
                    'NetAfterTAX', w4,
                    'NetBeforeTAX', w4,
                    'NET', w4,
                    'NetTotal', w4,
                    'CostValue', w4,
                    'FIFOVL', w4,
                    'LIFOVL', w4,
                    'PriceID', w0,
                    'PriceName', w0,
                    'ValueAfterTAX', w4,
                    'RestoreQty', w4,
                    'ReturnQty', w4,
                    'GRP', w1,
                    'Phone1', w0,
                    'Phone2', w0,
                    'Phone3', w0,
                    'ADDRS1', w0,
                    'ADDRS2', w0,
                    'MOBIL1', w0,
                    'MOBIL2', w0,
                    'REC_ID', w1,
                    'HDISC1R', w4,
                    'HDISC2R', w4,
                    'HDISC3R', w4,
                    'SHDISCR', w4,
                    'DISC1R', w4,
                    'DISC2R', w4,
                    'DISC3R', w4,
                    'SDISCR', w4,
                    'TAX1R', w4,
                    'TAX2R', w4,
                    'TAX3R', w4,
                    'STAXR', w4,
                    'CUR_VL', w4,
                    'DISC_CUR_VAL', w4,
                    'TAX_CUR_VAL', w4,
                    'ACCBAL_CUR_VL', w4,
                    'SPRC6', w4,
                    'SPRC5', w4,
                    'SPRC4', w4,
                    'SPRC3', w4,
                    'SPRC2', w4,
                    'UCST', w4,
                    'Status', w1,
                    'EnteredBy', w0,
                    'EntryDate', w2,
                    'UpdatedBy', w0,
                    'UpdateDate', w2
                ]);
            }
        }
    }
}
