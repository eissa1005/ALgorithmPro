namespace ALgorithmPro.Model {
    export interface ASTRHVIEWRow {
        StoreID?: string;
        Store_NAME?: string;
        HeaderID?: number;
        TR_NO?: number;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_DT?: string;
        ReferenceNo?: number;
        DocTransNo?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
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
        Phone1?: string;
        Phone2?: string;
        Phone3?: string;
        ADDRS1?: string;
        ADDRS2?: string;
        MOBIL1?: string;
        MOBIL2?: string;
        SupervisorId?: string;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        Notes?: string;
        PriceID?: string;
        HDISC?: number;
        HDISC1?: number;
        HDISC2?: number;
        HDISC3?: number;
        HDISC4?: number;
        HTAX?: number;
        HTAX1?: number;
        HTAX2?: number;
        HTAX3?: number;
        HDSCR_AR?: string;
        Paid?: number;
        Total?: number;
        NetTotal?: number;
        EXPENSEVL?: number;
        HAddtions?: number;
        PRT_CNT?: number;
        PTR_TY?: number;
        PTR_NO?: number;
        PStoreID?: string;
        Status?: number;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace ASTRHVIEWRow {
        export const idProperty = 'HeaderID';
        export const nameProperty = 'StoreID';
        export const localTextPrefix = 'Model.ASTRHVIEW';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            HeaderID = "HeaderID",
            TR_NO = "TR_NO",
            TR_TY = "TR_TY",
            TRTY_NAME = "TRTY_NAME",
            TR_DT = "TR_DT",
            ReferenceNo = "ReferenceNo",
            DocTransNo = "DocTransNo",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
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
            Phone1 = "Phone1",
            Phone2 = "Phone2",
            Phone3 = "Phone3",
            ADDRS1 = "ADDRS1",
            ADDRS2 = "ADDRS2",
            MOBIL1 = "MOBIL1",
            MOBIL2 = "MOBIL2",
            SupervisorId = "SupervisorId",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            Notes = "Notes",
            PriceID = "PriceID",
            HDISC = "HDISC",
            HDISC1 = "HDISC1",
            HDISC2 = "HDISC2",
            HDISC3 = "HDISC3",
            HDISC4 = "HDISC4",
            HTAX = "HTAX",
            HTAX1 = "HTAX1",
            HTAX2 = "HTAX2",
            HTAX3 = "HTAX3",
            HDSCR_AR = "HDSCR_AR",
            Paid = "Paid",
            Total = "Total",
            NetTotal = "NetTotal",
            EXPENSEVL = "EXPENSEVL",
            HAddtions = "HAddtions",
            PRT_CNT = "PRT_CNT",
            PTR_TY = "PTR_TY",
            PTR_NO = "PTR_NO",
            PStoreID = "PStoreID",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
