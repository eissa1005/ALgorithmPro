using ALgorithmPro.Model;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class CheckTRTYLookup : RowLookupScript<CheckTRTYVIEWRow>
    {
        public CheckTRTYLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = CheckTRTYVIEWRow.Fields.TR_TY.PropertyName;
            TextField = CheckTRTYVIEWRow.Fields.Name_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = CheckTRTYVIEWRow.Fields;
            query.Distinct(true)
                .Select(fld.TR_TY)
                .Select(fld.Name_AR)
                .Where(
                    new Criteria(fld.TR_TY) != "" &
                    new Criteria(fld.TR_TY).IsNotNull() &
                    new Criteria(fld.Name_AR) != "" &
                    new Criteria(fld.Name_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
