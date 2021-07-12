namespace ALgorithmPro.ALgorithm {
    export interface PriceTypesRow {
        Id?: number;
        PriceId?: string;
        NameAr?: string;
        NameEn?: string;
        Status?: number;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }

    export namespace PriceTypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'PriceId';
        export const localTextPrefix = 'ALgorithm.PriceTypes';
        export const lookupKey = 'ALgorithm.PriceTypes';

        export function getLookup(): Q.Lookup<PriceTypesRow> {
            return Q.getLookup<PriceTypesRow>('ALgorithm.PriceTypes');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            PriceId = "PriceId",
            NameAr = "NameAr",
            NameEn = "NameEn",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
