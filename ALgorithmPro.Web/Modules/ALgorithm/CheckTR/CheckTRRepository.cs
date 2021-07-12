using ALgorithmPro.ALgorithm.Entities;
using ALgorithmPro.Web.Modules.Common;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using MyRow = ALgorithmPro.ALgorithm.Entities.CheckTRRow;

namespace ALgorithmPro.ALgorithm.Repositories
{
    public class CheckTRRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;
        public static CheckTRTY SelectCheckTRTY { set; get; }

        public CheckTRRepository(IRequestContext context)
            : base(context)
        {
        }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler(Context).Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }


        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void AfterSave()
            {
                var data = Request.Entity;
                SelectCheckTRTY = (CheckTRTY)data.TR_TY;
                string SQL = "SELECT ID FROM ASCHKS WHERE CHK_TYP=" + (int)data.CHK_TYP + " AND CHK_NO=" + data.CHK_NO + " AND StoreID='" + data.StoreID + "'";
                var ID = AS.GetRowID(this.UnitOfWork, SQL);
                if (AS.IsNullValue(ID)) return;
                var Checks = this.Connection.ById<ChecksRow>(ID);
                if (SelectCheckTRTY == CheckTRTY.PartialCASH)
                {
                    var Query = AS.GetView<CheckTRRow>(this.UnitOfWork.Connection, "PartialCheckView");
                    var lstCHKTR = Query.ToList().Where(x => x.CHK_NO == data.CHK_NO && x.StoreID == data.StoreID);
                    double? PAID = 0;
                    foreach (var CHKS in lstCHKTR)
                    {
                        PAID += CHKS.AMT_PAID;
                    }
                    if (Checks != null)
                    {
                        if (data.TR_TY == 703)
                        {
                            Checks.STAT = CheckTRTY.PartialCASH;
                            Checks.ExpenseValue = data.ExpenseValue;
                            Checks.AMT_PAID = PAID;
                            Checks.TotalValue = Checks.AMT - Checks.AMT_PAID;
                            if (Checks.TotalValue == 0)
                                Checks.Status = 0;
                        }
                    }
                }
                else if(SelectCheckTRTY != CheckTRTY.Deposit && SelectCheckTRTY != CheckTRTY.PartialCASH && SelectCheckTRTY != CheckTRTY.Bounce)
                {
                    Checks.STAT = (CheckTRTY)data.TR_TY;
                    Checks.Status = 0;
                }
                this.Connection.UpdateById<ChecksRow>(Checks, ExpectedRows.One);
                base.AfterSave();
            }
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            public MyDeleteHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            public MyRetrieveHandler(IRequestContext context)
                : base(context)
            {

            }

        }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            public MyListHandler(IRequestContext context)
                : base(context)
            {
            }
        }
    }
}