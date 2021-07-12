
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace ALgorithmPro.Model
{
    [ConnectionKey("Default"), Module("Model"), TableName("[dbo].[ASACCTRH]")]
    [DisplayName("ACCTRH"), InstanceName("ACCTRH")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ACCTRHRow : Row<ACCTRHRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ASTRHID"), Column("ASTRHID")]
        public Int64? ASTRHID
        {
            get => fields.ASTRHID[this];
            set => fields.ASTRHID[this] = value;
        }

        [DisplayName("HeaderID"), Column("HeaderID"), Identity, IdProperty]
        public Int64? HeaderID
        {
            get => fields.HeaderID[this];
            set => fields.HeaderID[this] = value;
        }

        [DisplayName("TR_TY"), Column("TR_TY"), PrimaryKey]
        public Int32? TR_TY
        {
            get => fields.TR_TY[this];
            set => fields.TR_TY[this] = value;
        }

        [DisplayName("TR_NO"), Column("TR_NO"), PrimaryKey]
        public Int32? TR_NO
        {
            get => fields.TR_NO[this];
            set => fields.TR_NO[this] = value;
        }

        [DisplayName("StoreID"), Column("StoreID"), Size(100), PrimaryKey, QuickSearch, NameProperty]
        public String StoreID
        {
            get => fields.StoreID[this];
            set => fields.StoreID[this] = value;
        }

        [DisplayName("TR_DT"), Column("TR_DT"), NotNull]
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
        [DisplayName("TRTY_NAME"), Column("TRTY_NAME"), Size(150)]
        public String TRTY_NAME
        {
            get => fields.TRTY_NAME[this];
            set => fields.TRTY_NAME[this] = value;
        }

        [DisplayName("ACC_NO"), Column("ACC_NO"), Size(100), NotNull]
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

        [DisplayName("CashBoxID"), Column("CashBoxID"), Size(100)]
        public String CashBoxID
        {
            get => fields.CashBoxID[this];
            set => fields.CashBoxID[this] = value;
        }

        [DisplayName("Cash_NAME"), Column("Cash_NAME")]
        public String Cash_NAME
        {
            get => fields.Cash_NAME[this];
            set => fields.Cash_NAME[this] = value;
        }

        [DisplayName("Store_NAME"), Column("Store_NAME"), Size(255)]
        public String Store_NAME
        {
            get => fields.Store_NAME[this];
            set => fields.Store_NAME[this] = value;
        }

        [DisplayName("GLHeaderID"), Column("GLHeaderID"), NotNull]
        public Int64? GLHeaderID
        {
            get => fields.GLHeaderID[this];
            set => fields.GLHeaderID[this] = value;
        }

        [DisplayName("PStoreID"), Column("PStoreID"), Size(100)]
        public String PStoreID
        {
            get => fields.PStoreID[this];
            set => fields.PStoreID[this] = value;
        }

        [DisplayName("PTR_TY"), Column("PTR_TY"), NotNull]
        public Int32? PTR_TY
        {
            get => fields.PTR_TY[this];
            set => fields.PTR_TY[this] = value;
        }

        [DisplayName("PTR_NO"), Column("PTR_NO"), NotNull]
        public Int32? PTR_NO
        {
            get => fields.PTR_NO[this];
            set => fields.PTR_NO[this] = value;
        }

        [DisplayName("SupervisorID"), Column("SupervisorID"), Size(100)]
        public String SupervisorID
        {
            get => fields.SupervisorID[this];
            set => fields.SupervisorID[this] = value;
        }

        [DisplayName("CST_CD"), Column("CST_CD"), Size(100)]
        public String CST_CD
        {
            get => fields.CST_CD[this];
            set => fields.CST_CD[this] = value;
        }

        [DisplayName("CST_NAME"), Column("CST_NAME")]
        public String CST_NAME
        {
            get => fields.CST_NAME[this];
            set => fields.CST_NAME[this] = value;
        }

        [DisplayName("HDSCR_AR"), Column("HDSCR_AR"), Size(500)]
        public String HDSCR_AR
        {
            get => fields.HDSCR_AR[this];
            set => fields.HDSCR_AR[this] = value;
        }

        [DisplayName("HDSCR_EN"), Column("HDSCR_EN"), Size(500)]
        public String HDSCR_EN
        {
            get => fields.HDSCR_EN[this];
            set => fields.HDSCR_EN[this] = value;
        }

        [DisplayName("Paid"), NotNull]
        public Double? Paid
        {
            get => fields.Paid[this];
            set => fields.Paid[this] = value;
        }

        [DisplayName("Total Value"), NotNull]
        public Double? TotalValue
        {
            get => fields.TotalValue[this];
            set => fields.TotalValue[this] = value;
        }

        [DisplayName("NetTotal"), NotNull]
        public Double? NetTotal
        {
            get => fields.NetTotal[this];
            set => fields.NetTotal[this] = value;
        }

        [DisplayName("Flag"), NotNull]
        public Int32? Flag
        {
            get => fields.Flag[this];
            set => fields.Flag[this] = value;
        }

        [DisplayName("BALDB"), Column("BALDB"), NotNull]
        public Double? BALDB
        {
            get => fields.BALDB[this];
            set => fields.BALDB[this] = value;
        }

        [DisplayName("BALCR"), Column("BALCR"), NotNull]
        public Double? BALCR
        {
            get => fields.BALCR[this];
            set => fields.BALCR[this] = value;
        }

        [DisplayName("BAL"), Column("BAL"), NotNull]
        public Double? BAL
        {
            get => fields.BAL[this];
            set => fields.BAL[this] = value;
        }

        [DisplayName("SUM_CD"), Column("SUM_CD"), Size(100)]
        public String SUM_CD
        {
            get => fields.SUM_CD[this];
            set => fields.SUM_CD[this] = value;
        }

        [DisplayName("SSUM_CD"), Column("SSUM_CD"), Size(100)]
        public String SSUM_CD
        {
            get => fields.SSUM_CD[this];
            set => fields.SSUM_CD[this] = value;
        }

        [DisplayName("ACC_NO2"), Column("ACC_NO2"), Size(100)]
        public String ACC_NO2
        {
            get => fields.ACC_NO2[this];
            set => fields.ACC_NO2[this] = value;
        }

        [DisplayName("ACC_NAME2"), Column("ACC_NAME2")]
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

        [DisplayName("ACC_NAME3"), Column("ACC_NAME3")]
        public String ACC_NAME3
        {
            get => fields.ACC_NAME3[this];
            set => fields.ACC_NAME3[this] = value;
        }

        [DisplayName("CHK_NO"), Column("CHK_NO"), Size(100)]
        public String CHK_NO
        {
            get => fields.CHK_NO[this];
            set => fields.CHK_NO[this] = value;
        }

        [DisplayName("CHK_TYP"), Column("CHK_TYP"), NotNull]
        public Int32? CHK_TYP
        {
            get => fields.CHK_TYP[this];
            set => fields.CHK_TYP[this] = value;
        }

        [DisplayName("CKHTYP_NAME"), Column("CKHTYP_NAME")]
        public String CKHTYP_NAME
        {
            get => fields.CKHTYP_NAME[this];
            set => fields.CKHTYP_NAME[this] = value;
        }

        [DisplayName("CHKTRTY"), Column("CHKTRTY"), Size(100)]
        public Int32? CHKTRTY
        {
            get => fields.CHKTRTY[this];
            set => fields.CHKTRTY[this] = value;
        }

        [DisplayName("CHKTRTY_NAME"), Column("CHKTRTY_NAME"), Size(500)]
        public String CHKTRTY_NAME
        {
            get => fields.CHKTRTY_NAME[this];
            set => fields.CHKTRTY_NAME[this] = value;
        }

        [DisplayName("ISU_DT"), Column("ISU_DT")]
        public DateTime? ISU_DT
        {
            get => fields.ISU_DT[this];
            set => fields.ISU_DT[this] = value;
        }

        [DisplayName("DUE_DT"), Column("DUE_DT")]
        public DateTime? DUE_DT
        {
            get => fields.DUE_DT[this];
            set => fields.DUE_DT[this] = value;
        }

        [DisplayName("AMT"), Column("AMT"), NotNull]
        public Double? AMT
        {
            get => fields.AMT[this];
            set => fields.AMT[this] = value;
        }

        [DisplayName("AMT_PAID"), Column("AMT_PAID"), NotNull]
        public Double? AMT_PAID
        {
            get => fields.AMT_PAID[this];
            set => fields.AMT_PAID[this] = value;
        }

        [DisplayName("CHK_EXPENSVL"), Column("CHK_EXPENSVL"), NotNull]
        public Double? CHK_EXPENSVL
        {
            get => fields.CHK_EXPENSVL[this];
            set => fields.CHK_EXPENSVL[this] = value;
        }

        [DisplayName("CHK_TotalValue"), Column("CHK_TotalValue"), NotNull]
        public Double? CHK_TotalValue
        {
            get => fields.CHK_TotalValue[this];
            set => fields.CHK_TotalValue[this] = value;
        }

        [DisplayName("BNKID"), Column("BNKID"), Size(100)]
        public String BNKID
        {
            get => fields.BNKID[this];
            set => fields.BNKID[this] = value;
        }

        [DisplayName("BNK_NAME"), Column("BNK_NAME")]
        public String BNK_NAME
        {
            get => fields.BNK_NAME[this];
            set => fields.BNK_NAME[this] = value;
        }

        [DisplayName("CBNKID"), Column("CBNKID"), Size(100)]
        public String CBNKID
        {
            get => fields.CBNKID[this];
            set => fields.CBNKID[this] = value;
        }

        [DisplayName("CBNK_NAME"), Column("CBNK_NAME")]
        public String CBNK_NAME
        {
            get => fields.CBNK_NAME[this];
            set => fields.CBNK_NAME[this] = value;
        }

        [DisplayName("RPACC_ACCNO"), Column("RPACC_ACCNO"), Size(100)]
        public String RPACC_ACCNO
        {
            get => fields.RPACC_ACCNO[this];
            set => fields.RPACC_ACCNO[this] = value;
        }

        [DisplayName("RPACC_NAME"), Column("RPACC_NAME")]
        public String RPACC_NAME
        {
            get => fields.RPACC_NAME[this];
            set => fields.RPACC_NAME[this] = value;
        }

        [DisplayName("DEPT_BNKID"), Column("DEPT_BNKID"), Size(100)]
        public String DEPT_BNKID
        {
            get => fields.DEPT_BNKID[this];
            set => fields.DEPT_BNKID[this] = value;
        }

        [DisplayName("DEPT_BNKNAME"), Column("DEPT_BNKNAME")]
        public String DEPT_BNKNAME
        {
            get => fields.DEPT_BNKNAME[this];
            set => fields.DEPT_BNKNAME[this] = value;
        }

        [DisplayName("Notes_ACCNO"), Column("Notes_ACCNO"), Size(100)]
        public String Notes_ACCNO
        {
            get => fields.Notes_ACCNO[this];
            set => fields.Notes_ACCNO[this] = value;
        }

        [DisplayName("Notes Accname"), Column("Notes_ACCNAME")]
        public String Notes_ACCNAME
        {
            get => fields.Notes_ACCNAME[this];
            set => fields.Notes_ACCNAME[this] = value;
        }

        [DisplayName("Endorsed Number"), Column("Endorsed_ACCNO"), Size(100)]
        public String Endorsed_ACCNO
        {
            get => fields.Endorsed_ACCNO[this];
            set => fields.Endorsed_ACCNO[this] = value;
        }

        [DisplayName("Endorsed_NAME"), Column("Endorsed_NAME")]
        public String Endorsed_NAME
        {
            get => fields.Endorsed_NAME[this];
            set => fields.Endorsed_NAME[this] = value;
        }

        [DisplayName("ExpensesID"), Column("ExpensesID"), Size(100)]
        public String ExpensesID
        {
            get => fields.ExpensesID[this];
            set => fields.ExpensesID[this] = value;
        }

        [DisplayName("Expenses Name")]
        public String ExpensesName
        {
            get => fields.ExpensesName[this];
            set => fields.ExpensesName[this] = value;
        }

        [DisplayName("Rep Cd"), Column("REP_CD"), Size(100)]
        public String REP_CD
        {
            get => fields.REP_CD[this];
            set => fields.REP_CD[this] = value;
        }

        [DisplayName("Rep Name"), Column("REP_NAME")]
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

        [DisplayName("Rep Name2"), Column("REP_NAME2")]
        public String REP_NAME2
        {
            get => fields.REP_NAME2[this];
            set => fields.REP_NAME2[this] = value;
        }

        [DisplayName("EXPENSE_VL"), Column("EXPENSE_VL"), NotNull]
        public Double? EXPENSE_VL
        {
            get => fields.EXPENSE_VL[this];
            set => fields.EXPENSE_VL[this] = value;
        }

        [DisplayName("CurrencyID"), Column("CurrencyID"), Size(100)]
        public String CurrencyID
        {
            get => fields.CurrencyID[this];
            set => fields.CurrencyID[this] = value;
        }

        [DisplayName("Currency_NAME"), Column("Currency_NAME")]
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

        [DisplayName("CUR_VL"), Column("CUR_VL"), NotNull]
        public Double? CUR_VL
        {
            get => fields.CUR_VL[this];
            set => fields.CUR_VL[this] = value;
        }

        [DisplayName("Gl Posted"), NotNull]
        public Boolean? GlPosted
        {
            get => fields.GlPosted[this];
            set => fields.GlPosted[this] = value;
        }

        [DisplayName("Close Status"), NotNull]
        public Int32? CloseStatus
        {
            get => fields.CloseStatus[this];
            set => fields.CloseStatus[this] = value;
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

        public ACCTRHRow()
            : base()
        {
        }

        public ACCTRHRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ASTRHID;
            public Int64Field HeaderID;
            public Int32Field TR_TY;
            public Int32Field TR_NO;
            public StringField StoreID;
            public DateTimeField TR_DT;
            public Int32Field TR_DS;
            public StringField TRTY_NAME;
            public StringField ACC_NO;
            public StringField ACC_NAME;
            public StringField CashBoxID;
            public StringField Cash_NAME;
            public StringField Store_NAME;
            public Int64Field GLHeaderID;
            public StringField PStoreID;
            public Int32Field PTR_TY;
            public Int32Field PTR_NO;
            public StringField SupervisorID;
            public StringField CST_CD;
            public StringField CST_NAME;
            public StringField HDSCR_AR;
            public StringField HDSCR_EN;
            public DoubleField Paid;
            public DoubleField TotalValue;
            public DoubleField NetTotal;
            public Int32Field Flag;
            public DoubleField BALDB;
            public DoubleField BALCR;
            public DoubleField BAL;
            public StringField SUM_CD;
            public StringField SSUM_CD;
            public StringField ACC_NO2;
            public StringField ACC_NAME2;
            public StringField ACC_NO3;
            public StringField ACC_NAME3;
            public StringField CHK_NO;
            public Int32Field CHK_TYP;
            public StringField CKHTYP_NAME;
            public Int32Field CHKTRTY;
            public StringField CHKTRTY_NAME;
            public DateTimeField ISU_DT;
            public DateTimeField DUE_DT;
            public DoubleField AMT;
            public DoubleField AMT_PAID;
            public DoubleField CHK_EXPENSVL;
            public DoubleField CHK_TotalValue;
            public StringField BNKID;
            public StringField BNK_NAME;
            public StringField CBNKID;
            public StringField CBNK_NAME;
            public StringField RPACC_ACCNO;
            public StringField RPACC_NAME;
            public StringField DEPT_BNKID;
            public StringField DEPT_BNKNAME;
            public StringField Notes_ACCNO;
            public StringField Notes_ACCNAME;
            public StringField Endorsed_ACCNO;
            public StringField Endorsed_NAME;
            public StringField ExpensesID;
            public StringField ExpensesName;
            public StringField REP_CD;
            public StringField REP_NAME;
            public StringField REP_CD2;
            public StringField REP_NAME2;
            public DoubleField EXPENSE_VL;
            public StringField CurrencyID;
            public StringField Currency_NAME;
            public DoubleField RATE;
            public DoubleField CUR_VL;
            public BooleanField GlPosted;
            public Int32Field CloseStatus;
            public Int32Field Status;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
        }
    }
}
