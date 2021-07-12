using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ItemTypes]")]
    [DisplayName("Item Types"), InstanceName("Item Types")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ItemTypesRow : Row<ItemTypesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("ItemtypeID"), Column("ItemtypeID"), Size(100), PrimaryKey, QuickSearch, NameProperty]
        public String ItemtypeId
        {
            get => fields.ItemtypeId[this];
            set => fields.ItemtypeId[this] = value;
        }

        [DisplayName("Name Arabic"), Column("Name_AR"), Size(250), NotNull]
        public String NameAr
        {
            get => fields.NameAr[this];
            set => fields.NameAr[this] = value;
        }

        [DisplayName("Name English"), Column("Name_En"), Size(250), NotNull]
        public String NameEn
        {
            get => fields.NameEn[this];
            set => fields.NameEn[this] = value;
        }

        [DisplayName("Entered By"), Size(100)]
        public String EnteredBy
        {
            get => fields.EnteredBy[this];
            set => fields.EnteredBy[this] = value;
        }

        [DisplayName("Updated By"), Size(100)]
        public String UpdatedBy
        {
            get => fields.UpdatedBy[this];
            set => fields.UpdatedBy[this] = value;
        }

        [DisplayName("Entry Date")]
        public DateTime? EntryDate
        {
            get => fields.EntryDate[this];
            set => fields.EntryDate[this] = value;
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        public ItemTypesRow()
            : base()
        {
        }

        public ItemTypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField ItemtypeId;
            public StringField NameAr;
            public StringField NameEn;
            public StringField EnteredBy;
            public StringField UpdatedBy;
            public DateTimeField EntryDate;
            public DateTimeField UpdateDate;
        }
    }
}
