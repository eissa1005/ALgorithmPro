using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.BranchRow))]
    public class BranchController : Controller
    {
        [Route("ALgorithm/Branch")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Branch.BranchIndex);
        }
    }
}