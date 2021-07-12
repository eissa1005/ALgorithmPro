﻿using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CashReturnASTRHRow))]
    public class CashReturnASTRHController : Controller
    {
        [Route("ALgorithm/CashReturnASTRH")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Sales.CashReturn.Header.CashReturnASTRHIndex);
        }
    }
}