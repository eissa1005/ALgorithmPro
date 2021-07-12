using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class SSUMSLookup : RowLookupScript<SSUMSRow>
    {
        public SSUMSLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = SSUMSRow.Fields.SSUM_CD.PropertyName;
            TextField = SSUMSRow.Fields.SSUM_NM_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = SSUMSRow.Fields;
            query.Distinct(true)
                .Select(fld.SSUM_CD)
                .Select(fld.SSUM_NM_AR)
                .Where(
                    new Criteria(fld.SSUM_CD) != "" &
                    new Criteria(fld.SSUM_CD).IsNotNull() &
                    new Criteria(fld.SSUM_NM_AR) != "" &
                    new Criteria(fld.SSUM_NM_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
