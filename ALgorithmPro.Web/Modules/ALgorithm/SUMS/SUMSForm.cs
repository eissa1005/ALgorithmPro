using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using ALgorithmPro.Web.Modules.Common.Common;
using ALgorithmPro.Web.Modules.Common;

namespace ALgorithmPro.ALgorithm.Forms
{
    [FormScript("ALgorithm.SUMS")]
    [BasedOnRow(typeof(Entities.SUMSRow), CheckNames = true)]
    public class SUMSForm
    {
        public String SUM_CD { get; set; }
        public String SUM_NM_AR { get; set; }
        public String SUM_NM_EN { get; set; }
        public String MSUM_CD { get; set; }
        public String SUM_CATG { get; set; }
        public String SSUM_CD { get; set; }
        public String Phone { get; set; }
        public String Mobile { get; set; }
        public String ADDRS { get; set; }
        public String RegionID { get; set; }
        public String ACC_NO { get; set; }
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