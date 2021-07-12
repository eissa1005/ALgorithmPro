namespace ALgorithmPro.ALgorithm {
    export interface ItemGroupsRow {
        ID?: number;
        MITM_CD?: string;
        Name_AR?: string;
        Name_EN?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }

    export namespace ItemGroupsRow {
        export const idProperty = 'ID';
        export const nameProperty = 'MITM_CD';
        export const localTextPrefix = 'ALgorithm.ItemGroups';
        export const lookupKey = 'ALgorithm.ItemGroups';

        export function getLookup(): Q.Lookup<ItemGroupsRow> {
            return Q.getLookup<ItemGroupsRow>('ALgorithm.ItemGroups');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            MITM_CD = "MITM_CD",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
