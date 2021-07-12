using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ALgorithmPro.ALgorithm.Forms
{
    [FormScript("ALgorithm.Package")]
    [BasedOnRow(typeof(Entities.PackageRow), CheckNames = true)]
    public class PackageForm
    {
        [HalfWidth(UntilNext = true)]
        public String PKID { get; set; }
        public String PK_NM_AR { get; set; }
        public String PK_NM_EN { get; set; }
        public Decimal PKCNT { get; set; }
        public Decimal FACT { set; get; }
        public String SPKID { get; set; }
        public String RMRK { get; set; }
        public String RMRK2 { get; set; }
        public Int32 Status { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}