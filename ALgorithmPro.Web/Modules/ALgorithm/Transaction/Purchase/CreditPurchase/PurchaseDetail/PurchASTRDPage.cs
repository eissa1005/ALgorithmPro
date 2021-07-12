using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.PurchASTRDRow))]
    public class PurchASTRDController : Controller
    {
        [Route("ALgorithm/PurchASTRD")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Purchase.CreditPurchase.PurchaseDetail.PurchASTRDIndex);
        }
    }
}