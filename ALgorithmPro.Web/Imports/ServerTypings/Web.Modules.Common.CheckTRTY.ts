namespace ALgorithmPro.Web.Modules.Common {
    export enum CheckTRTY {
        Deposit = 701,
        CASH = 702,
        PartialCASH = 703,
        Bounce = 704,
        Endorsement = 705,
        Close = 706,
        Stop = 707
    }
    Serenity.Decorators.registerEnumType(CheckTRTY, 'ALgorithmPro.Web.Modules.Common.CheckTRTY');
}
