using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ALgorithmPro.ALgorithm.Columns
{
    [ColumnsScript("ALgorithm.RestoreASTRD")]
    [BasedOnRow(typeof(Entities.RestoreASTRDRow), CheckNames = true)]
    public class RestoreASTRDColumns
    {
        [Hidden]
        public Int64 ID { get; set; }
        [Hidden]
        public Int64 DetailID { get; set; }
        [Hidden]
        public Int64 HeaderID { get; set; }
        [EditLink, Width(120)]
        public String Item_CD { get; set; }
        [Width(200)]
        public String ITM_NM_AR { get; set; }
        public String PKID { get; set; }
        public Double Price { set; get; }
        public Double QTY { get; set; }
        public Double RestoreQty { get; set; }
        public Double Value { get; set; }
        public Double DISC { get; set; }
        public Double DISC1 { get; set; }
        public Double DISC2 { get; set; }
        public Double DISC3 { get; set; }
        public Double NetBeforeTAX { get; set; }
        public Double TAX1 { get; set; }
        public Double TAX2 { get; set; }
        public Double TAX3 { get; set; }
        [Hidden]
        public Double TAXVAL { get; set; }
        public Double NetAfterTAX { get; set; }
        public Double NET { get; set; }

        [Hidden]
        public Double PKPRC { get; set; }
        [Hidden]
        public Double PK { get; set; }
        [Hidden]
        public Double DISC4 { get; set; }
        [Hidden]
        public Double DISC1R { get; set; }
        [Hidden]
        public Double DISC2R { get; set; }
        [Hidden]
        public Double DISC3R { get; set; }
        [Hidden]
        public Double STAX_VL { get; set; }
        [Hidden]
        public Double TAX1R { get; set; }
        [Hidden]
        public Double TAX2R { get; set; }
        [Hidden]
        public Double TAX3R { get; set; }
        [Hidden]
        public Double ReturnQty { get; set; }
        public Double ItemBAL { get; set; }

        [Hidden]
        public Int32 TR_TY { get; set; }
        [Hidden]
        public String TRTY_NAME { get; set; }
        [Hidden]
        public Int32 TR_NO { get; set; }
        [Hidden]
        public Int32 LN_NO { get; set; }
        [Hidden]
        public DateTime TR_DT { get; set; }
        [Hidden]
        public String StoreID { get; set; }
        [Hidden]
        public String Store_NAME { get; set; }
        [Hidden]
        public Int32 TR_DS { get; set; }
        [Hidden]
        public Int32 GRP { get; set; }
        [Hidden]
        public String ACC_NO { get; set; }
        [Hidden]
        public String ACC_NAME { get; set; }
        [Hidden]
        public String ACC_NO2 { get; set; }
        [Hidden]
        public String ACC_NO3 { get; set; }
        [Hidden]
        public String TR_DS_AR { get; set; }
        [Hidden]
        public String TR_DS_EN { get; set; }

        [Hidden]
        public String ItemBarCode { get; set; }
        [Hidden]
        public String PKName { get; set; }
        [Hidden]
        public Double PKCST { get; set; }
        [Hidden]
        public Double PKCSTVL { get; set; }
        [Hidden]
        public Double FIFO { get; set; }

        [Hidden]
        public Double FIFOVL { get; set; }
        [Hidden]
        public Double LIFO { get; set; }
        [Hidden]
        public Double LIFOVL { get; set; }
        [Hidden]
        public Double EXPENSEVL { get; set; }
        [Hidden]
        public Double EXPENSE_CNT { get; set; }
        [Hidden]
        public String CurrencyID { get; set; }
        [Hidden]
        public String Currency_Name { get; set; }
        [Hidden]
        public Double RATE { get; set; }
        [Hidden]
        public Double CUR_VL { get; set; }
        [Hidden]
        public Double DetailRemark { get; set; }
        [Hidden]
        public Int32 BonusID { get; set; }
        [Hidden]
        public Int32 PTR_NO { get; set; }
        [Hidden]
        public Int32 PTR_TY { get; set; }
        [Hidden]
        public String PStoreID { get; set; }
        [Hidden]
        public Double CustomerPrice { get; set; }
        [Hidden]
        public String PriceID { get; set; }
        [Hidden]
        public String PriceLevelId { get; set; }
        [Hidden]
        public String CashBoxID { get; set; }
        [Hidden]
        public String Cash_NAME { get; set; }
        [Hidden]
        public String REP_CD { get; set; }
        [Hidden]
        public String REP_NAME { get; set; }
        [Hidden]
        public String REP_CD2 { get; set; }
        [Hidden]
        public String REP_NAME2 { get; set; }
        [Hidden]
        public String CST_CD { get; set; }
        [Hidden]
        public String CST_NAME { get; set; }
        [Hidden]
        public String SUM_CD { get; set; }
        [Hidden]
        public String SUM_NAME { get; set; }
        [Hidden]
        public String SSUM_CD { get; set; }
        [Hidden]
        public String SSUM_NAME { get; set; }
        [Hidden]
        public String ACC_NAME2 { get; set; }
        [Hidden]
        public String ACC_NAME3 { get; set; }
        [Hidden]
        public String Recipient { get; set; }
        [Hidden]
        public String RecipientDate { get; set; }
        [Hidden]
        public Double disc_cur_val { get; set; }
        [Hidden]
        public Double tax_cur_val { get; set; }
        [Hidden]
        public Boolean GLPOST { get; set; }
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
    }
}