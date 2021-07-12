namespace ALgorithmPro.ALgorithm {
    export interface SupervisorsForm {
        SupervisorID: Serenity.StringEditor;
        Name_AR: Serenity.StringEditor;
        Name_EN: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class SupervisorsForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.Supervisors';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SupervisorsForm.init)  {
                SupervisorsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;

                Q.initFormType(SupervisorsForm, [
                    'SupervisorID', w0,
                    'Name_AR', w0,
                    'Name_EN', w0,
                    'Status', w1,
                    'EnteredBy', w0,
                    'EntryDate', w2,
                    'UpdatedBy', w0,
                    'UpdateDate', w2
                ]);
            }
        }
    }
}
