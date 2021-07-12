using ALgorithmPro.Lookup;
using ALgorithmPro.Web.Modules.Common;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ASTRH]")]
    [DisplayName("Restore Purchase"), InstanceName("Restore Purchase")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RestoreASTRHRow : Row<RestoreASTRHRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("HeaderID"), Column("HeaderID"), Identity, IdProperty]
        public Int64? HeaderID
        {
            get => fields.HeaderID[this];
            set => fields.HeaderID[this] = value;
        }

        [DisplayName("TRTY"), Column("TR_TY"), PrimaryKey, NotNull]
        [LookupEditor(typeof(RestoreTRTYLookup), AutoComplete = true, InplaceAdd = true)]
        public Int32? TR_TY
        {
            get => fields.TR_TY[this];
            set => fields.TR_TY[this] = value;
        }

        [DisplayName("Invoice"), Column("TR_NO"), PrimaryKey, NotNull]
        public Int32? TR_NO
        {
            get => fields.TR_NO[this];
            set => fields.TR_NO[this] = value;
        }

        [DisplayName("Date"), Column("TR_DT"), DefaultValue("now")]
        public DateTime? TR_DT
        {
            get => fields.TR_DT[this];
            set => fields.TR_DT[this] = value;
        }
        [Hidden]
        [DisplayName("TRDS"), Column("TR_DS"), NotNull]
        public Int32? TR_DS
        {
            get => fields.TR_DS[this];
            set => fields.TR_DS[this] = value;
        }

        [DisplayName("Store Name"), Size(100), PrimaryKey, ForeignKey("[dbo].[Stores]", "StoreID"), LeftJoin("jStore"), QuickSearch, NameProperty, TextualField("StoreStoreNameAr")]
        [LookupEditor(typeof(StoreLookup), AutoComplete = true, InplaceAdd = true)]
        public String StoreID
        {
            get => fields.StoreID[this];
            set => fields.StoreID[this] = value;
        }

        [DisplayName("TRTY_NAME"), Column("TRTY_NAME"), Size(255)]
        public String TRTY_NAME
        {
            get => fields.TRTY_NAME[this];
            set => fields.TRTY_NAME[this] = value;
        }

        [DisplayName("Store Name"), Column("Store_NAME"), Size(300)]
        public String Store_NAME
        {
            get => fields.Store_NAME[this];
            set => fields.Store_NAME[this] = value;
        }

        [DisplayName("DOC Number")]
        public String DocTransNo
        {
            get => fields.DocTransNo[this];
            set => fields.DocTransNo[this] = value;
        }

        [DisplayName("Order Number")]
        public String OrderNo
        {
            get => fields.OrderNo[this];
            set => fields.OrderNo[this] = value;
        }

        [DisplayName("Account"), Column("ACC_NO"), Size(100), NotNull]
        public String ACC_NO
        {
            get => fields.ACC_NO[this];
            set => fields.ACC_NO[this] = value;
        }

        [DisplayName("Account NAME"), Column("ACC_NAME"), Size(255), ReadOnly(true)]
        public String ACC_NAME
        {
            get => fields.ACC_NAME[this];
            set => fields.ACC_NAME[this] = value;
        }

        [DisplayName("Cash Number"), Column("CashBoxID"), Size(100)]
        [LookupEditor(typeof(CashLookup), AutoComplete = true, InplaceAdd = true)]
        public String CashBoxID
        {
            get => fields.CashBoxID[this];
            set => fields.CashBoxID[this] = value;
        }

        [DisplayName("Cash NAME"), Column("Cash_NAME"), Size(300)]
        public String Cash_NAME
        {
            get => fields.Cash_NAME[this];
            set => fields.Cash_NAME[this] = value;
        }

        [DisplayName("Account Name2"), Column("ACC_NO2"), Size(100)]
        public String ACC_NO2
        {
            get => fields.ACC_NO2[this];
            set => fields.ACC_NO2[this] = value;
        }

        [DisplayName("ACC_NAME2"), Column("ACC_NAME2"), Size(300)]
        public String ACC_NAME2
        {
            get => fields.ACC_NAME2[this];
            set => fields.ACC_NAME2[this] = value;
        }

        [DisplayName("Account Name3"), Column("ACC_NO3"), Size(100)]
        public String ACC_NO3
        {
            get => fields.ACC_NO3[this];
            set => fields.ACC_NO3[this] = value;
        }

        [DisplayName("ACC_NAME3"), Column("ACC_NAME3"), Size(300)]
        public String ACC_NAME3
        {
            get => fields.ACC_NAME3[this];
            set => fields.ACC_NAME3[this] = value;
        }

        [DisplayName("Reps Number"), Column("REP_CD"), Size(100)]
        [LookupEditor(typeof(RepsLookup), AutoComplete = true, InplaceAdd = true)]
        public String REP_CD
        {
            get => fields.REP_CD[this];
            set => fields.REP_CD[this] = value;
        }

        [DisplayName("Reps Name"), Column("REP_NAME"), Size(300)]
        public String REP_NAME
        {
            get => fields.REP_NAME[this];
            set => fields.REP_NAME[this] = value;
        }

        [DisplayName("Supervisor"), Column("REP_CD2"), Size(100)]
        [LookupEditor(typeof(RepsLookup), AutoComplete = true, InplaceAdd = true)]
        public String REP_CD2
        {
            get => fields.REP_CD2[this];
            set => fields.REP_CD2[this] = value;
        }

        [DisplayName("REP_NAME2"), Column("REP_NAME2"), Size(300)]
        public String REP_NAME2
        {
            get => fields.REP_NAME2[this];
            set => fields.REP_NAME2[this] = value;
        }

        [DisplayName("Cost Name"), Column("CST_CD"), Size(100)]
        [LookupEditor(typeof(CSTLookup), AutoComplete = true, InplaceAdd = true)]
        public String CST_CD
        {
            get => fields.CST_CD[this];
            set => fields.CST_CD[this] = value;
        }

        [DisplayName("CST_NAME"), Column("CST_NAME"), Size(300)]
        public String CST_NAME
        {
            get => fields.CST_NAME[this];
            set => fields.CST_NAME[this] = value;
        }

        [DisplayName("Sum Name"), Column("SUM_CD"), Size(100)]
        [LookupEditor(typeof(SUMSLookup), AutoComplete = true, InplaceAdd = true)]
        public String SUM_CD
        {
            get => fields.SUM_CD[this];
            set => fields.SUM_CD[this] = value;
        }

        [DisplayName("Sum Name"), Column("SUM_NAME"), Size(300)]
        public String SUM_NAME
        {
            get => fields.SUM_NAME[this];
            set => fields.SUM_NAME[this] = value;
        }

        [DisplayName("SSUM Name"), Column("SSUM_CD"), Size(100)]
        [LookupEditor(typeof(SSUMSLookup), AutoComplete = true, InplaceAdd = true)]
        public String SSUM_CD
        {
            get => fields.SSUM_CD[this];
            set => fields.SSUM_CD[this] = value;
        }

        [DisplayName("SSUM_NAME"), Column("SSUM_NAME"), Size(300)]
        public String SSUM_NAME
        {
            get => fields.SSUM_NAME[this];
            set => fields.SSUM_NAME[this] = value;
        }

        [DisplayName("Supervisor Name"), Size(100)]
        public String SupervisorId
        {
            get => fields.SupervisorId[this];
            set => fields.SupervisorId[this] = value;
        }

        [DisplayName("Supervisor_NAME"), Column("Supervisor_NAME"), Size(300)]
        public String Supervisor_NAME
        {
            get => fields.Supervisor_NAME[this];
            set => fields.Supervisor_NAME[this] = value;
        }

        [DisplayName("PStoreID"), Column("PStoreID"), Size(100), DefaultValue(0)]
        public String PStoreID
        {
            get => fields.PStoreID[this];
            set => fields.PStoreID[this] = value;
        }

        [DisplayName("PTR_NO"), Column("PTR_NO"), DefaultValue(0)]
        public Int32? PTR_NO
        {
            get => fields.PTR_NO[this];
            set => fields.PTR_NO[this] = value;
        }

        [DisplayName("PTR_TY"), Column("PTR_TY"), DefaultValue(0)]
        public Int32? PTR_TY
        {
            get => fields.PTR_TY[this];
            set => fields.PTR_TY[this] = value;
        }

        [DisplayName("Remark"), Column("HDSCR_AR"), Size(255)]
        public String HDSCR_AR
        {
            get => fields.HDSCR_AR[this];
            set => fields.HDSCR_AR[this] = value;
        }

        [DisplayName("DSCR English"), Column("HDSCR_EN"), Size(250)]
        public String HDSCR_EN
        {
            get => fields.HDSCR_EN[this];
            set => fields.HDSCR_EN[this] = value;
        }

        [DisplayName("Price"), Column("PriceID"), Size(100), DefaultValue(0)]
        [LookupEditor(typeof(PricePurchLookup), AutoComplete = true, InplaceAdd = true)]
        public String PriceID
        {
            get => fields.PriceID[this];
            set => fields.PriceID[this] = value;
        }

        [DisplayName("Priceedit"), DefaultValue(0)]
        public Boolean? Priceedit
        {
            get => fields.Priceedit[this];
            set => fields.Priceedit[this] = value;
        }

        [DisplayName("Reference Number"), DefaultValue(0)]
        public Int32? ReferenceNo
        {
            get => fields.ReferenceNo[this];
            set => fields.ReferenceNo[this] = value;
        }

        [DisplayName("HDISC1"), Column("HDISC1"), DefaultValue(0)]
        public Double? HDISC1
        {
            get => fields.HDISC1[this];
            set => fields.HDISC1[this] = value;
        }

        [DisplayName("HDISC2"), Column("HDISC2"), DefaultValue(0)]
        public Double? HDISC2
        {
            get => fields.HDISC2[this];
            set => fields.HDISC2[this] = value;
        }

        [DisplayName("HDISC3"), Column("HDISC3"), DefaultValue(0)]
        public Double? HDISC3
        {
            get => fields.HDISC3[this];
            set => fields.HDISC3[this] = value;
        }

        [DisplayName("HDISC4"), Column("HDISC4"), DefaultValue(0)]
        public Double? HDISC4
        {
            get => fields.HDISC4[this];
            set => fields.HDISC4[this] = value;
        }

        [DisplayName("HDISC1R"), Column("HDISC1R"), DefaultValue(0)]
        public Double? HDISC1R
        {
            get => fields.HDISC1R[this];
            set => fields.HDISC1R[this] = value;
        }

        [DisplayName("HDISC2R"), Column("HDISC2R"), DefaultValue(0)]
        public Double? HDISC2R
        {
            get => fields.HDISC2R[this];
            set => fields.HDISC2R[this] = value;
        }

        [DisplayName("HDISC3R"), Column("HDISC3R"), DefaultValue(0)]
        public Double? HDISC3R
        {
            get => fields.HDISC3R[this];
            set => fields.HDISC3R[this] = value;
        }

        [DisplayName("HTAX1"), Column("HTAX1"), DefaultValue(0)]
        public Double? HTAX1
        {
            get => fields.HTAX1[this];
            set => fields.HTAX1[this] = value;
        }

        [DisplayName("HTAX2"), Column("HTAX2"), DefaultValue(0)]
        public Double? HTAX2
        {
            get => fields.HTAX2[this];
            set => fields.HTAX2[this] = value;
        }

        [DisplayName("HTAX3"), Column("HTAX3"), DefaultValue(0)]
        public Double? HTAX3
        {
            get => fields.HTAX3[this];
            set => fields.HTAX3[this] = value;
        }

        [DisplayName("HTAX4"), Column("HTAX4"), DefaultValue(0)]
        public Double? HTAX4
        {
            get => fields.HTAX4[this];
            set => fields.HTAX4[this] = value;
        }

        [DisplayName("HTAX1R"), Column("HTAX1R"), DefaultValue(0)]
        public Double? HTAX1R
        {
            get => fields.HTAX1R[this];
            set => fields.HTAX1R[this] = value;
        }

        [DisplayName("HTAX2R"), Column("HTAX2R"), DefaultValue(0)]
        public Double? HTAX2R
        {
            get => fields.HTAX2R[this];
            set => fields.HTAX2R[this] = value;
        }

        [DisplayName("HTAX3R"), Column("HTAX3R"), DefaultValue(0)]
        public Double? HTAX3R
        {
            get => fields.HTAX3R[this];
            set => fields.HTAX3R[this] = value;
        }


        [DisplayName("Addtions"), DefaultValue(0)]
        public Double? HAddtions
        {
            get => fields.HAddtions[this];
            set => fields.HAddtions[this] = value;
        }

        [DisplayName("HdrAddtionsR"), DefaultValue(0)]
        public Double? HdrAddtionsR
        {
            get => fields.HdrAddtionsR[this];
            set => fields.HdrAddtionsR[this] = value;
        }

        [DisplayName("Period Credit")]
        public String PeriodCredit
        {
            get => fields.PeriodCredit[this];
            set => fields.PeriodCredit[this] = value;
        }

        [DisplayName("Remark")]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Notes
        {
            get => fields.Notes[this];
            set => fields.Notes[this] = value;
        }

        [DisplayName("Balance"), DefaultValue(0), ReadOnly(true)]
        public Double? Balance
        {
            get => fields.Balance[this];
            set => fields.Balance[this] = value;
        }

        [DisplayName("Periodterm"), DefaultValue(0)]
        public Int32? Periodterm
        {
            get => fields.Periodterm[this];
            set => fields.Periodterm[this] = value;
        }

        [DisplayName("Invoice Status"), DefaultValue(0)]
        public Int32? InvStatus
        {
            get => fields.InvStatus[this];
            set => fields.InvStatus[this] = value;
        }

        [DisplayName("Currency"), Size(100), DefaultValue(1)]
        [LookupEditor(typeof(CurrencyLookup), AutoComplete = true)]
        public String CurrencyID
        {
            get => fields.CurrencyID[this];
            set => fields.CurrencyID[this] = value;
        }

        [DisplayName("Currency_NAME"), Column("Currency_NAME"), Size(300)]
        public String Currency_NAME
        {
            get => fields.Currency_NAME[this];
            set => fields.Currency_NAME[this] = value;
        }

        [DisplayName("RATE"), Column("RATE"), DefaultValue(1)]
        public Double? RATE
        {
            get => fields.RATE[this];
            set => fields.RATE[this] = value;
        }

        [DisplayName("Currency Value"), Column("CUR_VL"), DefaultValue(0)]
        public Double? CUR_VL
        {
            get => fields.CUR_VL[this];
            set => fields.CUR_VL[this] = value;
        }

        [DisplayName("PRT_CNT"), Column("PRT_CNT"), DefaultValue(0)]
        public Int32? PRT_CNT
        {
            get => fields.PRT_CNT[this];
            set => fields.PRT_CNT[this] = value;
        }

        [DisplayName("Status"), DefaultValue(1)]
        public Status? Status
        {
            get => (Status?)fields.Status[this];
            set => fields.Status[this] = (Int32?)value;
        }

        [DisplayName("EnteredBy")]
        public String EnteredBy
        {
            get => fields.EnteredBy[this];
            set => fields.EnteredBy[this] = value;
        }

        [DisplayName("EntryDate"), DefaultValue("now")]
        public DateTime? EntryDate
        {
            get => fields.EntryDate[this];
            set => fields.EntryDate[this] = value;
        }

        [DisplayName("UpdatedBy")]
        public String UpdatedBy
        {
            get => fields.UpdatedBy[this];
            set => fields.UpdatedBy[this] = value;
        }

        [DisplayName("UpdateDate"), DefaultValue("now")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        [DisplayName("Add Detail"), MasterDetailRelation(foreignKey: "HeaderID"), NotMapped, NotNull]
        public List<RestoreASTRDRow> DetailList
        {
            get => fields.DetailList[this];
            set => fields.DetailList[this] = value;
        }


        [DisplayName("Total"), DefaultValue(0), ReadOnly(true)]
        public Double? Total
        {
            get => fields.Total[this];
            set => fields.Total[this] = value;
        }
        [DisplayName("Paid"), DefaultValue(0), ReadOnly(true)]
        public Double? Paid
        {
            get => fields.Paid[this];
            set => fields.Paid[this] = value;
        }

        [DisplayName("HDISC"), Column("HDISC"), DefaultValue(0)]
        public Double? HDISC
        {
            get => fields.HDISC[this];
            set => fields.HDISC[this] = value;
        }
        [DisplayName("NetBeforeTAX"), DefaultValue(0)]
        public Double? NetBeforeTAX
        {
            get => fields.NetBeforeTAX[this];
            set => fields.NetBeforeTAX[this] = value;
        }
        [DisplayName("HTAX"), Column("HTAX"), DefaultValue(0)]
        public Double? HTAX
        {
            get => fields.HTAX[this];
            set => fields.HTAX[this] = value;
        }

        [DisplayName("NetAfterTAX"), DefaultValue(0)]
        public Double? NetAfterTAX
        {
            get => fields.NetAfterTAX[this];
            set => fields.NetAfterTAX[this] = value;
        }
        [DisplayName("Expense"), Column("EXPENSEVL"), DefaultValue(0)]
        public Double? EXPENSEVL
        {
            get => fields.EXPENSEVL[this];
            set => fields.EXPENSEVL[this] = value;
        }

        [DisplayName("NetTotal"), DefaultValue(0), ReadOnly(true)]
        public Double? NetTotal
        {
            get => fields.NetTotal[this];
            set => fields.NetTotal[this] = value;
        }
        public RestoreASTRHRow()
            : base()
        {
        }

        public RestoreASTRHRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field HeaderID;
            public Int32Field TR_TY;
            public Int32Field TR_NO;
            public DateTimeField TR_DT;
            public Int32Field TR_DS;
            public StringField StoreID;
            public StringField TRTY_NAME;
            public StringField Store_NAME;
            public StringField DocTransNo;
            public StringField OrderNo;
            public StringField ACC_NO;
            public StringField ACC_NAME;
            public StringField CashBoxID;
            public StringField Cash_NAME;
            public StringField ACC_NO2;
            public StringField ACC_NAME2;
            public StringField ACC_NO3;
            public StringField ACC_NAME3;
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
            public StringField SupervisorId;
            public StringField Supervisor_NAME;
            public StringField PStoreID;
            public Int32Field PTR_NO;
            public Int32Field PTR_TY;
            public StringField HDSCR_AR;
            public StringField HDSCR_EN;
            public StringField PriceID;
            public BooleanField Priceedit;
            public Int32Field ReferenceNo;
            public DoubleField HDISC;
            public DoubleField HDISC1;
            public DoubleField HDISC2;
            public DoubleField HDISC3;
            public DoubleField HDISC4;
            public DoubleField HDISC1R;
            public DoubleField HDISC2R;
            public DoubleField HDISC3R;
            public DoubleField HTAX;
            public DoubleField HTAX1;
            public DoubleField HTAX2;
            public DoubleField HTAX3;
            public DoubleField HTAX4;
            public DoubleField HTAX1R;
            public DoubleField HTAX2R;
            public DoubleField HTAX3R;
            public DoubleField HAddtions;
            public DoubleField HdrAddtionsR;
            public StringField PeriodCredit;
            public DoubleField EXPENSEVL;
            public StringField Notes;
            public DoubleField Paid;
            public DoubleField Total;
            public DoubleField NetTotal;
            public DoubleField Balance;
            public Int32Field Periodterm;
            public Int32Field InvStatus;
            public StringField CurrencyID;
            public StringField Currency_NAME;
            public DoubleField RATE;
            public DoubleField CUR_VL;
            public Int32Field PRT_CNT;
            public Int32Field Status;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
            public DoubleField NetBeforeTAX;
            public DoubleField NetAfterTAX;

            public RowListField<RestoreASTRDRow> DetailList;


        }
    }
}
