using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AS
{
    public partial class ColorEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "AS.ColorEditor";

        public ColorEditorAttribute()
            : base(Key)
        {
        }
    }
}
