using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ALgorithmPro.ALgorithm.Forms
{
    [FormScript("ALgorithm.ASTRTY")]
    [BasedOnRow(typeof(Entities.ASTRTYRow), CheckNames = true)]
    public class ASTRTYForm
    {
        public Int32 TR_TY { get; set; }
        public String Dscr_AR { get; set; }
        public String Dscr_EN { get; set; }
        public Int32 TR_DS { get; set; }
        public Int32 GRP { get; set; }
        public String RMRK { get; set; }
        public Int32 NOBAL { get; set; }
        public Int32 DBLACT { get; set; }
        public Int32 DBLTR_TY { get; set; }
        public Int32 DBLCST { get; set; }
        public String SERGRP { get; set; }
        public Int32 AFFCST { get; set; }
        public Int32 AFFACCDB { get; set; }
        public Int32 AFFACCCR { get; set; }
        public Int32 AFFCSHDB { get; set; }
        public Int32 AFFCSHCR { get; set; }
        public Int32 APRACCDB { get; set; }
        public Int32 APRACCCR { get; set; }
        public Int32 APRCSHDB { get; set; }
        public Int32 APRCSHCR { get; set; }
        public Int32 AFFBAL { get; set; }
        public Int32 APRITMCARD { get; set; }
        public String ADUTTRTY { get; set; }
        public Int32 CRDLIMTCHK { get; set; }
        public Int32 chkpaid { get; set; }
        public Int32 PSHOW { get; set; }
        public Int32 CSTSHOW { get; set; }
        public Int32 AZTRAIL { get; set; }
        public String PRCNM { get; set; }
        public String PRCNM1 { get; set; }
        public String PRCNM2 { get; set; }
        public String PRCNM3 { get; set; }
        public String PRCNM4 { get; set; }
        public Int32 PRCLST { get; set; }
        public Int32 TAXPNL { get; set; }
        public Int32 ORDFLG { get; set; }
        public Int32 CMPDISC { get; set; }
        public Int32 CST_CDOBLG { get; set; }
        public Int32 AFFRQTY { get; set; }
        public Int32 SING { get; set; }
        public Int32 ORD_NOFLG { get; set; }
        public Int32 REPS_FLG { get; set; }
        public Int32 MLTLOC { get; set; }
        public Int32 USEBARCOD { get; set; }
        public Int32 ADJCST { get; set; }
        public Int32 USRANK { get; set; }
        public Int32 AUTONO { get; set; }
        public Int32 SUMSHOW { get; set; }
        public DateTime FDT { get; set; }
        public DateTime TDT { get; set; }
        public String GL_JRN_CD { get; set; }
        public Int32 AutoPostGL { get; set; }
        public Int32 AFFDISC { get; set; }
        public Int32 tr_ty_rank { get; set; }
        public String CSTTYP { get; set; }
        public String ACC_GRP { get; set; }
        public Int32 TRTYORDR { get; set; }
        public Int32 ADD_ACCS { get; set; }
        public Int32 AFFDQTY { get; set; }
        public Int32 ORDR { get; set; }
        public Int32 DISC_TY { get; set; }
        public Int32 TAX_TY { get; set; }
        public Int32 AutoPostGL_CST { get; set; }
        public Decimal MAX_QTY { get; set; }
        public Int32 chksingpaid { get; set; }
        public Int32 No_ItemEdit { get; set; }
        public String POST_CST { get; set; }
        public String EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}