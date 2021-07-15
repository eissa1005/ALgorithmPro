using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CashReturnRow))]
    public class CashReturnController : Controller
    {
        [Route("ALgorithm/CashReturn")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Transaction.Sales.CashReturn.Header.CashReturnIndex);
        }
    }
}