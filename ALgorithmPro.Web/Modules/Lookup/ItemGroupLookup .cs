using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class ItemGroupLookup : RowLookupScript<ItemGroupsRow>
    {
        public ItemGroupLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = ItemGroupsRow.Fields.MITM_CD.PropertyName;
            TextField = ItemGroupsRow.Fields.Name_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ItemGroupsRow.Fields;
            query.Distinct(true)
                .Select(fld.MITM_CD)
                .Select(fld.Name_AR)
                .Where(
                    new Criteria(fld.MITM_CD) != "" &
                    new Criteria(fld.MITM_CD).IsNotNull() &
                    new Criteria(fld.Name_AR) != "" &
                    new Criteria(fld.Name_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
