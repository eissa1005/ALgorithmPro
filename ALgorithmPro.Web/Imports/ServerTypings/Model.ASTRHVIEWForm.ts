namespace ALgorithmPro.Model {
    export interface ASTRHVIEWForm {
        StoreID: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        HeaderID: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_TY: Serenity.IntegerEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_DT: Serenity.DateEditor;
        ReferenceNo: Serenity.IntegerEditor;
        DocTransNo: Serenity.StringEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        CashBoxID: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_CD2: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        CST_CD: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_CD: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_CD: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        Phone1: Serenity.StringEditor;
        Phone2: Serenity.StringEditor;
        Phone3: Serenity.StringEditor;
        ADDRS1: Serenity.StringEditor;
        ADDRS2: Serenity.StringEditor;
        MOBIL1: Serenity.StringEditor;
        MOBIL2: Serenity.StringEditor;
        SupervisorId: Serenity.StringEditor;
        CurrencyID: Serenity.StringEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        Notes: Serenity.StringEditor;
        PriceID: Serenity.StringEditor;
        HDISC: Serenity.DecimalEditor;
        HDISC1: Serenity.DecimalEditor;
        HDISC2: Serenity.DecimalEditor;
        HDISC3: Serenity.DecimalEditor;
        HDISC4: Serenity.DecimalEditor;
        HTAX: Serenity.DecimalEditor;
        HTAX1: Serenity.DecimalEditor;
        HTAX2: Serenity.DecimalEditor;
        HTAX3: Serenity.DecimalEditor;
        HDSCR_AR: Serenity.StringEditor;
        Paid: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        PRT_CNT: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        PTR_NO: Serenity.IntegerEditor;
        PStoreID: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class ASTRHVIEWForm extends Serenity.PrefixedContext {
        static formKey = 'Model.ASTRHVIEW';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ASTRHVIEWForm.init)  {
                ASTRHVIEWForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(ASTRHVIEWForm, [
                    'StoreID', w0,
                    'Store_NAME', w0,
                    'HeaderID', w0,
                    'TR_NO', w1,
                    'TR_TY', w1,
                    'TRTY_NAME', w0,
                    'TR_DT', w2,
                    'ReferenceNo', w1,
                    'DocTransNo', w0,
                    'ACC_NO', w0,
                    'ACC_NAME', w0,
                    'ACC_NO2', w0,
                    'ACC_NAME2', w0,
                    'CashBoxID', w0,
                    'Cash_NAME', w0,
                    'REP_CD', w0,
                    'REP_NAME', w0,
                    'REP_CD2', w0,
                    'REP_NAME2', w0,
                    'CST_CD', w0,
                    'CST_NAME', w0,
                    'SUM_CD', w0,
                    'SUM_NAME', w0,
                    'SSUM_CD', w0,
                    'SSUM_NAME', w0,
                    'Phone1', w0,
                    'Phone2', w0,
                    'Phone3', w0,
                    'ADDRS1', w0,
                    'ADDRS2', w0,
                    'MOBIL1', w0,
                    'MOBIL2', w0,
                    'SupervisorId', w0,
                    'CurrencyID', w0,
                    'Currency_NAME', w0,
                    'RATE', w3,
                    'Notes', w0,
                    'PriceID', w0,
                    'HDISC', w3,
                    'HDISC1', w3,
                    'HDISC2', w3,
                    'HDISC3', w3,
                    'HDISC4', w3,
                    'HTAX', w3,
                    'HTAX1', w3,
                    'HTAX2', w3,
                    'HTAX3', w3,
                    'HDSCR_AR', w0,
                    'Paid', w3,
                    'Total', w3,
                    'NetTotal', w3,
                    'EXPENSEVL', w3,
                    'HAddtions', w3,
                    'PRT_CNT', w1,
                    'PTR_TY', w1,
                    'PTR_NO', w1,
                    'PStoreID', w0,
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
