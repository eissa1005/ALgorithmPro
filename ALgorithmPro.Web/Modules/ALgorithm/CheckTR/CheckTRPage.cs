using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CheckTRRow))]
    public class CheckTRController : Controller
    {
        [Route("ALgorithm/CheckTR")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.CheckTR.CheckTRIndex);
        }
    }
}