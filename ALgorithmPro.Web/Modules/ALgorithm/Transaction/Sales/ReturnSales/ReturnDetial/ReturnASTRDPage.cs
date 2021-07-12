using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.ReturnASTRDRow))]
    public class ReturnASTRDController : Controller
    {
        [Route("ALgorithm/ReturnASTRD")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Sales.ReturnSales.ReturnDetial.ReturnASTRDIndex);
        }
    }
}