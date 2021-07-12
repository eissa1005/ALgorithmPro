using ALgorithmPro.Lookup;
using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.Web.Modules.Common.Common;
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
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[Stores]")]
    [DisplayName("Stores"), InstanceName("Stores")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class StoresRow : Row<StoresRow.RowFields>, IIdRow, INameRow
    {
        [Hidden]
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("StoreID"), Column("StoreID"), Size(100), PrimaryKey, QuickSearch, NameProperty]
        public String StoreID
        {
            get => fields.StoreID[this];
            set => fields.StoreID[this] = value;
        }

        [DisplayName("Name Arabic"), Column("Store_Name_AR"), Size(200), NotNull]
        public String Store_Name_AR
        {
            get => fields.Store_Name_AR[this];
            set => fields.Store_Name_AR[this] = value;
        }

        [DisplayName("Name English"), Column("Store_Name_EN"), Size(200), NotNull]
        public String Store_Name_EN
        {
            get => fields.Store_Name_EN[this];
            set => fields.Store_Name_EN[this] = value;
        }

        [DisplayName("BranchID"), Column("BranchID"), NotNull]
        public Int32? BranchID
        {
            get => fields.BranchID[this];
            set => fields.BranchID[this] = value;
        }

        [DisplayName("ADDRS"),Column("ADDRS"), Size(200)]
        public String ADDRS
        {
            get => fields.ADDRS[this];
            set => fields.ADDRS[this] = value;
        }

        [DisplayName("GL Account"),Column("GLACCID")]
        public Int32? GLACCID
        {
            get => fields.GLACCID[this];
            set => fields.GLACCID[this] = value;
        }

        [DisplayName("GLCost"),Column("GLCSTID")]
        public Int32? GLCSTID
        {
            get => fields.GLCSTID[this];
            set => fields.GLCSTID[this] = value;
        }

        [DisplayName("Cost Name"), Column("CST_CD"), Size(100)]
        [LookupEditor(typeof(CSTLookup),AutoComplete = true)]
        public String CST_CD
        {
            get => fields.CST_CD[this];
            set => fields.CST_CD[this] = value;
        }

        [DisplayName("Sum Name"), Column("SUM_CD"), Size(100)]
        [LookupEditor(typeof(SUMSLookup), AutoComplete = true)]
        public String SUM_CD
        {
            get => fields.SUM_CD[this];
            set => fields.SUM_CD[this] = value;
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

        public StoresRow()
            : base()
        {
        }

        public StoresRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public StringField StoreID;
            public StringField Store_Name_AR;
            public StringField Store_Name_EN;
            public Int32Field BranchID;
            public StringField ADDRS;
            public Int32Field GLACCID;
            public Int32Field GLCSTID;
            public StringField CST_CD;
            public StringField SUM_CD;
            public Int32Field Status;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
        }
    }
}
