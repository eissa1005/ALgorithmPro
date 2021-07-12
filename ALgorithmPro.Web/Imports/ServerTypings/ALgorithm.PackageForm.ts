namespace ALgorithmPro.ALgorithm {
    export interface PackageForm {
        PKID: Serenity.StringEditor;
        PK_NM_AR: Serenity.StringEditor;
        PK_NM_EN: Serenity.StringEditor;
        PKCNT: Serenity.DecimalEditor;
        FACT: Serenity.DecimalEditor;
        SPKID: Serenity.StringEditor;
        RMRK: Serenity.StringEditor;
        RMRK2: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class PackageForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.Package';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PackageForm.init)  {
                PackageForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.EnumEditor;
                var w3 = s.DateEditor;

                Q.initFormType(PackageForm, [
                    'PKID', w0,
                    'PK_NM_AR', w0,
                    'PK_NM_EN', w0,
                    'PKCNT', w1,
                    'FACT', w1,
                    'SPKID', w0,
                    'RMRK', w0,
                    'RMRK2', w0,
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
