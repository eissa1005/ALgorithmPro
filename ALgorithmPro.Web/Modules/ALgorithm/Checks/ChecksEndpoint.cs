using Serenity;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = ALgorithmPro.ALgorithm.Repositories.ChecksRepository;
using MyRow = ALgorithmPro.ALgorithm.Entities.ChecksRow;
using ALgorithmPro.Web.Modules.Common;
using System;
using System.Linq;
using static ALgorithmPro.Contstants;

namespace ALgorithmPro.ALgorithm.Endpoints
{
    [Route("Services/ALgorithm/Checks/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ChecksController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            string SQL = string.Empty;
            string AccountName = string.Empty;

            if (request.Entity.CHK_TYP == CheckType.ReceiveChecks)
                SQL = "SELECT  ISNULL(MAX(TR_NO),0) AS MAXNO FROM ASCHKS WHERE CHK_TYP = " + (Int32)CheckType.ReceiveChecks;
            else
                SQL = "SELECT  ISNULL(MAX(TR_NO),0) AS MAXNO FROM ASCHKS WHERE CHK_TYP = " + (Int32)CheckType.PayChecks;
            try
            {
                
                var MAXNO =AS.GetValue(uow,SQL);
                MAXNO = AS.GetMaxNumberInString(MAXNO.ConvertToString());
                request.Entity.TR_NO = AS.ToInt(MAXNO);
                var AccountID = request.Entity.ACC_NO;
                string Type = "2";
                string StoreID = request.Entity.StoreID;
                request.Entity.ACC_NAME = AS.GetName(uow, FunctionName.GetAccName, AccountID, Type);
                request.Entity.Cash_NAME = AS.GetName(uow,FunctionName.GetAccName, request.Entity.CashBoxID, Type);
                request.Entity.Endorsed_NAME = AS.GetName(uow,FunctionName.GetAccName, request.Entity.Endorsed_NO, Type);
                request.Entity.Notes_ACCNAME = AS.GetName(uow, FunctionName.GetAccName, request.Entity.Notes_ACCNO, Type);
                request.Entity.RPACC_NAME = AS.GetName(uow,FunctionName.GetAccName, request.Entity.RPACC_NO, Type);
                request.Entity.CBNK_NAME = AS.GetName(uow, FunctionName.GetAccName, request.Entity.CBNKID, Type);
                request.Entity.DEPT_BNKNM = AS.GetName(uow, FunctionName.GetAccName, request.Entity.DEPT_BNKID, Type);
                request.Entity.BNK_NAME = AS.GetName(uow, FunctionName.GetAccName, request.Entity.BNKID, Type);
                request.Entity.Rep_NAME = AS.GetName(uow, FunctionName.GetRepName, request.Entity.Rep_CD);
                request.Entity.Rep_NAME2 = AS.GetName(uow,FunctionName.GetRepName, request.Entity.Rep_CD2);
                request.Entity.SUM_NAME = AS.GetName(uow, FunctionName.GetSumName, request.Entity.SUM_CD);
                request.Entity.TRTY_NAME = AS.GetName(uow, FunctionName.GetCheckTRTYName, "701");
                request.Entity.Store_NAME = AS.GetName(uow,FunctionName.GetStoreName, '"' + StoreID + '"');

                request.Entity.TR_TY = (Int32)CheckTRTY.Deposit;
                request.Entity.LN_NO = 1;
                request.Entity.GL_TY = 403;
                request.Entity.POSTED = false;
                request.Entity.CRDB = Convert.ToInt32(request.Entity.AMT);
                request.Entity.CUR_VL = request.Entity.RATE ?? 0 * request.Entity.AMT ?? 0;
                request.Entity.EnteredBy = CurrentUser.Username;
                request.Entity.EntryDate = DateTime.Now;

                return new MyRepository(Context).Create(uow, request);
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return null;
            }
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            string SQL = string.Empty;
            string AccountName = string.Empty;

            if (request.Entity.CHK_TYP == CheckType.ReceiveChecks)
                SQL = "SELECT  ISNULL(MAX(TR_NO),0) AS MAXNO FROM ASCHKS WHERE CHK_TYP = " + (Int32)CheckType.ReceiveChecks;
            else
                SQL = "SELECT  ISNULL(MAX(TR_NO),0) AS MAXNO FROM ASCHKS WHERE CHK_TYP = " + (Int32)CheckType.PayChecks;
            try
            {
                var Checks = uow.Connection.Query<String>(SQL);
                var MAXNO = Checks.ToList().First();
                MAXNO = AS.GetMaxNumberInString(MAXNO.ConvertToString());
                request.Entity.TR_NO = AS.ToInt(MAXNO);
                var AccountID = request.Entity.ACC_NO;
                string Type = "2";
                string StoreID = request.Entity.StoreID;
                request.Entity.ACC_NAME = AS.GetName(uow,FunctionName.GetAccName, AccountID, Type);
                request.Entity.Cash_NAME = AS.GetName(uow, FunctionName.GetAccName, request.Entity.CashBoxID, Type);
                request.Entity.Endorsed_NAME = AS.GetName(uow, FunctionName.GetAccName, request.Entity.Endorsed_NO, Type);
                request.Entity.Notes_ACCNAME = AS.GetName(uow,FunctionName.GetAccName, request.Entity.Notes_ACCNO, Type);
                request.Entity.RPACC_NAME = AS.GetName(uow,FunctionName.GetAccName, request.Entity.RPACC_NO, Type);
                request.Entity.CBNK_NAME = AS.GetName(uow, FunctionName.GetAccName, request.Entity.CBNKID, Type);
                request.Entity.DEPT_BNKNM = AS.GetName(uow, FunctionName.GetAccName, request.Entity.DEPT_BNKID, Type);
                request.Entity.BNK_NAME = AS.GetName(uow, FunctionName.GetAccName, request.Entity.BNKID, Type);
                request.Entity.Rep_NAME = AS.GetName(uow, FunctionName.GetRepName, request.Entity.Rep_CD);
                request.Entity.Rep_NAME2 = AS.GetName(uow, FunctionName.GetRepName, request.Entity.Rep_CD2);
                request.Entity.SUM_NAME = AS.GetName(uow, FunctionName.GetSumName, request.Entity.SUM_CD);
                request.Entity.TRTY_NAME = AS.GetName(uow, FunctionName.GetCheckTRTYName, "701");
                request.Entity.Store_NAME = AS.GetName(uow, FunctionName.GetStoreName, '"' + StoreID + '"');

                request.Entity.TR_TY = (Int32)CheckTRTY.Deposit;
                request.Entity.LN_NO = 1;
                request.Entity.GL_TY = 403;
                request.Entity.POSTED = false;
                request.Entity.CRDB = Convert.ToInt32(request.Entity.AMT);
                request.Entity.CUR_VL = request.Entity.RATE ?? 0 * request.Entity.AMT ?? 0;
                request.Entity.UpdatedBy = CurrentUser.Username;
                request.Entity.UpdateDate = DateTime.Now;
                return new MyRepository(Context).Update(uow, request);
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return null;
            }
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            try
            {
                return new MyRepository(Context).Delete(uow, request);

            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return null;
            }
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            try
            {
             return new MyRepository(Context).Retrieve(connection, request);
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return null; 
            }
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            try
            {
                return new MyRepository(Context).List(connection, request);
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return null;
            }
        }
    }
}
