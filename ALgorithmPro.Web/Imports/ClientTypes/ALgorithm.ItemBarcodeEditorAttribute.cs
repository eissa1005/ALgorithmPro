﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ALgorithmPro.ALgorithm
{
    public partial class ItemBarcodeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ALgorithmPro.ALgorithm.ItemBarcodeEditor";

        public ItemBarcodeEditorAttribute()
            : base(Key)
        {
        }
    }
}