namespace ALgorithmPro.ALgorithm {
    export interface REPSForm {
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_NAME_EN: Serenity.StringEditor;
        SupervisorID: Serenity.LookupEditor;
        SaleCommision: Serenity.DecimalEditor;
        CollectCommision: Serenity.DecimalEditor;
        PriceID: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class REPSForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.REPS';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!REPSForm.init)  {
                REPSForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.EnumEditor;
                var w4 = s.DateEditor;

                Q.initFormType(REPSForm, [
                    'REP_CD', w0,
                    'REP_NAME', w0,
                    'REP_NAME_EN', w0,
                    'SupervisorID', w1,
                    'SaleCommision', w2,
                    'CollectCommision', w2,
                    'PriceID', w1,
                    'Status', w3,
                    'EnteredBy', w0,
                    'EntryDate', w4,
                    'UpdatedBy', w0,
                    'UpdateDate', w4
                ]);
            }
        }
    }
}
