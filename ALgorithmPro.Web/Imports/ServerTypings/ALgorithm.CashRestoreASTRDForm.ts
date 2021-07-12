namespace ALgorithmPro.ALgorithm {
    export interface CashRestoreASTRDForm {
        TR_TY: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        CashBoxID: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateTimeEditor;
        DocTransNo: Serenity.StringEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        REP_CD: Serenity.StringEditor;
        REP_CD2: Serenity.StringEditor;
        CST_CD: Serenity.StringEditor;
        SourceId: Serenity.StringEditor;
        CurrencyID: Serenity.StringEditor;
        PriceID: Serenity.StringEditor;
        Balance: Serenity.DecimalEditor;
        Notes: Serenity.StringEditor;
        HDSCR_AR: Serenity.StringEditor;
        SSUM_CD: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        OrderNo: Serenity.StringEditor;
        SUM_CD: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        TRTY_NAME: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        SupervisorId: Serenity.StringEditor;
        Supervisor_NAME: Serenity.StringEditor;
        PStoreID: Serenity.StringEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        HDSCR_EN: Serenity.StringEditor;
        Priceedit: Serenity.BooleanEditor;
        ReferenceNo: Serenity.IntegerEditor;
        HDISC1: Serenity.DecimalEditor;
        HDISC2: Serenity.DecimalEditor;
        HDISC3: Serenity.DecimalEditor;
        HDISC4: Serenity.DecimalEditor;
        HDISC1R: Serenity.DecimalEditor;
        HDISC2R: Serenity.DecimalEditor;
        HDISC3R: Serenity.DecimalEditor;
        TAX1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        TAXVAL: Serenity.DecimalEditor;
        HTAX1R: Serenity.DecimalEditor;
        HTAX2R: Serenity.DecimalEditor;
        HTAX3R: Serenity.DecimalEditor;
        HdrAddtionsR: Serenity.DecimalEditor;
        PeriodCredit: Serenity.StringEditor;
        Periodterm: Serenity.IntegerEditor;
        InvStatus: Serenity.IntegerEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        PRT_CNT: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        DetailList: CashPurchASTRDEditor;
        Total: Serenity.DecimalEditor;
        Paid: Serenity.DecimalEditor;
        HDISC: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        HTAX: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
    }

    export class CashRestoreASTRDForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.CashRestoreASTRD';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CashRestoreASTRDForm.init)  {
                CashRestoreASTRDForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateTimeEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.BooleanEditor;
                var w6 = s.EnumEditor;
                var w7 = s.DateEditor;
                var w8 = CashPurchASTRDEditor;

                Q.initFormType(CashRestoreASTRDForm, [
                    'TR_TY', w0,
                    'StoreID', w0,
                    'CashBoxID', w1,
                    'TR_NO', w2,
                    'TR_DT', w3,
                    'DocTransNo', w1,
                    'ACC_NO', w1,
                    'ACC_NAME', w1,
                    'REP_CD', w1,
                    'REP_CD2', w1,
                    'CST_CD', w1,
                    'SourceId', w1,
                    'CurrencyID', w1,
                    'PriceID', w1,
                    'Balance', w4,
                    'Notes', w1,
                    'HDSCR_AR', w1,
                    'SSUM_CD', w1,
                    'Cash_NAME', w1,
                    'OrderNo', w1,
                    'SUM_CD', w1,
                    'ACC_NO2', w1,
                    'ACC_NAME2', w1,
                    'ACC_NO3', w1,
                    'ACC_NAME3', w1,
                    'REP_NAME', w1,
                    'REP_NAME2', w1,
                    'TRTY_NAME', w1,
                    'Store_NAME', w1,
                    'CST_NAME', w1,
                    'SUM_NAME', w1,
                    'SSUM_NAME', w1,
                    'SupervisorId', w1,
                    'Supervisor_NAME', w1,
                    'PStoreID', w1,
                    'PTR_NO', w2,
                    'PTR_TY', w2,
                    'HDSCR_EN', w1,
                    'Priceedit', w5,
                    'ReferenceNo', w2,
                    'HDISC1', w4,
                    'HDISC2', w4,
                    'HDISC3', w4,
                    'HDISC4', w4,
                    'HDISC1R', w4,
                    'HDISC2R', w4,
                    'HDISC3R', w4,
                    'TAX1', w4,
                    'TAX2', w4,
                    'TAX3', w4,
                    'TAXVAL', w4,
                    'HTAX1R', w4,
                    'HTAX2R', w4,
                    'HTAX3R', w4,
                    'HdrAddtionsR', w4,
                    'PeriodCredit', w1,
                    'Periodterm', w2,
                    'InvStatus', w2,
                    'Currency_NAME', w1,
                    'RATE', w4,
                    'CUR_VL', w4,
                    'PRT_CNT', w2,
                    'Status', w6,
                    'EnteredBy', w1,
                    'EntryDate', w7,
                    'UpdatedBy', w1,
                    'UpdateDate', w7,
                    'EXPENSEVL', w4,
                    'DetailList', w8,
                    'Total', w4,
                    'Paid', w4,
                    'HDISC', w4,
                    'NetBeforeTAX', w4,
                    'HTAX', w4,
                    'HAddtions', w4,
                    'NetAfterTAX', w4,
                    'NetTotal', w4
                ]);
            }
        }
    }
}
