using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRow = ALgorithmPro.ALgorithm.Entities.CashReturnASTRDRow;

namespace ALgorithmPro.ALgorithm.Repositories
{
    public class CashReturnASTRDRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public CashReturnASTRDRepository(IRequestContext context) : base(context)
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