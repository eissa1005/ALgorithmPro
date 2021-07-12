using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CashSalesRow))]
    public class CashSalesController : Controller
    {
        [Route("ALgorithm/CashSales")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Sales.CashSales.Header.CashSalesIndex);
        }
    }
}