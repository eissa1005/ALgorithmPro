using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class DistrictsLookup : RowLookupScript<DistrictsRow>
    {
        public DistrictsLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = DistrictsRow.Fields.DistrictsID.PropertyName;
            TextField = DistrictsRow.Fields.Name_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = DistrictsRow.Fields;
            query.Distinct(true)
                .Select(fld.DistrictsID)
                .Select(fld.Name_AR)
                .Select(fld.CityID)
                .Where(
                    new Criteria(fld.DistrictsID) != "" &
                    new Criteria(fld.DistrictsID).IsNotNull() &
                    new Criteria(fld.Name_AR) != "" &
                    new Criteria(fld.Name_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
