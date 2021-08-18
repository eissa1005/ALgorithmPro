namespace ALgorithmPro.ALgorithm {
    export interface TransferInForm {
        TR_TY: Serenity.LookupEditor;
        TR_NO: Serenity.IntegerEditor;
        DocTransNo: Serenity.StringEditor;
        StoreID: Serenity.LookupEditor;
        PStoreID: Serenity.LookupEditor;
        TR_DT: Serenity.DateTimeEditor;
        CurrencyID: Serenity.LookupEditor;
        PriceID: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        SUM_CD: Serenity.LookupEditor;
        SSUM_CD: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        TR_DS: Serenity.IntegerEditor;
        CashBoxID: Serenity.LookupEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        REP_CD: Serenity.LookupEditor;
        REP_CD2: Serenity.LookupEditor;
        ReferenceNo: Serenity.IntegerEditor;
        RATE: Serenity.DecimalEditor;
        Balance: Serenity.DecimalEditor;
        Notes: Serenity.TextAreaEditor;
        HDSCR_AR: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        OrderNo: Serenity.StringEditor;
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
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        HDSCR_EN: Serenity.StringEditor;
        Priceedit: Serenity.BooleanEditor;
        HDISC1: Serenity.DecimalEditor;
        HDISC2: Serenity.DecimalEditor;
        HDISC3: Serenity.DecimalEditor;
        HDISC4: Serenity.DecimalEditor;
        HDISC1R: Serenity.DecimalEditor;
        HDISC2R: Serenity.DecimalEditor;
        HDISC3R: Serenity.DecimalEditor;
        HTAX1: Serenity.DecimalEditor;
        HTAX2: Serenity.DecimalEditor;
        HTAX3: Serenity.DecimalEditor;
        HTAX4: Serenity.DecimalEditor;
        HTAX1R: Serenity.DecimalEditor;
        HTAX2R: Serenity.DecimalEditor;
        HTAX3R: Serenity.DecimalEditor;
        HdrAddtionsR: Serenity.DecimalEditor;
        PeriodCredit: Serenity.StringEditor;
        Periodterm: Serenity.IntegerEditor;
        InvStatus: Serenity.IntegerEditor;
        Currency_NAME: Serenity.StringEditor;
        CUR_VL: Serenity.DecimalEditor;
        PRT_CNT: Serenity.IntegerEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        DetailList: TransferInASTRDEditor;
        SQTY: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        Paid: Serenity.DecimalEditor;
        HDISC: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        HTAX: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
    }

    export class TransferInForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.TransferIn';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransferInForm.init)  {
                TransferInForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateTimeEditor;
                var w4 = s.EnumEditor;
                var w5 = s.DecimalEditor;
                var w6 = s.TextAreaEditor;
                var w7 = s.BooleanEditor;
                var w8 = s.DateEditor;
                var w9 = TransferInASTRDEditor;

                Q.initFormType(TransferInForm, [
                    'TR_TY', w0,
                    'TR_NO', w1,
                    'DocTransNo', w2,
                    'StoreID', w0,
                    'PStoreID', w0,
                    'TR_DT', w3,
                    'CurrencyID', w0,
                    'PriceID', w0,
                    'CST_CD', w0,
                    'SUM_CD', w0,
                    'SSUM_CD', w0,
                    'Status', w4,
                    'TR_DS', w1,
                    'CashBoxID', w0,
                    'ACC_NO', w2,
                    'ACC_NAME', w2,
                    'REP_CD', w0,
                    'REP_CD2', w0,
                    'ReferenceNo', w1,
                    'RATE', w5,
                    'Balance', w5,
                    'Notes', w6,
                    'HDSCR_AR', w2,
                    'Cash_NAME', w2,
                    'OrderNo', w2,
                    'ACC_NO2', w2,
                    'ACC_NAME2', w2,
                    'ACC_NO3', w2,
                    'ACC_NAME3', w2,
                    'REP_NAME', w2,
                    'REP_NAME2', w2,
                    'TRTY_NAME', w2,
                    'Store_NAME', w2,
                    'CST_NAME', w2,
                    'SUM_NAME', w2,
                    'SSUM_NAME', w2,
                    'SupervisorId', w2,
                    'Supervisor_NAME', w2,
                    'PTR_NO', w1,
                    'PTR_TY', w1,
                    'HDSCR_EN', w2,
                    'Priceedit', w7,
                    'HDISC1', w5,
                    'HDISC2', w5,
                    'HDISC3', w5,
                    'HDISC4', w5,
                    'HDISC1R', w5,
                    'HDISC2R', w5,
                    'HDISC3R', w5,
                    'HTAX1', w5,
                    'HTAX2', w5,
                    'HTAX3', w5,
                    'HTAX4', w5,
                    'HTAX1R', w5,
                    'HTAX2R', w5,
                    'HTAX3R', w5,
                    'HdrAddtionsR', w5,
                    'PeriodCredit', w2,
                    'Periodterm', w1,
                    'InvStatus', w1,
                    'Currency_NAME', w2,
                    'CUR_VL', w5,
                    'PRT_CNT', w1,
                    'EnteredBy', w2,
                    'EntryDate', w8,
                    'UpdatedBy', w2,
                    'UpdateDate', w8,
                    'EXPENSEVL', w5,
                    'DetailList', w9,
                    'SQTY', w5,
                    'Total', w5,
                    'Paid', w5,
                    'HDISC', w5,
                    'NetBeforeTAX', w5,
                    'HTAX', w5,
                    'HAddtions', w5,
                    'NetAfterTAX', w5,
                    'NetTotal', w5
                ]);
            }
        }
    }
}
