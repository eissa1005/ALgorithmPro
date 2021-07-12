using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Collections;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class CurrencyLookup : RowLookupScript<CurrencyRow>
    {
        public CurrencyLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = CurrencyRow.Fields.CurrencyID.PropertyName;
            TextField = CurrencyRow.Fields.Name_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = CurrencyRow.Fields;
            query.Distinct(true)
                .Select(fld.CurrencyID)
                .Select(fld.Name_AR)
                .Where(
                    new Criteria(fld.CurrencyID) != "" &
                    new Criteria(fld.CurrencyID).IsNotNull() &
                    new Criteria(fld.Name_AR) != "" &
                    new Criteria(fld.Name_AR).IsNotNull() &
                    new Criteria(fld.Status) > 0 );
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
