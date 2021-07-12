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
    [FormScript("ALgorithm.SSUMS")]
    [BasedOnRow(typeof(Entities.SSUMSRow), CheckNames = true)]
    public class SSUMSForm
    {
        public String SSUM_CD { get; set; }
        public String SSUM_NM_AR { get; set; }
        public String SSUM_NM_EN { get; set; }
        public String MSSUM_CD { get; set; }
        public String SSUM_CST_CD { get; set; }
        public String SSUM_CTG { get; set; }
        public DateTime ST_DT { get; set; }
        public String FMLY { get; set; }
        public String GSSUM_CD { get; set; }
        public String Phone { get; set; }
        public String ADDRS { get; set; }
        public String SUM_CD { get; set; }
        public DateTime FDT { get; set; }
        public DateTime TDT { get; set; }
        public String SSUM_CATG { get; set; }
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