using ALgorithmPro.Lookup;
using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.Web.Modules.Lookup;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ASACCMF]")]
    [DisplayName("ASACCMF"), InstanceName("ASACCMF")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("ALgorithm.ASACCMF")]
    public sealed class ACCMFRow : Row<ACCMFRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("Account Type"), Column("REC_ID"), NotNull]
        [LookupEditor(typeof(AccountTypeLookup),AutoComplete = true)]
        public Int32? REC_ID
        {
            get => fields.REC_ID[this];
            set => fields.REC_ID[this] = value;
        }

        [DisplayName("Account Number"), Column("ACC_NO"), Size(200), PrimaryKey, QuickSearch, NameProperty]
        public String ACC_NO
        {
            get => fields.ACC_NO[this];
            set => fields.ACC_NO[this] = value;
        }

        [DisplayName("Account Name"), Column("ACC_NM_AR"), NotNull, QuickSearch]
        public String ACC_NM_AR
        {
            get => fields.ACC_NM_AR[this];
            set => fields.ACC_NM_AR[this] = value;
        }

        [DisplayName("Name English"), Column("ACC_NM_EN")]
        public String ACC_NM_EN
        {
            get => fields.ACC_NM_EN[this];
            set => fields.ACC_NM_EN[this] = value;
        }

        [DisplayName("Account Class"), Column("ACC_TY"), NotNull]
        public AccountType? ACC_TY
        {
            get => (AccountType?)fields.ACC_TY[this];
            set => fields.ACC_TY[this] = (Int32?)value;
        }

        [DisplayName("Account Nature "), Column("ACC_NT"), NotNull]
        public AccountNature? ACC_NT
        {
            get => (AccountNature?)fields.ACC_NT[this];
            set => fields.ACC_NT[this] = (Int32?)value;
        }

        [DisplayName("Main Account"), Column("MAN_NO"), Size(100)]
        [LookupEditor(typeof(MainAccountLookup),AutoComplete = true)]
        public String MAN_NO
        {
            get => fields.MAN_NO[this];
            set => fields.MAN_NO[this] = value;
        }

        [DisplayName("Affect Income"), Column("AFFINCOME")]
        public Boolean? AFFINCOME
        {
            get => fields.AFFINCOME[this];
            set => fields.AFFINCOME[this] = value;
        }

        [DisplayName("Store Name"), Column("StoreID"), Size(100), DefaultValue(01)]
        [LookupEditor(typeof(StoreLookup), AutoComplete = true)]
        public String StoreID
        {
            get => fields.StoreID[this];
            set => fields.StoreID[this] = value;
        }

        [DisplayName("Begin debit"), Column("BGNDB"), DefaultValue(0)]
        public Double? BGNDB
        {
            get => fields.BGNDB[this];
            set => fields.BGNDB[this] = value;
        }

        [DisplayName("Begin Credit"), Column("BGNCR"), DefaultValue(0)]
        public Double? BGNCR
        {
            get => fields.BGNCR[this];
            set => fields.BGNCR[this] = value;
        }

        [DisplayName("Account BAL"), Column("BGNBAL"), DefaultValue(0)]
        public Double? BGNBAL
        {
            get => fields.BGNBAL[this];
            set => fields.BGNBAL[this] = value;
        }

        [DisplayName("Check Balance"), Column("CHKBAL"), DefaultValue(0)]
        public Double? CHKBAL
        {
            get => fields.CHKBAL[this];
            set => fields.CHKBAL[this] = value;
        }

        [DisplayName("Retbal"), Column("RETBAL"), DefaultValue(0)]
        public Double? RETBAL
        {
            get => fields.RETBAL[this];
            set => fields.RETBAL[this] = value;
        }

        [DisplayName("Debit Balance"), Column("DB_BL"), DefaultValue(0)]
        public Double? DB_BL
        {
            get => fields.DB_BL[this];
            set => fields.DB_BL[this] = value;
        }

        [DisplayName("Credit Balance"), Column("CR_BL"), DefaultValue(0)]
        public Double? CR_BL
        {
            get => fields.CR_BL[this];
            set => fields.CR_BL[this] = value;
        }

        [DisplayName("Account Class"), Column("ACC_CLASS"), Size(100)]
        public String ACC_CLASS
        {
            get => fields.ACC_CLASS[this];
            set => fields.ACC_CLASS[this] = value;
        }

        [DisplayName("Account Balance"), Column("ACCBAL"), DefaultValue(0)]
        public Double? ACCBAL
        {
            get => fields.ACCBAL[this];
            set => fields.ACCBAL[this] = value;
        }

        [DisplayName("Credit Limit"), DefaultValue(0)]
        public Double? CreditLimit
        {
            get => fields.CreditLimit[this];
            set => fields.CreditLimit[this] = value;
        }

        [DisplayName("Credit Period"), DefaultValue(0)]
        public Int32? CreditPeriod
        {
            get => fields.CreditPeriod[this];
            set => fields.CreditPeriod[this] = value;
        }

        [DisplayName("Region Name"), Column("RegionID"), Size(100)]
        [LookupEditor(typeof(RegionLookup), AutoComplete = true)]
        public String RegionID
        {
            get => fields.RegionID[this];
            set => fields.RegionID[this] = value;
        }

        [DisplayName("City Name"), Column("CityID"), Size(100)]
        [LookupEditor(typeof(CityLookup), AutoComplete = true , CascadeFrom = "RegionID")]
        public String CityID
        {
            get => fields.CityID[this];
            set => fields.CityID[this] = value;
        }

        [DisplayName("District Name"), Column("DistrictID"), Size(100)]
        [LookupEditor(typeof(DistrictsLookup), AutoComplete = true,CascadeFrom =("CityID"))]
        public String DistrictID
        {
            get => fields.DistrictID[this];
            set => fields.DistrictID[this] = value;
        }

        [DisplayName("Address 1"), Column("ADDRS1"), Size(255)]
        public String ADDRS1
        {
            get => fields.ADDRS1[this];
            set => fields.ADDRS1[this] = value;
        }

        [DisplayName("Address 2"), Column("ADDRS2"), Size(255)]
        public String ADDRS2
        {
            get => fields.ADDRS2[this];
            set => fields.ADDRS2[this] = value;
        }

        [DisplayName("Person Name"), Column("PersonID"), Size(100)]
        public String PersonID
        {
            get => fields.PersonID[this];
            set => fields.PersonID[this] = value;
        }

        [DisplayName("Supervisors Name"), Column("SupervisorsID"), Size(100)]
        [LookupEditor(typeof(SupervisorLookup), AutoComplete = true)]
        public String SupervisorsID
        {
            get => fields.SupervisorsID[this];
            set => fields.SupervisorsID[this] = value;
        }

        [DisplayName("Supplier Customer")]
        public Boolean? SupplierCustomer
        {
            get => fields.SupplierCustomer[this];
            set => fields.SupplierCustomer[this] = value;
        }

        [DisplayName("Price Name"), Column("PriceID"), Size(50)]
        [LookupEditor(typeof(PriceLookup), AutoComplete = true)]
        public String PriceID
        {
            get => fields.PriceID[this];
            set => fields.PriceID[this] = value;
        }

        [DisplayName("Phone1"), Size(50)]
        public String Phone1
        {
            get => fields.Phone1[this];
            set => fields.Phone1[this] = value;
        }

        [DisplayName("Phone2"), Size(50)]
        public String Phone2
        {
            get => fields.Phone2[this];
            set => fields.Phone2[this] = value;
        }

        [DisplayName("Phone3"), Size(50)]
        public String Phone3
        {
            get => fields.Phone3[this];
            set => fields.Phone3[this] = value;
        }

        [DisplayName("MOBIL1"), Column("MOBIL1"), Size(25)]
        public String MOBIL1
        {
            get => fields.MOBIL1[this];
            set => fields.MOBIL1[this] = value;
        }

        [DisplayName("MOBIL2"), Column("MOBIL2"), Size(25)]
        public String MOBIL2
        {
            get => fields.MOBIL2[this];
            set => fields.MOBIL2[this] = value;
        }

        [DisplayName("MOBIL3"), Column("MOBIL3"), Size(25)]
        public String MOBIL3
        {
            get => fields.MOBIL3[this];
            set => fields.MOBIL3[this] = value;
        }

        [DisplayName("FAX"), Column("FAX"), Size(30)]
        public String FAX
        {
            get => fields.FAX[this];
            set => fields.FAX[this] = value;
        }

        [DisplayName("Email"), Size(100),EmailEditor]
        public String Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("URL"), Column("URL"), Size(50)]
        public String URL
        {
            get => fields.URL[this];
            set => fields.URL[this] = value;
        }

        [DisplayName("Cost Name"), Column("CST_CD"), Size(50)]
        [LookupEditor(typeof(CSTLookup), AutoComplete = true)]
        public String CST_CD
        {
            get => fields.CST_CD[this];
            set => fields.CST_CD[this] = value;
        }

        [DisplayName("Sum Name"), Column("SUM_CD"), Size(50)]
        [LookupEditor(typeof(SUMSLookup), AutoComplete = true)]
        public String SUM_CD
        {
            get => fields.SUM_CD[this];
            set => fields.SUM_CD[this] = value;
        }

        [DisplayName("Sum Debit"), Column("SUM_DB")]
        public String SUM_DB
        {
            get => fields.SUM_DB[this];
            set => fields.SUM_DB[this] = value;
        }

        [DisplayName("Pay Balance"), Column("PAY_BL"), DefaultValue(0)]
        public Double? PAY_BL
        {
            get => fields.PAY_BL[this];
            set => fields.PAY_BL[this] = value;
        }

        [DisplayName("TAXORG"), Column("TAXORG"), Size(30)]
        public String TAXORG
        {
            get => fields.TAXORG[this];
            set => fields.TAXORG[this] = value;
        }

        [DisplayName("TAXNO"), Column("TAXNO"), Size(100)]
        public String TAXNO
        {
            get => fields.TAXNO[this];
            set => fields.TAXNO[this] = value;
        }

        [DisplayName("Rep Name"), Column("REP_CD"), Size(100)]
        [LookupEditor(typeof(RepsLookup), AutoComplete = true)]
        public String REP_CD
        {
            get => fields.REP_CD[this];
            set => fields.REP_CD[this] = value;
        }

        [DisplayName("GL Account"), Column("GLNO"), Size(100)]
        public String GLNO
        {
            get => fields.GLNO[this];
            set => fields.GLNO[this] = value;
        }

        [DisplayName("Credit Expire"), Column("CreditEXP_DT")]
        public DateTime? CreditEXP_DT
        {
            get => fields.CreditEXP_DT[this];
            set => fields.CreditEXP_DT[this] = value;
        }

        [DisplayName("Account TYpe1"), Column("ACC_TY1"), Size(100)]
        public String ACC_TY1
        {
            get => fields.ACC_TY1[this];
            set => fields.ACC_TY1[this] = value;
        }

        [DisplayName("Account Type2"), Column("ACC_TY2"), Size(100)]
        public String ACC_TY2
        {
            get => fields.ACC_TY2[this];
            set => fields.ACC_TY2[this] = value;
        }

        [DisplayName("Register Number"), Column("RegisterNO"), Size(100)]
        public String RegisterNO
        {
            get => fields.RegisterNO[this];
            set => fields.RegisterNO[this] = value;
        }

        [DisplayName("TAX FileNumber"), Column("TAXFIL_NO"), Size(100)]
        public String TAXFIL_NO
        {
            get => fields.TAXFIL_NO[this];
            set => fields.TAXFIL_NO[this] = value;
        }

        [DisplayName("TAX Office"), Column("TAXOffice"), Size(100)]
        public String TAXOffice
        {
            get => fields.TAXOffice[this];
            set => fields.TAXOffice[this] = value;
        }

        [DisplayName("TAX State"), Column("TAXSTATE")]
        public Int16? TAXSTATE
        {
            get => fields.TAXSTATE[this];
            set => fields.TAXSTATE[this] = value;
        }
       
        [DisplayName("Check Bank"), Column("CHKBNK"), Size(100)]
        public String CHKBNK
        {
            get => fields.CHKBNK[this];
            set => fields.CHKBNK[this] = value;
        }

        [DisplayName("Check Name"), Column("CHKNAM"), Size(100)]
        public String CHKNAM
        {
            get => fields.CHKNAM[this];
            set => fields.CHKNAM[this] = value;
        }

        [DisplayName("Credit LimitedEnd"), Column("CRDTLMT_END")]
        public DateTime? CRDTLMT_END
        {
            get => fields.CRDTLMT_END[this];
            set => fields.CRDTLMT_END[this] = value;
        }

        [DisplayName("Credit PeriodEnd"), Column("CRDTPRD_END")]
        public Int16? CRDTPRD_END
        {
            get => fields.CRDTPRD_END[this];
            set => fields.CRDTPRD_END[this] = value;
        }

        [DisplayName("SSUM Name"), Column("SSUM_CD"), Size(100)]
        [LookupEditor(typeof(SSUMSLookup), AutoComplete = true)]
        public String SSUM_CD
        {
            get => fields.SSUM_CD[this];
            set => fields.SSUM_CD[this] = value;
        }

        [DisplayName("Account SSumName"), Column("ACC_SSUM_CD")]
        [LookupEditor(typeof(SSUMSLookup),AutoComplete = true)]
        public Int16? ACC_SSUM_CD
        {
            get => fields.ACC_SSUM_CD[this];
            set => fields.ACC_SSUM_CD[this] = value;
        }

        [DisplayName("Remark"), Column("RMRK"), Size(255)]
        [TextAreaEditor]
        public String RMRK
        {
            get => fields.RMRK[this];
            set => fields.RMRK[this] = value;
        }

        [DisplayName("Currency Name"), Column("CurrencyID"), Size(100), DefaultValue(1)]
        [LookupEditor(typeof(CurrencyLookup),AutoComplete = true)]
        public String CurrencyID
        {
            get => fields.CurrencyID[this];
            set => fields.CurrencyID[this] = value;
        }
       
        [DisplayName("Currency Name"), Column("Currency_NAME")]
        public String Currency_NAME
        {
            get => fields.Currency_NAME[this];
            set => fields.Currency_NAME[this] = value;
        }
        [DisplayName("Currency Debit"), Column("CUR_DB_VL"), DefaultValue(0)]
        public Double? CUR_DB_VL
        {
            get => fields.CUR_DB_VL[this];
            set => fields.CUR_DB_VL[this] = value;
        }
        [DisplayName("Currency Credit"), Column("CUR_CR_VL"), DefaultValue(0)]
        public Double? CUR_CR_VL
        {
            get => fields.CUR_CR_VL[this];
            set => fields.CUR_CR_VL[this] = value;
        }

        [DisplayName("Account Bank"), Column("ACC_BANK"), Size(200)]
        [LookupEditor(typeof(BankLookup),AutoComplete = true)]
        public String ACC_BANK
        {
            get => fields.ACC_BANK[this];
            set => fields.ACC_BANK[this] = value;
        }

        [DisplayName("Supplier Bank"), Size(30)]
        public String SupplierBank
        {
            get => fields.SupplierBank[this];
            set => fields.SupplierBank[this] = value;
        }

        [DisplayName("Status"), DefaultValue(1)]
        public Status? Status
        {
            get => (Status?)fields.Status[this];
            set => fields.Status[this] =(Int32?)value;
        }

        [DisplayName("EnteredBy")]
        public String EnteredBy
        {
            get => fields.EnteredBy[this];
            set => fields.EnteredBy[this] = value;
        }

        [DisplayName("EntryDate"),DefaultValue("now")]
        public DateTime? EntryDate
        {
            get => fields.EntryDate[this];
            set => fields.EntryDate[this] = value;
        }

        [DisplayName("UpdatedBy")]
        public String UpdatedBy
        {
            get => fields.UpdatedBy[this];
            set => fields.UpdatedBy[this] = value;
        }

        [DisplayName("UpdateDate"),DefaultValue("now")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        public ACCMFRow()
            : base()
        {
        }

        public ACCMFRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public Int32Field REC_ID;
            public StringField ACC_NO;
            public StringField ACC_NM_AR;
            public StringField ACC_NM_EN;
            public Int32Field ACC_TY;
            public Int32Field ACC_NT;
            public StringField MAN_NO;
            public BooleanField AFFINCOME;
            public StringField StoreID;
            public DoubleField BGNDB;
            public DoubleField BGNCR;
            public DoubleField BGNBAL;
            public DoubleField CHKBAL;
            public DoubleField RETBAL;
            public DoubleField DB_BL;
            public DoubleField CR_BL;
            public StringField ACC_CLASS;
            public DoubleField ACCBAL;
            public DoubleField CreditLimit;
            public Int32Field CreditPeriod;
            public StringField RegionID;
            public StringField CityID;
            public StringField DistrictID;
            public StringField ADDRS1;
            public StringField ADDRS2;
            public StringField PersonID;
            public StringField SupervisorsID;
            public BooleanField SupplierCustomer;
            public StringField PriceID;
            public StringField Phone1;
            public StringField Phone2;
            public StringField Phone3;
            public StringField MOBIL1;
            public StringField MOBIL2;
            public StringField MOBIL3;
            public StringField FAX;
            public StringField Email;
            public StringField URL;
            public StringField CST_CD;
            public StringField SUM_CD;
            public StringField SUM_DB;
            public DoubleField PAY_BL;
            public StringField TAXORG;
            public StringField TAXNO;
            public StringField REP_CD;
            public StringField GLNO;
            public DateTimeField CreditEXP_DT;
            public StringField ACC_TY1;
            public StringField ACC_TY2;
            public StringField RegisterNO;
            public StringField TAXFIL_NO;
            public StringField TAXOffice;
            public Int16Field TAXSTATE;
            public StringField CHKBNK;
            public StringField CHKNAM;
            public DateTimeField CRDTLMT_END;
            public Int16Field CRDTPRD_END;
            public StringField SSUM_CD;
            public Int16Field ACC_SSUM_CD;
            public StringField RMRK;
            public StringField CurrencyID;
            public StringField Currency_NAME;
            public DoubleField CUR_DB_VL;
            public DoubleField CUR_CR_VL;
            public StringField ACC_BANK;
            public StringField SupplierBank;
            public Int32Field Status;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
        }
    }
}
