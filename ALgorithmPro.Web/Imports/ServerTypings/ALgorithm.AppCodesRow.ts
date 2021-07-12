namespace ALgorithmPro.ALgorithm {
    export interface AppCodesRow {
        ID?: number;
        SEQ?: number;
        DSCR_AR?: string;
        DSCR_EN?: string;
        RMRK?: string;
        MID?: number;
        MSEQ?: number;
        Rquird?: number;
        X?: number;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
        Ssys?: string;
    }

    export namespace AppCodesRow {
        export const idProperty = 'ID';
        export const nameProperty = 'DSCR_AR';
        export const localTextPrefix = 'ALgorithm.AppCodes';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            SEQ = "SEQ",
            DSCR_AR = "DSCR_AR",
            DSCR_EN = "DSCR_EN",
            RMRK = "RMRK",
            MID = "MID",
            MSEQ = "MSEQ",
            Rquird = "Rquird",
            X = "X",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate",
            Ssys = "Ssys"
        }
    }
}
