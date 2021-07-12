namespace ALgorithmPro.ALgorithm {
    export interface SUMSRow {
        ID?: number;
        SUM_CD?: string;
        SUM_NM_AR?: string;
        SUM_NM_EN?: string;
        MSUM_CD?: string;
        SUM_CATG?: string;
        SSUM_CD?: string;
        Phone?: string;
        Mobile?: string;
        ADDRS?: string;
        RegionID?: string;
        ACC_NO?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }

    export namespace SUMSRow {
        export const idProperty = 'ID';
        export const nameProperty = 'SUM_CD';
        export const localTextPrefix = 'ALgorithm.SUMS';
        export const lookupKey = 'ALgorithm.SUMS';

        export function getLookup(): Q.Lookup<SUMSRow> {
            return Q.getLookup<SUMSRow>('ALgorithm.SUMS');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            SUM_CD = "SUM_CD",
            SUM_NM_AR = "SUM_NM_AR",
            SUM_NM_EN = "SUM_NM_EN",
            MSUM_CD = "MSUM_CD",
            SUM_CATG = "SUM_CATG",
            SSUM_CD = "SSUM_CD",
            Phone = "Phone",
            Mobile = "Mobile",
            ADDRS = "ADDRS",
            RegionID = "RegionID",
            ACC_NO = "ACC_NO",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
