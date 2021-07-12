using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[MAXTable]")]
    [DisplayName("Max Table"), InstanceName("Max Table")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MaxTableRow : Row<MaxTableRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("TableID"), Column("TableID"), Size(100), PrimaryKey, QuickSearch, NameProperty]
        public String TableID
        {
            get => fields.TableID[this];
            set => fields.TableID[this] = value;
        }

        [DisplayName("TableName"), Column("Table_NAME"), NotNull]
        public String Table_NAME
        {
            get => fields.Table_NAME[this];
            set => fields.Table_NAME[this] = value;
        }

        [DisplayName("MAXSQL"), Column("MAXSQL"), NotNull]
        public String MAXSQL
        {
            get => fields.MAXSQL[this];
            set => fields.MAXSQL[this] = value;
        }

        [DisplayName("RMRK"), Column("RMRK")]
        public String RMRK
        {
            get => fields.RMRK[this];
            set => fields.RMRK[this] = value;
        }

        [DisplayName("Status"), NotNull]
        public Int32? Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }

        [DisplayName("EnteredBy"), Size(30)]
        public String EnteredBy
        {
            get => fields.EnteredBy[this];
            set => fields.EnteredBy[this] = value;
        }

        [DisplayName("EntryDate")]
        public DateTime? EntryDate
        {
            get => fields.EntryDate[this];
            set => fields.EntryDate[this] = value;
        }

        [DisplayName("UpdatedBy"), Size(30)]
        public String UpdatedBy
        {
            get => fields.UpdatedBy[this];
            set => fields.UpdatedBy[this] = value;
        }

        [DisplayName("UpdateDate")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        public MaxTableRow()
            : base()
        {
        }

        public MaxTableRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public StringField TableID;
            public StringField Table_NAME;
            public StringField MAXSQL;
            public StringField RMRK;
            public Int32Field Status;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
        }
    }
}
