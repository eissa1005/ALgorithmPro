namespace ALgorithmPro.ALgorithm {
    export interface TransferToRow {
        HeaderID?: number;
        TR_TY?: number;
        TR_NO?: number;
        TR_DT?: string;
        TR_DS?: number;
        StoreID?: string;
        TRTY_NAME?: string;
        Store_NAME?: string;
        DocTransNo?: string;
        OrderNo?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        SupervisorId?: string;
        Supervisor_NAME?: string;
        PStoreID?: string;
        PTR_NO?: number;
        PTR_TY?: number;
        HDSCR_AR?: string;
        HDSCR_EN?: string;
        PriceID?: string;
        Priceedit?: boolean;
        ReferenceNo?: number;
        HDISC?: number;
        HDISC1?: number;
        HDISC2?: number;
        HDISC3?: number;
        HDISC4?: number;
        HDISC1R?: number;
        HDISC2R?: number;
        HDISC3R?: number;
        HTAX?: number;
        HTAX1?: number;
        HTAX2?: number;
        HTAX3?: number;
        HTAX4?: number;
        HTAX1R?: number;
        HTAX2R?: number;
        HTAX3R?: number;
        HAddtions?: number;
        HdrAddtionsR?: number;
        PeriodCredit?: string;
        EXPENSEVL?: number;
        Notes?: string;
        Paid?: number;
        Total?: number;
        SQTY?: number;
        NetTotal?: number;
        Balance?: number;
        Periodterm?: number;
        InvStatus?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        CUR_VL?: number;
        PRT_CNT?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        DetailList?: TransferToASTRDRow[];
    }

    export namespace TransferToRow {
        export const idProperty = 'HeaderID';
        export const nameProperty = 'StoreID';
        export const localTextPrefix = 'ALgorithm.TransferTo';
        export const lookupKey = 'ALgorithm.TransferTo';

        export function getLookup(): Q.Lookup<TransferToRow> {
            return Q.getLookup<TransferToRow>('ALgorithm.TransferTo');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            TR_DT = "TR_DT",
            TR_DS = "TR_DS",
            StoreID = "StoreID",
            TRTY_NAME = "TRTY_NAME",
            Store_NAME = "Store_NAME",
            DocTransNo = "DocTransNo",
            OrderNo = "OrderNo",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            SupervisorId = "SupervisorId",
            Supervisor_NAME = "Supervisor_NAME",
            PStoreID = "PStoreID",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            HDSCR_AR = "HDSCR_AR",
            HDSCR_EN = "HDSCR_EN",
            PriceID = "PriceID",
            Priceedit = "Priceedit",
            ReferenceNo = "ReferenceNo",
            HDISC = "HDISC",
            HDISC1 = "HDISC1",
            HDISC2 = "HDISC2",
            HDISC3 = "HDISC3",
            HDISC4 = "HDISC4",
            HDISC1R = "HDISC1R",
            HDISC2R = "HDISC2R",
            HDISC3R = "HDISC3R",
            HTAX = "HTAX",
            HTAX1 = "HTAX1",
            HTAX2 = "HTAX2",
            HTAX3 = "HTAX3",
            HTAX4 = "HTAX4",
            HTAX1R = "HTAX1R",
            HTAX2R = "HTAX2R",
            HTAX3R = "HTAX3R",
            HAddtions = "HAddtions",
            HdrAddtionsR = "HdrAddtionsR",
            PeriodCredit = "PeriodCredit",
            EXPENSEVL = "EXPENSEVL",
            Notes = "Notes",
            Paid = "Paid",
            Total = "Total",
            SQTY = "SQTY",
            NetTotal = "NetTotal",
            Balance = "Balance",
            Periodterm = "Periodterm",
            InvStatus = "InvStatus",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            PRT_CNT = "PRT_CNT",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            DetailList = "DetailList"
        }
    }
}
