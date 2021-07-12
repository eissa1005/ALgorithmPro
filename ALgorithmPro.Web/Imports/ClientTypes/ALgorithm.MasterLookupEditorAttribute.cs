using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ALgorithmPro.ALgorithm
{
    public partial class MasterLookupEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "ALgorithmPro.ALgorithm.MasterLookupEditor";

        public MasterLookupEditorAttribute()
            : base(Key)
        {
        }
    }
}
