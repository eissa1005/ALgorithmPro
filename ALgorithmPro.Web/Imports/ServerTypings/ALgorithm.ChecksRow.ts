namespace ALgorithmPro.ALgorithm {
    export interface ChecksRow {
        ID?: number;
        CHK_TYP?: Web.Modules.Common.CheckType;
        CHK_NO?: string;
        DOC_TYP?: Web.Modules.Common.DocType;
        StoreID?: string;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_NO?: number;
        LN_NO?: number;
        CRDB?: number;
        Store_NAME?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        RPACC_NO?: string;
        RPACC_NAME?: string;
        Notes_ACCNO?: string;
        Notes_ACCNAME?: string;
        Endorsed_NO?: string;
        Endorsed_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        AMT?: number;
        AMT_PAID?: number;
        TotalValue?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        CUR_VL?: number;
        RATE?: number;
        ExpenseValue?: number;
        ISU_DT?: string;
        DUE_DT?: string;
        BNKID?: string;
        BNK_NAME?: string;
        CBNKID?: string;
        CBNK_NAME?: string;
        File_NO?: string;
        LAST_ACC?: string;
        STAT?: Web.Modules.Common.CheckTRTY;
        STAT_DT?: string;
        RMRK?: string;
        DEPT_BNKID?: string;
        DEPT_BNKNM?: string;
        ByHand?: string;
        TRNSACC?: string;
        Rep_CD?: string;
        Rep_NAME?: string;
        Rep_CD2?: string;
        Rep_NAME2?: string;
        POSTED?: boolean;
        SUM_CD?: string;
        SUM_NAME?: string;
        GL_NO?: number;
        GL_TY?: number;
        DOC_NO?: string;
        RMRK2?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace ChecksRow {
        export const idProperty = 'ID';
        export const nameProperty = 'CHK_NO';
        export const localTextPrefix = 'ALgorithm.Checks';
        export const lookupKey = 'ALgorithm.ASCHKS';

        export function getLookup(): Q.Lookup<ChecksRow> {
            return Q.getLookup<ChecksRow>('ALgorithm.ASCHKS');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            CHK_TYP = "CHK_TYP",
            CHK_NO = "CHK_NO",
            DOC_TYP = "DOC_TYP",
            StoreID = "StoreID",
            TR_TY = "TR_TY",
            TRTY_NAME = "TRTY_NAME",
            TR_NO = "TR_NO",
            LN_NO = "LN_NO",
            CRDB = "CRDB",
            Store_NAME = "Store_NAME",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            RPACC_NO = "RPACC_NO",
            RPACC_NAME = "RPACC_NAME",
            Notes_ACCNO = "Notes_ACCNO",
            Notes_ACCNAME = "Notes_ACCNAME",
            Endorsed_NO = "Endorsed_NO",
            Endorsed_NAME = "Endorsed_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            AMT = "AMT",
            AMT_PAID = "AMT_PAID",
            TotalValue = "TotalValue",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            CUR_VL = "CUR_VL",
            RATE = "RATE",
            ExpenseValue = "ExpenseValue",
            ISU_DT = "ISU_DT",
            DUE_DT = "DUE_DT",
            BNKID = "BNKID",
            BNK_NAME = "BNK_NAME",
            CBNKID = "CBNKID",
            CBNK_NAME = "CBNK_NAME",
            File_NO = "File_NO",
            LAST_ACC = "LAST_ACC",
            STAT = "STAT",
            STAT_DT = "STAT_DT",
            RMRK = "RMRK",
            DEPT_BNKID = "DEPT_BNKID",
            DEPT_BNKNM = "DEPT_BNKNM",
            ByHand = "ByHand",
            TRNSACC = "TRNSACC",
            Rep_CD = "Rep_CD",
            Rep_NAME = "Rep_NAME",
            Rep_CD2 = "Rep_CD2",
            Rep_NAME2 = "Rep_NAME2",
            POSTED = "POSTED",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            GL_NO = "GL_NO",
            GL_TY = "GL_TY",
            DOC_NO = "DOC_NO",
            RMRK2 = "RMRK2",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
