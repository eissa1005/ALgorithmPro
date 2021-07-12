namespace ALgorithmPro.ALgorithm {
    export interface PriceTypesForm {
        PriceId: Serenity.StringEditor;
        NameAr: Serenity.StringEditor;
        NameEn: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        EnteredBy: Serenity.StringEditor;
        UpdatedBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class PriceTypesForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.PriceTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PriceTypesForm.init)  {
                PriceTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(PriceTypesForm, [
                    'PriceId', w0,
                    'NameAr', w0,
                    'NameEn', w0,
                    'Status', w1,
                    'EnteredBy', w0,
                    'UpdatedBy', w0,
                    'EntryDate', w2,
                    'UpdateDate', w2
                ]);
            }
        }
    }
}
