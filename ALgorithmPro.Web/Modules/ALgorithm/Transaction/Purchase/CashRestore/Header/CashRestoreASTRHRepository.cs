using System;
using ALgorithmPro.ALgorithm.Entities;
using ALgorithmPro.Common;
using ALgorithmPro.Web.Modules.Common;
using Serenity.Data;
using Serenity.Services;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using MyRow = ALgorithmPro.ALgorithm.Entities.CashRestoreASTRHRow;
using static ALgorithmPro.Contstants;

namespace ALgorithmPro.ALgorithm.Repositories
{
    public class CashRestoreASTRHRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;
        public static TRTYType SelectTRTY { set; get; }
        public static List<CashRestoreASTRDRow> listASTRD { set; get; }
        public CashRestoreASTRHRepository(IRequestContext context) : base(context)
        {
            SelectTRTY = TRTYType.CashRestore;
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
                if (SelectTRTY == TRTYType.CashRestore)
                {
                    listASTRD.ForEach(s =>
                    {
                        s.DetailID = request.Entity.HeaderID;
                        s.TR_NO = request.Entity.TR_NO;
                        s.TR_TY = (int)TRTYType.CashRestore;
                        s.TRTY_NAME = request.Entity.TRTY_NAME;
                        s.TR_DS = (int)TRDSTYPE.CashRestore;
                        s.GRP = (int)GRPTYPE.CashRestore;
                        s.StoreID = request.Entity.StoreID;
                        s.Store_NAME = request.Entity.Store_NAME;
                        s.ItemBarCode = AS.IsNullValue(s.ItemBarCode) ? s.Item_CD : s.ItemBarCode;
                        s.LN_NO = LNNO;
                        s.ACC_NO = request.Entity.CashBoxID;
                        s.ACC_NAME = request.Entity.Cash_NAME;
                        s.ACC_NO2 = request.Entity.ACC_NO;
                        s.ACC_NAME2 = request.Entity.ACC_NAME;
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
                    header.TR_DS = (int)TRDSTYPE.CashRestore;
                    header.ACC_NO2 = header.ACC_NO;
                    header.ACC_NAME2 = header.ACC_NAME;
                    header.ACC_NO = header.CashBoxID;
                    header.ACC_NAME = header.Cash_NAME;
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
                if (SelectTRTY == TRTYType.CashRestore)
                {
                    listASTRD.ForEach(s =>
                    {
                        s.DetailID = request.Entity.HeaderID;
                        s.TR_NO = request.Entity.TR_NO;
                        s.TR_TY = (int)TRTYType.CashRestore;
                        s.TRTY_NAME = request.Entity.TRTY_NAME;
                        s.TR_DS = (int)TRDSTYPE.CashRestore;
                        s.GRP = (int)GRPTYPE.CashRestore;
                        s.StoreID = request.Entity.StoreID;
                        s.Store_NAME = request.Entity.Store_NAME;
                        s.ItemBarCode = AS.IsNullValue(s.ItemBarCode) ? s.Item_CD : s.ItemBarCode;
                        s.LN_NO = LNNO;
                        s.ACC_NO = request.Entity.CashBoxID;
                        s.ACC_NAME = request.Entity.Cash_NAME;
                        s.ACC_NO2 = request.Entity.ACC_NO;
                        s.ACC_NAME2 = request.Entity.ACC_NAME;
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
                    header.TR_DS = (int)TRDSTYPE.CashRestore;
                    header.ACC_NO2 = header.ACC_NO;
                    header.ACC_NAME2 = header.ACC_NAME;
                    header.ACC_NO = header.CashBoxID;
                    header.ACC_NAME = header.Cash_NAME;
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
                if (SelectTRTY == TRTYType.CashRestore)
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
                if (SelectTRTY == TRTYType.CashRestore)
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
                if (SelectTRTY == TRTYType.CashRestore)
                {
                    lst.Entities = connection.List<MyRow>(s => s.SelectTableFields()).Where<MyRow>(x => x.TR_TY == (int)TRTYType.CashRestore).ToList();
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