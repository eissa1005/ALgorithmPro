using ALgorithmPro.Lookup;
using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.Web.Modules.Common.Common;
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
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ASCST]")]
    [DisplayName("Ascst"), InstanceName("Ascst")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("ALgorithm.ASCST")]

    public sealed class ASCSTRow : Row<ASCSTRow.RowFields>, IIdRow, INameRow
    {
        [Hidden]
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int32? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [HalfWidth]
        [DisplayName("Cost Code"), Column("CST_CD"), Size(8), PrimaryKey, QuickSearch, NameProperty]
        public String CST_CD
        {
            get => fields.CST_CD[this];
            set => fields.CST_CD[this] = value;
        }
        
        [HalfWidth]
        [DisplayName("Name Arabic"), Column("CST_NM_AR"), Size(30), QuickSearch]
        public String CST_NM_AR
        {
            get => fields.CST_NM_AR[this];
            set => fields.CST_NM_AR[this] = value;
        }
        
         [HalfWidth]
        [DisplayName("Name English"), Column("CST_NM_EN"), Size(30)]
        public String CST_NM_EN
        {
            get => fields.CST_NM_EN[this];
            set => fields.CST_NM_EN[this] = value;
        }
        
         [HalfWidth]
        [DisplayName("Parent Name"), Column("MCST_CD"), Size(8)]
        public String MCST_CD
        {
            get => fields.MCST_CD[this];
            set => fields.MCST_CD[this] = value;
        }
        
         [HalfWidth]
        [DisplayName("Category"), Column("CST_CTG"), Size(50)]
        public String CST_CTG
        {
            get => fields.CST_CTG[this];
            set => fields.CST_CTG[this] = value;
        }
        
         [HalfWidth]
        [DisplayName("Cost Type"), Column("CST_TY")]
        public Int16? CST_TY
        {
            get => fields.CST_TY[this];
            set => fields.CST_TY[this] = value;
        }
        
         [HalfWidth]
        [DisplayName("SUM Name"), Column("SUM_CD"), Size(15)]
        [LookupEditor(typeof(SUMSLookup), AutoComplete = true)]
        public String SUM_CD
        {
            get => fields.SUM_CD[this];
            set => fields.SUM_CD[this] = value;
        }

        [HalfWidth]
        [DisplayName("SSUM Name"), Column("SSUM_CD"), Size(50)]
        [LookupEditor(typeof(SSUMSLookup), AutoComplete = true)]
        public String SSUM_CD
        {
            get => fields.SSUM_CD[this];
            set => fields.SSUM_CD[this] = value;
        }
        
        [HalfWidth]
        [DisplayName("ACC Name"), Column("ACC_NO"), Size(15)]
        [LookupEditor(typeof(AccountLookup),AutoComplete = true)]
        public String ACC_NO
        {
            get => fields.ACC_NO[this];
            set => fields.ACC_NO[this] = value;
        }
        
        [HalfWidth]
        [DisplayName("ACCName"), Column("ACC_NM_AR"), Size(50)]
        public String ACC_NM_AR
        {
            get => fields.ACC_NM_AR[this];
            set => fields.ACC_NM_AR[this] = value;
        }
        
        [HalfWidth]
        [DisplayName("ACCName English"), Column("ACC_NM_EN"), Size(50)]
        public String ACC_NM_EN
        {
            get => fields.ACC_NM_EN[this];
            set => fields.ACC_NM_EN[this] = value;
        }

        [HalfWidth]
        [DisplayName("CSTRAT"), Column("CSTRAT")]
        public Single? CSTRAT
        {
            get => fields.CSTRAT[this];
            set => fields.CSTRAT[this] = value;
        }

        [Hidden]
        [DisplayName("DateIN"), Column("DATE_IN")]
        public DateTime? DATE_IN
        {
            get => fields.DATE_IN[this];
            set => fields.DATE_IN[this] = value;
        }

        [HalfWidth]
        [DisplayName("Phone"), Size(30)]
        public String Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [HalfWidth]
        [DisplayName("Mobile"), Size(30)]
        public String Mobile
        {
            get => fields.Mobile[this];
            set => fields.Mobile[this] = value;
        }

        [HalfWidth]
        [DisplayName("BGNBAL"), Column("BGNBAL"), Size(18), Scale(4),NumberFormatter(DisplayFormat ="n")]
        public Decimal? BGNBAL
        {
            get => fields.BGNBAL[this];
            set => fields.BGNBAL[this] = value;
        }
        [Hidden]
        [DisplayName("INVNO"), Column("INV_NO")]
        public Int32? INV_NO
        {
            get => fields.INV_NO[this];
            set => fields.INV_NO[this] = value;
        }
        [Hidden]
        [DisplayName("Inventory Date"), Column("INV_DT")]
        public DateTime? INV_DT
        {
            get => fields.INV_DT[this];
            set => fields.INV_DT[this] = value;
        }

        [Hidden]
        [DisplayName("Item DISC"), Column("ITM_DISC"), Size(50)]
        public String ITM_DISC
        {
            get => fields.ITM_DISC[this];
            set => fields.ITM_DISC[this] = value;
        }

         [HalfWidth]
        [DisplayName("QTY"), Column("QTY"), Size(18), Scale(4)]
        public Decimal? QTY
        {
            get => fields.QTY[this];
            set => fields.QTY[this] = value;
        }
        
        [Hidden]
        [DisplayName("BANKCD"), Column("BANK_CD"), Size(5)]
        public String BANK_CD
        {
            get => fields.BANK_CD[this];
            set => fields.BANK_CD[this] = value;
        }

        [Hidden]
        [DisplayName("ETMD Currency"), Column("ETMD_CUR"), Size(4)]
        public String ETMD_CUR
        {
            get => fields.ETMD_CUR[this];
            set => fields.ETMD_CUR[this] = value;
        }
        [Hidden]
        [DisplayName("Etmd Rate"), Column("ETMD_RATE"), Size(18), Scale(4)]
        public Decimal? ETMD_RATE
        {
            get => fields.ETMD_RATE[this];
            set => fields.ETMD_RATE[this] = value;
        }

        [Hidden]
        [DisplayName("Itm Rsv Dt"), Column("ITM_RSV_DT")]
        public DateTime? ITM_RSV_DT
        {
            get => fields.ITM_RSV_DT[this];
            set => fields.ITM_RSV_DT[this] = value;
        }

        [Hidden]
        [DisplayName("ACT Date"), Column("ACT_DT")]
        public DateTime? ACT_DT
        {
            get => fields.ACT_DT[this];
            set => fields.ACT_DT[this] = value;
        }
        [Hidden]
        [DisplayName("ItemLoc Date"), Column("ITM_LOC_DT")]
        public DateTime? ITM_LOC_DT
        {
            get => fields.ITM_LOC_DT[this];
            set => fields.ITM_LOC_DT[this] = value;
        }

        [Hidden]
        [DisplayName("MSTR Name"), Column("MSTR_NM"), Size(50)]
        public String MSTR_NM
        {
            get => fields.MSTR_NM[this];
            set => fields.MSTR_NM[this] = value;
        }

        [Hidden]
        [DisplayName("Master Add"), Column("MSTR_ADD"), Size(50)]
        public String MSTR_ADD
        {
            get => fields.MSTR_ADD[this];
            set => fields.MSTR_ADD[this] = value;
        }

        [Hidden]
        [DisplayName("Master TEL"), Column("MSTR_TEL"), Size(50)]
        public String MSTR_TEL
        {
            get => fields.MSTR_TEL[this];
            set => fields.MSTR_TEL[this] = value;
        }

        [Hidden]
        [DisplayName("Account Add"), Column("ACC_ADD"), Size(50)]
        public String ACC_ADD
        {
            get => fields.ACC_ADD[this];
            set => fields.ACC_ADD[this] = value;
        }

        [HalfWidth]
        [DisplayName("POST"), Column("POST"), Size(5)]
        public String POST
        {
            get => fields.POST[this];
            set => fields.POST[this] = value;
        }

        [HalfWidth]
        [DisplayName("Accept")]
        public Int16? Accept
        {
            get => fields.Accept[this];
            set => fields.Accept[this] = value;
        }

        [HalfWidth]
        [DisplayName("DISC"), Column("DISC"), Size(18), Scale(3)]
        public Decimal? DISC
        {
            get => fields.DISC[this];
            set => fields.DISC[this] = value;
        }

        [Hidden]
        [DisplayName("Start Date"), Column("Start_DT")]
        public DateTime? Start_DT
        {
            get => fields.Start_DT[this];
            set => fields.Start_DT[this] = value;
        }

        [Hidden]
        [DisplayName("End Date"), Column("End_Dt")]
        public DateTime? End_Dt
        {
            get => fields.End_Dt[this];
            set => fields.End_Dt[this] = value;
        }

        [Hidden]
        [DisplayName("Dor No"), Column("Dor_NO"), Size(50)]
        public String Dor_NO
        {
            get => fields.Dor_NO[this];
            set => fields.Dor_NO[this] = value;
        }

        [Hidden]
        [DisplayName("TRNO"), Column("TR_NO")]
        public Int32? TR_NO
        {
            get => fields.TR_NO[this];
            set => fields.TR_NO[this] = value;
        }

        [Hidden]
        [DisplayName("Total"), Column("TR_TOT"), Size(18), Scale(4)]
        public Decimal? TR_TOT
        {
            get => fields.TR_TOT[this];
            set => fields.TR_TOT[this] = value;
        }

        [HalfWidth]
        [DisplayName("Status"), NotNull, DefaultValue(1)]
        public Status? Status
        {
            get => (Status?)fields.Status[this];
            set => fields.Status[this] = (Int32?)value;
        }

        [HalfWidth]
        [DisplayName("EnteredBy"), Size(100)]
        public String EnteredBy
        {
            get => fields.EnteredBy[this];
            set => fields.EnteredBy[this] = value;
        }

        [HalfWidth]
        [DisplayName("EntryDate"), DefaultValue("now")]
        public DateTime? EntryDate
        {
            get => fields.EntryDate[this];
            set => fields.EntryDate[this] = value;
        }
        
        [HalfWidth]
        [DisplayName("UpdatedBy"), Size(100)]
        public String UpdatedBy
        {
            get => fields.UpdatedBy[this];
            set => fields.UpdatedBy[this] = value;
        }
        
        [HalfWidth]
        [DisplayName("UpdateDate"), DefaultValue("now")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        public ASCSTRow()
            : base()
        {
        }

        public ASCSTRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public StringField CST_CD;
            public StringField CST_NM_AR;
            public StringField CST_NM_EN;
            public StringField MCST_CD;
            public StringField CST_CTG;
            public Int16Field CST_TY;
            public StringField SUM_CD;
            public StringField SSUM_CD;
            public StringField ACC_NO;
            public StringField ACC_NM_AR;
            public StringField ACC_NM_EN;
            public SingleField CSTRAT;
            public DateTimeField DATE_IN;
            public StringField Phone;
            public StringField Mobile;
            public DecimalField BGNBAL;
            public Int32Field INV_NO;
            public DateTimeField INV_DT;
            public StringField ITM_DISC;
            public DecimalField QTY;
            public StringField BANK_CD;
            public StringField ETMD_CUR;
            public DecimalField ETMD_RATE;
            public DateTimeField ITM_RSV_DT;
            public DateTimeField ACT_DT;
            public DateTimeField ITM_LOC_DT;
            public StringField MSTR_NM;
            public StringField MSTR_ADD;
            public StringField MSTR_TEL;
            public StringField ACC_ADD;
            public StringField POST;
            public Int16Field Accept;
            public DecimalField DISC;
            public DateTimeField Start_DT;
            public DateTimeField End_Dt;
            public StringField Dor_NO;
            public Int32Field TR_NO;
            public DecimalField TR_TOT;
            public Int32Field Status;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
        }
    }
}
