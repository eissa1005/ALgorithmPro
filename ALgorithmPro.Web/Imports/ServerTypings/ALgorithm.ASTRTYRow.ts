namespace ALgorithmPro.ALgorithm {
    export interface ASTRTYRow {
        ID?: number;
        TR_TY?: number;
        Dscr_AR?: string;
        Dscr_EN?: string;
        TR_DS?: number;
        GRP?: number;
        RMRK?: string;
        NOBAL?: number;
        DBLACT?: number;
        DBLTR_TY?: number;
        DBLCST?: number;
        SERGRP?: string;
        AFFCST?: number;
        AFFACCDB?: number;
        AFFACCCR?: number;
        AFFCSHDB?: number;
        AFFCSHCR?: number;
        APRACCDB?: number;
        APRACCCR?: number;
        APRCSHDB?: number;
        APRCSHCR?: number;
        AFFBAL?: number;
        APRITMCARD?: number;
        ADUTTRTY?: string;
        CRDLIMTCHK?: number;
        chkpaid?: number;
        PSHOW?: number;
        CSTSHOW?: number;
        AZTRAIL?: number;
        PRCNM?: string;
        PRCNM1?: string;
        PRCNM2?: string;
        PRCNM3?: string;
        PRCNM4?: string;
        PRCLST?: number;
        TAXPNL?: number;
        ORDFLG?: number;
        CMPDISC?: number;
        CST_CDOBLG?: number;
        AFFRQTY?: number;
        SING?: number;
        ORD_NOFLG?: number;
        REPS_FLG?: number;
        MLTLOC?: number;
        USEBARCOD?: number;
        ADJCST?: number;
        USRANK?: number;
        AUTONO?: number;
        SUMSHOW?: number;
        FDT?: string;
        TDT?: string;
        GL_JRN_CD?: string;
        AutoPostGL?: number;
        AFFDISC?: number;
        tr_ty_rank?: number;
        CSTTYP?: string;
        ACC_GRP?: string;
        TRTYORDR?: number;
        ADD_ACCS?: number;
        AFFDQTY?: number;
        ORDR?: number;
        DISC_TY?: number;
        TAX_TY?: number;
        AutoPostGL_CST?: number;
        MAX_QTY?: number;
        chksingpaid?: number;
        No_ItemEdit?: number;
        POST_CST?: string;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }

    export namespace ASTRTYRow {
        export const idProperty = 'ID';
        export const nameProperty = 'Dscr_AR';
        export const localTextPrefix = 'ALgorithm.ASTRTY';
        export const lookupKey = 'ALgorithm.ASTRTY';

        export function getLookup(): Q.Lookup<ASTRTYRow> {
            return Q.getLookup<ASTRTYRow>('ALgorithm.ASTRTY');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ID = "ID",
            TR_TY = "TR_TY",
            Dscr_AR = "Dscr_AR",
            Dscr_EN = "Dscr_EN",
            TR_DS = "TR_DS",
            GRP = "GRP",
            RMRK = "RMRK",
            NOBAL = "NOBAL",
            DBLACT = "DBLACT",
            DBLTR_TY = "DBLTR_TY",
            DBLCST = "DBLCST",
            SERGRP = "SERGRP",
            AFFCST = "AFFCST",
            AFFACCDB = "AFFACCDB",
            AFFACCCR = "AFFACCCR",
            AFFCSHDB = "AFFCSHDB",
            AFFCSHCR = "AFFCSHCR",
            APRACCDB = "APRACCDB",
            APRACCCR = "APRACCCR",
            APRCSHDB = "APRCSHDB",
            APRCSHCR = "APRCSHCR",
            AFFBAL = "AFFBAL",
            APRITMCARD = "APRITMCARD",
            ADUTTRTY = "ADUTTRTY",
            CRDLIMTCHK = "CRDLIMTCHK",
            chkpaid = "chkpaid",
            PSHOW = "PSHOW",
            CSTSHOW = "CSTSHOW",
            AZTRAIL = "AZTRAIL",
            PRCNM = "PRCNM",
            PRCNM1 = "PRCNM1",
            PRCNM2 = "PRCNM2",
            PRCNM3 = "PRCNM3",
            PRCNM4 = "PRCNM4",
            PRCLST = "PRCLST",
            TAXPNL = "TAXPNL",
            ORDFLG = "ORDFLG",
            CMPDISC = "CMPDISC",
            CST_CDOBLG = "CST_CDOBLG",
            AFFRQTY = "AFFRQTY",
            SING = "SING",
            ORD_NOFLG = "ORD_NOFLG",
            REPS_FLG = "REPS_FLG",
            MLTLOC = "MLTLOC",
            USEBARCOD = "USEBARCOD",
            ADJCST = "ADJCST",
            USRANK = "USRANK",
            AUTONO = "AUTONO",
            SUMSHOW = "SUMSHOW",
            FDT = "FDT",
            TDT = "TDT",
            GL_JRN_CD = "GL_JRN_CD",
            AutoPostGL = "AutoPostGL",
            AFFDISC = "AFFDISC",
            tr_ty_rank = "tr_ty_rank",
            CSTTYP = "CSTTYP",
            ACC_GRP = "ACC_GRP",
            TRTYORDR = "TRTYORDR",
            ADD_ACCS = "ADD_ACCS",
            AFFDQTY = "AFFDQTY",
            ORDR = "ORDR",
            DISC_TY = "DISC_TY",
            TAX_TY = "TAX_TY",
            AutoPostGL_CST = "AutoPostGL_CST",
            MAX_QTY = "MAX_QTY",
            chksingpaid = "chksingpaid",
            No_ItemEdit = "No_ItemEdit",
            POST_CST = "POST_CST",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
