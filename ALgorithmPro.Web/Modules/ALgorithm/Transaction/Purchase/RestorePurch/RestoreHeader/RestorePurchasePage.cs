using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.RestorePurchaseRow))]
    public class RestorePurchaseController : Controller
    {
        [Route("ALgorithm/RestorePurchase")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Purchase.RestorePurch.RestoreHeader.RestorePurchaseIndex);
        }
    }
}