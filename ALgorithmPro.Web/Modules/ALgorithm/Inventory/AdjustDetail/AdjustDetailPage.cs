using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.AdjustDetailRow))]
    public class AdjustDetialController : Controller
    {
        [Route("ALgorithm/AdjustDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/ALgorithm/AdjustDetail/AdjustDetailIndex.cshtml");
        }
    }
}