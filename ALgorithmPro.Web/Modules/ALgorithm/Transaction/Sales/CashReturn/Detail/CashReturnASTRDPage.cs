using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CashReturnASTRDRow))]
    public class CashReturnASTRDController : Controller
    {
        [Route("ALgorithm/CashReturnASTRD")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Sales.CashReturn.Detail.CashReturnASTRDIndex);
        }
    }
}