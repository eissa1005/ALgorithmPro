namespace ALgorithmPro.ALgorithm {
    export interface CheckTRForm {
        CHK_TYP: Serenity.EnumEditor;
        CHK_NO: Serenity.StringEditor;
        TR_TY: Serenity.LookupEditor;
        TR_NO: Serenity.IntegerEditor;
        LN_NO: Serenity.IntegerEditor;
        Doc_TYP: Serenity.EnumEditor;
        TR_DT: Serenity.DateEditor;
        ACC_NO: Serenity.LookupEditor;
        ISU_DT: Serenity.DateEditor;
        DUE_DT: Serenity.DateEditor;
        BNKID: Serenity.LookupEditor;
        BNK_NAME: Serenity.LookupEditor;
        Notes_ACCID: Serenity.LookupEditor;
        Notes_ACCNAME: Serenity.StringEditor;
        Endorsed_NO: Serenity.LookupEditor;
        Endorsed_NAME: Serenity.StringEditor;
        STAT: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        Store_NAME: Serenity.StringEditor;
        TRTY_NAME: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        STAT_DT: Serenity.DateEditor;
        AMT: Serenity.DecimalEditor;
        AMT_PAID: Serenity.DecimalEditor;
        TotalValue: Serenity.DecimalEditor;
        ExpenseValue: Serenity.DecimalEditor;
        DEPT_BNKID: Serenity.LookupEditor;
        DEPT_BNKNM: Serenity.StringEditor;
        CBNKID: Serenity.LookupEditor;
        CBNK_NAME: Serenity.StringEditor;
        RPACC_NO: Serenity.LookupEditor;
        RPACC_NAME: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        DIFF_VL: Serenity.DecimalEditor;
        ACC_NO2: Serenity.LookupEditor;
        CashBoxID: Serenity.LookupEditor;
        DSCR_AR: Serenity.TextAreaEditor;
        POSTED: Serenity.BooleanEditor;
        SER_NO: Serenity.IntegerEditor;
        CRDB: Serenity.IntegerEditor;
        CHKPOST: Serenity.BooleanEditor;
        File_NO: Serenity.StringEditor;
        PAY_TYPE: Serenity.IntegerEditor;
        CUR_VL: Serenity.DecimalEditor;
        REP_CD: Serenity.LookupEditor;
        REP_NAME: Serenity.StringEditor;
        CurrencyID: Serenity.LookupEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        ACC_NO3: Serenity.LookupEditor;
        ACC_NAME3: Serenity.StringEditor;
        ACC_NO4: Serenity.LookupEditor;
        ACC_NAME4: Serenity.StringEditor;
        RMRK: Serenity.TextAreaEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class CheckTRForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.CheckTR';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CheckTRForm.init)  {
                CheckTRForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DateEditor;
                var w5 = s.DecimalEditor;
                var w6 = s.TextAreaEditor;
                var w7 = s.BooleanEditor;

                Q.initFormType(CheckTRForm, [
                    'CHK_TYP', w0,
                    'CHK_NO', w1,
                    'TR_TY', w2,
                    'TR_NO', w3,
                    'LN_NO', w3,
                    'Doc_TYP', w0,
                    'TR_DT', w4,
                    'ACC_NO', w2,
                    'ISU_DT', w4,
                    'DUE_DT', w4,
                    'BNKID', w2,
                    'BNK_NAME', w2,
                    'Notes_ACCID', w2,
                    'Notes_ACCNAME', w1,
                    'Endorsed_NO', w2,
                    'Endorsed_NAME', w1,
                    'STAT', w2,
                    'StoreID', w2,
                    'Store_NAME', w1,
                    'TRTY_NAME', w1,
                    'ACC_NAME', w1,
                    'ACC_NAME2', w1,
                    'STAT_DT', w4,
                    'AMT', w5,
                    'AMT_PAID', w5,
                    'TotalValue', w5,
                    'ExpenseValue', w5,
                    'DEPT_BNKID', w2,
                    'DEPT_BNKNM', w1,
                    'CBNKID', w2,
                    'CBNK_NAME', w1,
                    'RPACC_NO', w2,
                    'RPACC_NAME', w1,
                    'Cash_NAME', w1,
                    'DIFF_VL', w5,
                    'ACC_NO2', w2,
                    'CashBoxID', w2,
                    'DSCR_AR', w6,
                    'POSTED', w7,
                    'SER_NO', w3,
                    'CRDB', w3,
                    'CHKPOST', w7,
                    'File_NO', w1,
                    'PAY_TYPE', w3,
                    'CUR_VL', w5,
                    'REP_CD', w2,
                    'REP_NAME', w1,
                    'CurrencyID', w2,
                    'Currency_NAME', w1,
                    'RATE', w5,
                    'ACC_NO3', w2,
                    'ACC_NAME3', w1,
                    'ACC_NO4', w2,
                    'ACC_NAME4', w1,
                    'RMRK', w6,
                    'EnteredBy', w1,
                    'EntryDate', w4,
                    'UpdatedBy', w1,
                    'UpdateDate', w4
                ]);
            }
        }
    }
}
