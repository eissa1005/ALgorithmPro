using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.TransferInRow))]
    public class TransferInController : Controller
    {
        [Route("ALgorithm/TransferIn")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transfer.TransferIn.TransferInHeader.TransferInIndex);
        }
    }
}