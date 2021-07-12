using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.Model
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[ASCURRAT]")]
    [DisplayName("ASCURRAT"), InstanceName("ASCURRAT")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("ALgorithm:ASCURRAT")]
    public sealed class ASCURRATRow : Row<ASCURRATRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("CurrencyID1"), Column("CurrencyID1"), Size(100), IdProperty, NameProperty,LookupInclude]
        public String CurrencyID1
        {
            get => fields.CurrencyID1[this];
            set => fields.CurrencyID1[this] = value;
        }

        [DisplayName("CurrencyID2"), Column("CurrencyID2"), Size(100), LookupInclude]
        public String CurrencyID2
        {
            get => fields.CurrencyID2[this];
            set => fields.CurrencyID2[this] = value;
        }

        [DisplayName("CUR_RAT"), Column("CUR_RAT"), LookupInclude]
        public Double? CUR_RAT
        {
            get => fields.CUR_RAT[this];
            set => fields.CUR_RAT[this] = value;
        }

        [DisplayName("ICUR_RAT"), Column("ICUR_RAT"), LookupInclude]
        public Double? ICUR_RAT
        {
            get => fields.ICUR_RAT[this];
            set => fields.ICUR_RAT[this] = value;
        }

        public ASCURRATRow()
            : base()
        {
        }

        public ASCURRATRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField CurrencyID1;
            public StringField CurrencyID2;
            public DoubleField CUR_RAT;
            public DoubleField ICUR_RAT;
        }
    }
}
