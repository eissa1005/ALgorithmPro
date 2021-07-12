using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using ALgorithmPro.Web.Modules.Common.Common;
using ALgorithmPro.Web.Modules.Common;

namespace ALgorithmPro.ALgorithm.Forms
{
    [FormScript("ALgorithm.Districts")]
    [BasedOnRow(typeof(Entities.DistrictsRow), CheckNames = true)]
    public class DistrictsForm
    {
        public String DistrictsID { get; set; }
        public String Name_AR { get; set; }
        public String Name_EN { get; set; }
        public Int64 CityID { get; set; }
        public Status? Status { get; set; }
       
        [Hidden]
        public String EnteredBy { get; set; }

        [Hidden]
        public DateTime EntryDate { get; set; }

        [Hidden]
        public String UpdatedBy { get; set; }

        [Hidden]
        public DateTime UpdateDate { get; set; }
    }
}