using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.ReturnASTRHRow))]
    public class ReturnASTRHController : Controller
    {
        [Route("ALgorithm/ReturnASTRH")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Sales.ReturnSales.ReturnHeader.ReturnASTRHIndex);
        }
    }
}