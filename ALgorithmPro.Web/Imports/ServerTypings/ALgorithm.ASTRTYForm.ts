namespace ALgorithmPro.ALgorithm {
    export interface ASTRTYForm {
        TR_TY: Serenity.IntegerEditor;
        Dscr_AR: Serenity.StringEditor;
        Dscr_EN: Serenity.StringEditor;
        TR_DS: Serenity.IntegerEditor;
        GRP: Serenity.IntegerEditor;
        RMRK: Serenity.StringEditor;
        NOBAL: Serenity.IntegerEditor;
        DBLACT: Serenity.IntegerEditor;
        DBLTR_TY: Serenity.IntegerEditor;
        DBLCST: Serenity.IntegerEditor;
        SERGRP: Serenity.StringEditor;
        AFFCST: Serenity.IntegerEditor;
        AFFACCDB: Serenity.IntegerEditor;
        AFFACCCR: Serenity.IntegerEditor;
        AFFCSHDB: Serenity.IntegerEditor;
        AFFCSHCR: Serenity.IntegerEditor;
        APRACCDB: Serenity.IntegerEditor;
        APRACCCR: Serenity.IntegerEditor;
        APRCSHDB: Serenity.IntegerEditor;
        APRCSHCR: Serenity.IntegerEditor;
        AFFBAL: Serenity.IntegerEditor;
        APRITMCARD: Serenity.IntegerEditor;
        ADUTTRTY: Serenity.StringEditor;
        CRDLIMTCHK: Serenity.IntegerEditor;
        chkpaid: Serenity.IntegerEditor;
        PSHOW: Serenity.IntegerEditor;
        CSTSHOW: Serenity.IntegerEditor;
        AZTRAIL: Serenity.IntegerEditor;
        PRCNM: Serenity.StringEditor;
        PRCNM1: Serenity.StringEditor;
        PRCNM2: Serenity.StringEditor;
        PRCNM3: Serenity.StringEditor;
        PRCNM4: Serenity.StringEditor;
        PRCLST: Serenity.IntegerEditor;
        TAXPNL: Serenity.IntegerEditor;
        ORDFLG: Serenity.IntegerEditor;
        CMPDISC: Serenity.IntegerEditor;
        CST_CDOBLG: Serenity.IntegerEditor;
        AFFRQTY: Serenity.IntegerEditor;
        SING: Serenity.IntegerEditor;
        ORD_NOFLG: Serenity.IntegerEditor;
        REPS_FLG: Serenity.IntegerEditor;
        MLTLOC: Serenity.IntegerEditor;
        USEBARCOD: Serenity.IntegerEditor;
        ADJCST: Serenity.IntegerEditor;
        USRANK: Serenity.IntegerEditor;
        AUTONO: Serenity.IntegerEditor;
        SUMSHOW: Serenity.IntegerEditor;
        FDT: Serenity.DateEditor;
        TDT: Serenity.DateEditor;
        GL_JRN_CD: Serenity.StringEditor;
        AutoPostGL: Serenity.IntegerEditor;
        AFFDISC: Serenity.IntegerEditor;
        tr_ty_rank: Serenity.IntegerEditor;
        CSTTYP: Serenity.StringEditor;
        ACC_GRP: Serenity.StringEditor;
        TRTYORDR: Serenity.IntegerEditor;
        ADD_ACCS: Serenity.IntegerEditor;
        AFFDQTY: Serenity.IntegerEditor;
        ORDR: Serenity.IntegerEditor;
        DISC_TY: Serenity.IntegerEditor;
        TAX_TY: Serenity.IntegerEditor;
        AutoPostGL_CST: Serenity.IntegerEditor;
        MAX_QTY: Serenity.DecimalEditor;
        chksingpaid: Serenity.IntegerEditor;
        No_ItemEdit: Serenity.IntegerEditor;
        POST_CST: Serenity.StringEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    export class ASTRTYForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm.ASTRTY';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ASTRTYForm.init)  {
                ASTRTYForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(ASTRTYForm, [
                    'TR_TY', w0,
                    'Dscr_AR', w1,
                    'Dscr_EN', w1,
                    'TR_DS', w0,
                    'GRP', w0,
                    'RMRK', w1,
                    'NOBAL', w0,
                    'DBLACT', w0,
                    'DBLTR_TY', w0,
                    'DBLCST', w0,
                    'SERGRP', w1,
                    'AFFCST', w0,
                    'AFFACCDB', w0,
                    'AFFACCCR', w0,
                    'AFFCSHDB', w0,
                    'AFFCSHCR', w0,
                    'APRACCDB', w0,
                    'APRACCCR', w0,
                    'APRCSHDB', w0,
                    'APRCSHCR', w0,
                    'AFFBAL', w0,
                    'APRITMCARD', w0,
                    'ADUTTRTY', w1,
                    'CRDLIMTCHK', w0,
                    'chkpaid', w0,
                    'PSHOW', w0,
                    'CSTSHOW', w0,
                    'AZTRAIL', w0,
                    'PRCNM', w1,
                    'PRCNM1', w1,
                    'PRCNM2', w1,
                    'PRCNM3', w1,
                    'PRCNM4', w1,
                    'PRCLST', w0,
                    'TAXPNL', w0,
                    'ORDFLG', w0,
                    'CMPDISC', w0,
                    'CST_CDOBLG', w0,
                    'AFFRQTY', w0,
                    'SING', w0,
                    'ORD_NOFLG', w0,
                    'REPS_FLG', w0,
                    'MLTLOC', w0,
                    'USEBARCOD', w0,
                    'ADJCST', w0,
                    'USRANK', w0,
                    'AUTONO', w0,
                    'SUMSHOW', w0,
                    'FDT', w2,
                    'TDT', w2,
                    'GL_JRN_CD', w1,
                    'AutoPostGL', w0,
                    'AFFDISC', w0,
                    'tr_ty_rank', w0,
                    'CSTTYP', w1,
                    'ACC_GRP', w1,
                    'TRTYORDR', w0,
                    'ADD_ACCS', w0,
                    'AFFDQTY', w0,
                    'ORDR', w0,
                    'DISC_TY', w0,
                    'TAX_TY', w0,
                    'AutoPostGL_CST', w0,
                    'MAX_QTY', w3,
                    'chksingpaid', w0,
                    'No_ItemEdit', w0,
                    'POST_CST', w1,
                    'EnteredBy', w1,
                    'EntryDate', w2,
                    'UpdatedBy', w1,
                    'UpdateDate', w2
                ]);
            }
        }
    }
}
