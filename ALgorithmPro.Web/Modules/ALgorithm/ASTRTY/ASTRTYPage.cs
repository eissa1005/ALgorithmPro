using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.ASTRTYRow))]
    public class ASTRTYController : Controller
    {
        [Route("ALgorithm/ASTRTY")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.ASTRTY.ASTRTYIndex);
        }
    }
}