namespace ALgorithmPro.Web.Modules.Common {
    export enum AccountNature {
        Debit = 1,
        Credit = 2
    }
    Serenity.Decorators.registerEnumType(AccountNature, 'ALgorithmPro.Web.Modules.Common.AccountNature');
}
