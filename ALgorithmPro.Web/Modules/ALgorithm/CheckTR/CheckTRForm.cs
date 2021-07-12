using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ALgorithmPro.ALgorithm.Forms
{
    [FormScript("ALgorithm.CheckTR")]
    [BasedOnRow(typeof(Entities.CheckTRRow), CheckNames = true)]
    [ColumnsScript("ALgorithm.CheckTR")]
    public class CheckTRForm
    {
        [Tab("Basic Information")]
        [HalfWidth]
        public Int32 CHK_TYP { get; set; }
        [HalfWidth]
        public String CHK_NO { get; set; }
        [HalfWidth]
        public Int32 TR_TY { get; set; }
        [Hidden]
        public Int32 TR_NO { get; set; }
        [Hidden]
        public Int32 LN_NO { get; set; }
        [HalfWidth]
        public Int32 Doc_TYP { get; set; }
        [HalfWidth]
        public DateTime TR_DT { get; set; }
        [HalfWidth]
        public String ACC_NO { get; set; }
        [HalfWidth]
        public DateTime ISU_DT { get; set; }
        [HalfWidth]
        public DateTime DUE_DT { get; set; }
        [HalfWidth]
        public String BNKID { get; set; }
        [Hidden]
        public String BNK_NAME { get; set; }
        [HalfWidth]
        public String Notes_ACCID { get; set; }
        [Hidden]
        public String Notes_ACCNAME { get; set; }
        [HalfWidth]
        public String Endorsed_NO { get; set; }
        [Hidden]
        public String Endorsed_NAME { get; set; }
        [HalfWidth]
        public Int32 STAT { get; set; }
        [HalfWidth]
        public String StoreID { get; set; }
        [Hidden]
        public String Store_NAME { get; set; }
        [Hidden]
        public String TRTY_NAME { get; set; }
        [Hidden]
        public String ACC_NAME { get; set; }
        [Hidden]
        public String ACC_NAME2 { get; set; }
        [HalfWidth]
        public DateTime STAT_DT { get; set; }
        [HalfWidth]
        public Double AMT { get; set; }
        [HalfWidth]
        public Double AMT_PAID { get; set; }
        [HalfWidth]
        public Double TotalValue { get; set; }
        [HalfWidth]
        public Double ExpenseValue { get; set; }
        [HalfWidth]
        public String DEPT_BNKID { get; set; }
        [Hidden]
        public String DEPT_BNKNM { get; set; }
        [HalfWidth]
        public String CBNKID { get; set; }
        [Hidden]
        public String CBNK_NAME { get; set; }
        [HalfWidth]
        public String RPACC_NO { get; set; }
        [Hidden]
        public String RPACC_NAME { get; set; }
        [Hidden]
        public String Cash_NAME { get; set; }
        [Hidden]
        public Double DIFF_VL { get; set; }
        [Tab("General")]
        [HalfWidth]
        public String ACC_NO2 { get; set; }
        [HalfWidth]
        public String CashBoxID { get; set; }
        [Hidden]
        public String DSCR_AR { get; set; }
        [Hidden]
        public Boolean POSTED { get; set; }
        [Hidden]
        public Int32 SER_NO { get; set; }
        [Hidden]
        public Int32 CRDB { get; set; }
        [Hidden]
        public Boolean CHKPOST { get; set; }
        [HalfWidth]
        public String File_NO { get; set; }
        [Hidden]
        public Int32 PAY_TYPE { get; set; }
        [Hidden]
        public Double CUR_VL { get; set; }
        [HalfWidth]
        public String REP_CD { get; set; }
        [Hidden]
        public String REP_NAME { get; set; }
        [HalfWidth]
        public String CurrencyID { get; set; }
        [Hidden]
        public String Currency_NAME { get; set; }
        [HalfWidth]
        public Double RATE { get; set; }
        [Hidden]
        public String ACC_NO3 { get; set; }
        [Hidden]
        public String ACC_NAME3 { get; set; }
        [Hidden]
        public String ACC_NO4 { get; set; }
        [Hidden]
        public String ACC_NAME4 { get; set; }
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