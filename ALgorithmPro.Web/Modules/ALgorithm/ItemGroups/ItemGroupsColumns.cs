using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using ALgorithmPro.Web.Modules.Common;

namespace ALgorithmPro.ALgorithm.Columns
{
    [ColumnsScript("ALgorithm.ItemGroups")]
    [BasedOnRow(typeof(Entities.ItemGroupsRow), CheckNames = true)]
    public class ItemGroupsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ID { get; set; }
        [EditLink]
        [DisplayName("MITMCD")]
        public String MITM_CD { get; set; }

        [DisplayName("Name Arabic")]
        public String Name_AR { get; set; }

        [DisplayName("Name English")]
        public String Name_EN { get; set; }
        public Status? Status { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}