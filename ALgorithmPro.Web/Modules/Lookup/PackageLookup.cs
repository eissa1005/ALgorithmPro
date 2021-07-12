using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class PackageLookup : RowLookupScript<PackageRow>
    {
        public PackageLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = PackageRow.Fields.PKID.PropertyName;
            TextField = PackageRow.Fields.PK_NM_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PackageRow.Fields;
            query.Distinct(true)
                .Select(fld.PKID)
                .Select(fld.PK_NM_AR)
                .Where(
                    new Criteria(fld.PKID) != "" &
                    new Criteria(fld.PKID).IsNotNull() &
                    new Criteria(fld.PK_NM_AR) != "" &
                    new Criteria(fld.PK_NM_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
