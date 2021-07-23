﻿using ALgorithmPro.ALgorithm.Entities;
using ALgorithmPro.Web.Modules.Common;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;


namespace ALgorithmPro.Lookup
{
    [LookupScript]
    public class AddInventoryLookup : RowLookupScript<ASTRTYRow>
    {
        public AddInventoryLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = ASTRTYRow.Fields.TR_TY.PropertyName;
            TextField = ASTRTYRow.Fields.Dscr_AR.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var AddInventory =(int)TRTYType.AddInventory;
           var fld = ASTRTYRow.Fields;
            query.Distinct(true)
                .Select(fld.TR_TY)
                .Select(fld.Dscr_AR)
                .Where(
                    new Criteria(fld.TR_TY) == AddInventory &
                    new Criteria(fld.TR_TY) != "" &
                    new Criteria(fld.TR_TY).IsNotNull() &
                    new Criteria(fld.Dscr_AR) != "" &
                    new Criteria(fld.Dscr_AR).IsNotNull());
        }
        protected override void ApplyOrder(SqlQuery query)
        {

        }
    }
}
