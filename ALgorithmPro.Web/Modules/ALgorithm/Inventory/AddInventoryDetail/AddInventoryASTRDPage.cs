using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.AddInventoryASTRDRow))]
    public class AddInventoryASTRDController : Controller
    {
        [Route("ALgorithm/AddInventoryASTRD")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Inventory.AddInventoryDetail.AddInventoryASTRDIndex);
        }
    }
}