namespace ALgorithmPro.ALgorithm {
    export interface DefaultTableRow {
        ID?: number;
        StoreID?: string;
        Store_Name?: string;
        SupplierID?: string;
        Supplier_Name?: string;
        CustomerID?: string;
        Customer_Name?: string;
        SuperID?: string;
        Super_Name?: string;
        CST_CD?: string;
        CST_NAME?: string;
        REP_CD?: string;
        REP_NAME?: string;
        CurrencyID?: string;
        Currency_NAME?: string;
        PriceID?: string;
        PriceName?: string;
        Cash_NO?: string;
        Cash_NAME?: string;
        CashPurchase?: number;
        Purchase?: number;
        CashReturn?: number;
        ReturnSales?: number;
        TransferTO?: number;
        TransferIN?: number;
        CashSales?: number;
        Sales?: number;
        CashRestore?: number;
        RestorePurchase?: number;
        AddInventory?: number;
        RemoveInventory?: number;
        CashReceive?: number;
        CashPayed?: number;
        ChecksReceive?: number;
        ChecksPayed?: number;
        AccountingNotice?: number;
        Expenses?: number;
        Revenue?: number;
        Entry?: number;
    }

    export namespace DefaultTableRow {
        export const idProperty = 'ID';
        export const nameProperty = 'StoreID';
        export const localTextPrefix = 'ALgorithm.DefaultTable';
        export const lookupKey = 'ALgorithm.DefaultTable';

        export function getLookup(): Q.Lookup<DefaultTableRow> {
            return Q.getLookup<DefaultTableRow>('ALgorithm.DefaultTable');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            StoreID = "StoreID",
            Store_Name = "Store_Name",
            SupplierID = "SupplierID",
            Supplier_Name = "Supplier_Name",
            CustomerID = "CustomerID",
            Customer_Name = "Customer_Name",
            SuperID = "SuperID",
            Super_Name = "Super_Name",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            PriceID = "PriceID",
            PriceName = "PriceName",
            Cash_NO = "Cash_NO",
            Cash_NAME = "Cash_NAME",
            CashPurchase = "CashPurchase",
            Purchase = "Purchase",
            CashReturn = "CashReturn",
            ReturnSales = "ReturnSales",
            TransferTO = "TransferTO",
            TransferIN = "TransferIN",
            CashSales = "CashSales",
            Sales = "Sales",
            CashRestore = "CashRestore",
            RestorePurchase = "RestorePurchase",
            AddInventory = "AddInventory",
            RemoveInventory = "RemoveInventory",
            CashReceive = "CashReceive",
            CashPayed = "CashPayed",
            ChecksReceive = "ChecksReceive",
            ChecksPayed = "ChecksPayed",
            AccountingNotice = "AccountingNotice",
            Expenses = "Expenses",
            Revenue = "Revenue",
            Entry = "Entry"
        }
    }
}
