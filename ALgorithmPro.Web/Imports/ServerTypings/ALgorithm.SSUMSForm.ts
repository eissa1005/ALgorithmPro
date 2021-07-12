namespace ALgorithmPro.ALgorithm {
    export interface SSUMSForm {
        SSUM_CD: Serenity.StringEditor;
        SSUM_NM_AR: Serenity.StringEditor;
        SSUM_NM_EN: Serenity.StringEditor;
        MSSUM_CD: Serenity.StringEditor;
        SSUM_CST_CD: Serenity.LookupEditor;
        SSUM_CTG: Serenity.StringEditor;
        ST_DT: Serenity.DateEditor;
        FMLY: Serenity.StringEditor;
        GSSUM_CD: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        ADDRS: Serenity.StringEditor;
        SUM_CD: Serenity.LookupEditor;
        FDT: Serenity.DateEditor;
        TDT: Serenity.DateEditor;
        SSUM_CATG: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class SSUMSForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.SSUMS';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SSUMSForm.init)  {
                SSUMSForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.EnumEditor;

                Q.initFormType(SSUMSForm, [
                    'SSUM_CD', w0,
                    'SSUM_NM_AR', w0,
                    'SSUM_NM_EN', w0,
                    'MSSUM_CD', w0,
                    'SSUM_CST_CD', w1,
                    'SSUM_CTG', w0,
                    'ST_DT', w2,
                    'FMLY', w0,
                    'GSSUM_CD', w0,
                    'Phone', w0,
                    'ADDRS', w0,
                    'SUM_CD', w1,
                    'FDT', w2,
                    'TDT', w2,
                    'SSUM_CATG', w0,
                    'Status', w3,
                    'EnteredBy', w0,
                    'EntryDate', w2,
                    'UpdatedBy', w0,
                    'UpdateDate', w2
                ]);
            }
        }
    }
}
