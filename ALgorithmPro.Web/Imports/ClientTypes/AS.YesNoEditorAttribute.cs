using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AS
{
    public partial class YesNoEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "AS.YesNoEditor";

        public YesNoEditorAttribute()
            : base(Key)
        {
        }
    }
}
