namespace ALgorithmPro.ALgorithm {
    export interface ChecksForm {
        CHK_NO: Serenity.StringEditor;
        CHK_TYP: Serenity.EnumEditor;
        DOC_TYP: Serenity.EnumEditor;
        StoreID: Serenity.LookupEditor;
        TR_TY: Serenity.LookupEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        LN_NO: Serenity.IntegerEditor;
        CRDB: Serenity.IntegerEditor;
        Store_NAME: Serenity.StringEditor;
        ACC_NO: Serenity.LookupEditor;
        ACC_NAME: Serenity.StringEditor;
        BNKID: Serenity.LookupEditor;
        AMT: Serenity.DecimalEditor;
        AMT_PAID: Serenity.DecimalEditor;
        TotalValue: Serenity.DecimalEditor;
        ExpenseValue: Serenity.DecimalEditor;
        STAT: Serenity.EnumEditor;
        RPACC_NO: Serenity.LookupEditor;
        RPACC_NAME: Serenity.StringEditor;
        Notes_ACCNO: Serenity.LookupEditor;
        Notes_ACCNAME: Serenity.StringEditor;
        Endorsed_NO: Serenity.LookupEditor;
        Endorsed_NAME: Serenity.StringEditor;
        CashBoxID: Serenity.LookupEditor;
        Cash_NAME: Serenity.StringEditor;
        Currency_NAME: Serenity.StringEditor;
        CUR_VL: Serenity.DecimalEditor;
        ISU_DT: Serenity.DateEditor;
        DUE_DT: Serenity.DateEditor;
        BNK_NAME: Serenity.StringEditor;
        CBNKID: Serenity.LookupEditor;
        CBNK_NAME: Serenity.StringEditor;
        File_NO: Serenity.StringEditor;
        LAST_ACC: Serenity.StringEditor;
        STAT_DT: Serenity.DateEditor;
        DEPT_BNKID: Serenity.LookupEditor;
        DEPT_BNKNM: Serenity.StringEditor;
        ByHand: Serenity.StringEditor;
        TRNSACC: Serenity.StringEditor;
        Rep_CD: Serenity.LookupEditor;
        Rep_NAME: Serenity.StringEditor;
        Rep_CD2: Serenity.LookupEditor;
        Rep_NAME2: Serenity.StringEditor;
        POSTED: Serenity.BooleanEditor;
        SUM_CD: Serenity.LookupEditor;
        SUM_NAME: Serenity.StringEditor;
        GL_NO: Serenity.IntegerEditor;
        GL_TY: Serenity.IntegerEditor;
        DOC_NO: Serenity.StringEditor;
        RMRK2: Serenity.StringEditor;
        CurrencyID: Serenity.LookupEditor;
        RATE: Serenity.DecimalEditor;
        Status: Serenity.EnumEditor;
        RMRK: Serenity.TextAreaEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class ChecksForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.Checks';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ChecksForm.init)  {
                ChecksForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.LookupEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.DateEditor;
                var w6 = s.BooleanEditor;
                var w7 = s.TextAreaEditor;

                Q.initFormType(ChecksForm, [
                    'CHK_NO', w0,
                    'CHK_TYP', w1,
                    'DOC_TYP', w1,
                    'StoreID', w2,
                    'TR_TY', w2,
                    'TRTY_NAME', w0,
                    'TR_NO', w3,
                    'LN_NO', w3,
                    'CRDB', w3,
                    'Store_NAME', w0,
                    'ACC_NO', w2,
                    'ACC_NAME', w0,
                    'BNKID', w2,
                    'AMT', w4,
                    'AMT_PAID', w4,
                    'TotalValue', w4,
                    'ExpenseValue', w4,
                    'STAT', w1,
                    'RPACC_NO', w2,
                    'RPACC_NAME', w0,
                    'Notes_ACCNO', w2,
                    'Notes_ACCNAME', w0,
                    'Endorsed_NO', w2,
                    'Endorsed_NAME', w0,
                    'CashBoxID', w2,
                    'Cash_NAME', w0,
                    'Currency_NAME', w0,
                    'CUR_VL', w4,
                    'ISU_DT', w5,
                    'DUE_DT', w5,
                    'BNK_NAME', w0,
                    'CBNKID', w2,
                    'CBNK_NAME', w0,
                    'File_NO', w0,
                    'LAST_ACC', w0,
                    'STAT_DT', w5,
                    'DEPT_BNKID', w2,
                    'DEPT_BNKNM', w0,
                    'ByHand', w0,
                    'TRNSACC', w0,
                    'Rep_CD', w2,
                    'Rep_NAME', w0,
                    'Rep_CD2', w2,
                    'Rep_NAME2', w0,
                    'POSTED', w6,
                    'SUM_CD', w2,
                    'SUM_NAME', w0,
                    'GL_NO', w3,
                    'GL_TY', w3,
                    'DOC_NO', w0,
                    'RMRK2', w0,
                    'CurrencyID', w2,
                    'RATE', w4,
                    'Status', w1,
                    'RMRK', w7,
                    'EnteredBy', w0,
                    'EntryDate', w5,
                    'UpdatedBy', w0,
                    'UpdateDate', w5
                ]);
            }
        }
    }
}
