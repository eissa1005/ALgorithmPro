using System;
using Serenity.ComponentModel;
using ALgorithmPro.Model.Entities;

namespace ALgorithmPro.Model.Columns
{
    [ColumnsScript("Model.ASTRDVIEW")]
    [BasedOnRow(typeof(ASTRDVIEWRow), CheckNames = true)]
    public class ASTRDVIEWColumns
    {
        public Int64 HeaderID { get; set; }
        public Int32 TR_NO { get; set; }
        public Int32 TR_TY { get; set; }
        public DateTime TR_DT { get; set; }
        public String TRTY_NAME { get; set; }
        public String StoreID { get; set; }
        public String Store_NAME { get; set; }
        public Int32 ReferenNumer { get; set; }
        public String ACC_NO { get; set; }
        public String ACC_NAME { get; set; }
        public String ACC_NO2 { get; set; }
        public String ACC_NAME2 { get; set; }
        public String ACC_NO3 { get; set; }
        public String ACC_NAME3 { get; set; }
        public String HDSCR_AR { get; set; }
        public String TR_DS_AR { get; set; }
        public String SupervisorID { get; set; }
        public String Supervisor_NAME { get; set; }
        public String TR_DS_EN { get; set; }
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
        public String PStoreID { get; set; }
        public Int32 PTR_NO { get; set; }
        public Int32 PTR_TY { get; set; }
        public Boolean Priceedit { get; set; }
        public Double EXPENSEVL { get; set; }
        public Double HAddtions { get; set; }
        public Double HdrAddtionsR { get; set; }
        public String CurrencyID { get; set; }
        public String Currency_NAME { get; set; }
        public Double RATE { get; set; }
        public Int32 LN_NO { get; set; }
        public String Item_CD { get; set; }
        public String Item_Name_AR { get; set; }
        public String ItemBarCode { get; set; }
        public String ITM_NM_AR { get; set; }
        public String PKID { get; set; }
        public String PKName { get; set; }
        public Double PK { get; set; }
        public Double ItemBAL { get; set; }
        public Double QTY { get; set; }
        public Double Price { get; set; }
        public Double PKPRC { get; set; }
        public Double PKCST { get; set; }
        public Double Value { get; set; }
        public Double Total { get; set; }
        public Double DISC1 { get; set; }
        public Double DISC2 { get; set; }
        public Double DISC3 { get; set; }
        public Double DISC4 { get; set; }
        public Double DISCVAL { get; set; }
        public Double TAX1 { get; set; }
        public Double TAX2 { get; set; }
        public Double TAX3 { get; set; }
        public Double TAXVAL { get; set; }
        public Double NetAfterTAX { get; set; }
        public Double NetBeforeTAX { get; set; }
        public Double NET { get; set; }
        public Double NetTotal { get; set; }
        public Double CostValue { get; set; }
        public Double FIFOVL { get; set; }
        public Double LIFOVL { get; set; }
        public String PriceID { get; set; }
        public String PriceName { get; set; }
        public Double ValueAfterTAX { get; set; }
        public Double RestoreQty { get; set; }
        public Double ReturnQty { get; set; }
        public Int32 GRP { get; set; }
        public String Phone1 { get; set; }
        public String Phone2 { get; set; }
        public String Phone3 { get; set; }
        public String ADDRS1 { get; set; }
        public String ADDRS2 { get; set; }
        public String MOBIL1 { get; set; }
        public String MOBIL2 { get; set; }
        public Int32 REC_ID { get; set; }
        public Double HDISC1R { get; set; }
        public Double HDISC2R { get; set; }
        public Double HDISC3R { get; set; }
        public Double SHDISCR { get; set; }
        public Double DISC1R { get; set; }
        public Double DISC2R { get; set; }
        public Double DISC3R { get; set; }
        public Double SDISCR { get; set; }
        public Double TAX1R { get; set; }
        public Double TAX2R { get; set; }
        public Double TAX3R { get; set; }
        public Double STAXR { get; set; }
        public Double CUR_VL { get; set; }
        public Double DISC_CUR_VAL { get; set; }
        public Double TAX_CUR_VAL { get; set; }
        public Double ACCBAL_CUR_VL { get; set; }
        public Double SPRC6 { get; set; }
        public Double SPRC5 { get; set; }
        public Double SPRC4 { get; set; }
        public Double SPRC3 { get; set; }
        public Double SPRC2 { get; set; }
        public Double UCST { get; set; }
        public Int32 Status { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}