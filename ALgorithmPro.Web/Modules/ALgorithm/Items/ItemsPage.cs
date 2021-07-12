using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.ItemsRow))]
    public class ItemsController : Controller
    {
        [Route("ALgorithm/Items")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Items.ItemsIndex);
        }
    }
}