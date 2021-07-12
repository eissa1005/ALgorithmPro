using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ALgorithmPro.ALgorithm.Columns
{
    [ColumnsScript("ALgorithm.CheckTR")]
    [BasedOnRow(typeof(Entities.CheckTRRow), CheckNames = true)]
    public class CheckTRColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ID { get; set; }
        public Int32 CHK_TYP { get; set; }
        [EditLink]
        public String CHK_NO { get; set; }
        public Int32 TR_TY { get; set; }
        public Int32 TR_NO { get; set; }
        public Int32 LN_NO { get; set; }
        public Int32 Doc_TYP { get; set; }
        public Int32 STAT { get; set; }
        public String StoreID { get; set; }
        public String Store_NAME { get; set; }
        public String TRTY_NAME { get; set; }
        public DateTime TR_DT { get; set; }
        public String ACC_NO { get; set; }
        public String ACC_NAME { get; set; }
        public String ACC_NO2 { get; set; }
        public String ACC_NAME2 { get; set; }
        public String BNKID { get; set; }
        public String BNK_NAME { get; set; }
        public String DEPT_BNKID { get; set; }
        public String DEPT_BNKNM { get; set; }
        public String CBNKID { get; set; }
        public String CBNK_NAME { get; set; }
        public String RPACC_NO { get; set; }
        public String RPACC_NAME { get; set; }
        public String Notes_ACCID { get; set; }
        public String Notes_ACCNAME { get; set; }
        public String Endorsed_NO { get; set; }
        public String Endorsed_NAME { get; set; }
        public String CashBoxID { get; set; }
        public String Cash_NAME { get; set; }
        public DateTime STAT_DT { get; set; }
        public DateTime ISU_DT { get; set; }
        public DateTime DUE_DT { get; set; }
        public Double AMT { get; set; }
        public Double AMT_PAID { get; set; }
        public Double TotalValue { get; set; }
        public Double ExpenseValue { get; set; }
        public Double DIFF_VL { get; set; }
        public String RMRK { get; set; }
        public String DSCR_AR { get; set; }
        public Boolean POSTED { get; set; }
        public Int32 SER_NO { get; set; }
        public Int32 CRDB { get; set; }
        public Boolean CHKPOST { get; set; }
        public String File_NO { get; set; }
        public Int32 PAY_TYPE { get; set; }
        public Double CUR_VL { get; set; }
        public String REP_CD { get; set; }
        public String REP_NAME { get; set; }
        public String CurrencyID { get; set; }
        public String Currency_NAME { get; set; }
        public Double RATE { get; set; }
        public String ACC_NO3 { get; set; }
        public String ACC_NAME3 { get; set; }
        public String ACC_NO4 { get; set; }
        public String ACC_NAME4 { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}