using System.Data;
using Serenity.Services;
using MyRow = ALgorithmPro.Model.Entities.ASTRDVIEWRow;

namespace ALgorithmPro.Model.Repositories
{
    public class ASTRDVIEWRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public ASTRDVIEWRepository(IRequestContext context): base(context)
        {

        }
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
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