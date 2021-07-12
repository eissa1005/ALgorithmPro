using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AS
{
    public partial class MonthYearEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "AS.MonthYearEditor";

        public MonthYearEditorAttribute()
            : base(Key)
        {
        }
    }
}
