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
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[AZSUMS]")]
    [DisplayName("SUMS"), InstanceName("SUMS")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class SUMSRow : Row<SUMSRow.RowFields>, IIdRow, INameRow
    {
        [Hidden]
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int32? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

       [HalfWidth]
       [DisplayName("SUMCD"), Column("SUM_CD"), Size(100), PrimaryKey, QuickSearch, NameProperty]
        public String SUM_CD
        {
            get => fields.SUM_CD[this];
            set => fields.SUM_CD[this] = value;
        }

        [HalfWidth]
        [DisplayName("Name Arabic"), Column("SUM_NM_AR"), Size(255)]
        public String SUM_NM_AR
        {
            get => fields.SUM_NM_AR[this];
            set => fields.SUM_NM_AR[this] = value;
        }
        [HalfWidth]
        [DisplayName("Name English"), Column("SUM_NM_EN"), Size(255)]
        public String SUM_NM_EN
        {
            get => fields.SUM_NM_EN[this];
            set => fields.SUM_NM_EN[this] = value;
        }

        [HalfWidth]
        [DisplayName("Parent"), Column("MSUM_CD"), Size(100)]
        public String MSUM_CD
        {
            get => fields.MSUM_CD[this];
            set => fields.MSUM_CD[this] = value;
        }

        [HalfWidth]
        [DisplayName("SUM Category"), Column("SUM_CATG"), Size(100)]
        public String SUM_CATG
        {
            get => fields.SUM_CATG[this];
            set => fields.SUM_CATG[this] = value;
        }

        [HalfWidth]
        [DisplayName("SSUMCD"), Column("SSUM_CD"), Size(100)]
        [LookupEditor(typeof(SSUMSLookup),AutoComplete = true)]
        public String SSUM_CD
        {
            get => fields.SSUM_CD[this];
            set => fields.SSUM_CD[this] = value;
        }

        [HalfWidth]
        [DisplayName("Phone"), Size(100)]
        public String Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [HalfWidth]
        [DisplayName("Mobile"), Size(100)]
        public String Mobile
        {
            get => fields.Mobile[this];
            set => fields.Mobile[this] = value;
        }

        [HalfWidth]
        [DisplayName("Address"), Column("ADDRS"), Size(255)]
        public String ADDRS
        {
            get => fields.ADDRS[this];
            set => fields.ADDRS[this] = value;
        }

        [HalfWidth]
        [DisplayName("Region Name"), Column("RegionID"), Size(300)]
        [LookupEditor(typeof(RegionLookup),AutoComplete =true)]
        public String RegionID
        {
            get => fields.RegionID[this];
            set => fields.RegionID[this] = value;
        }

        [HalfWidth]
        [DisplayName("ACCNO"), Column("ACC_NO"), Size(100)]
        public String ACC_NO
        {
            get => fields.ACC_NO[this];
            set => fields.ACC_NO[this] = value;
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

        public SUMSRow()
            : base()
        {
        }

        public SUMSRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public StringField SUM_CD;
            public StringField SUM_NM_AR;
            public StringField SUM_NM_EN;
            public StringField MSUM_CD;
            public StringField SUM_CATG;
            public StringField SSUM_CD;
            public StringField Phone;
            public StringField Mobile;
            public StringField ADDRS;
            public StringField RegionID;
            public StringField ACC_NO;
            public Int32Field Status;
            public StringField EnteredBy;
            public StringField UpdatedBy;
            public DateTimeField EntryDate;
            public DateTimeField UpdateDate;
        }
    }
}
