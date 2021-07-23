using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CashReceiveRow))]
    public class CashReceiveController : Controller
    {
        [Route("ALgorithm/Cash/CashReceive")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Cash.CashReceive.CashReceiveIndex);
        }
    }
}