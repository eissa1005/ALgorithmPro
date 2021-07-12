using Serenity.Services;

namespace ALgorithmPro.Administration
{
    public class UserRoleListRequest : ServiceRequest
    {
        public int? UserID { get; set; }
    }
}