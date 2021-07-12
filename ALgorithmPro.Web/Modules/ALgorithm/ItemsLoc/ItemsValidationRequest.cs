using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ALgorithmPro.Web.Modules.ALgorithm.ItemsLoc
{
    public class ItemsValidationRequest : ServiceRequest
    {
        public string ItemCD { get; set; }
        public string StoreID { get; set; }
    }
}
