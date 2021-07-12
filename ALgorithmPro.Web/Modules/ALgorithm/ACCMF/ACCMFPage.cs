using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.ACCMFRow))]
    public class ACCMFController : Controller
    {
        [Route("ALgorithm/Account")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.ACCMF.ACCMFIndex);
        }
    }
}