using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CorruptedASTRDRow))]
    public class CorruptedASTRDController : Controller
    {
        [Route("ALgorithm/CorruptedASTRD")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Inventory.Corrupted.CorruptedDetail.CorruptedASTRDIndex);
        }
    }
}