using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ALgorithmPro
{
    public class Contstants
    {
        public const string GeneralSetting = "اعدادات عامه";
        public const string salesSettings = "اعدادات المبيعات";
        public const string purchaseSettings = "اعدادات المشتريات";
        public const string DefaultStore = "المخزن الافتراضى";
        public const string DefaultDrawer = "الخزينة الافتراضية";
        public const string DefaultCustomer = "العميل الافتراضى ";
        public const string DefaultSupplier = "المورد الافتراضى";
        public const string CanChangeDrawer = "السماح بتغير الخزينة";
        public const string CanChangeStore = "السماح بتغيير المخزن";
        public const string CanChangeCustomer = "السماح بتغيير العميل";
        public const string canChangeSupplier = "السماح بتغيير المورد";
        public const string AllowSellSupplier = "السماح بالبيع للموردين";
        public const string AllowSaleWithoutBalanceForItems = "السماح بالبيع بدون رصيد للصنف";
        public const string AllowShowChangehistory = "السماح بعرض سجل التغييرات";
        public const string CanShowCostValue = "السماح بعرض تكلفة الصنف";
        public const string MaxDiscountInvoice = "اقصى خصم مسموح للفاتورة";
        public const string MaxDiscountPreItems = "اقصى خصم مسموح للصنف فى الفاتورة";
        public const string CanChangePaid = "السماح بتغيير المبلغ المدفوع";
        public const string CanChangeItemPrice = "السماح بتغيير سعر الصنف";
        public const string CanChangeDisc = "السماح بتغيير الخصم";
        public const string CanChangeDate = " السماح بتغيير التاريخ فى الفاتورة";
        public const string CanChangeTAX = "السماح بتغيير الضريبة";
        public const string CanChangePriceType = "السماح بتغيير نوع السعر";
        public const string CanChangeReturnQTY = "السماح بتغيير الكمية المرتجعة";
        public const string CanSellCustomerTAX = "السماح بالبيع لعميل ضريبى";
        public const string CanChangeExpenses = "السماح بتغيير المصروفات الاخرى على اجمالى الفاتورة";
        public const string CanChangeAdditions = "السماح بتغيير الاضافات الاخرى على اجمالى الفاتورة";
        public const string CustomerExceededMaxCreditLimit = " عند البيع لعميل تجاوز حد الائتمان";
        public const string CanDeleteItemsInvoices = " السماح بحذف اصناف من الفاتورة ";
        public const string CanChangeSalesReps = " السماح بتغيير المندوب فى الفاتورة ";
        public const string CanChangePackage = " السماح بتغيير وحدات القياس للصنف فى الفاتورة ";
        public const string CanChangePurchasePrice = " السماح بتغيير سعر الشراء ";
        public const string CanBuyFromCustomer = " السماح بالشراء من العملاء";
        public const string CanChangePurchaseDateInVoice = " السماح بتغيير تاريخ الشراء";
        public const string CanChangePurchaseDisc = " السماح بتغير الخصم";
        public const string CanChangeRestoreQTY = " السماح بتغير الكمية المرتدة";
        public const string CanChangePurchaseExpenses = " السماح بتغير المصروفات الاخرى على اجمالى الفاتورة";
        public const string CanChangePurchaseAdditions = " السماح بتغير الاضافات الاخرى  على اجمالى الفاتورة ";
        public const string CheckDeposit = "ايداع";
        public const string CheckCash = "تحصيل";
        public const string CheckPartialCash = "تحصيل جزئى";
        public const string CheckBounce = "ارتداد";
        public const string Endorsement = "تظهير";
        public const string CloseCheck = "إالغاء شيك";
        public const string StopCheck = "وقف شيك";
        public const string ScreenCaption = "اسم الشاشة";
        public const string CanShow = "عرض";
        public const string CanOpen = "فتح";
        public const string CanAdd = "إضافه";
        public const string CanEdit = "تعديل";
        public const string CanDelete = "حذف";
        public const string CanPrint = "طباعه";
        public static class FunctionName
        {
            public const string GetAccName = "GetAcc_Name";
            public const string GetRegionName = "GetRegion_Name";
            public const string GetCityName = "GetCity_Name";
            public const string GetDistrictName = "GetDistrict_Name";
            public const string GetRepName = "GetRep_Name";
            public const string GetCostName = "GetCst_Name";
            public const string GetSumName = "GetSum_Name";
            public const string GetSSumName = "GetSSum_Name";
            public const string GetStoreName = "GetStore_Name";
            public const string GetSuperName = "GetSuper_Name";
            public const string GetTRTYNAME = "GetTRTY_NAME";
            public const string GetItemName = "GetItem_Name";
            public const string GetMAXASTRH = "GetMAXASTRH";
            public const string GetPKNAME = "GetPK_NAME";
            public const string GetPKRAT = "GetPKRAT";
            public const string GetCurrencyRate = "GetCurrencyRate";
            public const string GetCurrencyName = "GetCurrency_Name";
            public const string GetPriceName = "GetPrice_Name";
            public const string GetRound = "Round";
            public const string NumString = "Num_To_Str";
            public const string GetCheckTRTYName = "GetCHKTRTY_NAME";
            public const string FormatDate = "FormatDate";
            public const string FormatDateTime = "FormatDateTime";
            public const string NumToWords = "NumToWords";
            public const string ItemBAL = "ItemBAL";
            public const string GetMaxACCTRH = "GetMaxACCTRH";
        }
        public static class StoredName
        {
            public const string ADJCST = "ADJCST";
            public const string GetItemBAL = "GetItemBAL";
            public const string ADJITMLOCBAL = "ADJITMLOCBAL";
            public const string SP_ItemBAL = "SP_ItemBAL";
        }
        public static class ViewName
        {
            public const string ItemsView = "ItemsView";
            public const string ASCURRAT = "ASCURRAT";
        }

    }
}
