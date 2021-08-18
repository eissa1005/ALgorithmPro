
using System.Data;
using Serenity.Services;
using MyRow = ALgorithmPro.ALgorithm.Entities.TransferInASTRDRow;

namespace ALgorithmPro.ALgorithm.Repositories
{
    public class TransferInASTRDRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public TransferInASTRDRepository(IRequestContext context) : base(context)
        {
        }
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            public MyRetrieveHandler(IRequestContext context) : base(context)
            {

            }
        }
        private class MyListHandler : ListRequestHandler<MyRow>
        {
            public MyListHandler(IRequestContext context) : base(context)
            {
            }
        }
    }
}