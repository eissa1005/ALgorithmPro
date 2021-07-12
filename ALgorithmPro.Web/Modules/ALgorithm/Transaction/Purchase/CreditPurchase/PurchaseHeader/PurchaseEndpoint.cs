using Serenity.Data;
using System.Data;
using System.Linq;
using Serenity.Services;
using Microsoft.AspNetCore.Mvc;
using ALgorithmPro.Web.Modules.Common;
using MyRepository = ALgorithmPro.ALgorithm.Repositories.PurchaseRepository;
using MyRow = ALgorithmPro.ALgorithm.Entities.PurchaseRow;

namespace ALgorithmPro.ALgorithm.Endpoints
{
    [Route("Services/ALgorithm/Purchase/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class PurchaseController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository(Context).Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository(Context).Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository(Context).Delete(uow, request);
        }
        public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            string SQL = "SELECT ISNULL(MAX(TR_NO),0) AS MAXNO FROM ASTRH WHERE Status = 1 AND TR_TY=" + (int)TRTYType.Purchase + " AND StoreID=" + request.StoreID + "";
            var Query = connection.Query<string>(SQL);
            var MaxNO = Query.ToList().First();
            return GetNextNumberHelper.GetNextNumber(connection, request, MyRow.Fields.TR_NO, MaxNO);
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

