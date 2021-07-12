using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class StoreLookup : RowLookupScript<StoresRow>
    {
        public StoreLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = StoresRow.Fields.StoreID.PropertyName;
            TextField = StoresRow.Fields.Store_Name_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = StoresRow.Fields;
            query.Distinct(true)
                .Select(fld.StoreID)
                .Select(fld.Store_Name_AR)
                .Where(
                    new Criteria(fld.StoreID) != "" &
                    new Criteria(fld.StoreID).IsNotNull() &
                    new Criteria(fld.Store_Name_AR) != "" &
                    new Criteria(fld.Store_Name_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
