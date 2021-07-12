using System;
using System.Linq;
using System.Data;
using System.Text;
using Serenity.Data;
using System.Reflection;
using ALgorithmPro.ALgorithm.Entities;
using System.Collections.Generic;
using System.Data.SqlClient;
using Serenity.ComponentModel;
using Serenity.Data.Mapping;

namespace ALgorithmPro
{
    public partial class AS
    {
        public static object GetValue(IUnitOfWork unitOfWork, string SQL)
        {
            var connection = unitOfWork.Connection;
            var cmd = connection.CreateCommand();
            try
            {
                cmd.CommandText = SQL;
                cmd.CommandType = CommandType.Text;
                object value = cmd.ExecuteScalar();
                return value;
            }
            catch (Exception ex)
            {
                AS.AppendException(ex, ex.Message);
                return default(object);
            }
        }
        public static IDbConnection GetConnection()
        {
            using (var scope = ServiceActivator.GetScope())
            {
                try
                {
                 
                    var sqlConnection = scope.ServiceProvider.GetService(typeof(ISqlConnections));
                    var connection = ((ISqlConnections)sqlConnection).NewByKey("Default");
                    return connection;
                }
                catch (Exception exception)
                {
                    AS.AppendException(exception, exception.Message);
                    return null;
                }
            }
        }
        public static object GetRowID(IUnitOfWork unitOfWork, string SQL)
        {
            var connection = unitOfWork.Connection;
            var cmd = connection.CreateCommand();
            try
            {
                cmd.CommandText = SQL;
                cmd.CommandType = CommandType.Text;
                object value = cmd.ExecuteScalar();
                return value;
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return default(object);
            }
        }
        public static string GetMAXSQL(IUnitOfWork unitOfWork, int TableID)
        {
            var connection = unitOfWork.Connection;
            string SQL = "SELECT * FROM MAXTable WHERE TableID=" + TableID;
            try
            {
                var MaxTable = connection.Query<MaxTableRow>(sql:SQL).ToList().FirstOrDefault();
                string MAXSQL = MaxTable.MAXSQL;
                return MAXSQL;
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return string.Empty;
            }
        }
        public static object GetStoreProceScalar(IUnitOfWork unitOfWork, string StoredName)
        {
            var connection = unitOfWork.Connection;
            var cmd = connection.CreateCommand();
            try
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = StoredName;
                object Result = cmd.ExecuteScalar();
                if (AS.IsNullValue(Result)) return null;
                return Result.ToString();
            }
            catch (SqlException exception)
            {
                AS.AppendException(exception, exception.Message);
                return null;
            }
        }
        public static object GetStoreProceScalar(IDbConnection connection, string StoredName)
        {
            var cmd = connection.CreateCommand();
            try
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = StoredName;
                object Result = cmd.ExecuteScalar();
                if (AS.IsNullValue(Result)) return null;
                return Result.ToString();
            }
            catch (SqlException exception)
            {
                AS.AppendException(exception, exception.Message);
                return null;
            }
        }
        public static void StoredProcedure(IUnitOfWork unitOfWork, string StoredName, Dictionary<string, object> dic)
        {
            var dictionary = new Dictionary<string, object>();
            var connection = unitOfWork.Connection;
            var cmd = connection.CreateCommand();
            try
            {
                foreach (KeyValuePair<string, object> items in dic)
                {
                    var paramters = cmd.CreateParameter();
                    paramters.ParameterName = items.Key;
                    if (items.Value.GetType() == typeof(string))
                    {
                        paramters.Value = "'" + items.Value + "'";
                        paramters.DbType = DbType.String;
                    }
                    else
                    {
                        paramters.Value = items.Value;
                        paramters.DbType = DbType.Int32;
                    }

                    dictionary.Add(paramters.ParameterName, paramters.Value);
                }
                
                connection.Execute(sql: StoredName, param: dictionary.ToList(), commandTimeout: 30, commandType: CommandType.StoredProcedure);
            }
            catch (SqlException exception)
            {
                AS.AppendException(exception, exception.Message);
            }
        }
       
        public static double GetItemBAL(IDbConnection connection, string StoredName, Dictionary<string, object> dic)
        {
            double ItemBal = default(double);
            var dictionary = new Dictionary<string, object>();
            var cmd = connection.CreateCommand();
            try
            {
                foreach (KeyValuePair<string, object> items in dic)
                {
                    var paramters = cmd.CreateParameter();
                    paramters.ParameterName = items.Key;
                    if (items.Value.GetType() == typeof(string))
                    {
                        paramters.Value = "'" + items.Value + "'";
                        paramters.DbType = DbType.String;
                    }
                    else
                    {
                        paramters.Value = items.Value;
                        paramters.DbType = DbType.Int32;
                    }

                    dictionary.Add(paramters.ParameterName, paramters.Value);
                   
                }

                var query = connection.Query(StoredName, dictionary.ToList(), commandTimeout: 30, commandType: CommandType.StoredProcedure).ToList();
                var firstRow = query.FirstOrDefault();
                var Heading = ((IDictionary<string, object>)firstRow).Values;
                var _ItemBal = Heading.FirstOrDefault();
                ItemBal = AS.ToDouble(_ItemBal);
                return ItemBal;

            }
            catch (SqlException exception)
            {
                AS.AppendException(exception, exception.Message);
                return default(double);
            }
        }
        public static List<T> StoredProcedure<T>(IUnitOfWork unitOfWork, string StoredName, Dictionary<string, object> dic)
        {
            List<T> lst = new List<T>();
            var connection = unitOfWork.Connection;
            try
            {
                var rows = connection.Query<T>(StoredName, param: dic.ToArray(), commandType: CommandType.StoredProcedure);
                lst.AddRange(rows);
                
                return lst;
            }
            catch (SqlException exception)
            {
                AS.AppendException(exception, exception.Message);
                return new List<T>();
            }
        }
        public static List<T> StoredProcedure<T>(IDbConnection connection, string StoredName, Dictionary<string, object> dic)
        {
            List<T> lst = new List<T>();
            try
            {
                var rows = connection.Query<T>(StoredName, param: dic.ToArray(), commandType: CommandType.StoredProcedure);
                lst.AddRange(rows);
                return lst;
            }
            catch (SqlException exception)
            {
                AS.AppendException(exception, exception.Message);
                return new List<T>();
            }
        }
        public static List<T> GetView<T>(IDbConnection connection, string ViewName)
        {
            List<T> lst = new List<T>();
            try
            {
                string SQL = "SELECT * FROM dbo." + ViewName;
                var rows = connection.Query<T>(SQL, commandType: CommandType.Text);
                lst.AddRange(rows);
                return lst;
            }
            catch (SqlException exception)
            {
                AS.AppendException(exception, exception.Message);
                return new List<T>();
            }
        }

        public static string GetName(IUnitOfWork uow, string FunctionName, params object[] para)
        {
            if (AS.IsNullValue(para)) return string.Empty;
            try
            {
                StringBuilder builder = new StringBuilder();
                if (para.Length == 1)
                {
                    builder.Append(FunctionName);
                    builder.Append("(");
                    builder.Append(para[0].ToString());
                    builder.Append(")");
                }
                else if (para.Length == 2)
                {
                    builder.Append(FunctionName);
                    builder.Append("(");
                    builder.Append(para[0].ToString());
                    builder.Append(",");
                    builder.Append(para[1].ToString());
                    builder.Append(")");

                }
                var cmd = uow.Connection.CreateCommand();
                string SQL = "SELECT dbo." + builder;
                cmd.CommandText = SQL;
                object name = cmd.ExecuteScalar();
                return name.ToString();
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return string.Empty;
            }
        }
        public static string GetName(IDbConnection connection, string FunctionName, params object[] para)
        {
            if (AS.IsNullValue(para)) return string.Empty;
            try
            {
                StringBuilder builder = new StringBuilder();
                if (para.Length == 1)
                {
                    builder.Append(FunctionName);
                    builder.Append("(");
                    builder.Append(para[0].ToString());
                    builder.Append(")");
                }
                else if (para.Length == 2)
                {
                    builder.Append(FunctionName);
                    builder.Append("(");
                    builder.Append(para[0].ToString());
                    builder.Append(",");
                    builder.Append(para[1].ToString());
                    builder.Append(")");

                }
                var cmd = connection.CreateCommand();
                string SQL = "SELECT dbo." + builder;
                cmd.CommandText = SQL;
                object name = cmd.ExecuteScalar();
                return name.ToString();
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return string.Empty;
            }
        }
        public static object GetObject(IDbConnection connection, string FunctionName, params object[] para)
        {
            if (AS.IsNullValue(para)) return string.Empty;
            try
            {
                StringBuilder builder = new StringBuilder();
                if (para.Length == 1)
                {
                    builder.Append(FunctionName);
                    builder.Append("(");
                    builder.Append(para[0].ToString());
                    builder.Append(")");
                }
                else if (para.Length == 2)
                {
                    builder.Append(FunctionName);
                    builder.Append("(");
                    builder.Append(para[0].ToString());
                    builder.Append(",");
                    builder.Append(para[1].ToString());
                    builder.Append(")");

                }

                if (connection.State != ConnectionState.Open) { connection.Open(); }
                connection.BeginTransaction();
                var cmd = connection.CreateCommand();
                string SQL = "SELECT dbo." + builder;
                cmd.CommandText = SQL;
                object value = cmd.ExecuteScalar();
                return value;
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return string.Empty;
            }
        }
        public static object GetValue(IUnitOfWork connectionkey, string FunctionName, params string[] para)
        {
            if (AS.IsNullValue(para)) return string.Empty;
            try
            {
                StringBuilder builder = new StringBuilder();
                if (para.Length == 1)
                {
                    builder.Append(FunctionName);
                    builder.Append("(");
                    builder.Append(para[0].ToString());
                    builder.Append(")");
                }
                else if (para.Length == 2)
                {
                    builder.Append(FunctionName);
                    builder.Append("(");
                    builder.Append(para[0].ToString());
                    builder.Append(",");
                    builder.Append(para[1].ToString());
                    builder.Append(")");

                }
                var cmd = connectionkey.Connection.CreateCommand();
                string SQL = "SELECT dbo." + builder;
                cmd.CommandText = SQL;
                object value = cmd.ExecuteScalar();
                return value;
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return string.Empty;
            }
        }
        public static Type GetRowTypeByFormKey(string formKey)
        {
            var formType = Assembly.GetExecutingAssembly().GetTypes()
                .First(w => w.GetCustomAttribute<FormScriptAttribute>()?.Key == formKey);

            if (formType == null)
                throw new Exception($"There is no form with FormKey = {formKey}");

            var rowType = formType?.GetCustomAttribute<BasedOnRowAttribute>()?.RowType;

            if (rowType == null)
                throw new Exception($"There is no BasedOnRowAttribute in the form with FormKey = {formKey}");

            return rowType;
        }
        public static string GetTableNameByRowType(Type rowType)
        {
            var tableNameAttr = rowType?.GetCustomAttribute<TableNameAttribute>();

            if (tableNameAttr == null)
                throw new Exception($"There is no TableNameAttribute at {rowType.Name}");

            return tableNameAttr.Name;
        }
        public static string GetConnectionKeyByRowType(Type rowType)
        {
            var ConnectionKeyAttr = rowType?.GetCustomAttribute<ConnectionKeyAttribute>();

            if (ConnectionKeyAttr == null)
                throw new Exception($"There is no ConnectionKeyAttribute at {rowType.Name}");

            return ConnectionKeyAttr.Value;
        }
        public static string NumToWord(object value)
        {
            string word = string.Empty;
            decimal Net = 0;
            if (AS.IsNullValue(value)) return word;
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var sqlConnections = serviceScope.ServiceProvider.GetService(typeof(ISqlConnections));
                var connection = ((ISqlConnections)sqlConnections).NewByKey("Default");
                Net = AS.ToDecimal(value);
                var NumToWords = AS.GetObject(connection, Contstants.FunctionName.NumToWords, Net);
                word = NumToWords.ToString();
            }
            return word;
        }
        public static object GetMaxASTRH(IDbConnection connection, string StoreID, int TRTY)
        {
            if (AS.IsNullValue(StoreID) && AS.IsNullValue(TRTY))
                return string.Empty;
            try
            {
                StringBuilder builder = new StringBuilder();
                builder.Append(Contstants.FunctionName.GetMAXASTRH);
                builder.Append("(");
                builder.Append(StoreID);
                builder.Append(",");
                builder.Append(TRTY);
                builder.Append(")");

                var cmd = connection.CreateCommand();
                string SQL = "SELECT dbo." + builder;
                cmd.CommandText = SQL;
                object value = cmd.ExecuteScalar();
                return value;
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return string.Empty;
            }

        }

        public static object GetMaxACCTRH(IDbConnection connection, string StoreID, int TRTY)
        {
            if (AS.IsNullValue(StoreID) && AS.IsNullValue(TRTY))
                return string.Empty;
            try
            {
                StringBuilder builder = new StringBuilder();
                builder.Append(Contstants.FunctionName.GetMaxACCTRH);
                builder.Append("(");
                builder.Append(StoreID);
                builder.Append(",");
                builder.Append(TRTY);
                builder.Append(")");

                var cmd = connection.CreateCommand();
                string SQL = "SELECT dbo." + builder;
                cmd.CommandText = SQL;
                object value = cmd.ExecuteScalar();
                return value;
            }
            catch (Exception exception)
            {
                AS.AppendException(exception, exception.Message);
                return string.Empty;
            }

        }

    }
}