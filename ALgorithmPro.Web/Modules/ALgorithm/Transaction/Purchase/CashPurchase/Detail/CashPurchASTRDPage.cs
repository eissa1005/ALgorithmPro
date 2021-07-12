using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CashPurchASTRDRow))]
    public class CashPurchASTRDController : Controller
    {
        [Route("ALgorithm/CashPurchASTRD")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Purchase.CashPurchase.Detail.CashPurchASTRDIndex);
        }
    }
}