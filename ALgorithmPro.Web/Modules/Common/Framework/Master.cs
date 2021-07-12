using ALgorithmPro.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using static ALgorithmPro.Contstants;

namespace ALgorithmPro.Web.Modules.Common.Common
{
    public class Master
    {
        public static double? GETRAT(IDbConnection connection, string currencyID1,string currencyID2)
        {
           var ASCURRAT = AS.GetView<ASCURRATRow>(connection, ViewName.ASCURRAT);
           double? CUR_RAT = ASCURRAT.ToList<ASCURRATRow>().FirstOrDefault(x => x.CurrencyID1 == currencyID1 && x.CurrencyID2 == currencyID2).CUR_RAT??0;
            return CUR_RAT;
        }
        private static List<T> ConvertDataTable<T>(DataTable dt)
        {
            List<T> data = new List<T>();
            foreach (DataRow row in dt.Rows)
            {
                T item = GetItem<T>(row);
                data.Add(item);
            }
            return data;
        }
        private static T GetItem<T>(DataRow dr)
        {
            Type temp = typeof(T);
            T obj = Activator.CreateInstance<T>();

            foreach (DataColumn column in dr.Table.Columns)
            {
                foreach (PropertyInfo pro in temp.GetProperties())
                {
                    if (pro.Name == column.ColumnName)
                        if(column.ColumnName == "CHK_TYP")
                        {
                          pro.SetValue(obj, (Int32)dr[column.ColumnName], null);
                        }
                        else
                          pro.SetValue(obj, dr[column.ColumnName], null);
                    else
                        continue;
                }
            }
            return obj;
        }
    }
}

