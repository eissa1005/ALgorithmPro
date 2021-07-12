using ALgorithmPro.Web.Modules.Common;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[Package]")]
    [DisplayName("Package"), InstanceName("Package")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("ALgorithm.Package")]
    public sealed class PackageRow : Row<PackageRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("PKID"), Column("PKID"), Size(100), PrimaryKey, QuickSearch, NameProperty,LookupInclude]
        public String PKID
        {
            get => fields.PKID[this];
            set => fields.PKID[this] = value;
        }

        [DisplayName("PK_NM_AR"), Column("PK_NM_AR"), NotNull]
        public String PK_NM_AR
        {
            get => fields.PK_NM_AR[this];
            set => fields.PK_NM_AR[this] = value;
        }

        [DisplayName("PK_NM_EN"), Column("PK_NM_EN")]
        public String PK_NM_EN
        {
            get => fields.PK_NM_EN[this];
            set => fields.PK_NM_EN[this] = value;
        }
       
        [DisplayName("PKCNT"), Column("PKCNT"), Size(18), Scale(2), NotNull, LookupInclude]
        public Decimal? PKCNT
        {
            get => fields.PKCNT[this];
            set => fields.PKCNT[this] = value;
        }
        [DisplayName("FACT"), Column("FACT"), Size(18), Scale(2), NotNull, LookupInclude]
        public Decimal? FACT
        {
            get => fields.FACT[this];
            set => fields.FACT[this] = value;
        }

        [DisplayName("SPKID"), Column("SPKID"), Size(3), LookupInclude]
        public String SPKID
        {
            get => fields.SPKID[this];
            set => fields.SPKID[this] = value;
        }

        [DisplayName("RMRK"), Column("RMRK")]
        public String RMRK
        {
            get => fields.RMRK[this];
            set => fields.RMRK[this] = value;
        }

        [DisplayName("RMRK2"), Column("RMRK2")]
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

        public PackageRow()
            : base()
        {
        }

        public PackageRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public StringField PKID;
            public StringField PK_NM_AR;
            public StringField PK_NM_EN;
            public DecimalField PKCNT;
            public DecimalField FACT;
            public StringField SPKID;
            public StringField RMRK;
            public StringField RMRK2;
            public Int32Field Status;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
        }
    }
}
