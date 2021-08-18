namespace ALgorithmPro {
    export interface ASTRDVIEWRow {
        DetailID?: number;
        TR_NO?: number;
        TR_TY?: number;
        TR_DT?: string;
        TRTY_NAME?: string;
        StoreID?: string;
        Store_NAME?: string;
        Store_Name2?: string;
        ReferenNumer?: number;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        HDSCR_AR?: string;
        TR_DS_AR?: string;
        SupervisorID?: string;
        Supervisor_NAME?: string;
        TR_DS_EN?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        PStoreID?: string;
        PTR_NO?: number;
        PTR_TY?: number;
        Priceedit?: boolean;
        EXPENSEVL?: number;
        HAddtions?: number;
        HdrAddtionsR?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        LN_NO?: number;
        Item_CD?: string;
        Item_Name_AR?: string;
        ItemBarCode?: string;
        ITM_NM_AR?: string;
        PKID?: string;
        PKName?: string;
        PK?: number;
        ItemBAL?: number;
        QTY?: number;
        Price?: number;
        PKPRC?: number;
        PKCST?: number;
        Value?: number;
        Total?: number;
        DISC1?: number;
        DISC2?: number;
        DISC3?: number;
        DISC4?: number;
        DISCVAL?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAXVAL?: number;
        NET?: number;
        NetTotal?: number;
        CostValue?: number;
        FIFOVL?: number;
        LIFOVL?: number;
        PriceID?: string;
        PriceName?: string;
        ValueAfterTAX?: number;
        RestoreQty?: number;
        ReturnQty?: number;
        GRP?: number;
        Phone1?: string;
        Phone2?: string;
        Phone3?: string;
        ADDRS1?: string;
        ADDRS2?: string;
        MOBIL1?: string;
        MOBIL2?: string;
        REC_ID?: number;
        HDISC1R?: number;
        HDISC2R?: number;
        HDISC3R?: number;
        SHDISCR?: number;
        DISC1R?: number;
        DISC2R?: number;
        DISC3R?: number;
        SDISCR?: number;
        NetBeforeTAX?: number;
        TAX1R?: number;
        TAX2R?: number;
        TAX3R?: number;
        STAXR?: number;
        NetAfterTAX?: number;
        CUR_VL?: number;
        DISC_CUR_VAL?: number;
        TAX_CUR_VAL?: number;
        ACCBAL_CUR_VL?: number;
        SPRC6?: number;
        SPRC5?: number;
        SPRC4?: number;
        SPRC3?: number;
        SPRC2?: number;
        UCST?: number;
        Status?: number;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace ASTRDVIEWRow {
        export const idProperty = 'DetailID';
        export const nameProperty = 'StoreID';
        export const localTextPrefix = 'Model.ASTRDVIEW';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            DetailID = "DetailID",
            TR_NO = "TR_NO",
            TR_TY = "TR_TY",
            TR_DT = "TR_DT",
            TRTY_NAME = "TRTY_NAME",
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            Store_Name2 = "Store_Name2",
            ReferenNumer = "ReferenNumer",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            HDSCR_AR = "HDSCR_AR",
            TR_DS_AR = "TR_DS_AR",
            SupervisorID = "SupervisorID",
            Supervisor_NAME = "Supervisor_NAME",
            TR_DS_EN = "TR_DS_EN",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            PStoreID = "PStoreID",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            Priceedit = "Priceedit",
            EXPENSEVL = "EXPENSEVL",
            HAddtions = "HAddtions",
            HdrAddtionsR = "HdrAddtionsR",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            LN_NO = "LN_NO",
            Item_CD = "Item_CD",
            Item_Name_AR = "Item_Name_AR",
            ItemBarCode = "ItemBarCode",
            ITM_NM_AR = "ITM_NM_AR",
            PKID = "PKID",
            PKName = "PKName",
            PK = "PK",
            ItemBAL = "ItemBAL",
            QTY = "QTY",
            Price = "Price",
            PKPRC = "PKPRC",
            PKCST = "PKCST",
            Value = "Value",
            Total = "Total",
            DISC1 = "DISC1",
            DISC2 = "DISC2",
            DISC3 = "DISC3",
            DISC4 = "DISC4",
            DISCVAL = "DISCVAL",
            TAX1 = "TAX1",
            TAX2 = "TAX2",
            TAX3 = "TAX3",
            TAXVAL = "TAXVAL",
            NET = "NET",
            NetTotal = "NetTotal",
            CostValue = "CostValue",
            FIFOVL = "FIFOVL",
            LIFOVL = "LIFOVL",
            PriceID = "PriceID",
            PriceName = "PriceName",
            ValueAfterTAX = "ValueAfterTAX",
            RestoreQty = "RestoreQty",
            ReturnQty = "ReturnQty",
            GRP = "GRP",
            Phone1 = "Phone1",
            Phone2 = "Phone2",
            Phone3 = "Phone3",
            ADDRS1 = "ADDRS1",
            ADDRS2 = "ADDRS2",
            MOBIL1 = "MOBIL1",
            MOBIL2 = "MOBIL2",
            REC_ID = "REC_ID",
            HDISC1R = "HDISC1R",
            HDISC2R = "HDISC2R",
            HDISC3R = "HDISC3R",
            SHDISCR = "SHDISCR",
            DISC1R = "DISC1R",
            DISC2R = "DISC2R",
            DISC3R = "DISC3R",
            SDISCR = "SDISCR",
            NetBeforeTAX = "NetBeforeTAX",
            TAX1R = "TAX1R",
            TAX2R = "TAX2R",
            TAX3R = "TAX3R",
            STAXR = "STAXR",
            NetAfterTAX = "NetAfterTAX",
            CUR_VL = "CUR_VL",
            DISC_CUR_VAL = "DISC_CUR_VAL",
            TAX_CUR_VAL = "TAX_CUR_VAL",
            ACCBAL_CUR_VL = "ACCBAL_CUR_VL",
            SPRC6 = "SPRC6",
            SPRC5 = "SPRC5",
            SPRC4 = "SPRC4",
            SPRC3 = "SPRC3",
            SPRC2 = "SPRC2",
            UCST = "UCST",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
