using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CashPayedRow))]
    public class RevenuesController : Controller
    {
        [Route("ALgorithm/Cash/Revenues")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Cash.Revenues.RevenuesIndex);
        }
    }
}