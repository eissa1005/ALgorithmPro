using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ALgorithmPro.ALgorithm.Forms
{
    [FormScript("ALgorithm.PriceTypes")]
    [BasedOnRow(typeof(Entities.PriceTypesRow), CheckNames = true)]
    
    public class PriceTypesForm
    {
        public String PriceId { get; set; }
        public String NameAr { get; set; }
        public String NameEn { get; set; }
        public Int32 Status { get; set; }
        public String EnteredBy { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime EntryDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}