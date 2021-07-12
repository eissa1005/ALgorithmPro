namespace ALgorithmPro.ALgorithm {
    export interface ASCSTForm {
        CST_CD: Serenity.StringEditor;
        CST_NM_AR: Serenity.StringEditor;
        CST_NM_EN: Serenity.StringEditor;
        MCST_CD: Serenity.StringEditor;
        CST_CTG: Serenity.StringEditor;
        CST_TY: Serenity.IntegerEditor;
        SUM_CD: Serenity.LookupEditor;
        SSUM_CD: Serenity.LookupEditor;
        ACC_NO: Serenity.LookupEditor;
        ACC_NM_AR: Serenity.StringEditor;
        ACC_NM_EN: Serenity.StringEditor;
        CSTRAT: Serenity.DecimalEditor;
        DATE_IN: Serenity.DateEditor;
        Phone: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        BGNBAL: Serenity.DecimalEditor;
        INV_NO: Serenity.IntegerEditor;
        INV_DT: Serenity.DateEditor;
        ITM_DISC: Serenity.StringEditor;
        QTY: Serenity.DecimalEditor;
        BANK_CD: Serenity.StringEditor;
        ETMD_CUR: Serenity.StringEditor;
        ETMD_RATE: Serenity.DecimalEditor;
        ITM_RSV_DT: Serenity.DateEditor;
        ACT_DT: Serenity.DateEditor;
        ITM_LOC_DT: Serenity.DateEditor;
        MSTR_NM: Serenity.StringEditor;
        MSTR_ADD: Serenity.StringEditor;
        MSTR_TEL: Serenity.StringEditor;
        ACC_ADD: Serenity.StringEditor;
        POST: Serenity.StringEditor;
        Accept: Serenity.IntegerEditor;
        DISC: Serenity.DecimalEditor;
        Start_DT: Serenity.DateEditor;
        End_Dt: Serenity.DateEditor;
        Dor_NO: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_TOT: Serenity.DecimalEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class ASCSTForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.ASCST';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ASCSTForm.init)  {
                ASCSTForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.DateEditor;
                var w5 = s.EnumEditor;

                Q.initFormType(ASCSTForm, [
                    'CST_CD', w0,
                    'CST_NM_AR', w0,
                    'CST_NM_EN', w0,
                    'MCST_CD', w0,
                    'CST_CTG', w0,
                    'CST_TY', w1,
                    'SUM_CD', w2,
                    'SSUM_CD', w2,
                    'ACC_NO', w2,
                    'ACC_NM_AR', w0,
                    'ACC_NM_EN', w0,
                    'CSTRAT', w3,
                    'DATE_IN', w4,
                    'Phone', w0,
                    'Mobile', w0,
                    'BGNBAL', w3,
                    'INV_NO', w1,
                    'INV_DT', w4,
                    'ITM_DISC', w0,
                    'QTY', w3,
                    'BANK_CD', w0,
                    'ETMD_CUR', w0,
                    'ETMD_RATE', w3,
                    'ITM_RSV_DT', w4,
                    'ACT_DT', w4,
                    'ITM_LOC_DT', w4,
                    'MSTR_NM', w0,
                    'MSTR_ADD', w0,
                    'MSTR_TEL', w0,
                    'ACC_ADD', w0,
                    'POST', w0,
                    'Accept', w1,
                    'DISC', w3,
                    'Start_DT', w4,
                    'End_Dt', w4,
                    'Dor_NO', w0,
                    'TR_NO', w1,
                    'TR_TOT', w3,
                    'Status', w5,
                    'EnteredBy', w0,
                    'EntryDate', w4,
                    'UpdatedBy', w0,
                    'UpdateDate', w4
                ]);
            }
        }
    }
}
