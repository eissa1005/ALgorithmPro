namespace ALgorithmPro.ALgorithm {
    export interface StoresForm {
        StoreID: Serenity.StringEditor;
        Store_Name_AR: Serenity.StringEditor;
        Store_Name_EN: Serenity.StringEditor;
        BranchID: Serenity.IntegerEditor;
        ADDRS: Serenity.StringEditor;
        GLACCID: Serenity.IntegerEditor;
        GLCSTID: Serenity.IntegerEditor;
        CST_CD: Serenity.LookupEditor;
        SUM_CD: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class StoresForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.Stores';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StoresForm.init)  {
                StoresForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.EnumEditor;
                var w4 = s.DateEditor;

                Q.initFormType(StoresForm, [
                    'StoreID', w0,
                    'Store_Name_AR', w0,
                    'Store_Name_EN', w0,
                    'BranchID', w1,
                    'ADDRS', w0,
                    'GLACCID', w1,
                    'GLCSTID', w1,
                    'CST_CD', w2,
                    'SUM_CD', w2,
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
