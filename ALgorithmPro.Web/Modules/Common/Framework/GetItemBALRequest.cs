using Serenity.Services;
using System;

namespace ALgorithmPro
{
    public class GetItemBALRequest: ServiceRequest
    {
        public string StoreID { get; set; }
        public string Item_CD { get; set; }
    }

    public class GetItemBALResponse : ServiceRequest
    {
        public double ItemBAL { get; set; }
    }
}
