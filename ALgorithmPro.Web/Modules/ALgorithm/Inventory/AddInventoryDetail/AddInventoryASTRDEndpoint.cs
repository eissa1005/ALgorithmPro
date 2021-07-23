﻿using System.Data;
using Serenity.Data;
using Serenity.Services;
using Microsoft.AspNetCore.Mvc;
using MyRepository = ALgorithmPro.ALgorithm.Repositories.AddInventoryASTRDRepository;
using MyRow = ALgorithmPro.ALgorithm.Entities.AddInventoryASTRDRow;

namespace ALgorithmPro.ALgorithm.Endpoints
{
    [Route("Services/ALgorithm/AddInventoryASTRD/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class AddInventoryASTRDController : ServiceEndpoint
    {
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository(Context).Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }
    }
}

