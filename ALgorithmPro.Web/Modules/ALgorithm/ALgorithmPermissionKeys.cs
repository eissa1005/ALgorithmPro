
using Serenity.ComponentModel;
using System.ComponentModel;

namespace ALgorithmPro
{
    [NestedPermissionKeys]
    [DisplayName("ALgorithm")]
    public class PermissionKeys
    {
        [ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Administration:Delete";
        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Administration:Modify";
        public const string View = "Administration:View";

        [Description("[General]")]
        public const string General = "Administration:General";
    }
}
