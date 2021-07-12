namespace ALgorithmPro.ALgorithm {
    export interface PackageRow {
        ID?: number;
        PKID?: string;
        PK_NM_AR?: string;
        PK_NM_EN?: string;
        PKCNT?: number;
        FACT?: number;
        SPKID?: string;
        RMRK?: string;
        RMRK2?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace PackageRow {
        export const idProperty = 'ID';
        export const nameProperty = 'PKID';
        export const localTextPrefix = 'ALgorithm.Package';
        export const lookupKey = 'ALgorithm.Package';

        export function getLookup(): Q.Lookup<PackageRow> {
            return Q.getLookup<PackageRow>('ALgorithm.Package');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            PKID = "PKID",
            PK_NM_AR = "PK_NM_AR",
            PK_NM_EN = "PK_NM_EN",
            PKCNT = "PKCNT",
            FACT = "FACT",
            SPKID = "SPKID",
            RMRK = "RMRK",
            RMRK2 = "RMRK2",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
