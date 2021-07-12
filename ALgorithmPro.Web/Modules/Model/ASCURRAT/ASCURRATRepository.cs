using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRow = ALgorithmPro.Model.ASCURRATRow;

namespace ALgorithmPro.ALgorithm.Repositories
{
    public class ASCURRATRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public ASCURRATRepository(IRequestContext context)
            : base(context)
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