using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.RemoveInventoryRow))]
    public class RemoveInventoryController : Controller
    {
        [Route("ALgorithm/RemoveInventory")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Inventory.RemoveInventory.RemoveInventoryHeader.RemoveInventoryIndex);
        }
    }
}