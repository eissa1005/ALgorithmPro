﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = ALgorithmPro.ALgorithm.Repositories.RemoveInventoryRepository;
using MyRow = ALgorithmPro.ALgorithm.Entities.RemoveInventoryRow;
using System.Linq;
using ALgorithmPro.Web.Modules.Common;
using System;
using Serenity.Reporting;
using Serenity.Web;

namespace ALgorithmPro.ALgorithm.Endpoints
{
    [Route("Services/ALgorithm/Corrupted/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CorruptedController : ServiceEndpoint
    {

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.EnteredBy = CurrentUser.Username;
            request.Entity.EntryDate = DateTime.Now.Date;
            return new MyRepository(Context).Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.EnteredBy = CurrentUser.Username;
            request.Entity.EntryDate = DateTime.Now.Date;
            return new MyRepository(Context).Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository(Context).Delete(uow, request);
        }
        public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            string SQL = "SELECT ISNULL(MAX(TR_NO),0) AS MAXNO FROM ASTRH WHERE Status = 1 AND TR_TY=" + (int)TRTYType.AddInventory + " AND StoreID=" + request.StoreID + "";
            var Query = connection.Query<string>(SQL);
            var MaxNO = Query.ToList().First();
            return GetNextNumberHelper.GetNextNumber(connection, request, MyRow.Fields.TR_NO, MaxNO);
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
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.RemoveInventoryColumns), HttpContext.RequestServices);
            var bytes = ReportRepository.Render(report);
            return ExcelContentResult.Create(bytes, "DetailList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
