namespace ALgorithmPro.ALgorithm {
    export interface CashReceiveForm {
        ASTRHID: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        Doc_Number: Serenity.StringEditor;
        TR_TY: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        TR_DT: Serenity.DateEditor;
        CurrencyID: Serenity.LookupEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        TotalValue: Serenity.DecimalEditor;
        ACC_NO2: Serenity.LookupEditor;
        REP_CD: Serenity.LookupEditor;
        REP_CD2: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        RMRK: Serenity.TextAreaEditor;
        RMRK2: Serenity.TextAreaEditor;
        HDSCR_AR: Serenity.TextAreaEditor;
        ExpensesID: Serenity.StringEditor;
        ExpensesName: Serenity.StringEditor;
        SUM_CD: Serenity.LookupEditor;
        ACC_NAME2: Serenity.StringEditor;
        CashBoxID: Serenity.LookupEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_DS: Serenity.IntegerEditor;
        Cash_NAME: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        GLHeaderID: Serenity.StringEditor;
        PStoreID: Serenity.StringEditor;
        PTR_TY: Serenity.IntegerEditor;
        PTR_NO: Serenity.IntegerEditor;
        SupervisorID: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        HDSCR_EN: Serenity.StringEditor;
        Paid: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        Flag: Serenity.IntegerEditor;
        BALDB: Serenity.DecimalEditor;
        BALCR: Serenity.DecimalEditor;
        BAL: Serenity.DecimalEditor;
        SSUM_CD: Serenity.LookupEditor;
        ACC_NO3: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        CHK_NO: Serenity.StringEditor;
        CHK_TYP: Serenity.IntegerEditor;
        CHKTYP_NAME: Serenity.StringEditor;
        CHKTRTY: Serenity.IntegerEditor;
        CHKTRTY_NAME: Serenity.StringEditor;
        ISU_DT: Serenity.DateEditor;
        DUE_DT: Serenity.DateEditor;
        AMT: Serenity.DecimalEditor;
        AMT_PAID: Serenity.DecimalEditor;
        CHK_EXPENSVL: Serenity.DecimalEditor;
        CHK_TotalValue: Serenity.DecimalEditor;
        BNKID: Serenity.StringEditor;
        BNK_NAME: Serenity.StringEditor;
        CBNKID: Serenity.StringEditor;
        CBNK_NAME: Serenity.StringEditor;
        RPACC_ACCNO: Serenity.StringEditor;
        RPACC_NAME: Serenity.StringEditor;
        DEPT_BNKID: Serenity.StringEditor;
        DEPT_BNKNAME: Serenity.StringEditor;
        Notes_ACCNO: Serenity.StringEditor;
        Notes_ACCNAME: Serenity.StringEditor;
        Endorsed_ACCNO: Serenity.StringEditor;
        Endorsed_NAME: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        EXPENSE_VL: Serenity.DecimalEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        GlPosted: Serenity.BooleanEditor;
        CloseStatus: Serenity.IntegerEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class CashReceiveForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm/CashReceive';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CashReceiveForm.init)  {
                CashReceiveForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DateEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.EnumEditor;
                var w6 = s.TextAreaEditor;
                var w7 = s.BooleanEditor;

                Q.initFormType(CashReceiveForm, [
                    'ASTRHID', w0,
                    'TR_NO', w1,
                    'Doc_Number', w0,
                    'TR_TY', w2,
                    'StoreID', w2,
                    'TR_DT', w3,
                    'CurrencyID', w2,
                    'ACC_NO', w0,
                    'ACC_NAME', w0,
                    'TotalValue', w4,
                    'ACC_NO2', w2,
                    'REP_CD', w2,
                    'REP_CD2', w2,
                    'CST_CD', w2,
                    'Status', w5,
                    'RMRK', w6,
                    'RMRK2', w6,
                    'HDSCR_AR', w6,
                    'ExpensesID', w0,
                    'ExpensesName', w0,
                    'SUM_CD', w2,
                    'ACC_NAME2', w0,
                    'CashBoxID', w2,
                    'TRTY_NAME', w0,
                    'TR_DS', w1,
                    'Cash_NAME', w0,
                    'Store_NAME', w0,
                    'GLHeaderID', w0,
                    'PStoreID', w0,
                    'PTR_TY', w1,
                    'PTR_NO', w1,
                    'SupervisorID', w0,
                    'CST_NAME', w0,
                    'HDSCR_EN', w0,
                    'Paid', w4,
                    'NetTotal', w4,
                    'Flag', w1,
                    'BALDB', w4,
                    'BALCR', w4,
                    'BAL', w4,
                    'SSUM_CD', w2,
                    'ACC_NO3', w0,
                    'ACC_NAME3', w0,
                    'CHK_NO', w0,
                    'CHK_TYP', w1,
                    'CHKTYP_NAME', w0,
                    'CHKTRTY', w1,
                    'CHKTRTY_NAME', w0,
                    'ISU_DT', w3,
                    'DUE_DT', w3,
                    'AMT', w4,
                    'AMT_PAID', w4,
                    'CHK_EXPENSVL', w4,
                    'CHK_TotalValue', w4,
                    'BNKID', w0,
                    'BNK_NAME', w0,
                    'CBNKID', w0,
                    'CBNK_NAME', w0,
                    'RPACC_ACCNO', w0,
                    'RPACC_NAME', w0,
                    'DEPT_BNKID', w0,
                    'DEPT_BNKNAME', w0,
                    'Notes_ACCNO', w0,
                    'Notes_ACCNAME', w0,
                    'Endorsed_ACCNO', w0,
                    'Endorsed_NAME', w0,
                    'REP_NAME', w0,
                    'REP_NAME2', w0,
                    'EXPENSE_VL', w4,
                    'Currency_NAME', w0,
                    'RATE', w4,
                    'CUR_VL', w4,
                    'GlPosted', w7,
                    'CloseStatus', w1,
                    'EnteredBy', w0,
                    'EntryDate', w3,
                    'UpdatedBy', w0,
                    'UpdateDate', w3
                ]);
            }
        }
    }
}
