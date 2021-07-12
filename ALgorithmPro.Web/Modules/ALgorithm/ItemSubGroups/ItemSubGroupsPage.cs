using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.ItemSubGroupsRow))]
    public class ItemSubGroupsController : Controller
    {
        [Route("ALgorithm/ItemSubGroups")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.ItemSubGroups.ItemSubGroupsIndex);
        }
    }
}