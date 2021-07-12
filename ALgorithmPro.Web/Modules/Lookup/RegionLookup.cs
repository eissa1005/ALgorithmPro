using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;

namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class RegionLookup : RowLookupScript<RegionsRow>
    {
        public RegionLookup(ISqlConnections sqlConnections): base(sqlConnections)
        {
            IdField  = RegionsRow.Fields.RegionID.PropertyName;
            TextField = RegionsRow.Fields.Name_AR.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = RegionsRow.Fields;
            query.Distinct(true)
                .Select(fld.RegionID)
                .Select(fld.Name_AR)
                .Where(
                    new Criteria(fld.RegionID) != "" &
                    new Criteria(fld.RegionID).IsNotNull() &
                    new Criteria(fld.Name_AR) != "" &
                    new Criteria(fld.Name_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {
           
        }

    }
}
