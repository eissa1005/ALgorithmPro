using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.RestoreASTRDRow))]
    public class RestoreASTRDController : Controller
    {
        [Route("ALgorithm/RestoreASTRD")]
        public ActionResult Index()
        {
            return View("~/Modules/ALgorithm/RestoreASTRD/RestoreASTRDIndex.cshtml");
        }
    }
}