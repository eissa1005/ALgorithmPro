using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CorruptedRow))]
    public class CorruptedController : Controller
    {
        [Route("ALgorithm/Corrupted")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Inventory.AddInventoryHeader.AddInventoryIndex);
        }
    }
}