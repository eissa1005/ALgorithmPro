using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ALgorithmPro.ALgorithm.Pages
{

    [PageAuthorize(typeof(Entities.CashPayedRow))]
    public class ExpensesController : Controller
    {
        [Route("ALgorithm/Cash/Expenses")]
        public ActionResult Index()
        {
            return View(MVC.Views.ALgorithm.Cash.Expenses.ExpensesIndex);
        }
    }
}