using ALgorithmPro.ALgorithm;
using ALgorithmPro.Reports;
using DevExpress.XtraReports.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ALgorithmPro.Reports
{
    public static class ReportsFactory
    {
       
        public static Dictionary<string, Func<XtraReport>> Reports = new Dictionary<string, Func<XtraReport>>()
        {
            ["CashPurchInvoice"] = () => new CashPurchInvoice(),
            ["PurchInvoice"] = () => new PurchInvoice(),
            ["CashSalesInvoice"] = () => new CashSalesInvoice(),
            ["SalesInvoice"] = () => new SalesInvoice(),
        };
    }
}
