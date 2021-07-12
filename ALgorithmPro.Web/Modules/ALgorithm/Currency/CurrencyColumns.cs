using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ALgorithmPro.ALgorithm.Columns
{
    [ColumnsScript("ALgorithm.Currency")]
    [BasedOnRow(typeof(Entities.CurrencyRow), CheckNames = true)]
    public class CurrencyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ID { get; set; }
        [EditLink]
        public String CurrencyID { get; set; }
        public String Name_AR { get; set; }
        public String Name_EN { get; set; }
        public Double CUR_RAT { get; set; }
        public DateTime RAT_DT { get; set; }
        public String RAT_RTIO { get; set; }
        public Double ICUR_RAT { get; set; }
        public String CUR_PRFX_AR { get; set; }
        public String CUR_PRFX_EN { get; set; }
        public String CUR_SMPL_AR { get; set; }
        public String CUR_SMPL_EN { get; set; }
        public Double CUR_RNG { get; set; }
        public String CUR_ACCNO { get; set; }
        public String ROLL_NO { get; set; }
        public String RMRK { get; set; }
        public Int32 Status { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}