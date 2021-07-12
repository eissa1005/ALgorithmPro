using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.REPSRow))]
    public class REPSController : Controller
    {
        [Route("ALgorithm/REPS")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.REPS.REPSIndex);
        }
    }
}