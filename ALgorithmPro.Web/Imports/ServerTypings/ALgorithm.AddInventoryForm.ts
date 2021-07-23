namespace ALgorithmPro.ALgorithm {
    export interface AddInventoryForm {
        TR_TY: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        DocTransNo: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateTimeEditor;
        CurrencyID: Serenity.LookupEditor;
        PriceID: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        SUM_CD: Serenity.LookupEditor;
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
        SSUM_CD: Serenity.LookupEditor;
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
        PStoreID: Serenity.StringEditor;
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
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        DetailList: AddInventoryASTRDEditor;
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

    export class AddInventoryForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.AddInventory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AddInventoryForm.init)  {
                AddInventoryForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateTimeEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.TextAreaEditor;
                var w6 = s.BooleanEditor;
                var w7 = s.EnumEditor;
                var w8 = s.DateEditor;
                var w9 = AddInventoryASTRDEditor;

                Q.initFormType(AddInventoryForm, [
                    'TR_TY', w0,
                    'StoreID', w0,
                    'DocTransNo', w1,
                    'TR_NO', w2,
                    'TR_DT', w3,
                    'CurrencyID', w0,
                    'PriceID', w0,
                    'CST_CD', w0,
                    'SUM_CD', w0,
                    'TR_DS', w2,
                    'CashBoxID', w0,
                    'ACC_NO', w1,
                    'ACC_NAME', w1,
                    'REP_CD', w0,
                    'REP_CD2', w0,
                    'ReferenceNo', w2,
                    'RATE', w4,
                    'Balance', w4,
                    'Notes', w5,
                    'HDSCR_AR', w1,
                    'SSUM_CD', w0,
                    'Cash_NAME', w1,
                    'OrderNo', w1,
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
                    'Priceedit', w6,
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
                    'PeriodCredit', w1,
                    'Periodterm', w2,
                    'InvStatus', w2,
                    'Currency_NAME', w1,
                    'CUR_VL', w4,
                    'PRT_CNT', w2,
                    'Status', w7,
                    'EnteredBy', w1,
                    'EntryDate', w8,
                    'UpdatedBy', w1,
                    'UpdateDate', w8,
                    'EXPENSEVL', w4,
                    'DetailList', w9,
                    'SQTY', w4,
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
