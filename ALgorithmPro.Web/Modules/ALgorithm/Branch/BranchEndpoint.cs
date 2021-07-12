using System;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = ALgorithmPro.ALgorithm.Repositories.BranchRepository;
using MyRow = ALgorithmPro.ALgorithm.Entities.BranchRow;
using ALgorithmPro.Web.Modules.Common.Common;
using System.Linq;

namespace ALgorithmPro.ALgorithm.Endpoints
{
    [Route("Services/ALgorithm/Branch/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class BranchController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.EnteredBy = CurrentUser.Username;
            request.Entity.EntryDate = DateTime.Now.Date;
            return new MyRepository(Context).Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.UpdatedBy = CurrentUser.Username;
            request.Entity.UpdateDate = DateTime.Now.Date;
            return new MyRepository(Context).Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository(Context).Delete(uow, request);
        }
        public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            string SQL = "SELECT  ISNULL(MAX(BranchID),0) AS MAXNO FROM ASBranch WHERE Status = 1";
            var Query = connection.Query<string>(SQL);
            var MaxNO = Query.ToList().First();
            return GetNextNumberHelper.GetNextNumber(connection, request, MyRow.Fields.BranchID, MaxNO);
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
