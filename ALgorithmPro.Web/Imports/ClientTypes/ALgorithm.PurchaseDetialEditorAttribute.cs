using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ALgorithmPro.ALgorithm
{
    public partial class PurchaseDetialEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ALgorithmPro.ALgorithm.PurchaseDetialEditor";

        public PurchaseDetialEditorAttribute()
            : base(Key)
        {
        }
    }
}
