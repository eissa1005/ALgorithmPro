using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ALgorithmPro.ALgorithm.Forms
{
    [FormScript("ALgorithm.ItemSubGroups")]
    [BasedOnRow(typeof(Entities.ItemSubGroupsRow), CheckNames = true)]
    public class ItemSubGroupsForm
    {
        public String CITM_CD { get; set; }
        public String Name_AR { get; set; }
        public String Name_EN { get; set; }
        public String ParentID { get; set; }
        
        [Hidden]
        public Int32 OrderBy { get; set; }
        public Int32 Status { get; set; }
        
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