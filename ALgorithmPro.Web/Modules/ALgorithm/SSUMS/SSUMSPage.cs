using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.SSUMSRow))]
    public class SSUMSController : Controller
    {
        [Route("ALgorithm/SSUMS")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.SSUMS.SSUMSIndex);
        }
    }
}