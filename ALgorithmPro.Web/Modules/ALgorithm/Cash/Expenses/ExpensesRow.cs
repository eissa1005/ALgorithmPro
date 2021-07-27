using System;
using Serenity.Data;
using ALgorithmPro.Lookup;
using ALgorithmPro.Web.Modules.Common;
using Serenity.ComponentModel;
using Serenity.Data.Mapping;
using System.ComponentModel;


namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ASACCTRH]")]
    [DisplayName("Expenses"), InstanceName("Expenses")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("ALgorithm.Expenses")]
    public sealed class ExpensesRow : Row<ExpensesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("HeaderID"), Column("HeaderID"), Identity, IdProperty, LookupInclude]
        public Int64? HeaderID
        {
            get => fields.HeaderID[this];
            set => fields.HeaderID[this] = value;
        }

        [DisplayName("ASTRHID"), Column("ASTRHID"), ForeignKey("[dbo].[ASTRH]", "HeaderID"), LeftJoin("jAstrhid"), TextualField("AstrhidStoreId")]
        public Int64? ASTRHID
        {
            get => fields.ASTRHID[this];
            set => fields.ASTRHID[this] = value;
        }

        [DisplayName("Transaction"), Column("TR_TY"), NotNull, NameProperty, PrimaryKey, LookupInclude]
        [LookupEditor(typeof(ExpenseTRTYLookup), AutoComplete = true)]
        public Int32? TR_TY
        {
            get => fields.TR_TY[this];
            set => fields.TR_TY[this] = value;
        }

        [DisplayName("Receipt Number"), Column("TR_NO"), NotNull, PrimaryKey, LookupInclude]
        public Int32? TR_NO
        {
            get => fields.TR_NO[this];
            set => fields.TR_NO[this] = value;
        }

        [DisplayName("StoreID"), Column("StoreID"), Size(100), PrimaryKey, QuickSearch, Required, LookupInclude]
        [LookupEditor(typeof(StoreLookup), AutoComplete = true, InplaceAdd = true)]
        public String StoreID
        {
            get => fields.StoreID[this];
            set => fields.StoreID[this] = value;
        }

        [DisplayName("Date"), Column("TR_DT"), NotNull, DefaultValue("now")]
        public DateTime? TR_DT
        {
            get => fields.TR_DT[this];
            set => fields.TR_DT[this] = value;
        }

        [DisplayName("Transname Name"), Column("TRTY_NAME"), Size(150)]
        public String TRTY_NAME
        {
            get => fields.TRTY_NAME[this];
            set => fields.TRTY_NAME[this] = value;
        }

        [DisplayName("Account Class"), Column("ACC_NO3"), Size(100)]
        [LookupEditor(typeof(MainExpensesLookup), AutoComplete = true)]
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

        [DisplayName("Expenses Number"), Column("ACC_NO"), Size(100), NotNull, LookupInclude]
        public String ACC_NO
        {
            get => fields.ACC_NO[this];
            set => fields.ACC_NO[this] = value;
        }

        [DisplayName("Expenses Name"), Column("ACC_NAME"), Size(255), ReadOnly(true)]
        public String ACC_NAME
        {
            get => fields.ACC_NAME[this];
            set => fields.ACC_NAME[this] = value;
        }

        [DisplayName("Cash-Bank"), Column("CashBoxID"), Size(100), LookupInclude]
        [LookupEditor(typeof(CashLookup), AutoComplete = true, InplaceAdd = true)]
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

        [DisplayName("TR_DS"), Column("TR_DS"), NotNull, LookupInclude]
        public Int32? TR_DS
        {
            get => fields.TR_DS[this];
            set => fields.TR_DS[this] = value;
        }

        [DisplayName("Currency Name"), Column("CurrencyID"), Size(100)]
        [LookupEditor(typeof(CurrencyLookup), AutoComplete = true, InplaceAdd = true)]
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

        [DisplayName("CUR_VL"), Column("CUR_VL"), DefaultValue(0)]
        public Double? CUR_VL
        {
            get => fields.CUR_VL[this];
            set => fields.CUR_VL[this] = value;
        }

        [DisplayName("DocNumber"), Column("Doc_Number"), DefaultValue(0)]
        public String Doc_Number
        {
            get => fields.Doc_Number[this];
            set => fields.Doc_Number[this] = value;
        }

        [DisplayName("Remark"), Column("RMRK")]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String RMRK
        {
            get => fields.RMRK[this];
            set => fields.RMRK[this] = value;
        }

        [Hidden]
        [DisplayName("Remark"), Column("RMRK2")]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String RMRK2
        {
            get => fields.RMRK2[this];
            set => fields.RMRK2[this] = value;
        }

        [DisplayName("RATE"), Column("RATE"), DefaultValue(1)]
        public Double? RATE
        {
            get => fields.RATE[this];
            set => fields.RATE[this] = value;
        }

        [DisplayName("Description"), Column("HDSCR_AR")]
        [TextAreaEditor(Cols = 1, Rows = 2)]
        public String HDSCR_AR
        {
            get => fields.HDSCR_AR[this];
            set => fields.HDSCR_AR[this] = value;
        }

        [DisplayName("HDSCR_EN"), Column("HDSCR_EN")]
        public String HDSCR_EN
        {
            get => fields.HDSCR_EN[this];
            set => fields.HDSCR_EN[this] = value;
        }

        [DisplayName("Store Name"), Column("Store_NAME")]
        public String Store_NAME
        {
            get => fields.Store_NAME[this];
            set => fields.Store_NAME[this] = value;
        }

        [DisplayName("GLHeaderID"), Column("GLHeaderID"), DefaultValue(0)]
        public Int64? GLHeaderID
        {
            get => fields.GLHeaderID[this];
            set => fields.GLHeaderID[this] = value;
        }

        [DisplayName("Cash-Bank"), Column("ACC_NO2"), Size(100), Required, LookupInclude]
        [LookupEditor(typeof(CashBankLookup), AutoComplete = true)]
        public String ACC_NO2
        {
            get => fields.ACC_NO2[this];
            set => fields.ACC_NO2[this] = value;
        }

        [DisplayName("Name"), Column("ACC_NAME2")]
        public String ACC_NAME2
        {
            get => fields.ACC_NAME2[this];
            set => fields.ACC_NAME2[this] = value;
        }

       

        [DisplayName("Flag"), DefaultValue(0)]
        public Int32? Flag
        {
            get => fields.Flag[this];
            set => fields.Flag[this] = value;
        }

        [DisplayName("Paid"), Column("Paid"), DefaultValue(0)]
        public Double? Paid
        {
            get => fields.Paid[this];
            set => fields.Paid[this] = value;
        }
        [DisplayName("Amount"), NotNull]
        public Double? TotalValue
        {
            get => fields.TotalValue[this];
            set => fields.TotalValue[this] = value;
        }

        [DisplayName("Total"), DefaultValue(0)]
        public Double? NetTotal
        {
            get => fields.NetTotal[this];
            set => fields.NetTotal[this] = value;
        }

        [DisplayName("Expenses Value"), DefaultValue(0)]
        public Double? EXPENSE_VL
        {
            get => fields.EXPENSE_VL[this];
            set => fields.EXPENSE_VL[this] = value;
        }


        [DisplayName("BALDB"), Column("BALDB"), DefaultValue(0)]
        public Double? BALDB
        {
            get => fields.BALDB[this];
            set => fields.BALDB[this] = value;
        }

        [DisplayName("BALCR"), Column("BALCR"), DefaultValue(0)]
        public Double? BALCR
        {
            get => fields.BALCR[this];
            set => fields.BALCR[this] = value;
        }

        [DisplayName("BAL"), Column("BAL"), DefaultValue(0)]
        public Double? BAL
        {
            get => fields.BAL[this];
            set => fields.BAL[this] = value;
        }

        [DisplayName("SupervisorID"), Column("SupervisorID"), Size(100)]
        public String SupervisorID
        {
            get => fields.SupervisorID[this];
            set => fields.SupervisorID[this] = value;
        }

        [DisplayName("Supervisor_NAME"), Column("Supervisor_NAME"), Size(255)]
        public String Supervisor_NAME
        {
            get => fields.Supervisor_NAME[this];
            set => fields.Supervisor_NAME[this] = value;
        }

        [DisplayName("Expenses"), Column("ExpensesID"), Size(100)]
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

        [DisplayName("CHK_NO"), Column("CHK_NO"), Size(100)]
        public String CHK_NO
        {
            get => fields.CHK_NO[this];
            set => fields.CHK_NO[this] = value;
        }

        [DisplayName("CHK_TYP"), Column("CHK_TYP"), DefaultValue(0)]
        public Int32? CHK_TYP
        {
            get => fields.CHK_TYP[this];
            set => fields.CHK_TYP[this] = value;
        }


        [DisplayName("CHKTYP_NAME"), Column("CHKTYP_NAME")]
        public String CHKTYP_NAME
        {
            get => fields.CHKTYP_NAME[this];
            set => fields.CHKTYP_NAME[this] = value;
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

        [DisplayName("AMT"), Column("AMT"), DefaultValue(0)]
        public Double? AMT
        {
            get => fields.AMT[this];
            set => fields.AMT[this] = value;
        }

        [DisplayName("Amt Paid"), Column("AMT_PAID"), DefaultValue(0)]
        public Double? AMT_PAID
        {
            get => fields.AMT_PAID[this];
            set => fields.AMT_PAID[this] = value;
        }

        [DisplayName("CHK_EXPENSVL"), Column("CHK_EXPENSVL"), DefaultValue(0)]
        public Double? CHK_EXPENSVL
        {
            get => fields.CHK_EXPENSVL[this];
            set => fields.CHK_EXPENSVL[this] = value;
        }

        [DisplayName("CHK_TotalValue"), Column("CHK_TotalValue"), DefaultValue(0)]
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

        [DisplayName("Notes_ACCNAME"), Column("Notes_ACCNAME")]
        public String Notes_ACCNAME
        {
            get => fields.Notes_ACCNAME[this];
            set => fields.Notes_ACCNAME[this] = value;
        }

        [DisplayName("Endorsed_ACCNO"), Column("Endorsed_ACCNO"), Size(100)]
        public String Endorsed_ACCNO
        {
            get => fields.Endorsed_ACCNO[this];
            set => fields.Endorsed_ACCNO[this] = value;
        }

        [DisplayName("Endorsed Name"), Column("Endorsed_NAME")]
        public String Endorsed_NAME
        {
            get => fields.Endorsed_NAME[this];
            set => fields.Endorsed_NAME[this] = value;
        }

        [DisplayName("Rep Name"), Column("REP_CD"), Size(100)]
        [LookupEditor(typeof(RepsLookup), AutoComplete = true, InplaceAdd = true)]
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

        [DisplayName("Rep Name2"), Column("REP_CD2"), Size(100)]
        [LookupEditor(typeof(RepsLookup), AutoComplete = true, InplaceAdd = true)]
        public String REP_CD2
        {
            get => fields.REP_CD2[this];
            set => fields.REP_CD2[this] = value;
        }

        [DisplayName("REP_NAME2"), Column("REP_NAME2")]
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

        [DisplayName("CST_NAME"), Column("CST_NAME"), Size(255)]
        public String CST_NAME
        {
            get => fields.CST_NAME[this];
            set => fields.CST_NAME[this] = value;
        }

        [DisplayName("SUM Name"), Column("SUM_CD"), Size(100)]
        [LookupEditor(typeof(SUMSLookup), AutoComplete = true, InplaceAdd = true)]
        public String SUM_CD
        {
            get => fields.SUM_CD[this];
            set => fields.SUM_CD[this] = value;
        }

        [DisplayName("Sum Name"), Column("SUM_NAME"), Size(255)]
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

        [DisplayName("Ssum Name"), Column("SSUM_NAME"), Size(255)]
        public String SSUM_NAME
        {
            get => fields.SSUM_NAME[this];
            set => fields.SSUM_NAME[this] = value;
        }

        [DisplayName("PTR_NO"), Column("PTR_NO"), Size(255), DefaultValue(0)]
        public Int32? PTR_NO
        {
            get => fields.PTR_NO[this];
            set => fields.PTR_NO[this] = value;
        }
        [DisplayName("PTR_TY"), Column("PTR_TY"), Size(255), DefaultValue(0)]
        public Int32? PTR_TY
        {
            get => fields.PTR_TY[this];
            set => fields.PTR_TY[this] = value;
        }

        [DisplayName("PStoreID"), Column("PStoreID"), Size(255), DefaultValue(0)]
        public String PStoreID
        {
            get => fields.PStoreID[this];
            set => fields.PStoreID[this] = value;
        }

        [DisplayName("Close Status"), DefaultValue(0)]
        public Int32? CloseStatus
        {
            get => fields.CloseStatus[this];
            set => fields.CloseStatus[this] = value;
        }

        [DisplayName("GlPosted"), DefaultValue(0)]
        public Boolean? GlPosted
        {
            get => fields.GlPosted[this];
            set => fields.GlPosted[this] = value;
        }


        [DisplayName("Status"), NotNull, DefaultValue(1)]
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

        [DisplayName("Update Date"), DefaultValue("now")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        public ExpensesRow(): base()
        {

        }

        public ExpensesRow(RowFields fields): base(fields)
        {

        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field HeaderID;
            public Int64Field ASTRHID;
            public Int32Field TR_TY;
            public Int32Field TR_NO;
            public StringField StoreID;
            public DateTimeField TR_DT;
            public StringField TRTY_NAME;
            public StringField ACC_NO;
            public StringField ACC_NAME;
            public StringField CashBoxID;
            public StringField Cash_NAME;
            public Int32Field TR_DS;
            public StringField CurrencyID;
            public StringField Currency_NAME;
            public DoubleField CUR_VL;
            public DoubleField RATE;
            public StringField Store_NAME;
            public StringField Doc_Number;
            public Int64Field GLHeaderID;
            public StringField RMRK;
            public StringField RMRK2;
            public StringField HDSCR_AR;
            public StringField HDSCR_EN;
            public StringField ACC_NO2;
            public StringField ACC_NAME2;
            public StringField ACC_NO3;
            public StringField ACC_NAME3;
            public Int32Field Flag;
            public DoubleField Paid;
            public DoubleField TotalValue;
            public DoubleField NetTotal;
            public DoubleField EXPENSE_VL;
            public DoubleField BALDB;
            public DoubleField BALCR;
            public DoubleField BAL;
            public StringField SupervisorID;
            public StringField Supervisor_NAME;
            public StringField ExpensesID;
            public StringField ExpensesName;
            public StringField CHK_NO;
            public Int32Field CHK_TYP;
            public StringField CHKTYP_NAME;
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
            public Int32Field PTR_NO;
            public Int32Field PTR_TY;
            public StringField PStoreID;
            public Int32Field CloseStatus;
            public BooleanField GlPosted;
            public Int32Field Status;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
        }
    }
}
