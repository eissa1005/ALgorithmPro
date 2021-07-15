using System;
using System.Collections.Generic;
using System.Data;
using Serenity.Services;
using static ALgorithmPro.Contstants;
using MyRow = ALgorithmPro.ALgorithm.Entities.CashRestoreASTRDRow;

namespace ALgorithmPro.ALgorithm.Repositories
{
    public class CashRestoreASTRDRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public CashRestoreASTRDRepository(IRequestContext context) : base(context)
        {
        }
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
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
                return lst;
            }
           
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