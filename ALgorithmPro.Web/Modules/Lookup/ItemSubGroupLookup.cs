using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class ItemSubGroupLookup : RowLookupScript<ItemSubGroupsRow>
    {
        public ItemSubGroupLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = ItemSubGroupsRow.Fields.CITM_CD.PropertyName;
            TextField = ItemSubGroupsRow.Fields.Name_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ItemSubGroupsRow.Fields;
            query.Distinct(true)
                .Select(fld.CITM_CD)
                .Select(fld.Name_AR)
                .Where(
                    new Criteria(fld.CITM_CD) != "" &
                    new Criteria(fld.CITM_CD).IsNotNull() &
                    new Criteria(fld.Name_AR) != "" &
                    new Criteria(fld.Name_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
