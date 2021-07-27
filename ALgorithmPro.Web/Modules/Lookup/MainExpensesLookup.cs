using ALgorithmPro.ALgorithm.Entities;
using ALgorithmPro.Web.Modules.Common;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class MainExpensesLookup : RowLookupScript<ACCMFRow>
    {
        public MainExpensesLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = ACCMFRow.Fields.ACC_NO.PropertyName;
            TextField = ACCMFRow.Fields.ACC_NM_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ACCMFRow.Fields;
            query.Distinct(true)
                .Select(fld.ACC_NO)
                .Select(fld.ACC_NM_AR)
                .Where(
                    new Criteria(fld.REC_ID) == 7 &
                    new Criteria(fld.ACC_TY) == 1 &
                    new Criteria(fld.ACC_NO) != "" &
                    new Criteria(fld.ACC_NO).IsNotNull() &
                    new Criteria(fld.ACC_NM_AR) != "" &
                    new Criteria(fld.ACC_NM_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
