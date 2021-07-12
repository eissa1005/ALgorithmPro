using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ALgorithmPro.ALgorithm
{
    public partial class MasterEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "ALgorithmPro.ALgorithm.MasterEditor";

        public MasterEditorAttribute()
            : base(Key)
        {
        }
    }
}
