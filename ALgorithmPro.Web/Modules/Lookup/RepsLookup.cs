using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class RepsLookup : RowLookupScript<REPSRow>
    {
        public RepsLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = REPSRow.Fields.REP_CD.PropertyName;
            TextField = REPSRow.Fields.REP_NAME.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = REPSRow.Fields;
            query.Distinct(true)
                .Select(fld.REP_CD)
                .Select(fld.REP_NAME)
                .Where(
                    new Criteria(fld.REP_CD) != "" &
                    new Criteria(fld.REP_CD).IsNotNull() &
                    new Criteria(fld.REP_NAME) != "" &
                    new Criteria(fld.REP_NAME).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
