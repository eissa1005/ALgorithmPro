using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using ALgorithmPro.Web.Modules.Common;

namespace ALgorithmPro.ALgorithm.Forms
{
    [FormScript("ALgorithm.Currency")]
    [BasedOnRow(typeof(Entities.CurrencyRow), CheckNames = true)]
    [ColumnsScript("ALgorithm.Currency")]
    public class CurrencyForm
    {
        [HalfWidth]
        public String CurrencyID { get; set; }
        [HalfWidth]
        public String Name_AR { get; set; }
        [HalfWidth]
        public String Name_EN { get; set; }
        [HalfWidth]
        public Double CUR_RAT { get; set; }
        [HalfWidth]
        public DateTime RAT_DT { get; set; }
        [HalfWidth]
        public String RAT_RTIO { get; set; }
        [HalfWidth]
        public Double ICUR_RAT { get; set; }
        [HalfWidth]
        public String CUR_PRFX_AR { get; set; }
        [HalfWidth]
        public String CUR_PRFX_EN { get; set; }
        [HalfWidth]
        public String CUR_SMPL_AR { get; set; }
        [HalfWidth]
        public String CUR_SMPL_EN { get; set; }
        [HalfWidth]
        public Double CUR_RNG { get; set; }
        [HalfWidth]
        public String CUR_ACCNO { get; set; }
        [HalfWidth]
        public String ROLL_NO { get; set; }
        [HalfWidth]
        public Status? Status { get; set; }
        public String RMRK { get; set; }
       
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