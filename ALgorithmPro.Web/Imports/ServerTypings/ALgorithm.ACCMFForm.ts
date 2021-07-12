namespace ALgorithmPro.ALgorithm {
    export interface ACCMFForm {
        REC_ID: Serenity.LookupEditor;
        ACC_TY: Serenity.EnumEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NM_AR: Serenity.StringEditor;
        ACC_NM_EN: Serenity.StringEditor;
        ACC_NT: Serenity.EnumEditor;
        MAN_NO: Serenity.LookupEditor;
        BGNDB: Serenity.DecimalEditor;
        BGNCR: Serenity.DecimalEditor;
        BGNBAL: Serenity.DecimalEditor;
        CHKBAL: Serenity.DecimalEditor;
        RETBAL: Serenity.DecimalEditor;
        DB_BL: Serenity.DecimalEditor;
        CR_BL: Serenity.DecimalEditor;
        ACCBAL: Serenity.DecimalEditor;
        ACC_CLASS: Serenity.StringEditor;
        CreditLimit: Serenity.DecimalEditor;
        CreditPeriod: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        RegionID: Serenity.LookupEditor;
        CityID: Serenity.LookupEditor;
        DistrictID: Serenity.LookupEditor;
        ADDRS1: Serenity.StringEditor;
        ADDRS2: Serenity.StringEditor;
        PersonID: Serenity.StringEditor;
        SupervisorsID: Serenity.LookupEditor;
        SupplierCustomer: Serenity.BooleanEditor;
        PriceID: Serenity.LookupEditor;
        Phone1: Serenity.StringEditor;
        Phone2: Serenity.StringEditor;
        Phone3: Serenity.StringEditor;
        MOBIL1: Serenity.StringEditor;
        MOBIL2: Serenity.StringEditor;
        MOBIL3: Serenity.StringEditor;
        FAX: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        URL: Serenity.StringEditor;
        RegisterNO: Serenity.StringEditor;
        TAXFIL_NO: Serenity.StringEditor;
        TAXOffice: Serenity.StringEditor;
        TAXNO: Serenity.StringEditor;
        TAXSTATE: Serenity.IntegerEditor;
        REP_CD: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        SUM_CD: Serenity.LookupEditor;
        SSUM_CD: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        AFFINCOME: Serenity.BooleanEditor;
        PAY_BL: Serenity.DecimalEditor;
        TAXORG: Serenity.StringEditor;
        GLNO: Serenity.StringEditor;
        CreditEXP_DT: Serenity.DateEditor;
        ACC_TY1: Serenity.StringEditor;
        ACC_TY2: Serenity.StringEditor;
        CHKBNK: Serenity.StringEditor;
        CHKNAM: Serenity.StringEditor;
        CRDTLMT_END: Serenity.DateEditor;
        CRDTPRD_END: Serenity.IntegerEditor;
        ACC_SSUM_CD: Serenity.LookupEditor;
        RMRK: Serenity.TextAreaEditor;
        CurrencyID: Serenity.LookupEditor;
        Currency_NAME: Serenity.StringEditor;
        CUR_DB_VL: Serenity.DecimalEditor;
        CUR_CR_VL: Serenity.DecimalEditor;
        ACC_BANK: Serenity.LookupEditor;
        SupplierBank: Serenity.StringEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class ACCMFForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.ACCMF';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ACCMFForm.init)  {
                ACCMFForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.EnumEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.IntegerEditor;
                var w5 = s.BooleanEditor;
                var w6 = s.EmailEditor;
                var w7 = s.DateEditor;
                var w8 = s.TextAreaEditor;

                Q.initFormType(ACCMFForm, [
                    'REC_ID', w0,
                    'ACC_TY', w1,
                    'ACC_NO', w2,
                    'ACC_NM_AR', w2,
                    'ACC_NM_EN', w2,
                    'ACC_NT', w1,
                    'MAN_NO', w0,
                    'BGNDB', w3,
                    'BGNCR', w3,
                    'BGNBAL', w3,
                    'CHKBAL', w3,
                    'RETBAL', w3,
                    'DB_BL', w3,
                    'CR_BL', w3,
                    'ACCBAL', w3,
                    'ACC_CLASS', w2,
                    'CreditLimit', w3,
                    'CreditPeriod', w4,
                    'Status', w1,
                    'RegionID', w0,
                    'CityID', w0,
                    'DistrictID', w0,
                    'ADDRS1', w2,
                    'ADDRS2', w2,
                    'PersonID', w2,
                    'SupervisorsID', w0,
                    'SupplierCustomer', w5,
                    'PriceID', w0,
                    'Phone1', w2,
                    'Phone2', w2,
                    'Phone3', w2,
                    'MOBIL1', w2,
                    'MOBIL2', w2,
                    'MOBIL3', w2,
                    'FAX', w2,
                    'Email', w6,
                    'URL', w2,
                    'RegisterNO', w2,
                    'TAXFIL_NO', w2,
                    'TAXOffice', w2,
                    'TAXNO', w2,
                    'TAXSTATE', w4,
                    'REP_CD', w0,
                    'CST_CD', w0,
                    'SUM_CD', w0,
                    'SSUM_CD', w0,
                    'StoreID', w0,
                    'AFFINCOME', w5,
                    'PAY_BL', w3,
                    'TAXORG', w2,
                    'GLNO', w2,
                    'CreditEXP_DT', w7,
                    'ACC_TY1', w2,
                    'ACC_TY2', w2,
                    'CHKBNK', w2,
                    'CHKNAM', w2,
                    'CRDTLMT_END', w7,
                    'CRDTPRD_END', w4,
                    'ACC_SSUM_CD', w0,
                    'RMRK', w8,
                    'CurrencyID', w0,
                    'Currency_NAME', w2,
                    'CUR_DB_VL', w3,
                    'CUR_CR_VL', w3,
                    'ACC_BANK', w0,
                    'SupplierBank', w2,
                    'EnteredBy', w2,
                    'EntryDate', w7,
                    'UpdatedBy', w2,
                    'UpdateDate', w7
                ]);
            }
        }
    }
}
