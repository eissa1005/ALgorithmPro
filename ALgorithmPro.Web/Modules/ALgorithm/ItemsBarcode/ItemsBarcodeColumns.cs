using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.Web.Modules.Lookup;
using ALgorithmPro.Lookup;

namespace ALgorithmPro.ALgorithm.Columns
{
    [ColumnsScript("ALgorithm.ItemsBarcode")]
    [BasedOnRow(typeof(Entities.ItemsBarcodeRow), CheckNames = true)]
    public class ItemsBarcodeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Hidden]
        public Int64 ID { get; set; }
        public String ItemID { get; set; }
      
        [EditLink ,AlignRight]
        public String Barcode { get; set; }
        
        [EditLink, AlignCenter]
        public String Item_CD { get; set; }

        [LookupEditor(typeof(PackageLookup), AutoComplete = true)]
        public String PKID { get; set; }
        public String PKName { get; set; }
        public Double PKRAT { get; set; }
        public Double SPRC2 { get; set; }
        public Double SPRC3 { get; set; }
        public Double SPRC4 { get; set; }
        public Double SPRC5 { get; set; }
        public Double SPRC6 { get; set; }
        public Double BGNCST { get; set; }
        public Double UCST { get; set; }
        public Double Price { get; set; }
        public Status? Status { get; set; }
        public String EnteredBy { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime EntryDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}