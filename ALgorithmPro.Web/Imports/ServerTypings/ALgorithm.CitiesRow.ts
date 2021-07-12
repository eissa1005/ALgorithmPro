namespace ALgorithmPro.ALgorithm {
    export interface CitiesRow {
        ID?: number;
        CityID?: string;
        Name_AR?: string;
        Name_EN?: string;
        RegionID?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }

    export namespace CitiesRow {
        export const idProperty = 'ID';
        export const nameProperty = 'CityID';
        export const localTextPrefix = 'ALgorithm.Cities';
        export const lookupKey = 'ALgorithm.Cities';

        export function getLookup(): Q.Lookup<CitiesRow> {
            return Q.getLookup<CitiesRow>('ALgorithm.Cities');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            CityID = "CityID",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN",
            RegionID = "RegionID",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
