﻿using ALgorithmPro.ALgorithm.Entities;
using ALgorithmPro.Model;
using ALgorithmPro.Web.Modules.Common;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using static ALgorithmPro.Contstants;
using MyRow = ALgorithmPro.ALgorithm.Entities.ExpensesRow;

namespace ALgorithmPro.ALgorithm.Repositories
{
    public class ExpensesRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;
        public static IDbTransaction transaction;
        public static TRTYType SelectTRTY { set; get; }
        public static List<ACCTRDRow> listASTRD { set; get; }

        public ExpensesRepository(IRequestContext context) : base(context)
        {
            SelectTRTY = TRTYType.Expenses;
        }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var header = request.Entity;
            transaction = uow.Connection.GetCurrentActualTransaction();
            try
            {

                header.TR_TY = (int)TRTYType.Expenses;
                header.TRTY_NAME = "يومية الخزينة - مصـروف";
                header.TR_DS = (int)TRDSTYPE.Expenses;
                header.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now;
                header.Store_NAME = AS.GetName(uow, FunctionName.GetStoreName, "'" + header.StoreID + "'");
                header.ACC_NO = request.Entity.ACC_NO;
                header.ACC_NAME = AS.GetName(uow, FunctionName.GetAccName, "'" + header.ACC_NO + "'", 2);
                header.ACC_NO2 = request.Entity.CashBoxID;
                header.ACC_NAME2 = AS.GetName(uow, FunctionName.GetAccName, "'" + header.CashBoxID + "'", 2);
                header.ACC_NO3 = request.Entity.ACC_NO3;
                header.ACC_NAME3 = AS.GetName(uow, FunctionName.GetAccName, "'" + header.ACC_NO3 + "'", 1);
                header.ExpensesID = request.Entity.ACC_NO;
                header.ExpensesName = AS.GetName(uow, FunctionName.GetAccName, "'" + header.ACC_NO + "'", 2);
                header.CashBoxID = request.Entity.CashBoxID;
                header.HDSCR_AR =  header.ACC_NAME;
                header.HDSCR_AR =  header.ACC_NAME;
                header.Cash_NAME = AS.GetName(uow, FunctionName.GetAccName, "'" + header.CashBoxID + "'", 2);
                var RATE = AS.GetValue(uow, FunctionName.GetCurrencyRate, "'" + header.CurrencyID + "'");
                header.Currency_NAME = AS.GetName(uow, FunctionName.GetCurrencyName, "'" + header.CurrencyID + "'");
                header.RATE = AS.ToDouble(RATE);
                header.CST_NAME = AS.GetName(uow, FunctionName.GetCostName, "'" + header.CST_CD + "'");
                header.NetTotal = header.TotalValue;
                header.BALDB = header.TotalValue;
                header.BALCR =0;
                header.BAL = header.TotalValue;
                header.CUR_VL = header.TotalValue;
                header.EnteredBy = CurrentUser.Username;
                header.EntryDate = DateTime.Now;
                request.Entity = header;
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
            transaction = uow.Connection.GetCurrentActualTransaction();
            try
            {

                header.TR_TY = (int)TRTYType.Expenses;
                header.TRTY_NAME = "يومية الخزينة - مصـروف";
                header.TR_DS = (int)TRDSTYPE.Expenses;
                header.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now;
                header.Store_NAME = AS.GetName(uow, FunctionName.GetStoreName, "'" + header.StoreID + "'");
                header.ACC_NO = request.Entity.ACC_NO;
                header.ACC_NAME = AS.GetName(uow, FunctionName.GetAccName, "'" + header.ACC_NO + "'", 2);
                header.ACC_NO2 = request.Entity.CashBoxID;
                header.ACC_NAME2 = AS.GetName(uow, FunctionName.GetAccName, "'" + header.CashBoxID + "'", 2);
                header.ACC_NO3 = request.Entity.ACC_NO3;
                header.ACC_NAME3 = AS.GetName(uow, FunctionName.GetAccName, "'" + header.ACC_NO3 + "'", 1);
                header.ExpensesID = request.Entity.ACC_NO;
                header.ExpensesName = AS.GetName(uow, FunctionName.GetAccName, "'" + header.ACC_NO + "'", 2);
                header.CashBoxID = request.Entity.CashBoxID;
                header.HDSCR_AR = header.ACC_NAME;
                header.HDSCR_AR = header.ACC_NAME;
                header.Cash_NAME = AS.GetName(uow, FunctionName.GetAccName, "'" + header.CashBoxID + "'", 2);
                var RATE = AS.GetValue(uow, FunctionName.GetCurrencyRate, "'" + header.CurrencyID + "'");
                header.Currency_NAME = AS.GetName(uow, FunctionName.GetCurrencyName, "'" + header.CurrencyID + "'");
                header.RATE = AS.ToDouble(RATE);
                header.CST_NAME = AS.GetName(uow, FunctionName.GetCostName, "'" + header.CST_CD + "'");
                header.NetTotal = header.TotalValue;
                header.BALDB = header.TotalValue;
                header.BALCR = 0;
                header.BAL = header.TotalValue;
                header.CUR_VL = header.TotalValue;
                header.UpdatedBy = CurrentUser.Username;
                header.UpdateDate = DateTime.Now;
                request.Entity = header;
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
            if (SelectTRTY == TRTYType.Expenses)
            {
                try
                {
                    return new MyDeleteHandler(Context).Process(uow, request);
                }
                catch (Exception exception)
                {

                    AS.AppendException(exception, exception.Message);
                    return new DeleteResponse();
                }
            }
            return new DeleteResponse();
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            if (SelectTRTY == TRTYType.Expenses)
            {
                try
                {
                    return new MyRetrieveHandler(Context).Process(connection, request);

                }
                catch (Exception exception)
                {
                    AS.AppendException(exception, exception.Message);
                    return new RetrieveResponse<MyRow>();
                }
            }
            return new RetrieveResponse<MyRow>();
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            var lst = new ListResponse<MyRow>();
            try
            {
                if (SelectTRTY == TRTYType.Expenses)
                {
                    lst.Entities = connection.List<MyRow>(s => s.SelectTableFields()).Where<MyRow>(x => x.TR_TY == (int)TRTYType.Expenses).ToList();
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

        public static void CashDetail(IDbConnection connection, ExpensesRow ACCTRH)
        {
            if (SelectTRTY == TRTYType.Expenses)
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
                            // Cash
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
                            ACCTRD.ACC_NO = ACCTRH.ACC_NO;
                            ACCTRD.ACC_NAME = ACCTRH.ACC_NAME;
                            ACCTRD.ACC_NO2 = ACCTRH.ACC_NO2;
                            ACCTRD.ACC_NAME2 = ACCTRH.ACC_NAME2;
                            ACCTRD.ACC_NO3 = ACCTRH.ACC_NO3;
                            ACCTRD.ACC_NAME3 = ACCTRH.ACC_NAME3;
                            ACCTRD.TRTY_NAME = ACCTRH.TRTY_NAME;
                            ACCTRD.ExpensesID = ACCTRH.ExpensesID;
                            ACCTRD.ExpensesName = ACCTRH.ExpensesName;
                            ACCTRD.REP_CD = ACCTRH.REP_CD;
                            ACCTRD.REP_NAME = ACCTRH.REP_NAME;
                            ACCTRD.REP_CD2 = ACCTRH.REP_CD2;
                            ACCTRD.REP_NAME2 = ACCTRH.REP_NAME2;
                            ACCTRD.CST_CD = ACCTRH.CST_CD;
                            ACCTRD.CST_NAME = ACCTRH.CST_NAME;
                            ACCTRD.TR_DS_AR = ACCTRH.HDSCR_AR;
                            ACCTRD.TR_DS_EN = ACCTRH.HDSCR_EN;
                            ACCTRD.CurrencyID = ACCTRH.CurrencyID;
                            ACCTRD.Currency_NAME = ACCTRH.Currency_NAME;
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
                        else if (LNNO == 2)
                        {
                            // Cash 
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
                            ACCTRD.ExpensesID = ACCTRH.ExpensesID;
                            ACCTRD.ExpensesName = ACCTRH.ExpensesName;
                            ACCTRD.REP_CD = ACCTRH.REP_CD;
                            ACCTRD.REP_NAME = ACCTRH.REP_NAME;
                            ACCTRD.REP_CD2 = ACCTRH.REP_CD2;
                            ACCTRD.REP_NAME2 = ACCTRH.REP_NAME2;
                            ACCTRD.CST_CD = ACCTRH.CST_CD;
                            ACCTRD.CST_NAME = ACCTRH.CST_NAME;
                            ACCTRD.TR_DS_AR = ACCTRH.HDSCR_AR;
                            ACCTRD.TR_DS_EN = ACCTRH.HDSCR_EN;
                            ACCTRD.CurrencyID = ACCTRH.CurrencyID;
                            ACCTRD.Currency_NAME = ACCTRH.Currency_NAME;
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
                        LNNO++;
                    }

                }
            }
        }
        public static void UpdateCashDetail(IDbConnection connection, ExpensesRow ACCTRH)
        {
            if (SelectTRTY == TRTYType.Expenses)
            {

                if (ACCTRH == null || ACCTRH.HeaderID == 0) return;
                var Result = connection.ExistsById<ACCTRDRow>(ACCTRH.HeaderID);
                transaction = connection.GetCurrentActualTransaction();
                int LNNO = 1;
                try
                {
                    var SQL = "DELETE FROM ASACCTRD WHERE HeaderID =" + ACCTRH.HeaderID;
                    connection.Execute(SQL);
                    if (Result)
                    {
                        while (LNNO < 3)
                        {
                            if (LNNO == 1)
                            {
                                var ACCTRD = new ACCTRDRow();
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
                                ACCTRD.ACC_NO = ACCTRH.ACC_NO;
                                ACCTRD.ACC_NAME = ACCTRH.ACC_NAME;
                                ACCTRD.ACC_NO2 = ACCTRH.ACC_NO2;
                                ACCTRD.ACC_NAME2 = ACCTRH.ACC_NAME2;
                                ACCTRD.ACC_NO3 = ACCTRH.ACC_NO3;
                                ACCTRD.ACC_NAME3 = ACCTRH.ACC_NAME3;
                                ACCTRD.ExpensesID = ACCTRH.ExpensesID;
                                ACCTRD.ExpensesName = ACCTRH.ExpensesName;
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
                                ACCTRD.Currency_NAME = ACCTRH.Currency_NAME;
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
                                connection.Insert<ACCTRDRow>(ACCTRD);
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
                                ACCTRD.ExpensesID = ACCTRH.ExpensesID;
                                ACCTRD.ExpensesName = ACCTRH.ExpensesName;
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
                                ACCTRD.Currency_NAME = ACCTRH.Currency_NAME;
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
                                connection.Insert<ACCTRDRow>(ACCTRD);
                            }
                            LNNO++;
                        }
                    }
                }
                catch (Exception exception)
                {
                    transaction.Rollback();
                    AS.AppendException(exception, exception.Message);
                }
            }
        }
        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void AfterSave()
            {
                base.AfterSave();
                try
                {
                    var header = Request.Entity;
                    var Result = this.Connection.ExistsById<ACCTRDRow>(header.HeaderID);
                    if (!Result)
                    {
                        CashDetail(this.Connection, header);
                    }
                    else
                    {
                        UpdateCashDetail(this.Connection, header);
                    }
                }
                catch (Exception exception)
                {
                    transaction.Rollback();
                    AS.AppendException(exception, exception.Message);
                }

            }
            public MySaveHandler(IRequestContext context) : base(context)
            {

            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            public MyDeleteHandler(IRequestContext context) : base(context)
            {

            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            public MyRetrieveHandler(IRequestContext context) : base(context)
            {

            }
        }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            public MyListHandler(IRequestContext context) : base(context)
            {

            }
        }
    }
}