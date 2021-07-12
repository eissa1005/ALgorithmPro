namespace ALgorithmPro.ALgorithm {
    export interface ItemsBarcodeRow {
        ID?: number;
        ItemID?: number;
        Barcode?: string;
        Item_CD?: string;
        PKID?: string;
        PKName?: string;
        PKRAT?: number;
        SPRC2?: number;
        SPRC3?: number;
        SPRC4?: number;
        SPRC5?: number;
        SPRC6?: number;
        BGNCST?: number;
        UCST?: number;
        Price?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }

    export namespace ItemsBarcodeRow {
        export const idProperty = 'ID';
        export const nameProperty = 'Barcode';
        export const localTextPrefix = 'ALgorithm.ItemsBarcode';
        export const lookupKey = 'ALgorithm.ItemsBarcode';

        export function getLookup(): Q.Lookup<ItemsBarcodeRow> {
            return Q.getLookup<ItemsBarcodeRow>('ALgorithm.ItemsBarcode');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            ItemID = "ItemID",
            Barcode = "Barcode",
            Item_CD = "Item_CD",
            PKID = "PKID",
            PKName = "PKName",
            PKRAT = "PKRAT",
            SPRC2 = "SPRC2",
            SPRC3 = "SPRC3",
            SPRC4 = "SPRC4",
            SPRC5 = "SPRC5",
            SPRC6 = "SPRC6",
            BGNCST = "BGNCST",
            UCST = "UCST",
            Price = "Price",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
