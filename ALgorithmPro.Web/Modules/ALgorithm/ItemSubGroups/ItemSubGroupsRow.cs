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
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ItemSubGroups]")]
    [DisplayName("Item Sub Groups"), InstanceName("Item Sub Groups")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ItemSubGroupsRow : Row<ItemSubGroupsRow.RowFields>, IIdRow, INameRow
    {
        [Hidden]
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

      
        [DisplayName("CITMCD"), Column("CITM_CD"), Size(200), PrimaryKey, QuickSearch, NameProperty]
        public String CITM_CD
        {
            get => fields.CITM_CD[this];
            set => fields.CITM_CD[this] = value;
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

       
        [DisplayName("ParentName"), Column("ParentID"), Size(200), NotNull, ForeignKey("[dbo].[ItemGroups]", "MITM_CD"), LeftJoin("jParent"), TextualField("ParentNameAr"),LookupInclude]
        [LookupEditor(typeof(ItemGroupLookup),AutoComplete =true)]
        public String ParentID
        {
            get => fields.ParentID[this];
            set => fields.ParentID[this] = value;
        }
        [Hidden]
        [DisplayName("Order By")]
        public Int32? OrderBy
        {
            get => fields.OrderBy[this];
            set => fields.OrderBy[this] = value;
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

        public ItemSubGroupsRow()
            : base()
        {
        }

        public ItemSubGroupsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public StringField CITM_CD;
            public StringField Name_AR;
            public StringField Name_EN;
            public StringField ParentID;
            public Int32Field OrderBy;
            public Int32Field Status;
            public StringField EnteredBy;
            public StringField UpdatedBy;
            public DateTimeField EntryDate;
            public DateTimeField UpdateDate;

           
        }
    }
}
