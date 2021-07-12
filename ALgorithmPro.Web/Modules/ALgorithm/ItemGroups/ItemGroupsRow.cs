using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.Web.Modules.Common.Common;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ItemGroups]")]
    [DisplayName("Item Groups"), InstanceName("Item Groups")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class ItemGroupsRow : Row<ItemGroupsRow.RowFields>, IIdRow, INameRow
    {
        [Hidden]
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

       
        [DisplayName("MITMCD"), Column("MITM_CD"), Size(200), PrimaryKey, QuickSearch, NameProperty]
        public String MITM_CD
        {
            get => fields.MITM_CD[this];
            set => fields.MITM_CD[this] = value;
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

        public ItemGroupsRow()
            : base()
        {
        }

        public ItemGroupsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public StringField MITM_CD;
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
