using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.ReturnSalesRow))]
    public class ReturnSalesController : Controller
    {
        [Route("ALgorithm/ReturnSales")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Sales.ReturnSales.ReturnHeader.ReturnSalesIndex);
        }
    }
}