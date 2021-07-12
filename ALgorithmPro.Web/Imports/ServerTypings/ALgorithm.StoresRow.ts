namespace ALgorithmPro.ALgorithm {
    export interface StoresRow {
        ID?: number;
        StoreID?: string;
        Store_Name_AR?: string;
        Store_Name_EN?: string;
        BranchID?: number;
        ADDRS?: string;
        GLACCID?: number;
        GLCSTID?: number;
        CST_CD?: string;
        SUM_CD?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace StoresRow {
        export const idProperty = 'ID';
        export const nameProperty = 'StoreID';
        export const localTextPrefix = 'ALgorithm.Stores';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            StoreID = "StoreID",
            Store_Name_AR = "Store_Name_AR",
            Store_Name_EN = "Store_Name_EN",
            BranchID = "BranchID",
            ADDRS = "ADDRS",
            GLACCID = "GLACCID",
            GLCSTID = "GLCSTID",
            CST_CD = "CST_CD",
            SUM_CD = "SUM_CD",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
