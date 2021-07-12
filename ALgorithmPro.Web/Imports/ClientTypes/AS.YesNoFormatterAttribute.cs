using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AS
{
    public partial class YesNoFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "AS.YesNoFormatter";

        public YesNoFormatterAttribute()
            : base(Key)
        {
        }
    }
}
