
using System;
using Serenity.ComponentModel;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using ALgorithmPro.Web.Modules.Common;
using ALgorithmPro.ALgorithm.Entities;
using ALgorithmPro.Web.Modules.Lookup;
using Serenity.Data.Mapping;

namespace ALgorithmPro.ALgorithm.Forms
{
    [FormScript("ALgorithm.Items")]
    [BasedOnRow(typeof(Entities.ItemsRow), CheckNames = true)]
    [ColumnsScript("ALgorithm.Items")]
    public class ItemsForm
    {
        [Tab("General")]
        [HalfWidth]
        public String Item_CD { get; set; }

        [HalfWidth]
        public String Item_Name_AR { get; set; }

        [HalfWidth]
        public String Item_Name_EN { get; set; }

        [HalfWidth]
        public String MITM_CD { get; set; }

        [HalfWidth]
        public String CITM_CD { get; set; }

        [HalfWidth]
        public Int32 ItemTypes { set; get; }

        [HalfWidth]
        public String SLS_PK { get; set; }

        [HalfWidth]
        public String PRCH_PK { get; set; }

        [HalfWidth]
        public String StoreID { get; set; }

        [HalfWidth]
        public Status? Status { get; set; }

        [Hidden]
        public Boolean ItemSupplier { get; set; }

        [TextAreaEditor(Cols = 1, Rows = 5)]
        public String RMRK { get; set; }

        [DisplayName("Add Package")]
        [ItemBarcodeEditor]
        public List<ItemsBarcodeRow> DetailList { set; get; }

        [Tab("Prices")]
        [Category("Price")]

        [HalfWidth]
        public Double ItemCost { get; set; }
        [HalfWidth]
        public Decimal PPRC2 { get; set; }

        [HalfWidth]
        public Decimal SPRC2 { get; set; }

        [HalfWidth]
        public Decimal PPRC3 { get; set; }

        [HalfWidth]
        public Decimal SPRC3 { get; set; }

        [HalfWidth]
        public Decimal PPRC4 { get; set; }

        [HalfWidth]
        public Decimal SPRC4 { get; set; }

        [HalfWidth]
        public Decimal PPRC5 { get; set; }

        [HalfWidth]
        public Decimal SPRC5 { get; set; }

        [HalfWidth]
        public Decimal PPRC6 { get; set; }

        [HalfWidth]
        public Decimal SPRC6 { get; set; }

        [Category("DISC")]
        [HalfWidth]
        public DiscType? SALDISC_TYPE { get; set; }

        [HalfWidth]
        public DiscType? PURDISC_TYPE { get; set; }

        [DisplayName("SAL DISC1"), HalfWidth]
        public Double SDISC1 { get; set; }

        [DisplayName("Purch DISC1"), HalfWidth]
        public Double PDISC1 { get; set; }

        [DisplayName("SAL DISC2"), HalfWidth]
        public Double SDISC2 { get; set; }

        [DisplayName("Purch DISC2"), HalfWidth]
        public Double PDISC2 { get; set; }

        [DisplayName("SAL DISC3"), HalfWidth]
        public Double SDISC3 { get; set; }

        [DisplayName("Purch DISC3"), HalfWidth]
        public Double PDISC3 { get; set; }

        [Category("TAX")]
        [HalfWidth(UntilNext = true)]
        public Int16 TAX_TYPE { get; set; }
        public Double TAX1 { get; set; }
        public Double TAX2 { get; set; }
        public Double TAX3 { get; set; }
        public Double TAX4 { get; set; }

        [Tab("BAL")]
        [Category("BAL")]
        [HalfWidth]
        public Double BGNBAL { get; set; }
        [HalfWidth]
        public Double BGNCOST { get; set; }
        [HalfWidth]
        public Double UCOST { get; set; }
        [HalfWidth]
        public Double ItemBAL { set; get; }
        [HalfWidth]
        public Double MinQty { get; set; }
        [HalfWidth]
        public Double MaxQty { get; set; }
        [HalfWidth]
        public Double Itemlimit { get; set; }
        [Hidden]
        public String MITM_NM_AR { get; set; }
        [Hidden]
        public String MITM_NM_EN { get; set; }

        public Stream ItemPhoto { get; set; }

        [Tab("GL POSTED ")]
        [Category("GL POSTED ")]
        [HalfWidth]
        public String GLNO1 { get; set; }
        [HalfWidth]
        public String GLNO2 { get; set; }
        [HalfWidth]
        public String GLNO3 { get; set; }

        [Hidden]
        public String EnteredBy { get; set; }
        [Hidden]
        public String UpdatedBy { get; set; }
        [Hidden]
        public DateTime EntryDate { get; set; }
        [Hidden]
        public DateTime UpdateDate { get; set; }

    }
}