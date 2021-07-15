using System;
using Serenity.ComponentModel;
using System.ComponentModel;
using System.Collections.Generic;
using ALgorithmPro.ALgorithm.Entities;

namespace ALgorithmPro.ALgorithm.Forms
{
    [FormScript("ALgorithm.CashRestore")]
    [BasedOnRow(typeof(CashRestoreRow), CheckNames = true)]
    public class CashRestoreForm
    {
        [Category("CashRestore Info")]

        [FormWidth("col-sm-4")]
        public Int32 TR_TY { get; set; }

        [FormWidth("col-sm-4")]
        public String StoreID { get; set; }

        [FormWidth("col-sm-4")]
        public String CashBoxID { get; set; }

        [FormWidth("col-sm-4")]
        public Int32 TR_NO { get; set; }

        [FormWidth("col-sm-4")]
        public Int32 TR_DS { get; set; }

        [FormWidth("col-sm-4")]
        [DateTimeEditor]
        public DateTime TR_DT { get; set; }

        [FormWidth("col-sm-4")]
        public String DocTransNo { get; set; }

        [FormWidth("col-sm-4")]
        public String ACC_NO { get; set; }
        [FormWidth("col-sm-4")]
        public String ACC_NAME { get; set; }

        [FormWidth("col-sm-4")]
        public String REP_CD { get; set; }

        [FormWidth("col-sm-4")]
        public String REP_CD2 { get; set; }

        [FormWidth("col-sm-4")]
        public String CST_CD { get; set; }

        [FormWidth("col-sm-4")]
        public String CurrencyID { get; set; }

        [FormWidth("col-sm-4")]
        public Int32 ReferenceNo { get; set; }

        [FormWidth("col-sm-4")]
        public String PriceID { get; set; }

        [FormWidth("col-sm-4")]
        public Double Balance { get; set; }

        public String Notes { get; set; }


        [Hidden]
        public String HDSCR_AR { get; set; }
        [Hidden]
        public String SSUM_CD { get; set; }
        [Hidden]
        public String Cash_NAME { get; set; }
        [Hidden]
        public String OrderNo { get; set; }
        [Hidden]
        public String SUM_CD { get; set; }
        [Hidden]
        public String ACC_NO2 { get; set; }
        [Hidden]
        public String ACC_NAME2 { get; set; }
        [Hidden]
        public String ACC_NO3 { get; set; }
        [Hidden]
        public String ACC_NAME3 { get; set; }
        [Hidden]
        public String REP_NAME { get; set; }
        [Hidden]
        public String REP_NAME2 { get; set; }
        [Hidden]
        public String TRTY_NAME { get; set; }
        [Hidden]
        public String Store_NAME { get; set; }
        [Hidden]
        public String CST_NAME { get; set; }
        [Hidden]
        public String SUM_NAME { get; set; }
        [Hidden]
        public String SSUM_NAME { get; set; }
        [Hidden]
        public String SupervisorId { get; set; }
        [Hidden]
        public String Supervisor_NAME { get; set; }
        [Hidden]
        public String PStoreID { get; set; }
        [Hidden]
        public Int32 PTR_NO { get; set; }
        [Hidden]
        public Int32 PTR_TY { get; set; }
        [Hidden]
        public String HDSCR_EN { get; set; }
        [Hidden]
        public Boolean Priceedit { get; set; }

        [Hidden]
        public Double HDISC1 { get; set; }
        [Hidden]
        public Double HDISC2 { get; set; }
        [Hidden]
        public Double HDISC3 { get; set; }
        [Hidden]
        public Double HDISC4 { get; set; }
        [Hidden]
        public Double HDISC1R { get; set; }
        [Hidden]
        public Double HDISC2R { get; set; }
        [Hidden]
        public Double HDISC3R { get; set; }

        [Hidden]
        public Double HTAX1 { get; set; }
        [Hidden]
        public Double HTAX2 { get; set; }
        [Hidden]
        public Double HTAX3 { get; set; }
        [Hidden]
        public Double HTAX4 { get; set; }
        [Hidden]
        public Double HTAX1R { get; set; }
        [Hidden]
        public Double HTAX2R { get; set; }
        [Hidden]
        public Double HTAX3R { get; set; }

        [Hidden]
        public Double HdrAddtionsR { get; set; }
        [Hidden]
        public String PeriodCredit { get; set; }

        [Hidden]
        public Int32 Periodterm { get; set; }
        [Hidden]
        public Int32 InvStatus { get; set; }
        [Hidden]
        public String Currency_NAME { get; set; }
        [Hidden]
        public Double RATE { get; set; }
        [Hidden]
        public Double CUR_VL { get; set; }
        [Hidden]
        public Int32 PRT_CNT { get; set; }
        [Hidden]
        public Int32 Status { get; set; }
        [Hidden]
        public String EnteredBy { get; set; }
        [Hidden]
        public DateTime EntryDate { get; set; }
        [Hidden]
        public String UpdatedBy { get; set; }
        [Hidden]
        public DateTime UpdateDate { get; set; }
        [Hidden]
        public Double EXPENSEVL { get; set; }

        [DisplayName("Add Detials")]
        [CashRestoreASTRDEditor]
        public List<CashRestoreASTRDRow> DetailList { set; get; }

        [HalfWidth, ReadOnly(true)]
        public Double Total { get; set; }

        [HalfWidth]
        public Double Paid { get; set; }

        [HalfWidth, ReadOnly(true)]
        public Double HDISC { get; set; }
       
        [HalfWidth, ReadOnly(true)]
        public Double NetAfterTAX { get; set; }

        [HalfWidth, ReadOnly(true)]
        public Double HTAX { get; set; }

        [HalfWidth]
        public Double HAddtions { get; set; }

        [HalfWidth, ReadOnly(true)]
        public Double NetBeforeTAX { get; set; }

        [HalfWidth, ReadOnly(true)]
        public Double NetTotal { get; set; }

    }
}