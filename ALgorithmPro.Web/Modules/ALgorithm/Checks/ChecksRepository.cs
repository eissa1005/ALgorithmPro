
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRow = ALgorithmPro.ALgorithm.Entities.ChecksRow;

namespace ALgorithmPro.ALgorithm.Repositories
{
    public class ChecksRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public ChecksRepository(IRequestContext context) : base(context)
        {
        }
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            try
            {
                return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create);

            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return null;
            }
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            try
            {
                return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return null;
            }
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            try
            {
                return new MyDeleteHandler(Context).Process(uow, request);
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return null;
            }
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            try
            {
                return new MyRetrieveHandler(Context).Process(connection, request);

            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return null;
            }
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            try
            {
                return new MyListHandler(Context).Process(connection, request);
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return null;
            }
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            public MyDeleteHandler(IRequestContext context)
                : base(context)
            {
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