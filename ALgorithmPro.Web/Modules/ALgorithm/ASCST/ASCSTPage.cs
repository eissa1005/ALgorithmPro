using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.ASCSTRow))]
    public class ASCSTController : Controller
    {
        [Route("ALgorithm/ASCST")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.ASCST.ASCSTIndex);
        }
    }
}