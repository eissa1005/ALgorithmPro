using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class ItemsLookup : RowLookupScript<ItemsRow>
    {
        public ItemsLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = ItemsRow.Fields.Item_CD.PropertyName;
            TextField = ItemsRow.Fields.Item_Name_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ItemsRow.Fields;
            query.Distinct(true)
                .Select(fld.Item_CD)
                .Select(fld.Item_Name_AR)
                .Where(
                    new Criteria(fld.Item_CD) != "" &
                    new Criteria(fld.Item_CD).IsNotNull() &
                    new Criteria(fld.Item_Name_AR) != "" &
                    new Criteria(fld.Item_Name_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
