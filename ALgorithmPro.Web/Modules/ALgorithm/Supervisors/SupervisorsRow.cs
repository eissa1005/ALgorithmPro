using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.Web.Modules.Common.Common;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ALgorithmPro.ALgorithm.Entities
{
    [ConnectionKey("Default"), Module("ALgorithm"), TableName("[dbo].[Supervisors]")]
    [DisplayName("Supervisors"), InstanceName("Supervisors")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript] 
    public sealed class SupervisorsRow : Row<SupervisorsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Column("ID"), Identity, IdProperty]
        public Int64? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("Supervisor Code"), Column("SupervisorID"), Size(100), PrimaryKey, QuickSearch, NameProperty]
        public String SupervisorID
        {
            get => fields.SupervisorID[this];
            set => fields.SupervisorID[this] = value;
        }

        [DisplayName("Name Ar"), Column("Name_AR"), NotNull]
        public String Name_AR
        {
            get => fields.Name_AR[this];
            set => fields.Name_AR[this] = value;
        }

        [DisplayName("Name En"), Column("Name_EN"), NotNull]
        public String Name_EN
        {
            get => fields.Name_EN[this];
            set => fields.Name_EN[this] = value;
        }
        [DisplayName("Status"), NotNull, DefaultValue(1)]
        public Status? Status
        {
            get => (Status?)fields.Status[this];
            set => fields.Status[this] = (Int32?)value;
        }

        [DisplayName("EnteredBy"), Size(100)]
        public String EnteredBy
        {
            get => fields.EnteredBy[this];
            set => fields.EnteredBy[this] = value;
        }

        [DisplayName("EntryDate"), DefaultValue("now")]
        public DateTime? EntryDate
        {
            get => fields.EntryDate[this];
            set => fields.EntryDate[this] = value;
        }

        [DisplayName("UpdatedBy"), Size(100)]
        public String UpdatedBy
        {
            get => fields.UpdatedBy[this];
            set => fields.UpdatedBy[this] = value;
        }

        [DisplayName("UpdateDate"), DefaultValue("now")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }


        public SupervisorsRow()
            : base()
        {
        }

        public SupervisorsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ID;
            public StringField SupervisorID;
            public StringField Name_AR;
            public StringField Name_EN;
            public Int32Field Status;
            public StringField EnteredBy;
            public StringField UpdatedBy;
            public DateTimeField EntryDate;
            public DateTimeField UpdateDate;
        }
    }
}
