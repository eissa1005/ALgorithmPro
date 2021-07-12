namespace ALgorithmPro.ALgorithm {
    export interface MaxTableRow {
        ID?: number;
        TableID?: string;
        Table_NAME?: string;
        MAXSQL?: string;
        RMRK?: string;
        Status?: number;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace MaxTableRow {
        export const idProperty = 'ID';
        export const nameProperty = 'TableID';
        export const localTextPrefix = 'ALgorithm.MaxTable';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            TableID = "TableID",
            Table_NAME = "Table_NAME",
            MAXSQL = "MAXSQL",
            RMRK = "RMRK",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
