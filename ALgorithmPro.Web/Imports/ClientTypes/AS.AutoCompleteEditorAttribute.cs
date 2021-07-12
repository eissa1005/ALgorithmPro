using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AS
{
    public partial class AutoCompleteEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "AS.AutoCompleteEditor";

        public AutoCompleteEditorAttribute()
            : base(Key)
        {
        }

        public String LookupKey
        {
            get { return GetOption<String>("lookupKey"); }
            set { SetOption("lookupKey", value); }
        }

        public Double MinSearchLength
        {
            get { return GetOption<Double>("minSearchLength"); }
            set { SetOption("minSearchLength", value); }
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
