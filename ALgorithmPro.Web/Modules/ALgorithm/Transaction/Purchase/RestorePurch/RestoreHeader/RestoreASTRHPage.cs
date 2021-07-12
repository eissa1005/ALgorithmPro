using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.RestoreASTRHRow))]
    public class RestoreASTRHController : Controller
    {
        [Route("ALgorithm/RestoreASTRH")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Purchase.RestorePurch.RestoreHeader.RestoreASTRHIndex);
        }
    }
}