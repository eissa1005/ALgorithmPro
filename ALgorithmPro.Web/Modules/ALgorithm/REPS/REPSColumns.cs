using Serenity.ComponentModel;
using System.ComponentModel;
using ALgorithmPro.Web.Modules.Common.Common;
using System;
using ALgorithmPro.Web.Modules.Common;

namespace ALgorithmPro.ALgorithm.Columns
{
    [ColumnsScript("ALgorithm.REPS")]
    [BasedOnRow(typeof(Entities.REPSRow), CheckNames = true)]
    public class REPSColumns
    {
        [Hidden]
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int64 ID { get; set; }
        [EditLink]
        public String REP_CD { get; set; }
        public String REP_NAME { get; set; }
        public String REP_NAME_EN { get; set; }
        public String SupervisorID { get; set; }
        public Decimal SaleCommision { get; set; }
        public Decimal CollectCommision { get; set; }
        public String PriceID { get; set; }
        public Status? Status { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}