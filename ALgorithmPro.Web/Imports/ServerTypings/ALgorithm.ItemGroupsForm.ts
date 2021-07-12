namespace ALgorithmPro.ALgorithm {
    export interface ItemGroupsForm {
        MITM_CD: Serenity.StringEditor;
        Name_AR: Serenity.StringEditor;
        Name_EN: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class ItemGroupsForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.ItemGroups';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ItemGroupsForm.init)  {
                ItemGroupsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;

                Q.initFormType(ItemGroupsForm, [
                    'MITM_CD', w0,
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
