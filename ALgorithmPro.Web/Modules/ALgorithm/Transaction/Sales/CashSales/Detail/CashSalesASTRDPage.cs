using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CashSalesASTRDRow))]
    public class CashSalesASTRDController : Controller
    {
        [Route("ALgorithm/CashSalesASTRD")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Sales.CashSales.Detail.CashSalesASTRDIndex);
        }
    }
}