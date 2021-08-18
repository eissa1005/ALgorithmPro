using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ALgorithmPro.ALgorithm
{
    public partial class TransferToASTRDEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ALgorithmPro.ALgorithm.TransferToASTRDEditor";

        public TransferToASTRDEditorAttribute()
            : base(Key)
        {
        }
    }
}
