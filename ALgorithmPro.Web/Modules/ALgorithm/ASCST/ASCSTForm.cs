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
    [FormScript("ALgorithm.ASCST")]
    [BasedOnRow(typeof(Entities.ASCSTRow), CheckNames = true)]
    public class ASCSTForm
    {
        public String CST_CD { get; set; }
        public String CST_NM_AR { get; set; }
        public String CST_NM_EN { get; set; }
        public String MCST_CD { get; set; }
        public String CST_CTG { get; set; }
        public Int16 CST_TY { get; set; }
        public String SUM_CD { get; set; }
        public String SSUM_CD { get; set; }
        public String ACC_NO { get; set; }
        public String ACC_NM_AR { get; set; }
        public String ACC_NM_EN { get; set; }
        public Single CSTRAT { get; set; }
        public DateTime DATE_IN { get; set; }
        public String Phone { get; set; }
        public String Mobile { get; set; }
        public Decimal BGNBAL { get; set; }
        public Int32 INV_NO { get; set; }
        [Hidden]
        public DateTime INV_DT { get; set; }
        [Hidden]
        public String ITM_DISC { get; set; }
        [Hidden]
        public Decimal QTY { get; set; }
        [Hidden]
        public String BANK_CD { get; set; }
        [Hidden]
        public String ETMD_CUR { get; set; }
        [Hidden]
        public Decimal ETMD_RATE { get; set; }
        [Hidden]
        public DateTime ITM_RSV_DT { get; set; }
        [Hidden]
        public DateTime ACT_DT { get; set; }
        [Hidden]
        public DateTime ITM_LOC_DT { get; set; }
        [Hidden]
        public String MSTR_NM { get; set; }
        [Hidden]
        public String MSTR_ADD { get; set; }
        [Hidden]
        public String MSTR_TEL { get; set; }
        [Hidden]
        public String ACC_ADD { get; set; }
        [Hidden]
        public String POST { get; set; }
        [Hidden]
        public Int16 Accept { get; set; }
        [Hidden]
        public Decimal DISC { get; set; }
        [Hidden]
        public DateTime Start_DT { get; set; }
        [Hidden]
        public DateTime End_Dt { get; set; }
        [Hidden]
        public String Dor_NO { get; set; }
        [Hidden]
        public Int32 TR_NO { get; set; }
        [Hidden]
        public Decimal TR_TOT { get; set; }
        public Int32 Status { get; set; }
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