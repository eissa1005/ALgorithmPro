namespace ALgorithmPro.Model {
    export interface ACCTRDRow {
        ID?: number;
        HeaderID?: number;
        TR_TY?: number;
        TR_NO?: number;
        StoreID?: string;
        TR_DT?: string;
        LN_NO?: number;
        TRTY_NAME?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        TR_DS?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        CUR_VL?: number;
        RATE?: number;
        CUR_DB_VL?: number;
        CUR_CR_VL?: number;
        Store_NAME?: string;
        GLHeaderID?: number;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        TR_DS_AR?: string;
        TR_DS_EN?: string;
        Flag?: number;
        GRP?: number;
        EXPENSVL?: number;
        TotalValue?: number;
        NetTotal?: number;
        DB?: number;
        CR?: number;
        BAL?: number;
        ACC_CUR_BAL?: number;
        SupervisorID?: string;
        Supervisor_NAME?: string;
        ExpensesID?: string;
        ExpensesName?: string;
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
        CloseStatus?: number;
        GlPosted?: boolean;
        GLTR_NO?: number;
        GLPOST?: number;
        CreditLimt?: number;
        Status?: number;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace ACCTRDRow {
        export const idProperty = 'ID';
        export const nameProperty = 'HeaderID';
        export const localTextPrefix = 'Model.ACCTRD';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            StoreID = "StoreID",
            TR_DT = "TR_DT",
            LN_NO = "LN_NO",
            TRTY_NAME = "TRTY_NAME",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            TR_DS = "TR_DS",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            CUR_VL = "CUR_VL",
            RATE = "RATE",
            CUR_DB_VL = "CUR_DB_VL",
            CUR_CR_VL = "CUR_CR_VL",
            Store_NAME = "Store_NAME",
            GLHeaderID = "GLHeaderID",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            TR_DS_AR = "TR_DS_AR",
            TR_DS_EN = "TR_DS_EN",
            Flag = "Flag",
            GRP = "GRP",
            EXPENSVL = "EXPENSVL",
            TotalValue = "TotalValue",
            NetTotal = "NetTotal",
            DB = "DB",
            CR = "CR",
            BAL = "BAL",
            ACC_CUR_BAL = "ACC_CUR_BAL",
            SupervisorID = "SupervisorID",
            Supervisor_NAME = "Supervisor_NAME",
            ExpensesID = "ExpensesID",
            ExpensesName = "ExpensesName",
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
            CloseStatus = "CloseStatus",
            GlPosted = "GlPosted",
            GLTR_NO = "GLTR_NO",
            GLPOST = "GLPOST",
            CreditLimt = "CreditLimt",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
