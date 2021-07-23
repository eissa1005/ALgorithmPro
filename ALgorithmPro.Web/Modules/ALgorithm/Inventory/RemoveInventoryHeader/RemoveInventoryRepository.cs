using System;
using ALgorithmPro.ALgorithm.Entities;
using ALgorithmPro.Common;
using ALgorithmPro.Web.Modules.Common;
using Serenity.Data;
using Serenity.Services;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using MyRow = ALgorithmPro.ALgorithm.Entities.RemoveInventoryRow;
using static ALgorithmPro.Contstants;

namespace ALgorithmPro.ALgorithm.Repositories
{
    public class RemoveInventoryRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;
        public static TRTYType SelectTRTY { set; get; }
        public static IDbTransaction transaction;
        public static List<RemoveInventoryASTRDRow> listASTRD { set; get; }
        public RemoveInventoryRepository(IRequestContext context) : base(context)
        {
            SelectTRTY = TRTYType.AddInventory;

        }
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var header = request.Entity;
            listASTRD = header.DetailList;
            SelectTRTY = (TRTYType)header.TR_TY;
            string ACCNO = header.ACC_NO;
            string ACC_NAME = header.ACC_NAME;
            transaction = uow.Connection.GetCurrentActualTransaction();
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
                if (SelectTRTY == TRTYType.AddInventory)
                {
                    listASTRD.ForEach(s =>
                    {
                        s.DetailID = header.HeaderID;
                        s.TR_NO = header.TR_NO;
                        s.TR_TY = (int)TRTYType.AddInventory;
                        s.TRTY_NAME = header.TRTY_NAME;
                        s.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now;
                        s.TR_DS = (int)TRDSTYPE.AddInventory;
                        s.GRP = (int)GRPTYPE.AddInventory;
                        s.StoreID = header.StoreID;
                        s.Store_NAME = header.Store_NAME;
                        s.ItemBarCode = AS.IsNullValue(s.ItemBarCode) ? s.Item_CD : s.ItemBarCode;
                        s.LN_NO = LNNO;
                        s.ACC_NO = header.CashBoxID;
                        s.ACC_NAME = header.Cash_NAME;
                        s.ACC_NO2 = ACCNO;
                        s.ACC_NAME2 = ACC_NAME;
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
                        s.STAX_VL = s.TAX1 + s.TAX2 + s.TAX3 + s.TAX3;
                        s.disc_cur_val = s.DISC;
                        s.tax_cur_val = s.STAX_VL;
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
                    header.TR_DS = (int)TRDSTYPE.AddInventory;
                    header.ACC_NO = header.CashBoxID;
                    header.ACC_NAME = header.Cash_NAME;
                    header.ACC_NO2 = ACCNO;
                    header.ACC_NAME2 = ACC_NAME;
                    header.ReferenceNo = header.ReferenceNo == 0 ? header.TR_NO : header.ReferenceNo;
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
            string ACCNO = header.ACC_NO;
            string ACC_NAME = header.ACC_NAME;
            transaction = uow.Connection.GetCurrentActualTransaction();
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
                if (SelectTRTY == TRTYType.AddInventory)
                {
                    listASTRD.ForEach(s =>
                    {
                        s.DetailID = header.HeaderID;
                        s.TR_NO = header.TR_NO;
                        s.TR_TY = (int)TRTYType.AddInventory;
                        s.TRTY_NAME = header.TRTY_NAME;
                        s.TR_DT = header.TR_DT != null ? header.TR_DT : DateTime.Now;
                        s.TR_DS = (int)TRDSTYPE.AddInventory;
                        s.GRP = (int)GRPTYPE.AddInventory;
                        s.StoreID = header.StoreID;
                        s.Store_NAME = header.Store_NAME;
                        s.ItemBarCode = AS.IsNullValue(s.ItemBarCode) ? s.Item_CD : s.ItemBarCode;
                        s.LN_NO = LNNO;
                        s.ACC_NO = header.CashBoxID;
                        s.ACC_NAME = header.Cash_NAME;
                        s.ACC_NO2 = ACCNO;
                        s.ACC_NAME2 = ACC_NAME;
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
                        s.STAX_VL = s.TAX1 + s.TAX2 + s.TAX3 + s.TAX3;
                        s.disc_cur_val = s.DISC;
                        s.tax_cur_val = s.STAX_VL;
                        s.PTR_NO = header.PTR_NO;
                        s.PTR_TY = header.PTR_TY;
                        s.PStoreID = header.PStoreID;
                        s.PK = (!AS.IsNullValue(s.PK)) ? s.PK : 1;
                        s.PKPRC = s.Price / s.PK;
                        s.PKName = AS.GetName(uow, FunctionName.GetPKNAME, s.PKID);
                        s.TR_DS_AR = " فاتورة " + s.TRTY_NAME + " رقم " + s.TR_NO;
                        s.TR_DS_EN = " فاتورة " + s.TRTY_NAME + " رقم " + s.TR_NO;
                        s.PriceID = header.PriceID;
                        s.UpdatedBy = CurrentUser.Username;
                        s.UpdateDate = DateTime.Now;
                        LNNO++;
                    });

                    header.DetailList = listASTRD;
                    header.TR_DS = (int)TRDSTYPE.AddInventory;
                    header.ACC_NO = header.CashBoxID;
                    header.ACC_NAME = header.Cash_NAME;
                    header.ACC_NO2 = ACCNO;
                    header.ACC_NAME2 = ACC_NAME;
                    header.ReferenceNo = header.ReferenceNo == 0 ? header.TR_NO : header.ReferenceNo;
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
                if (SelectTRTY == TRTYType.AddInventory)
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
                if (SelectTRTY == TRTYType.AddInventory)
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
                if (SelectTRTY == TRTYType.AddInventory)
                {
                    lst.Entities = connection.List<MyRow>(s => s.SelectTableFields()).Where<MyRow>(x => x.TR_TY == (int)TRTYType.AddInventory).ToList();
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
        // Validatetion 
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
                    base.AfterSave();
                }
                catch (Exception exception)
                {
                    transaction.Rollback();
                    AS.AppendException(exception, exception.Message);
                    Connection.GetCurrentActualTransaction().Rollback();
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