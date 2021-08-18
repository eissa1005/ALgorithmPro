namespace ALgorithmPro.Model {
    export interface ACCTRHRow {
        ASTRHID?: number;
        HeaderID?: number;
        TR_TY?: number;
        TR_NO?: number;
        StoreID?: string;
        TR_DT?: string;
        TR_DS?: number;
        TRTY_NAME?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        Store_NAME?: string;
        GLHeaderID?: number;
        PStoreID?: string;
        PTR_TY?: number;
        PTR_NO?: number;
        SupervisorID?: string;
        CST_CD?: string;
        CST_NAME?: string;
        HDSCR_AR?: string;
        HDSCR_EN?: string;
        Paid?: number;
        TotalValue?: number;
        NetTotal?: number;
        Flag?: number;
        BALDB?: number;
        BALCR?: number;
        BAL?: number;
        SUM_CD?: string;
        SSUM_CD?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        CHK_NO?: string;
        CHK_TYP?: number;
        CHKTYP_NAME?: string;
        CHKTRTY?: number;
        CHKTRTY_NAME?: string;
        ISU_DT?: string;
        DUE_DT?: string;
        AMT?: number;
        AMT_PAID?: number;
        CHK_EXPENSVL?: number;
        CHK_TotalValue?: number;
        BNKID?: string;
        BNK_NAME?: string;
        CBNKID?: string;
        CBNK_NAME?: string;
        RPACC_ACCNO?: string;
        RPACC_NAME?: string;
        DEPT_BNKID?: string;
        DEPT_BNKNAME?: string;
        Notes_ACCNO?: string;
        Notes_ACCNAME?: string;
        Endorsed_ACCNO?: string;
        Endorsed_NAME?: string;
        ExpensesID?: string;
        ExpensesName?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        EXPENSE_VL?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        CUR_VL?: number;
        GlPosted?: boolean;
        CloseStatus?: number;
        Status?: number;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace ACCTRHRow {
        export const idProperty = 'HeaderID';
        export const nameProperty = 'StoreID';
        export const localTextPrefix = 'Model.ACCTRH';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ASTRHID = "ASTRHID",
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            StoreID = "StoreID",
            TR_DT = "TR_DT",
            TR_DS = "TR_DS",
            TRTY_NAME = "TRTY_NAME",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            Store_NAME = "Store_NAME",
            GLHeaderID = "GLHeaderID",
            PStoreID = "PStoreID",
            PTR_TY = "PTR_TY",
            PTR_NO = "PTR_NO",
            SupervisorID = "SupervisorID",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            HDSCR_AR = "HDSCR_AR",
            HDSCR_EN = "HDSCR_EN",
            Paid = "Paid",
            TotalValue = "TotalValue",
            NetTotal = "NetTotal",
            Flag = "Flag",
            BALDB = "BALDB",
            BALCR = "BALCR",
            BAL = "BAL",
            SUM_CD = "SUM_CD",
            SSUM_CD = "SSUM_CD",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            CHK_NO = "CHK_NO",
            CHK_TYP = "CHK_TYP",
            CHKTYP_NAME = "CHKTYP_NAME",
            CHKTRTY = "CHKTRTY",
            CHKTRTY_NAME = "CHKTRTY_NAME",
            ISU_DT = "ISU_DT",
            DUE_DT = "DUE_DT",
            AMT = "AMT",
            AMT_PAID = "AMT_PAID",
            CHK_EXPENSVL = "CHK_EXPENSVL",
            CHK_TotalValue = "CHK_TotalValue",
            BNKID = "BNKID",
            BNK_NAME = "BNK_NAME",
            CBNKID = "CBNKID",
            CBNK_NAME = "CBNK_NAME",
            RPACC_ACCNO = "RPACC_ACCNO",
            RPACC_NAME = "RPACC_NAME",
            DEPT_BNKID = "DEPT_BNKID",
            DEPT_BNKNAME = "DEPT_BNKNAME",
            Notes_ACCNO = "Notes_ACCNO",
            Notes_ACCNAME = "Notes_ACCNAME",
            Endorsed_ACCNO = "Endorsed_ACCNO",
            Endorsed_NAME = "Endorsed_NAME",
            ExpensesID = "ExpensesID",
            ExpensesName = "ExpensesName",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            EXPENSE_VL = "EXPENSE_VL",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            GlPosted = "GlPosted",
            CloseStatus = "CloseStatus",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
