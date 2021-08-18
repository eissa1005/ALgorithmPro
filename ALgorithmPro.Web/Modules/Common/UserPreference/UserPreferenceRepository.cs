using ALgorithmPro.ALgorithm;
using ALgorithmPro.Common.Entities;
using Newtonsoft.Json;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using MyRow = ALgorithmPro.Common.Entities.UserPreferenceRow;


namespace ALgorithmPro.Common.Repositories
{
    public class UserPreferenceRepository : BaseRepository
    {
        public UserPreferenceRepository(IRequestContext context)
             : base(context)
        {
        }

        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Update(IUnitOfWork uow, UserPreferenceUpdateRequest request)
        {
            if (request is null)
                throw new ArgumentNullException("request");
            if (request.Name is null)
                throw new ArgumentNullException("name");
            if (request.PreferenceType is null)
                throw new ArgumentNullException("preferenceType");
            try
            {
                var userId = Convert.ToInt32(Context.User.GetIdentifier());

                var criteria = fld.UserId == userId &
                    fld.PreferenceType == request.PreferenceType &
                    fld.Name == request.Name;

                var lstPreference = JSON.Parse<Preference>(request.Value);
                var lstColumn = new List<Column>();
                foreach (var item in lstPreference.columns)
                {
                    long width = item.width;
                    long newwidth = 0;
                    if (width < 100)
                        newwidth = 100;
                    else
                        newwidth = width;

                    var column = new Column();
                    column.id = item.id;
                    column.width = newwidth;
                    column.visible = item.visible;
                    column.sort = item.sort;

                    lstColumn.Add(column);
                }
                var lst = new Preference();
                lst.columns = lstColumn;
                lst.filterItems = new List<object>();
                lst.includeDeleted = false;

                var values = JSON.Stringify(lst);


                if (string.IsNullOrEmpty(request.Value))
                {
                    new SqlDelete(fld.TableName)
                        .Where(criteria)
                        .Execute(uow.Connection, ExpectedRows.ZeroOrOne);

                    return new SaveResponse();
                }

                var row = uow.Connection.List<MyRow>().FirstOrDefault<MyRow>(x => x.UserId == userId && x.PreferenceType == request.PreferenceType && x.Name == request.Name);
                var Count = uow.Connection.List<MyRow>().Where<MyRow>(x => x.UserId == userId && x.PreferenceType == request.PreferenceType && x.Name == request.Name).Count();
                if (Count > 1)
                {
                    uow.Connection.DeleteById<MyRow>(row.UserPreferenceId, ExpectedRows.ZeroOrOne);
                }

                if (new SqlUpdate(fld.TableName)
                        .Set(fld.Value, values)
                        .Where(criteria)
                        .Execute(uow.Connection, ExpectedRows.ZeroOrOne) == 0)
                {
                    new SqlInsert(fld.TableName)
                        .Set(fld.UserId, userId)
                        .Set(fld.PreferenceType, request.PreferenceType)
                        .Set(fld.Name, request.Name)
                        .Set(fld.Value, values)
                        .Execute(uow.Connection);
                }
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);

            }

            return new SaveResponse();
        }

        public UserPreferenceRetrieveResponse Retrieve(IDbConnection connection, UserPreferenceRetrieveRequest request)
        {
            if (request is null)
                throw new ArgumentNullException("request");
            if (request.Name is null)
                throw new ArgumentNullException("name");
            if (request.PreferenceType is null)
                throw new ArgumentNullException("preferenceType");

            var userId = Convert.ToInt32(Context.User.GetIdentifier());
            var row = connection.TryFirst<MyRow>(
                fld.UserId == userId &
                fld.PreferenceType == request.PreferenceType &
                fld.Name == request.Name);

            if (row == null)
                return new UserPreferenceRetrieveResponse();

            return new UserPreferenceRetrieveResponse
            {
                Value = row.Value
            };
        }
    }
}