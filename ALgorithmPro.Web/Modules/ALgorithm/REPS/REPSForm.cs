using System;
using Serenity.ComponentModel;
using System.ComponentModel;
using ALgorithmPro.Web.Modules.Common.Common;
using ALgorithmPro.Web.Modules.Lookup;
using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.Lookup;

namespace ALgorithmPro.ALgorithm.Forms
{
    [FormScript("ALgorithm.REPS")]
    [BasedOnRow(typeof(Entities.REPSRow), CheckNames = true)]
    
    public class REPSForm
    {
        public String REP_CD { get; set; }
        public String REP_NAME { get; set; }
        public String REP_NAME_EN { get; set; }
        [LookupEditor(typeof(SupervisorLookup))]
        public String SupervisorID { get; set; }
        public Decimal SaleCommision { get; set; }
        public Decimal CollectCommision { get; set; }
        public String PriceID { get; set; }
        public Status? Status { get; set; }
        [Hidden]
        public String EnteredBy { get; set; }

        [Hidden]
        public DateTime EntryDate { get; set; }

        [Hidden]
        public String UpdatedBy { get; set; }

        [Hidden]
        public DateTime UpdateDate { get; set; }
    }
}