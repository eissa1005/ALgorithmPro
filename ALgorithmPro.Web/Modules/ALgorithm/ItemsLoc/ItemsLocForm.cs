using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using ALgorithmPro.Lookup;

namespace ALgorithmPro.ALgorithm.Forms
{
    [FormScript("ALgorithm.ItemsLoc")]
    [BasedOnRow(typeof(Entities.ItemsLocRow), CheckNames = true)]
    public class ItemsLocForm
    {
        [HalfWidth(UntilNext =true)]
        public String StoreID { get; set; }
        public String Item_CD { get; set; }
        public String Item_Name_AR { get; set; }
        public String Item_Name_EN { get; set; }
        [Hidden]
        public Int32 TR_TY { get; set; }
        public Double BGNBAL { get; set; }
        public Double BGNCST { get; set; }
        public Double UCST { get; set; }
        public Double Price { get; set; }
        [Hidden]
        public Double INQTY { get; set; }
        [Hidden]
        public Double OUTQTY { get; set; }
        [Hidden]
        public Double BAL { get; set; }
        [LookupEditor(typeof(PackageLookup), AutoComplete = true,InplaceAdd = true)]
        public String PackageID { get; set; }
        public Double BGNBONASQTY { get; set; }
        public Double BONASQTY { get; set; }
        public Double MinQty { get; set; }
        public Double MaxQty { get; set; }
        
        [Hidden]
        public String EnteredBy { get; set; }
        
        [Hidden]
        public DateTime EntryDate { get; set; }
        
        [Hidden]
        public String UpdatedBy { get; set; }
        
        [Hidden]
        public DateTime UpdateDate { get; set; }
    }
}