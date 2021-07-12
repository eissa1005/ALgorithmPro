using ALgorithmPro.Lookup;
using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.Web.Modules.Lookup;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ASCHKTR]")]
    [DisplayName("Check Tr"), InstanceName("Check Tr")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("ALgorithm.ASCHKTR")]
    public sealed class CheckTRRow : Row<CheckTRRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int32? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("Check Type"), Column("CHK_TYP"), PrimaryKey, DefaultValue(CheckType.ReceiveChecks),NotNull]
        public CheckType? CHK_TYP
        {
            get => (CheckType?)fields.CHK_TYP[this];
            set => fields.CHK_TYP[this] = (Int32?)value;
        }

        [DisplayName("Check Number"), Column("CHK_NO"), Size(150), PrimaryKey, QuickSearch, NameProperty, NotNull]
        public String CHK_NO
        {
            get => fields.CHK_NO[this];
            set => fields.CHK_NO[this] = value;
        }

        [DisplayName("TRTY"), Column("TR_TY"), PrimaryKey, NotNull]
        [LookupEditor(typeof(CheckTRTYLookup),AutoComplete = true)]
        public Int32? TR_TY
        {
            get => fields.TR_TY[this];
            set => fields.TR_TY[this] = value;
        }

        [DisplayName("SN Number"), Column("TR_NO"), PrimaryKey]
        public Int32? TR_NO
        {
            get => fields.TR_NO[this];
            set => fields.TR_NO[this] = value;
        }

        [DisplayName("LN_NO"), Column("LN_NO"), PrimaryKey]
        public Int32? LN_NO
        {
            get => fields.LN_NO[this];
            set => fields.LN_NO[this] = value;
        }

        [DisplayName("Doc Type"), Column("Doc_TYP"), NotNull]
        public DocType? Doc_TYP
        {
            get => (DocType?)fields.Doc_TYP[this];
            set => fields.Doc_TYP[this] = (Int32?)value;
        }

        [DisplayName("STAT"), Column("STAT"), NotNull]
        [LookupEditor(typeof(CheckTRTYLookup), AutoComplete = true)]
        public Int32? STAT
        {
            get => fields.STAT[this];
            set => fields.STAT[this] = value;
        }

        [DisplayName("Store Name"), Column("StoreID"), Size(100)]
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

        [DisplayName("TRTY NAME"), Column("TRTY_NAME")]
        public String TRTY_NAME
        {
            get => fields.TRTY_NAME[this];
            set => fields.TRTY_NAME[this] = value;
        }

        [DisplayName("Date"), Column("TR_DT"),DefaultValue("now")]
        public DateTime? TR_DT
        {
            get => fields.TR_DT[this];
            set => fields.TR_DT[this] = value;
        }

        [DisplayName("Account Name"), Column("ACC_NO"), Size(100)]
        [LookupEditor(typeof(AccountLookup), AutoComplete = true)]
        public String ACC_NO
        {
            get => fields.ACC_NO[this];
            set => fields.ACC_NO[this] = value;
        }

        [Hidden]
        [DisplayName("Account Name"), Column("ACC_NAME")]
        public String ACC_NAME
        {
            get => fields.ACC_NAME[this];
            set => fields.ACC_NAME[this] = value;
        }

        [DisplayName("Account Name2"), Column("ACC_NO2"), Size(100)]
        [LookupEditor(typeof(AccountLookup), AutoComplete = true)]
        public String ACC_NO2
        {
            get => fields.ACC_NO2[this];
            set => fields.ACC_NO2[this] = value;
        }

        [Hidden]
        [DisplayName("Account Name2"), Column("ACC_NAME2")]
        public String ACC_NAME2
        {
            get => fields.ACC_NAME2[this];
            set => fields.ACC_NAME2[this] = value;
        }

        [DisplayName("Bank Name"), Column("BNKID"), Size(100)]
        [LookupEditor(typeof(BankLookup), AutoComplete = true)]
        public String BNKID
        {
            get => fields.BNKID[this];
            set => fields.BNKID[this] = value;
        }

        [Hidden]
        [DisplayName("Bank Name"), Column("BNK_NAME")]
        [LookupEditor(typeof(BankLookup), AutoComplete = true)]
        public String BNK_NAME
        {
            get => fields.BNK_NAME[this];
            set => fields.BNK_NAME[this] = value;
        }

        [DisplayName("Dept Name"), Column("DEPT_BNKID"), Size(100)]
        [LookupEditor(typeof(BankLookup),AutoComplete = true)]
        public String DEPT_BNKID
        {
            get => fields.DEPT_BNKID[this];
            set => fields.DEPT_BNKID[this] = value;
        }
        [Hidden]
        [DisplayName("Dept Bank"), Column("DEPT_BNKNM")]
        public String DEPT_BNKNM
        {
            get => fields.DEPT_BNKNM[this];
            set => fields.DEPT_BNKNM[this] = value;
        }

        [DisplayName("Credit Bank"), Column("CBNKID"), Size(100)]
        [LookupEditor(typeof(BankLookup), AutoComplete = true)]
        public String CBNKID
        {
            get => fields.CBNKID[this];
            set => fields.CBNKID[this] = value;
        }

        [Hidden]
        [DisplayName("Credit Name"), Column("CBNK_NAME")]
        public String CBNK_NAME
        {
            get => fields.CBNK_NAME[this];
            set => fields.CBNK_NAME[this] = value;
        }

        [DisplayName("Return Account"), Column("RPACC_NO"), Size(100)]
        [LookupEditor(typeof(AccountLookup), AutoComplete = true)]
        public String RPACC_NO
        {
            get => fields.RPACC_NO[this];
            set => fields.RPACC_NO[this] = value;
        }

        [Hidden]
        [DisplayName("Return NAME"), Column("RPACC_NAME")]
        public String RPACC_NAME
        {
            get => fields.RPACC_NAME[this];
            set => fields.RPACC_NAME[this] = value;
        }

        [DisplayName("Notes AccountName"), Column("Notes_ACCID"), Size(15)]
        [LookupEditor(typeof(BankLookup),AutoComplete = true)]
        public String Notes_ACCID
        {
            get => fields.Notes_ACCID[this];
            set => fields.Notes_ACCID[this] = value;
        }
        [Hidden]
        [DisplayName("Notes Accname"), Column("Notes_ACCNAME")]
        public String Notes_ACCNAME
        {
            get => fields.Notes_ACCNAME[this];
            set => fields.Notes_ACCNAME[this] = value;
        }

        [DisplayName("Endorsed Name"), Column("Endorsed_NO"), Size(100)]
        [LookupEditor(typeof(AccountLookup), AutoComplete = true)]
        public String Endorsed_NO
        {
            get => fields.Endorsed_NO[this];
            set => fields.Endorsed_NO[this] = value;
        }
        [Hidden]
        [DisplayName("Endorsed Name"), Column("Endorsed_NAME")]
        public String Endorsed_NAME
        {
            get => fields.Endorsed_NAME[this];
            set => fields.Endorsed_NAME[this] = value;
        }

        [DisplayName("CashBox Name"), Column("CashBoxID"), Size(100)]
        [LookupEditor(typeof(CashLookup), AutoComplete = true)]
        public String CashBoxID
        {
            get => fields.CashBoxID[this];
            set => fields.CashBoxID[this] = value;
        }
        [Hidden]
        [DisplayName("Cash Name"), Column("Cash_NAME")]
        public String Cash_NAME
        {
            get => fields.Cash_NAME[this];
            set => fields.Cash_NAME[this] = value;
        }

        [DisplayName("STAT Date"), Column("STAT_DT"),DefaultValue("now")]
        public DateTime? STAT_DT
        {
            get => fields.STAT_DT[this];
            set => fields.STAT_DT[this] = value;
        }

        [DisplayName("Isue Date"), Column("ISU_DT"),DefaultValue("now")]
        public DateTime? ISU_DT
        {
            get => fields.ISU_DT[this];
            set => fields.ISU_DT[this] = value;
        }

        [DisplayName("Due Date"), Column("DUE_DT"),DefaultValue("now")]
        public DateTime? DUE_DT
        {
            get => fields.DUE_DT[this];
            set => fields.DUE_DT[this] = value;
        }

        [DisplayName("Amount"), Column("AMT"), NotNull]
        public Double? AMT
        {
            get => fields.AMT[this];
            set => fields.AMT[this] = value;
        }

        [DisplayName("Amount Paid"), Column("AMT_PAID"), DefaultValue(0)]
        public Double? AMT_PAID
        {
            get => fields.AMT_PAID[this];
            set => fields.AMT_PAID[this] = value;
        }

        [DisplayName("Total Value"), DefaultValue(0),ReadOnly(true)]
        public Double? TotalValue
        {
            get => fields.TotalValue[this];
            set => fields.TotalValue[this] = value;
        }

        [DisplayName("ExpenesValue"), Column("ExpenseValue"), DefaultValue(0)]
        public Double? ExpenseValue
        {
            get => fields.ExpenseValue[this];
            set => fields.ExpenseValue[this] = value;
        }

        [DisplayName("Diff Value"), Column("DIFF_VL"), DefaultValue(0)]
        public Double? DIFF_VL
        {
            get => fields.DIFF_VL[this];
            set => fields.DIFF_VL[this] = value;
        }

        [DisplayName("Remark"), Column("RMRK")]
        [TextAreaEditor(Cols =1,Rows =3)]
        public String RMRK
        {
            get => fields.RMRK[this];
            set => fields.RMRK[this] = value;
        }

        [DisplayName("Description"), Column("DSCR_AR")]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String DSCR_AR
        {
            get => fields.DSCR_AR[this];
            set => fields.DSCR_AR[this] = value;
        }

        [DisplayName("POSTED"), Column("POSTED"), DefaultValue(0)]
        public Boolean? POSTED
        {
            get => fields.POSTED[this];
            set => fields.POSTED[this] = value;
        }
        [Hidden]
        [DisplayName("SER_NO"), Column("SER_NO"), DefaultValue(0)]
        public Int32? SER_NO
        {
            get => fields.SER_NO[this];
            set => fields.SER_NO[this] = value;
        }
        [Hidden]
        [DisplayName("CRDB"), Column("CRDB"), DefaultValue(0)]
        [DisplayFormat("#,##0,00"), MinSelectLevel(SelectLevel.List)]
        public Int32? CRDB
        {
            get => fields.CRDB[this];
            set => fields.CRDB[this] = value;
        }
        [Hidden]
        [DisplayName("CHKPOST"), Column("CHKPOST"), DefaultValue(0)]
        public Boolean? CHKPOST
        {
            get => fields.CHKPOST[this];
            set => fields.CHKPOST[this] = value;
        }

        [DisplayName("File Number"), Column("File_NO"), Size(100),DefaultValue(0)]
        public String File_NO
        {
            get => fields.File_NO[this];
            set => fields.File_NO[this] = value;
        }

        [DisplayName("PAY Type"), Column("PAY_TYPE"), DefaultValue(0)]
        public Int32? PAY_TYPE
        {
            get => fields.PAY_TYPE[this];
            set => fields.PAY_TYPE[this] = value;
        }

        [DisplayName("CurrencyValue"), Column("CUR_VL"), DefaultValue(0)]
        [DisplayFormat("#,##0,00"), MinSelectLevel(SelectLevel.List)]
        public Double? CUR_VL
        {
            get => fields.CUR_VL[this];
            set => fields.CUR_VL[this] = value;
        }

        [DisplayName("Rep Name"), Column("REP_CD"), Size(100)]
        [LookupEditor(typeof(RepsLookup), AutoComplete = true)]
        public String REP_CD
        {
            get => fields.REP_CD[this];
            set => fields.REP_CD[this] = value;
        }

        [DisplayName("Rep Name"), Column("REP_NAME"), Size(255)]
        public String REP_NAME
        {
            get => fields.REP_NAME[this];
            set => fields.REP_NAME[this] = value;
        }

        [DisplayName("Currency Name"), Column("CurrencyID"), Size(100)]
        [LookupEditor(typeof(CurrencyLookup), AutoComplete = true)]
        public String CurrencyID
        {
            get => fields.CurrencyID[this];
            set => fields.CurrencyID[this] = value;
        }
        [HalfWidth]
        [DisplayName("Currency Name"), Column("Currency_NAME"), Size(150)]
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

        [DisplayName("Account Name3"), Column("ACC_NO3"), Size(50)]
        [LookupEditor(typeof(AccountLookup),AutoComplete =true)]
        public String ACC_NO3
        {
            get => fields.ACC_NO3[this];
            set => fields.ACC_NO3[this] = value;
        }
        [Hidden]
        [DisplayName("Acc Name3"), Column("ACC_NAME3")]
        public String ACC_NAME3
        {
            get => fields.ACC_NAME3[this];
            set => fields.ACC_NAME3[this] = value;
        }

        [DisplayName("Account Name4"), Column("ACC_NO4"), Size(50)]
        [LookupEditor(typeof(AccountLookup), AutoComplete = true)]
        public String ACC_NO4
        {
            get => fields.ACC_NO4[this];
            set => fields.ACC_NO4[this] = value;
        }
        [Hidden]
        [DisplayName("Acc Name4"), Column("ACC_NAME4")]
        public String ACC_NAME4
        {
            get => fields.ACC_NAME4[this];
            set => fields.ACC_NAME4[this] = value;
        }

        [DisplayName("EnteredBy")]
        public String EnteredBy
        {
            get => fields.EnteredBy[this];
            set => fields.EnteredBy[this] = value;
        }

        [DisplayName("EntryDate"),DefaultValue("now")]
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

        public CheckTRRow()
            : base()
        {
        }

        public CheckTRRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public Int32Field CHK_TYP;
            public StringField CHK_NO;
            public Int32Field TR_TY;
            public Int32Field TR_NO;
            public Int32Field LN_NO;
            public Int32Field Doc_TYP;
            public Int32Field STAT;
            public StringField StoreID;
            public StringField Store_NAME;
            public StringField TRTY_NAME;
            public DateTimeField TR_DT;
            public StringField ACC_NO;
            public StringField ACC_NAME;
            public StringField ACC_NO2;
            public StringField ACC_NAME2;
            public StringField BNKID;
            public StringField BNK_NAME;
            public StringField DEPT_BNKID;
            public StringField DEPT_BNKNM;
            public StringField CBNKID;
            public StringField CBNK_NAME;
            public StringField RPACC_NO;
            public StringField RPACC_NAME;
            public StringField Notes_ACCID;
            public StringField Notes_ACCNAME;
            public StringField Endorsed_NO;
            public StringField Endorsed_NAME;
            public StringField CashBoxID;
            public StringField Cash_NAME;
            public DateTimeField STAT_DT;
            public DateTimeField ISU_DT;
            public DateTimeField DUE_DT;
            public DoubleField AMT;
            public DoubleField AMT_PAID;
            public DoubleField TotalValue;
            public DoubleField ExpenseValue;
            public DoubleField DIFF_VL;
            public StringField RMRK;
            public StringField DSCR_AR;
            public BooleanField POSTED;
            public Int32Field SER_NO;
            public Int32Field CRDB;
            public BooleanField CHKPOST;
            public StringField File_NO;
            public Int32Field PAY_TYPE;
            public DoubleField CUR_VL;
            public StringField REP_CD;
            public StringField REP_NAME;
            public StringField CurrencyID;
            public StringField Currency_NAME;
            public DoubleField RATE;
            public StringField ACC_NO3;
            public StringField ACC_NAME3;
            public StringField ACC_NO4;
            public StringField ACC_NAME4;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
        }
    }
}
