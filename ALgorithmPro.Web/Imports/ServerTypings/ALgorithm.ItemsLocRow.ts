namespace ALgorithmPro.ALgorithm {
    export interface ItemsLocRow {
        ID?: number;
        StoreID?: string;
        Item_CD?: string;
        Item_Name_AR?: string;
        Item_Name_EN?: string;
        TR_TY?: number;
        BGNBAL?: number;
        BGNCST?: number;
        UCST?: number;
        Price?: number;
        INQTY?: number;
        OUTQTY?: number;
        BAL?: number;
        PackageID?: string;
        BGNBONASQTY?: number;
        BONASQTY?: number;
        MinQty?: number;
        MaxQty?: number;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace ItemsLocRow {
        export const idProperty = 'ID';
        export const nameProperty = 'StoreID';
        export const localTextPrefix = 'ALgorithm.ItemsLoc';
        export const lookupKey = 'ALgorithm.ASITMLOC';

        export function getLookup(): Q.Lookup<ItemsLocRow> {
            return Q.getLookup<ItemsLocRow>('ALgorithm.ASITMLOC');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            StoreID = "StoreID",
            Item_CD = "Item_CD",
            Item_Name_AR = "Item_Name_AR",
            Item_Name_EN = "Item_Name_EN",
            TR_TY = "TR_TY",
            BGNBAL = "BGNBAL",
            BGNCST = "BGNCST",
            UCST = "UCST",
            Price = "Price",
            INQTY = "INQTY",
            OUTQTY = "OUTQTY",
            BAL = "BAL",
            PackageID = "PackageID",
            BGNBONASQTY = "BGNBONASQTY",
            BONASQTY = "BONASQTY",
            MinQty = "MinQty",
            MaxQty = "MaxQty",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
