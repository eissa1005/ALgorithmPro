using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using ALgorithmPro.Lookup;

namespace ALgorithmPro.ALgorithm.Columns
{
    [ColumnsScript("ALgorithm.ItemsLoc")]
    [BasedOnRow(typeof(Entities.ItemsLocRow), CheckNames = true)]
    public class ItemsLocColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ID { get; set; }
        [EditLink]
        public String StoreID { get; set; }
        [EditLink]
        public String Item_CD { get; set; }
        public String Item_Name_AR { get; set; }
        public String Item_Name_EN { get; set; }
        public Int32 TR_TY { get; set; }
        public Double BGNBAL { get; set; }
        public Double BGNCST { get; set; }
        public Double UCST { get; set; }
        public Double Price { get; set; }
        public Double INQTY { get; set; }
        public Double OUTQTY { get; set; }
        public Double BAL { get; set; }
        [LookupEditor(typeof(PackageLookup), AutoComplete = true)]
        public String PackageID { get; set; }
        public Double BGNBONASQTY { get; set; }
        public Double BONASQTY { get; set; }
        public Double MinQty { get; set; }
        public Double MaxQty { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}