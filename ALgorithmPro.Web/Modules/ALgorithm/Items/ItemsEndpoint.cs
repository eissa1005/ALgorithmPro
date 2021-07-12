using Serenity;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = ALgorithmPro.ALgorithm.Repositories.ItemsRepository;
using MyRow = ALgorithmPro.ALgorithm.Entities.ItemsRow;
using ALgorithmPro.Web.Modules.Common.Common;
using System;
using System.Linq;
using System.Collections.Generic;
using ALgorithmPro.Common;

namespace ALgorithmPro.ALgorithm.Endpoints
{
    [Route("Services/ALgorithm/Items/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ItemsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.DetailList.ForEach(e =>
            {
                e.ItemID = request.Entity.ID;
                e.Barcode = AS.IsNullValue(e.Barcode) ? e.Barcode = request.Entity.Item_CD : e.Barcode;
                e.Item_CD = AS.IsNullValue(e.Barcode) ? e.Barcode = request.Entity.Item_CD : e.Barcode;
                e.EnteredBy = CurrentUser.Username;
                e.EntryDate = DateTime.Now;
            });
            return new MyRepository(Context).Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.DetailList.ForEach(e =>
            {
                e.Barcode = AS.IsNullValue(e.Barcode) ? e.Barcode = request.Entity.Item_CD : e.Barcode;
                e.Item_CD = AS.IsNullValue(e.Barcode) ? e.Barcode = request.Entity.Item_CD : e.Barcode;
                e.EnteredBy = CurrentUser.Username;
                e.EntryDate = DateTime.Now;
            });
            return new MyRepository(Context).Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository(Context).Delete(uow, request);
        }
        public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            string SQL = "SELECT  ISNULL(MAX(Item_CD),0) AS MAXNO FROM ASITMS WHERE Status = 1";
            var Query = connection.Query<string>(SQL);
            var MaxNO = Query.ToList().First();
            return GetNextNumberHelper.GetNextNumber(connection, request, MyRow.Fields.Item_CD, MaxNO);
        }

        [HttpPost]
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
