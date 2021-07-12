using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AS
{
    public partial class JsonViewerAttribute : CustomEditorAttribute
    {
        public const string Key = "AS.JsonViewer";

        public JsonViewerAttribute()
            : base(Key)
        {
        }
    }
}
