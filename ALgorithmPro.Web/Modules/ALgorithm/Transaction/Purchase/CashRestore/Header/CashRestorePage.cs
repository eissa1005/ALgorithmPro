using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CashRestoreRow))]
    public class CashRestoreController : Controller
    {
        [Route("ALgorithm/CashRestore")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Purchase.CashRestore.Header.CashRestoreIndex);
        }
    }
}