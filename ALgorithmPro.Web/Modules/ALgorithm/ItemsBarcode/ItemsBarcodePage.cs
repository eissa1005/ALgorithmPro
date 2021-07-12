using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.ItemsBarcodeRow))]
    public class ItemsBarcodeController : Controller
    {
        [Route("ALgorithm/ItemsBarcode")]
        public ActionResult Index()
        {
            return View("~/Modules/ALgorithm/ItemsBarcode/ItemsBarcodeIndex.cshtml");
        }
    }
}