using Serenity;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = ALgorithmPro.ALgorithm.Repositories.PurchASTRDRepository;
using MyRow = ALgorithmPro.ALgorithm.Entities.PurchASTRDRow;

namespace ALgorithmPro.ALgorithm.Endpoints
{
    [Route("Services/ALgorithm/PurchASTRD/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class PurchASTRDController : ServiceEndpoint
    {
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository(Context).Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }

       public GetItemBALResponse GetItemBAL(IDbConnection connection , GetItemBALRequest request)
        {
            return GetItemBALHelper.GetItemBAL(connection, request);
        }

    }
}

