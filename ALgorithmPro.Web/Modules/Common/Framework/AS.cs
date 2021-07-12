using ALgorithmPro.Common;
using Microsoft.Extensions.Hosting;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Web;

namespace ALgorithmPro
{
    public static partial class AS
    {
        public static bool IsNullValue(this object value)
        {
            return value == null || value.ToString().Length == 0 || String.IsNullOrEmpty(value.ToString()) ||
            value.ToString().Trim() == "" || value.ToString().Trim() == "''" || value.ToString().Trim() == "0" ||
            value.ToString().Trim() == "0." || value.ToString().Trim() == "0.00%" || value.ToString().Trim() == "{}" ||
            String.IsNullOrWhiteSpace(value.ToString());
          
        }
        public static string ConvertToString(this object value)
        {
            if (AS.IsNullValue(value)) return string.Empty;
            if (!AS.IsNumber(value))
                return Convert.ToString(value);
            else
                return string.Empty;
        }
        public static bool IsAllDigits(this string value)
        {
            foreach (char val in value)
            {
                if (char.IsDigit(val))
                    return true;
            }
            return false;
        }
        public static bool IsIntegerType(this object value)
        {
            return value != null && (value is int || value is long || (value.GetType().IsPrimitive &&
                (value is byte || value is sbyte || value is short || value is ushort || value is uint || value is ulong)));
        }
        public static bool IsNumber(this object value)
        {
            if (AS.IsNullValue(value)) return false;
            return value is byte || value is sbyte || value is long || value is ulong || value is uint || value is int ||
            value is short || value is ushort || value is bool || value is double || value is decimal || value is float ||
            AS.IsAllDigits(value.ToString());
        }
        public static int ToInt(object value)
        {
            int val = 0;
            if (AS.IsNullValue(value)) return default(int);
            bool IsNumber = false;
            IsNumber = AS.IsNumber(value);
            if (IsNumber)
            {
                if (int.TryParse(value.ToString(), out val))
                    return val;
                else
                    return Convert.ToInt32(value);
            }
            return val;
        }
        public static double ToDouble(this object value)
        {
            double val = 0;
            if (AS.IsNullValue(value)) return default(double);
            bool IsNumber = false;
            IsNumber = AS.IsNumber(value);
            if (IsNumber)
            {
                if (double.TryParse(value.ToString(), out val))
                    return val;
                else
                    return Convert.ToDouble(value);
            }
            return val;
        }
        public static long ToLong(this object value)
        {
            long val = 0;
            if (AS.IsNullValue(value)) return default(long);
            bool IsNumber = false;
            IsNumber = AS.IsNumber(value);
            if (IsNumber)
            {
                if (long.TryParse(value.ToString(), out val))
                    return val;
                else
                    return Convert.ToInt64(value);
            }
            return val;

        }
        public static decimal ToDecimal(this object value)
        {
            decimal val = 0;
            if (AS.IsNullValue(value)) return default(decimal);
            bool IsNumber = false;
            IsNumber = AS.IsNumber(value);
            if (IsNumber)
            {
                if (decimal.TryParse(value.ToString(), out val))
                    return val;
                else
                    return Convert.ToDecimal(value);
            }
            return val;
        }
        public static string GetMaxNumberInString(string Number)
        {
            if (Number == string.Empty | Number == null)
                return "1";
            string str1 = "";
            foreach (Char c in Number)
                str1 = char.IsDigit(c) ? str1 + c.ToString() : "";
            if (str1 == string.Empty)
                return Number + "1";
            string str2 = str1.Insert(0, "1");
            str2 = (Convert.ToInt32(str2) + 1).ToString();
            string str3 = str2[0] == '1' ? str2.Remove(0, 1) : str2.Remove(0, 1).Insert(0, "1");
            int index = Number.LastIndexOf(str1);
            Number = Number.Remove(index);
            Number = Number.Insert(index, str3);
            return Number;
        }
        public static double RoundType(this object obj)
        {
            object value = 0;
            if (!AS.IsNullValue(obj))
                value = decimal.Round(AS.ToDecimal(obj), 2, MidpointRounding.ToEven);
            return AS.ToDouble(value);
        }
        public static T GetFromByteArray<T>(this byte[] data)
        {
            try
            {
                if (data == null) return default(T);
                BinaryFormatter bf = new BinaryFormatter();
                using (MemoryStream ms = new MemoryStream(data))
                {
                    object obj = bf.Deserialize(ms);
                    return (T)obj;
                }
            }
            catch (Exception ex)
            {
                ex.Message.ToString();
                return default(T);
            }

        }
        public static byte[] ToByteArray<T>(this T obj)
        {
            try
            {
                if (obj == null) return null;
                BinaryFormatter bf = new BinaryFormatter();
                using (MemoryStream ms = new MemoryStream())
                {
                    bf.Serialize(ms, obj);
                    return ms.ToArray();
                }
            }
            catch (Exception)
            {

                return default(byte[]);
            }

        }
        public static decimal ToRound(decimal? value, int decimals = 0, MidpointRounding mode = MidpointRounding.AwayFromZero)
        {
            return Math.Round(value ?? 0, decimals, mode);
        }

        public static decimal ToRound(decimal? value, MidpointRounding mode = MidpointRounding.AwayFromZero)
        {
            return Math.Round(value ?? 0, 2, mode);
        }

        public static string ToRound(this decimal input, int decimalPlace = 2)
        {
            string d = "";
            if (decimalPlace > 0)
            {
                d = ".";
                for (int i = 0; i < decimalPlace; i++)
                {
                    d += "0";
                }
            }

            return input.ToString("#,##0" + d);

        }
        public static string ToRound(this decimal? input, int decimalPlace = 2, bool showZeroIfNull = true)
        {
            if (input == null && !showZeroIfNull)
                return string.Empty;
            else
                return (input ?? 0).ToRound(decimalPlace);
        }

        public static void AppendException(this Exception exception , string message)
        {
            string filename = string.Format("{0}.log", "AppException");
            
            string logFilePath = string.Format(@"{0}\{1}", Environment.CurrentDirectory, filename);
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("--------------------------------------");
            sb.AppendLine(DateTime.Now.ToString());
            sb.AppendLine(message);
            sb.AppendLine(exception.StackTrace);
            using (StreamWriter sw = new StreamWriter(logFilePath, true))
            {
                sw.Write(sb.ToString());
                sw.Flush();
            }
        }
        public static bool HasValue(this object input)
        {
            if (input == null) return false;
            else if (string.IsNullOrWhiteSpace(input.ToString())) return false;
            else return true;

        }

        public static bool IsFilterApplied(this Dictionary<string, object> dic, string key)
        {
            if (dic.ContainsKey(key)) return dic[key].HasValue();
            else return false;
        }

        public static string ToYesNo(this bool? inputValue)
        {
            return ToYesNo(inputValue ?? false);
        }
        public static string ToStringDollar(this decimal input)
        {
            return input.ToString("$ #,##0.000");

        }
        public static string ToStringEG(this decimal? input)
        {
            if (input == null) return "EG. 0.00";
            else return "EG. " + input.Value.ToString("#,##0.00");
        }
        public static string ToNumberFormat(this decimal? input)
        {
            if (input == null) return "0.00";
            else return input.Value.ToString("#,##0.00");

        }

        public static string ToStringDollar(this decimal? input)
        {
            if (input == null) return "$ 0.000";
            else return input.Value.ToString("$ #,##0.000");

        }
        public static string ToNegativeFormat(this decimal input)
        {
            if (input < 0)
            {
                input = Math.Abs(input);
                return String.Concat("(", input.ToString("N", new System.Globalization.CultureInfo("en-US")), ")");
            }
            else
                return input.ToString("N", new System.Globalization.CultureInfo("en-US"));
        }
        public static string ToNegativeFormat(this decimal? input)
        {
            return (input ?? 0).ToNegativeFormat();
        }

        public static string ToUSFormat(this decimal? input)
        {
            return (input ?? 0).ToString("N", new System.Globalization.CultureInfo("en-US"));
        }
        public static string ToUSFormat(this decimal input)
        {
            return input.ToString("N", new System.Globalization.CultureInfo("en-US"));

        }
    }
}