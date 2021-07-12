using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CashRestoreASTRDRow))]
    public class CashRestoreASTRDController : Controller
    {
        [Route("ALgorithm/CashRestoreASTRD")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Purchase.CashRestore.Detail.CashRestoreASTRDIndex);
        }
    }
}