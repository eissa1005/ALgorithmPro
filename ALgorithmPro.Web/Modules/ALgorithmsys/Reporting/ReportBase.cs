using Serenity;
using Serenity.Reporting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace AS
{
    public partial class ListReportBase : ReportBase
    {
        public ListReportRequest Request { get; set; }
    }

    public partial class EntityReportBase : ReportBase
    {
        public EntityReportRequest Request { get; set; }
    }

    public abstract class ReportBase : ICustomizeHtmlToPdf
    {

        public virtual void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            options.Landscape = false;
            options.PageSize = "A4";
            options.MarginsAll = "1.2cm";
            options.FooterHtmlUrl = "Modules/AS/Reporting/ReportFooter.html";
            options.SmartShrinking = true;
        }

    }
}
