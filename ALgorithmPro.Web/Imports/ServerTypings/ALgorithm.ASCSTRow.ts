namespace ALgorithmPro.ALgorithm {
    export interface ASCSTRow {
        ID?: number;
        CST_CD?: string;
        CST_NM_AR?: string;
        CST_NM_EN?: string;
        MCST_CD?: string;
        CST_CTG?: string;
        CST_TY?: number;
        SUM_CD?: string;
        SSUM_CD?: string;
        ACC_NO?: string;
        ACC_NM_AR?: string;
        ACC_NM_EN?: string;
        CSTRAT?: number;
        DATE_IN?: string;
        Phone?: string;
        Mobile?: string;
        BGNBAL?: number;
        INV_NO?: number;
        INV_DT?: string;
        ITM_DISC?: string;
        QTY?: number;
        BANK_CD?: string;
        ETMD_CUR?: string;
        ETMD_RATE?: number;
        ITM_RSV_DT?: string;
        ACT_DT?: string;
        ITM_LOC_DT?: string;
        MSTR_NM?: string;
        MSTR_ADD?: string;
        MSTR_TEL?: string;
        ACC_ADD?: string;
        POST?: string;
        Accept?: number;
        DISC?: number;
        Start_DT?: string;
        End_Dt?: string;
        Dor_NO?: string;
        TR_NO?: number;
        TR_TOT?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace ASCSTRow {
        export const idProperty = 'ID';
        export const nameProperty = 'CST_CD';
        export const localTextPrefix = 'ALgorithm.ASCST';
        export const lookupKey = 'ALgorithm.ASCST';

        export function getLookup(): Q.Lookup<ASCSTRow> {
            return Q.getLookup<ASCSTRow>('ALgorithm.ASCST');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            CST_CD = "CST_CD",
            CST_NM_AR = "CST_NM_AR",
            CST_NM_EN = "CST_NM_EN",
            MCST_CD = "MCST_CD",
            CST_CTG = "CST_CTG",
            CST_TY = "CST_TY",
            SUM_CD = "SUM_CD",
            SSUM_CD = "SSUM_CD",
            ACC_NO = "ACC_NO",
            ACC_NM_AR = "ACC_NM_AR",
            ACC_NM_EN = "ACC_NM_EN",
            CSTRAT = "CSTRAT",
            DATE_IN = "DATE_IN",
            Phone = "Phone",
            Mobile = "Mobile",
            BGNBAL = "BGNBAL",
            INV_NO = "INV_NO",
            INV_DT = "INV_DT",
            ITM_DISC = "ITM_DISC",
            QTY = "QTY",
            BANK_CD = "BANK_CD",
            ETMD_CUR = "ETMD_CUR",
            ETMD_RATE = "ETMD_RATE",
            ITM_RSV_DT = "ITM_RSV_DT",
            ACT_DT = "ACT_DT",
            ITM_LOC_DT = "ITM_LOC_DT",
            MSTR_NM = "MSTR_NM",
            MSTR_ADD = "MSTR_ADD",
            MSTR_TEL = "MSTR_TEL",
            ACC_ADD = "ACC_ADD",
            POST = "POST",
            Accept = "Accept",
            DISC = "DISC",
            Start_DT = "Start_DT",
            End_Dt = "End_Dt",
            Dor_NO = "Dor_NO",
            TR_NO = "TR_NO",
            TR_TOT = "TR_TOT",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
