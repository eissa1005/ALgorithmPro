using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AS
{
    public partial class HardCodedLookupEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "AS.HardCodedLookupEditor";

        public HardCodedLookupEditorAttribute()
            : base(Key)
        {
        }

        public Boolean AllowOtherValue
        {
            get { return GetOption<Boolean>("allowOtherValue"); }
            set { SetOption("allowOtherValue", value); }
        }

        public object SourceArray
        {
            get { return GetOption<object>("sourceArray"); }
            set { SetOption("sourceArray", value); }
        }

        public String SourceCSV
        {
            get { return GetOption<String>("sourceCSV"); }
            set { SetOption("sourceCSV", value); }
        }
    }
}
