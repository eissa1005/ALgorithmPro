using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CurrencyRow))]
    public class CurrencyController : Controller
    {
        [Route("ALgorithm/Currency")]
        public ActionResult Index()
        {
            return View("~/Modules/ALgorithm/Currency/CurrencyIndex.cshtml");
        }
    }
}