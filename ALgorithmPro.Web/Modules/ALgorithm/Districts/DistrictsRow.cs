using System;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;
using Serenity.ComponentModel;
using ALgorithmPro.Web.Modules.Common.Common;
using ALgorithmPro.Web.Modules.Lookup;
using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.Lookup;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[Districts]")]
    [DisplayName("Districts"), InstanceName("Districts")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DistrictsRow : Row<DistrictsRow.RowFields>, IIdRow, INameRow
    {
        [Hidden]
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("DistrictsID"), Column("DistrictsID"), Size(100), PrimaryKey, QuickSearch, NameProperty]
        public String DistrictsID
        {
            get => fields.DistrictsID[this];
            set => fields.DistrictsID[this] = value;
        }

        [DisplayName("Name Arabic"), Column("Name_AR"), NotNull]
        public String Name_AR
        {
            get => fields.Name_AR[this];
            set => fields.Name_AR[this] = value;
        }

        [DisplayName("Name English"), Column("Name_EN"), NotNull]
        public String Name_EN
        {
            get => fields.Name_EN[this];
            set => fields.Name_EN[this] = value;
        }

        [DisplayName("City Name"), Column("CityID"), NotNull,LookupInclude]
        [LookupEditor(typeof(CityLookup))]
        public Int64? CityID
        {
            get => fields.CityID[this];
            set => fields.CityID[this] = value;
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

        public DistrictsRow()
            : base()
        {
        }

        public DistrictsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public StringField DistrictsID;
            public StringField Name_AR;
            public StringField Name_EN;
            public Int64Field CityID;
            public Int32Field Status;
            public StringField EnteredBy;
            public StringField UpdatedBy;
            public DateTimeField EntryDate;
            public DateTimeField UpdateDate;
        }
    }
}
