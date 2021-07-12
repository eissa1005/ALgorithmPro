using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.SupervisorsRow))]
    public class SupervisorsController : Controller
    {
        [Route("ALgorithm/Supervisors")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Supervisors.SupervisorsIndex);
        }
    }
}