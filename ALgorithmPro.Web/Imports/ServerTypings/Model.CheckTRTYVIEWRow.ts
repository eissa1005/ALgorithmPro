namespace ALgorithmPro.Model {
    export interface CheckTRTYVIEWRow {
        ID?: number;
        TR_TY?: number;
        Name_AR?: string;
        Name_EN?: string;
    }

    export namespace CheckTRTYVIEWRow {
        export const idProperty = 'ID';
        export const nameProperty = 'Name_AR';
        export const localTextPrefix = 'ALgorithm.CheckTRTYVIEW';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            TR_TY = "TR_TY",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN"
        }
    }
}
