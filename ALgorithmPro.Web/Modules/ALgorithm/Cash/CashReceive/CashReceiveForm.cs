
using System;
using ALgorithmPro.Web.Modules.Common;
using Serenity.ComponentModel;

namespace ALgorithmPro.ALgorithm.Forms
{
    [FormScript("ALgorithm/CashReceive")]
    [BasedOnRow(typeof(Entities.CashReceiveRow), CheckNames = true)]
    public class CashReceiveForm
    {
        [Hidden]
        public Int64 ASTRHID { get; set; }
        [HalfWidth]
        public Int32 TR_NO { get; set; }
        [HalfWidth]
        public String Doc_Number { get; set; }
        [HalfWidth]
        public Int32 TR_TY { get; set; }
        [HalfWidth]
        public String StoreID { get; set; }
        [HalfWidth]
        public DateTime TR_DT { get; set; }
        [HalfWidth]
        public String CurrencyID { get; set; }
        [HalfWidth]
        public String ACC_NO { get; set; }
        [HalfWidth]
        public String ACC_NAME { get; set; }
        [HalfWidth]
        public Double TotalValue { get; set; }
        [HalfWidth]
        public String ACC_NO2 { get; set; }
        [HalfWidth]
        public String REP_CD { get; set; }
        [HalfWidth]
        public String REP_CD2 { get; set; }
        [HalfWidth]
        public String CST_CD { get; set; }
        [HalfWidth]
        public Status Status { get; set; }
       
        public String RMRK { get; set; }


        [Hidden]
        public String RMRK2 { get; set; }
        [Hidden]
        public String HDSCR_AR { get; set; }
        [Hidden]
        public String ExpensesID { get; set; }
        [Hidden]
        public String ExpensesName { get; set; }

        [Hidden]
        public String SUM_CD { get; set; }
        [Hidden]
        public String ACC_NAME2 { get; set; }
        [Hidden]
        public String CashBoxID { get; set; }
        [Hidden]
        public String TRTY_NAME { get; set; }
        [Hidden]
        public Int32 TR_DS { get; set; }
        [Hidden]
        public String Cash_NAME { get; set; }
        [Hidden]
        public String Store_NAME { get; set; }
        [Hidden]
        public Int64 GLHeaderID { get; set; }
        [Hidden]
        public String PStoreID { get; set; }
        [Hidden]
        public Int32 PTR_TY { get; set; }
        [Hidden]
        public Int32 PTR_NO { get; set; }
        [Hidden]
        public String SupervisorID { get; set; }
       
        [Hidden]
        public String CST_NAME { get; set; }
       
        [Hidden]
        public String HDSCR_EN { get; set; }
        [Hidden]
        public Double Paid { get; set; }
       
        [Hidden]
        public Double NetTotal { get; set; }
        [Hidden]
        public Int32 Flag { get; set; }
        [Hidden]
        public Double BALDB { get; set; }
        [Hidden]
        public Double BALCR { get; set; }
        [Hidden]
        public Double BAL { get; set; }
       
        [Hidden]
        public String SSUM_CD { get; set; }
        [Hidden]
        public String ACC_NO3 { get; set; }
        [Hidden]
        public String ACC_NAME3 { get; set; }
        [Hidden]
        public String CHK_NO { get; set; }
        [Hidden]
        public Int32 CHK_TYP { get; set; }
        [Hidden]
        public String CHKTYP_NAME { get; set; }
        [Hidden]
        public Int32 CHKTRTY { get; set; }
        [Hidden]
        public String CHKTRTY_NAME { get; set; }
        [Hidden]
        public DateTime ISU_DT { get; set; }
        [Hidden]
        public DateTime DUE_DT { get; set; }
        [Hidden]
        public Double AMT { get; set; }
        [Hidden]
        public Double AMT_PAID { get; set; }
        [Hidden]
        public Double CHK_EXPENSVL { get; set; }
        [Hidden]
        public Double CHK_TotalValue { get; set; }
        [Hidden]
        public String BNKID { get; set; }
        [Hidden]
        public String BNK_NAME { get; set; }
        [Hidden]
        public String CBNKID { get; set; }
        [Hidden]
        public String CBNK_NAME { get; set; }
        [Hidden]
        public String RPACC_ACCNO { get; set; }
        [Hidden]
        public String RPACC_NAME { get; set; }
        [Hidden]
        public String DEPT_BNKID { get; set; }
        [Hidden]
        public String DEPT_BNKNAME { get; set; }
        [Hidden]
        public String Notes_ACCNO { get; set; }
        [Hidden]
        public String Notes_ACCNAME { get; set; }
        [Hidden]
        public String Endorsed_ACCNO { get; set; }
        [Hidden]
        public String Endorsed_NAME { get; set; }
        [Hidden]
        public String REP_NAME { get; set; }
        [Hidden]
        public String REP_NAME2 { get; set; }
        [Hidden]
        public Double EXPENSE_VL { get; set; }
        [Hidden]
        public String Currency_NAME { get; set; }
        [Hidden]
        public Double RATE { get; set; }
        [Hidden]
        public Double CUR_VL { get; set; }
        [Hidden]
        public Boolean GlPosted { get; set; }
        [Hidden]
        public Int32 CloseStatus { get; set; }
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