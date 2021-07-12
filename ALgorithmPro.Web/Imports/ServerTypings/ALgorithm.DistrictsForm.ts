namespace ALgorithmPro.ALgorithm {
    export interface DistrictsForm {
        DistrictsID: Serenity.StringEditor;
        Name_AR: Serenity.StringEditor;
        Name_EN: Serenity.StringEditor;
        CityID: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class DistrictsForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.Districts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DistrictsForm.init)  {
                DistrictsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EnumEditor;
                var w3 = s.DateEditor;

                Q.initFormType(DistrictsForm, [
                    'DistrictsID', w0,
                    'Name_AR', w0,
                    'Name_EN', w0,
                    'CityID', w1,
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
