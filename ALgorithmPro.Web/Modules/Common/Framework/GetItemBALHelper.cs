using Serenity.Data;
using System.Collections.Generic;
using System.Data;

namespace ALgorithmPro
{
    public static class GetItemBALHelper
    {
        public static GetItemBALResponse GetItemBAL(IDbConnection connection, GetItemBALRequest request)
        {
            var response = new GetItemBALResponse();
            var dictionary = new Dictionary<string, object>();
            dictionary.Add("@StoreID", request.StoreID);
            dictionary.Add("@Item_CD", request.Item_CD);
            var obj = AS.GetItemBAL(connection, Contstants.StoredName.SP_ItemBAL, dictionary);
            response.ItemBAL =AS.ToDouble(obj);
            return response;

        }
    }
}
