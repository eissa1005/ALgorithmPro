using System;
using Serenity.Data;
using Serenity.ComponentModel;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace ALgorithmPro.Model.Entities
{
    [ConnectionKey("Default"), Module("Model"), TableName("[dbo].[ASTRHVIEW]")]
    [DisplayName("ASTRHVIEW"), InstanceName("ASTRHVIEW")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ASTRHVIEWRow : Row<ASTRHVIEWRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("StoreID"), Size(100), NameProperty]
        public String StoreID
        {
            get => fields.StoreID[this];
            set => fields.StoreID[this] = value;
        }

        [DisplayName("Store_NAME"), Column("Store_NAME"), Size(300)]
        public String Store_NAME
        {
            get => fields.Store_NAME[this];
            set => fields.Store_NAME[this] = value;
        }

        [Hidden]
        [DisplayName("HeaderID"), Column("HeaderID"), IdProperty]
        public Int64? HeaderID
        {
            get => fields.HeaderID[this];
            set => fields.HeaderID[this] = value;
        }

        [DisplayName("TR_NO"), Column("TR_NO"), QuickSearch, PrimaryKey]
        public Int32? TR_NO
        {
            get => fields.TR_NO[this];
            set => fields.TR_NO[this] = value;
        }

        [DisplayName("TR_TY"), Column("TR_TY"), QuickSearch, PrimaryKey]
        public Int32? TR_TY
        {
            get => fields.TR_TY[this];
            set => fields.TR_TY[this] = value;
        }

        [DisplayName("TRTY_NAME"), Column("TRTY_NAME"), QuickSearch, Size(255)]
        public String TRTY_NAME
        {
            get => fields.TRTY_NAME[this];
            set => fields.TRTY_NAME[this] = value;
        }

        [DisplayName("TR_DT"), Column("TR_DT"), QuickSearch]
        public DateTime? TR_DT
        {
            get => fields.TR_DT[this];
            set => fields.TR_DT[this] = value;
        }

        [DisplayName("Reference Number"), DefaultValue(0)]
        public Int32? ReferenceNo
        {
            get => fields.ReferenceNo[this];
            set => fields.ReferenceNo[this] = value;
        }

        [DisplayName("DocTransNo")]
        public String DocTransNo
        {
            get => fields.DocTransNo[this];
            set => fields.DocTransNo[this] = value;
        }

        [DisplayName("ACC_NO"), Column("ACC_NO"), QuickSearch]
        public String ACC_NO
        {
            get => fields.ACC_NO[this];
            set => fields.ACC_NO[this] = value;
        }

        [DisplayName("ACC_NAME"), Column("ACC_NAME"), Size(255)]
        public String ACC_NAME
        {
            get => fields.ACC_NAME[this];
            set => fields.ACC_NAME[this] = value;
        }

        [DisplayName("ACC_NO2"), Column("ACC_NO2"), Size(100)]
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

        [DisplayName("CashBoxID"), Column("CashBoxID"), Size(100)]
        public String CashBoxID
        {
            get => fields.CashBoxID[this];
            set => fields.CashBoxID[this] = value;
        }

        [DisplayName("Cash_NAME"), Column("Cash_NAME"), Size(300)]
        public String Cash_NAME
        {
            get => fields.Cash_NAME[this];
            set => fields.Cash_NAME[this] = value;
        }
        
        [DisplayName("REP_CD"), Column("REP_CD"), Size(100)]
        public String REP_CD
        {
            get => fields.REP_CD[this];
            set => fields.REP_CD[this] = value;
        }

        [DisplayName("REP_NAME"), Column("REP_NAME"), Size(300)]
        public String REP_NAME
        {
            get => fields.REP_NAME[this];
            set => fields.REP_NAME[this] = value;
        }

        [DisplayName("REP_CD2"), Column("REP_CD2"), Size(100)]
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

        [DisplayName("CST_CD"), Column("CST_CD"), Size(100)]
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

        [DisplayName("SUM_CD"), Column("SUM_CD"), Size(100)]
        public String SUM_CD
        {
            get => fields.SUM_CD[this];
            set => fields.SUM_CD[this] = value;
        }

        [DisplayName("SUM_NAME"), Column("SUM_NAME"), Size(300)]
        public String SUM_NAME
        {
            get => fields.SUM_NAME[this];
            set => fields.SUM_NAME[this] = value;
        }

        [DisplayName("SSUM_CD"), Column("SSUM_CD"), Size(100)]
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

        [Hidden]
        [DisplayName("Phone1"), Size(50)]
        public String Phone1
        {
            get => fields.Phone1[this];
            set => fields.Phone1[this] = value;
        }

        [Hidden]
        [DisplayName("Phone2"), Size(50)]
        public String Phone2
        {
            get => fields.Phone2[this];
            set => fields.Phone2[this] = value;
        }

        [Hidden]
        [DisplayName("Phone3"), Size(50)]
        public String Phone3
        {
            get => fields.Phone3[this];
            set => fields.Phone3[this] = value;
        }

        [Hidden]
        [DisplayName("ADDRS1"), Column("ADDRS1"), Size(255)]
        public String ADDRS1
        {
            get => fields.ADDRS1[this];
            set => fields.ADDRS1[this] = value;
        }

        [Hidden]
        [DisplayName("ADDRS2"), Column("ADDRS2"), Size(255)]
        public String ADDRS2
        {
            get => fields.ADDRS2[this];
            set => fields.ADDRS2[this] = value;
        }

        [Hidden]
        [DisplayName("MOBIL1"), Column("MOBIL1"), Size(25)]
        public String MOBIL1
        {
            get => fields.MOBIL1[this];
            set => fields.MOBIL1[this] = value;
        }

        [Hidden]
        [DisplayName("MOBIL2"), Column("MOBIL2"), Size(25)]
        public String MOBIL2
        {
            get => fields.MOBIL2[this];
            set => fields.MOBIL2[this] = value;
        }

        [DisplayName("SupervisorId"), Size(100)]
        public String SupervisorId
        {
            get => fields.SupervisorId[this];
            set => fields.SupervisorId[this] = value;
        }

        [DisplayName("CurrencyID"), Size(100)]
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

        [DisplayName("RATE"), Column("RATE")]
        public Double? RATE
        {
            get => fields.RATE[this];
            set => fields.RATE[this] = value;
        }

        [DisplayName("Notes")]
        public String Notes
        {
            get => fields.Notes[this];
            set => fields.Notes[this] = value;
        }

        [DisplayName("PriceID"), Column("PriceID"), Size(100)]
        public String PriceID
        {
            get => fields.PriceID[this];
            set => fields.PriceID[this] = value;
        }

        [DisplayName("HDISC"), Column("HDISC")]
        public Double? HDISC
        {
            get => fields.HDISC[this];
            set => fields.HDISC[this] = value;
        }
        [Hidden]
        [DisplayName("HDISC1"), Column("HDISC1")]
        public Double? HDISC1
        {
            get => fields.HDISC1[this];
            set => fields.HDISC1[this] = value;
        }

        [Hidden]
        [DisplayName("HDISC2"), Column("HDISC2")]
        public Double? HDISC2
        {
            get => fields.HDISC2[this];
            set => fields.HDISC2[this] = value;
        }

        [Hidden]
        [DisplayName("HDISC3"), Column("HDISC3")]
        public Double? HDISC3
        {
            get => fields.HDISC3[this];
            set => fields.HDISC3[this] = value;
        }

        [Hidden]
        [DisplayName("HDISC4"), Column("HDISC4")]
        public Double? HDISC4
        {
            get => fields.HDISC4[this];
            set => fields.HDISC4[this] = value;
        }

        [DisplayName("HTAX"), Column("HTAX")]
        public Double? HTAX
        {
            get => fields.HTAX[this];
            set => fields.HTAX[this] = value;
        }

        [Hidden]
        [DisplayName("HTAX1"), Column("HTAX1")]
        public Double? HTAX1
        {
            get => fields.HTAX1[this];
            set => fields.HTAX1[this] = value;
        }

        [Hidden]
        [DisplayName("HTAX2"), Column("HTAX2")]
        public Double? HTAX2
        {
            get => fields.HTAX2[this];
            set => fields.HTAX2[this] = value;
        }

        [Hidden]
        [DisplayName("HTAX3"), Column("HTAX3")]
        public Double? HTAX3
        {
            get => fields.HTAX3[this];
            set => fields.HTAX3[this] = value;
        }
        [Hidden]
        [DisplayName("HDSCR_AR"), Column("HDSCR_AR")]
        public String HDSCR_AR
        {
            get => fields.HDSCR_AR[this];
            set => fields.HDSCR_AR[this] = value;
        }

        [DisplayName("Paid")]
        public Double? Paid
        {
            get => fields.Paid[this];
            set => fields.Paid[this] = value;
        }

        [DisplayName("Total")]
        public Double? Total
        {
            get => fields.Total[this];
            set => fields.Total[this] = value;
        }

        [DisplayName("NetTotal")]
        public Double? NetTotal
        {
            get => fields.NetTotal[this];
            set => fields.NetTotal[this] = value;
        }

        [DisplayName("EXPENSEVL"), Column("EXPENSEVL")]
        public Double? EXPENSEVL
        {
            get => fields.EXPENSEVL[this];
            set => fields.EXPENSEVL[this] = value;
        }

        [DisplayName("HAddtions")]
        public Double? HAddtions
        {
            get => fields.HAddtions[this];
            set => fields.HAddtions[this] = value;
        }

        [DisplayName("PRT_CNT"), Column("PRT_CNT")]
        public Int32? PRT_CNT
        {
            get => fields.PRT_CNT[this];
            set => fields.PRT_CNT[this] = value;
        }

        [DisplayName("PTR_TY"), Column("PTR_TY")]
        public Int32? PTR_TY
        {
            get => fields.PTR_TY[this];
            set => fields.PTR_TY[this] = value;
        }

        [DisplayName("PTR_NO"), Column("PTR_NO")]
        public Int32? PTR_NO
        {
            get => fields.PTR_NO[this];
            set => fields.PTR_NO[this] = value;
        }

        [DisplayName("PStoreID"), Column("PStoreID"), Size(100)]
        public String PStoreID
        {
            get => fields.PStoreID[this];
            set => fields.PStoreID[this] = value;
        }

        [DisplayName("Status")]
        public Int32? Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }

        [DisplayName("EnteredBy")]
        public String EnteredBy
        {
            get => fields.EnteredBy[this];
            set => fields.EnteredBy[this] = value;
        }

        [DisplayName("EntryDate")]
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

        [DisplayName("UpdateDate")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        public ASTRHVIEWRow()
            : base()
        {
        }

        public ASTRHVIEWRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField StoreID;
            public StringField Store_NAME;
            public Int64Field HeaderID;
            public Int32Field TR_NO;
            public Int32Field TR_TY;
            public StringField TRTY_NAME;
            public DateTimeField TR_DT;
            public Int32Field ReferenceNo;
            public StringField DocTransNo;
            public StringField ACC_NO;
            public StringField ACC_NAME;
            public StringField ACC_NO2;
            public StringField ACC_NAME2;
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
            public StringField Phone1;
            public StringField Phone2;
            public StringField Phone3;
            public StringField ADDRS1;
            public StringField ADDRS2;
            public StringField MOBIL1;
            public StringField MOBIL2;
            public StringField SupervisorId;
            public StringField CurrencyID;
            public StringField Currency_NAME;
            public DoubleField RATE;
            public StringField Notes;
            public StringField PriceID;
            public DoubleField HDISC;
            public DoubleField HDISC1;
            public DoubleField HDISC2;
            public DoubleField HDISC3;
            public DoubleField HDISC4;
            public DoubleField HTAX;
            public DoubleField HTAX1;
            public DoubleField HTAX2;
            public DoubleField HTAX3;
            public StringField HDSCR_AR;
            public DoubleField Paid;
            public DoubleField Total;
            public DoubleField NetTotal;
            public DoubleField EXPENSEVL;
            public DoubleField HAddtions;
            public Int32Field PRT_CNT;
            public Int32Field PTR_TY;
            public Int32Field PTR_NO;
            public StringField PStoreID;
            public Int32Field Status;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
        }
    }
}
