using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.Model
{
    [ConnectionKey("Default"), Module("Model"), TableName("[dbo].[ASTRDVIEW]")]
    [DisplayName("ASTRDVIEW"), InstanceName("ASTRDVIEW")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ASTRDVIEWRow : Row<ASTRDVIEWRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("HeaderID"), NotNull, IdProperty]
        public Int64? HeaderID
        {
            get => fields.HeaderID[this];
            set => fields.HeaderID[this] = value;
        }

        [DisplayName("TR_NO"), Column("TR_NO"), NotNull]
        public Int32? TR_NO
        {
            get => fields.TR_NO[this];
            set => fields.TR_NO[this] = value;
        }

        [DisplayName("TR_TY"), Column("TR_TY"), NotNull]
        public Int32? TR_TY
        {
            get => fields.TR_TY[this];
            set => fields.TR_TY[this] = value;
        }

        [DisplayName("TR_DT"), Column("TR_DT"), NotNull]
        public DateTime? TR_DT
        {
            get => fields.TR_DT[this];
            set => fields.TR_DT[this] = value;
        }

        [DisplayName("TRTY_NAME"), Column("TRTY_NAME"), Size(255), QuickSearch, NameProperty]
        public String TRTY_NAME
        {
            get => fields.TRTY_NAME[this];
            set => fields.TRTY_NAME[this] = value;
        }

        [DisplayName("StoreID"), Column("StoreID"), Size(100), NotNull]
        public String StoreID
        {
            get => fields.StoreID[this];
            set => fields.StoreID[this] = value;
        }

        [DisplayName("Store_NAME"), Column("Store_NAME")]
        public String Store_NAME
        {
            get => fields.Store_NAME[this];
            set => fields.Store_NAME[this] = value;
        }

        [DisplayName("ACC_NO"), Column("ACC_NO"), Size(100)]
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

        [DisplayName("ACC_NAME2"), Column("ACC_NAME2"), Size(255)]
        public String ACC_NAME2
        {
            get => fields.ACC_NAME2[this];
            set => fields.ACC_NAME2[this] = value;
        }

        [DisplayName("ACC_NO3"), Column("ACC_NO3"), Size(100)]
        public String ACC_NO3
        {
            get => fields.ACC_NO3[this];
            set => fields.ACC_NO3[this] = value;
        }

        [DisplayName("ACC_NAME3"), Column("ACC_NAME3"), Size(255)]
        public String ACC_NAME3
        {
            get => fields.ACC_NAME3[this];
            set => fields.ACC_NAME3[this] = value;
        }

        [DisplayName("HDSCR_AR"), Column("HDSCR_AR"), Size(255)]
        public String HDSCR_AR
        {
            get => fields.HDSCR_AR[this];
            set => fields.HDSCR_AR[this] = value;
        }

        [DisplayName("TR_DS_AR"), Column("TR_DS_AR"), Size(250)]
        public String TR_DS_AR
        {
            get => fields.TR_DS_AR[this];
            set => fields.TR_DS_AR[this] = value;
        }

        [DisplayName("SupervisorID"), Column("SupervisorID"), Size(100)]
        public String SupervisorID
        {
            get => fields.SupervisorID[this];
            set => fields.SupervisorID[this] = value;
        }

        [DisplayName("Supervisor_NAME"), Column("Supervisor_NAME"), Size(300)]
        public String Supervisor_NAME
        {
            get => fields.Supervisor_NAME[this];
            set => fields.Supervisor_NAME[this] = value;
        }

        [DisplayName("TR_DS_EN"), Column("TR_DS_EN"), Size(250)]
        public String TR_DS_EN
        {
            get => fields.TR_DS_EN[this];
            set => fields.TR_DS_EN[this] = value;
        }

        [DisplayName("REP_CD"), Column("REP_CD"), Size(100)]
        public String REP_CD
        {
            get => fields.REP_CD[this];
            set => fields.REP_CD[this] = value;
        }

        [DisplayName("REP_NAME"), Column("REP_NAME"), Size(255)]
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

        [DisplayName("REP_NAME2"), Column("REP_NAME2"), Size(255)]
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

        [DisplayName("CST_NAME"), Column("CST_NAME"), Size(255)]
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

        [DisplayName("SUM_NAME"), Column("SUM_NAME"), Size(255)]
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

        [DisplayName("SSUM_NAME"), Column("SSUM_NAME"), Size(255)]
        public String SSUM_NAME
        {
            get => fields.SSUM_NAME[this];
            set => fields.SSUM_NAME[this] = value;
        }

        [DisplayName("PStoreID"), Column("PStoreID"), Size(100)]
        public String PStoreID
        {
            get => fields.PStoreID[this];
            set => fields.PStoreID[this] = value;
        }

        [DisplayName("PTR_NO"), Column("PTR_NO"), NotNull]
        public Int32? PTR_NO
        {
            get => fields.PTR_NO[this];
            set => fields.PTR_NO[this] = value;
        }

        [DisplayName("PTR_TY"), Column("PTR_TY"), NotNull]
        public Int32? PTR_TY
        {
            get => fields.PTR_TY[this];
            set => fields.PTR_TY[this] = value;
        }

        [DisplayName("Priceedit"), NotNull]
        public Boolean? Priceedit
        {
            get => fields.Priceedit[this];
            set => fields.Priceedit[this] = value;
        }

        [DisplayName("EXPENSEVL"), Column("EXPENSEVL"), NotNull]
        public Double? EXPENSEVL
        {
            get => fields.EXPENSEVL[this];
            set => fields.EXPENSEVL[this] = value;
        }

        [DisplayName("HAddtions"), NotNull]
        public Double? HAddtions
        {
            get => fields.HAddtions[this];
            set => fields.HAddtions[this] = value;
        }

        [DisplayName("HdrAddtionsR"), NotNull]
        public Double? HdrAddtionsR
        {
            get => fields.HdrAddtionsR[this];
            set => fields.HdrAddtionsR[this] = value;
        }

        [DisplayName("CurrencyId"), Size(100), NotNull]
        public String CurrencyId
        {
            get => fields.CurrencyId[this];
            set => fields.CurrencyId[this] = value;
        }

        [DisplayName("Currency Name"), Column("Currency_NAME"), Size(255)]
        public String Currency_NAME
        {
            get => fields.Currency_NAME[this];
            set => fields.Currency_NAME[this] = value;
        }

        [DisplayName("RATE"), Column("RATE"), NotNull]
        public Double? RATE
        {
            get => fields.RATE[this];
            set => fields.RATE[this] = value;
        }

        [DisplayName("LN_NO"), Column("LN_NO"), NotNull]
        public Int32? LN_NO
        {
            get => fields.LN_NO[this];
            set => fields.LN_NO[this] = value;
        }

        [DisplayName("Item_CD"), Column("Item_CD"), Size(100), NotNull]
        public String Item_CD
        {
            get => fields.Item_CD[this];
            set => fields.Item_CD[this] = value;
        }

        [DisplayName("Item_Name_AR"), Column("Item_Name_AR"), Size(255)]
        public String Item_Name_AR
        {
            get => fields.Item_Name_AR[this];
            set => fields.Item_Name_AR[this] = value;
        }

        [DisplayName("ItemBar Code"), Size(100)]
        public String ItemBarCode
        {
            get => fields.ItemBarCode[this];
            set => fields.ItemBarCode[this] = value;
        }

        [DisplayName("ITM_NM_AR"), Column("ITM_NM_AR"), Size(300)]
        public String ITM_NM_AR
        {
            get => fields.ITM_NM_AR[this];
            set => fields.ITM_NM_AR[this] = value;
        }

        [DisplayName("PKID"), Column("PKID"), Size(10), NotNull]
        public String PKID
        {
            get => fields.PKID[this];
            set => fields.PKID[this] = value;
        }

        [DisplayName("PKName"), Column("PKName"), Size(100)]
        public String PKName
        {
            get => fields.PKName[this];
            set => fields.PKName[this] = value;
        }

        [DisplayName("Pk"), Column("PK"), NotNull]
        public Double? PK
        {
            get => fields.PK[this];
            set => fields.PK[this] = value;
        }

        [DisplayName("ItemBAL"), Column("ItemBAL"), NotNull]
        public Double? ItemBAL
        {
            get => fields.ItemBAL[this];
            set => fields.ItemBAL[this] = value;
        }

        [DisplayName("QTY"), Column("QTY"), NotNull]
        public Double? QTY
        {
            get => fields.QTY[this];
            set => fields.QTY[this] = value;
        }

        [DisplayName("Price"), NotNull]
        public Double? Price
        {
            get => fields.Price[this];
            set => fields.Price[this] = value;
        }

        [DisplayName("PKPRC"), Column("PKPRC"), NotNull]
        public Double? PKPRC
        {
            get => fields.PKPRC[this];
            set => fields.PKPRC[this] = value;
        }

        [DisplayName("PKCST"), Column("PKCST"), NotNull]
        public Double? PKCST
        {
            get => fields.PKCST[this];
            set => fields.PKCST[this] = value;
        }

        [DisplayName("Value"), NotNull]
        public Double? Value
        {
            get => fields.Value[this];
            set => fields.Value[this] = value;
        }

        [DisplayName("Total"), NotNull]
        public Double? Total
        {
            get => fields.Total[this];
            set => fields.Total[this] = value;
        }

        [DisplayName("DISC1"), Column("DISC1"), NotNull]
        public Double? DISC1
        {
            get => fields.DISC1[this];
            set => fields.DISC1[this] = value;
        }

        [DisplayName("DISC2"), Column("DISC2"), NotNull]
        public Double? DISC2
        {
            get => fields.DISC2[this];
            set => fields.DISC2[this] = value;
        }

        [DisplayName("DISC3"), Column("DISC3"), NotNull]
        public Double? DISC3
        {
            get => fields.DISC3[this];
            set => fields.DISC3[this] = value;
        }

        [DisplayName("DISC4"), Column("DISC4"), NotNull]
        public Double? DISC4
        {
            get => fields.DISC4[this];
            set => fields.DISC4[this] = value;
        }

        [DisplayName("HDISC"), Column("HDISC"), NotNull]
        public Double? HDISC
        {
            get => fields.HDISC[this];
            set => fields.HDISC[this] = value;
        }

        [DisplayName("TAX1"), Column("TAX1"), NotNull]
        public Double? TAX1
        {
            get => fields.TAX1[this];
            set => fields.TAX1[this] = value;
        }

        [DisplayName("TAX2"), Column("TAX2"), NotNull]
        public Double? TAX2
        {
            get => fields.TAX2[this];
            set => fields.TAX2[this] = value;
        }

        [DisplayName("TAX3"), Column("TAX3"), NotNull]
        public Double? TAX3
        {
            get => fields.TAX3[this];
            set => fields.TAX3[this] = value;
        }

        [DisplayName("HTAX"), Column("HTAX"), NotNull]
        public Double? HTAX
        {
            get => fields.HTAX[this];
            set => fields.HTAX[this] = value;
        }

        [DisplayName("NET"), Column("NET"), NotNull]
        public Double? NET
        {
            get => fields.NET[this];
            set => fields.NET[this] = value;
        }

        [DisplayName("NetTotal"), NotNull]
        public Double? NetTotal
        {
            get => fields.NetTotal[this];
            set => fields.NetTotal[this] = value;
        }

        [DisplayName("CostValue"), NotNull]
        public Double? CostValue
        {
            get => fields.CostValue[this];
            set => fields.CostValue[this] = value;
        }

        [DisplayName("FIFOVL"), Column("FIFOVL"), NotNull]
        public Double? FIFOVL
        {
            get => fields.FIFOVL[this];
            set => fields.FIFOVL[this] = value;
        }

        [DisplayName("LIFOVL"), Column("LIFOVL"), NotNull]
        public Double? LIFOVL
        {
            get => fields.LIFOVL[this];
            set => fields.LIFOVL[this] = value;
        }

        [DisplayName("PriceID"), Column("PriceID"), Size(100)]
        public String PriceID
        {
            get => fields.PriceID[this];
            set => fields.PriceID[this] = value;
        }

        [DisplayName("Price Name"), Size(250)]
        public String PriceName
        {
            get => fields.PriceName[this];
            set => fields.PriceName[this] = value;
        }

        [DisplayName("ValueAfterTAX"), Column("ValueAfterTAX"), NotNull]
        public Double? ValueAfterTAX
        {
            get => fields.ValueAfterTAX[this];
            set => fields.ValueAfterTAX[this] = value;
        }

        [DisplayName("RestoreQty"), NotNull]
        public Double? RestoreQty
        {
            get => fields.RestoreQty[this];
            set => fields.RestoreQty[this] = value;
        }

        [DisplayName("ReturnQty"), NotNull]
        public Double? ReturnQty
        {
            get => fields.ReturnQty[this];
            set => fields.ReturnQty[this] = value;
        }

        [DisplayName("GRP"), Column("GRP"), NotNull]
        public Int32? GRP
        {
            get => fields.GRP[this];
            set => fields.GRP[this] = value;
        }

        [DisplayName("Phone1"), Size(50)]
        public String Phone1
        {
            get => fields.Phone1[this];
            set => fields.Phone1[this] = value;
        }

        [DisplayName("Phone2"), Size(50)]
        public String Phone2
        {
            get => fields.Phone2[this];
            set => fields.Phone2[this] = value;
        }

        [DisplayName("Phone3"), Size(50)]
        public String Phone3
        {
            get => fields.Phone3[this];
            set => fields.Phone3[this] = value;
        }

        [DisplayName("ADDRS1"), Column("ADDRS1"), Size(255)]
        public String ADDRS1
        {
            get => fields.ADDRS1[this];
            set => fields.ADDRS1[this] = value;
        }

        [DisplayName("ADDRS2"), Column("ADDRS2"), Size(255)]
        public String ADDRS2
        {
            get => fields.ADDRS2[this];
            set => fields.ADDRS2[this] = value;
        }

        [DisplayName("MOBIL1"), Column("MOBIL1"), Size(25)]
        public String MOBIL1
        {
            get => fields.MOBIL1[this];
            set => fields.MOBIL1[this] = value;
        }

        [DisplayName("MOBIL2"), Column("MOBIL2"), Size(25)]
        public String MOBIL2
        {
            get => fields.MOBIL2[this];
            set => fields.MOBIL2[this] = value;
        }

        [DisplayName("REC_ID"), Column("REC_ID")]
        public Int32? REC_ID
        {
            get => fields.REC_ID[this];
            set => fields.REC_ID[this] = value;
        }

        [DisplayName("HDISC1R"), Column("HDISC1R"), NotNull]
        public Double? HDISC1R
        {
            get => fields.HDISC1R[this];
            set => fields.HDISC1R[this] = value;
        }

        [DisplayName("HDISC2R"), Column("HDISC2R"), NotNull]
        public Double? HDISC2R
        {
            get => fields.HDISC2R[this];
            set => fields.HDISC2R[this] = value;
        }

        [DisplayName("HDISC3R"), Column("HDISC3R"), NotNull]
        public Double? HDISC3R
        {
            get => fields.HDISC3R[this];
            set => fields.HDISC3R[this] = value;
        }

        [DisplayName("SHDISCR"), Column("SHDISCR"), NotNull]
        public Double? SHDISCR
        {
            get => fields.SHDISCR[this];
            set => fields.SHDISCR[this] = value;
        }

        [DisplayName("DISC1R"), Column("DISC1R"), NotNull]
        public Double? DISC1R
        {
            get => fields.DISC1R[this];
            set => fields.DISC1R[this] = value;
        }

        [DisplayName("DISC2R"), Column("DISC2R"), NotNull]
        public Double? DISC2R
        {
            get => fields.DISC2R[this];
            set => fields.DISC2R[this] = value;
        }

        [DisplayName("DISC3R"), Column("DISC3R"), NotNull]
        public Double? DISC3R
        {
            get => fields.DISC3R[this];
            set => fields.DISC3R[this] = value;
        }

        [DisplayName("SDISCR"), Column("SDISCR"), NotNull]
        public Double? SDISCR
        {
            get => fields.SDISCR[this];
            set => fields.SDISCR[this] = value;
        }

        [DisplayName("TAX1R"), Column("TAX1R"), NotNull]
        public Double? TAX1R
        {
            get => fields.TAX1R[this];
            set => fields.TAX1R[this] = value;
        }

        [DisplayName("TAX2R"), Column("TAX2R"), NotNull]
        public Double? TAX2R
        {
            get => fields.TAX2R[this];
            set => fields.TAX2R[this] = value;
        }

        [DisplayName("TAX3R"), Column("TAX3R"), NotNull]
        public Double? TAX3R
        {
            get => fields.TAX3R[this];
            set => fields.TAX3R[this] = value;
        }

        [DisplayName("STAXR"), Column("STAXR"), NotNull]
        public Double? STAXR
        {
            get => fields.STAXR[this];
            set => fields.STAXR[this] = value;
        }

        [DisplayName("CUR_VL"), Column("CUR_VL"), NotNull]
        public Double? CUR_VL
        {
            get => fields.CUR_VL[this];
            set => fields.CUR_VL[this] = value;
        }

        [DisplayName("DISC_CUR_VAL"), Column("DISC_CUR_VAL"), NotNull]
        public Double? DISC_CUR_VAL
        {
            get => fields.DISC_CUR_VAL[this];
            set => fields.DISC_CUR_VAL[this] = value;
        }

        [DisplayName("TAX_CUR_VAL"), Column("TAX_CUR_VAL"), NotNull]
        public Double? TAX_CUR_VAL
        {
            get => fields.TAX_CUR_VAL[this];
            set => fields.TAX_CUR_VAL[this] = value;
        }

        [DisplayName("ACCBAL_CUR_VL"), Column("ACCBAL_CUR_VL"), NotNull]
        public Double? ACCBAL_CUR_VL
        {
            get => fields.ACCBAL_CUR_VL[this];
            set => fields.ACCBAL_CUR_VL[this] = value;
        }

        [DisplayName("SPRC6"), Column("SPRC6")]
        public Double? SPRC6
        {
            get => fields.SPRC6[this];
            set => fields.SPRC6[this] = value;
        }

        [DisplayName("SPRC5"), Column("SPRC5")]
        public Double? SPRC5
        {
            get => fields.SPRC5[this];
            set => fields.SPRC5[this] = value;
        }

        [DisplayName("SPRC4"), Column("SPRC4")]
        public Double? SPRC4
        {
            get => fields.SPRC4[this];
            set => fields.SPRC4[this] = value;
        }

        [DisplayName("SPRC3"), Column("SPRC3")]
        public Double? SPRC3
        {
            get => fields.SPRC3[this];
            set => fields.SPRC3[this] = value;
        }

        [DisplayName("SPRC2"), Column("SPRC2")]
        public Double? SPRC2
        {
            get => fields.SPRC2[this];
            set => fields.SPRC2[this] = value;
        }

        [DisplayName("UCST"), Column("UCST")]
        public Double? UCST
        {
            get => fields.UCST[this];
            set => fields.UCST[this] = value;
        }

        [DisplayName("Status"), NotNull]
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

        public ASTRDVIEWRow()
            : base()
        {
        }

        public ASTRDVIEWRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field HeaderID;
            public Int32Field TR_NO;
            public Int32Field TR_TY;
            public DateTimeField TR_DT;
            public StringField TRTY_NAME;
            public StringField StoreID;
            public StringField Store_NAME;
            public StringField ACC_NO;
            public StringField ACC_NAME;
            public StringField ACC_NO2;
            public StringField ACC_NAME2;
            public StringField ACC_NO3;
            public StringField ACC_NAME3;
            public StringField HDSCR_AR;
            public StringField TR_DS_AR;
            public StringField SupervisorID;
            public StringField Supervisor_NAME;
            public StringField TR_DS_EN;
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
            public StringField PStoreID;
            public Int32Field PTR_NO;
            public Int32Field PTR_TY;
            public BooleanField Priceedit;
            public DoubleField EXPENSEVL;
            public DoubleField HAddtions;
            public DoubleField HdrAddtionsR;
            public StringField CurrencyId;
            public StringField Currency_NAME;
            public DoubleField RATE;
            public Int32Field LN_NO;
            public StringField Item_CD;
            public StringField Item_Name_AR;
            public StringField ItemBarCode;
            public StringField ITM_NM_AR;
            public StringField PKID;
            public StringField PKName;
            public DoubleField PK;
            public DoubleField ItemBAL;
            public DoubleField QTY;
            public DoubleField Price;
            public DoubleField PKPRC;
            public DoubleField PKCST;
            public DoubleField Value;
            public DoubleField Total;
            public DoubleField DISC1;
            public DoubleField DISC2;
            public DoubleField DISC3;
            public DoubleField DISC4;
            public DoubleField HDISC;
            public DoubleField TAX1;
            public DoubleField TAX2;
            public DoubleField TAX3;
            public DoubleField HTAX;
            public DoubleField NET;
            public DoubleField NetTotal;
            public DoubleField CostValue;
            public DoubleField FIFOVL;
            public DoubleField LIFOVL;
            public StringField PriceID;
            public StringField PriceName;
            public DoubleField ValueAfterTAX;
            public DoubleField RestoreQty;
            public DoubleField ReturnQty;
            public Int32Field GRP;
            public StringField Phone1;
            public StringField Phone2;
            public StringField Phone3;
            public StringField ADDRS1;
            public StringField ADDRS2;
            public StringField MOBIL1;
            public StringField MOBIL2;
            public Int32Field REC_ID;
            public DoubleField HDISC1R;
            public DoubleField HDISC2R;
            public DoubleField HDISC3R;
            public DoubleField SHDISCR;
            public DoubleField DISC1R;
            public DoubleField DISC2R;
            public DoubleField DISC3R;
            public DoubleField SDISCR;
            public DoubleField TAX1R;
            public DoubleField TAX2R;
            public DoubleField TAX3R;
            public DoubleField STAXR;
            public DoubleField CUR_VL;
            public DoubleField DISC_CUR_VAL;
            public DoubleField TAX_CUR_VAL;
            public DoubleField ACCBAL_CUR_VL;
            public DoubleField SPRC6;
            public DoubleField SPRC5;
            public DoubleField SPRC4;
            public DoubleField SPRC3;
            public DoubleField SPRC2;
            public DoubleField UCST;
            public Int32Field Status;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
        }
    }
}
