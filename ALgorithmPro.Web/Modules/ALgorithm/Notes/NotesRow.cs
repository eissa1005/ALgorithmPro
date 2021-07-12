using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[Notes]")]
    [DisplayName("Notes"), InstanceName("Notes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class NotesRow : Row<NotesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Note Id"), Column("NoteID"), Identity, IdProperty]
        public Int64? NoteId
        {
            get => fields.NoteId[this];
            set => fields.NoteId[this] = value;
        }

        [DisplayName("EntityType"), Size(100), NotNull, QuickSearch, NameProperty]
        public String EntityType
        {
            get => fields.EntityType[this];
            set => fields.EntityType[this] = value;
        }

        [DisplayName("EntityID"), Column("EntityID"), NotNull]
        public Int64? EntityId
        {
            get => fields.EntityId[this];
            set => fields.EntityId[this] = value;
        }

        [DisplayName("Text"), NotNull]
        public String Text
        {
            get => fields.Text[this];
            set => fields.Text[this] = value;
        }

        [DisplayName("InsertUserId"), NotNull]
        public Int32? InsertUserId
        {
            get => fields.InsertUserId[this];
            set => fields.InsertUserId[this] = value;
        }

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get => fields.InsertDate[this];
            set => fields.InsertDate[this] = value;
        }

        public NotesRow()
            : base()
        {
        }

        public NotesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field NoteId;
            public StringField EntityType;
            public Int64Field EntityId;
            public StringField Text;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
        }
    }
}
