using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using ALgorithmPro.Web.Modules.Common;

namespace ALgorithmPro.ALgorithm.Columns
{
    [ColumnsScript("ALgorithm.Package")]
    [BasedOnRow(typeof(Entities.PackageRow), CheckNames = true)]
    public class PackageColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ID { get; set; }
        [EditLink]
        public String PKID { get; set; }
        public String PK_NM_AR { get; set; }
        public String PK_NM_EN { get; set; }
        public Decimal PKCNT { get; set; }
        public Decimal FACT { set; get; }
        public String SPKID { get; set; }
        public String RMRK { get; set; }
        public String RMRK2 { get; set; }
        public Status? Status { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}