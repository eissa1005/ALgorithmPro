namespace ALgorithmPro.ALgorithm {
    export interface SUMSForm {
        SUM_CD: Serenity.StringEditor;
        SUM_NM_AR: Serenity.StringEditor;
        SUM_NM_EN: Serenity.StringEditor;
        MSUM_CD: Serenity.StringEditor;
        SUM_CATG: Serenity.StringEditor;
        SSUM_CD: Serenity.LookupEditor;
        Phone: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        ADDRS: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
        ACC_NO: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class SUMSForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.SUMS';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SUMSForm.init)  {
                SUMSForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EnumEditor;
                var w3 = s.DateEditor;

                Q.initFormType(SUMSForm, [
                    'SUM_CD', w0,
                    'SUM_NM_AR', w0,
                    'SUM_NM_EN', w0,
                    'MSUM_CD', w0,
                    'SUM_CATG', w0,
                    'SSUM_CD', w1,
                    'Phone', w0,
                    'Mobile', w0,
                    'ADDRS', w0,
                    'RegionID', w1,
                    'ACC_NO', w0,
                    'Status', w2,
                    'EnteredBy', w0,
                    'EntryDate', w3,
                    'UpdatedBy', w0,
                    'UpdateDate', w3
                ]);
            }
        }
    }
}
