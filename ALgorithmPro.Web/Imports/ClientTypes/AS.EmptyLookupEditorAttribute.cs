using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AS
{
    public partial class EmptyLookupEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "AS.EmptyLookupEditor";

        public EmptyLookupEditorAttribute()
            : base(Key)
        {
        }
    }
}
