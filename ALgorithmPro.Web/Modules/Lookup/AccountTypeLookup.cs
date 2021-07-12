using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class AccountTypeLookup : RowLookupScript<AppCodesRow>
    {
        public AccountTypeLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = AppCodesRow.Fields.SEQ.PropertyName;
            TextField = AppCodesRow.Fields.DSCR_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = AppCodesRow.Fields;
            query.Distinct(true)
                .Select(fld.SEQ)
                .Select(fld.DSCR_AR)
                .Where(
                    new Criteria(fld.ID) == 8 &
                    new Criteria(fld.SEQ) != "" &
                    new Criteria(fld.SEQ).IsNotNull() &
                    new Criteria(fld.DSCR_AR) != "" &
                    new Criteria(fld.DSCR_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
