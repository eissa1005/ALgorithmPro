using Serenity.Data;
using Serenity.Web;
using System.Linq;

namespace AS
{
    public class SortedLookupScript<TRow> : RowLookupScript<TRow> where TRow : class, IRow, new()
    {
        public SortedLookupScript(ISqlConnections connections) : base(connections) { 
        

        }
        protected override void ApplyOrder(SqlQuery query)
        {
            base.ApplyOrder(query);

            var row = new TRow();
            var firstSortOrder = row.GetFields().SortOrders.FirstOrDefault();

            if (firstSortOrder != null)
            {
                query.OrderByFirst(firstSortOrder.Item1.Expression, firstSortOrder.Item2);
            }
        }
    }
}