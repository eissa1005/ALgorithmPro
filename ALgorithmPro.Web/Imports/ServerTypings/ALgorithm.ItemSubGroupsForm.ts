namespace ALgorithmPro.ALgorithm {
    export interface ItemSubGroupsForm {
        CITM_CD: Serenity.StringEditor;
        Name_AR: Serenity.StringEditor;
        Name_EN: Serenity.StringEditor;
        ParentID: Serenity.LookupEditor;
        OrderBy: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        UpdatedBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class ItemSubGroupsForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.ItemSubGroups';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ItemSubGroupsForm.init)  {
                ItemSubGroupsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.EnumEditor;
                var w4 = s.DateEditor;

                Q.initFormType(ItemSubGroupsForm, [
                    'CITM_CD', w0,
                    'Name_AR', w0,
                    'Name_EN', w0,
                    'ParentID', w1,
                    'OrderBy', w2,
                    'Status', w3,
                    'EnteredBy', w0,
                    'UpdatedBy', w0,
                    'EntryDate', w4,
                    'UpdateDate', w4
                ]);
            }
        }
    }
}
