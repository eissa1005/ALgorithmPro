using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.PriceTypesRow))]
    public class PriceTypesController : Controller
    {
        [Route("ALgorithm/PriceTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/ALgorithm/PriceTypes/PriceTypesIndex.cshtml");
        }
    }
}