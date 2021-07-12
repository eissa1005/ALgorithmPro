using Serenity;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = ALgorithmPro.ALgorithm.Repositories.ItemsLocRepository;
using MyRow = ALgorithmPro.ALgorithm.Entities.ItemsLocRow;
using ALgorithmPro.Web.Modules.ALgorithm.ItemsLoc;
using ALgorithmPro.Web.Modules.Common.Common;
using System;
using System.Linq;
using Serenity.Reporting;
using Serenity.Web;

namespace ALgorithmPro.ALgorithm.Endpoints
{
    [Route("Services/ALgorithm/ItemsLoc/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ItemsLocController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
           string FunctionName = "CheckItemloc";
           string StoreID = "'" + request.Entity.StoreID + "'";
           string Item_CD = "'" + request.Entity.Item_CD + "'";
           try
           {
               //var Result= DbConnections.(uow.Connection.ConnectionString, FunctionName, StoreID, Item_CD);
               //if (!Result)
               //{
                 
               //    request.Entity.BAL = request.Entity.BGNBAL + request.Entity.INQTY - request.Entity.OUTQTY;
               //    request.Entity.EnteredBy = CurrentUser.Username;
               //    request.Entity.EntryDate = DateTime.Now;
               //    return new MyRepository(Context).Create(uow, request);
               //}
               //else
               //{
                   var Query = "SELECT ID FROM ASITMLOC Where StoreID =" + StoreID + " AND Item_CD=" + Item_CD;
                   var Items = uow.Connection.Query<long>(Query);
                   long ID = Items.ToList().FirstOrDefault();
                   request.EntityId = ID;
                   request.Entity.BAL = request.Entity.BGNBAL + request.Entity.INQTY - request.Entity.OUTQTY;
                   request.Entity.UpdatedBy = CurrentUser.Username;
                   request.Entity.UpdateDate = DateTime.Now;
                return new MyRepository(Context).Update(uow, request); 
               //}
           }
           catch (Exception ex)
           {
               ex.Message.ToString();
               return null;
           }
           finally
           {
              // DbConnections.StoreProcedure(uow.Connection.ConnectionString, "ADJITMLOCBAL");
           }
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.BAL = request.Entity.BGNBAL + request.Entity.INQTY - request.Entity.OUTQTY;
            request.Entity.UpdatedBy = CurrentUser.Username;
            request.Entity.UpdateDate = DateTime.Now;
           // DbConnections.StoreProcedure(uow.Connection.ConnectionString, "ADJITMLOCBAL");
            return new MyRepository(Context).Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository(Context).Delete(uow, request);
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
        
        public ItemsResponse ValidateUniqueConstraint(IDbConnection connection, ItemsValidationRequest request)
        {
            var service = new ItemsResponse();
            bool IsValid = !connection.Exists<MyRow>(MyRow.Fields.Item_CD == request.ItemCD && MyRow.Fields.StoreID == request.StoreID);

            if (!IsValid)
            {
                service.Errors = "This value has already been entered for this ItemCD.";
            }
            return service;
        }
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.ItemsLocColumns), HttpContext.RequestServices);
            var bytes = ReportRepository.Render(report);
            return ExcelContentResult.Create(bytes, "ItemslocList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }


    }
}
