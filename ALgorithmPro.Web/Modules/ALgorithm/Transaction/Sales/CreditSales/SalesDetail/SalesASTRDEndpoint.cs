using Serenity;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = ALgorithmPro.ALgorithm.Repositories.SalesASTRDRepository;
using MyRow = ALgorithmPro.ALgorithm.Entities.SalesASTRDRow;

namespace ALgorithmPro.ALgorithm.Endpoints
{
    [Route("Services/ALgorithm/SalesASTRD/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class SalesASTRDController : ServiceEndpoint
    {
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository(Context).Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }
    }
}


