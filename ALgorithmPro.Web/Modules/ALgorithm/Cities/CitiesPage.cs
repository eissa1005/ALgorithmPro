using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CitiesRow))]
    public class CitiesController : Controller
    {
        [Route("ALgorithm/Cities")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Cities.CitiesIndex);
        }
    }
}