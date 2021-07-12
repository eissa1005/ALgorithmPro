namespace ALgorithmPro.ALgorithm {
    export interface SupervisorsRow {
        ID?: number;
        SupervisorID?: string;
        Name_AR?: string;
        Name_EN?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }

    export namespace SupervisorsRow {
        export const idProperty = 'ID';
        export const nameProperty = 'SupervisorID';
        export const localTextPrefix = 'ALgorithm.Supervisors';
        export const lookupKey = 'ALgorithm.Supervisors';

        export function getLookup(): Q.Lookup<SupervisorsRow> {
            return Q.getLookup<SupervisorsRow>('ALgorithm.Supervisors');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            SupervisorID = "SupervisorID",
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
