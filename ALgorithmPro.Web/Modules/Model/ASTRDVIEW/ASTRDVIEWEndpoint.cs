using Serenity.Data;
using Serenity.Services;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = ALgorithmPro.Model.Repositories.ASTRDVIEWRepository;
using MyRow = ALgorithmPro.ASTRDVIEWRow;

namespace ALgorithmPro
{
    [Route("Services/Model/ASTRDVIEW/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ASTRDVIEWController : ServiceEndpoint
    {
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }
    }
}
