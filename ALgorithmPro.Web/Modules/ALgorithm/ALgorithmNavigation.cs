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
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Purchase/Cash Purchase", typeof(MyPages.CashPurchASTRHController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Purchase/Credit Purchase", typeof(MyPages.PurchaseController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Purchase/Cash Restore", typeof(MyPages.CashRestoreController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Purchase/Restore Purchase", typeof(MyPages.RestorePurchaseController), icon: null)]


[assembly: NavigationMenu(13000, "ALgorithm/Transactions/Sales", icon: "fa-cube")]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Sales/Cash Sales", typeof(MyPages.CashSalesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Sales/Credit Sales", typeof(MyPages.SalesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Sales/Cash Return", typeof(MyPages.CashReturnController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transactions/Sales/Credit Return", typeof(MyPages.ReturnSalesController), icon: null)]

[assembly: NavigationMenu(13000, "ALgorithm/Transfer", icon: "fa-cube")]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transfer/TransferIn", typeof(MyPages.TransferInController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Transfer/TransferTo", typeof(MyPages.TransferToController), icon: null)]

[assembly: NavigationMenu(13000, "ALgorithm/Inventory", icon: "fa-cube")]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Inventory/AddInventory", typeof(MyPages.AddInventoryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Inventory/RemoveInventory", typeof(MyPages.RemoveInventoryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Inventory/CorruptedInventory", typeof(MyPages.CorruptedController), icon: null)]

[assembly: NavigationMenu(13000, "ALgorithm/Cash", icon: "fa-cube")]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Cash/CashReceive", typeof(MyPages.CashReceiveController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Cash/CashPayed", typeof(MyPages.CashPayedController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Cash/Expenses", typeof(MyPages.ExpensesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Cash/Revenu", typeof(MyPages.RevenuesController), icon: null)]


[assembly: NavigationMenu(14000, "ALgorithm/Checks", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Checks/Checks", typeof(MyPages.ChecksController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ALgorithm/Checks/CheckTransaction", typeof(MyPages.CheckTRController), icon: null)]


