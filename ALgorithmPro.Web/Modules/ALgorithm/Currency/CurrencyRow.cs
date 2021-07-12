using ALgorithmPro.Web.Modules.Common;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[Currency]")]
    [DisplayName("Currency"), InstanceName("Currency")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("ALgorithm.Currency")]
    public sealed class CurrencyRow : Row<CurrencyRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("CurrencyID"), Column("CurrencyID"), Size(100), PrimaryKey, QuickSearch, NameProperty,LookupInclude]
        public String CurrencyID
        {
            get => fields.CurrencyID[this];
            set => fields.CurrencyID[this] = value;
        }

        [DisplayName("Name Arabic"), Column("Name_AR"), Size(200), LookupInclude]
        public String Name_AR
        {
            get => fields.Name_AR[this];
            set => fields.Name_AR[this] = value;
        }

        [DisplayName("Name English"), Column("Name_EN"), Size(200), LookupInclude]
        public String Name_EN
        {
            get => fields.Name_EN[this];
            set => fields.Name_EN[this] = value;
        }

        [DisplayName("Currency Rate"), Column("CUR_RAT"), NotNull, LookupInclude]
        public Double? CUR_RAT
        {
            get => fields.CUR_RAT[this];
            set => fields.CUR_RAT[this] = value;
        }
        [Hidden]
        [DisplayName("RAT Date"), Column("RAT_DT"),DefaultValue("now"), LookupInclude]
        public DateTime? RAT_DT
        {
            get => fields.RAT_DT[this];
            set => fields.RAT_DT[this] = value;
        }

        [Hidden]
        [DisplayName("RAT_RTIO"), Column("RAT_RTIO"), Size(5)]
        public String RAT_RTIO
        {
            get => fields.RAT_RTIO[this];
            set => fields.RAT_RTIO[this] = value;
        }
        [Hidden]
        [DisplayName("ICurrency RAT"), Column("ICUR_RAT"), LookupInclude]
        public Double? ICUR_RAT
        {
            get => fields.ICUR_RAT[this];
            set => fields.ICUR_RAT[this] = value;
        }

        [Hidden]
        [DisplayName("CUR_PRFX_AR"), Column("CUR_PRFX_AR"), Size(50)]
        public String CUR_PRFX_AR
        {
            get => fields.CUR_PRFX_AR[this];
            set => fields.CUR_PRFX_AR[this] = value;
        }
        [Hidden]
        [DisplayName("CUR_PRFX_EN"), Column("CUR_PRFX_EN"), Size(50)]
        public String CUR_PRFX_EN
        {
            get => fields.CUR_PRFX_EN[this];
            set => fields.CUR_PRFX_EN[this] = value;
        }

        [Hidden]
        [DisplayName("CUR_SMPL_AR"), Column("CUR_SMPL_AR"), Size(50)]
        public String CUR_SMPL_AR
        {
            get => fields.CUR_SMPL_AR[this];
            set => fields.CUR_SMPL_AR[this] = value;
        }

        [Hidden]
        [DisplayName("CUR_SMPL_EN"), Column("CUR_SMPL_EN"), Size(50)]
        public String CUR_SMPL_EN
        {
            get => fields.CUR_SMPL_EN[this];
            set => fields.CUR_SMPL_EN[this] = value;
        }

        [Hidden]
        [DisplayName("CUR_RNG"), Column("CUR_RNG")]
        public Double? CUR_RNG
        {
            get => fields.CUR_RNG[this];
            set => fields.CUR_RNG[this] = value;
        }

        [DisplayName("CUR_ACCNO"), Column("CUR_ACCNO"), Size(100), LookupInclude]
        public String CUR_ACCNO
        {
            get => fields.CUR_ACCNO[this];
            set => fields.CUR_ACCNO[this] = value;
        }

        [Hidden]
        [DisplayName("ROLL_NO"), Column("ROLL_NO"), Size(15)]
        public String ROLL_NO
        {
            get => fields.ROLL_NO[this];
            set => fields.ROLL_NO[this] = value;
        }

        [TextAreaEditor(Cols =1,Rows =3)]
        [DisplayName("Remark"), Column("RMRK")]
        public String RMRK
        {
            get => fields.RMRK[this];
            set => fields.RMRK[this] = value;
        }

        [DisplayName("Status"), NotNull,DefaultValue(1),LookupInclude]
        public Status? Status
        {
            get => (Status?)fields.Status[this];
            set => fields.Status[this] = (Int32?)value;
        }

        [DisplayName("EnteredBy"), Size(100), LookupInclude]
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

        [DisplayName("UpdateDate"), DefaultValue("now")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        public CurrencyRow()
            : base()
        {
        }

        public CurrencyRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public StringField CurrencyID;
            public StringField Name_AR;
            public StringField Name_EN;
            public DoubleField CUR_RAT;
            public DateTimeField RAT_DT;
            public StringField RAT_RTIO;
            public DoubleField ICUR_RAT;
            public StringField CUR_PRFX_AR;
            public StringField CUR_PRFX_EN;
            public StringField CUR_SMPL_AR;
            public StringField CUR_SMPL_EN;
            public DoubleField CUR_RNG;
            public StringField CUR_ACCNO;
            public StringField ROLL_NO;
            public StringField RMRK;
            public Int32Field Status;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
        }
    }
}
