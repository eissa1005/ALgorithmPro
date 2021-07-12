namespace ALgorithmPro.ALgorithm {
    export interface ItemTypesRow {
        Id?: number;
        ItemtypeId?: string;
        NameAr?: string;
        NameEn?: string;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }

    export namespace ItemTypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ItemtypeId';
        export const localTextPrefix = 'ALgorithm.ItemTypes';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            ItemtypeId = "ItemtypeId",
            NameAr = "NameAr",
            NameEn = "NameEn",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
