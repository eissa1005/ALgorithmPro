using ALgorithmPro.Lookup;
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
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ASITMLOC]")]
    [DisplayName("Items Loc"), InstanceName("Items Loc")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("ALgorithm.ASITMLOC")]
    public sealed class ItemsLocRow : Row<ItemsLocRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("StoreName"), Column("StoreID"), Size(100), PrimaryKey, QuickSearch, NameProperty,Width(130)]
        [LookupEditor(typeof(StoreLookup),AutoComplete =true),NotNull]
        public String StoreID
        {
            get => fields.StoreID[this];
            set => fields.StoreID[this] = value;
        }

        [DisplayName("Item Code"), Column("Item_CD"), Size(200), PrimaryKey, LookupInclude,Width(100)]
        public String Item_CD
        {
            get => fields.Item_CD[this];
            set => fields.Item_CD[this] = value;
        }

        [DisplayName("Name Arabic"), Column("Item_Name_AR"), Size(400), NotNull, Width(130)]
        public String Item_Name_AR
        {
            get => fields.Item_Name_AR[this];
            set => fields.Item_Name_AR[this] = value;
        }

        [DisplayName("Name English"), Column("Item_Name_EN"), Size(400), Width(130)]
        public String Item_Name_EN
        {
            get => fields.Item_Name_EN[this];
            set => fields.Item_Name_EN[this] = value;
        }

        [DisplayName("TRTY"), Column("TR_TY"), DefaultValue(100), Width(65)]
        public Int32? TR_TY
        {
            get => fields.TR_TY[this];
            set => fields.TR_TY[this] = value;
        }

        [DisplayName("BGNBAL"), Column("BGNBAL"), DefaultValue(0), Width(120)]
        public Double? BGNBAL
        {
            get => fields.BGNBAL[this];
            set => fields.BGNBAL[this] = value;
        }

        [DisplayName("BGNCST"), Column("BGNCST"),DefaultValue(0), Width(120)]
        public Double? BGNCST
        {
            get => fields.BGNCST[this];
            set => fields.BGNCST[this] = value;
        }

        [DisplayName("UCST"), Column("UCST"),DefaultValue(0), Width(120)]
        public Double? UCST
        {
            get => fields.UCST[this];
            set => fields.UCST[this] = value;
        }

        [DisplayName("Price"),DefaultValue(0), Width(120)]
        public Double? Price
        {
            get => fields.Price[this];
            set => fields.Price[this] = value;
        }

        [DisplayName("INQTY"), Column("INQTY"), DefaultValue(0),ReadOnly(true), Width(120)]
        public Double? INQTY
        {
            get => fields.INQTY[this];
            set => fields.INQTY[this] = value;
        }

        [DisplayName("OUTQTY"), Column("OUTQTY"), DefaultValue(0),ReadOnly(true), Width(120)]
        public Double? OUTQTY
        {
            get => fields.OUTQTY[this];
            set => fields.OUTQTY[this] = value;
        }

        [DisplayName("BAL"), Column("BAL"), DefaultValue(0), ReadOnly(true), Width(120),LookupInclude]
        public Double? BAL
        {
            get => fields.BAL[this];
            set => fields.BAL[this] = value;
        }

        [DisplayName("PackageName"), LookupInclude]
        [LookupEditor(typeof(PackageLookup),AutoComplete = true,InplaceAdd = true), Width(130)]
        public String PackageID
        {
            get => fields.PackageID[this];
            set => fields.PackageID[this] = value;
        }

        [DisplayName("BGNBONAS"), Column("BGNBONASQTY"), DefaultValue(0), Width(110)]
        public Double? BGNBONASQTY
        {
            get => fields.BGNBONASQTY[this];
            set => fields.BGNBONASQTY[this] = value;
        }

        [DisplayName("BONASQTY"), Column("BONASQTY"), DefaultValue(0), Width(100)]
        public Double? BONASQTY
        {
            get => fields.BONASQTY[this];
            set => fields.BONASQTY[this] = value;
        }

        [DisplayName("MinQty"), DefaultValue(0), Width(90)]
        public Double? MinQty
        {
            get => fields.MinQty[this];
            set => fields.MinQty[this] = value;
        }

        [DisplayName("MaxQty"), DefaultValue(0), Width(90)]
        public Double? MaxQty
        {
            get => fields.MaxQty[this];
            set => fields.MaxQty[this] = value;
        }

        [DisplayName("EnteredBy"), Size(100), Width(100)]
        public String EnteredBy
        {
            get => fields.EnteredBy[this];
            set => fields.EnteredBy[this] = value;
        }

        [DisplayName("EntryDate"),DefaultValue("now"), Width(110)]
        public DateTime? EntryDate
        {
            get => fields.EntryDate[this];
            set => fields.EntryDate[this] = value;
        }

        [DisplayName("UpdatedBy"), Size(100), Width(100)]
        public String UpdatedBy
        {
            get => fields.UpdatedBy[this];
            set => fields.UpdatedBy[this] = value;
        }
        
        [DisplayName("UpdateDate"), DefaultValue("now"), Width(110)]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }
        public ItemsLocRow()
            : base()
        {
        }

        public ItemsLocRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public StringField StoreID;
            public StringField Item_CD;
            public StringField Item_Name_AR;
            public StringField Item_Name_EN;
            public Int32Field TR_TY;
            public DoubleField BGNBAL;
            public DoubleField BGNCST;
            public DoubleField UCST;
            public DoubleField Price;
            public DoubleField INQTY;
            public DoubleField OUTQTY;
            public DoubleField BAL;
            public StringField PackageID;
            public DoubleField BGNBONASQTY;
            public DoubleField BONASQTY;
            public DoubleField MinQty;
            public DoubleField MaxQty;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
        }
    }
}
