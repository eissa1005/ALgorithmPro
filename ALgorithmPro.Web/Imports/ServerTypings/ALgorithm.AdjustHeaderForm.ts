namespace ALgorithmPro.ALgorithm {
    export interface AdjustHeaderForm {
        TR_TY: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        CashBoxID: Serenity.LookupEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateTimeEditor;
        TR_DS: Serenity.IntegerEditor;
        DocTransNo: Serenity.StringEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        REP_CD: Serenity.LookupEditor;
        REP_CD2: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        CurrencyID: Serenity.LookupEditor;
        PriceID: Serenity.LookupEditor;
        Balance: Serenity.DecimalEditor;
        Notes: Serenity.TextAreaEditor;
        HDSCR_AR: Serenity.StringEditor;
        SSUM_CD: Serenity.LookupEditor;
        Cash_NAME: Serenity.StringEditor;
        OrderNo: Serenity.StringEditor;
        SUM_CD: Serenity.LookupEditor;
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
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        PRT_CNT: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        DetailList: AdjustDetailEditor;
        Total: Serenity.DecimalEditor;
        Paid: Serenity.DecimalEditor;
        HDISC: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        HTAX: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
    }

    export class AdjustHeaderForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.AdjustHeader';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AdjustHeaderForm.init)  {
                AdjustHeaderForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateTimeEditor;
                var w3 = s.StringEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.TextAreaEditor;
                var w6 = s.BooleanEditor;
                var w7 = s.EnumEditor;
                var w8 = s.DateEditor;
                var w9 = AdjustDetailEditor;

                Q.initFormType(AdjustHeaderForm, [
                    'TR_TY', w0,
                    'StoreID', w0,
                    'CashBoxID', w0,
                    'TR_NO', w1,
                    'TR_DT', w2,
                    'TR_DS', w1,
                    'DocTransNo', w3,
                    'ACC_NO', w3,
                    'ACC_NAME', w3,
                    'REP_CD', w0,
                    'REP_CD2', w0,
                    'CST_CD', w0,
                    'CurrencyID', w0,
                    'PriceID', w0,
                    'Balance', w4,
                    'Notes', w5,
                    'HDSCR_AR', w3,
                    'SSUM_CD', w0,
                    'Cash_NAME', w3,
                    'OrderNo', w3,
                    'SUM_CD', w0,
                    'ACC_NO2', w3,
                    'ACC_NAME2', w3,
                    'ACC_NO3', w3,
                    'ACC_NAME3', w3,
                    'REP_NAME', w3,
                    'REP_NAME2', w3,
                    'TRTY_NAME', w3,
                    'Store_NAME', w3,
                    'CST_NAME', w3,
                    'SUM_NAME', w3,
                    'SSUM_NAME', w3,
                    'SupervisorId', w3,
                    'Supervisor_NAME', w3,
                    'PStoreID', w3,
                    'PTR_NO', w1,
                    'PTR_TY', w1,
                    'HDSCR_EN', w3,
                    'Priceedit', w6,
                    'ReferenceNo', w1,
                    'HDISC1', w4,
                    'HDISC2', w4,
                    'HDISC3', w4,
                    'HDISC4', w4,
                    'HDISC1R', w4,
                    'HDISC2R', w4,
                    'HDISC3R', w4,
                    'HTAX1', w4,
                    'HTAX2', w4,
                    'HTAX3', w4,
                    'HTAX4', w4,
                    'HTAX1R', w4,
                    'HTAX2R', w4,
                    'HTAX3R', w4,
                    'HdrAddtionsR', w4,
                    'PeriodCredit', w3,
                    'Periodterm', w1,
                    'InvStatus', w1,
                    'Currency_NAME', w3,
                    'RATE', w4,
                    'CUR_VL', w4,
                    'PRT_CNT', w1,
                    'Status', w7,
                    'EnteredBy', w3,
                    'EntryDate', w8,
                    'UpdatedBy', w3,
                    'UpdateDate', w8,
                    'EXPENSEVL', w4,
                    'DetailList', w9,
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
