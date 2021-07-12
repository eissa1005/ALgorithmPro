using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class PriceLookup : RowLookupScript<PriceTypesRow>
    {
        public PriceLookup(ISqlConnections sqlConnections):base(sqlConnections)
        {
            IdField = PriceTypesRow.Fields.PriceId.PropertyName;
            TextField = PriceTypesRow.Fields.NameAr.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PriceTypesRow.Fields;
            query.Distinct(true)
                .Select(fld.PriceId)
                .Select(fld.NameAr)
                .Where(
                    new Criteria(fld.PriceId).NotIn(1,2) &
                    new Criteria(fld.PriceId).IsNotNull() &
                    new Criteria(fld.NameAr) != "" &
                    new Criteria(fld.NameAr).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {
           
        }
    }
}
