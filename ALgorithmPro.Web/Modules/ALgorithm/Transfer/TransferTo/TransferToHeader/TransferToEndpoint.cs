﻿using System;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = ALgorithmPro.ALgorithm.Repositories.TransferToRepository;
using MyRow = ALgorithmPro.ALgorithm.Entities.TransferToRow;
using Serenity.Reporting;
using Serenity.Web;

namespace ALgorithmPro.ALgorithm.Endpoints
{
    [Route("Services/ALgorithm/TransferTo/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class TransferToController : ServiceEndpoint
    {
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.TransferToColumns), HttpContext.RequestServices);
            var bytes = ReportRepository.Render(report);
            return ExcelContentResult.Create(bytes, "DetailList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}

