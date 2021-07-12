using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.ItemsLocRow))]
    public class ItemsLocController : Controller
    {
        [Route("ALgorithm/ItemsLoc")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.ItemsLoc.ItemsLocIndex);
        }
    }
}