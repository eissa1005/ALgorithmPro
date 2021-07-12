using ALgorithmPro;
using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace ALgorithmPro.ALgorithm
{
    [Report("ALgorithm.CashPurchASTRD")]
    [ReportDesign(MVC.Views.ALgorithm.Transaction.Purchase.CashPurchase.Header.CashPurchDetailReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class CashPurchDetailReport : IReport, ICustomizeHtmlToPdf
    {
        public ISqlConnections SqlConnections { get; }
        public CashPurchDetailReport(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public Int32 HeaderID { get; set; }

        public object GetData()
        {
            var data = new CashPurchDetailReportData();

            using (var connection = SqlConnections.NewFor<CashPurchRow>())
            {

                data.ASTRH = connection.TryById<CashPurchRow>(this.HeaderID, q => q.SelectTableFields());

                var od = CashPurchASTRDRow.Fields;
                data.Details = connection.List<CashPurchASTRDRow>(q => q
                    .SelectTableFields()
                    .Select(od.Item_CD)
                    .Select(od.ITM_NM_AR)
                    .Select(od.PKName)
                    .Select(od.QTY)
                    .Select(od.Price)
                    .Select(od.Value)
                    .Select(od.DISC)
                    .Select(od.NetAfterTAX)
                    .Select(od.STAX_VL)
                    .Select(od.NET)
                    .Select(od.NetBeforeTAX)
                    .Where(od.HeaderID == this.HeaderID));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {

            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
        }
    }

    public class CashPurchDetailReportData
    {
        public CashPurchRow ASTRH { get; set; }
        public List<CashPurchASTRDRow> Details { get; set; }
    }
}