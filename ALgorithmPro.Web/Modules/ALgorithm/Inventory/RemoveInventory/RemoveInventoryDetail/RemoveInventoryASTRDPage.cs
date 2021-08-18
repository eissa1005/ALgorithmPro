using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.RemoveInventoryASTRDRow))]
    public class RemoveInventoryASTRDController : Controller
    {
        [Route("ALgorithm/RemoveInventoryASTRD")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Inventory.RemoveInventory.RemoveInventoryDetail.RemoveInventoryASTRDIndex);
        }
    }
}