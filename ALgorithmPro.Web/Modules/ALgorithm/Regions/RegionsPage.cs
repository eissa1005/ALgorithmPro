using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.RegionsRow))]
    public class RegionsController : Controller
    {
        [Route("ALgorithm/Regions")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Regions.RegionsIndex);
        }
    }
}