using ALgorithmPro;
using ALgorithmPro.ALgorithm;
using Serenity.Navigation;
using MyPages = ALgorithmPro.ALgorithm.Pages;

[assembly: NavigationMenu(10000, "ALgorithm", icon: "fa-desktop")]
[assembly: NavigationMenu(10000, "ALgorithm/Files", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Files/Regions", typeof(MyPages.RegionsController), icon: "fa-map-o")]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Files/Cities", typeof(MyPages.CitiesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Files/Districts", typeof(MyPages.DistrictsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Files/Supervisors", typeof(MyPages.SupervisorsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Files/Price Types", typeof(MyPages.PriceTypesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Files/Stores", typeof(MyPages.StoresController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Files/REPS", typeof(MyPages.REPSController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Files/ASTRTY", typeof(MyPages.ASTRTYController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Files/Package", typeof(MyPages.PackageController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Files/ASCST", typeof(MyPages.ASCSTController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Files/SSUMS", typeof(MyPages.SSUMSController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Files/SUMS", typeof(MyPages.SUMSController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Files/Currency", typeof(MyPages.CurrencyController), icon: null)]
[assembly: NavigationMenu(11000, "ALgorithm/Items", icon: "fa-cube")]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Items/Item Groups", typeof(MyPages.ItemGroupsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Items/Item Sub Groups", typeof(MyPages.ItemSubGroupsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Items/Items", typeof(MyPages.ItemsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Items/ItemsLoc", typeof(MyPages.ItemsLocController), icon: null)]
[assembly: NavigationMenu(12000, "ALgorithm/Account", icon: "fa-credit-card")]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Account/Account", typeof(MyPages.ACCMFController), icon: null)]


[assembly: NavigationMenu(13000, "ALgorithm/Transactions", icon: "fa-cube")]
[assembly: NavigationMenu(13000, "ALgorithm/Transactions/Purchase", icon: "fa-cube")]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Purchase/CashPurchase", typeof(MyPages.CashPurchASTRHController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Purchase/CreditPurchase", typeof(MyPages.PurchaseController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Purchase/CashRestore", typeof(MyPages.CashRestoreASTRHController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Purchase/CreditRestore", typeof(MyPages.RestoreASTRHController), icon: null)]


[assembly: NavigationMenu(13000, "ALgorithm/Transactions/Sales", icon: "fa-cube")]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Sales/CashSales", typeof(MyPages.CashSalesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Sales/CreditSales", typeof(MyPages.SalesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Sales/CashReturn", typeof(MyPages.CashReturnASTRHController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Sales/CreditReturn", typeof(MyPages.ReturnASTRHController), icon: null)]


[assembly: NavigationMenu(14000, "ALgorithm/Checks", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Checks/Checks", typeof(MyPages.ChecksController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Checks/CheckTransaction", typeof(MyPages.CheckTRController), icon: null)]


