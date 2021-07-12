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
    [FormScript("ALgorithm.ACCMF")]
    [BasedOnRow(typeof(Entities.ACCMFRow), CheckNames = true)]
   
    public class ACCMFForm
    {
        [Tab("General")]
        [HalfWidth(UntilNext = true)]
        public Int32 REC_ID { get; set; }
        public AccountType? ACC_TY { get; set; }
        public String ACC_NO { get; set; }
        public String ACC_NM_AR { get; set; }
        public String ACC_NM_EN { get; set; }
        public AccountNature? ACC_NT { get; set; }
        public String MAN_NO { get; set; }
        public Double BGNDB { get; set; }
        public Double BGNCR { get; set; }
        public Double BGNBAL { get; set; }
        public Double CHKBAL { get; set; }
        public Double RETBAL { get; set; }
        public Double DB_BL { get; set; }
        public Double CR_BL { get; set; }
        public Double ACCBAL { get; set; }
        [Hidden]
        public String ACC_CLASS { get; set; }
        public Double CreditLimit { get; set; }
        public Int32 CreditPeriod { get; set; }
        public Int32 Status { get; set; }

        [Tab("Contact")]
        public String RegionID { get; set; }
        public String CityID { get; set; }
        public String DistrictID { get; set; }
        public String ADDRS1 { get; set; }
        public String ADDRS2 { get; set; }
        public String PersonID { get; set; }
        public String SupervisorsID { get; set; }
        public Boolean SupplierCustomer { get; set; }
        public String PriceID { get; set; }
        public String Phone1 { get; set; }
        public String Phone2 { get; set; }
        public String Phone3 { get; set; }
        public String MOBIL1 { get; set; }
        public String MOBIL2 { get; set; }
        public String MOBIL3 { get; set; }
        public String FAX { get; set; }
        public String Email { get; set; }
        public String URL { get; set; }
        [Tab("TAX")]
        public String RegisterNO { get; set; }
        public String TAXFIL_NO { get; set; }
        public String TAXOffice { get; set; }
        public String TAXNO { get; set; }
        public Int16 TAXSTATE { get; set; }
        [Tab("Other")]
        public String REP_CD { get; set; }
        public String CST_CD { get; set; }
        public String SUM_CD { get; set; }
        public String SSUM_CD { get; set; }
        public String StoreID { get; set; }
        public Boolean AFFINCOME { get; set; }
        public Double PAY_BL { get; set; }
        [Hidden]
        public String TAXORG { get; set; }
        public String GLNO { get; set; }
        [Hidden]
        public DateTime CreditEXP_DT { get; set; }
        public String ACC_TY1 { get; set; }
        public String ACC_TY2 { get; set; }
        [Hidden]
        public String CHKBNK { get; set; }
        [Hidden]
        public String CHKNAM { get; set; }
        [Hidden]
        public DateTime CRDTLMT_END { get; set; }
        [Hidden]
        public Int16 CRDTPRD_END { get; set; }
        [Hidden]
        public Int16 ACC_SSUM_CD { get; set; }
        
        [FormWidth("col-sm-12")]
        public String RMRK { get; set; }
        public String CurrencyID { get; set; }
        [Hidden]
        public String Currency_NAME { get; set; }
        [Hidden]
        public Double CUR_DB_VL { get; set; }
        [Hidden]
        public Double CUR_CR_VL { get; set; }
        [Hidden]
        public String ACC_BANK { get; set; }
        [Hidden]
        public String SupplierBank { get; set; }
        
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