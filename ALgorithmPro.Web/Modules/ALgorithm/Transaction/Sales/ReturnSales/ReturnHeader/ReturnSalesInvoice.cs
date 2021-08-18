using System;
using System.Linq;
using Serenity.Data;
using System.Collections.Generic;
using ALgorithmPro.ALgorithm.Entities;
using ALgorithmPro.Web.Modules.Common;

namespace ALgorithmPro.Reports
{
    public partial class ReturnSalesInvoice
    {
        public static double ProHeaderID { set; get; }
        public static int? PRNT_CNT { set; get; }
        public ReturnSalesInvoice()
        {
            InitializeComponent();
        }
        public ReturnSalesInvoice(double HeaderID)
        {
            InitializeComponent();
            ProHeaderID = HeaderID;
            Data(HeaderID);
        }
        public void Data(double HeaderID)
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var sqlConnections = serviceScope.ServiceProvider.GetService(typeof(ISqlConnections));
                var connection = ((ISqlConnections)sqlConnections).NewByKey("Default");
                string SQL = "SELECT * FROM ASTRDVIEW WHERE DetailID=" + HeaderID+ " AND TR_TY="+(int)TRTYType.ReturnSales+"";
                var data = connection.Query<ASTRDVIEWRow>(SQL).ToList();
                var ASTRDVIEW = new List<ASTRDVIEWRow>();
                foreach (var ASTRD in data)
                {
                    ASTRD.TR_DT = ASTRD.TR_DT.Value.Date;
                    ASTRDVIEW.Add(ASTRD);
                }
                double NET = ASTRDVIEW.Select(x => x.NET).Sum() ?? 0;
                string NumToWords = AS.NumToWord(NET);
                Report.DataSource = ASTRDVIEW.ToList();

            }
        }

        private void xrNumWord_BeforePrint(object sender, System.Drawing.Printing.PrintEventArgs e)
        {
            object value = AS.ToDouble(xrSumNetValue.Text);
            string NumToWords = AS.NumToWord(value);
            xrNumWord.Text = NumToWords;
        }

        private void CashPurchInvoice_AfterPrint(object sender, EventArgs e)
        {
            try
            {
                using (var serviceScope = ServiceActivator.GetScope())
                {
                    var sqlConnections = serviceScope.ServiceProvider.GetService(typeof(ISqlConnections));
                    using (var connection = ((ISqlConnections)sqlConnections).NewByKey("Default"))
                    {
                        var untwork = new UnitOfWork(connection);
                        string SQL = "SELECT * FROM ASTRDVIEW WHERE DetailID=" + ProHeaderID + " AND TR_TY=" + (int)TRTYType.ReturnSales + "";
                        var ASTRH = untwork.Connection.Query<ReturnSalesRow>(SQL).FirstOrDefault();
                        if (ASTRH != null && ASTRH.PRT_CNT == 0)
                        {
                            PRNT_CNT = 0;
                            ASTRH.PRT_CNT += 1;
                            untwork.Connection.UpdateById<ReturnSalesRow>(ASTRH, ExpectedRows.ZeroOrOne);
                            xrIMGCNT.Text = "«’· ";
                        }
                        else if (ASTRH != null && ASTRH.PRT_CNT > 0)
                        {
                            PRNT_CNT = ASTRH.PRT_CNT;
                            xrIMGCNT.Text = "’Ê—… ";
                        }
                    }
                }
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
            }
        }

    }
}
