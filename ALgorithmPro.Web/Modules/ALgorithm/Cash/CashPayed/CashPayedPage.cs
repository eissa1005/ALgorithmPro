using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CashPayedRow))]
    public class CashPayedController : Controller
    {
        [Route("ALgorithm/Cash/CashPayed")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Cash.CashPayed.CashPayedIndex);
        }
    }
}