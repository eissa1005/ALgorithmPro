using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ALgorithmPro.ALgorithm.Columns
{
    [ColumnsScript("ALgorithm.ASCST")]
    [BasedOnRow(typeof(Entities.ASCSTRow), CheckNames = true)]
    public class ASCSTColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ID { get; set; }
        [EditLink]
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
        public DateTime INV_DT { get; set; }
        public String ITM_DISC { get; set; }
        public Decimal QTY { get; set; }
        public String BANK_CD { get; set; }
        public String ETMD_CUR { get; set; }
        public Decimal ETMD_RATE { get; set; }
        public DateTime ITM_RSV_DT { get; set; }
        public DateTime ACT_DT { get; set; }
        public DateTime ITM_LOC_DT { get; set; }
        public String MSTR_NM { get; set; }
        public String MSTR_ADD { get; set; }
        public String MSTR_TEL { get; set; }
        public String ACC_ADD { get; set; }
        public String POST { get; set; }
        public Int16 Accept { get; set; }
        public Decimal DISC { get; set; }
        public DateTime Start_DT { get; set; }
        public DateTime End_Dt { get; set; }
        public String Dor_NO { get; set; }
        public Int32 TR_NO { get; set; }
        public Decimal TR_TOT { get; set; }
        public Int32 Status { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}