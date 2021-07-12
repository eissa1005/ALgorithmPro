using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[AppCodes]")]
    [DisplayName("App Codes"), InstanceName("App Codes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AppCodesRow : Row<AppCodesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Column("ID"), PrimaryKey, IdProperty]
        public Int32? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("SEQ"), Column("SEQ"), PrimaryKey]
        public Int32? SEQ
        {
            get => fields.SEQ[this];
            set => fields.SEQ[this] = value;
        }

        [DisplayName("DSCR_AR"), Column("DSCR_AR"), Size(45), QuickSearch, NameProperty]
        public String DSCR_AR
        {
            get => fields.DSCR_AR[this];
            set => fields.DSCR_AR[this] = value;
        }

        [DisplayName("DSCR_EN"), Column("DSCR_EN"), Size(50)]
        public String DSCR_EN
        {
            get => fields.DSCR_EN[this];
            set => fields.DSCR_EN[this] = value;
        }

        [DisplayName("RMRK"), Column("RMRK"), Size(40)]
        public String RMRK
        {
            get => fields.RMRK[this];
            set => fields.RMRK[this] = value;
        }

        [DisplayName("MID"), Column("MID")]
        public Int16? MID
        {
            get => fields.MID[this];
            set => fields.MID[this] = value;
        }

        [DisplayName("MSEQ"), Column("MSEQ")]
        public Int32? MSEQ
        {
            get => fields.MSEQ[this];
            set => fields.MSEQ[this] = value;
        }

        [DisplayName("Rquird")]
        public Int16? Rquird
        {
            get => fields.Rquird[this];
            set => fields.Rquird[this] = value;
        }

        [DisplayName("X"), Column("x")]
        public Int32? X
        {
            get => fields.X[this];
            set => fields.X[this] = value;
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

        [DisplayName("Ssys"), Column("ssys"), Size(10)]
        public String Ssys
        {
            get => fields.Ssys[this];
            set => fields.Ssys[this] = value;
        }

        public AppCodesRow()
            : base()
        {
        }

        public AppCodesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public Int32Field SEQ;
            public StringField DSCR_AR;
            public StringField DSCR_EN;
            public StringField RMRK;
            public Int16Field MID;
            public Int32Field MSEQ;
            public Int16Field Rquird;
            public Int32Field X;
            public StringField EnteredBy;
            public StringField UpdatedBy;
            public DateTimeField EntryDate;
            public DateTimeField UpdateDate;
            public StringField Ssys;
        }
    }
}
