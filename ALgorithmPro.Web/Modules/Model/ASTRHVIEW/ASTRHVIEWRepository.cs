using System;
using System.Data;
using Serenity.Services;
using MyRow = ALgorithmPro.Model.Entities.ASTRHVIEWRow;

namespace ALgorithmPro.Model.Repositories
{
    public class ASTRHVIEWRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public ASTRHVIEWRepository(IRequestContext context)
            : base(context)
        {
        }
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            var lst = new ListResponse<MyRow>();
            try
            {
           
                return new MyListHandler(Context).Process(connection, request);
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
            }
            return lst;
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