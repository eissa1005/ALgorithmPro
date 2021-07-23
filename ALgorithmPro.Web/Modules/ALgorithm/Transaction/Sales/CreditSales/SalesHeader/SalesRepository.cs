using ALgorithmPro.ALgorithm.Entities;
using ALgorithmPro.Web.Modules.Common;
using Serenity.Data;
using Serenity.Services;
using ALgorithmPro.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using static ALgorithmPro.Contstants;
using MyRow = ALgorithmPro.ALgorithm.Entities.SalesRow;

namespace ALgorithmPro.ALgorithm.Repositories
{
    public class SalesRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;
        public static IDbTransaction transaction;
        public static TRTYType SelectTRTY { set; get; }
        public static List<SalesASTRDRow> listASTRD { set; get; }
        public SalesRepository(IRequestContext context) : base(context)
        {
            SelectTRTY = TRTYType.Sales;
        }
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            transaction = uow.Connection.GetCurrentActualTransaction();
            var header = request.Entity;
            listASTRD = header.DetailList;
            SelectTRTY = (TRTYType)header.TR_TY;
            string ACCNO = header.ACC_NO;
            string ACC_NAME = header.ACC_NAME;
            try
            {

                var RATE = AS.GetValue(uow, FunctionName.GetCurrencyRate, "'" + header.CurrencyID + "'");
                header.RATE = AS.ToDouble(RATE);
                header.TRTY_NAME = AS.GetName(uow, FunctionName.GetTRTYNAME, header.TR_TY.ToString());
                header.Store_NAME = AS.GetName(uow, FunctionName.GetStoreName, "'" + header.StoreID + "'");
                header.Currency_NAME = AS.GetName(uow, FunctionName.GetCurrencyName, "'" + header.CurrencyID + "'");
                header.CST_NAME = AS.GetName(uow, FunctionName.GetCostName, "'" + header.CST_CD + "'");
                header.HDSCR_AR = " فاتورة " + header.TRTY_NAME + " رقم " + header.TR_NO;
                header.HDSCR_EN = header.HDSCR_AR;
                header.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now.Date;

                int LNNO = 1;
                if (SelectTRTY == TRTYType.Sales)
                {
                    listASTRD.ForEach(s =>
                    {
                        s.DetailID = header.HeaderID;
                        s.TR_NO = header.TR_NO;
                        s.TR_TY = (int)TRTYType.Sales;
                        s.TRTY_NAME = header.TRTY_NAME;
                        s.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now;
                        s.TR_DS = (int)TRDSTYPE.Sales;
                        s.GRP = (int)GRPTYPE.Sales;
                        s.StoreID = header.StoreID;
                        s.Store_NAME = header.Store_NAME;
                        s.ItemBarCode = AS.IsNullValue(s.ItemBarCode) ? s.Item_CD : s.ItemBarCode;
                        s.LN_NO = LNNO;
                        s.ACC_NO = ACCNO;
                        s.ACC_NAME = ACC_NAME;
                        s.ACC_NO2 = header.CashBoxID;
                        s.ACC_NAME2 = header.Cash_NAME;
                        s.CashBoxID = header.CashBoxID;
                        s.Cash_NAME = header.Cash_NAME;
                        s.REP_CD = header.REP_CD;
                        s.REP_NAME = header.REP_NAME;
                        s.REP_CD2 = header.REP_CD;
                        s.REP_NAME2 = header.REP_NAME2;
                        s.CurrencyID = header.CurrencyID;
                        s.Currency_Name = header.Currency_NAME;
                        s.RATE = header.RATE;
                        s.CUR_VL = s.NET;
                        s.DISC = s.DISC1 + s.DISC2 + s.DISC3 + s.DISC3;
                        s.TAXVAL = s.STAX_VL + s.TAX1 + s.TAX2 + s.TAX3 + s.TAX3;
                        s.disc_cur_val = s.DISC;
                        s.tax_cur_val = s.TAXVAL;
                        s.PTR_NO = header.PTR_NO;
                        s.PTR_TY = header.PTR_TY;
                        s.PStoreID = header.PStoreID;
                        s.PK = (!AS.IsNullValue(s.PK)) ? s.PK : 1;
                        s.PKPRC = s.Price / s.PK;
                        s.PKName = AS.GetName(uow, FunctionName.GetPKNAME, s.PKID);
                        s.TR_DS_AR = " فاتورة " + s.TRTY_NAME + " رقم " + s.TR_NO;
                        s.TR_DS_EN = " فاتورة " + s.TRTY_NAME + " رقم " + s.TR_NO;
                        s.PriceID = header.PriceID;
                        s.EnteredBy = CurrentUser.Username;
                        s.EntryDate = DateTime.Now;
                        LNNO++;
                    });

                    header.DetailList = listASTRD;
                    header.TR_DS = (int)TRDSTYPE.Sales;
                    header.ACC_NO = ACCNO;
                    header.ACC_NAME = ACC_NAME;
                    header.ACC_NO2 = header.CashBoxID;
                    header.ACC_NAME2 = header.Cash_NAME;
                    header.ReferenceNo = header.ReferenceNo == 0 ? header.TR_NO : header.ReferenceNo;
                    header.Paid = header.Paid;
                    header.NetTotal = header.NetTotal + header.Paid;
                    header.CUR_VL = header.NetTotal;
                    header.Balance = header.NetTotal - header.Paid;
                    request.Entity = header;
                }


                return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create);

            }
            catch (Exception exception)
            {
                transaction.Rollback();
                AS.AppendException(exception, exception.Message);
                return new SaveResponse();
            }
        }
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            transaction = uow.Connection.GetCurrentActualTransaction();
            var header = request.Entity;
            listASTRD = header.DetailList;
            SelectTRTY = (TRTYType)header.TR_TY;
            string ACCNO = header.ACC_NO;
            string ACC_NAME = header.ACC_NAME;
            try
            {

                var RATE = AS.GetValue(uow, FunctionName.GetCurrencyRate, "'" + header.CurrencyID + "'");
                header.RATE = AS.ToDouble(RATE);
                header.TRTY_NAME = AS.GetName(uow, FunctionName.GetTRTYNAME, header.TR_TY.ToString());
                header.Store_NAME = AS.GetName(uow, FunctionName.GetStoreName, "'" + header.StoreID + "'");
                header.Currency_NAME = AS.GetName(uow, FunctionName.GetCurrencyName, "'" + header.CurrencyID + "'");
                header.CST_NAME = AS.GetName(uow, FunctionName.GetCostName, "'" + header.CST_CD + "'");
                header.HDSCR_AR = " فاتورة " + header.TRTY_NAME + " رقم " + header.TR_NO;
                header.HDSCR_EN = header.HDSCR_AR;
                header.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now.Date;

                int LNNO = 1;
                if (SelectTRTY == TRTYType.Sales)
                {
                    listASTRD.ForEach(s =>
                    {
                        s.DetailID = header.HeaderID;
                        s.TR_NO = header.TR_NO;
                        s.TR_TY = (int)TRTYType.Sales;
                        s.TRTY_NAME = header.TRTY_NAME;
                        s.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now;
                        s.TR_DS = (int)TRDSTYPE.Sales;
                        s.GRP = (int)GRPTYPE.Sales;
                        s.StoreID = header.StoreID;
                        s.Store_NAME = header.Store_NAME;
                        s.ItemBarCode = AS.IsNullValue(s.ItemBarCode) ? s.Item_CD : s.ItemBarCode;
                        s.LN_NO = LNNO;
                        s.ACC_NO = ACCNO;
                        s.ACC_NAME = ACC_NAME;
                        s.ACC_NO2 = header.CashBoxID;
                        s.ACC_NAME2 = header.Cash_NAME;
                        s.CashBoxID = header.CashBoxID;
                        s.Cash_NAME = header.Cash_NAME;
                        s.REP_CD = header.REP_CD;
                        s.REP_NAME = header.REP_NAME;
                        s.REP_CD2 = header.REP_CD;
                        s.REP_NAME2 = header.REP_NAME2;
                        s.CurrencyID = header.CurrencyID;
                        s.Currency_Name = header.Currency_NAME;
                        s.RATE = header.RATE;
                        s.CUR_VL = s.NET;
                        s.DISC = s.DISC1 + s.DISC2 + s.DISC3 + s.DISC3;
                        s.TAXVAL = s.STAX_VL + s.TAX1 + s.TAX2 + s.TAX3 + s.TAX3;
                        s.disc_cur_val = s.DISC;
                        s.tax_cur_val = s.TAXVAL;
                        s.PTR_NO = header.PTR_NO;
                        s.PTR_TY = header.PTR_TY;
                        s.PStoreID = header.PStoreID;
                        s.PK = (!AS.IsNullValue(s.PK)) ? s.PK : 1;
                        s.PKPRC = s.Price / s.PK;
                        s.PKName = AS.GetName(uow, FunctionName.GetPKNAME, s.PKID);
                        s.TR_DS_AR = " فاتورة " + s.TRTY_NAME + " رقم " + s.TR_NO;
                        s.TR_DS_EN = " فاتورة " + s.TRTY_NAME + " رقم " + s.TR_NO;
                        s.PriceID = header.PriceID;
                        s.EnteredBy = CurrentUser.Username;
                        s.EntryDate = DateTime.Now;
                        LNNO++;
                    });

                    header.DetailList = listASTRD;
                    header.TR_DS = (int)TRDSTYPE.Sales;
                    header.ACC_NO = ACCNO;
                    header.ACC_NAME = ACC_NAME;
                    header.ACC_NO2 = header.CashBoxID;
                    header.ACC_NAME2 = header.Cash_NAME;
                    header.ReferenceNo = header.ReferenceNo == 0 ? header.TR_NO : header.ReferenceNo;
                    header.Paid = header.Paid;
                    header.CUR_VL = header.NetTotal;
                    header.Balance = header.NetTotal;
                    request.Entity = header;
                }


                return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);

            }
            catch (Exception exception)
            {
                transaction.Rollback();
                AS.AppendException(exception, exception.Message);
                return new SaveResponse();
            }
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            try
            {
                if (SelectTRTY == TRTYType.Sales)
                {

                    return new MyDeleteHandler(Context).Process(uow, request);
                }
                else
                {
                    return new DeleteResponse();
                }
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return new DeleteResponse();
            }
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            try
            {
                if (SelectTRTY == TRTYType.Sales)
                {

                    return new MyRetrieveHandler(Context).Process(connection, request);
                }
                else
                {
                    return new RetrieveResponse<MyRow>();
                }
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return new RetrieveResponse<MyRow>();
            }
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            var lst = new ListResponse<MyRow>();
            try
            {
                if (SelectTRTY == TRTYType.Sales)
                {
                    lst.Entities = connection.List<MyRow>(s => s.SelectTableFields()).Where<MyRow>(x => x.TR_TY == (int)TRTYType.Sales).ToList();
                    return lst;
                }
                else
                {
                    return new ListResponse<MyRow>();
                }
            }

            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return new ListResponse<MyRow>();
            }
            finally
            {
                connection.Execute(StoredName.ADJITMLOCBAL, commandTimeout: 30, commandType: CommandType.StoredProcedure);
                connection.Execute(StoredName.GetItemBAL, commandTimeout: 30, commandType: CommandType.StoredProcedure);
                connection.Execute(StoredName.ADJCST, commandTimeout: 30, commandType: CommandType.StoredProcedure);
            }
        }
        public static void ADDACCTRH(IDbConnection connection, SalesRow ASTRH)
        {
            if (SelectTRTY == TRTYType.Sales)
            {
                if (ASTRH == null || ASTRH.HeaderID == 0) return;
                transaction = connection.GetCurrentActualTransaction();
                var row = connection.List<ACCTRHRow>().FirstOrDefault(x => x.ASTRHID == ASTRH.HeaderID);
                if (row == null || row.HeaderID == 0)
                {
                    var ACCTRH = new ACCTRHRow();
                    ACCTRH.ASTRHID = ASTRH.HeaderID;
                    ACCTRH.TR_TY = ASTRH.TR_TY;
                    ACCTRH.TR_DS = ASTRH.TR_DS;
                    ACCTRH.TR_NO = ASTRH.TR_NO;
                    ACCTRH.StoreID = ASTRH.StoreID;
                    ACCTRH.Store_NAME = ASTRH.Store_NAME;
                    ACCTRH.TR_DT = ASTRH.TR_DT;
                    ACCTRH.CashBoxID = ASTRH.CashBoxID;
                    ACCTRH.Cash_NAME = ASTRH.Cash_NAME;
                    ACCTRH.ACC_NO = ASTRH.ACC_NO;
                    ACCTRH.ACC_NAME = ASTRH.ACC_NAME;
                    ACCTRH.ACC_NO2 = ASTRH.ACC_NO2;
                    ACCTRH.ACC_NAME2 = ASTRH.ACC_NAME2;
                    ACCTRH.ACC_NO3 = ASTRH.ACC_NO3;
                    ACCTRH.ACC_NAME3 = ASTRH.ACC_NAME3;
                    ACCTRH.TRTY_NAME = ASTRH.TRTY_NAME;
                    ACCTRH.REP_CD = ASTRH.REP_CD;
                    ACCTRH.REP_NAME = ASTRH.REP_NAME;
                    ACCTRH.REP_CD2 = ASTRH.REP_CD2;
                    ACCTRH.REP_NAME2 = ASTRH.REP_NAME2;
                    ACCTRH.CST_CD = ASTRH.CST_CD;
                    ACCTRH.CST_NAME = ASTRH.CST_NAME;
                    ACCTRH.HDSCR_AR = ASTRH.HDSCR_AR;
                    ACCTRH.HDSCR_EN = ASTRH.HDSCR_EN;
                    ACCTRH.CurrencyID = ASTRH.CurrencyID;
                    ACCTRH.Currency_NAME = ASTRH.Currency_NAME;
                    ACCTRH.RATE = ASTRH.RATE;
                    ACCTRH.CUR_VL = ASTRH.CUR_VL;
                    ACCTRH.Paid = ASTRH.Paid;
                    ACCTRH.EXPENSE_VL = ASTRH.EXPENSEVL;
                    ACCTRH.TotalValue = ASTRH.Total;
                    ACCTRH.NetTotal = ASTRH.NetTotal;
                    ACCTRH.BALDB = ASTRH.NetTotal;
                    ACCTRH.BALCR = 0;
                    ACCTRH.BAL = ASTRH.NetTotal;
                    ACCTRH.Status = 1;
                    ACCTRH.EnteredBy = CurrentUser.Username;
                    ACCTRH.EntryDate = DateTime.Now;
                    try
                    {
                        connection.Insert<ACCTRHRow>(ACCTRH);
                        var Header = connection.List<ACCTRHRow>().FirstOrDefault(x => x.ASTRHID == ASTRH.HeaderID);
                        ADDACCTRD(connection, Header, ASTRH);
                    }
                    catch (Exception exception)
                    {
                        transaction.Rollback();
                        AS.AppendException(exception, exception.Message);
                    }

                }
                else
                {
                    var ACCTRH = connection.List<ACCTRHRow>().FirstOrDefault(x => x.ASTRHID == ASTRH.HeaderID);
                    ACCTRH.ASTRHID = ASTRH.HeaderID;
                    ACCTRH.TR_TY = ASTRH.TR_TY;
                    ACCTRH.TR_NO = ASTRH.TR_NO;
                    ACCTRH.StoreID = ASTRH.StoreID;
                    ACCTRH.Store_NAME = ASTRH.Store_NAME;
                    ACCTRH.TR_DT = ASTRH.TR_DT;
                    ACCTRH.TR_DS = ASTRH.TR_DS;
                    ACCTRH.CashBoxID = ASTRH.CashBoxID;
                    ACCTRH.Cash_NAME = ASTRH.Cash_NAME;
                    ACCTRH.ACC_NO = ASTRH.ACC_NO;
                    ACCTRH.ACC_NAME = ASTRH.ACC_NAME;
                    ACCTRH.ACC_NO2 = ASTRH.ACC_NO2;
                    ACCTRH.ACC_NAME2 = ASTRH.ACC_NAME2;
                    ACCTRH.ACC_NO3 = ASTRH.ACC_NO3;
                    ACCTRH.ACC_NAME3 = ASTRH.ACC_NAME3;
                    ACCTRH.TRTY_NAME = ASTRH.TRTY_NAME;
                    ACCTRH.REP_CD = ASTRH.REP_CD;
                    ACCTRH.REP_NAME = ASTRH.REP_NAME;
                    ACCTRH.REP_CD2 = ASTRH.REP_CD2;
                    ACCTRH.REP_NAME2 = ASTRH.REP_NAME2;
                    ACCTRH.CST_CD = ASTRH.CST_CD;
                    ACCTRH.CST_NAME = ASTRH.CST_NAME;
                    ACCTRH.HDSCR_AR = ASTRH.HDSCR_AR;
                    ACCTRH.HDSCR_EN = ASTRH.HDSCR_EN;
                    ACCTRH.CurrencyID = ASTRH.CurrencyID;
                    ACCTRH.Currency_NAME = ASTRH.Currency_NAME;
                    ACCTRH.RATE = ASTRH.RATE;
                    ACCTRH.CUR_VL = ASTRH.CUR_VL;
                    ACCTRH.Paid = ASTRH.Paid;
                    ACCTRH.EXPENSE_VL = ASTRH.EXPENSEVL;
                    ACCTRH.TotalValue = ASTRH.Total;
                    ACCTRH.NetTotal = ASTRH.NetTotal;
                    ACCTRH.BALDB = ASTRH.NetTotal; 
                    ACCTRH.BALCR = 0;
                    ACCTRH.BAL = ASTRH.NetTotal;
                    ACCTRH.Status = 1;
                    ACCTRH.UpdatedBy = CurrentUser.Username;
                    ACCTRH.UpdateDate = DateTime.Now;
                    try
                    {
                        connection.UpdateById<ACCTRHRow>(ACCTRH, ExpectedRows.One);
                        var Header = connection.ById<ACCTRHRow>(ACCTRH.HeaderID);
                        ADDACCTRD(connection, Header, ASTRH);
                    }
                    catch (Exception exception)
                    {
                        transaction.Rollback();
                        AS.AppendException(exception, exception.Message);
                    }

                }
            }
        }
        public static void ADDACCTRD(IDbConnection connection, ACCTRHRow ACCTRH, SalesRow ASTRH)
        {
            if (SelectTRTY == TRTYType.Sales)
            {

                if (ACCTRH == null || ACCTRH.HeaderID == 0) return;
                transaction = connection.GetCurrentActualTransaction();
                var Result = connection.ExistsById<ACCTRDRow>(ACCTRH.HeaderID);
                if (!Result)
                {
                    var ACCTRD = new ACCTRDRow();
                    ACCTRD.ID = ACCTRH.HeaderID;
                    ACCTRD.HeaderID = ACCTRH.HeaderID;
                    ACCTRD.TR_TY = ACCTRH.TR_TY;
                    ACCTRD.TR_NO = ACCTRH.TR_NO;
                    ACCTRD.StoreID = ACCTRH.StoreID;
                    ACCTRD.Store_NAME = ACCTRH.Store_NAME;
                    ACCTRD.TR_DT = ACCTRH.TR_DT;
                    ACCTRD.TR_DS = ACCTRH.TR_DS;
                    ACCTRD.CashBoxID = ACCTRH.ACC_NO2;
                    ACCTRD.Cash_NAME = ACCTRH.Cash_NAME;
                    ACCTRD.ACC_NO = ACCTRH.ACC_NO;
                    ACCTRD.ACC_NAME = ACCTRH.ACC_NAME;
                    ACCTRD.ACC_NO2 = ACCTRH.ACC_NO2;
                    ACCTRD.ACC_NAME2 = ACCTRH.ACC_NAME2;
                    ACCTRD.ACC_NO3 = ACCTRH.ACC_NO3;
                    ACCTRD.ACC_NAME3 = ACCTRH.ACC_NAME3;
                    ACCTRD.TRTY_NAME = ACCTRH.TRTY_NAME;
                    ACCTRD.REP_CD = ACCTRH.REP_CD;
                    ACCTRD.REP_NAME = ACCTRH.REP_NAME;
                    ACCTRD.REP_CD2 = ACCTRH.REP_CD2;
                    ACCTRD.REP_NAME2 = ACCTRH.REP_NAME2;
                    ACCTRD.CST_CD = ACCTRH.CST_CD;
                    ACCTRD.CST_NAME = ACCTRH.CST_NAME;
                    ACCTRD.TR_DS_AR = ACCTRH.HDSCR_AR;
                    ACCTRD.TR_DS_EN = ACCTRH.HDSCR_EN;
                    ACCTRD.CurrencyID = ACCTRH.CurrencyID;
                    ACCTRD.Currency_NAME = ACCTRH.CurrencyID;
                    ACCTRD.RATE = ACCTRH.RATE;
                    ACCTRD.CUR_VL = ACCTRH.CUR_VL;
                    ACCTRD.EXPENSVL = ACCTRH.EXPENSE_VL;
                    ACCTRD.TotalValue = ACCTRH.TotalValue;
                    ACCTRD.NetTotal = ACCTRH.NetTotal;
                    ACCTRD.DB = ACCTRH.NetTotal;
                    ACCTRD.CR = 0;
                    ACCTRD.BAL = ACCTRH.NetTotal;
                    ACCTRD.CUR_DB_VL = ACCTRH.CUR_VL; 
                    ACCTRD.CUR_CR_VL = 0;
                    ACCTRD.ACC_CUR_BAL = ACCTRH.CUR_VL;
                    ACCTRD.Status = 1;
                    ACCTRD.EnteredBy = CurrentUser.Username;
                    ACCTRD.EntryDate = DateTime.Now;
                    try
                    {
                        connection.Insert<ACCTRDRow>(ACCTRD);
                        var Header = connection.List<ACCTRHRow>().FirstOrDefault(x => x.ASTRHID == ASTRH.HeaderID);
                        CashHeader(connection, Header);

                    }
                    catch (Exception exception)
                    {
                        transaction.Rollback();
                        AS.AppendException(exception, exception.Message);
                    }

                }
                else
                {
                    var ACCTRD = connection.ById<ACCTRDRow>(ACCTRH.HeaderID);
                    if (ACCTRD == null || ACCTRD.HeaderID == 0) return;
                    ACCTRD.ID = ACCTRH.HeaderID;
                    ACCTRD.HeaderID = ACCTRH.HeaderID;
                    ACCTRD.TR_TY = ACCTRH.TR_TY;
                    ACCTRD.TR_NO = ACCTRH.TR_NO;
                    ACCTRD.StoreID = ACCTRH.StoreID;
                    ACCTRD.Store_NAME = ACCTRH.Store_NAME;
                    ACCTRD.TR_DT = ACCTRH.TR_DT;
                    ACCTRD.TR_DS = ACCTRH.TR_DS;
                    ACCTRD.CashBoxID = ACCTRH.ACC_NO2;
                    ACCTRD.Cash_NAME = ACCTRH.Cash_NAME;
                    ACCTRD.ACC_NO = ACCTRH.ACC_NO;
                    ACCTRD.ACC_NAME = ACCTRH.ACC_NAME;
                    ACCTRD.ACC_NO2 = ACCTRH.ACC_NO2;
                    ACCTRD.ACC_NAME2 = ACCTRH.ACC_NAME2;
                    ACCTRD.ACC_NO3 = ACCTRH.ACC_NO3;
                    ACCTRD.ACC_NAME3 = ACCTRH.ACC_NAME3;
                    ACCTRD.TRTY_NAME = ACCTRH.TRTY_NAME;
                    ACCTRD.REP_CD = ACCTRH.REP_CD;
                    ACCTRD.REP_NAME = ACCTRH.REP_NAME;
                    ACCTRD.REP_CD2 = ACCTRH.REP_CD2;
                    ACCTRD.REP_NAME2 = ACCTRH.REP_NAME2;
                    ACCTRD.CST_CD = ACCTRH.CST_CD;
                    ACCTRD.CST_NAME = ACCTRH.CST_NAME;
                    ACCTRD.TR_DS_AR = ACCTRH.HDSCR_AR;
                    ACCTRD.TR_DS_EN = ACCTRH.HDSCR_EN;
                    ACCTRD.CurrencyID = ACCTRH.CurrencyID;
                    ACCTRD.Currency_NAME = ACCTRH.CurrencyID;
                    ACCTRD.RATE = ACCTRH.RATE;
                    ACCTRD.CUR_VL = ACCTRH.CUR_VL;
                    ACCTRD.EXPENSVL = ACCTRH.EXPENSE_VL;
                    ACCTRD.TotalValue = ACCTRH.TotalValue;
                    ACCTRD.NetTotal = ACCTRH.NetTotal;
                    ACCTRD.DB = ACCTRH.NetTotal;
                    ACCTRD.CR = 0;
                    ACCTRD.BAL = ACCTRH.NetTotal;
                    ACCTRD.CUR_DB_VL = ACCTRH.CUR_VL;
                    ACCTRD.CUR_CR_VL = 0;
                    ACCTRD.ACC_CUR_BAL = ACCTRH.CUR_VL;
                    ACCTRD.Status = 1;
                    ACCTRD.UpdatedBy = CurrentUser.Username;
                    ACCTRD.UpdateDate = DateTime.Now;
                    try
                    {
                        connection.UpdateById<ACCTRDRow>(ACCTRD);
                        var Header = connection.List<ACCTRHRow>().FirstOrDefault(x => x.ASTRHID == ASTRH.HeaderID);
                        CashHeader(connection, Header);
                    }
                    catch (Exception exception)
                    {
                        transaction.Rollback();
                        AS.AppendException(exception, exception.Message);
                    }
                }
            }
        }

        // Add Receipt Payed 
        public static void CashHeader(IDbConnection connection, ACCTRHRow ASTRH)
        {
            if (SelectTRTY == TRTYType.Sales)
            {
                int CashReceive = (int)TRTYType.CashReceive;
                if (ASTRH == null || ASTRH.HeaderID == 0) return;
                transaction = connection.GetCurrentActualTransaction();
                var Header = connection.List<ACCTRHRow>().FirstOrDefault(x => x.HeaderID == ASTRH.HeaderID && x.TR_TY == CashReceive && x.StoreID == ASTRH.StoreID);
                string TRTYName = AS.GetName(connection, FunctionName.GetTRTYNAME, CashReceive.ToString());
                var MAXNO = AS.GetMaxACCTRH(connection, ASTRH.StoreID, CashReceive);
                string TRNO = AS.GetMaxNumberInString(MAXNO.ToString());
                if (ASTRH.Paid > 0)
                {
                    if (Header == null || Header.HeaderID == 0)
                    {
                        var ACCTRH = new ACCTRHRow();
                        ACCTRH.ASTRHID = ASTRH.ASTRHID;
                        ACCTRH.TR_TY = (int)TRTYType.CashReceive;
                        ACCTRH.TRTY_NAME = TRTYName;
                        ACCTRH.TR_NO = AS.IsNullValue(TRNO) ? 1 : AS.ToInt(TRNO);
                        ACCTRH.StoreID = ASTRH.StoreID;
                        ACCTRH.Store_NAME = ASTRH.Store_NAME;
                        ACCTRH.TR_DT = ASTRH.TR_DT;
                        ACCTRH.TR_DS = (int)TRDSTYPE.CashReceive;
                        ACCTRH.CashBoxID = ASTRH.CashBoxID;
                        ACCTRH.Cash_NAME = ASTRH.Cash_NAME;
                        ACCTRH.ACC_NO = ASTRH.ACC_NO;
                        ACCTRH.ACC_NAME = ASTRH.ACC_NAME;
                        ACCTRH.ACC_NO2 = ASTRH.CashBoxID;
                        ACCTRH.ACC_NAME2 = ASTRH.Cash_NAME;
                        ACCTRH.ACC_NO3 = ASTRH.ACC_NO3;
                        ACCTRH.ACC_NAME3 = ASTRH.ACC_NAME3;
                        ACCTRH.REP_CD = ASTRH.REP_CD;
                        ACCTRH.REP_NAME = ASTRH.REP_NAME;
                        ACCTRH.REP_CD2 = ASTRH.REP_CD2;
                        ACCTRH.REP_NAME2 = ASTRH.REP_NAME2;
                        ACCTRH.CST_CD = ASTRH.CST_CD;
                        ACCTRH.CST_NAME = ASTRH.CST_NAME;
                        ACCTRH.HDSCR_AR = " إيصـال قبض جزء من فاتورة رقم " + ASTRH.TR_NO;
                        ACCTRH.HDSCR_EN = " إيصـال قبض جزء من فاتورة رقم " + ASTRH.TR_NO;
                        ACCTRH.CurrencyID = ASTRH.CurrencyID;
                        ACCTRH.Currency_NAME = ASTRH.Currency_NAME;
                        ACCTRH.PTR_NO = ASTRH.TR_NO;
                        ACCTRH.PTR_TY = ASTRH.TR_TY;
                        ACCTRH.PStoreID = ASTRH.StoreID;
                        ACCTRH.RATE = ASTRH.RATE;
                        ACCTRH.CUR_VL = ASTRH.Paid;
                        ACCTRH.Paid = ASTRH.Paid;
                        ACCTRH.EXPENSE_VL = ASTRH.EXPENSE_VL;
                        ACCTRH.TotalValue = ASTRH.NetTotal;
                        ACCTRH.NetTotal = ASTRH.Paid;
                        ACCTRH.BALDB = ASTRH.Paid; 
                        ACCTRH.BALCR = 0;
                        ACCTRH.BAL = ASTRH.Paid;
                        ACCTRH.Status = 1;
                        ACCTRH.EnteredBy = CurrentUser.Username;
                        ACCTRH.EntryDate = DateTime.Now;
                        try
                        {
                            connection.Insert<ACCTRHRow>(ACCTRH);
                            var Detail = connection.List<ACCTRHRow>().FirstOrDefault(x => x.ASTRHID == ACCTRH.ASTRHID && x.TR_TY == CashReceive);
                            CashDetail(connection, Detail);
                        }
                        catch (Exception exception)
                        {
                            transaction.Rollback();
                            AS.AppendException(exception, exception.Message);
                        }
                    }
                    else
                    {
                        var ACCTRH = new ACCTRHRow();
                        ACCTRH.ASTRHID = Header.HeaderID;
                        ACCTRH.TR_TY = (int)TRTYType.CashReceive;
                        ACCTRH.TRTY_NAME = TRTYName;
                        ACCTRH.TR_NO = AS.IsNullValue(TRNO) ? 1 : AS.ToInt(TRNO);
                        ACCTRH.StoreID = Header.StoreID;
                        ACCTRH.Store_NAME = Header.Store_NAME;
                        ACCTRH.TR_DT = Header.TR_DT;
                        ACCTRH.TR_DS = (int)TRDSTYPE.CashReceive;
                        ACCTRH.CashBoxID = Header.CashBoxID;
                        ACCTRH.Cash_NAME = Header.Cash_NAME;
                        ACCTRH.ACC_NO = ASTRH.CashBoxID;
                        ACCTRH.ACC_NAME = ASTRH.Cash_NAME;
                        ACCTRH.ACC_NO2 = ASTRH.ACC_NO;
                        ACCTRH.ACC_NAME2 = ASTRH.ACC_NAME;
                        ACCTRH.ACC_NO3 = Header.ACC_NO3;
                        ACCTRH.ACC_NAME3 = Header.ACC_NAME3;
                        ACCTRH.REP_CD = Header.REP_CD;
                        ACCTRH.REP_NAME = Header.REP_NAME;
                        ACCTRH.REP_CD2 = Header.REP_CD2;
                        ACCTRH.REP_NAME2 = Header.REP_NAME2;
                        ACCTRH.CST_CD = Header.CST_CD;
                        ACCTRH.CST_NAME = Header.CST_NAME;
                        ACCTRH.HDSCR_AR = Header.HDSCR_AR;
                        ACCTRH.HDSCR_EN = Header.HDSCR_EN;
                        ACCTRH.CurrencyID = Header.CurrencyID;
                        ACCTRH.Currency_NAME = Header.Currency_NAME;
                        ACCTRH.PTR_NO = Header.PTR_NO;
                        ACCTRH.PTR_TY = Header.PTR_TY;
                        ACCTRH.PStoreID = Header.PStoreID;
                        ACCTRH.RATE = Header.RATE;
                        ACCTRH.CUR_VL = Header.Paid;
                        ACCTRH.Paid = Header.Paid;
                        ACCTRH.EXPENSE_VL = Header.EXPENSE_VL;
                        ACCTRH.TotalValue = Header.NetTotal;
                        ACCTRH.NetTotal = Header.Paid;
                        ACCTRH.BALDB = 0;
                        ACCTRH.BALCR = Header.Paid;
                        ACCTRH.BAL = Header.Paid;
                        ACCTRH.Status = 1;
                        ACCTRH.UpdatedBy = CurrentUser.Username;
                        ACCTRH.UpdateDate = DateTime.Now;
                        try
                        {
                            connection.UpdateById<ACCTRHRow>(ACCTRH);
                            UpdateDetail(connection, Header);
                        }
                        catch (Exception exception)
                        {
                            transaction.Rollback();
                            AS.AppendException(exception, exception.Message);
                        }
                    }

                }
            }
        }

        public static void CashDetail(IDbConnection connection, ACCTRHRow ACCTRH)
        {
            if (SelectTRTY == TRTYType.Sales)
            {
                if (ACCTRH == null || ACCTRH.HeaderID == 0) return;
                var Result = connection.ExistsById<ACCTRDRow>(ACCTRH.HeaderID);
                transaction = connection.GetCurrentActualTransaction();
                int LNNO = 1;
                if (!Result)
                {
                    while (LNNO < 3)
                    {
                        if (LNNO == 1)
                        {
                            var ACCTRD = new ACCTRDRow();
                            ACCTRD.ID = ACCTRH.HeaderID;
                            ACCTRD.HeaderID = ACCTRH.HeaderID;
                            ACCTRD.TR_TY = ACCTRH.TR_TY;
                            ACCTRD.TR_NO = ACCTRH.TR_NO;
                            ACCTRD.StoreID = ACCTRH.StoreID;
                            ACCTRD.Store_NAME = ACCTRH.Store_NAME;
                            ACCTRD.TR_DT = ACCTRH.TR_DT;
                            ACCTRD.TR_DS = ACCTRH.TR_DS;
                            ACCTRD.LN_NO = LNNO;
                            ACCTRD.CashBoxID = ACCTRH.ACC_NO2;
                            ACCTRD.Cash_NAME = ACCTRH.Cash_NAME;
                            ACCTRD.ACC_NO = ACCTRH.ACC_NO;
                            ACCTRD.ACC_NAME = ACCTRH.ACC_NAME;
                            ACCTRD.ACC_NO2 = ACCTRH.ACC_NO2;
                            ACCTRD.ACC_NAME2 = ACCTRH.ACC_NAME2;
                            ACCTRD.ACC_NO3 = ACCTRH.ACC_NO3;
                            ACCTRD.ACC_NAME3 = ACCTRH.ACC_NAME3;
                            ACCTRD.TRTY_NAME = ACCTRH.TRTY_NAME;
                            ACCTRD.REP_CD = ACCTRH.REP_CD;
                            ACCTRD.REP_NAME = ACCTRH.REP_NAME;
                            ACCTRD.REP_CD2 = ACCTRH.REP_CD2;
                            ACCTRD.REP_NAME2 = ACCTRH.REP_NAME2;
                            ACCTRD.CST_CD = ACCTRH.CST_CD;
                            ACCTRD.CST_NAME = ACCTRH.CST_NAME;
                            ACCTRD.TR_DS_AR = ACCTRH.HDSCR_AR;
                            ACCTRD.TR_DS_EN = ACCTRH.HDSCR_EN;
                            ACCTRD.CurrencyID = ACCTRH.CurrencyID;
                            ACCTRD.Currency_NAME = ACCTRH.CurrencyID;
                            ACCTRD.RATE = ACCTRH.RATE;
                            ACCTRD.CUR_VL = ACCTRH.CUR_VL;
                            ACCTRD.EXPENSVL = ACCTRH.EXPENSE_VL;
                            ACCTRD.TotalValue = ACCTRH.TotalValue;
                            ACCTRD.NetTotal = ACCTRH.NetTotal;
                            ACCTRD.DB = 0;
                            ACCTRD.CR = ACCTRH.NetTotal;
                            ACCTRD.BAL = ACCTRH.NetTotal;
                            ACCTRD.CUR_DB_VL = 0;
                            ACCTRD.CUR_CR_VL = ACCTRH.CUR_VL; 
                            ACCTRD.ACC_CUR_BAL = ACCTRH.CUR_VL;
                            ACCTRD.Status = 1;
                            ACCTRD.EnteredBy = CurrentUser.Username;
                            ACCTRD.EntryDate = DateTime.Now;
                            try
                            {
                                connection.Insert<ACCTRDRow>(ACCTRD);
                            }
                            catch (Exception exception)
                            {
                                transaction.Rollback();
                                AS.AppendException(exception, exception.Message);
                            }
                        }
                        else if (LNNO == 2)
                        {
                            var ACCTRD = new ACCTRDRow();
                            ACCTRD.ID = ACCTRH.HeaderID;
                            ACCTRD.HeaderID = ACCTRH.HeaderID;
                            ACCTRD.TR_TY = ACCTRH.TR_TY;
                            ACCTRD.TR_NO = ACCTRH.TR_NO;
                            ACCTRD.StoreID = ACCTRH.StoreID;
                            ACCTRD.Store_NAME = ACCTRH.Store_NAME;
                            ACCTRD.TR_DT = ACCTRH.TR_DT;
                            ACCTRD.TR_DS = ACCTRH.TR_DS;
                            ACCTRD.LN_NO = LNNO;
                            ACCTRD.CashBoxID = ACCTRH.CashBoxID;
                            ACCTRD.Cash_NAME = ACCTRH.Cash_NAME;
                            ACCTRD.ACC_NO = ACCTRH.ACC_NO2;
                            ACCTRD.ACC_NAME = ACCTRH.ACC_NAME2;
                            ACCTRD.ACC_NO2 = ACCTRH.ACC_NO;
                            ACCTRD.ACC_NAME2 = ACCTRH.ACC_NAME;
                            ACCTRD.ACC_NO3 = ACCTRH.ACC_NO3;
                            ACCTRD.ACC_NAME3 = ACCTRH.ACC_NAME3;
                            ACCTRD.TRTY_NAME = ACCTRH.TRTY_NAME;
                            ACCTRD.REP_CD = ACCTRH.REP_CD;
                            ACCTRD.REP_NAME = ACCTRH.REP_NAME;
                            ACCTRD.REP_CD2 = ACCTRH.REP_CD2;
                            ACCTRD.REP_NAME2 = ACCTRH.REP_NAME2;
                            ACCTRD.CST_CD = ACCTRH.CST_CD;
                            ACCTRD.CST_NAME = ACCTRH.CST_NAME;
                            ACCTRD.TR_DS_AR = ACCTRH.HDSCR_AR;
                            ACCTRD.TR_DS_EN = ACCTRH.HDSCR_EN;
                            ACCTRD.CurrencyID = ACCTRH.CurrencyID;
                            ACCTRD.Currency_NAME = ACCTRH.CurrencyID;
                            ACCTRD.RATE = ACCTRH.RATE;
                            ACCTRD.CUR_VL = ACCTRH.CUR_VL;
                            ACCTRD.EXPENSVL = ACCTRH.EXPENSE_VL;
                            ACCTRD.TotalValue = ACCTRH.TotalValue;
                            ACCTRD.NetTotal = ACCTRH.NetTotal;
                            ACCTRD.DB = ACCTRH.NetTotal;
                            ACCTRD.CR = 0;
                            ACCTRD.BAL = ACCTRH.NetTotal;
                            ACCTRD.CUR_DB_VL = ACCTRH.CUR_VL;
                            ACCTRD.CUR_CR_VL = 0;
                            ACCTRD.ACC_CUR_BAL = ACCTRH.CUR_VL;
                            ACCTRD.Status = 1;
                            ACCTRD.EnteredBy = CurrentUser.Username;
                            ACCTRD.EntryDate = DateTime.Now;
                            try
                            {
                                connection.Insert<ACCTRDRow>(ACCTRD);
                            }
                            catch (Exception exception)
                            {
                                transaction.Rollback();
                                AS.AppendException(exception, exception.Message);
                            }
                        }
                        LNNO++;
                    }

                }
            }
        }
        public static void UpdateDetail(IDbConnection connection, ACCTRHRow ACCTRH)
        {
            if (SelectTRTY == TRTYType.Sales)
            {
                if (ACCTRH == null || ACCTRH.HeaderID == 0) return;
                var Result = connection.ExistsById<ACCTRDRow>(ACCTRH.HeaderID);
                transaction = connection.GetCurrentActualTransaction();
                int LNNO = 1;
                if (Result)
                {
                    while (LNNO > 2)
                    {
                        if (LNNO == 1)
                        {
                            var ACCTRD = connection.ById<ACCTRDRow>(ACCTRH.HeaderID);
                            if (ACCTRD == null || ACCTRD.HeaderID == 0) return;
                            ACCTRD.ID = ACCTRH.HeaderID;
                            ACCTRD.HeaderID = ACCTRH.HeaderID;
                            ACCTRD.TR_TY = ACCTRH.TR_TY;
                            ACCTRD.TR_NO = ACCTRH.TR_NO;
                            ACCTRD.StoreID = ACCTRH.StoreID;
                            ACCTRD.Store_NAME = ACCTRH.Store_NAME;
                            ACCTRD.TR_DT = ACCTRH.TR_DT;
                            ACCTRD.TR_DS = ACCTRH.TR_DS;
                            ACCTRD.LN_NO = LNNO;
                            ACCTRD.CashBoxID = ACCTRH.ACC_NO2;
                            ACCTRD.Cash_NAME = ACCTRH.Cash_NAME;
                            ACCTRD.ACC_NO = ACCTRH.ACC_NO;
                            ACCTRD.ACC_NAME = ACCTRH.ACC_NAME;
                            ACCTRD.ACC_NO2 = ACCTRH.ACC_NO2;
                            ACCTRD.ACC_NAME2 = ACCTRH.ACC_NAME2;
                            ACCTRD.ACC_NO3 = ACCTRH.ACC_NO3;
                            ACCTRD.ACC_NAME3 = ACCTRH.ACC_NAME3;
                            ACCTRD.TRTY_NAME = ACCTRH.TRTY_NAME;
                            ACCTRD.REP_CD = ACCTRH.REP_CD;
                            ACCTRD.REP_NAME = ACCTRH.REP_NAME;
                            ACCTRD.REP_CD2 = ACCTRH.REP_CD2;
                            ACCTRD.REP_NAME2 = ACCTRH.REP_NAME2;
                            ACCTRD.CST_CD = ACCTRH.CST_CD;
                            ACCTRD.CST_NAME = ACCTRH.CST_NAME;
                            ACCTRD.TR_DS_AR = ACCTRH.HDSCR_AR;
                            ACCTRD.TR_DS_EN = ACCTRH.HDSCR_EN;
                            ACCTRD.CurrencyID = ACCTRH.CurrencyID;
                            ACCTRD.Currency_NAME = ACCTRH.CurrencyID;
                            ACCTRD.RATE = ACCTRH.RATE;
                            ACCTRD.CUR_VL = ACCTRH.CUR_VL;
                            ACCTRD.EXPENSVL = ACCTRH.EXPENSE_VL;
                            ACCTRD.TotalValue = ACCTRH.TotalValue;
                            ACCTRD.NetTotal = ACCTRH.NetTotal;
                            ACCTRD.DB = 0;
                            ACCTRD.CR = ACCTRH.NetTotal;
                            ACCTRD.BAL = ACCTRH.NetTotal;
                            ACCTRD.CUR_DB_VL = 0;
                            ACCTRD.CUR_CR_VL = ACCTRH.CUR_VL;
                            ACCTRD.ACC_CUR_BAL = ACCTRH.CUR_VL;
                            ACCTRD.Status = 1;
                            ACCTRD.UpdatedBy = CurrentUser.Username;
                            ACCTRD.UpdateDate = DateTime.Now;
                            try
                            {
                                connection.UpdateById<ACCTRDRow>(ACCTRD);
                            }
                            catch (Exception exception)
                            {
                                transaction.Rollback();
                                AS.AppendException(exception, exception.Message);
                            }
                        }
                        else if (LNNO == 2)
                        {
                            var ACCTRD = connection.ById<ACCTRDRow>(ACCTRH.HeaderID);
                            if (ACCTRD == null || ACCTRD.HeaderID == 0) return;
                            ACCTRD.ID = ACCTRH.HeaderID;
                            ACCTRD.HeaderID = ACCTRH.HeaderID;
                            ACCTRD.TR_TY = ACCTRH.TR_TY;
                            ACCTRD.TR_NO = ACCTRH.TR_NO;
                            ACCTRD.StoreID = ACCTRH.StoreID;
                            ACCTRD.Store_NAME = ACCTRH.Store_NAME;
                            ACCTRD.TR_DT = ACCTRH.TR_DT;
                            ACCTRD.TR_DS = ACCTRH.TR_DS;
                            ACCTRD.LN_NO = LNNO;
                            ACCTRD.CashBoxID = ACCTRH.CashBoxID;
                            ACCTRD.Cash_NAME = ACCTRH.Cash_NAME;
                            ACCTRD.ACC_NO = ACCTRH.ACC_NO2;
                            ACCTRD.ACC_NAME = ACCTRH.ACC_NAME2;
                            ACCTRD.ACC_NO2 = ACCTRH.ACC_NO;
                            ACCTRD.ACC_NAME2 = ACCTRH.ACC_NAME;
                            ACCTRD.ACC_NO3 = ACCTRH.ACC_NO3;
                            ACCTRD.ACC_NAME3 = ACCTRH.ACC_NAME3;
                            ACCTRD.TRTY_NAME = ACCTRH.TRTY_NAME;
                            ACCTRD.REP_CD = ACCTRH.REP_CD;
                            ACCTRD.REP_NAME = ACCTRH.REP_NAME;
                            ACCTRD.REP_CD2 = ACCTRH.REP_CD2;
                            ACCTRD.REP_NAME2 = ACCTRH.REP_NAME2;
                            ACCTRD.CST_CD = ACCTRH.CST_CD;
                            ACCTRD.CST_NAME = ACCTRH.CST_NAME;
                            ACCTRD.TR_DS_AR = ACCTRH.HDSCR_AR;
                            ACCTRD.TR_DS_EN = ACCTRH.HDSCR_EN;
                            ACCTRD.CurrencyID = ACCTRH.CurrencyID;
                            ACCTRD.Currency_NAME = ACCTRH.CurrencyID;
                            ACCTRD.RATE = ACCTRH.RATE;
                            ACCTRD.CUR_VL = ACCTRH.CUR_VL;
                            ACCTRD.EXPENSVL = ACCTRH.EXPENSE_VL;
                            ACCTRD.TotalValue = ACCTRH.TotalValue;
                            ACCTRD.NetTotal = ACCTRH.NetTotal;
                            ACCTRD.DB = ACCTRH.NetTotal;
                            ACCTRD.CR = 0;
                            ACCTRD.BAL = ACCTRH.NetTotal;
                            ACCTRD.CUR_DB_VL = ACCTRH.CUR_VL;
                            ACCTRD.CUR_CR_VL = 0;
                            ACCTRD.ACC_CUR_BAL = ACCTRH.CUR_VL;
                            ACCTRD.Status = 1;
                            ACCTRD.UpdatedBy = CurrentUser.Username;
                            ACCTRD.UpdateDate = DateTime.Now;
                            try
                            {
                                connection.UpdateById<ACCTRDRow>(ACCTRD);
                            }
                            catch (Exception exception)
                            {
                                transaction.Rollback();
                                AS.AppendException(exception, exception.Message);
                            }
                        }
                        LNNO++;
                    }
                }
            }
        }
        // End Receipt Payed 
        public static bool IsValidate(SaveRequest<MyRow> request)
        {
            bool IsValid = false;
            var ASTRD = request.Entity.DetailList;

            if (ASTRD == null || ASTRD.Count == 0)
                IsValid = true;

            return IsValid;
        }
        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context) : base(context)
            {
            }

            protected override void ValidateRequest()
            {
                base.ValidateRequest();
                if (IsValidate(Request))
                {
                    transaction.Rollback();
                    throw new ValidationError("user DetailList is Null");
                }
            }

            protected override void AfterSave()
            {

                listASTRD.ForEach(d =>
                {
                    d.ID = Request.Entity.HeaderID;
                    d.DetailID = Request.Entity.HeaderID;
                    d.HeaderID = Request.Entity.HeaderID;
                    d.TR_NO = Request.Entity.TR_NO;
                    d.StoreID = Request.Entity.StoreID;
                    d.PK = (!AS.IsNullValue(d.PK)) ? d.PK : 1;
                    d.PKPRC = d.Price / d.PK;
                    d.RATE = Request.Entity.RATE;
                    d.TR_DT = Request.Entity.TR_DT != null ? Request.Entity.TR_DT : DateTime.Now;
                });
                try
                {
                    Request.Entity.DetailList = listASTRD;
                    var ASTRH = Request.Entity;
                    ADDACCTRH(Connection, ASTRH);

                }
                catch (Exception exception)
                {
                    AS.AppendException(exception, exception.Message);
                    transaction.Rollback();
                }
                finally
                {
                    Connection.Execute(StoredName.ADJITMLOCBAL, commandTimeout: 30, commandType: CommandType.StoredProcedure);
                    Connection.Execute(StoredName.GetItemBAL, commandTimeout: 30, commandType: CommandType.StoredProcedure);
                    Connection.Execute(StoredName.ADJCST, commandTimeout: 30, commandType: CommandType.StoredProcedure);
                }
                base.AfterSave();
            }

        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            public MyDeleteHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            public MyRetrieveHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            public MyListHandler(IRequestContext context)
                : base(context)
            {
            }
        }
    }
}