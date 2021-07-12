using System; 
using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.Web.Modules.Lookup;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using ALgorithmPro.Lookup;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ASITMS]")]
    [DisplayName("Items"), InstanceName("Items")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("ALgorithm.ASITMS")]
    public sealed class ItemsRow : Row<ItemsRow.RowFields>, IIdRow, INameRow
    {
        [Hidden]
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("Main Category"), Column("MITM_CD"), Size(200), NotNull, ForeignKey("[dbo].[ItemGroups]", "MITM_CD"), LeftJoin("jMITMCD"), TextualField("Name_AR")]
        [LookupEditor(typeof(ItemGroupLookup), AutoComplete = true, InplaceAdd = true)]
        public String MITM_CD
        {
            get => fields.MITM_CD[this];
            set => fields.MITM_CD[this] = value;
        }

        [DisplayName("ItemCD"), Column("Item_CD"), Size(100), PrimaryKey, QuickSearch, NameProperty, LookupInclude]
        public String Item_CD
        {
            get => fields.Item_CD[this];
            set => fields.Item_CD[this] = value;
        }

        [DisplayName("Sub Category"), Column("CITM_CD"), Size(200)]
        [LookupEditor(typeof(ItemSubGroupLookup), InplaceAdd = true, AutoComplete = true)]
        public String CITM_CD
        {
            get => fields.CITM_CD[this];
            set => fields.CITM_CD[this] = value;
        }

        [DisplayName("Item Name"), Column("Item_Name_AR"), Size(400), NotNull, LookupInclude]
        public String Item_Name_AR
        {
            get => fields.Item_Name_AR[this];
            set => fields.Item_Name_AR[this] = value;
        }

        [DisplayName("Name English"), Column("Item_Name_EN")]
        public String Item_Name_EN
        {
            get => fields.Item_Name_EN[this];
            set => fields.Item_Name_EN[this] = value;
        }

        [DisplayName("Add Package"), MasterDetailRelation(foreignKey: "ItemId"), NotMapped,NotNull, LookupInclude]
        public List<ItemsBarcodeRow> DetailList
        {
            get => fields.DetailList[this];
            set => fields.DetailList[this] = value;
        }

        [DisplayName("ItemTypes"), Column("ItemTypes"), NotNull, DefaultValue(1)]
        [LookupEditor(typeof(ItemTypesLookup), AutoComplete = true)]
        public Int32? ItemTypes
        {
            get => fields.ItemTypes[this];
            set => fields.ItemTypes[this] = value;
        }

        [TextAreaEditor]
        [DisplayName("Remarks"), Column("RMRK")]
        public String RMRK
        {
            get => fields.RMRK[this];
            set => fields.RMRK[this] = value;
        }

        [DisplayName("ItemSupplier"), NotNull, DefaultValue(0)]
        public Boolean? ItemSupplier
        {
            get => fields.ItemSupplier[this];
            set => fields.ItemSupplier[this] = value;
        }
        
        [DisplayName("Sales Package"), Column("SLS_PK"), Size(50)]
        [LookupEditor(typeof(PackageLookup), InplaceAdd = true, AutoComplete = true)]
        public String SLS_PK
        {
            get => fields.SLS_PK[this];
            set => fields.SLS_PK[this] = value;
        }

        [DisplayName("Pruchase Package"), Column("PRCH_PK"), Size(50)]
        [LookupEditor(typeof(PackageLookup), InplaceAdd = true, AutoComplete = true)]
        public String PRCH_PK
        {
            get => fields.PRCH_PK[this];
            set => fields.PRCH_PK[this] = value;
        }

        [DisplayName("Item Cost"), NotNull, DefaultValue(0), LookupInclude]
        public Double? ItemCost
        {
            get => fields.ItemCost[this];
            set => fields.ItemCost[this] = value;
        }

        [DisplayName("SPRC2"), Column("SPRC2"), Size(19), Scale(4), NotNull, DefaultValue(0), LookupInclude]
        public Decimal? SPRC2
        {
            get => fields.SPRC2[this];
            set => fields.SPRC2[this] = value;
        }

        [DisplayName("SPRC3"), Column("SPRC3"), Size(19), Scale(4), NotNull, DefaultValue(0), LookupInclude]
        public Decimal? SPRC3
        {
            get => fields.SPRC3[this];
            set => fields.SPRC3[this] = value;
        }

        [DisplayName("SPRC4"), Column("SPRC4"), Size(19), Scale(4), NotNull, DefaultValue(0), LookupInclude]
        public Decimal? SPRC4
        {
            get => fields.SPRC4[this];
            set => fields.SPRC4[this] = value;
        }

        [DisplayName("SPRC5"), Column("SPRC5"), Size(19), Scale(4), NotNull, DefaultValue(0), LookupInclude]
        public Decimal? SPRC5
        {
            get => fields.SPRC5[this];
            set => fields.SPRC5[this] = value;
        }

        [DisplayName("SPRC6"), Column("SPRC6"), Size(19), Scale(4), NotNull, DefaultValue(0), LookupInclude]
        public Decimal? SPRC6
        {
            get => fields.SPRC6[this];
            set => fields.SPRC6[this] = value;
        }

        [DisplayName("PPRC2"), Column("PPRC2"), Size(19), Scale(4), NotNull, DefaultValue(0), LookupInclude]
        public Decimal? PPRC2
        {
            get => fields.PPRC2[this];
            set => fields.PPRC2[this] = value;
        }

        [DisplayName("PPRC3"), Column("PPRC3"), Size(19), Scale(4), NotNull, DefaultValue(0), LookupInclude]
        public Decimal? PPRC3
        {
            get => fields.PPRC3[this];
            set => fields.PPRC3[this] = value;
        }

        [DisplayName("PPRC4"), Column("PPRC4"), Size(19), Scale(4), NotNull, DefaultValue(0), LookupInclude]
        public Decimal? PPRC4
        {
            get => fields.PPRC4[this];
            set => fields.PPRC4[this] = value;
        }

        [DisplayName("PPRC5"), Column("PPRC5"), Size(19), Scale(4), NotNull, DefaultValue(0), LookupInclude]
        public Decimal? PPRC5
        {
            get => fields.PPRC5[this];
            set => fields.PPRC5[this] = value;
        }

        [DisplayName("PPRC6"), Column("PPRC6"), Size(19), Scale(4), NotNull, DefaultValue(0), LookupInclude]
        public Decimal? PPRC6
        {
            get => fields.PPRC6[this];
            set => fields.PPRC6[this] = value;
        }

        [DisplayName("Sales DiscType"), Column("SALDISC_TYPE"), NotNull, DefaultValue(DiscType.Value)]
        public DiscType? SALDISC_TYPE
        {
            get => (DiscType?)fields.SALDISC_TYPE[this];
            set => fields.SALDISC_TYPE[this] = (Int16?)value;
        }

        [DisplayName("Purch DISCType"), Column("PURDISC_TYPE"), NotNull, DefaultValue(DiscType.Value)]
        public DiscType? PURDISC_TYPE
        {
            get => (DiscType?)fields.PURDISC_TYPE[this];
            set => fields.PURDISC_TYPE[this] = (Int16?)value;
        }

        [DisplayName("TAXTYPE"), Column("TAX_TYPE"), NotNull, DefaultValue(DiscType.Value)]
        public DiscType? TAX_TYPE
        {
            get => (DiscType?)fields.TAX_TYPE[this];
            set => fields.TAX_TYPE[this] = (Int16?)value;
        }

        [DisplayName("SAL DISC1"), Column("SDISC1"), NotNull, DefaultValue(0), LookupInclude]
        public Double? SDISC1
        {
            get => fields.SDISC1[this];
            set => fields.SDISC1[this] = value;
        }

        [DisplayName("SAL DISC2"), Column("SDISC2"), NotNull, DefaultValue(0), LookupInclude]
        public Double? SDISC2
        {
            get => fields.SDISC2[this];
            set => fields.SDISC2[this] = value;
        }

        [DisplayName("SAL DISC3"), Column("SDISC3"), NotNull, DefaultValue(0), LookupInclude]
        public Double? SDISC3
        {
            get => fields.SDISC3[this];
            set => fields.SDISC3[this] = value;
        }

        [DisplayName("Purch DISC1"), Column("PDISC1"), NotNull, DefaultValue(0), LookupInclude]
        public Double? PDISC1
        {
            get => fields.PDISC1[this];
            set => fields.PDISC1[this] = value;
        }

        [DisplayName("Purch DISC2"), Column("PDISC2"), NotNull, DefaultValue(0), LookupInclude]
        public Double? PDISC2
        {
            get => fields.PDISC2[this];
            set => fields.PDISC2[this] = value;
        }

        [DisplayName("Purch DISC3"), Column("PDISC3"), NotNull, DefaultValue(0), LookupInclude]
        public Double? PDISC3
        {
            get => fields.PDISC3[this];
            set => fields.PDISC3[this] = value;
        }

        [DisplayName("TAX1"), Column("TAX1"), NotNull, DefaultValue(0), LookupInclude]
        public Double? TAX1
        {
            get => fields.TAX1[this];
            set => fields.TAX1[this] = value;
        }

        [DisplayName("TAX2"), Column("TAX2"), NotNull, DefaultValue(0), LookupInclude]
        public Double? TAX2
        {
            get => fields.TAX2[this];
            set => fields.TAX2[this] = value;
        }

        [DisplayName("TAX3"), Column("TAX3"), NotNull, DefaultValue(0), LookupInclude]
        public Double? TAX3
        {
            get => fields.TAX3[this];
            set => fields.TAX3[this] = value;
        }

        [DisplayName("TAX4"), Column("TAX4"), NotNull, DefaultValue(0), LookupInclude]
        public Double? TAX4
        {
            get => fields.TAX4[this];
            set => fields.TAX4[this] = value;
        }

        [DisplayName("BGNBAL"), Column("BGNBAL"), NotNull, DefaultValue(0), LookupInclude]
        public Double? BGNBAL
        {
            get => fields.BGNBAL[this];
            set => fields.BGNBAL[this] = value;
        }

        [DisplayName("BGNCOST"), Column("BGNCOST"), NotNull, DefaultValue(0), LookupInclude]
        public Double? BGNCOST
        {
            get => fields.BGNCOST[this];
            set => fields.BGNCOST[this] = value;
        }

        [DisplayName("UCOST"), Column("UCOST"), NotNull, DefaultValue(0), LookupInclude]
        public Double? UCOST
        {
            get => fields.UCOST[this];
            set => fields.UCOST[this] = value;
        }
        
       [DisplayName("ItemBAL"), Column("ItemBAL"), NotNull, DefaultValue(0),LookupInclude]
        public Double? ItemBAL
        {
            get => fields.ItemBAL[this];
            set => fields.ItemBAL[this] = value;
        }
        [DisplayName("Min Qty"), NotNull, DefaultValue(0)]
        public Double? MinQty
        {
            get => fields.MinQty[this];
            set => fields.MinQty[this] = value;
        }

        [DisplayName("Max Qty"), NotNull, DefaultValue(0)]
        public Double? MaxQty
        {
            get => fields.MaxQty[this];
            set => fields.MaxQty[this] = value;
        }

        [DisplayName("Item Limit"), NotNull, DefaultValue(0)]
        public Double? Itemlimit
        {
            get => fields.Itemlimit[this];
            set => fields.Itemlimit[this] = value;
        }

        [Hidden]
        [DisplayName("Parent Name"), Column("MITM_NM_AR")]
        public String MITM_NM_AR
        {
            get => fields.MITM_NM_AR[this];
            set => fields.MITM_NM_AR[this] = value;
        }
        [Hidden]
        [DisplayName("Category Name"), Column("MITM_NM_EN")]
        public String MITM_NM_EN
        {
            get => fields.MITM_NM_EN[this];
            set => fields.MITM_NM_EN[this] = value;
        }

        [DisplayName("StoreID"), Column("StoreID"), Size(100), NotNull, ForeignKey("[dbo].[Stores]", "StoreID"), LeftJoin("jStore"), TextualField("StoreStoreName")]
        [LookupEditor(typeof(StoreLookup), AutoComplete = true)]
        public String StoreID
        {
            get => fields.StoreID[this];
            set => fields.StoreID[this] = value;
        }

        [DisplayName("ItemPhoto"), Size(2147483647)]
        public Stream ItemPhoto
        {
            get => fields.ItemPhoto[this];
            set => fields.ItemPhoto[this] = value;
        }

        [DisplayName("GLNO1"), Column("GLNO1"), DefaultValue(0)]
        public String GLNO1
        {
            get => fields.GLNO1[this];
            set => fields.GLNO1[this] = value;
        }

        [DisplayName("GLNO2"), Column("GLNO2"), DefaultValue(0)]
        public String GLNO2
        {
            get => fields.GLNO2[this];
            set => fields.GLNO2[this] = value;
        }

        [DisplayName("GLNO3"), Column("GLNO3"), DefaultValue(0)]
        public String GLNO3
        {
            get => fields.GLNO3[this];
            set => fields.GLNO3[this] = value;
        }

        [DisplayName("Status"), NotNull]
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
        public ItemsRow()
            : base()
        {
        }

        public ItemsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public StringField Item_CD;
            public StringField Item_Name_AR;
            public StringField Item_Name_EN;
            public StringField MITM_CD;
            public StringField CITM_CD;
            public Int32Field ItemTypes;
            public StringField RMRK;
            public BooleanField ItemSupplier;
            public StringField SLS_PK;
            public StringField PRCH_PK;
            public DoubleField ItemCost;
            public DecimalField SPRC2;
            public DecimalField SPRC3;
            public DecimalField SPRC4;
            public DecimalField SPRC5;
            public DecimalField SPRC6;
            public DecimalField PPRC2;
            public DecimalField PPRC3;
            public DecimalField PPRC4;
            public DecimalField PPRC5;
            public DecimalField PPRC6;
            public Int16Field SALDISC_TYPE;
            public Int16Field PURDISC_TYPE;
            public Int16Field TAX_TYPE;
            public DoubleField SDISC1;
            public DoubleField SDISC2;
            public DoubleField SDISC3;
            public DoubleField PDISC1;
            public DoubleField PDISC2;
            public DoubleField PDISC3;
            public DoubleField TAX1;
            public DoubleField TAX2;
            public DoubleField TAX3;
            public DoubleField TAX4;
            public DoubleField BGNBAL;
            public DoubleField BGNCOST;
            public DoubleField UCOST;
            public DoubleField ItemBAL;
            public DoubleField MinQty;
            public DoubleField MaxQty;
            public DoubleField Itemlimit;
            public StringField MITM_NM_AR;
            public StringField MITM_NM_EN;
            public StringField StoreID;
            public StreamField ItemPhoto;
            public StringField GLNO1;
            public StringField GLNO2;
            public StringField GLNO3;
            public Int32Field Status;
            public StringField EnteredBy;
            public StringField UpdatedBy;
            public DateTimeField EntryDate;
            public DateTimeField UpdateDate;

            public RowListField<ItemsBarcodeRow> DetailList;
        }

    }
}
