namespace ALgorithmPro.ALgorithm {
    export interface ItemSubGroupsRow {
        ID?: number;
        CITM_CD?: string;
        Name_AR?: string;
        Name_EN?: string;
        ParentID?: string;
        OrderBy?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }

    export namespace ItemSubGroupsRow {
        export const idProperty = 'ID';
        export const nameProperty = 'CITM_CD';
        export const localTextPrefix = 'ALgorithm.ItemSubGroups';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            CITM_CD = "CITM_CD",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN",
            ParentID = "ParentID",
            OrderBy = "OrderBy",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
