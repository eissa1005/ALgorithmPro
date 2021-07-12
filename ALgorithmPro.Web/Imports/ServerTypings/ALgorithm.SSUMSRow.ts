namespace ALgorithmPro.ALgorithm {
    export interface SSUMSRow {
        ID?: number;
        SSUM_CD?: string;
        SSUM_NM_AR?: string;
        SSUM_NM_EN?: string;
        MSSUM_CD?: string;
        SSUM_CST_CD?: string;
        SSUM_CTG?: string;
        ST_DT?: string;
        FMLY?: string;
        GSSUM_CD?: string;
        Phone?: string;
        ADDRS?: string;
        SUM_CD?: string;
        FDT?: string;
        TDT?: string;
        SSUM_CATG?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }

    export namespace SSUMSRow {
        export const idProperty = 'ID';
        export const nameProperty = 'SSUM_CD';
        export const localTextPrefix = 'ALgorithm.SSUMS';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            SSUM_CD = "SSUM_CD",
            SSUM_NM_AR = "SSUM_NM_AR",
            SSUM_NM_EN = "SSUM_NM_EN",
            MSSUM_CD = "MSSUM_CD",
            SSUM_CST_CD = "SSUM_CST_CD",
            SSUM_CTG = "SSUM_CTG",
            ST_DT = "ST_DT",
            FMLY = "FMLY",
            GSSUM_CD = "GSSUM_CD",
            Phone = "Phone",
            ADDRS = "ADDRS",
            SUM_CD = "SUM_CD",
            FDT = "FDT",
            TDT = "TDT",
            SSUM_CATG = "SSUM_CATG",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
