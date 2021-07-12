using ALgorithmPro;
using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace ALgorithmPro.ALgorithm
{
    [Report("ALgorithm.CashSalesASTRD")]
    [ReportDesign(MVC.Views.ALgorithm.Transaction.Sales.CashSales.Header.CashSalesIDetailReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class CashSalesIDetailReport : IReport, ICustomizeHtmlToPdf
    {
        public ISqlConnections SqlConnections { get; }
        public CashSalesIDetailReport(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public Int32 HeaderID { get; set; }

        public object GetData()
        {
            var data = new CashSalesDetailReportData();

            using (var connection = SqlConnections.NewFor<CashSalesRow>())
            {

                data.ASTRH = connection.TryById<CashSalesRow>(this.HeaderID, q => q.SelectTableFields());

                var od = CashSalesASTRDRow.Fields;
                data.Details = connection.List<CashSalesASTRDRow>(q => q
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

    public class CashSalesDetailReportData
    {
        public CashSalesRow ASTRH { get; set; }
        public List<CashSalesASTRDRow> Details { get; set; }
    }
}