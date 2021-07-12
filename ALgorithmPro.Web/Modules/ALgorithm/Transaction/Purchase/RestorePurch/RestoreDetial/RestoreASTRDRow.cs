using ALgorithmPro.Lookup;
using ALgorithmPro.Web.Modules.Common;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ASTRD]")]
    [DisplayName("Restore Astrd"), InstanceName("Restore Astrd")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("ALgorithm.RestoreASTRD")]
    public sealed class RestoreASTRDRow : Row<RestoreASTRDRow.RowFields>, IIdRow, INameRow
    {
        [Hidden]
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;

        }
        [Hidden]
        [DisplayName("DetailID"), Column("DetailID")]
        public Int64? DetailID
        {
            get => fields.DetailID[this];
            set => fields.DetailID[this] = value;

        }
        [Hidden]
        [DisplayName("HeaderID"), NotNull, NameProperty, ForeignKey("[dbo].[ASTRH]", "HeaderID"), LeftJoin("jHeaderID")]
        public Int64? HeaderID
        {
            get => fields.HeaderID[this];
            set => fields.HeaderID[this] = value;
        }
        [Hidden]
        [DisplayName("Transaction NAME"), Column("TR_TY"), PrimaryKey, NotNull, ForeignKey("[dbo].[ASTRH]", "TR_TY"), LeftJoin("jTRTY"), Updatable(false), Width(130)]
        [LookupEditor(typeof(RestoreTRTYLookup), AutoComplete = true)]
        public Int32? TR_TY
        {
            get => fields.TR_TY[this];
            set => fields.TR_TY[this] = value;
        }
        [Hidden]
        [DisplayName("TRTY_NAME"), Column("TRTY_NAME"), QuickSearch]
        public String TRTY_NAME
        {
            get => fields.TRTY_NAME[this];
            set => fields.TRTY_NAME[this] = value;
        }
        [Hidden]
        [DisplayName("Invoice Number"), Column("TR_NO"), PrimaryKey, NotNull, ForeignKey("[dbo].[ASTRH]", "TR_NO"), LeftJoin("jTRNO"), Updatable(false)]
        public Int32? TR_NO
        {
            get => fields.TR_NO[this];
            set => fields.TR_NO[this] = value;
        }
        [Hidden]
        [DisplayName("LNNO"), Column("LN_NO"), PrimaryKey, NotNull]
        public Int32? LN_NO
        {
            get => fields.LN_NO[this];
            set => fields.LN_NO[this] = value;
        }
        [Hidden]
        [DisplayName("Date"), Column("TR_DT"), DefaultValue("now")]
        public DateTime? TR_DT
        {
            get => fields.TR_DT[this];
            set => fields.TR_DT[this] = value;
        }
        [Hidden]
        [DisplayName("Store Name"), Column("StoreID"), Size(100), PrimaryKey, NotNull, ForeignKey("[dbo].[ASTRH]", "StoreID"), LeftJoin("jStoreID"), Updatable(false)]
        [LookupEditor(typeof(StoreLookup), AutoComplete = true)]
        public String StoreID
        {
            get => fields.StoreID[this];
            set => fields.StoreID[this] = value;
        }
        [Hidden]
        [DisplayName("Store Name"), Column("Store_NAME")]
        public String Store_NAME
        {
            get => fields.Store_NAME[this];
            set => fields.Store_NAME[this] = value;
        }
        [Hidden]
        [DisplayName("TRDS"), Column("TR_DS"), NotNull]
        public Int32? TR_DS
        {
            get => fields.TR_DS[this];
            set => fields.TR_DS[this] = value;
        }
        [Hidden]
        [DisplayName("GRP"), Column("GRP"), DefaultValue(0)]
        public Int32? GRP
        {
            get => fields.GRP[this];
            set => fields.GRP[this] = value;
        }
        [Hidden]
        [DisplayName("Account Name"), Column("ACC_NO"), Size(100)]
        public String ACC_NO
        {
            get => fields.ACC_NO[this];
            set => fields.ACC_NO[this] = value;
        }
        [Hidden]
        [DisplayName("Acc Name"), Column("ACC_NAME"), Size(255)]
        public String ACC_NAME
        {
            get => fields.ACC_NAME[this];
            set => fields.ACC_NAME[this] = value;
        }
        [Hidden]
        [DisplayName("Account Name2"), Column("ACC_NO2"), Size(100)]
        public String ACC_NO2
        {
            get => fields.ACC_NO2[this];
            set => fields.ACC_NO2[this] = value;
        }
        [Hidden]
        [DisplayName("Account Name3"), Column("ACC_NO3"), Size(100)]
        public String ACC_NO3
        {
            get => fields.ACC_NO3[this];
            set => fields.ACC_NO3[this] = value;
        }
        [Hidden]
        [DisplayName("Description Arabic"), Column("TR_DS_AR"), Size(250)]
        public String TR_DS_AR
        {
            get => fields.TR_DS_AR[this];
            set => fields.TR_DS_AR[this] = value;
        }
        [Hidden]
        [DisplayName("Description English"), Column("TR_DS_EN"), Size(250)]
        public String TR_DS_EN
        {
            get => fields.TR_DS_EN[this];
            set => fields.TR_DS_EN[this] = value;
        }

        [DisplayName("ItemBAL"), Column("ItemBAL"), DefaultValue(0), ReadOnly(true), Width(100)]
        public Double? ItemBAL
        {
            get => fields.ItemBAL[this];
            set => fields.ItemBAL[this] = value;
        }

        [DisplayName("Item Code"), Column("Item_CD"), Size(100), NotNull, Width(130)]
        public String Item_CD
        {
            get => fields.Item_CD[this];
            set => fields.Item_CD[this] = value;
        }

        [DisplayName("ItemBarCode"), Size(100), Width(130)]
        public String ItemBarCode
        {
            get => fields.ItemBarCode[this];
            set => fields.ItemBarCode[this] = value;
        }

        [DisplayName("Package Name"), Column("PKID"), Size(10), Required, DefaultValue(1), Width(130)]
        [LookupEditor(typeof(PackageLookup), AutoComplete = true)]
        public String PKID
        {
            get => fields.PKID[this];
            set => fields.PKID[this] = value;
        }
        [Hidden]
        [DisplayName("Pk Name"), Column("PKName"), Size(100)]
        public String PKName
        {
            get => fields.PKName[this];
            set => fields.PKName[this] = value;
        }

        [DisplayName("PKCNT"), Column("PK"), DefaultValue(1), ReadOnly(true)]
        public Double? PK
        {
            get => fields.PK[this];
            set => fields.PK[this] = value;
        }

        [DisplayName("QTY"), Column("QTY"), NotNull, Required, Width(100)]
        public Double? QTY
        {
            get => fields.QTY[this];
            set => fields.QTY[this] = value;
        }

        [DisplayName("Price"), Column("Price"), Required(false), DefaultValue(1), Width(120)]
        public Double? Price
        {
            get => fields.Price[this];
            set => fields.Price[this] = value;
        }
        [Hidden]
        [DisplayName("PKPRC"), Column("PKPRC"), NotNull]
        public Double? PKPRC
        {
            get => fields.PKPRC[this];
            set => fields.PKPRC[this] = value;
        }

        [DisplayName("Value"), NotNull, Required, ReadOnly(true), Width(100)]
        public Double? Value
        {
            get => fields.Value[this];
            set => fields.Value[this] = value;
        }

        [DisplayName("Cost Value"), Column("PKCST"), DefaultValue(0), ReadOnly(true)]
        public Double? PKCST
        {
            get => fields.PKCST[this];
            set => fields.PKCST[this] = value;
        }
        [Hidden]
        [DisplayName("PKCSTVL"), Column("PKCSTVL"), DefaultValue(0)]
        public Double? PKCSTVL
        {
            get => fields.PKCSTVL[this];
            set => fields.PKCSTVL[this] = value;
        }
        [Hidden]
        [DisplayName("FIFO"), Column("FIFO"), DefaultValue(0)]
        public Double? FIFO
        {
            get => fields.FIFO[this];
            set => fields.FIFO[this] = value;
        }
        [Hidden]
        [DisplayName("FIFOVL"), Column("FIFOVL"), DefaultValue(0)]
        public Double? FIFOVL
        {
            get => fields.FIFOVL[this];
            set => fields.FIFOVL[this] = value;
        }
        [Hidden]
        [DisplayName("LIFO"), Column("LIFO"), DefaultValue(0)]
        public Double? LIFO
        {
            get => fields.LIFO[this];
            set => fields.LIFO[this] = value;
        }
        [Hidden]
        [DisplayName("LIFOVL"), Column("LIFOVL"), DefaultValue(0)]
        public Double? LIFOVL
        {
            get => fields.LIFOVL[this];
            set => fields.LIFOVL[this] = value;
        }
        [Hidden]
        [DisplayName("DISC"), Column("DISC"), DefaultValue(0)]
        public Double? DISC
        {
            get => fields.DISC[this];
            set => fields.DISC[this] = value;
        }

        [DisplayName("DISC1"), Column("DISC1"), DefaultValue(0), Width(120)]
        public Double? DISC1
        {
            get => fields.DISC1[this];
            set => fields.DISC1[this] = value;
        }

        [DisplayName("DISC2"), Column("DISC2"), DefaultValue(0), Width(100)]
        public Double? DISC2
        {
            get => fields.DISC2[this];
            set => fields.DISC2[this] = value;
        }

        [DisplayName("DISC3"), Column("DISC3"), DefaultValue(0), Width(100)]
        public Double? DISC3
        {
            get => fields.DISC3[this];
            set => fields.DISC3[this] = value;
        }
        [Hidden]
        [DisplayName("DISC4"), Column("DISC4"), DefaultValue(0), Width(100)]
        public Double? DISC4
        {
            get => fields.DISC4[this];
            set => fields.DISC4[this] = value;
        }

        [Hidden]
        [DisplayName("DISC1R"), Column("DISC1R"), DefaultValue(0)]
        public Double? DISC1R
        {
            get => fields.DISC1R[this];
            set => fields.DISC1R[this] = value;
        }
        [Hidden]
        [DisplayName("DISC2R"), Column("DISC2R"), DefaultValue(0)]
        public Double? DISC2R
        {
            get => fields.DISC2R[this];
            set => fields.DISC2R[this] = value;
        }
        [Hidden]
        [DisplayName("DISC3R"), Column("DISC3R"), DefaultValue(0)]
        public Double? DISC3R
        {
            get => fields.DISC3R[this];
            set => fields.DISC3R[this] = value;
        }
        [DisplayName("NetBeforeTAX"), DefaultValue(0), Width(130)]
        public Double? NetBeforeTAX
        {
            get => fields.NetBeforeTAX[this];
            set => fields.NetBeforeTAX[this] = value;
        }
        [Hidden]
        [DisplayName("STAX_VL"), Column("STAX_VL"), DefaultValue(0)]
        public Double? STAX_VL
        {
            get => fields.STAX_VL[this];
            set => fields.STAX_VL[this] = value;
        }

        [DisplayName("TAX1"), Column("TAX1"), DefaultValue(0), Width(100)]
        public Double? TAX1
        {
            get => fields.TAX1[this];
            set => fields.TAX1[this] = value;
        }

        [DisplayName("TAX2"), Column("TAX2"), DefaultValue(0), Width(100)]
        public Double? TAX2
        {
            get => fields.TAX2[this];
            set => fields.TAX2[this] = value;
        }

        [DisplayName("TAX3"), Column("TAX3"), DefaultValue(0), Width(100)]
        public Double? TAX3
        {
            get => fields.TAX3[this];
            set => fields.TAX3[this] = value;
        }
        [DisplayName("TAXVAL"), Column("TAXVAL"), DefaultValue(0), Width(100)]
        public Double? TAXVAL
        {
            get => fields.TAXVAL[this];
            set => fields.TAXVAL[this] = value;
        }

        [Hidden]
        [DisplayName("TAX1R"), Column("TAX1R"), DefaultValue(0)]
        public Double? TAX1R
        {
            get => fields.TAX1R[this];
            set => fields.TAX1R[this] = value;
        }
        [Hidden]
        [DisplayName("TAX2R"), Column("TAX2R"), DefaultValue(0)]
        public Double? TAX2R
        {
            get => fields.TAX2R[this];
            set => fields.TAX2R[this] = value;
        }
        [Hidden]
        [DisplayName("TAX3R"), Column("TAX3R"), DefaultValue(0)]
        public Double? TAX3R
        {
            get => fields.TAX3R[this];
            set => fields.TAX3R[this] = value;
        }
        [Hidden]
        [DisplayName("EXPENSEVL"), Column("EXPENSEVL"), DefaultValue(0)]
        public Double? EXPENSEVL
        {
            get => fields.EXPENSEVL[this];
            set => fields.EXPENSEVL[this] = value;
        }
        [Hidden]
        [DisplayName("EXPENSE_CNT"), Column("EXPENSE_CNT"), DefaultValue(0)]
        public Double? EXPENSE_CNT
        {
            get => fields.EXPENSE_CNT[this];
            set => fields.EXPENSE_CNT[this] = value;
        }

        [DisplayName("NetAfterTAX"), DefaultValue(0), Width(130)]
        public Double? NetAfterTAX
        {
            get => fields.NetAfterTAX[this];
            set => fields.NetAfterTAX[this] = value;
        }
        [DisplayName("NET"), DefaultValue(0), ReadOnly(true), Width(100)]
        public Double? NET
        {
            get => fields.NET[this];
            set => fields.NET[this] = value;
        }
        [Hidden]
        [DisplayName("Currency Name"), Column("CurrencyID"), Size(100)]
        public String CurrencyID
        {
            get => fields.CurrencyID[this];
            set => fields.CurrencyID[this] = value;
        }
        [Hidden]
        [DisplayName("Currency Name"), Column("Currency_Name"), Size(300)]
        public String Currency_Name
        {
            get => fields.Currency_Name[this];
            set => fields.Currency_Name[this] = value;
        }
        [Hidden]
        [DisplayName("RATE"), Column("RATE"), DefaultValue(1)]
        public Double? RATE
        {
            get => fields.RATE[this];
            set => fields.RATE[this] = value;
        }
        [Hidden]
        [DisplayName("Currency Value"), Column("CUR_VL"), DefaultValue(0)]
        public Double? CUR_VL
        {
            get => fields.CUR_VL[this];
            set => fields.CUR_VL[this] = value;
        }

        [DisplayName("Remark")]
        public Double? DetailRemark
        {
            get => fields.DetailRemark[this];
            set => fields.DetailRemark[this] = value;
        }
        [Hidden]
        [DisplayName("BonusID"), Column("BonusID"), DefaultValue(0)]
        public Int32? BonusID
        {
            get => fields.BonusID[this];
            set => fields.BonusID[this] = value;
        }
        [Hidden]
        [DisplayName("Return Qty"), DefaultValue(0)]
        public Double? ReturnQty
        {
            get => fields.ReturnQty[this];
            set => fields.ReturnQty[this] = value;
        }
        [Hidden]
        [DisplayName("Restore Qty"), DefaultValue(0)]
        public Double? RestoreQty
        {
            get => fields.RestoreQty[this];
            set => fields.RestoreQty[this] = value;
        }
        [Hidden]
        [DisplayName("PTR_NO"), Column("PTR_NO"), DefaultValue(0)]
        public Int32? PTR_NO
        {
            get => fields.PTR_NO[this];
            set => fields.PTR_NO[this] = value;
        }
        [Hidden]
        [DisplayName("PTR_TY"), Column("PTR_TY"), DefaultValue(0)]
        public Int32? PTR_TY
        {
            get => fields.PTR_TY[this];
            set => fields.PTR_TY[this] = value;
        }
        [Hidden]
        [DisplayName("PStoreID"), Column("PStoreID"), Size(100)]
        public String PStoreID
        {
            get => fields.PStoreID[this];
            set => fields.PStoreID[this] = value;
        }
        [Hidden]
        [DisplayName("Customer Price"), DefaultValue(0)]
        public Double? CustomerPrice
        {
            get => fields.CustomerPrice[this];
            set => fields.CustomerPrice[this] = value;
        }
        [Hidden]
        [DisplayName("Price Name"), Column("PriceID"), Size(10)]
        public String PriceID
        {
            get => fields.PriceID[this];
            set => fields.PriceID[this] = value;
        }
        [Hidden]
        [DisplayName("Price Level Id"), Size(50)]
        public String PriceLevelId
        {
            get => fields.PriceLevelId[this];
            set => fields.PriceLevelId[this] = value;
        }
        [Hidden]
        [DisplayName("Cash Name"), Column("CashBoxID"), Size(100)]
        public String CashBoxID
        {
            get => fields.CashBoxID[this];
            set => fields.CashBoxID[this] = value;
        }
        [Hidden]
        [DisplayName("Cash Name"), Column("Cash_NAME"), Size(300)]
        public String Cash_NAME
        {
            get => fields.Cash_NAME[this];
            set => fields.Cash_NAME[this] = value;
        }
        [Hidden]
        [DisplayName("Rep Name"), Column("REP_CD"), Size(100)]
        public String REP_CD
        {
            get => fields.REP_CD[this];
            set => fields.REP_CD[this] = value;
        }
        [Hidden]
        [DisplayName("Rep Name"), Column("REP_NAME"), Size(300)]
        public String REP_NAME
        {
            get => fields.REP_NAME[this];
            set => fields.REP_NAME[this] = value;
        }
        [Hidden]
        [DisplayName("Rep Name2"), Column("REP_CD2"), Size(100)]
        public String REP_CD2
        {
            get => fields.REP_CD2[this];
            set => fields.REP_CD2[this] = value;
        }
        [Hidden]
        [DisplayName("Rep Name2"), Column("REP_NAME2"), Size(300)]
        public String REP_NAME2
        {
            get => fields.REP_NAME2[this];
            set => fields.REP_NAME2[this] = value;
        }
        [Hidden]
        [DisplayName("Cost Name"), Column("CST_CD"), Size(100)]
        public String CST_CD
        {
            get => fields.CST_CD[this];
            set => fields.CST_CD[this] = value;
        }
        [Hidden]
        [DisplayName("Cst Name"), Column("CST_NAME"), Size(300)]
        public String CST_NAME
        {
            get => fields.CST_NAME[this];
            set => fields.CST_NAME[this] = value;
        }
        [Hidden]
        [DisplayName("Sum Name"), Column("SUM_CD"), Size(100)]
        public String SUM_CD
        {
            get => fields.SUM_CD[this];
            set => fields.SUM_CD[this] = value;
        }
        [Hidden]
        [DisplayName("Sum Name"), Column("SUM_NAME"), Size(300)]
        public String SUM_NAME
        {
            get => fields.SUM_NAME[this];
            set => fields.SUM_NAME[this] = value;
        }
        [Hidden]
        [DisplayName("SSum Name"), Column("SSUM_CD"), Size(100)]
        public String SSUM_CD
        {
            get => fields.SSUM_CD[this];
            set => fields.SSUM_CD[this] = value;
        }
        [Hidden]
        [DisplayName("Ssum Name"), Column("SSUM_NAME"), Size(300)]
        public String SSUM_NAME
        {
            get => fields.SSUM_NAME[this];
            set => fields.SSUM_NAME[this] = value;
        }

        [DisplayName("Item Name"), Column("ITM_NM_AR"), Size(300)]
        public String ITM_NM_AR
        {
            get => fields.ITM_NM_AR[this];
            set => fields.ITM_NM_AR[this] = value;
        }
        [Hidden]
        [DisplayName("Accont Name2"), Column("ACC_NAME2"), Size(300)]
        public String ACC_NAME2
        {
            get => fields.ACC_NAME2[this];
            set => fields.ACC_NAME2[this] = value;
        }
        [Hidden]
        [DisplayName("Acc Name3"), Column("ACC_NAME3"), Size(300)]
        public String ACC_NAME3
        {
            get => fields.ACC_NAME3[this];
            set => fields.ACC_NAME3[this] = value;
        }
        [Hidden]
        [DisplayName("Recipient"), Size(200)]
        public String Recipient
        {
            get => fields.Recipient[this];
            set => fields.Recipient[this] = value;
        }
        [Hidden]
        [DisplayName("Recipient Date"), Size(200)]
        public String RecipientDate
        {
            get => fields.RecipientDate[this];
            set => fields.RecipientDate[this] = value;
        }

        [Hidden]
        [DisplayName("Disc Cur Val"), Column("disc_cur_val"), DefaultValue(0)]
        public Double? disc_cur_val
        {
            get => fields.disc_cur_val[this];
            set => fields.disc_cur_val[this] = value;
        }
        [Hidden]
        [DisplayName("Tax Cur Val"), Column("tax_cur_val"), DefaultValue(0)]
        public Double? tax_cur_val
        {
            get => fields.tax_cur_val[this];
            set => fields.tax_cur_val[this] = value;
        }
        [Hidden]
        [DisplayName("GLPOST"), Column("GLPOST"), DefaultValue(0)]
        public Boolean? GLPOST
        {
            get => fields.GLPOST[this];
            set => fields.GLPOST[this] = value;
        }
        [Hidden]
        [DisplayName("Status"), DefaultValue(1)]
        public Status? Status
        {
            get => (Status?)fields.Status[this];
            set => fields.Status[this] = (Int32?)value;
        }
        [Hidden]
        [DisplayName("EnteredBy")]
        public String EnteredBy
        {
            get => fields.EnteredBy[this];
            set => fields.EnteredBy[this] = value;
        }
        [Hidden]
        [DisplayName("EntryDate"), DefaultValue("now")]
        public DateTime? EntryDate
        {
            get => fields.EntryDate[this];
            set => fields.EntryDate[this] = value;
        }
        [Hidden]
        [DisplayName("UpdatedBy")]
        public String UpdatedBy
        {
            get => fields.UpdatedBy[this];
            set => fields.UpdatedBy[this] = value;
        }
        [Hidden]
        [DisplayName("UpdateDate"), DefaultValue("now")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }
        public RestoreASTRDRow()
            : base()
        {
        }

        public RestoreASTRDRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public Int64Field DetailID;
            public Int64Field HeaderID;
            public Int32Field TR_TY;
            public StringField TRTY_NAME;
            public Int32Field TR_NO;
            public Int32Field LN_NO;
            public DateTimeField TR_DT;
            public StringField StoreID;
            public StringField Store_NAME;
            public Int32Field TR_DS;
            public Int32Field GRP;
            public StringField ACC_NO;
            public StringField ACC_NAME;
            public StringField ACC_NO2;
            public StringField ACC_NO3;
            public StringField TR_DS_AR;
            public StringField TR_DS_EN;
            public DoubleField ItemBAL;
            public StringField Item_CD;
            public StringField ItemBarCode;
            public StringField PKID;
            public StringField PKName;
            public DoubleField PK;
            public DoubleField QTY;
            public DoubleField PKPRC;
            public DoubleField Price;
            public DoubleField Value;
            public DoubleField PKCST;
            public DoubleField PKCSTVL;
            public DoubleField FIFO;
            public DoubleField FIFOVL;
            public DoubleField LIFO;
            public DoubleField LIFOVL;
            public DoubleField DISC;
            public DoubleField DISC1;
            public DoubleField DISC2;
            public DoubleField DISC3;
            public DoubleField DISC4;
            public DoubleField DISC1R;
            public DoubleField DISC2R;
            public DoubleField DISC3R;
            public DoubleField STAX_VL;
            public DoubleField TAX1;
            public DoubleField TAX2;
            public DoubleField TAX3;
            public DoubleField TAXVAL;
            public DoubleField TAX1R;
            public DoubleField TAX2R;
            public DoubleField TAX3R;
            public DoubleField EXPENSEVL;
            public DoubleField EXPENSE_CNT;
            public StringField CurrencyID;
            public StringField Currency_Name;
            public DoubleField RATE;
            public DoubleField CUR_VL;
            public DoubleField DetailRemark;
            public Int32Field BonusID;
            public DoubleField ReturnQty;
            public DoubleField RestoreQty;
            public Int32Field PTR_NO;
            public Int32Field PTR_TY;
            public StringField PStoreID;
            public DoubleField CustomerPrice;
            public StringField PriceID;
            public StringField PriceLevelId;
            public StringField CashBoxID;
            public StringField Cash_NAME;
            public StringField REP_CD;
            public StringField REP_NAME;
            public StringField REP_CD2;
            public StringField REP_NAME2;
            public StringField CST_CD;
            public StringField CST_NAME;
            public StringField SUM_CD;
            public StringField SUM_NAME;
            public StringField SSUM_CD;
            public StringField SSUM_NAME;
            public StringField ITM_NM_AR;
            public StringField ACC_NAME2;
            public StringField ACC_NAME3;
            public StringField Recipient;
            public StringField RecipientDate;
            public DoubleField disc_cur_val;
            public DoubleField tax_cur_val;
            public BooleanField GLPOST;
            public Int32Field Status;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
            public DoubleField NetBeforeTAX;
            public DoubleField NetAfterTAX;
            public DoubleField NET;

        }
    }
}
