namespace ALgorithmPro.ALgorithm {
    export interface BranchRow {
        ID?: number;
        BranchID?: string;
        Name_AR?: string;
        Name_EN?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace BranchRow {
        export const idProperty = 'ID';
        export const nameProperty = 'BranchID';
        export const localTextPrefix = 'ALgorithm.Branch';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            BranchID = "BranchID",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
