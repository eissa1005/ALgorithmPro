using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CashRestoreASTRHRow))]
    public class CashRestoreASTRHController : Controller
    {
        [Route("ALgorithm/CashRestoreASTRH")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Purchase.CashRestore.Header.CashRestoreASTRHIndex);
        }
    }
}