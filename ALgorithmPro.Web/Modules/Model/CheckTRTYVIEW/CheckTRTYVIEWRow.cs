using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.Model
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[CheckTRTYVIEW]")]
    [DisplayName("Check Trtyview"), InstanceName("Check Trtyview")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CheckTRTYVIEWRow : Row<CheckTRTYVIEWRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int32? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("TR_TY"), Column("TR_TY"), NotNull]
        public Int32? TR_TY
        {
            get => fields.TR_TY[this];
            set => fields.TR_TY[this] = value;
        }

        [DisplayName("Name Arabic"), Column("Name_AR"), Size(350), NotNull, QuickSearch, NameProperty]
        public String Name_AR
        {
            get => fields.Name_AR[this];
            set => fields.Name_AR[this] = value;
        }

        [DisplayName("Name English"), Column("Name_EN"), Size(350), NotNull]
        public String Name_EN
        {
            get => fields.Name_EN[this];
            set => fields.Name_EN[this] = value;
        }

        public CheckTRTYVIEWRow()
            : base()
        {
        }

        public CheckTRTYVIEWRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public Int32Field TR_TY;
            public StringField Name_AR;
            public StringField Name_EN;
        }
    }
}
