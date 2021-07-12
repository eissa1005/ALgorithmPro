using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.ItemGroupsRow))]
    public class ItemGroupsController : Controller
    {
        [Route("ALgorithm/ItemGroups")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.ItemGroups.ItemGroupsIndex);
        }
    }
}