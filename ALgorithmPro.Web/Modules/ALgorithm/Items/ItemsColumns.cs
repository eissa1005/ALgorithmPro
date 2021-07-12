using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using ALgorithmPro.Web.Modules.Lookup;
using Serenity.Data.Mapping;

namespace ALgorithmPro.ALgorithm.Columns
{
    [ColumnsScript("ALgorithm.Items")]
    [BasedOnRow(typeof(Entities.ItemsRow), CheckNames = true)]
    public class ItemsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ID { get; set; }
        [EditLink,Width(50)]
        public String Item_CD { get; set; }
        [Width(100)]
        public String Item_Name_AR { get; set; }
        [Width(100)]
        public String Item_Name_EN { get; set; }
        [Width(100)]
        public String MITM_CD { get; set; }
        [Width(100)]
        public String CITM_CD { get; set; }
        [Width(50)]
        public Int32 ItemTypes { get; set; }
        [Width(20)]
        public String RMRK { get; set; }
        [Width(50)]
        public Boolean ItemSupplier { get; set; }
        public String SLS_PK { get; set; }
        public String PRCH_PK { get; set; }
        public Double ItemCost { get; set; }
        public Decimal SPRC2 { get; set; }
        public Decimal SPRC3 { get; set; }
        public Decimal SPRC4 { get; set; }
        public Decimal SPRC5 { get; set; }
        public Decimal SPRC6 { get; set; }
        public Decimal PPRC2 { get; set; }
        public Decimal PPRC3 { get; set; }
        public Decimal PPRC4 { get; set; }
        public Decimal PPRC5 { get; set; }
        public Decimal PPRC6 { get; set; }
        [Hidden]
        public Int16 SALDISC_TYPE { get; set; }
        public Double SDISC1 { get; set; }
        public Double SDISC2 { get; set; }
        public Double SDISC3 { get; set; }
        [Hidden]
        public Int16 PURDISC_TYPE { get; set; }
        public Double PDISC1 { get; set; }
        public Double PDISC2 { get; set; }
        public Double PDISC3 { get; set; }
        [Hidden]
        public Int16 TAX_TYPE { get; set; }
        public Double TAX1 { get; set; }
        public Double TAX2 { get; set; }
        public Double TAX3 { get; set; }
        public Double TAX4 { get; set; }
        public Double BGNBAL { get; set; }
        public Double BGNCOST { get; set; }
        public Double UCOST { get; set; }
        public Double ItemBAL { set; get; }
        public Double MinQty { get; set; }
        public Double MaxQty { get; set; }
        public Double Itemlimit { get; set; }
        public String MITM_NM_AR { get; set; }
        public String MITM_NM_EN { get; set; }
        public String StoreID { get; set; }
        public Stream ItemPhoto { get; set; }
        public String GLNO1 { get; set; }
        public String GLNO2 { get; set; }
        public String GLNO3 { get; set; }
        public Int32 Status { get; set; }
        public String EnteredBy { get; set; }
        public String UpdatedBy { get; set; }
        public DateTime EntryDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}