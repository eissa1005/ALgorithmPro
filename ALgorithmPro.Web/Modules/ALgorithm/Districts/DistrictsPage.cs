using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.DistrictsRow))]
    public class DistrictsController : Controller
    {
        [Route("ALgorithm/Districts")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Districts.DistrictsIndex);
        }
    }
}