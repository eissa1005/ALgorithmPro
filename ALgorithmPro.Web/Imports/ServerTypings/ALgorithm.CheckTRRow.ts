namespace ALgorithmPro.ALgorithm {
    export interface CheckTRRow {
        ID?: number;
        CHK_TYP?: Web.Modules.Common.CheckType;
        CHK_NO?: string;
        TR_TY?: number;
        TR_NO?: number;
        LN_NO?: number;
        Doc_TYP?: Web.Modules.Common.DocType;
        STAT?: number;
        StoreID?: string;
        Store_NAME?: string;
        TRTY_NAME?: string;
        TR_DT?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        BNKID?: string;
        BNK_NAME?: string;
        DEPT_BNKID?: string;
        DEPT_BNKNM?: string;
        CBNKID?: string;
        CBNK_NAME?: string;
        RPACC_NO?: string;
        RPACC_NAME?: string;
        Notes_ACCID?: string;
        Notes_ACCNAME?: string;
        Endorsed_NO?: string;
        Endorsed_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        STAT_DT?: string;
        ISU_DT?: string;
        DUE_DT?: string;
        AMT?: number;
        AMT_PAID?: number;
        TotalValue?: number;
        ExpenseValue?: number;
        DIFF_VL?: number;
        RMRK?: string;
        DSCR_AR?: string;
        POSTED?: boolean;
        SER_NO?: number;
        CRDB?: number;
        CHKPOST?: boolean;
        File_NO?: string;
        PAY_TYPE?: number;
        CUR_VL?: number;
        REP_CD?: string;
        REP_NAME?: string;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        ACC_NO4?: string;
        ACC_NAME4?: string;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace CheckTRRow {
        export const idProperty = 'ID';
        export const nameProperty = 'CHK_NO';
        export const localTextPrefix = 'ALgorithm.CheckTR';
        export const lookupKey = 'ALgorithm.ASCHKTR';

        export function getLookup(): Q.Lookup<CheckTRRow> {
            return Q.getLookup<CheckTRRow>('ALgorithm.ASCHKTR');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            CHK_TYP = "CHK_TYP",
            CHK_NO = "CHK_NO",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            LN_NO = "LN_NO",
            Doc_TYP = "Doc_TYP",
            STAT = "STAT",
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            TRTY_NAME = "TRTY_NAME",
            TR_DT = "TR_DT",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            BNKID = "BNKID",
            BNK_NAME = "BNK_NAME",
            DEPT_BNKID = "DEPT_BNKID",
            DEPT_BNKNM = "DEPT_BNKNM",
            CBNKID = "CBNKID",
            CBNK_NAME = "CBNK_NAME",
            RPACC_NO = "RPACC_NO",
            RPACC_NAME = "RPACC_NAME",
            Notes_ACCID = "Notes_ACCID",
            Notes_ACCNAME = "Notes_ACCNAME",
            Endorsed_NO = "Endorsed_NO",
            Endorsed_NAME = "Endorsed_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            STAT_DT = "STAT_DT",
            ISU_DT = "ISU_DT",
            DUE_DT = "DUE_DT",
            AMT = "AMT",
            AMT_PAID = "AMT_PAID",
            TotalValue = "TotalValue",
            ExpenseValue = "ExpenseValue",
            DIFF_VL = "DIFF_VL",
            RMRK = "RMRK",
            DSCR_AR = "DSCR_AR",
            POSTED = "POSTED",
            SER_NO = "SER_NO",
            CRDB = "CRDB",
            CHKPOST = "CHKPOST",
            File_NO = "File_NO",
            PAY_TYPE = "PAY_TYPE",
            CUR_VL = "CUR_VL",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            ACC_NO4 = "ACC_NO4",
            ACC_NAME4 = "ACC_NAME4",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
