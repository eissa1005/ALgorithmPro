using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class BranchLookup : RowLookupScript<BranchRow>
    {
        public BranchLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = BranchRow.Fields.BranchID.PropertyName;
            TextField = BranchRow.Fields.Name_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = BranchRow.Fields;
            query.Distinct(true)
                .Select(fld.BranchID)
                .Select(fld.Name_AR)
                .Where(
                    new Criteria(fld.BranchID) != "" &
                    new Criteria(fld.BranchID).IsNotNull() &
                    new Criteria(fld.Name_AR) != "" &
                    new Criteria(fld.Name_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
