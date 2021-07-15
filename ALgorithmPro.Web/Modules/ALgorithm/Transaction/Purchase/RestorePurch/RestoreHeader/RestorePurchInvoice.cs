using System;
using System.Linq;
using Serenity.Data;
using System.Collections.Generic;
using ALgorithmPro.ALgorithm.Entities;

namespace ALgorithmPro.Reports
{
    public partial class RestorePurchInvoice
    {
        public static double ProHeaderID { set; get; }
        public static int? PRNT_CNT { set; get; }
        public RestorePurchInvoice()
        {
            InitializeComponent();
           
        }
        public RestorePurchInvoice(double HeaderID)
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
                var data = connection.Query<ASTRDVIEWRow>("SELECT * FROM ASTRDVIEW WHERE HeaderID="+HeaderID).ToList();
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
                        var ASTRH = untwork.Connection.Query<RestorePurchaseRow>("SELECT * FROM ASTRH WHERE HeaderID=" + ProHeaderID).FirstOrDefault();
                        if (ASTRH != null && ASTRH.PRT_CNT == 0)
                        {
                            PRNT_CNT = 0;
                            ASTRH.PRT_CNT += 1;
                            untwork.Connection.UpdateById<RestorePurchaseRow>(ASTRH, ExpectedRows.ZeroOrOne);
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
