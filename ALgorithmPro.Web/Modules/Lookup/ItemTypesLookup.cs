using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class ItemTypesLookup : RowLookupScript<ItemTypesRow>
    {
        public ItemTypesLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = ItemTypesRow.Fields.ItemtypeId.PropertyName;
            TextField = ItemTypesRow.Fields.NameAr.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ItemTypesRow.Fields;
            query.Distinct(true)
                .Select(fld.ItemtypeId)
                .Select(fld.NameAr)
                .Where(
                    new Criteria(fld.ItemtypeId) != "" &
                    new Criteria(fld.ItemtypeId).IsNotNull() &
                    new Criteria(fld.NameAr) != "" &
                    new Criteria(fld.NameAr).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
