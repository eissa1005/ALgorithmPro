using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.Web.Modules.Common.Common;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[Regions]")]
    [DisplayName("Regions"), InstanceName("Regions")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class RegionsRow : Row<RegionsRow.RowFields>, IIdRow, INameRow
    {
        [Hidden]
        [DisplayName("ID"), Column("ID"),Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("RegionID"), Column("RegionID"), Size(100), PrimaryKey, QuickSearch, NameProperty]
        public String RegionID
        {
            get => fields.RegionID[this];
            set => fields.RegionID[this] = value;
        }

        [DisplayName("Name Arabic"), Column("Name_AR"), Size(200), NotNull]
        public String Name_AR
        {
            get => fields.Name_AR[this];
            set => fields.Name_AR[this] = value;
        }

        [DisplayName("Name English"), Column("Name_EN"), Size(200), NotNull]
        public String Name_EN
        {
            get => fields.Name_EN[this];
            set => fields.Name_EN[this] = value;
        }

        [DisplayName("Status"), NotNull,DefaultValue(1)]
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

        [DisplayName("EntryDate"),DefaultValue("now")]
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

        [DisplayName("UpdateDate"),DefaultValue("now")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        public RegionsRow()
            : base()
        {
        }

        public RegionsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public StringField RegionID;
            public StringField Name_AR;
            public StringField Name_EN;
            public Int32Field Status;
            public StringField EnteredBy;
            public StringField UpdatedBy;
            public DateTimeField EntryDate;
            public DateTimeField UpdateDate;
        }
    }
}
