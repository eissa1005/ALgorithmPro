using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.SalesRow))]
    public class SalesController : Controller
    {
        [Route("ALgorithm/Sales")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Sales.CreditSales.SalesHeader.SalesIndex);
        }
    }
}