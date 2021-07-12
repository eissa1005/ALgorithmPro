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
using MyRow = ALgorithmPro.ALgorithm.Entities.ReturnASTRHRow;

namespace ALgorithmPro.ALgorithm.Repositories
{
    public class ReturnASTRHRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;
        public static TRTYType SelectTRTY { set; get; }
        public static List<ReturnASTRDRow> listASTRD { set; get; }
        public ReturnASTRHRepository(IRequestContext context) : base(context)
        {
            SelectTRTY = TRTYType.ReturnSales;
        }
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var header = request.Entity;
            listASTRD = request.Entity.DetailList;
            SelectTRTY = (TRTYType)request.Entity.TR_TY;
            try
            {
                var RATE = AS.GetValue(uow, FunctionName.GetCurrencyRate, "'" + request.Entity.CurrencyID + "'");
                request.Entity.RATE = AS.ToDouble(RATE);
                request.Entity.TRTY_NAME = AS.GetName(uow, FunctionName.GetTRTYNAME, request.Entity.TR_TY.ToString());
                request.Entity.Store_NAME = AS.GetName(uow, FunctionName.GetStoreName, "'" + request.Entity.StoreID + "'");
                request.Entity.Currency_NAME = AS.GetName(uow, FunctionName.GetCurrencyName, "'" + request.Entity.CurrencyID + "'");
                request.Entity.CST_NAME = AS.GetName(uow, FunctionName.GetCostName, "'" + request.Entity.CST_CD + "'");
                request.Entity.HDSCR_AR = " فاتورة " + request.Entity.TRTY_NAME + " رقم " + request.Entity.TR_NO;
                request.Entity.HDSCR_EN = request.Entity.HDSCR_AR;


                int LNNO = 1;
                if (SelectTRTY == TRTYType.ReturnSales)
                {
                    listASTRD.ForEach(s =>
                    {
                        s.DetailID = request.Entity.HeaderID;
                        s.TR_NO = request.Entity.TR_NO;
                        s.TR_TY = (int)TRTYType.ReturnSales;
                        s.TRTY_NAME = request.Entity.TRTY_NAME;
                        s.TR_DS = (int)TRDSTYPE.ReturnSales;
                        s.GRP = (int)GRPTYPE.ReturnSales;
                        s.StoreID = request.Entity.StoreID;
                        s.Store_NAME = request.Entity.Store_NAME;
                        s.ItemBarCode = AS.IsNullValue(s.ItemBarCode) ? s.Item_CD : s.ItemBarCode;
                        s.LN_NO = LNNO;
                        s.ACC_NO = request.Entity.ACC_NO;
                        s.ACC_NAME = request.Entity.ACC_NAME;
                        s.ACC_NO2 = request.Entity.CashBoxID;
                        s.ACC_NAME2 = request.Entity.Cash_NAME;
                        s.CashBoxID = request.Entity.CashBoxID;
                        s.Cash_NAME = request.Entity.Cash_NAME;
                        s.REP_CD = request.Entity.REP_CD;
                        s.REP_NAME = request.Entity.REP_NAME;
                        s.REP_CD2 = request.Entity.REP_CD;
                        s.REP_NAME2 = request.Entity.REP_NAME2;
                        s.CurrencyID = request.Entity.CurrencyID;
                        s.Currency_Name = request.Entity.Currency_NAME;
                        s.RATE = request.Entity.RATE;
                        s.CUR_VL = s.NET * s.RATE;
                        s.DISC = s.DISC1 + s.DISC2 + s.DISC3 + s.DISC3;
                        s.STAX_VL = s.TAX1 + s.TAX2 + s.TAX3 + s.TAX3;
                        s.disc_cur_val = s.DISC * s.RATE;
                        s.tax_cur_val = s.STAX_VL * s.RATE;
                        s.PTR_NO = request.Entity.PTR_NO;
                        s.PTR_TY = request.Entity.PTR_TY;
                        s.PStoreID = request.Entity.PStoreID;
                        s.PKPRC = s.Price / s.PK;
                        s.PKName = AS.GetName(uow, FunctionName.GetPKNAME, s.PKID);
                        s.TR_DS_AR = " فاتورة " + s.TRTY_NAME + " رقم " + s.TR_NO;
                        s.TR_DS_EN = " فاتورة " + s.TRTY_NAME + " رقم " + s.TR_NO;
                        LNNO++;
                    });

                    request.Entity.DetailList = listASTRD;
                    header.TR_DS = (int)TRDSTYPE.ReturnSales;
                    header.ACC_NO = header.ACC_NO;
                    header.ACC_NAME = header.ACC_NAME;
                    header.ACC_NO2 = header.CashBoxID;
                    header.ACC_NAME2 = header.Cash_NAME;
                    header.ReferenceNo = header.ReferenceNo == 0 ? header.TR_NO : header.ReferenceNo;
                    header.Paid = header.Paid == 0 ? header.NetTotal : header.Paid;
                    header.CUR_VL = header.NetTotal * header.RATE;
                    header.Balance = 0;
                }

                return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create);

            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return new SaveResponse();
            }
        }
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var header = request.Entity;
            listASTRD = request.Entity.DetailList;
            SelectTRTY = (TRTYType)request.Entity.TR_TY;
            try
            {
                var RATE = AS.GetValue(uow, FunctionName.GetCurrencyRate, "'" + request.Entity.CurrencyID + "'");
                request.Entity.RATE = AS.ToDouble(RATE);
                request.Entity.TRTY_NAME = AS.GetName(uow, FunctionName.GetTRTYNAME, request.Entity.TR_TY.ToString());
                request.Entity.Store_NAME = AS.GetName(uow, FunctionName.GetStoreName, "'" + request.Entity.StoreID + "'");
                request.Entity.Currency_NAME = AS.GetName(uow, FunctionName.GetCurrencyName, "'" + request.Entity.CurrencyID + "'");
                request.Entity.CST_NAME = AS.GetName(uow, FunctionName.GetCostName, "'" + request.Entity.CST_CD + "'");
                request.Entity.HDSCR_AR = " فاتورة " + request.Entity.TRTY_NAME + " رقم " + request.Entity.TR_NO;
                request.Entity.HDSCR_EN = request.Entity.HDSCR_AR;


                int LNNO = 1;
                if (SelectTRTY == TRTYType.ReturnSales)
                {
                    listASTRD.ForEach(s =>
                    {
                        s.DetailID = request.Entity.HeaderID;
                        s.TR_NO = request.Entity.TR_NO;
                        s.TR_TY = (int)TRTYType.ReturnSales;
                        s.TRTY_NAME = request.Entity.TRTY_NAME;
                        s.TR_DS = (int)TRDSTYPE.ReturnSales;
                        s.GRP = (int)GRPTYPE.ReturnSales;
                        s.StoreID = request.Entity.StoreID;
                        s.Store_NAME = request.Entity.Store_NAME;
                        s.ItemBarCode = AS.IsNullValue(s.ItemBarCode) ? s.Item_CD : s.ItemBarCode;
                        s.LN_NO = LNNO;
                        s.ACC_NO = request.Entity.ACC_NO;
                        s.ACC_NAME = request.Entity.ACC_NAME;
                        s.ACC_NO2 = request.Entity.CashBoxID;
                        s.ACC_NAME2 = request.Entity.Cash_NAME;
                        s.CashBoxID = request.Entity.CashBoxID;
                        s.Cash_NAME = request.Entity.Cash_NAME;
                        s.REP_CD = request.Entity.REP_CD;
                        s.REP_NAME = request.Entity.REP_NAME;
                        s.REP_CD2 = request.Entity.REP_CD;
                        s.REP_NAME2 = request.Entity.REP_NAME2;
                        s.CurrencyID = request.Entity.CurrencyID;
                        s.Currency_Name = request.Entity.Currency_NAME;
                        s.RATE = request.Entity.RATE;
                        s.CUR_VL = s.NET * s.RATE;
                        s.DISC = s.DISC1 + s.DISC2 + s.DISC3 + s.DISC3;
                        s.STAX_VL = s.TAX1 + s.TAX2 + s.TAX3 + s.TAX3;
                        s.disc_cur_val = s.DISC * s.RATE;
                        s.tax_cur_val = s.STAX_VL * s.RATE;
                        s.PTR_NO = request.Entity.PTR_NO;
                        s.PTR_TY = request.Entity.PTR_TY;
                        s.PStoreID = request.Entity.PStoreID;
                        s.PKPRC = s.Price / s.PK;
                        s.PKName = AS.GetName(uow, FunctionName.GetPKNAME, s.PKID);
                        s.TR_DS_AR = " فاتورة " + s.TRTY_NAME + " رقم " + s.TR_NO;
                        s.TR_DS_EN = " فاتورة " + s.TRTY_NAME + " رقم " + s.TR_NO;
                        LNNO++;
                    });

                    request.Entity.DetailList = listASTRD;
                    header.TR_DS = (int)TRDSTYPE.ReturnSales;
                    header.ACC_NO = header.ACC_NO;
                    header.ACC_NAME = header.ACC_NAME;
                    header.ACC_NO2 = header.CashBoxID;
                    header.ACC_NAME2 = header.Cash_NAME;
                    header.ReferenceNo = header.ReferenceNo == 0 ? header.TR_NO : header.ReferenceNo;
                    header.Paid = header.Paid == 0 ? header.NetTotal : header.Paid;
                    header.CUR_VL = header.NetTotal * header.RATE;
                    header.Balance = 0;
                }

                return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);

            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return new SaveResponse();
            }
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            try
            {
                if (SelectTRTY == TRTYType.ReturnSales)
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
                if (SelectTRTY == TRTYType.ReturnSales)
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
                if (SelectTRTY == TRTYType.ReturnSales)
                {
                    lst.Entities = connection.List<MyRow>(s => s.SelectTableFields()).Where<MyRow>(x => x.TR_TY == (int)TRTYType.ReturnSales).ToList();
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
        }
        public static void ADDACCTRH(IDbConnection connection, ReturnASTRHRow ASTRH)
        {
            if (SelectTRTY == TRTYType.ReturnSales)
            {
                if (ASTRH == null || ASTRH.HeaderID == 0) return;
                var row = connection.List<ACCTRHRow>().FirstOrDefault(x => x.ASTRHID == ASTRH.HeaderID);
                if (row == null || row.HeaderID == 0)
                {
                    var ACCTRH = new ACCTRHRow();
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
                    ACCTRH.BALDB = 0;
                    ACCTRH.BALCR = ASTRH.NetTotal; 
                    ACCTRH.BAL = ASTRH.NetTotal;
                    ACCTRH.Status = 1;
                    ACCTRH.EnteredBy = CurrentUser.Username;
                    ACCTRH.EntryDate = DateTime.Now;
                    try
                    {
                        connection.Insert<ACCTRHRow>(ACCTRH);
                        var Header = connection.List<ACCTRHRow>().FirstOrDefault(x => x.ASTRHID == ASTRH.HeaderID);
                        ADDACCTRD(connection, Header);
                    }
                    catch (Exception exception)
                    {
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
                    ACCTRH.BALDB = 0;
                    ACCTRH.BALCR = ASTRH.NetTotal;
                    ACCTRH.BAL = ASTRH.NetTotal;
                    ACCTRH.Status = 1;
                    ACCTRH.UpdatedBy = CurrentUser.Username;
                    ACCTRH.UpdateDate = DateTime.Now;
                    try
                    {
                        connection.UpdateById<ACCTRHRow>(ACCTRH, ExpectedRows.One);
                        var Header = connection.ById<ACCTRHRow>(ACCTRH.HeaderID);
                        ADDACCTRD(connection, Header);
                    }
                    catch (Exception exception)
                    {
                        AS.AppendException(exception, exception.Message);
                    }

                }
            }
        }
        public static void ADDACCTRD(IDbConnection connection, ACCTRHRow ACCTRH)
        {
            if (SelectTRTY == TRTYType.ReturnSales)
            {
                if (ACCTRH == null || ACCTRH.HeaderID == 0) return;
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
                    ACCTRD.DB = 0;
                    ACCTRD.CR = ACCTRH.NetTotal;
                    ACCTRD.BAL = ACCTRH.NetTotal;
                    ACCTRD.Status = 1;
                    ACCTRD.EnteredBy = CurrentUser.Username;
                    ACCTRD.EntryDate = DateTime.Now;
                    try
                    {
                        connection.Insert<ACCTRDRow>(ACCTRD);
                    }
                    catch (Exception exception)
                    {
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
                    ACCTRD.DB = 0;
                    ACCTRD.CR = ACCTRH.NetTotal;
                    ACCTRD.BAL = ACCTRH.NetTotal;
                    ACCTRD.Status = 1;
                    ACCTRD.UpdatedBy = CurrentUser.Username;
                    ACCTRD.UpdateDate = DateTime.Now;
                    try
                    {
                        connection.UpdateById<ACCTRDRow>(ACCTRD);
                    }
                    catch (Exception exception)
                    {
                        AS.AppendException(exception, exception.Message);

                    }
                }
            }
        }
        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context) : base(context)
            {
            }

            protected override void AfterSave()
            {
                listASTRD.ForEach(d =>
                {
                    d.DetailID = Request.Entity.HeaderID;
                    d.HeaderID = Request.Entity.HeaderID;
                    d.TR_NO = Request.Entity.TR_NO;
                    d.StoreID = Request.Entity.StoreID;
                    d.PKPRC = d.Price / d.PK;
                });
                try
                {
                    Request.Entity.DetailList = listASTRD;
                    var ASTRH = Request.Entity;
                    ADDACCTRH(this.Connection, ASTRH);
                    base.AfterSave();
                }
                catch (Exception exception)
                {
                    AS.AppendException(exception, exception.Message);
                }
                finally
                {
                    Connection.Execute(StoredName.ADJITMLOCBAL, commandTimeout: 30, commandType: CommandType.StoredProcedure);
                    Connection.Execute(StoredName.GetItemBAL, commandTimeout: 30, commandType: CommandType.StoredProcedure);
                    Connection.Execute(StoredName.ADJCST, commandTimeout: 30, commandType: CommandType.StoredProcedure);
                }

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