using System;
using Serenity.ComponentModel;


namespace ALgorithmPro
{
    [ColumnsScript("ALgorithmPro.ASTRDVIEW")]
    [BasedOnRow(typeof(ASTRDVIEWRow), CheckNames = true)]
    public class ASTRDVIEWColumns
    {
        [Hidden]
        public Int64 HeaderID { get; set; }
        [Hidden]
        public String StoreID { get; set; }
        [Hidden]
        public String Store_NAME { get; set; }
        [Hidden]
        public Int32 TR_NO { get; set; }
        [Hidden]
        public Int32 TR_TY { get; set; }
        [Hidden]
        public String TRTY_NAME { get; set; }
        [Hidden]
        public DateTime TR_DT { get; set; }
        [Hidden]
        public String ACC_NO { get; set; }
        [Hidden]
        public String ACC_NAME { get; set; }
        [Hidden]
        public Int32 LN_NO { get; set; }
        public String Item_CD { get; set; }
        public String Item_Name_AR { get; set; }
        public String PKName { get; set; }
        [Hidden]
        public String PKID { get; set; }
        public Double QTY { get; set; }
        public Double Price { get; set; }
        public Double Value { get; set; }
        public Double DISC1 { get; set; }
        public Double DISC2 { get; set; }
        public Double DISC3 { get; set; }
        public Double NetBeforeTAX { get; set; }
        public Double TAX1 { get; set; }
        public Double TAX2 { get; set; }
        public Double TAX3 { get; set; }
        public Double NetAfterTAX { get; set; }
        public Double NET { get; set; }
        public Double ItemBAL { get; set; }
        public String HDSCR_AR { get; set; }
        [Hidden]
        public Double Total { get; set; }
        [Hidden]
        public Int32 ReferenNumer { get; set; }
        [Hidden]
        public String ACC_NO2 { get; set; }
        [Hidden]
        public String ACC_NAME2 { get; set; }
        [Hidden]
        public String ACC_NO3 { get; set; }
        [Hidden]
        public String ACC_NAME3 { get; set; }
        
        [Hidden]
        public String TR_DS_AR { get; set; }
        [Hidden]
        public String SupervisorID { get; set; }
        [Hidden]
        public String Supervisor_NAME { get; set; }
        [Hidden]
        public String TR_DS_EN { get; set; }
        [Hidden]
        public String REP_CD { get; set; }
        public String REP_NAME { get; set; }
        [Hidden]
        public String REP_CD2 { get; set; }
        public String REP_NAME2 { get; set; }
        [Hidden]
        public String CST_CD { get; set; }
        public String CST_NAME { get; set; }
        [Hidden]
        public String SUM_CD { get; set; }
        public String SUM_NAME { get; set; }
        [Hidden]
        public String SSUM_CD { get; set; }
        public String SSUM_NAME { get; set; }
        [Hidden]
        public String PStoreID { get; set; }
        [Hidden]
        public Int32 PTR_NO { get; set; }
        [Hidden]
        public Int32 PTR_TY { get; set; }
        [Hidden]
        public Boolean Priceedit { get; set; }
        [Hidden]
        public Double EXPENSEVL { get; set; }
        [Hidden]
        public Double HAddtions { get; set; }
        [Hidden]
        public Double HdrAddtionsR { get; set; }
        [Hidden]
        public String CurrencyID { get; set; }
        public String Currency_NAME { get; set; }
        [Hidden]
        public Double RATE { get; set; }
        [Hidden]
        public String ItemBarCode { get; set; }
        [Hidden]
        public String ITM_NM_AR { get; set; }
        [Hidden]
        public Double PK { get; set; }
        [Hidden]
        public Double PKPRC { get; set; }
        public Double PKCST { get; set; }
        [Hidden]
        public Double DISC4 { get; set; }
        [Hidden]
        public Double DISCVAL { get; set; }
        [Hidden]
        public Double TAXVAL { get; set; }
        [Hidden]
        public Double NetTotal { get; set; }
        [Hidden]
        public Double CostValue { get; set; }
        [Hidden]
        public Double FIFOVL { get; set; }
        [Hidden]
        public Double LIFOVL { get; set; }
        [Hidden]
        public String PriceID { get; set; }
        [Hidden]
        public String PriceName { get; set; }
        [Hidden]
        public Double ValueAfterTAX { get; set; }
        [Hidden]
        public Double RestoreQty { get; set; }
        [Hidden]
        public Double ReturnQty { get; set; }
        [Hidden]
        public Int32 GRP { get; set; }
        [Hidden]
        public String Phone1 { get; set; }
        [Hidden]
        public String Phone2 { get; set; }
        [Hidden]
        public String Phone3 { get; set; }
        [Hidden]
        public String ADDRS1 { get; set; }
        [Hidden]
        public String ADDRS2 { get; set; }
        [Hidden]
        public String MOBIL1 { get; set; }
        [Hidden]
        public String MOBIL2 { get; set; }
        [Hidden]
        public Int32 REC_ID { get; set; }
        [Hidden]
        public Double HDISC1R { get; set; }
        [Hidden]
        public Double HDISC2R { get; set; }
        [Hidden]
        public Double HDISC3R { get; set; }
        [Hidden]
        public Double SHDISCR { get; set; }
        [Hidden]
        public Double DISC1R { get; set; }
        [Hidden]
        public Double DISC2R { get; set; }
        [Hidden]
        public Double DISC3R { get; set; }
        [Hidden]
        public Double SDISCR { get; set; }
        [Hidden]
        public Double TAX1R { get; set; }
        [Hidden]
        public Double TAX2R { get; set; }
        [Hidden]
        public Double TAX3R { get; set; }
        [Hidden]
        public Double STAXR { get; set; }
        [Hidden]
        public Double CUR_VL { get; set; }
        [Hidden]
        public Double DISC_CUR_VAL { get; set; }
        [Hidden]
        public Double TAX_CUR_VAL { get; set; }
        [Hidden]
        public Double ACCBAL_CUR_VL { get; set; }
        [Hidden]
        public Double SPRC6 { get; set; }
        [Hidden]
        public Double SPRC5 { get; set; }
        [Hidden]
        public Double SPRC4 { get; set; }
        [Hidden]
        public Double SPRC3 { get; set; }
        [Hidden]
        public Double SPRC2 { get; set; }
        [Hidden]
        public Double UCST { get; set; }
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