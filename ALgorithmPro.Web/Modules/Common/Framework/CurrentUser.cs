using System;

namespace ALgorithmPro
{
    public class CurrentUser
    {
        public static string ID { set; get; }
        public static string DisplayName { get; set; }
        public static string Email { get; set; }
        public static string UserImage { get; set; }
        public static short IsActive { get; set; }
        public static int UserID { get; set; }
        public static string Username { get; set; }
        public static string PasswordHash { get; set; }
        public static string PasswordSalt { get; set; }
        public static string Source { get; set; }
        public static DateTime? UpdateDate { get; set; }
        public static DateTime? LastDirectoryUpdate { get; set; }
    }

}
