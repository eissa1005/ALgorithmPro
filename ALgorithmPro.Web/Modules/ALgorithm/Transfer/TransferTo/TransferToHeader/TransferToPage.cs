using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.TransferToRow))]
    public class TransferToController : Controller
    {
        [Route("ALgorithm/TransferTo")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transfer.TransferTo.TransferToHeader.TransferToIndex);
        }
    }
}