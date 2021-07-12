using Serenity.Services;

namespace ALgorithmPro
{
    public class GetNextNumberRequest : ServiceRequest
    {
        public string Prefix { get; set; }
        public int Length { get; set; }
        public string StoreID { get; set; }
        public int TR_TY { get; set; }
    }

    public class GetNextNumberResponse : ServiceResponse
    {
        public string Number { get; set; }
        public string Serial { get; set; }
    }
}