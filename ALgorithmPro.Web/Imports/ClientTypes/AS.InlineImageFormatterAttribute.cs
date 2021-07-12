using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace AS
{
    public partial class InlineImageFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "AS.InlineImageFormatter";

        public InlineImageFormatterAttribute()
            : base(Key)
        {
        }

        public String DefaultImage
        {
            get { return GetOption<String>("defaultImage"); }
            set { SetOption("defaultImage", value); }
        }

        public String FileProperty
        {
            get { return GetOption<String>("fileProperty"); }
            set { SetOption("fileProperty", value); }
        }

        public String MaxHeight
        {
            get { return GetOption<String>("maxHeight"); }
            set { SetOption("maxHeight", value); }
        }

        public String MaxWidth
        {
            get { return GetOption<String>("maxWidth"); }
            set { SetOption("maxWidth", value); }
        }

        public Boolean Thumb
        {
            get { return GetOption<Boolean>("thumb"); }
            set { SetOption("thumb", value); }
        }
    }
}
