using ALgorithmPro.Reports;
using DevExpress.Compatibility.System.Web;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Serenity.Reporting;
using Serenity.Services;
using System;
using System.Collections.Generic;
using Controller = Microsoft.AspNetCore.Mvc.Controller;

namespace ALgorithmPro
{
    [Route("ALgorithm/TransferTo/[action]")]
    public class TransferToControl : Controller
    {
        protected EnvironmentSettings EnvironmentSettings { get; }
        protected IReportRegistry ReportRegistry { get; }
        protected IRequestContext Context { get; }
        protected IWebHostEnvironment HostEnvironment { get; }
        public TransferToControl(IReportRegistry reportRegistry, IRequestContext context,
             IWebHostEnvironment hostEnvironment, IOptions<EnvironmentSettings> environmentSettings = null)
        {
            ReportRegistry = reportRegistry ??
                throw new ArgumentNullException(nameof(reportRegistry));

            Context = context ??
                throw new ArgumentNullException(nameof(context));

            HostEnvironment = hostEnvironment ??
                throw new ArgumentNullException(nameof(hostEnvironment));

            EnvironmentSettings = environmentSettings?.Value;
        }
        public IActionResult Index(string key, string opt)
        {
            if (!AS.IsNullValue(opt))
            {
                var JSONObj = new JavaScriptSerializer().Deserialize<Dictionary<string, string>>(opt);
                var DetailID = JSONObj["DetailID"];
                ViewBag.DetailID = DetailID;
            }
           
            return View(MVC.Views.ALgorithm.Transfer.TransferTo.TransferToHeader.TransferToInvoice);

        }
        public IActionResult Error()
        {
            Model.ErrorModel model = new Model.ErrorModel();
            return View(model);
        }

        public IActionResult Designer()
        {
            ReportDesignerModel model = new ReportDesignerModel();
            return View(model);
        }
        public IActionResult Viewer()
        {
            return View();
        }
    }
}
