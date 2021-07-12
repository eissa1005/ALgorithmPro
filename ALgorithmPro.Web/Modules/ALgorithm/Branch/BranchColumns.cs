using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using ALgorithmPro.Web.Modules.Common.Common;
using ALgorithmPro.Web.Modules.Common;

namespace ALgorithmPro.ALgorithm.Columns
{
    [ColumnsScript("ALgorithm.Branch")]
    [BasedOnRow(typeof(Entities.BranchRow), CheckNames = true)]
    public class BranchColumns
    {
        [Hidden]
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ID { get; set; }
        [EditLink]
        public String BranchID { get; set; }
        public String Name_AR { get; set; }
        public String Name_EN { get; set; }
        public Status? Status { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}