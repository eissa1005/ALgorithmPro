namespace ALgorithmPro.ALgorithm {
    export interface DistrictsRow {
        ID?: number;
        DistrictsID?: string;
        Name_AR?: string;
        Name_EN?: string;
        CityID?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }

    export namespace DistrictsRow {
        export const idProperty = 'ID';
        export const nameProperty = 'DistrictsID';
        export const localTextPrefix = 'ALgorithm.Districts';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            DistrictsID = "DistrictsID",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN",
            CityID = "CityID",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
