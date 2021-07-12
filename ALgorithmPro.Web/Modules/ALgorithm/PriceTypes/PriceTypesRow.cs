using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[PriceTypes]")]
    [DisplayName("Price Types"), InstanceName("Price Types")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class PriceTypesRow : Row<PriceTypesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Price Id"), Column("PriceID"), Size(100), PrimaryKey, QuickSearch, NameProperty]
        public String PriceId
        {
            get => fields.PriceId[this];
            set => fields.PriceId[this] = value;
        }

        [DisplayName("Name Ar"), Column("Name_AR"), Size(250), NotNull]
        public String NameAr
        {
            get => fields.NameAr[this];
            set => fields.NameAr[this] = value;
        }

        [DisplayName("Name En"), Column("Name_En"), Size(250), NotNull]
        public String NameEn
        {
            get => fields.NameEn[this];
            set => fields.NameEn[this] = value;
        }

        [DisplayName("Status"), NotNull]
        public Int32? Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
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

        public PriceTypesRow()
            : base()
        {
        }

        public PriceTypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField PriceId;
            public StringField NameAr;
            public StringField NameEn;
            public Int32Field Status;
            public StringField EnteredBy;
            public StringField UpdatedBy;
            public DateTimeField EntryDate;
            public DateTimeField UpdateDate;
        }
    }
}
