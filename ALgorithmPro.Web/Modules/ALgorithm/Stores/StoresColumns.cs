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
    [ColumnsScript("ALgorithm.Stores")]
    [BasedOnRow(typeof(Entities.StoresRow), CheckNames = true)]
    public class StoresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ID { get; set; }
        [EditLink]
        public String StoreID { get; set; }
        public String Store_Name_AR { get; set; }
        public String Store_Name_EN { get; set; }
        public Int32 BranchID { get; set; }
        public String ADDRS { get; set; }
        public Int32 GLACCID { get; set; }
        public Int32 GLCSTID { get; set; }
        public String CST_CD { get; set; }
        public String SUM_CD { get; set; }
        public Status? Status { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}