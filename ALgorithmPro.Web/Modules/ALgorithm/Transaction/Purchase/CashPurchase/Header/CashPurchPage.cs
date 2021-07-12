using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CashPurchRow))]
    public class CashPurchASTRHController : Controller
    {
        [Route("ALgorithm/CashPurch")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Purchase.CashPurchase.Header.CashPurchIndex);
        }
    }
}