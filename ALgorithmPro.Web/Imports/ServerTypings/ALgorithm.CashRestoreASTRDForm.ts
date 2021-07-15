namespace ALgorithmPro.ALgorithm {
    export interface CashRestoreASTRDForm {
        ID: Serenity.StringEditor;
        DetailID: Serenity.StringEditor;
        PKID: Serenity.LookupEditor;
        PK: Serenity.DecimalEditor;
        Item_CD: Serenity.StringEditor;
        ITM_NM_AR: Serenity.StringEditor;
        QTY: Serenity.DecimalEditor;
        RestoreQty: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        Value: Serenity.DecimalEditor;
        TAX1: Serenity.DecimalEditor;
        DISC1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        DISC2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        TAXVAL: Serenity.DecimalEditor;
        DISC: Serenity.DecimalEditor;
        DISC3: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NET: Serenity.DecimalEditor;
        PKPRC: Serenity.DecimalEditor;
        DISC4: Serenity.DecimalEditor;
        DISC1R: Serenity.DecimalEditor;
        DISC2R: Serenity.DecimalEditor;
        DISC3R: Serenity.DecimalEditor;
        STAX_VL: Serenity.DecimalEditor;
        TAX1R: Serenity.DecimalEditor;
        TAX2R: Serenity.DecimalEditor;
        TAX3R: Serenity.DecimalEditor;
        ReturnQty: Serenity.DecimalEditor;
        ItemBAL: Serenity.DecimalEditor;
        HeaderID: Serenity.StringEditor;
        TR_TY: Serenity.LookupEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        LN_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateEditor;
        StoreID: Serenity.LookupEditor;
        Store_NAME: Serenity.StringEditor;
        TR_DS: Serenity.IntegerEditor;
        GRP: Serenity.IntegerEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        TR_DS_AR: Serenity.StringEditor;
        TR_DS_EN: Serenity.StringEditor;
        ItemBarCode: Serenity.StringEditor;
        PKName: Serenity.StringEditor;
        PKCST: Serenity.DecimalEditor;
        PKCSTVL: Serenity.DecimalEditor;
        FIFO: Serenity.DecimalEditor;
        FIFOVL: Serenity.DecimalEditor;
        LIFO: Serenity.DecimalEditor;
        LIFOVL: Serenity.DecimalEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        EXPENSE_CNT: Serenity.DecimalEditor;
        CurrencyID: Serenity.StringEditor;
        Currency_Name: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        DetailRemark: Serenity.DecimalEditor;
        BonusID: Serenity.IntegerEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        PStoreID: Serenity.StringEditor;
        CustomerPrice: Serenity.DecimalEditor;
        PriceID: Serenity.StringEditor;
        PriceLevelId: Serenity.StringEditor;
        CashBoxID: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
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
        ACC_NAME2: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        Recipient: Serenity.StringEditor;
        RecipientDate: Serenity.StringEditor;
        disc_cur_val: Serenity.DecimalEditor;
        tax_cur_val: Serenity.DecimalEditor;
        GLPOST: Serenity.BooleanEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class CashRestoreASTRDForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.CashRestoreASTRD';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CashRestoreASTRDForm.init)  {
                CashRestoreASTRDForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DateEditor;
                var w5 = s.BooleanEditor;
                var w6 = s.EnumEditor;

                Q.initFormType(CashRestoreASTRDForm, [
                    'ID', w0,
                    'DetailID', w0,
                    'PKID', w1,
                    'PK', w2,
                    'Item_CD', w0,
                    'ITM_NM_AR', w0,
                    'QTY', w2,
                    'RestoreQty', w2,
                    'Price', w2,
                    'Value', w2,
                    'TAX1', w2,
                    'DISC1', w2,
                    'TAX2', w2,
                    'DISC2', w2,
                    'TAX3', w2,
                    'TAXVAL', w2,
                    'DISC', w2,
                    'DISC3', w2,
                    'NetBeforeTAX', w2,
                    'NetAfterTAX', w2,
                    'NET', w2,
                    'PKPRC', w2,
                    'DISC4', w2,
                    'DISC1R', w2,
                    'DISC2R', w2,
                    'DISC3R', w2,
                    'STAX_VL', w2,
                    'TAX1R', w2,
                    'TAX2R', w2,
                    'TAX3R', w2,
                    'ReturnQty', w2,
                    'ItemBAL', w2,
                    'HeaderID', w0,
                    'TR_TY', w1,
                    'TRTY_NAME', w0,
                    'TR_NO', w3,
                    'LN_NO', w3,
                    'TR_DT', w4,
                    'StoreID', w1,
                    'Store_NAME', w0,
                    'TR_DS', w3,
                    'GRP', w3,
                    'ACC_NO', w0,
                    'ACC_NAME', w0,
                    'ACC_NO2', w0,
                    'ACC_NO3', w0,
                    'TR_DS_AR', w0,
                    'TR_DS_EN', w0,
                    'ItemBarCode', w0,
                    'PKName', w0,
                    'PKCST', w2,
                    'PKCSTVL', w2,
                    'FIFO', w2,
                    'FIFOVL', w2,
                    'LIFO', w2,
                    'LIFOVL', w2,
                    'EXPENSEVL', w2,
                    'EXPENSE_CNT', w2,
                    'CurrencyID', w0,
                    'Currency_Name', w0,
                    'RATE', w2,
                    'CUR_VL', w2,
                    'DetailRemark', w2,
                    'BonusID', w3,
                    'PTR_NO', w3,
                    'PTR_TY', w3,
                    'PStoreID', w0,
                    'CustomerPrice', w2,
                    'PriceID', w0,
                    'PriceLevelId', w0,
                    'CashBoxID', w0,
                    'Cash_NAME', w0,
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
                    'ACC_NAME2', w0,
                    'ACC_NAME3', w0,
                    'Recipient', w0,
                    'RecipientDate', w0,
                    'disc_cur_val', w2,
                    'tax_cur_val', w2,
                    'GLPOST', w5,
                    'Status', w6,
                    'EnteredBy', w0,
                    'EntryDate', w4,
                    'UpdatedBy', w0,
                    'UpdateDate', w4
                ]);
            }
        }
    }
}
