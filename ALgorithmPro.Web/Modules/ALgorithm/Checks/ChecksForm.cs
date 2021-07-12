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
    [FormScript("ALgorithm.Checks")]
    [BasedOnRow(typeof(Entities.ChecksRow), CheckNames = true)]
    [ColumnsScript("ALgorithm.Checks")]
    public class ChecksForm
    {
        [Tab("General")]
        [HalfWidth]
        public String CHK_NO { get; set; }
        [HalfWidth]
        public CheckType? CHK_TYP { get; set; }
        [HalfWidth]
        public DocType? DOC_TYP { get; set; }
        [HalfWidth]
        public String StoreID { get; set; }
        [Hidden]
        public Int32 TR_TY { get; set; }
        [Hidden]
        public String TRTY_NAME { get; set; }
        [Hidden]
        public Int32 TR_NO { get; set; }
        [Hidden]
        public Int32 LN_NO { get; set; }
        [Hidden]
        public Int32 CRDB { get; set; }
        [Hidden]
        public String Store_NAME { get; set; }
        [HalfWidth]
        public String ACC_NO { get; set; }
        [Hidden]
        public String ACC_NAME { get; set; }
        [HalfWidth]
        public String BNKID { get; set; }
        [HalfWidth]
        public Double AMT { get; set; }
        [HalfWidth]
        public Double AMT_PAID { get; set; }
        [HalfWidth]
        public Double TotalValue { get; set; }
        [HalfWidth]
        public Double ExpenseValue { get; set; }
        [HalfWidth]
        public CheckTRTY? STAT { get; set; }
        [HalfWidth]
        public String RPACC_NO { get; set; }
        [Hidden]
        public String RPACC_NAME { get; set; }
        [HalfWidth]
        public String Notes_ACCNO { get; set; }
        [Hidden]
        public String Notes_ACCNAME { get; set; }
        [HalfWidth]
        public String Endorsed_NO { get; set; }
        [Hidden]
        public String Endorsed_NAME { get; set; }
        [HalfWidth]
        public String CashBoxID { get; set; }
        [Hidden]
        public String Cash_NAME { get; set; }
        [Hidden]
        public String Currency_NAME { get; set; }
        [Hidden]
        public Double CUR_VL { get; set; }
      
        
        [HalfWidth]
        public DateTime ISU_DT { get; set; }
        [HalfWidth]
        public DateTime DUE_DT { get; set; }
        [HalfWidth]
        [Tab("Banks")]
        
        [Hidden]
        public String BNK_NAME { get; set; }
        [HalfWidth]
        public String CBNKID { get; set; }
        [Hidden]
        public String CBNK_NAME { get; set; }
        [HalfWidth]
        public String File_NO { get; set; }
        [Hidden]
        public String LAST_ACC { get; set; }
       
        [HalfWidth]
        public DateTime STAT_DT { get; set; }
        [HalfWidth]
        public String DEPT_BNKID { get; set; }
        [Hidden]
        public String DEPT_BNKNM { get; set; }
        [HalfWidth]
        public String ByHand { get; set; }
        [Hidden]
        public String TRNSACC { get; set; }
        [HalfWidth]
        public String Rep_CD { get; set; }
        [Hidden]
        public String Rep_NAME { get; set; }
        [HalfWidth]
        public String Rep_CD2 { get; set; }
        [Hidden]
        public String Rep_NAME2 { get; set; }
        [HalfWidth]
        public Boolean POSTED { get; set; }
        [HalfWidth]
        public String SUM_CD { get; set; }
        [Hidden]
        public String SUM_NAME { get; set; }
        [HalfWidth]
        public Int32 GL_NO { get; set; }
        [Hidden]
        public Int32 GL_TY { get; set; }
        [HalfWidth]
        public String DOC_NO { get; set; }
        [Hidden]
        public String RMRK2 { get; set; }
        [HalfWidth]
        public String CurrencyID { get; set; }
        [HalfWidth]
        public Double RATE { get; set; }
        
        [HalfWidth]
        public Status? Status { get; set; }
        [TextAreaEditor(Cols =1,Rows =3)]
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