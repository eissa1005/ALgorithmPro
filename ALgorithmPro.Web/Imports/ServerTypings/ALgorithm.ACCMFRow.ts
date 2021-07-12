namespace ALgorithmPro.ALgorithm {
    export interface ACCMFRow {
        ID?: number;
        REC_ID?: number;
        ACC_NO?: string;
        ACC_NM_AR?: string;
        ACC_NM_EN?: string;
        ACC_TY?: Web.Modules.Common.AccountType;
        ACC_NT?: Web.Modules.Common.AccountNature;
        MAN_NO?: string;
        AFFINCOME?: boolean;
        StoreID?: string;
        BGNDB?: number;
        BGNCR?: number;
        BGNBAL?: number;
        CHKBAL?: number;
        RETBAL?: number;
        DB_BL?: number;
        CR_BL?: number;
        ACC_CLASS?: string;
        ACCBAL?: number;
        CreditLimit?: number;
        CreditPeriod?: number;
        RegionID?: string;
        CityID?: string;
        DistrictID?: string;
        ADDRS1?: string;
        ADDRS2?: string;
        PersonID?: string;
        SupervisorsID?: string;
        SupplierCustomer?: boolean;
        PriceID?: string;
        Phone1?: string;
        Phone2?: string;
        Phone3?: string;
        MOBIL1?: string;
        MOBIL2?: string;
        MOBIL3?: string;
        FAX?: string;
        Email?: string;
        URL?: string;
        CST_CD?: string;
        SUM_CD?: string;
        SUM_DB?: string;
        PAY_BL?: number;
        TAXORG?: string;
        TAXNO?: string;
        REP_CD?: string;
        GLNO?: string;
        CreditEXP_DT?: string;
        ACC_TY1?: string;
        ACC_TY2?: string;
        RegisterNO?: string;
        TAXFIL_NO?: string;
        TAXOffice?: string;
        TAXSTATE?: number;
        CHKBNK?: string;
        CHKNAM?: string;
        CRDTLMT_END?: string;
        CRDTPRD_END?: number;
        SSUM_CD?: string;
        ACC_SSUM_CD?: number;
        RMRK?: string;
        CurrencyID?: string;
        Currency_NAME?: string;
        CUR_DB_VL?: number;
        CUR_CR_VL?: number;
        ACC_BANK?: string;
        SupplierBank?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace ACCMFRow {
        export const idProperty = 'ID';
        export const nameProperty = 'ACC_NO';
        export const localTextPrefix = 'ALgorithm.ACCMF';
        export const lookupKey = 'ALgorithm.ASACCMF';

        export function getLookup(): Q.Lookup<ACCMFRow> {
            return Q.getLookup<ACCMFRow>('ALgorithm.ASACCMF');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            REC_ID = "REC_ID",
            ACC_NO = "ACC_NO",
            ACC_NM_AR = "ACC_NM_AR",
            ACC_NM_EN = "ACC_NM_EN",
            ACC_TY = "ACC_TY",
            ACC_NT = "ACC_NT",
            MAN_NO = "MAN_NO",
            AFFINCOME = "AFFINCOME",
            StoreID = "StoreID",
            BGNDB = "BGNDB",
            BGNCR = "BGNCR",
            BGNBAL = "BGNBAL",
            CHKBAL = "CHKBAL",
            RETBAL = "RETBAL",
            DB_BL = "DB_BL",
            CR_BL = "CR_BL",
            ACC_CLASS = "ACC_CLASS",
            ACCBAL = "ACCBAL",
            CreditLimit = "CreditLimit",
            CreditPeriod = "CreditPeriod",
            RegionID = "RegionID",
            CityID = "CityID",
            DistrictID = "DistrictID",
            ADDRS1 = "ADDRS1",
            ADDRS2 = "ADDRS2",
            PersonID = "PersonID",
            SupervisorsID = "SupervisorsID",
            SupplierCustomer = "SupplierCustomer",
            PriceID = "PriceID",
            Phone1 = "Phone1",
            Phone2 = "Phone2",
            Phone3 = "Phone3",
            MOBIL1 = "MOBIL1",
            MOBIL2 = "MOBIL2",
            MOBIL3 = "MOBIL3",
            FAX = "FAX",
            Email = "Email",
            URL = "URL",
            CST_CD = "CST_CD",
            SUM_CD = "SUM_CD",
            SUM_DB = "SUM_DB",
            PAY_BL = "PAY_BL",
            TAXORG = "TAXORG",
            TAXNO = "TAXNO",
            REP_CD = "REP_CD",
            GLNO = "GLNO",
            CreditEXP_DT = "CreditEXP_DT",
            ACC_TY1 = "ACC_TY1",
            ACC_TY2 = "ACC_TY2",
            RegisterNO = "RegisterNO",
            TAXFIL_NO = "TAXFIL_NO",
            TAXOffice = "TAXOffice",
            TAXSTATE = "TAXSTATE",
            CHKBNK = "CHKBNK",
            CHKNAM = "CHKNAM",
            CRDTLMT_END = "CRDTLMT_END",
            CRDTPRD_END = "CRDTPRD_END",
            SSUM_CD = "SSUM_CD",
            ACC_SSUM_CD = "ACC_SSUM_CD",
            RMRK = "RMRK",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            CUR_DB_VL = "CUR_DB_VL",
            CUR_CR_VL = "CUR_CR_VL",
            ACC_BANK = "ACC_BANK",
            SupplierBank = "SupplierBank",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
