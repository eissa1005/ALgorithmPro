using ALgorithmPro.Lookup;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ASTRTY]")]
    [DisplayName("ASTRTY"), InstanceName("ASTRTY")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("ALgorithm.ASTRTY")]
    public sealed class ASTRTYRow : Row<ASTRTYRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("TR_TY"), Column("TR_TY"), PrimaryKey]
        public Int32? TR_TY
        {
            get => fields.TR_TY[this];
            set => fields.TR_TY[this] = value;
        }

        [DisplayName("Description Arabic"), Column("Dscr_AR"), Size(30), QuickSearch, NameProperty]
        public String Dscr_AR
        {
            get => fields.Dscr_AR[this];
            set => fields.Dscr_AR[this] = value;
        }

        [DisplayName("Description English"), Column("Dscr_EN"), Size(30)]
        public String Dscr_EN
        {
            get => fields.Dscr_EN[this];
            set => fields.Dscr_EN[this] = value;
        }
        [Hidden]
        [DisplayName("TR_DS"), Column("TR_DS")]
        public Int32? TR_DS
        {
            get => fields.TR_DS[this];
            set => fields.TR_DS[this] = value;
        }
        [Hidden]
        [DisplayName("GRP"), Column("GRP")]
        public Int32? GRP
        {
            get => fields.GRP[this];
            set => fields.GRP[this] = value;
        }

        [DisplayName("Remark"), Column("RMRK"), Size(255)]
        public String RMRK
        {
            get => fields.RMRK[this];
            set => fields.RMRK[this] = value;
        }

        [DisplayName("NOBAL"), Column("NOBAL")]
        public Int32? NOBAL
        {
            get => fields.NOBAL[this];
            set => fields.NOBAL[this] = value;
        }

        [Hidden]
        [DisplayName("DBLACT"), Column("DBLACT")]
        public Int32? DBLACT
        {
            get => fields.DBLACT[this];
            set => fields.DBLACT[this] = value;
        }
        [Hidden]
        [DisplayName("DBLTR_TY"), Column("DBLTR_TY")]
        public Int32? DBLTR_TY
        {
            get => fields.DBLTR_TY[this];
            set => fields.DBLTR_TY[this] = value;
        }
        [Hidden]
        [DisplayName("DBLCST"), Column("DBLCST")]
        public Int32? DBLCST
        {
            get => fields.DBLCST[this];
            set => fields.DBLCST[this] = value;
        }
        [Hidden]
        [DisplayName("SERGRP"), Column("SERGRP"), Size(10)]
        public String SERGRP
        {
            get => fields.SERGRP[this];
            set => fields.SERGRP[this] = value;
        }

        [DisplayName("AFFCST"), Column("AFFCST")]
        public Int32? AFFCST
        {
            get => fields.AFFCST[this];
            set => fields.AFFCST[this] = value;
        }

        [DisplayName("AFFACCDB"), Column("AFFACCDB")]
        public Int32? AFFACCDB
        {
            get => fields.AFFACCDB[this];
            set => fields.AFFACCDB[this] = value;
        }

        [DisplayName("AFFACCCR"), Column("AFFACCCR")]
        public Int32? AFFACCCR
        {
            get => fields.AFFACCCR[this];
            set => fields.AFFACCCR[this] = value;
        }

        [DisplayName("AFFCSHDB"), Column("AFFCSHDB")]
        public Int32? AFFCSHDB
        {
            get => fields.AFFCSHDB[this];
            set => fields.AFFCSHDB[this] = value;
        }

        [DisplayName("AFFCSHCR"), Column("AFFCSHCR")]
        public Int32? AFFCSHCR
        {
            get => fields.AFFCSHCR[this];
            set => fields.AFFCSHCR[this] = value;
        }

        [DisplayName("APRACCDB"), Column("APRACCDB")]
        public Int32? APRACCDB
        {
            get => fields.APRACCDB[this];
            set => fields.APRACCDB[this] = value;
        }

        [DisplayName("APRACCCR"), Column("APRACCCR")]
        public Int32? APRACCCR
        {
            get => fields.APRACCCR[this];
            set => fields.APRACCCR[this] = value;
        }

        [DisplayName("APRCSHDB"), Column("APRCSHDB")]
        public Int32? APRCSHDB
        {
            get => fields.APRCSHDB[this];
            set => fields.APRCSHDB[this] = value;
        }

        [DisplayName("APRCSHCR"), Column("APRCSHCR")]
        public Int32? APRCSHCR
        {
            get => fields.APRCSHCR[this];
            set => fields.APRCSHCR[this] = value;
        }

        [DisplayName("AFFBAL"), Column("AFFBAL")]
        public Int32? AFFBAL
        {
            get => fields.AFFBAL[this];
            set => fields.AFFBAL[this] = value;
        }

        [DisplayName("APRITMCARD"), Column("APRITMCARD")]
        public Int32? APRITMCARD
        {
            get => fields.APRITMCARD[this];
            set => fields.APRITMCARD[this] = value;
        }

        [DisplayName("ADUTTRTY"), Column("ADUTTRTY"), Size(50)]
        public String ADUTTRTY
        {
            get => fields.ADUTTRTY[this];
            set => fields.ADUTTRTY[this] = value;
        }
        [Hidden]
        [DisplayName("CRDLIMTCHK"), Column("CRDLIMTCHK")]
        public Int32? CRDLIMTCHK
        {
            get => fields.CRDLIMTCHK[this];
            set => fields.CRDLIMTCHK[this] = value;
        }

        [DisplayName("checkk Paid"), Column("chkpaid")]
        public Int32? chkpaid
        {
            get => fields.chkpaid[this];
            set => fields.chkpaid[this] = value;
        }
        [Hidden]
        [DisplayName("PSHOW"), Column("PSHOW")]
        public Int32? PSHOW
        {
            get => fields.PSHOW[this];
            set => fields.PSHOW[this] = value;
        }
        [Hidden]
        [DisplayName("CSTSHOW"), Column("CSTSHOW")]
        public Int32? CSTSHOW
        {
            get => fields.CSTSHOW[this];
            set => fields.CSTSHOW[this] = value;
        }
        [Hidden]
        [DisplayName("AZTRAIL"), Column("AZTRAIL")]
        public Int32? AZTRAIL
        {
            get => fields.AZTRAIL[this];
            set => fields.AZTRAIL[this] = value;
        }

        [DisplayName("PRCNM"), Column("PRCNM"), Size(12)]
        public String PRCNM
        {
            get => fields.PRCNM[this];
            set => fields.PRCNM[this] = value;
        }
        [Hidden]
        [DisplayName("PRCNM1"), Column("PRCNM1"), Size(12)]
        public String PRCNM1
        {
            get => fields.PRCNM1[this];
            set => fields.PRCNM1[this] = value;
        }
        [Hidden]
        [DisplayName("PRCNM2"), Column("PRCNM2"), Size(12)]
        public String PRCNM2
        {
            get => fields.PRCNM2[this];
            set => fields.PRCNM2[this] = value;
        }
        [Hidden]
        [DisplayName("PRCNM3"), Column("PRCNM3"), Size(12)]
        public String PRCNM3
        {
            get => fields.PRCNM3[this];
            set => fields.PRCNM3[this] = value;
        }
        [Hidden]
        [DisplayName("PRCNM4"), Column("PRCNM4"), Size(12)]
        public String PRCNM4
        {
            get => fields.PRCNM4[this];
            set => fields.PRCNM4[this] = value;
        }
        [Hidden]
        [DisplayName("PRCLST"), Column("PRCLST")]
        public Int32? PRCLST
        {
            get => fields.PRCLST[this];
            set => fields.PRCLST[this] = value;
        }
        [Hidden]
        [DisplayName("TAXPNL"), Column("TAXPNL")]
        public Int32? TAXPNL
        {
            get => fields.TAXPNL[this];
            set => fields.TAXPNL[this] = value;
        }
        [Hidden]
        [DisplayName("ORDFLG"), Column("ORDFLG")]
        public Int32? ORDFLG
        {
            get => fields.ORDFLG[this];
            set => fields.ORDFLG[this] = value;
        }
        [Hidden]
        [DisplayName("CMPDISC"), Column("CMPDISC")]
        public Int32? CMPDISC
        {
            get => fields.CMPDISC[this];
            set => fields.CMPDISC[this] = value;
        }
        [Hidden]
        [DisplayName("CST_CDOBLG"), Column("CST_CDOBLG")]
        public Int32? CST_CDOBLG
        {
            get => fields.CST_CDOBLG[this];
            set => fields.CST_CDOBLG[this] = value;
        }

        [DisplayName("AFFRQTY"), Column("AFFRQTY")]
        public Int32? AFFRQTY
        {
            get => fields.AFFRQTY[this];
            set => fields.AFFRQTY[this] = value;
        }

        [DisplayName("SING"), Column("SING")]
        public Int32? SING
        {
            get => fields.SING[this];
            set => fields.SING[this] = value;
        }
        [Hidden]
        [DisplayName("ORD_NOFLG"), Column("ORD_NOFLG")]
        public Int32? ORD_NOFLG
        {
            get => fields.ORD_NOFLG[this];
            set => fields.ORD_NOFLG[this] = value;
        }
        [Hidden]
        [DisplayName("REPS_FLG"), Column("REPS_FLG")]
        public Int32? REPS_FLG
        {
            get => fields.REPS_FLG[this];
            set => fields.REPS_FLG[this] = value;
        }
        [Hidden]
        [DisplayName("MLTLOC"), Column("MLTLOC")]
        public Int32? MLTLOC
        {
            get => fields.MLTLOC[this];
            set => fields.MLTLOC[this] = value;
        }
        [Hidden]
        [DisplayName("USEBARCOD"), Column("USEBARCOD")]
        public Int32? USEBARCOD
        {
            get => fields.USEBARCOD[this];
            set => fields.USEBARCOD[this] = value;
        }
        [Hidden]
        [DisplayName("ADJCST"), Column("ADJCST")]
        public Int32? ADJCST
        {
            get => fields.ADJCST[this];
            set => fields.ADJCST[this] = value;
        }
        [Hidden]
        [DisplayName("USRANK"), Column("USRANK")]
        public Int32? USRANK
        {
            get => fields.USRANK[this];
            set => fields.USRANK[this] = value;
        }
        [Hidden]
        [DisplayName("AUTONO"), Column("AUTONO")]
        public Int32? AUTONO
        {
            get => fields.AUTONO[this];
            set => fields.AUTONO[this] = value;
        }
        [Hidden]
        [DisplayName("SUMSHOW"), Column("SUMSHOW")]
        public Int32? SUMSHOW
        {
            get => fields.SUMSHOW[this];
            set => fields.SUMSHOW[this] = value;
        }

        [DisplayName("FDT"), Column("FDT")]
        public DateTime? FDT
        {
            get => fields.FDT[this];
            set => fields.FDT[this] = value;
        }

        [DisplayName("TDT"), Column("TDT")]
        public DateTime? TDT
        {
            get => fields.TDT[this];
            set => fields.TDT[this] = value;
        }
        [Hidden]
        [DisplayName("GL_JRN_CD"), Column("GL_JRN_CD"), Size(3)]
        public String GL_JRN_CD
        {
            get => fields.GL_JRN_CD[this];
            set => fields.GL_JRN_CD[this] = value;
        }
        [Hidden]
        [DisplayName("AutoPostGL"), Column("AutoPostGL")]
        public Int32? AutoPostGL
        {
            get => fields.AutoPostGL[this];
            set => fields.AutoPostGL[this] = value;
        }

        [DisplayName("AFFDISC"), Column("AFFDISC")]
        public Int32? AFFDISC
        {
            get => fields.AFFDISC[this];
            set => fields.AFFDISC[this] = value;
        }
        [Hidden]
        [DisplayName("tr_ty_rank"), Column("tr_ty_rank")]
        public Int32? tr_ty_rank
        {
            get => fields.tr_ty_rank[this];
            set => fields.tr_ty_rank[this] = value;
        }
        [Hidden]
        [DisplayName("CSTTYP"), Column("CSTTYP"), Size(50)]
        public String CSTTYP
        {
            get => fields.CSTTYP[this];
            set => fields.CSTTYP[this] = value;
        }

        [DisplayName("ACC_GRP"), Column("ACC_GRP"), Size(50)]
        public String ACC_GRP
        {
            get => fields.ACC_GRP[this];
            set => fields.ACC_GRP[this] = value;
        }

        [DisplayName("TRTYORDR"), Column("TRTYORDR")]
        public Int32? TRTYORDR
        {
            get => fields.TRTYORDR[this];
            set => fields.TRTYORDR[this] = value;
        }
        [Hidden]
        [DisplayName("ADD_ACCS"), Column("ADD_ACCS")]
        public Int32? ADD_ACCS
        {
            get => fields.ADD_ACCS[this];
            set => fields.ADD_ACCS[this] = value;
        }
        [Hidden]
        [DisplayName("AFFDQTY"), Column("AFFDQTY")]
        public Int32? AFFDQTY
        {
            get => fields.AFFDQTY[this];
            set => fields.AFFDQTY[this] = value;
        }
        [Hidden]
        [DisplayName("ORDR"), Column("ORDR")]
        public Int32? ORDR
        {
            get => fields.ORDR[this];
            set => fields.ORDR[this] = value;
        }

        [DisplayName("DISC_TY"), Column("DISC_TY")]
        public Int32? DISC_TY
        {
            get => fields.DISC_TY[this];
            set => fields.DISC_TY[this] = value;
        }

        [DisplayName("TAX_TY"), Column("TAX_TY")]
        public Int32? TAX_TY
        {
            get => fields.TAX_TY[this];
            set => fields.TAX_TY[this] = value;
        }
        [Hidden]
        [DisplayName("AutoPostGL_CST"), Column("AutoPostGL_CST")]
        public Int32? AutoPostGL_CST
        {
            get => fields.AutoPostGL_CST[this];
            set => fields.AutoPostGL_CST[this] = value;
        }

        [DisplayName("MAX_QTY"), Column("MAX_QTY"), Size(18), Scale(4)]
        public Decimal? MAX_QTY
        {
            get => fields.MAX_QTY[this];
            set => fields.MAX_QTY[this] = value;
        }
        [Hidden]
        [DisplayName("chksingpaid"), Column("chksingpaid")]
        public Int32? chksingpaid
        {
            get => fields.chksingpaid[this];
            set => fields.chksingpaid[this] = value;
        }
        [Hidden]
        [DisplayName("No_ItemEdit"), Column("No_ItemEdit")]
        public Int32? No_ItemEdit
        {
            get => fields.No_ItemEdit[this];
            set => fields.No_ItemEdit[this] = value;
        }
        [Hidden]
        [DisplayName("POST_CST"), Column("POST_CST"), Size(30)]
        public String POST_CST
        {
            get => fields.POST_CST[this];
            set => fields.POST_CST[this] = value;
        }
        [DisplayName("EnteredBy"), Size(30)]
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

        [DisplayName("UpdatedBy"), Size(30)]
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

        public ASTRTYRow()
            : base()
        {
        }

        public ASTRTYRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public Int32Field TR_TY;
            public StringField Dscr_AR;
            public StringField Dscr_EN;
            public Int32Field TR_DS;
            public Int32Field GRP;
            public StringField RMRK;
            public Int32Field NOBAL;
            public Int32Field DBLACT;
            public Int32Field DBLTR_TY;
            public Int32Field DBLCST;
            public StringField SERGRP;
            public Int32Field AFFCST;
            public Int32Field AFFACCDB;
            public Int32Field AFFACCCR;
            public Int32Field AFFCSHDB;
            public Int32Field AFFCSHCR;
            public Int32Field APRACCDB;
            public Int32Field APRACCCR;
            public Int32Field APRCSHDB;
            public Int32Field APRCSHCR;
            public Int32Field AFFBAL;
            public Int32Field APRITMCARD;
            public StringField ADUTTRTY;
            public Int32Field CRDLIMTCHK;
            public Int32Field chkpaid;
            public Int32Field PSHOW;
            public Int32Field CSTSHOW;
            public Int32Field AZTRAIL;
            public StringField PRCNM;
            public StringField PRCNM1;
            public StringField PRCNM2;
            public StringField PRCNM3;
            public StringField PRCNM4;
            public Int32Field PRCLST;
            public Int32Field TAXPNL;
            public Int32Field ORDFLG;
            public Int32Field CMPDISC;
            public Int32Field CST_CDOBLG;
            public Int32Field AFFRQTY;
            public Int32Field SING;
            public Int32Field ORD_NOFLG;
            public Int32Field REPS_FLG;
            public Int32Field MLTLOC;
            public Int32Field USEBARCOD;
            public Int32Field ADJCST;
            public Int32Field USRANK;
            public Int32Field AUTONO;
            public Int32Field SUMSHOW;
            public DateTimeField FDT;
            public DateTimeField TDT;
            public StringField GL_JRN_CD;
            public Int32Field AutoPostGL;
            public Int32Field AFFDISC;
            public Int32Field tr_ty_rank;
            public StringField CSTTYP;
            public StringField ACC_GRP;
            public Int32Field TRTYORDR;
            public Int32Field ADD_ACCS;
            public Int32Field AFFDQTY;
            public Int32Field ORDR;
            public Int32Field DISC_TY;
            public Int32Field TAX_TY;
            public Int32Field AutoPostGL_CST;
            public DecimalField MAX_QTY;
            public Int32Field chksingpaid;
            public Int32Field No_ItemEdit;
            public StringField POST_CST;
            public StringField EnteredBy;
            public DateTimeField EntryDate;
            public StringField UpdatedBy;
            public DateTimeField UpdateDate;
        }
    }
}
