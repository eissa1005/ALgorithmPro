using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace ALgorithmPro.Web.Modules.Common
{
    public enum Status
    {
        [Description("Active")]
        Active = 1,
        [Description("DeActive")]
        DeActive = 0
    }
    public enum ItemType
    {
        MainCategory = 1,
        SubCategory = 2,
    }
    public enum DiscType
    {
        Value = 1,
        Percent = 2,
    }
    public enum TRTYType
    {
        CashPurchase = 1,
        Purchase = 2,
        TransferTO = 3,
        CashReturn = 5,
        ReturnSales = 6,
        CashSales = 11,
        Sales = 12,
        TransferIN = 13,
        InventoryCorrupted = 15,
        CashRestore = 16,
        RestorePurch = 17,
        Expenses=27,
        Revenu = 401,
        CashPayed = 21,
        CashReceive = 22,
        AddInventory = 33,
        RemoveInventory = 42,
        BGNBAL = 100,
        Entre = 403,
        AccountNotify = 404,
    }
    public enum TRDSTYPE
    {
        CashPurchase = 1,
        Purchase = 2,
        TransferTO = 201,
        CashReturn = 5,
        ReturnSales = 6,
        CashSales = 101,
        Sales = 102,
        TransferIN = 301,
        InventoryCorrupted = 304,
        CashRestore = 105,
        RestorePurch = 106,
        CashPayed = 501,
        CashReceive = 401,
        Expenses = 501,
        Revenu = 401,
        AddInventory = 205,
        RemoveInventory = 305,
        BGNBAL = 2,
        Entre = 403,
        AccountNotify = 403,
    }
    public enum GRPTYPE
    {
        CashPurchase = 0,
        Purchase = 0,
        TransferTO = 2,
        CashReturn = 0,
        ReturnSales = 0,
        CashSales = 1,
        Sales = 1,
        TransferIN = 3,
        InventoryCorrupted = 3,
        CashRestore = 1,
        RestorePurch = 1,
        CashPayed = 5,
        CashReceive = 4,
        Expenses = 5,
        Revenu = 4,
        AddInventory = 2,
        RemoveInventory = 3,
        BGNBAL = 0,
        Entre = 4,
        AccountNotify = 4,
    }
    public enum CostCalculationMethod
    {
        FIFO = 1,
        LIFO,
        WAV,
    }

    public enum PayType
    {
        Cash,
        Credit
    }
    public enum DocType
    {
        Checks = 1,
        BILLS = 2
    }
    public enum CheckType
    {
        ReceiveChecks = 22,
        PayChecks = 23
    }
    public enum CheckTRTY
    {
        Deposit = 701,
        CASH = 702,
        PartialCASH = 703,
        Bounce = 704,
        Endorsement = 705,
        Close = 706,
        Stop = 707,
    }
    public enum SendTypes
    {
        New, Edit, Delete, GeT, Optional
    }

    public enum CostDistributionOptions
    {
        ByQty, ByPrice
    }
    public enum PriceType
    {
        PriceCost = 1,
        PurchCost = 2,
        SALPRICE3 = 3,
        SALPRICE4 = 4,
        SALPRICE5 = 5,
        SALPRICE6 = 6,
    }
    public enum DealingParty
    {
        Supplier, Customer, SupplierCustomer, Sales, Purchase, ReturnSalesCash, ReturnSales, RestorePurchase, RestorePurchaseCash,
        TransferIN, TransferTO, AddInventory, RemoveInventory, InventoryDeficit, InventoryCorrupted, InventoryMissed, CashReceive, CashPayed,
        ChecksReceive, ChecksPayed
    }
    public enum WarningLevel
    {
        Prevent = 1,
        showWarning,
        Allow
    }

    public enum UserType
    {
        Admin = 1,
        User,

    }
    public enum Actions
    {
        Show = 1,
        Open,
        Add,
        Edit,
        Delete,
        Print,
        VIEW
    }

    public enum AccountType
    {
        [Description("Main Account")]
        MainAccount = 1,
        [Description("Sub Account")]
        SubAccount
    }
    public enum AccountNature
    {
        [Description("Debit")]
        Debit = 1,
        [Description("Credit")]
        Credit
    }
    public enum EnumTableName
    {
        ASTRTY = 1,
        ASACCMF,
        Customer,
        Supplier,
        Assets,
        Liabilities,
        Expenses,
    }
    public enum ReportTypes
    {
        CashSTAT = 1,
        BANKSTAT,
        CustomerSTAT,
        CustomerDetailsSTAT,
        SupplierSTAT,
        SupplierDetailsSTAT,
        ItemsCard,
        REPCommissions,
        SalesREPS,
    }
}
