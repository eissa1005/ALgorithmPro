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
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[AZSSUMS]")]
    [DisplayName("SSUMS"), InstanceName("SSUMS")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SSUMSRow : Row<SSUMSRow.RowFields>, IIdRow, INameRow
    {
        [Hidden]
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int32? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [HalfWidth]
        [DisplayName("SSUMCD"), Column("SSUM_CD"), Size(100), PrimaryKey, QuickSearch, NameProperty]
        public String SSUM_CD
        {
            get => fields.SSUM_CD[this];
            set => fields.SSUM_CD[this] = value;
        }

        [HalfWidth]
        [DisplayName("Name Arabic"), Column("SSUM_NM_AR"), Size(255)]
        public String SSUM_NM_AR
        {
            get => fields.SSUM_NM_AR[this];
            set => fields.SSUM_NM_AR[this] = value;
        }

        [HalfWidth]
        [DisplayName("Name English"), Column("SSUM_NM_EN"), Size(255)]
        public String SSUM_NM_EN
        {
            get => fields.SSUM_NM_EN[this];
            set => fields.SSUM_NM_EN[this] = value;
        }

        [HalfWidth]
        [DisplayName("Parent"), Column("MSSUM_CD"), Size(100)]
        public String MSSUM_CD
        {
            get => fields.MSSUM_CD[this];
            set => fields.MSSUM_CD[this] = value;
        }

        [HalfWidth]
        [DisplayName("Cost Name"), Column("SSUM_CST_CD"), Size(100),LookupInclude]
        [LookupEditor(typeof(CSTLookup),AutoComplete = true)]
        public String SSUM_CST_CD
        {
            get => fields.SSUM_CST_CD[this];
            set => fields.SSUM_CST_CD[this] = value;
        }

        [HalfWidth]
        [DisplayName("SSUM Category"), Column("SSUM_CTG"), Size(100)]
        public String SSUM_CTG
        {
            get => fields.SSUM_CTG[this];
            set => fields.SSUM_CTG[this] = value;
        }
        [Hidden]
        [DisplayName("Start Date"), Column("ST_DT")]
        public DateTime? ST_DT
        {
            get => fields.ST_DT[this];
            set => fields.ST_DT[this] = value;
        }

        [Hidden]
        [DisplayName("FMLY"), Column("FMLY"), Size(255)]
        public String FMLY
        {
            get => fields.FMLY[this];
            set => fields.FMLY[this] = value;
        }

        [Hidden]
        [DisplayName("Gssum Code"), Column("GSSUM_CD"), Size(100)]
        public String GSSUM_CD
        {
            get => fields.GSSUM_CD[this];
            set => fields.GSSUM_CD[this] = value;
        }

        [HalfWidth]
        [DisplayName("Phone"), Size(100)]
        public String Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [HalfWidth]
        [DisplayName("Address"), Column("ADDRS"), Size(100)]
        public String ADDRS
        {
            get => fields.ADDRS[this];
            set => fields.ADDRS[this] = value;
        }

        [HalfWidth]
        [DisplayName("SUM Name"), Column("SUM_CD"), Size(100),LookupInclude]
        [LookupEditor(typeof(SUMSLookup),AutoComplete = true)]
        public String SUM_CD
        {
            get => fields.SUM_CD[this];
            set => fields.SUM_CD[this] = value;
        }
        [Hidden]
        [DisplayName("From Date"), Column("FDT")]
        public DateTime? FDT
        {
            get => fields.FDT[this];
            set => fields.FDT[this] = value;
        }

        [Hidden]
        [DisplayName("TO Date"), Column("TDT")]
        public DateTime? TDT
        {
            get => fields.TDT[this];
            set => fields.TDT[this] = value;
        }
        [Hidden]
        [DisplayName("SSUM CATG"), Column("SSUM_CATG"), Size(100)]
        public String SSUM_CATG
        {
            get => fields.SSUM_CATG[this];
            set => fields.SSUM_CATG[this] = value;
        }
       
        [HalfWidth]
        [DisplayName("Status"), NotNull, DefaultValue(1)]
        public Status? Status
        {
            get => (Status?)fields.Status[this];
            set => fields.Status[this] = (Int32?)value;
        }

        [DisplayName("EnteredBy"), Size(100)]
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

        [DisplayName("UpdatedBy"), Size(100)]
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

        public SSUMSRow()
            : base()
        {
        }

        public SSUMSRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public StringField SSUM_CD;
            public StringField SSUM_NM_AR;
            public StringField SSUM_NM_EN;
            public StringField MSSUM_CD;
            public StringField SSUM_CST_CD;
            public StringField SSUM_CTG;
            public DateTimeField ST_DT;
            public StringField FMLY;
            public StringField GSSUM_CD;
            public StringField Phone;
            public StringField ADDRS;
            public StringField SUM_CD;
            public DateTimeField FDT;
            public DateTimeField TDT;
            public StringField SSUM_CATG;
            public Int32Field Status;
            public StringField EnteredBy;
            public StringField UpdatedBy;
            public DateTimeField EntryDate;
            public DateTimeField UpdateDate;
        }
    }
}
