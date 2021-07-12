using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.ChecksRow))]
    public class ChecksController : Controller
    {
        [Route("ALgorithm/Checks")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Checks.ChecksIndex);
        }
    }
}