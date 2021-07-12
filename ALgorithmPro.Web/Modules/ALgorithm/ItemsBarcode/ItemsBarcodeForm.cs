using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using ALgorithmPro.Web.Modules.Common;

namespace ALgorithmPro.ALgorithm.Forms
{
    [FormScript("ALgorithm.ItemsBarcode")]
    [BasedOnRow(typeof(Entities.ItemsBarcodeRow), CheckNames = true)]
    public class ItemsBarcodeForm
    {
        
        [Hidden]
        public Int64 ItemID { get; set; }

        [HalfWidth]
        public String Barcode { get; set; }

        [Hidden]
        public String Item_CD { get; set; }
        
        [HalfWidth]
        public String PKID { get; set; }

        [HalfWidth]
        public String PKName { get; set; }

        [HalfWidth]
        public Double PKRAT { get; set; }

        [HalfWidth]
        public Double SPRC2 { get; set; }

        [HalfWidth]
        public Double SPRC3 { get; set; }
        
        [HalfWidth]
        public Double SPRC4 { get; set; }
        
        [HalfWidth]
        public Double SPRC5 { get; set; }
        
        [HalfWidth]
        public Double SPRC6 { get; set; }
        
        [HalfWidth]
        public Double BGNCST { get; set; }
        
        [HalfWidth]
        public Double UCST { get; set; }
        
        [HalfWidth]
        public Double Price { get; set; }
        
        [HalfWidth]
        public Status? Status { get; set; }

        [Hidden]
        public String EnteredBy { get; set; }

        [Hidden]
        public String UpdatedBy { get; set; }
        
        [Hidden]
        public DateTime EntryDate { get; set; }
       
        [Hidden]
        public DateTime UpdateDate { get; set; }
    }
}