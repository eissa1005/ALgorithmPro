using Serenity;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = ALgorithmPro.ALgorithm.Repositories.ItemsBarcodeRepository;
using MyRow = ALgorithmPro.ALgorithm.Entities.ItemsBarcodeRow;

namespace ALgorithmPro.ALgorithm.Endpoints
{
    [Route("Services/ALgorithm/ItemsBarcode/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ItemsBarcodeController : ServiceEndpoint
    {
       
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
