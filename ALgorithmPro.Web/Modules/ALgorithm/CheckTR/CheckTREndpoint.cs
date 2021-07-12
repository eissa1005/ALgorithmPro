using Serenity;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = ALgorithmPro.ALgorithm.Repositories.CheckTRRepository;
using System;
using ALgorithmPro.Web.Modules.Common;
using MyRow = ALgorithmPro.ALgorithm.Entities.CheckTRRow;
using static ALgorithmPro.Contstants;

namespace ALgorithmPro.ALgorithm.Endpoints
{
    [Route("Services/ALgorithm/CheckTR/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CheckTRController : ServiceEndpoint
    {
        public static CheckTRTY SelectCheckTRTY { set; get; }
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var CHKTR = request.Entity;
            SelectCheckTRTY = (CheckTRTY)request.Entity.TR_TY;
            try
            {
                switch (SelectCheckTRTY)
                {
                    case CheckTRTY.Deposit:
                        CHKTR.TRTY_NAME = Contstants.CheckDeposit;
                        CHKTR.DSCR_AR = "استلام شيك رقم" + CHKTR.CHK_NO + " من / " + AS.GetName(uow,FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                        break;
                    case CheckTRTY.CASH:
                        CHKTR.TRTY_NAME = Contstants.CheckCash;
                        CHKTR.DSCR_AR = "تحصيل شيك رقم" + CHKTR.CHK_NO + " من / " + AS.GetName(uow,FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                        break;

                    case CheckTRTY.PartialCASH:
                        CHKTR.TRTY_NAME = Contstants.CheckPartialCash;
                        CHKTR.DSCR_AR = "تحصيل شيك رقم" + CHKTR.CHK_NO + " من / " + AS.GetName(uow,FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                        break;
                    case CheckTRTY.Bounce:
                        CHKTR.TRTY_NAME = Contstants.CheckBounce;
                        CHKTR.DSCR_AR = "إرتداد شيك رقم" + CHKTR.CHK_NO + " من / " + AS.GetName(uow, FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                        break;
                    case CheckTRTY.Endorsement:
                        CHKTR.TRTY_NAME = Contstants.Endorsement;
                        CHKTR.DSCR_AR = " شيك مظهر رقم" + CHKTR.CHK_NO + " من / " + AS.GetName(uow, FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                        break;
                    case CheckTRTY.Stop:
                        CHKTR.TRTY_NAME = Contstants.StopCheck;
                        CHKTR.DSCR_AR = "وقف شيك رقم" + CHKTR.CHK_NO + " من / " + AS.GetName(uow, FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                        break;
                    case CheckTRTY.Close:
                        CHKTR.TRTY_NAME = Contstants.CloseCheck;
                        CHKTR.DSCR_AR = "إلغاء شيك رقم" + CHKTR.CHK_NO + " من / " + AS.GetName(uow, FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                        break;
                   
                    default:
                        break;
                }
                if (CHKTR.CHK_TYP == CheckType.PayChecks)
                {
                    CHKTR.TRTY_NAME = "سداد شيك ";
                    CHKTR.DSCR_AR = "سداد شيك رقم" + CHKTR.CHK_NO + " لحساب / " + AS.GetName(uow, FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                }

                var MAXNO = AS.GetMAXSQL(uow,135);
                int LNO = 0;
                if (!AS.IsNullValue(MAXNO))
                {
                    LNO = AS.ToInt(MAXNO);
                    CHKTR.LN_NO = LNO + 1;
                }
                else CHKTR.LN_NO = 1;
                CHKTR.EnteredBy = CurrentUser.Username;
                CHKTR.EntryDate = DateTime.Now;

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
            var CHKTR = request.Entity;
            SelectCheckTRTY = (CheckTRTY)request.Entity.TR_TY;
            try
            {
                switch (SelectCheckTRTY)
                {
                    case CheckTRTY.Deposit:
                        CHKTR.TRTY_NAME = Contstants.CheckDeposit;
                        CHKTR.DSCR_AR = "استلام شيك رقم" + CHKTR.CHK_NO + " من / " + AS.GetName(uow, FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                        break;
                    case CheckTRTY.CASH:
                        CHKTR.TRTY_NAME = Contstants.CheckCash;
                        CHKTR.DSCR_AR = "تحصيل شيك رقم" + CHKTR.CHK_NO + " من / " + AS.GetName(uow, FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                        break;

                    case CheckTRTY.PartialCASH:
                        CHKTR.TRTY_NAME = Contstants.CheckPartialCash;
                        CHKTR.DSCR_AR = "تحصيل شيك رقم" + CHKTR.CHK_NO + " من / " + AS.GetName(uow, FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                        break;
                    case CheckTRTY.Bounce:
                        CHKTR.TRTY_NAME = Contstants.CheckBounce;
                        CHKTR.DSCR_AR = "إرتداد شيك رقم" + CHKTR.CHK_NO + " من / " + AS.GetName(uow, FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                        break;
                    case CheckTRTY.Endorsement:
                        CHKTR.TRTY_NAME = Contstants.Endorsement;
                        CHKTR.DSCR_AR = " شيك مظهر رقم" + CHKTR.CHK_NO + " من / " + AS.GetName(uow, FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                        break;
                    case CheckTRTY.Stop:
                        CHKTR.TRTY_NAME = Contstants.StopCheck;
                        CHKTR.DSCR_AR = "وقف شيك رقم" + CHKTR.CHK_NO + " من / " + AS.GetName(uow, FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                        break;
                    case CheckTRTY.Close:
                        CHKTR.TRTY_NAME = Contstants.CloseCheck;
                        CHKTR.DSCR_AR = "إلغاء شيك رقم" + CHKTR.CHK_NO + " من / " + AS.GetName(uow, FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                        break;

                    default:
                        break;
                }
                if (CHKTR.CHK_TYP == CheckType.PayChecks)
                {
                    CHKTR.TRTY_NAME = "سداد شيك ";
                    CHKTR.DSCR_AR = "سداد شيك رقم" + CHKTR.CHK_NO + " لحساب / " + AS.GetName(uow, FunctionName.GetAccName, CHKTR.ACC_NO, "2");
                }

                CHKTR.UpdatedBy = CurrentUser.Username;
                CHKTR.UpdateDate = DateTime.Now;

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
            return new MyRepository(Context).Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository(Context).Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }

    }
}
