using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.AdjustHeaderRow))]
    public class AdjustHeaderController : Controller
    {
        [Route("ALgorithm/AdjustHeader")]
        public ActionResult Index()
        {
            return View("~/Modules/ALgorithm/AdjustHeader/AdjustHeaderIndex.cshtml");
        }
    }
}