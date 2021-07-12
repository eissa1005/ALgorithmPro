using ALgorithmPro.Lookup;
using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.Web.Modules.Lookup;
using Newtonsoft.Json;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ItemsBarcode]")]
    [DisplayName("Items Barcode"), InstanceName("Items Barcode")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("ALgorithm.ItemsBarcode")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class ItemsBarcodeRow : Row<ItemsBarcodeRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("ItemID"), Column("ItemID"), NotNull, ForeignKey("[dbo].[ASITMS]", "ID"), LeftJoin("jItem"), TextualField("ItemItemCd")]
        public Int64? ItemID
        {
            get => fields.ItemID[this];
            set => fields.ItemID[this] = value;
        }

        [DisplayName("Barcode"), Size(100), PrimaryKey, QuickSearch, NameProperty]
        public String Barcode
        {
            get => fields.Barcode[this];
            set => fields.Barcode[this] = value;
        }

        [DisplayName("Item Code"), Column("Item_CD"), Size(100), NotNull]
        public String Item_CD
        {
            get => fields.Item_CD[this];
            set => fields.Item_CD[this] = value;
        }

        [DisplayName("PKID"), Column("PKID"), Size(100), PrimaryKey]
        [LookupEditor(typeof(PackageLookup),InplaceAdd =true, AutoComplete = true)]
        public String PKID
        {
            get => fields.PKID[this];
            set => fields.PKID[this] = value;
        }
        
        [DisplayName("PackageName"), Column("PKName"), Size(100)]
        public String PKName
        {
            get => fields.PKName[this];
            set => fields.PKName[this] = value;
        }

        [Hidden]
        [DisplayName("PKRAT"), Column("PKRAT")]
        public Double? PKRAT
        {
            get => fields.PKRAT[this];
            set => fields.PKRAT[this] = value;
        }

        [DisplayName("SPRC2"), Column("SPRC2")]
        public Double? SPRC2
        {
            get => fields.SPRC2[this];
            set => fields.SPRC2[this] = value;
        }

        [DisplayName("SPRC3"), Column("SPRC3")]
        public Double? SPRC3
        {
            get => fields.SPRC3[this];
            set => fields.SPRC3[this] = value;
        }

        [DisplayName("SPRC4"), Column("SPRC4")]
        public Double? SPRC4
        {
            get => fields.SPRC4[this];
            set => fields.SPRC4[this] = value;
        }

        [DisplayName("SPRC5"), Column("SPRC5")]
        public Double? SPRC5
        {
            get => fields.SPRC5[this];
            set => fields.SPRC5[this] = value;
        }

        [DisplayName("SPRC6"), Column("SPRC6"), NotNull]
        public Double? SPRC6
        {
            get => fields.SPRC6[this];
            set => fields.SPRC6[this] = value;
        }

        [Hidden]
        [DisplayName("BGNCST"), Column("BGNCST"),DefaultValue(0)]
        public Double? BGNCST
        {
            get => fields.BGNCST[this];
            set => fields.BGNCST[this] = value;
        }

        [Hidden]
        [DisplayName("UCST"), Column("UCST"), DefaultValue(0)]
        public Double? UCST
        {
            get => fields.UCST[this];
            set => fields.UCST[this] = value;
        }

        [DisplayName("Price"), NotNull,DefaultValue(0)]
        public Double? Price
        {
            get => fields.Price[this];
            set => fields.Price[this] = value;
        }

        [DisplayName("Status"), NotNull,DefaultValue(1)]
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
      
        public ItemsBarcodeRow()
            : base()
        {
        }

        public ItemsBarcodeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public Int64Field ItemID;
            public StringField Barcode;
            public StringField Item_CD;
            public StringField PKID;
            public StringField PKName;
            public DoubleField PKRAT;
            public DoubleField SPRC2;
            public DoubleField SPRC3;
            public DoubleField SPRC4;
            public DoubleField SPRC5;
            public DoubleField SPRC6;
            public DoubleField BGNCST;
            public DoubleField UCST;
            public DoubleField Price;
            public Int32Field Status;
            public StringField EnteredBy;
            public StringField UpdatedBy;
            public DateTimeField EntryDate;
            public DateTimeField UpdateDate;
        }
    }
}
