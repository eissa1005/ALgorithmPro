using Serenity.Web;
using Microsoft.AspNetCore.Mvc;
using ALgorithmPro.Model.Entities;

namespace ALgorithmPro.Model.Pages
{

    [PageAuthorize(typeof(ASTRDVIEWRow))]
    public class ASTRDVIEWController : Controller
    {
        [Route("Model/ASTRDVIEW")]
        public ActionResult Index()
        {
            return View("~/Modules/Model/ASTRDVIEW/ASTRDVIEWIndex.cshtml");
        }
    }
}