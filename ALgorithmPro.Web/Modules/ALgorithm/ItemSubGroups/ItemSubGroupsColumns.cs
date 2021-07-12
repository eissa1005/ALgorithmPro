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
    [ColumnsScript("ALgorithm.ItemSubGroups")]
    [BasedOnRow(typeof(Entities.ItemSubGroupsRow), CheckNames = true)]
    public class ItemSubGroupsColumns
    {
        [Hidden]
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ID { get; set; }
        [EditLink]
        [DisplayName("CITMCD")]
        public String CITM_CD { get; set; }
        [DisplayName("Name Arabic")]
        public String Name_AR { get; set; }
        [DisplayName("Name English")]
        public String Name_EN { get; set; }
      
        [DisplayName("Parent Name")]
        public String ParentID { get; set; }
        [Hidden]
        public Int32 OrderBy { get; set; }
        public Status? Status { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}