using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.PackageRow))]
    public class PackageController : Controller
    {
        [Route("ALgorithm/Package")]
        public ActionResult Index()
        {
            return View("~/Modules/ALgorithm/Package/PackageIndex.cshtml");
        }
    }
}