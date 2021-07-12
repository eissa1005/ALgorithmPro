using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AS
{
    public partial class MonthYearFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "AS.MonthYearFormatter";

        public MonthYearFormatterAttribute()
            : base(Key)
        {
        }
    }
}
