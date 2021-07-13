using System;
using Serenity.ComponentModel;

namespace ALgorithmPro.Model.Forms
{
    [FormScript("Model.ASTRHVIEW")]
    [BasedOnRow(typeof(Entities.ASTRHVIEWRow), CheckNames = true)]
    public class ASTRHVIEWForm
    {
        public String StoreID { get; set; }
        public String Store_NAME { get; set; }
        public Int64 HeaderID { get; set; }
        public Int32 TR_NO { get; set; }
        public Int32 TR_TY { get; set; }
        public String TRTY_NAME { get; set; }
        public DateTime TR_DT { get; set; }
        public Int32 ReferenceNo { get; set; }
        public String DocTransNo { get; set; }
        public String ACC_NO { get; set; }
        public String ACC_NAME { get; set; }
        public String ACC_NO2 { get; set; }
        public String ACC_NAME2 { get; set; }
        public String CashBoxID { get; set; }
        public String Cash_NAME { get; set; }
        public String REP_CD { get; set; }
        public String REP_NAME { get; set; }
        public String REP_CD2 { get; set; }
        public String REP_NAME2 { get; set; }
        public String CST_CD { get; set; }
        public String CST_NAME { get; set; }
        public String SUM_CD { get; set; }
        public String SUM_NAME { get; set; }
        public String SSUM_CD { get; set; }
        public String SSUM_NAME { get; set; }
        public String Phone1 { get; set; }
        public String Phone2 { get; set; }
        public String Phone3 { get; set; }
        public String ADDRS1 { get; set; }
        public String ADDRS2 { get; set; }
        public String MOBIL1 { get; set; }
        public String MOBIL2 { get; set; }
        public String SupervisorId { get; set; }
        public String CurrencyID { get; set; }
        public String Currency_NAME { get; set; }
        public Double RATE { get; set; }
        public String Notes { get; set; }
        public String PriceID { get; set; }
        public Double HDISC { get; set; }
        public Double HDISC1 { get; set; }
        public Double HDISC2 { get; set; }
        public Double HDISC3 { get; set; }
        public Double HDISC4 { get; set; }
        public Double HTAX { get; set; }
        public Double HTAX1 { get; set; }
        public Double HTAX2 { get; set; }
        public Double HTAX3 { get; set; }
        public String HDSCR_AR { get; set; }
        public Double Paid { get; set; }
        public Double Total { get; set; }
        public Double NetTotal { get; set; }
        public Double EXPENSEVL { get; set; }
        public Double HAddtions { get; set; }
        public Int32 PRT_CNT { get; set; }
        public Int32 PTR_TY { get; set; }
        public Int32 PTR_NO { get; set; }
        public String PStoreID { get; set; }
        public Int32 Status { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}