using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.PurchaseRow))]
    public class PurchaseController : Controller
    {
        [Route("ALgorithm/Purchase")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Purchase.CreditPurchase.PurchaseHeader.PurchaseIndex);
        }
    }
}