namespace ALgorithmPro.ALgorithm {
    export interface ItemsRow {
        ID?: number;
        Item_CD?: string;
        Item_Name_AR?: string;
        Item_Name_EN?: string;
        MITM_CD?: string;
        CITM_CD?: string;
        ItemTypes?: number;
        RMRK?: string;
        ItemSupplier?: boolean;
        SLS_PK?: string;
        PRCH_PK?: string;
        ItemCost?: number;
        SPRC2?: number;
        SPRC3?: number;
        SPRC4?: number;
        SPRC5?: number;
        SPRC6?: number;
        PPRC2?: number;
        PPRC3?: number;
        PPRC4?: number;
        PPRC5?: number;
        PPRC6?: number;
        SALDISC_TYPE?: Web.Modules.Common.DiscType;
        PURDISC_TYPE?: Web.Modules.Common.DiscType;
        TAX_TYPE?: Web.Modules.Common.DiscType;
        SDISC1?: number;
        SDISC2?: number;
        SDISC3?: number;
        PDISC1?: number;
        PDISC2?: number;
        PDISC3?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAX4?: number;
        BGNBAL?: number;
        BGNCOST?: number;
        UCOST?: number;
        ItemBAL?: number;
        MinQty?: number;
        MaxQty?: number;
        Itemlimit?: number;
        MITM_NM_AR?: string;
        MITM_NM_EN?: string;
        StoreID?: string;
        ItemPhoto?: number[];
        GLNO1?: string;
        GLNO2?: string;
        GLNO3?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
        DetailList?: ItemsBarcodeRow[];
    }

    export namespace ItemsRow {
        export const idProperty = 'ID';
        export const nameProperty = 'Item_CD';
        export const localTextPrefix = 'ALgorithm.Items';
        export const lookupKey = 'ALgorithm.ASITMS';

        export function getLookup(): Q.Lookup<ItemsRow> {
            return Q.getLookup<ItemsRow>('ALgorithm.ASITMS');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            Item_CD = "Item_CD",
            Item_Name_AR = "Item_Name_AR",
            Item_Name_EN = "Item_Name_EN",
            MITM_CD = "MITM_CD",
            CITM_CD = "CITM_CD",
            ItemTypes = "ItemTypes",
            RMRK = "RMRK",
            ItemSupplier = "ItemSupplier",
            SLS_PK = "SLS_PK",
            PRCH_PK = "PRCH_PK",
            ItemCost = "ItemCost",
            SPRC2 = "SPRC2",
            SPRC3 = "SPRC3",
            SPRC4 = "SPRC4",
            SPRC5 = "SPRC5",
            SPRC6 = "SPRC6",
            PPRC2 = "PPRC2",
            PPRC3 = "PPRC3",
            PPRC4 = "PPRC4",
            PPRC5 = "PPRC5",
            PPRC6 = "PPRC6",
            SALDISC_TYPE = "SALDISC_TYPE",
            PURDISC_TYPE = "PURDISC_TYPE",
            TAX_TYPE = "TAX_TYPE",
            SDISC1 = "SDISC1",
            SDISC2 = "SDISC2",
            SDISC3 = "SDISC3",
            PDISC1 = "PDISC1",
            PDISC2 = "PDISC2",
            PDISC3 = "PDISC3",
            TAX1 = "TAX1",
            TAX2 = "TAX2",
            TAX3 = "TAX3",
            TAX4 = "TAX4",
            BGNBAL = "BGNBAL",
            BGNCOST = "BGNCOST",
            UCOST = "UCOST",
            ItemBAL = "ItemBAL",
            MinQty = "MinQty",
            MaxQty = "MaxQty",
            Itemlimit = "Itemlimit",
            MITM_NM_AR = "MITM_NM_AR",
            MITM_NM_EN = "MITM_NM_EN",
            StoreID = "StoreID",
            ItemPhoto = "ItemPhoto",
            GLNO1 = "GLNO1",
            GLNO2 = "GLNO2",
            GLNO3 = "GLNO3",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate",
            DetailList = "DetailList"
        }
    }
}
