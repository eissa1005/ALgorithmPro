using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class AccountLookup : RowLookupScript<ACCMFRow>
    {
        public AccountLookup(ISqlConnections sqlConnections) : base(sqlConnections)
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
                    new Criteria(fld.ACC_TY) == 2 &
                    new Criteria(fld.REC_ID).In(3,4) &
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
