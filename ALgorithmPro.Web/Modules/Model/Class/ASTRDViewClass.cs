using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ALgorithmPro
{
  public class ASTRDViewClass 
    {
        public long ID { get; set; }
        public long HeaderID { get ; set; }
        public int TR_NO { get; set; }
        public int TR_TY { get; set; }
        public string TRTYName { set; get; }
        public string HDSCR_AR { set; get; }
        public string TR_DS_AR { set; get; }
        public string TR_DS_EN { set; get; }
        public DateTime TR_DT { get; set; }
        public int LN_NO { get; set; }
         public string ACC_NO { get; set; }
        public string ACC_NAME { get; set; }
        public string ACC_NO2 { get; set; }
        public string ACC_NAME2 { get; set; }
        public string ACC_NO3 { get; set; }
        public string ACC_NAME3 { get; set; }
        public string REP_CD { get; set; }
        public string REP_NAME { get; set; }
        public string REP_CD2 { get; set; }
        public string REP_NAME2 { get; set; }
        public string CST_CD { get; set; }
        public string CST_NAME { get; set; }
        public string SUM_CD { get; set; }
        public string SUM_NAME { get; set; }
        public string SSUM_CD { get; set; }
        public string SSUM_NAME { get; set; }
        public string SupervisorID { get; set; }
        public string Supervisor_NAME { get; set; }
        public string Phone1 { get; set; }
        public string Phone2 { get; set; }
        public string Phone3 { get; set; }
        public string MOBIL1 { get; set; }
        public string MOBIL2 { get; set; }
        public string MOBIL3 { get; set; }
        public string ADDRS1 { get; set; }
        public string ADDRS2 { get; set; }
        public string Item_CD { get; set; }
        public string ItemBarcode { get; set; }
        public string Item_Name_AR { get; set; }
        public string PriceID { get; set; }
        public string PriceName { get; set; }
        public string StoreId { get; set; }
        public string StoreName { get; set; }
        public string SourceID { get; set; }
        public string CurrencyID { get; set; }
        public string Currency_NAME { get; set; }
        public double RATE { get; set; }
        public string PKID { get; set; }
        public double PK { get; set; }
        public string PName { get; set; }
        public int GRP { set; get; }
        public double QTY { get; set; }
        public double UCST { get; set; }
        public double PKCST { get; set; }
        public double Total { get; set; }
        public double NETVL { get; set; }
        public double CostValue { get; set; }
        public double PKPRC { get; set; }
        public double PRC { get; set; }
        public double FIFO { get; set; }
        public double FIFOVL { get; set; }
        public double LIFO { get; set; }
        public double LIFOVL { get; set; }
        public double ReturnQty { get; set; }
        public double RestoreQty { get; set; }
        public double SPRC6 { get; set; }
        public double SPRC5 { get; set; }
        public double SPRC4 { get; set; }
        public double SPRC3 { get; set; }
        public double SPRC2 { get; set; }
        public double Value { get; set; }
        public double TotalValue { get; set; }
        public double DISC { get; set; }
        public double HDISC { get; set; }
        public double DISC1 { get; set; }
        public double DISC2 { get; set; }
        public double DISC3 { get; set; }
        public double DISC4 { get; set; }
        public double DISC1R { get; set; }
        public double DISC2R { get; set; }
        public double DISC3R { get; set; }
        public double SDISCR { get; set; }
        public double NETBeforeTAX { get; set; }
        public double STAX_VL { get; set; }
        public double HTAX { get; set; }
        public double TAX1 { get; set; }
        public double TAX2 { get; set; }
        public double TAX3 { get; set; }
        public double TAX1R { get; set; }
        public double TAX2R { get; set; }
        public double TAX3R { get; set; }
        public double STAXR { get; set; }
        public double disc_cur_val { get; set; }
        public double tax_cur_val { get; set; }
        public double NetTotal { get; set; }
        public double ValueAfterTAX { get; set; }
        public double ItemBAL { get; set; }
        public int PTR_NO { get; set; }
        public int PTR_TY { get; set; }
        public string PTRTY_NAME { get; set; }
        public string PStoreID { get; set; }
        public string PStore_NAME { get; set; }
        public int Status { get; set; }
        public string EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }


    }
}
