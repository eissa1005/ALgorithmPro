using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class SUMSLookup : RowLookupScript<SUMSRow>
    {
        public SUMSLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = SUMSRow.Fields.SUM_CD.PropertyName;
            TextField = SUMSRow.Fields.SUM_NM_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = SUMSRow.Fields;
            query.Distinct(true)
                .Select(fld.SUM_CD)
                .Select(fld.SUM_NM_AR)
                .Where(
                    new Criteria(fld.SUM_CD) != "" &
                    new Criteria(fld.SUM_CD).IsNotNull() &
                    new Criteria(fld.SUM_NM_AR) != "" &
                    new Criteria(fld.SUM_NM_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
