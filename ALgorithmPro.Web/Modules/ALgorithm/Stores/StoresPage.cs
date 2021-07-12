using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.StoresRow))]
    public class StoresController : Controller
    {
        [Route("ALgorithm/Stores")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Stores.StoresIndex);
        }
    }
}