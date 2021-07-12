using Serenity.Data;
using System.Data;
using System.Linq;

namespace ALgorithmPro
{
    public static class GetNextNumberHelper
    {
        public static GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request,
            Field field, string MaxNO)
        {
            var response = new GetNextNumberResponse();
            response.Number = AS.GetMaxNumberInString(MaxNO);
            response.Serial = response.Number.ToString();

            return response;
            
        }
    }
}