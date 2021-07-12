using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.SUMSRow))]
    public class SUMSController : Controller
    {
        [Route("ALgorithm/SUMS")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.SUMS.SUMSIndex);
        }
    }
}