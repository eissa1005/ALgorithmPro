namespace ALgorithmPro.ALgorithm {
    export interface CurrencyRow {
        ID?: number;
        CurrencyID?: string;
        Name_AR?: string;
        Name_EN?: string;
        CUR_RAT?: number;
        RAT_DT?: string;
        RAT_RTIO?: string;
        ICUR_RAT?: number;
        CUR_PRFX_AR?: string;
        CUR_PRFX_EN?: string;
        CUR_SMPL_AR?: string;
        CUR_SMPL_EN?: string;
        CUR_RNG?: number;
        CUR_ACCNO?: string;
        ROLL_NO?: string;
        RMRK?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace CurrencyRow {
        export const idProperty = 'ID';
        export const nameProperty = 'CurrencyID';
        export const localTextPrefix = 'ALgorithm.Currency';
        export const lookupKey = 'ALgorithm.Currency';

        export function getLookup(): Q.Lookup<CurrencyRow> {
            return Q.getLookup<CurrencyRow>('ALgorithm.Currency');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            CurrencyID = "CurrencyID",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN",
            CUR_RAT = "CUR_RAT",
            RAT_DT = "RAT_DT",
            RAT_RTIO = "RAT_RTIO",
            ICUR_RAT = "ICUR_RAT",
            CUR_PRFX_AR = "CUR_PRFX_AR",
            CUR_PRFX_EN = "CUR_PRFX_EN",
            CUR_SMPL_AR = "CUR_SMPL_AR",
            CUR_SMPL_EN = "CUR_SMPL_EN",
            CUR_RNG = "CUR_RNG",
            CUR_ACCNO = "CUR_ACCNO",
            ROLL_NO = "ROLL_NO",
            RMRK = "RMRK",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
