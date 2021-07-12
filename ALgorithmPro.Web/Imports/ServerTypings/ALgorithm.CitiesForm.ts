namespace ALgorithmPro.ALgorithm {
    export interface CitiesForm {
        CityID: Serenity.StringEditor;
        Name_AR: Serenity.StringEditor;
        Name_EN: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class CitiesForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.Cities';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CitiesForm.init)  {
                CitiesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EnumEditor;
                var w3 = s.DateEditor;

                Q.initFormType(CitiesForm, [
                    'CityID', w0,
                    'Name_AR', w0,
                    'Name_EN', w0,
                    'RegionID', w1,
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
