using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class CSTLookup : RowLookupScript<ASCSTRow>
    {
        public CSTLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = ASCSTRow.Fields.CST_CD.PropertyName;
            TextField = ASCSTRow.Fields.CST_NM_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ASCSTRow.Fields;
            query.Distinct(true)
                .Select(fld.CST_CD)
                .Select(fld.CST_NM_AR)
                .Where(
                    new Criteria(fld.CST_CD) != "" &
                    new Criteria(fld.CST_CD).IsNotNull() &
                    new Criteria(fld.CST_NM_AR) != "" &
                    new Criteria(fld.CST_NM_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
