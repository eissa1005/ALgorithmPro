using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.TransferInASTRDRow))]
    public class TransferInASTRDController : Controller
    {
        [Route("ALgorithm/TransferInASTRD")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transfer.TransferIn.TransferInDetail.TransferInASTRDIndex);
        }
    }
}