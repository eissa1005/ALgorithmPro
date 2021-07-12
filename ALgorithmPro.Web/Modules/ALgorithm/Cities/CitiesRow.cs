using ALgorithmPro.Web.Modules.Common.Common;
using Serenity.ComponentModel;
using Serenity.Data.Mapping;
using System.ComponentModel;
using Serenity.Data;
using ALgorithmPro.Web.Modules.Lookup;
using System;
using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.Lookup;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[Cities]")]
    [DisplayName("Cities"), InstanceName("Cities")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("ALgorithm.Cities")]
    public sealed class CitiesRow : Row<CitiesRow.RowFields>, IIdRow, INameRow
    {
        [Hidden]
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int32? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("CityID"), Column("CityID"), Size(100), PrimaryKey, QuickSearch, NameProperty]
        public String CityID
        {
            get => fields.CityID[this];
            set => fields.CityID[this] = value;
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

        [DisplayName("Region Name"), Column("RegionID"), Size(100), NotNull,LookupInclude]
        [LookupEditor(typeof(RegionLookup))]
        public String RegionID
        {
            get => fields.RegionID[this];
            set => fields.RegionID[this] = value;
        }

        [DisplayName("Status"), NotNull ,DefaultValue(1)]
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

        public CitiesRow()
            : base()
        {
        }

        public CitiesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public StringField CityID;
            public StringField Name_AR;
            public StringField Name_EN;
            public StringField RegionID;
            public Int32Field Status;
            public StringField EnteredBy;
            public StringField UpdatedBy;
            public DateTimeField EntryDate;
            public DateTimeField UpdateDate;
        }
    }
}
