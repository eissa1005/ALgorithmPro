using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ALgorithmPro.ALgorithm
{
    public partial class FreightFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "ALgorithmPro.ALgorithm.FreightFormatter";

        public FreightFormatterAttribute()
            : base(Key)
        {
        }
    }
}
