namespace ALgorithmPro.ALgorithm {
    export interface CashReceiveRow {
        HeaderID?: number;
        ASTRHID?: number;
        TR_TY?: number;
        TR_NO?: number;
        StoreID?: string;
        TR_DT?: string;
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
        Store_NAME?: string;
        Doc_Number?: string;
        GLHeaderID?: number;
        RMRK?: string;
        RMRK2?: string;
        HDSCR_AR?: string;
        HDSCR_EN?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        Flag?: number;
        Paid?: number;
        TotalValue?: number;
        NetTotal?: number;
        EXPENSE_VL?: number;
        BALDB?: number;
        BALCR?: number;
        BAL?: number;
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
        PTR_NO?: number;
        PTR_TY?: number;
        PStoreID?: string;
        CloseStatus?: number;
        GlPosted?: boolean;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace CashReceiveRow {
        export const idProperty = 'HeaderID';
        export const nameProperty = 'TR_TY';
        export const localTextPrefix = 'ALgorithm.CashReceive';
        export const lookupKey = 'ALgorithm.CashReceive';

        export function getLookup(): Q.Lookup<CashReceiveRow> {
            return Q.getLookup<CashReceiveRow>('ALgorithm.CashReceive');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            HeaderID = "HeaderID",
            ASTRHID = "ASTRHID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            StoreID = "StoreID",
            TR_DT = "TR_DT",
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
            Store_NAME = "Store_NAME",
            Doc_Number = "Doc_Number",
            GLHeaderID = "GLHeaderID",
            RMRK = "RMRK",
            RMRK2 = "RMRK2",
            HDSCR_AR = "HDSCR_AR",
            HDSCR_EN = "HDSCR_EN",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            Flag = "Flag",
            Paid = "Paid",
            TotalValue = "TotalValue",
            NetTotal = "NetTotal",
            EXPENSE_VL = "EXPENSE_VL",
            BALDB = "BALDB",
            BALCR = "BALCR",
            BAL = "BAL",
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
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            PStoreID = "PStoreID",
            CloseStatus = "CloseStatus",
            GlPosted = "GlPosted",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
