using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AS
{
    public partial class YesNoColoredFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "AS.YesNoColoredFormatter";

        public YesNoColoredFormatterAttribute()
            : base(Key)
        {
        }
    }
}
