namespace ALgorithmPro.ALgorithm {
    export interface RegionsRow {
        ID?: number;
        RegionID?: string;
        Name_AR?: string;
        Name_EN?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }

    export namespace RegionsRow {
        export const idProperty = 'ID';
        export const nameProperty = 'RegionID';
        export const localTextPrefix = 'ALgorithm.Regions';
        export const lookupKey = 'ALgorithm.Regions';

        export function getLookup(): Q.Lookup<RegionsRow> {
            return Q.getLookup<RegionsRow>('ALgorithm.Regions');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            RegionID = "RegionID",
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
