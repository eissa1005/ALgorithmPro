using Serenity.Web;
using ALgorithmPro.Model.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.Model.Pages
{

    [PageAuthorize(typeof(ASTRHVIEWRow))]
    public class ASTRHVIEWController : Controller
    {
        [Route("Model/ASTRHVIEW")]
        public ActionResult Index()
        {
            return View("~/Modules/Model/ASTRHVIEW/ASTRHVIEWIndex.cshtml");
        }
    }
}