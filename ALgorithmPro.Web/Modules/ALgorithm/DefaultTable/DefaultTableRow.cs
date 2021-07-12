using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[DefaultTable]")]
    [DisplayName("Default Table"), InstanceName("Default Table")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [LookupScript]
    public sealed class DefaultTableRow : Row<DefaultTableRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int32? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("StoreID"), Column("StoreID"), Size(100), QuickSearch, NameProperty]
        public String StoreID
        {
            get => fields.StoreID[this];
            set => fields.StoreID[this] = value;
        }

        [DisplayName("Store Name"), Column("Store_Name"),LookupInclude]
        public String Store_Name
        {
            get => fields.Store_Name[this];
            set => fields.Store_Name[this] = value;
        }

        [DisplayName("SupplierID"), Column("SupplierID"), Size(100),LookupInclude]
        public String SupplierID
        {
            get => fields.SupplierID[this];
            set => fields.SupplierID[this] = value;
        }

        [DisplayName("Supplier Name"), Column("Supplier_Name"), LookupInclude]
        public String Supplier_Name
        {
            get => fields.Supplier_Name[this];
            set => fields.Supplier_Name[this] = value;
        }

        [DisplayName("CustomerID"), Column("CustomerID"), Size(100), LookupInclude]
        public String CustomerID
        {
            get => fields.CustomerID[this];
            set => fields.CustomerID[this] = value;
        }

        [DisplayName("Customer Name"), Column("Customer_Name"), LookupInclude]
        public String Customer_Name
        {
            get => fields.Customer_Name[this];
            set => fields.Customer_Name[this] = value;
        }

        [DisplayName("SupervisorID"), Column("SuperID"), Size(100), LookupInclude]
        public String SuperID
        {
            get => fields.SuperID[this];
            set => fields.SuperID[this] = value;
        }

        [DisplayName("Supervisor Name"), Column("Super_Name"), LookupInclude]
        public String Super_Name
        {
            get => fields.Super_Name[this];
            set => fields.Super_Name[this] = value;
        }

        [DisplayName("CostCD"), Column("CST_CD"), Size(100), LookupInclude]
        public String CST_CD
        {
            get => fields.CST_CD[this];
            set => fields.CST_CD[this] = value;
        }

        [DisplayName("Cost Name"), Column("CST_NAME"), LookupInclude]
        public String CST_NAME
        {
            get => fields.CST_NAME[this];
            set => fields.CST_NAME[this] = value;
        }

        [DisplayName("REP_CD"), Column("REP_CD"), Size(100), LookupInclude]
        public String REP_CD
        {
            get => fields.REP_CD[this];
            set => fields.REP_CD[this] = value;
        }

        [DisplayName("REP NAME"), Column("REP_NAME"), LookupInclude]
        public String REP_NAME
        {
            get => fields.REP_NAME[this];
            set => fields.REP_NAME[this] = value;
        }

        [DisplayName("CurrencyID"), Column("CurrencyID"), Size(100), LookupInclude]
        public String CurrencyID
        {
            get => fields.CurrencyID[this];
            set => fields.CurrencyID[this] = value;
        }

        [DisplayName("Currency Name"), Column("Currency_NAME"), LookupInclude]
        public String Currency_NAME
        {
            get => fields.Currency_NAME[this];
            set => fields.Currency_NAME[this] = value;
        }

        [DisplayName("PriceID"), Column("PriceID"), Size(100), LookupInclude]
        public String PriceID
        {
            get => fields.PriceID[this];
            set => fields.PriceID[this] = value;
        }

        [DisplayName("Price Name"), LookupInclude]
        public String PriceName
        {
            get => fields.PriceName[this];
            set => fields.PriceName[this] = value;
        }

        [DisplayName("CashNO"), Column("Cash_NO"), Size(100), LookupInclude]
        public String Cash_NO
        {
            get => fields.Cash_NO[this];
            set => fields.Cash_NO[this] = value;
        }

        [DisplayName("Cash Name"), Column("Cash_NAME"), LookupInclude]
        public String Cash_NAME
        {
            get => fields.Cash_NAME[this];
            set => fields.Cash_NAME[this] = value;
        }

        [DisplayName("CashPurchase"), LookupInclude]
        public Int32? CashPurchase
        {
            get => fields.CashPurchase[this];
            set => fields.CashPurchase[this] = value;
        }

        [DisplayName("Purchase"), LookupInclude]
        public Int32? Purchase
        {
            get => fields.Purchase[this];
            set => fields.Purchase[this] = value;
        }

        [DisplayName("CashReturn"), LookupInclude]
        public Int32? CashReturn
        {
            get => fields.CashReturn[this];
            set => fields.CashReturn[this] = value;
        }

        [DisplayName("Return Sales"), LookupInclude]
        public Int32? ReturnSales
        {
            get => fields.ReturnSales[this];
            set => fields.ReturnSales[this] = value;
        }

        [DisplayName("TransferTO"), Column("TransferTO"), LookupInclude]
        public Int32? TransferTO
        {
            get => fields.TransferTO[this];
            set => fields.TransferTO[this] = value;
        }

        [DisplayName("TransferIN"), Column("TransferIN"), LookupInclude]
        public Int32? TransferIN
        {
            get => fields.TransferIN[this];
            set => fields.TransferIN[this] = value;
        }

        [DisplayName("CashSales"), LookupInclude]
        public Int32? CashSales
        {
            get => fields.CashSales[this];
            set => fields.CashSales[this] = value;
        }

        [DisplayName("Sales"), LookupInclude]
        public Int32? Sales
        {
            get => fields.Sales[this];
            set => fields.Sales[this] = value;
        }

        [DisplayName("CashRestore"), LookupInclude]
        public Int32? CashRestore
        {
            get => fields.CashRestore[this];
            set => fields.CashRestore[this] = value;
        }

        [DisplayName("Restore Purchase"), LookupInclude]
        public Int32? RestorePurchase
        {
            get => fields.RestorePurchase[this];
            set => fields.RestorePurchase[this] = value;
        }

        [DisplayName("AddInventory"), LookupInclude]
        public Int32? AddInventory
        {
            get => fields.AddInventory[this];
            set => fields.AddInventory[this] = value;
        }

        [DisplayName("RemoveInventory"), LookupInclude]
        public Int32? RemoveInventory
        {
            get => fields.RemoveInventory[this];
            set => fields.RemoveInventory[this] = value;
        }

        [DisplayName("CashReceive")]
        public Int32? CashReceive
        {
            get => fields.CashReceive[this];
            set => fields.CashReceive[this] = value;
        }

        [DisplayName("CashPayed"), LookupInclude]
        public Int32? CashPayed
        {
            get => fields.CashPayed[this];
            set => fields.CashPayed[this] = value;
        }

        [DisplayName("ChecksReceive"), LookupInclude]
        public Int32? ChecksReceive
        {
            get => fields.ChecksReceive[this];
            set => fields.ChecksReceive[this] = value;
        }

        [DisplayName("ChecksPayed"), LookupInclude]
        public Int32? ChecksPayed
        {
            get => fields.ChecksPayed[this];
            set => fields.ChecksPayed[this] = value;
        }

        [DisplayName("AccountingNotice"), LookupInclude]
        public Int32? AccountingNotice
        {
            get => fields.AccountingNotice[this];
            set => fields.AccountingNotice[this] = value;
        }

        [DisplayName("Expenses"), LookupInclude]
        public Int32? Expenses
        {
            get => fields.Expenses[this];
            set => fields.Expenses[this] = value;
        }

        [DisplayName("Revenue"), LookupInclude]
        public Int32? Revenue
        {
            get => fields.Revenue[this];
            set => fields.Revenue[this] = value;
        }

        [DisplayName("Entry"), LookupInclude]
        public Int32? Entry
        {
            get => fields.Entry[this];
            set => fields.Entry[this] = value;
        }

        public DefaultTableRow()
            : base()
        {
        }

        public DefaultTableRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public StringField StoreID;
            public StringField Store_Name;
            public StringField SupplierID;
            public StringField Supplier_Name;
            public StringField CustomerID;
            public StringField Customer_Name;
            public StringField SuperID;
            public StringField Super_Name;
            public StringField CST_CD;
            public StringField CST_NAME;
            public StringField REP_CD;
            public StringField REP_NAME;
            public StringField CurrencyID;
            public StringField Currency_NAME;
            public StringField PriceID;
            public StringField PriceName;
            public StringField Cash_NO;
            public StringField Cash_NAME;
            public Int32Field CashPurchase;
            public Int32Field Purchase;
            public Int32Field CashReturn;
            public Int32Field ReturnSales;
            public Int32Field TransferTO;
            public Int32Field TransferIN;
            public Int32Field CashSales;
            public Int32Field Sales;
            public Int32Field CashRestore;
            public Int32Field RestorePurchase;
            public Int32Field AddInventory;
            public Int32Field RemoveInventory;
            public Int32Field CashReceive;
            public Int32Field CashPayed;
            public Int32Field ChecksReceive;
            public Int32Field ChecksPayed;
            public Int32Field AccountingNotice;
            public Int32Field Expenses;
            public Int32Field Revenue;
            public Int32Field Entry;
        }
    }
}
