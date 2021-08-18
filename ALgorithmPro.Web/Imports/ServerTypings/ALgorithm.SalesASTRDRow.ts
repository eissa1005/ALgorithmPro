namespace ALgorithmPro.ALgorithm {
    export interface SalesASTRDRow {
        ID?: number;
        DetailID?: number;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_NO?: number;
        LN_NO?: number;
        TR_DT?: string;
        StoreID?: string;
        Store_NAME?: string;
        TR_DS?: number;
        GRP?: number;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NO3?: string;
        TR_DS_AR?: string;
        TR_DS_EN?: string;
        ItemBAL?: number;
        Item_CD?: string;
        ItemBarCode?: string;
        PKID?: string;
        PKName?: string;
        PK?: number;
        QTY?: number;
        PKPRC?: number;
        Price?: number;
        Value?: number;
        PKCST?: number;
        PKCSTVL?: number;
        FIFO?: number;
        FIFOVL?: number;
        LIFO?: number;
        LIFOVL?: number;
        DISC?: number;
        DISC1?: number;
        DISC2?: number;
        DISC3?: number;
        DISC4?: number;
        DISC1R?: number;
        DISC2R?: number;
        DISC3R?: number;
        STAX_VL?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAXVAL?: number;
        TAX1R?: number;
        TAX2R?: number;
        TAX3R?: number;
        EXPENSEVL?: number;
        EXPENSE_CNT?: number;
        CurrencyID?: string;
        Currency_Name?: string;
        RATE?: number;
        CUR_VL?: number;
        DetailRemark?: number;
        BonusID?: number;
        ReturnQty?: number;
        RestoreQty?: number;
        PTR_NO?: number;
        PTR_TY?: number;
        PStoreID?: string;
        CustomerPrice?: number;
        PriceID?: string;
        PriceLevelId?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
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
        ITM_NM_AR?: string;
        ACC_NAME2?: string;
        ACC_NAME3?: string;
        Recipient?: string;
        RecipientDate?: string;
        disc_cur_val?: number;
        tax_cur_val?: number;
        GLPOST?: boolean;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        NET?: number;
    }

    export namespace SalesASTRDRow {
        export const idProperty = 'ID';
        export const nameProperty = 'DetailID';
        export const localTextPrefix = 'ALgorithm.SalesASTRD';
        export const lookupKey = 'ALgorithm.SalesASTRD';

        export function getLookup(): Q.Lookup<SalesASTRDRow> {
            return Q.getLookup<SalesASTRDRow>('ALgorithm.SalesASTRD');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            DetailID = "DetailID",
            TR_TY = "TR_TY",
            TRTY_NAME = "TRTY_NAME",
            TR_NO = "TR_NO",
            LN_NO = "LN_NO",
            TR_DT = "TR_DT",
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            TR_DS = "TR_DS",
            GRP = "GRP",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NO3 = "ACC_NO3",
            TR_DS_AR = "TR_DS_AR",
            TR_DS_EN = "TR_DS_EN",
            ItemBAL = "ItemBAL",
            Item_CD = "Item_CD",
            ItemBarCode = "ItemBarCode",
            PKID = "PKID",
            PKName = "PKName",
            PK = "PK",
            QTY = "QTY",
            PKPRC = "PKPRC",
            Price = "Price",
            Value = "Value",
            PKCST = "PKCST",
            PKCSTVL = "PKCSTVL",
            FIFO = "FIFO",
            FIFOVL = "FIFOVL",
            LIFO = "LIFO",
            LIFOVL = "LIFOVL",
            DISC = "DISC",
            DISC1 = "DISC1",
            DISC2 = "DISC2",
            DISC3 = "DISC3",
            DISC4 = "DISC4",
            DISC1R = "DISC1R",
            DISC2R = "DISC2R",
            DISC3R = "DISC3R",
            STAX_VL = "STAX_VL",
            TAX1 = "TAX1",
            TAX2 = "TAX2",
            TAX3 = "TAX3",
            TAXVAL = "TAXVAL",
            TAX1R = "TAX1R",
            TAX2R = "TAX2R",
            TAX3R = "TAX3R",
            EXPENSEVL = "EXPENSEVL",
            EXPENSE_CNT = "EXPENSE_CNT",
            CurrencyID = "CurrencyID",
            Currency_Name = "Currency_Name",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            DetailRemark = "DetailRemark",
            BonusID = "BonusID",
            ReturnQty = "ReturnQty",
            RestoreQty = "RestoreQty",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            PStoreID = "PStoreID",
            CustomerPrice = "CustomerPrice",
            PriceID = "PriceID",
            PriceLevelId = "PriceLevelId",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
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
            ITM_NM_AR = "ITM_NM_AR",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NAME3 = "ACC_NAME3",
            Recipient = "Recipient",
            RecipientDate = "RecipientDate",
            disc_cur_val = "disc_cur_val",
            tax_cur_val = "tax_cur_val",
            GLPOST = "GLPOST",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            NET = "NET"
        }
    }
}
