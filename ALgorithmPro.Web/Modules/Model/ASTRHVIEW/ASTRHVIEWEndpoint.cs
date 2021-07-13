using System;
using System.Data;
using Serenity.Data;
using Serenity.Services;
using Microsoft.AspNetCore.Mvc;
using MyRepository = ALgorithmPro.Model.Repositories.ASTRHVIEWRepository;
using MyRow = ALgorithmPro.Model.Entities.ASTRHVIEWRow;

namespace ALgorithmPro.Model.Endpoints
{
    [Route("Services/Model/ASTRHVIEW/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ASTRHVIEWController : ServiceEndpoint
    {

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            var lst = new ListResponse<MyRow>();
            try
            {
                return new MyRepository(Context).List(connection, request);
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
            }
            return lst;
        }
    }
}
