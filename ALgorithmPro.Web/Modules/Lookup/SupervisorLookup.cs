using ALgorithmPro.ALgorithm.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class SupervisorLookup : RowLookupScript<SupervisorsRow>
    {
        public SupervisorLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = SupervisorsRow.Fields.SupervisorID.PropertyName;
            TextField = SupervisorsRow.Fields.Name_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = SupervisorsRow.Fields;
            query.Distinct(true)
                .Select(fld.SupervisorID)
                .Select(fld.Name_AR)
                .Where(
                    new Criteria(fld.SupervisorID) != "" &
                    new Criteria(fld.SupervisorID).IsNotNull() &
                    new Criteria(fld.Name_AR) != "" &
                    new Criteria(fld.Name_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
