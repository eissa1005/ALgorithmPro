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
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ASCHKS]")]
    [DisplayName("Checks"), InstanceName("Checks")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("ALgorithm.ASCHKS")]
    public sealed class ChecksRow : Row<ChecksRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int32? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("Check Type"), Column("CHK_TYP"), PrimaryKey,DefaultValue(CheckType.ReceiveChecks)]
        public CheckType? CHK_TYP
        {
            get => (CheckType?)fields.CHK_TYP[this];
            set => fields.CHK_TYP[this] = (Int32?)value;
        }

        [DisplayName("Check Number"), Column("CHK_NO"), Size(50), PrimaryKey, QuickSearch, NameProperty,NotNull]
        public String CHK_NO
        {
            get => fields.CHK_NO[this];
            set => fields.CHK_NO[this] = value;
        }

        [DisplayName("Doc Type"), Column("DOC_TYP"), Size(100), DefaultValue(DocType.Checks)]
        public DocType? DOC_TYP
        {
            get => (DocType?)fields.DOC_TYP[this];
            set => fields.DOC_TYP[this] = (Int32?)value;
        }

        [DisplayName("Store Name"), Column("StoreID"), Size(8)]
        [LookupEditor(typeof(StoreLookup),AutoComplete = true)]
        public String StoreID
        {
            get => fields.StoreID[this];
            set => fields.StoreID[this] = value;
        }
        
        [DisplayName("TR_TY"), Column("TR_TY"), DefaultValue(701)]
        [LookupEditor(typeof(CheckTRTYLookup), AutoComplete = true)]
        public Int32? TR_TY
        {
            get => fields.TR_TY[this];
            set => fields.TR_TY[this] = value;
        }
        
        [DisplayName("TRTY Name"), Column("TRTY_NAME"), Size(50)]
        public String TRTY_NAME
        {
            get => fields.TRTY_NAME[this];
            set => fields.TRTY_NAME[this] = value;
        }

        [DisplayName("TR NO"), Column("TR_NO"), DefaultValue(1)]
        public Int32? TR_NO
        {
            get => fields.TR_NO[this];
            set => fields.TR_NO[this] = value;
        }

        [DisplayName("LN NO"), Column("LN_NO"), DefaultValue(1)]
        public Int32? LN_NO
        {
            get => fields.LN_NO[this];
            set => fields.LN_NO[this] = value;
        }

        [DisplayName("CRDB"), Column("CRDB"),DefaultValue(0)]
        public Int32? CRDB
        {
            get => fields.CRDB[this];
            set => fields.CRDB[this] = value;
        }
        
        [DisplayName("Store_NAME"), Column("Store_NAME"), Size(150)]
        public String Store_NAME
        {
            get => fields.Store_NAME[this];
            set => fields.Store_NAME[this] = value;
        }

        [DisplayName("Account Name"), Column("ACC_NO"), Size(15),NotNull]
        [LookupEditor(typeof(AccountLookup),AutoComplete = true)]
        public String ACC_NO
        {
            get => fields.ACC_NO[this];
            set => fields.ACC_NO[this] = value;
        }

        [DisplayName("Account Name"), Column("ACC_NAME"), Size(150)]
        public String ACC_NAME
        {
            get => fields.ACC_NAME[this];
            set => fields.ACC_NAME[this] = value;
        }

        [DisplayName("Return AccountNo"), Column("RPACC_NO"), Size(15)]
        [LookupEditor(typeof(AccountLookup),AutoComplete = true)]
        public String RPACC_NO
        {
            get => fields.RPACC_NO[this];
            set => fields.RPACC_NO[this] = value;
        }

        [DisplayName("Rpacc Name"), Column("RPACC_NAME"), Size(150)]
        public String RPACC_NAME
        {
            get => fields.RPACC_NAME[this];
            set => fields.RPACC_NAME[this] = value;
        }

        [DisplayName("Notes AccountName"), Column("Notes_ACCNO"), Size(15)]
        [LookupEditor(typeof(BankLookup),AutoComplete = true)]
        public String Notes_ACCNO
        {
            get => fields.Notes_ACCNO[this];
            set => fields.Notes_ACCNO[this] = value;
        }

        
        [DisplayName("Notes ACCName"), Column("Notes_ACCNAME"), Size(150)]
        public String Notes_ACCNAME
        {
            get => fields.Notes_ACCNAME[this];
            set => fields.Notes_ACCNAME[this] = value;
        }

        [DisplayName("Account Endorsed"), Column("Endorsed_NO"), Size(15)]
        [LookupEditor(typeof(AccountLookup), AutoComplete = true)]
        public String Endorsed_NO
        {
            get => fields.Endorsed_NO[this];
            set => fields.Endorsed_NO[this] = value;
        }

        [DisplayName("Endorsed Name"), Column("Endorsed_NAME"), Size(150)]
        public String Endorsed_NAME
        {
            get => fields.Endorsed_NAME[this];
            set => fields.Endorsed_NAME[this] = value;
        }

        [DisplayName("Account CashBox"), Column("CashBoxID"), Size(15)]
        [LookupEditor(typeof(CashLookup), AutoComplete = true)]
        public String CashBoxID
        {
            get => fields.CashBoxID[this];
            set => fields.CashBoxID[this] = value;
        }
       
        [DisplayName("Cash Name"), Column("Cash_NAME"), Size(150)]
        public String Cash_NAME
        {
            get => fields.Cash_NAME[this];
            set => fields.Cash_NAME[this] = value;
        }

        [DisplayName("Amount"), Column("AMT"), NotNull]
        [AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        public Double? AMT
        {
            get => fields.AMT[this];
            set => fields.AMT[this] = value;
        }

        [DisplayName("Amt Paid"), Column("AMT_PAID"), DefaultValue(0)]
        [AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        public Double? AMT_PAID
        {
            get => fields.AMT_PAID[this];
            set => fields.AMT_PAID[this] = value;
        }

        [DisplayName("Total Value"), DefaultValue(0)]
        [AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        public Double? TotalValue
        {
            get => fields.TotalValue[this];
            set => fields.TotalValue[this] = value;
        }

        [DisplayName("Currency Name"), Column("CurrencyID"), Size(4),DefaultValue(1)]
        [LookupEditor(typeof(CurrencyLookup),AutoComplete = true)]
        public String CurrencyID
        {
            get => fields.CurrencyID[this];
            set => fields.CurrencyID[this] = value;
        }
        [DisplayName("Currency Name"), Column("Currency_NAME"), Size(255)]
        public String Currency_NAME
        {
            get => fields.Currency_NAME[this];
            set => fields.Currency_NAME[this] = value;
        }

        [DisplayName("Currency Value"), Column("CUR_VL"), DefaultValue(0)]
        [AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        public Double? CUR_VL
        {
            get => fields.CUR_VL[this];
            set => fields.CUR_VL[this] = value;
        }

        [DisplayName("RATE"), Column("RATE"), ReadOnly(true),DefaultValue(1)]
        public Double? RATE
        {
            get => fields.RATE[this];
            set => fields.RATE[this] = value;
        }

        [DisplayName("ExpenesValue"), Column("ExpenseValue"), DefaultValue(0)]
        [DisplayFormat("#,##0,00"),MinSelectLevel(SelectLevel.List)]
        public Double? ExpenseValue
        {
            get => fields.ExpenseValue[this];
            set => fields.ExpenseValue[this] = value;
        }

        [DisplayName("Issue Date"), Column("ISU_DT"),DefaultValue("now")]
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

        [DisplayName("Bank Name"), Column("BNKID"), Size(40)]
        [LookupEditor(typeof(BankLookup), AutoComplete = true)]
        public String BNKID
        {
            get => fields.BNKID[this];
            set => fields.BNKID[this] = value;
        }

        [DisplayName("Bank Name"), Column("BNK_NAME"), Size(100)]
        public String BNK_NAME
        {
            get => fields.BNK_NAME[this];
            set => fields.BNK_NAME[this] = value;
        }

        [DisplayName("Credit Bank"), Column("CBNKID"), Size(40)]
        [LookupEditor(typeof(BankLookup),AutoComplete = true)]
        public String CBNKID
        {
            get => fields.CBNKID[this];
            set => fields.CBNKID[this] = value;
        }

        [DisplayName("Credit Bank"), Column("CBNK_NAME"), Size(100)]
        public String CBNK_NAME
        {
            get => fields.CBNK_NAME[this];
            set => fields.CBNK_NAME[this] = value;
        }

        [DisplayName("File NO"), Column("File_NO"), Size(15)]
        public String File_NO
        {
            get => fields.File_NO[this];
            set => fields.File_NO[this] = value;
        }

        [DisplayName("Last Account"), Column("LAST_ACC"), Size(15)]
        public String LAST_ACC
        {
            get => fields.LAST_ACC[this];
            set => fields.LAST_ACC[this] = value;
        }

        [DisplayName("STAT"), Column("STAT"), DefaultValue(CheckTRTY.Deposit)]
        public CheckTRTY? STAT
        {
            get => (CheckTRTY?)fields.STAT[this];
            set => fields.STAT[this] = (Int32?)value;
        }

        [DisplayName("Stat Date"), Column("STAT_DT"),DefaultValue("now")]
        public DateTime? STAT_DT
        {
            get => fields.STAT_DT[this];
            set => fields.STAT_DT[this] = value;
        }

        [DisplayName("Remark"), Column("RMRK"), Size(255)]
        public String RMRK
        {
            get => fields.RMRK[this];
            set => fields.RMRK[this] = value;
        }

        [DisplayName("Depit Bank"), Column("DEPT_BNKID"), Size(40)]
        [LookupEditor(typeof(BankLookup), AutoComplete = true)]
        public String DEPT_BNKID
        {
            get => fields.DEPT_BNKID[this];
            set => fields.DEPT_BNKID[this] = value;
        }

        [DisplayName("Depit BankName"), Column("DEPT_BNKNM"), Size(100)]
        public String DEPT_BNKNM
        {
            get => fields.DEPT_BNKNM[this];
            set => fields.DEPT_BNKNM[this] = value;
        }

        [DisplayName("By Hand"), Size(30)]
        public String ByHand
        {
            get => fields.ByHand[this];
            set => fields.ByHand[this] = value;
        }

        [DisplayName("Trans Account"), Column("TRNSACC"), Size(15)]
        public String TRNSACC
        {
            get => fields.TRNSACC[this];
            set => fields.TRNSACC[this] = value;
        }

        [DisplayName("Rep Name"), Column("Rep_CD"), Size(8)]
        [LookupEditor(typeof(RepsLookup),AutoComplete = true)]
        public String Rep_CD
        {
            get => fields.Rep_CD[this];
            set => fields.Rep_CD[this] = value;
        }

        [DisplayName("Rep Name"), Column("Rep_NAME"), Size(100)]
        public String Rep_NAME
        {
            get => fields.Rep_NAME[this];
            set => fields.Rep_NAME[this] = value;
        }

        [DisplayName("Rep Name2"), Column("Rep_CD2"), Size(8)]
        [LookupEditor(typeof(RepsLookup), AutoComplete = true)]
        public String Rep_CD2
        {
            get => fields.Rep_CD2[this];
            set => fields.Rep_CD2[this] = value;
        }

        [DisplayName("Rep Name2"), Column("Rep_NAME2"), Size(100)]
        public String Rep_NAME2
        {
            get => fields.Rep_NAME2[this];
            set => fields.Rep_NAME2[this] = value;
        }

        [DisplayName("POSTED"), Column("POSTED"), NotNull]
        public Boolean? POSTED
        {
            get => fields.POSTED[this];
            set => fields.POSTED[this] = value;
        }

        [DisplayName("Sum Name"), Column("SUM_CD"), Size(15)]
        [LookupEditor(typeof(SUMSLookup), AutoComplete = true)]
        public String SUM_CD
        {
            get => fields.SUM_CD[this];
            set => fields.SUM_CD[this] = value;
        }

        [DisplayName("Sum Name"), Column("SUM_NAME"), Size(100)]
        public String SUM_NAME
        {
            get => fields.SUM_NAME[this];
            set => fields.SUM_NAME[this] = value;
        }

        [DisplayName("Journal Account"), Column("GL_NO"), DefaultValue(0)]
        public Int32? GL_NO
        {
            get => fields.GL_NO[this];
            set => fields.GL_NO[this] = value;
        }

        [DisplayName("Journal Type"), Column("GL_TY"), DefaultValue(0)]
        public Int32? GL_TY
        {
            get => fields.GL_TY[this];
            set => fields.GL_TY[this] = value;
        }

        [DisplayName("DOC Number"), Column("DOC_NO"), Size(15)]
        public String DOC_NO
        {
            get => fields.DOC_NO[this];
            set => fields.DOC_NO[this] = value;
        }

        [DisplayName("RMRK2"), Column("RMRK2"), Size(150)]
        public String RMRK2
        {
            get => fields.RMRK2[this];
            set => fields.RMRK2[this] = value;
        }

        [DisplayName("Status"), DefaultValue(1)]
        public Status? Status
        {
            get => (Status?)fields.Status[this];
            set => fields.Status[this] = (Int32?)value;
        }

        [DisplayName("EnteredBy"), Size(30)]
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

        [DisplayName("UpdatedBy"), Size(30)]
        public String UpdatedBy
        {
            get => fields.UpdatedBy[this];
            set => fields.UpdatedBy[this] = value;
        }

        [DisplayName("UpdateDate"),DefaultValue("now")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        public ChecksRow()
            : base()
        {
        }

        public ChecksRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public Int32Field CHK_TYP;
            public StringField CHK_NO;
            public Int32Field DOC_TYP;
            public StringField StoreID;
            public Int32Field TR_TY;
            public StringField TRTY_NAME;
            public Int32Field TR_NO;
            public Int32Field LN_NO;
            public Int32Field CRDB;
            public StringField Store_NAME;
            public StringField ACC_NO;
            public StringField ACC_NAME;
            public StringField RPACC_NO;
            public StringField RPACC_NAME;
            public StringField Notes_ACCNO;
            public StringField Notes_ACCNAME;
            public StringField Endorsed_NO;
            public StringField Endorsed_NAME;
            public StringField CashBoxID;
            public StringField Cash_NAME;
            public DoubleField AMT;
            public DoubleField AMT_PAID;
            public DoubleField TotalValue;
            public StringField CurrencyID;
            public StringField Currency_NAME;
            public DoubleField CUR_VL;
            public DoubleField RATE;
            public DoubleField ExpenseValue;
            public DateTimeField ISU_DT;
            public DateTimeField DUE_DT;
            public StringField BNKID;
            public StringField BNK_NAME;
            public StringField CBNKID;
            public StringField CBNK_NAME;
            public StringField File_NO;
            public StringField LAST_ACC;
            public Int32Field STAT;
            public DateTimeField STAT_DT;
            public StringField RMRK;
            public StringField DEPT_BNKID;
            public StringField DEPT_BNKNM;
            public StringField ByHand;
            public StringField TRNSACC;
            public StringField Rep_CD;
            public StringField Rep_NAME;
            public StringField Rep_CD2;
            public StringField Rep_NAME2;
            public BooleanField POSTED;
            public StringField SUM_CD;
            public StringField SUM_NAME;
            public Int32Field GL_NO;
            public Int32Field GL_TY;
            public StringField DOC_NO;
            public StringField RMRK2;
            public Int32Field Status;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
        }
    }
}
