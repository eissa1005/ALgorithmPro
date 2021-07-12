using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class CityLookup : RowLookupScript<CitiesRow>
    {
        public CityLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = CitiesRow.Fields.CityID.PropertyName;
            TextField = CitiesRow.Fields.Name_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = CitiesRow.Fields;
            query.Distinct(true)
                .Select(fld.CityID)
                .Select(fld.Name_AR)
                .Select(fld.RegionID)
                .Where(
                    new Criteria(fld.CityID) != "" &
                    new Criteria(fld.CityID).IsNotNull() &
                    new Criteria(fld.Name_AR) != "" &
                    new Criteria(fld.Name_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
