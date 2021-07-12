using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.SalesASTRDRow))]
    public class SalesASTRDController : Controller
    {
        [Route("ALgorithm/SalesASTRD")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Sales.CreditSales.SalesDetail.SalesASTRDIndex);
        }
    }
}