using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.TransferToASTRDRow))]
    public class TransferToASTRDController : Controller
    {
        [Route("ALgorithm/TransferToASTRD")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transfer.TransferTo.TransferToDetail.TransferToASTRDIndex);
        }
    }
}