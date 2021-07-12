using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AS
{
    public partial class DateTimePickerEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "AS.DateTimePickerEditor";

        public DateTimePickerEditorAttribute()
            : base(Key)
        {
        }
    }
}
