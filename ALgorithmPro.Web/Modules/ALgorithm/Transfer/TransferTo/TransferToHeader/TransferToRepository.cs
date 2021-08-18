using System;
using ALgorithmPro.ALgorithm.Entities;
using System.Data;
using System.Linq;
using Serenity.Data;
using Serenity.Services;
using ALgorithmPro.Web.Modules.Common;
using System.Collections.Generic;
using MyRow = ALgorithmPro.ALgorithm.Entities.TransferToRow;
using static ALgorithmPro.Contstants;

namespace ALgorithmPro.ALgorithm.Repositories
{
    public class TransferToRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;
        public static TRTYType SelectTRTY { set; get; }
        public static IDbTransaction transaction;
        public static List<TransferToASTRDRow> listASTRD { set; get; }
        public TransferToRepository(IRequestContext context) : base(context)
        {
            SelectTRTY = TRTYType.TransferTO;

        }
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            try
            {
                if (SelectTRTY == TRTYType.TransferTO)
                {
                    return new MyRetrieveHandler(Context).Process(connection, request);
                }
                else
                {
                    return new RetrieveResponse<MyRow>();
                }
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return new RetrieveResponse<MyRow>();
            }
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            var lst = new ListResponse<MyRow>();
            try
            {
                if (SelectTRTY == TRTYType.TransferTO)
                {
                    lst.Entities = connection.List<MyRow>(s => s.SelectTableFields()).Where<MyRow>(x => x.TR_TY == (int)TRTYType.TransferTO).ToList();
                    return lst;
                }
                else
                {
                    return new ListResponse<MyRow>();
                }
            }

            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return new ListResponse<MyRow>();
            }
           
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            public MyRetrieveHandler(IRequestContext context)
                : base(context)
            {
            }
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