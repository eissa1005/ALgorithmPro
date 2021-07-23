using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.RemoveInventoryRow))]
    public class AddInventoryController : Controller
    {
        [Route("ALgorithm/AddInventory")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Inventory.AddInventoryHeader.AddInventoryIndex);
        }
    }
}