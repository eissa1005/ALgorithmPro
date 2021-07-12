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
    [ColumnsScript("ALgorithm.SSUMS")]
    [BasedOnRow(typeof(Entities.SSUMSRow), CheckNames = true)]
    public class SSUMSColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ID { get; set; }
        [EditLink]
        public String SSUM_CD { get; set; }
        public String SSUM_NM_AR { get; set; }
        public String SSUM_NM_EN { get; set; }
        public String MSSUM_CD { get; set; }
        public String SSUM_CST_CD { get; set; }
        public String SSUM_CTG { get; set; }
        [Hidden]
        public DateTime ST_DT { get; set; }
        [Hidden]
        public String FMLY { get; set; }
        public String GSSUM_CD { get; set; }
        public String Phone { get; set; }

        [DisplayName("Address")]
        public String ADDRS { get; set; }
        public String SUM_CD { get; set; }
        public DateTime FDT { get; set; }
        public DateTime TDT { get; set; }
        public String SSUM_CATG { get; set; }
        public Status? Status { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}