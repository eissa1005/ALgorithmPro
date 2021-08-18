using System;
using System.Data;
using System.Linq;
using Serenity.Data;
using ALgorithmPro.ALgorithm.Entities;
using ALgorithmPro.Web.Modules.Common;
using Serenity.Services;
using System.Collections.Generic;
using MyRow = ALgorithmPro.ALgorithm.Entities.TransferInRow;
using static ALgorithmPro.Contstants;
using Serenity;

namespace ALgorithmPro.ALgorithm.Repositories
{
    public class TransferInRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;
        public static TRTYType SelectTRTY { set; get; }
        public static IDbTransaction transaction;
        public static List<TransferInASTRDRow> listASTRD { set; get; }
        public TransferInRepository(IRequestContext context) : base(context)
        {
            SelectTRTY = TRTYType.TransferIN;
        }
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var header = request.Entity;
            listASTRD = header.DetailList;
            SelectTRTY = (TRTYType)header.TR_TY;
            transaction = uow.Connection.GetCurrentActualTransaction();
            try
            {
                var RATE = AS.GetValue(uow, FunctionName.GetCurrencyRate, "'" + header.CurrencyID + "'");
                header.RATE = AS.ToDouble(RATE);
                header.TRTY_NAME = AS.GetName(uow, FunctionName.GetTRTYNAME, header.TR_TY.ToString());
                header.Store_NAME = AS.GetName(uow, FunctionName.GetStoreName, "'" + header.StoreID + "'");
                header.Currency_NAME = AS.GetName(uow, FunctionName.GetCurrencyName, "'" + header.CurrencyID + "'");
                header.CST_NAME = AS.GetName(uow, FunctionName.GetCostName, "'" + header.CST_CD + "'");
                header.HDSCR_AR = header.TRTY_NAME + " رقم " + header.TR_NO;
                header.HDSCR_EN = header.HDSCR_AR;
                header.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now.Date;

                int LNNO = 1;
                if (SelectTRTY == TRTYType.TransferIN)
                {
                    listASTRD.ForEach(s =>
                    {
                        s.DetailID = header.HeaderID;
                        s.TR_NO = header.TR_NO;
                        s.TR_TY = (int)TRTYType.TransferIN;
                        s.TRTY_NAME = header.TRTY_NAME;
                        s.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now;
                        s.TR_DS = (int)TRDSTYPE.TransferIN;
                        s.GRP = (int)GRPTYPE.TransferIN;
                        s.StoreID = header.StoreID;
                        s.Store_NAME = header.Store_NAME;
                        s.ItemBarCode = AS.IsNullValue(s.ItemBarCode) ? s.Item_CD : s.ItemBarCode;
                        s.LN_NO = LNNO;
                        s.CurrencyID = header.CurrencyID;
                        s.Currency_Name = header.Currency_NAME;
                        s.RATE = header.RATE;
                        s.CUR_VL = s.NET;
                        s.PTR_NO = header.TR_NO;
                        s.PTR_TY = (int)TRTYType.TransferIN;
                        s.PStoreID = header.StoreID;
                        s.PK = (!AS.IsNullValue(s.PK)) ? s.PK : 1;
                        s.PKPRC = s.Price / s.PK;
                        s.PKName = AS.GetName(uow, FunctionName.GetPKNAME, s.PKID);
                        s.TR_DS_AR = s.TRTY_NAME + " رقم " + s.TR_NO;
                        s.TR_DS_EN = s.TRTY_NAME + " رقم " + s.TR_NO;
                        s.PriceID = header.PriceID;
                        s.EnteredBy = CurrentUser.Username;
                        s.EntryDate = DateTime.Now;
                        LNNO++;
                    });

                    header.DetailList = listASTRD;
                    header.TR_DS = (int)TRDSTYPE.TransferIN;
                    header.Paid = header.Paid == 0 ? header.NetTotal : header.Paid;
                    header.CUR_VL = header.NetTotal;
                    header.Balance = 0;
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
            var header = request.Entity;
            listASTRD = header.DetailList;
            SelectTRTY = (TRTYType)header.TR_TY;
            transaction = uow.Connection.GetCurrentActualTransaction();
            try
            {
                var RATE = AS.GetValue(uow, FunctionName.GetCurrencyRate, "'" + header.CurrencyID + "'");
                header.RATE = AS.ToDouble(RATE);
                header.TRTY_NAME = AS.GetName(uow, FunctionName.GetTRTYNAME, header.TR_TY.ToString());
                header.Store_NAME = AS.GetName(uow, FunctionName.GetStoreName, "'" + header.StoreID + "'");
                header.Currency_NAME = AS.GetName(uow, FunctionName.GetCurrencyName, "'" + header.CurrencyID + "'");
                header.CST_NAME = AS.GetName(uow, FunctionName.GetCostName, "'" + header.CST_CD + "'");
                header.HDSCR_AR = header.TRTY_NAME + " رقم " + header.TR_NO;
                header.HDSCR_EN = header.HDSCR_AR;
                header.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now.Date;

                int LNNO = 1;
                if (SelectTRTY == TRTYType.TransferIN)
                {
                    listASTRD.ForEach(s =>
                    {
                        s.DetailID = header.HeaderID;
                        s.TR_NO = header.TR_NO;
                        s.TR_TY = (int)TRTYType.TransferIN;
                        s.TRTY_NAME = header.TRTY_NAME;
                        s.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now;
                        s.TR_DS = (int)TRDSTYPE.TransferIN;
                        s.GRP = (int)GRPTYPE.TransferIN;
                        s.StoreID = header.StoreID;
                        s.Store_NAME = header.Store_NAME;
                        s.ItemBarCode = AS.IsNullValue(s.ItemBarCode) ? s.Item_CD : s.ItemBarCode;
                        s.LN_NO = LNNO;
                        s.CurrencyID = header.CurrencyID;
                        s.Currency_Name = header.Currency_NAME;
                        s.RATE = header.RATE;
                        s.CUR_VL = s.NET;
                        s.PTR_NO = header.TR_NO;
                        s.PTR_TY = (int)TRTYType.TransferIN;
                        s.PStoreID = header.StoreID;
                        s.PK = (!AS.IsNullValue(s.PK)) ? s.PK : 1;
                        s.PKPRC = s.Price / s.PK;
                        s.PKName = AS.GetName(uow, FunctionName.GetPKNAME, s.PKID);
                        s.TR_DS_AR = s.TRTY_NAME + " رقم " + s.TR_NO;
                        s.TR_DS_EN = s.TRTY_NAME + " رقم " + s.TR_NO;
                        s.PriceID = header.PriceID;
                        s.EnteredBy = CurrentUser.Username;
                        s.EntryDate = DateTime.Now;
                        LNNO++;
                    });

                    header.DetailList = listASTRD;
                    header.TR_DS = (int)TRDSTYPE.TransferIN;
                    header.Paid = header.Paid == 0 ? header.NetTotal : header.Paid;
                    header.CUR_VL = header.NetTotal;
                    header.Balance = 0;
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
            transaction = uow.Connection.GetCurrentActualTransaction();
            try
            {
                if (SelectTRTY == TRTYType.TransferIN)
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
                transaction.Rollback();
                AS.AppendException(exception, exception.Message);
                return new DeleteResponse();
            }
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            try
            {
                if (SelectTRTY == TRTYType.TransferIN)
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
                if (SelectTRTY == TRTYType.TransferIN)
                {
                    lst.Entities = connection.List<MyRow>(s => s.SelectTableFields()).Where<MyRow>(x => x.TR_TY == (int)TRTYType.TransferIN).ToList();
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
            }
        }
        // Validatetion 
        public static bool IsValidate(SaveRequest<MyRow> request)
        {
            bool IsValid = false;
            var ASTRD = request.Entity.DetailList;

            if (ASTRD == null || ASTRD.Count == 0)
                IsValid = true;

            return IsValid;
        }
        public static void NewTransToHeader(IDbConnection connection, MyRow header)
        {
            if (header == null || header.HeaderID == 0) return;
            var ASTRH = new TransferToRow();
            int TRTY = (int)TRTYType.TransferTO;
            var MAXCode = AS.GetValue(connection, StoredName.ProceGetMaxCode, "'" + header.PStoreID + "'", TRTY.ToString());
            string TRNO = AS.GetMaxNumberInString(MAXCode.ToString());
            var RATE = AS.GetValue(connection, FunctionName.GetCurrencyRate, "'" + header.CurrencyID + "'");
            ASTRH.TR_NO = AS.ToInt(TRNO);
            ASTRH.StoreID = header.PStoreID;
            ASTRH.Store_NAME = header.Store_NAME;
            ASTRH.TR_TY = TRTY;
            ASTRH.TRTY_NAME = AS.GetName(connection, FunctionName.GetTRTYNAME, TRTY.ToString());
            ASTRH.TR_DS = (int)TRDSTYPE.TransferTO;
            ASTRH.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now.Date;
            ASTRH.HDSCR_AR = ASTRH.TRTY_NAME + " رقم " + ASTRH.TR_NO;
            ASTRH.HDSCR_EN = ASTRH.TRTY_NAME + " رقم " + ASTRH.TR_NO;
            ASTRH.CST_NAME = header.CST_NAME;
            ASTRH.Currency_NAME = header.Currency_NAME;
            ASTRH.RATE = AS.ToDouble(RATE);
            ASTRH.CurrencyID = header.CurrencyID;
            ASTRH.Currency_NAME = header.Currency_NAME;
            ASTRH.Total = header.Total;
            ASTRH.NetTotal = header.NetTotal;
            ASTRH.Notes = header.Notes;
            ASTRH.PStoreID = header.StoreID;
            ASTRH.PTR_NO = header.TR_NO;
            ASTRH.PTR_TY = header.TR_TY;
            ASTRH.Status = header.Status;
            ASTRH.EnteredBy = CurrentUser.Username;
            ASTRH.EntryDate = DateTime.Now;
            try
            {
                connection.Insert<TransferToRow>(ASTRH);
                var SQL = "SELECT * FROM ASTRH Where TR_NO=" + ASTRH.TR_NO + " AND TR_TY=" + TRTY + " AND StoreID=" + ASTRH.StoreID;
                var row = connection.Query<TransferToRow>(SQL).ToList().FirstOrDefault<TransferToRow>();
                NewTransferToDetail(connection, row);
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                transaction.Rollback();
            }
        }
        public static void NewTransferToDetail(IDbConnection connection, TransferToRow header)
        {
            if (header == null || header.HeaderID == 0) return;
            var lstASTRD = new List<TransferToASTRDRow>();
            int LNNO = 1;
            listASTRD.ForEach(s =>
            {
                var ASTRD = new TransferToASTRDRow();
                ASTRD.DetailID = header.HeaderID;
                ASTRD.TR_NO = header.TR_NO;
                ASTRD.TR_TY = (int)TRTYType.TransferTO;
                ASTRD.TRTY_NAME = header.TRTY_NAME;
                ASTRD.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now;
                ASTRD.TR_DS = (int)TRDSTYPE.TransferTO;
                ASTRD.GRP = (int)GRPTYPE.TransferTO;
                ASTRD.StoreID = header.StoreID;
                ASTRD.Store_NAME = header.Store_NAME;
                ASTRD.ItemBarCode = AS.IsNullValue(s.ItemBarCode) ? s.Item_CD : s.ItemBarCode;
                ASTRD.LN_NO = LNNO;
                ASTRD.CST_CD = header.CST_CD;
                ASTRD.CST_NAME = header.CST_NAME;
                ASTRD.CurrencyID = header.CurrencyID;
                ASTRD.Currency_Name = header.Currency_NAME;
                ASTRD.PK = AS.IsNullValue(s.PK) ? 1 : s.PK;
                ASTRD.PKID = AS.IsNullValue(s.PKID) ? "1" : s.PKID;
                ASTRD.PKName = AS.GetName(connection, FunctionName.GetPKNAME, s.PKID);
                ASTRD.Item_CD = s.Item_CD;
                ASTRD.ItemBarCode = AS.IsNullValue(s.ItemBarCode) ? s.Item_CD : s.ItemBarCode;
                ASTRD.QTY = s.QTY;
                ASTRD.Price = s.Price;
                ASTRD.Value = s.Value;
                ASTRD.PKCST = s.PKCST;
                ASTRD.PKCSTVL = s.QTY * s.PKCST;
                ASTRD.PKPRC = s.Price / s.PK;
                ASTRD.RATE = header.RATE;
                ASTRD.CUR_VL = s.NET;
                ASTRD.PTR_NO = header.PTR_NO;
                ASTRD.PTR_TY = header.PTR_TY;
                ASTRD.PStoreID = header.PStoreID;
                ASTRD.TR_DS_AR = header.TRTY_NAME + " رقم " + s.TR_NO;
                ASTRD.TR_DS_EN = header.TRTY_NAME + " رقم " + s.TR_NO;
                ASTRD.PriceID = s.PriceID;
                ASTRD.NET = s.NET;
                ASTRD.NetBeforeTAX = s.NET;
                ASTRD.NetAfterTAX = s.NET;
                ASTRD.CUR_VL = s.NET;
                ASTRD.EnteredBy = CurrentUser.Username;
                ASTRD.EntryDate = DateTime.Now;
                try
                {
                    connection.Insert<TransferToASTRDRow>(ASTRD);
                    LNNO++;
                }
                catch (Exception exception)
                {
                    AS.AppendException(exception, exception.Message);
                }
            });

        }
        public static void AddTransToHeader(IDbConnection connection, TransferToRow header, MyRow MyHeader)
        {
            if (header == null || header.HeaderID == 0) return;
            var Result = connection.ExistsById<TransferToRow>(header.HeaderID);
            int TRTY = (int)TRTYType.TransferTO;
            if (Result)
            {
                try
                {
                    var SQL = "SELECT * FROM ASTRH Where HeaderID= " + header.HeaderID + " AND TR_TY=" + TRTY + " AND StoreID=" + header.StoreID;
                    var ASTRH = connection.Query<TransferToRow>(SQL).ToList().FirstOrDefault();
                    transaction = connection.GetCurrentActualTransaction();
                    var RATE = AS.GetValue(connection, FunctionName.GetCurrencyRate, "'" + header.CurrencyID + "'");
                    ASTRH.TR_NO = header.TR_NO;
                    ASTRH.StoreID = header.StoreID;
                    ASTRH.Store_NAME = AS.GetName(connection, FunctionName.GetStoreName, "'" + header.StoreID + "'");
                    ASTRH.TR_TY = TRTY;
                    ASTRH.TRTY_NAME = AS.GetName(connection, FunctionName.GetTRTYNAME, header.TR_TY.ToString());
                    ASTRH.TR_DS = (int)TRDSTYPE.TransferTO;
                    ASTRH.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now.Date;
                    ASTRH.HDSCR_AR = header.TRTY_NAME + " رقم " + ASTRH.TR_NO;
                    ASTRH.HDSCR_EN = header.TRTY_NAME + " رقم " + ASTRH.TR_NO;
                    ASTRH.CST_CD = header.CST_CD;
                    ASTRH.PStoreID = MyHeader.StoreID;
                    ASTRH.PTR_NO = MyHeader.TR_NO;
                    ASTRH.PTR_TY = (int)TRTYType.TransferIN;
                    ASTRH.CST_NAME = AS.GetName(connection, FunctionName.GetCostName, "'" + header.CST_CD + "'");
                    ASTRH.Currency_NAME = AS.GetName(connection, FunctionName.GetCurrencyName, "'" + header.CurrencyID + "'");
                    ASTRH.RATE = AS.ToDouble(RATE);
                    ASTRH.CurrencyID = header.CurrencyID;
                    ASTRH.Currency_NAME = AS.GetName(connection, FunctionName.GetCurrencyName, header.CurrencyID.ToString());
                    ASTRH.Total = header.Total;
                    ASTRH.NetTotal = header.NetTotal;
                    ASTRH.Notes = header.Notes;
                    ASTRH.Status = header.Status;
                    ASTRH.UpdatedBy = CurrentUser.Username;
                    ASTRH.UpdateDate = DateTime.Now;
                    connection.UpdateById<TransferToRow>(ASTRH);
                    //var Query = "SELECT * FROM ASTRH Where TR_NO=" + ASTRH.TR_NO + " AND TR_TY=" + TRTY + " AND StoreID=" + ASTRH.StoreID;
                    //var row = connection.Query<TransferToRow>(Query).ToList().FirstOrDefault<TransferToRow>();
                    AddTransferToDetail(connection, ASTRH);
                }
                catch (Exception exception)
                {
                    AS.AppendException(exception, exception.Message);
                    transaction.Rollback();
                }
            }
        }
        public static void AddTransferToDetail(IDbConnection connection, TransferToRow header)
        {
            int LNNO = 1;
            if (header == null || header.HeaderID == 0) return;
            var lstASTRD = new List<TransferToASTRDRow>();
            try
            {
                var SQL = "Delete FROM ASTRD Where DetailID =" + header.HeaderID + " AND TR_TY=" + (int)TRTYType.TransferTO + " AND StoreID=" + header.StoreID;
                connection.Execute(SQL);
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
            }
            listASTRD.ForEach(s =>
            {
                var ASTRD = new TransferToASTRDRow();
                ASTRD.DetailID = header.HeaderID;
                ASTRD.TR_NO = header.TR_NO;
                ASTRD.TR_TY = (int)TRTYType.TransferTO;
                ASTRD.TRTY_NAME = header.TRTY_NAME;
                ASTRD.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now;
                ASTRD.TR_DS = (int)TRDSTYPE.TransferTO;
                ASTRD.GRP = (int)GRPTYPE.TransferTO;
                ASTRD.StoreID = header.StoreID;
                ASTRD.Store_NAME = header.Store_NAME;
                ASTRD.ItemBarCode = AS.IsNullValue(ASTRD.ItemBarCode) ? ASTRD.Item_CD : ASTRD.ItemBarCode;
                ASTRD.LN_NO = LNNO;
                ASTRD.CST_CD = header.CST_CD;
                ASTRD.CST_NAME = header.CST_NAME;
                ASTRD.CurrencyID = header.CurrencyID;
                ASTRD.Currency_Name = header.Currency_NAME;
                ASTRD.PK = AS.IsNullValue(ASTRD.PK) ? 1 : ASTRD.PK;
                ASTRD.PKID = AS.IsNullValue(ASTRD.PKID) ? "1" : ASTRD.PKID;
                ASTRD.PKName = AS.GetName(connection, FunctionName.GetPKNAME, ASTRD.PKID);
                ASTRD.Item_CD = s.Item_CD;
                ASTRD.ItemBarCode = AS.IsNullValue(ASTRD.ItemBarCode) ? ASTRD.Item_CD : ASTRD.ItemBarCode;
                ASTRD.QTY = s.QTY;
                ASTRD.Price = s.Price;
                ASTRD.Value = s.Value;
                ASTRD.PKCST = s.PKCST;
                ASTRD.PKCSTVL = s.QTY * s.PKCST;
                ASTRD.PKPRC = s.Price / s.PK;
                ASTRD.RATE = header.RATE;
                ASTRD.CUR_VL = s.NET;
                ASTRD.PTR_NO = header.PTR_NO;
                ASTRD.PTR_TY = header.PTR_TY;
                ASTRD.PStoreID = header.PStoreID;
                ASTRD.TR_DS_AR = header.TRTY_NAME + " رقم " + s.TR_NO;
                ASTRD.TR_DS_EN = header.TRTY_NAME + " رقم " + s.TR_NO;
                ASTRD.PriceID = s.PriceID;
                ASTRD.NET = s.NET;
                ASTRD.NetBeforeTAX = s.NET;
                ASTRD.NetAfterTAX = s.NET;
                ASTRD.CUR_VL = s.NET;
                ASTRD.EnteredBy = CurrentUser.Username;
                ASTRD.EntryDate = DateTime.Now;
                try
                {
                    connection.Insert<TransferToASTRDRow>(ASTRD);
                    LNNO++;
                }
                catch (Exception exception)
                {
                    AS.AppendException(exception, exception.Message);
                }
            });

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
                    var header = Request.Entity;
                    int TRTY = (int)TRTYType.TransferTO;
                    var SQL = "SELECT * FROM ASTRH Where TR_NO=" + header.TR_NO + " AND TR_TY=" + TRTY + " AND StoreID=" + header.PStoreID;
                    var TransferTo = Connection.Query<TransferToRow>(SQL).ToList().FirstOrDefault();
                    if (TransferTo == null || TransferTo.HeaderID == 0)
                    {
                        NewTransToHeader(this.Connection, header);
                    }
                    else
                    {
                        AddTransToHeader(this.Connection, TransferTo, header);
                    }
                    base.AfterSave();
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
                }
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