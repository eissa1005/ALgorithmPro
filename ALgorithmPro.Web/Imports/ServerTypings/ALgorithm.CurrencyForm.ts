namespace ALgorithmPro.ALgorithm {
    export interface CurrencyForm {
        CurrencyID: Serenity.StringEditor;
        Name_AR: Serenity.StringEditor;
        Name_EN: Serenity.StringEditor;
        CUR_RAT: Serenity.DecimalEditor;
        RAT_DT: Serenity.DateEditor;
        RAT_RTIO: Serenity.StringEditor;
        ICUR_RAT: Serenity.DecimalEditor;
        CUR_PRFX_AR: Serenity.StringEditor;
        CUR_PRFX_EN: Serenity.StringEditor;
        CUR_SMPL_AR: Serenity.StringEditor;
        CUR_SMPL_EN: Serenity.StringEditor;
        CUR_RNG: Serenity.DecimalEditor;
        CUR_ACCNO: Serenity.StringEditor;
        ROLL_NO: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        RMRK: Serenity.TextAreaEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class CurrencyForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.Currency';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CurrencyForm.init)  {
                CurrencyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;
                var w3 = s.EnumEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(CurrencyForm, [
                    'CurrencyID', w0,
                    'Name_AR', w0,
                    'Name_EN', w0,
                    'CUR_RAT', w1,
                    'RAT_DT', w2,
                    'RAT_RTIO', w0,
                    'ICUR_RAT', w1,
                    'CUR_PRFX_AR', w0,
                    'CUR_PRFX_EN', w0,
                    'CUR_SMPL_AR', w0,
                    'CUR_SMPL_EN', w0,
                    'CUR_RNG', w1,
                    'CUR_ACCNO', w0,
                    'ROLL_NO', w0,
                    'Status', w3,
                    'RMRK', w4,
                    'EnteredBy', w0,
                    'EntryDate', w2,
                    'UpdatedBy', w0,
                    'UpdateDate', w2
                ]);
            }
        }
    }
}
