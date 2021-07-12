using ALgorithmPro.Web.Modules.Common.Common;
using Serenity.ComponentModel;
using Serenity.Data.Mapping;
using System.ComponentModel;
using Serenity.Data;
using System;
using ALgorithmPro.Web.Modules.Lookup;
using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.Lookup;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ASREPS]")]
    [DisplayName("Reps"), InstanceName("Reps")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]

    public sealed class REPSRow : Row<REPSRow.RowFields>, IIdRow, INameRow
    {
        [Hidden]
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }
        [HalfWidth]
        [DisplayName("RepCD"), Column("REP_CD"), Size(200), PrimaryKey, NameProperty,QuickSearch]
        public String REP_CD
        {
            get => fields.REP_CD[this];
            set => fields.REP_CD[this] = value;
        }

        [HalfWidth]
        [DisplayName("Name Arabic"), Column("REP_NAME"), NotNull,QuickSearch]
        public String REP_NAME
        {
            get => fields.REP_NAME[this];
            set => fields.REP_NAME[this] = value;
        }

        [HalfWidth]
        [DisplayName("Name English"), Column("REP_NAME_EN")]
        public String REP_NAME_EN
        {
            get => fields.REP_NAME_EN[this];
            set => fields.REP_NAME_EN[this] = value;
        }

        [HalfWidth]
        [DisplayName("SupervisorName"), Column("SupervisorID"), Size(100), NotNull,LookupInclude]
        [LookupEditor(typeof(SupervisorLookup),AutoComplete =true)]
        public String SupervisorID
        {
            get => fields.SupervisorID[this];
            set => fields.SupervisorID[this] = value;
        }

        [HalfWidth]
        [DisplayName("SaleCommision"), Size(18), Scale(2), NotNull]
        public Decimal? SaleCommision
        {
            get => fields.SaleCommision[this];
            set => fields.SaleCommision[this] = value;
        }

        [HalfWidth]
        [DisplayName("CollectCommision"), Size(18), Scale(2), NotNull]
        public Decimal? CollectCommision
        {
            get => fields.CollectCommision[this];
            set => fields.CollectCommision[this] = value;
        }

        [HalfWidth]
        [DisplayName("PriceName"), Column("PriceID"), Size(100), NotNull,LookupInclude]
        [LookupEditor(typeof(PriceLookup),AutoComplete = true)]
        public String PriceID
        {
            get => fields.PriceID[this];
            set => fields.PriceID[this] = value;
        }

        [HalfWidth]
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
        public REPSRow()
            : base()
        {
        }

        public REPSRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public StringField REP_CD;
            public StringField REP_NAME;
            public StringField REP_NAME_EN;
            public StringField SupervisorID;
            public DecimalField SaleCommision;
            public DecimalField CollectCommision;
            public StringField PriceID;
            public Int32Field Status;
            public StringField EnteredBy;
            public StringField UpdatedBy;
            public DateTimeField EntryDate;
            public DateTimeField UpdateDate;
        }
    }
}
