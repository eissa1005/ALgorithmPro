namespace ALgorithmPro.ALgorithm {
    export interface REPSRow {
        ID?: number;
        REP_CD?: string;
        REP_NAME?: string;
        REP_NAME_EN?: string;
        SupervisorID?: string;
        SaleCommision?: number;
        CollectCommision?: number;
        PriceID?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }

    export namespace REPSRow {
        export const idProperty = 'ID';
        export const nameProperty = 'REP_CD';
        export const localTextPrefix = 'ALgorithm.REPS';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_NAME_EN = "REP_NAME_EN",
            SupervisorID = "SupervisorID",
            SaleCommision = "SaleCommision",
            CollectCommision = "CollectCommision",
            PriceID = "PriceID",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
