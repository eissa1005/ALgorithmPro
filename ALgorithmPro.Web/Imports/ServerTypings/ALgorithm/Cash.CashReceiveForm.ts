
namespace ALgorithmPro.ALgorithm/Cash {
    export class CashReceiveForm extends Serenity.PrefixedContext {
        static formKey = 'ALgorithm/Cash.CashReceive';
    }

    export interface CashReceiveForm {
        Astrhid: Serenity.IntegerEditor;
        TrTy: Serenity.IntegerEditor;
        TrNo: Serenity.IntegerEditor;
        StoreId: Serenity.StringEditor;
        TrDt: Serenity.DateEditor;
        TrtyName: Serenity.StringEditor;
        TrDs: Serenity.IntegerEditor;
        AccNo: Serenity.StringEditor;
        AccName: Serenity.StringEditor;
        CashBoxId: Serenity.StringEditor;
        CashName: Serenity.StringEditor;
        StoreName: Serenity.StringEditor;
        GlHeaderId: Serenity.IntegerEditor;
        PStoreId: Serenity.StringEditor;
        PtrTy: Serenity.IntegerEditor;
        PtrNo: Serenity.IntegerEditor;
        SupervisorId: Serenity.StringEditor;
        CstCd: Serenity.StringEditor;
        CstName: Serenity.StringEditor;
        HdscrAr: Serenity.StringEditor;
        HdscrEn: Serenity.StringEditor;
        Paid: Serenity.DecimalEditor;
        TotalValue: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        Flag: Serenity.IntegerEditor;
        Baldb: Serenity.DecimalEditor;
        Balcr: Serenity.DecimalEditor;
        Bal: Serenity.DecimalEditor;
        SumCd: Serenity.StringEditor;
        SsumCd: Serenity.StringEditor;
        AccNo2: Serenity.StringEditor;
        AccName2: Serenity.StringEditor;
        AccNo3: Serenity.StringEditor;
        AccName3: Serenity.StringEditor;
        ChkNo: Serenity.StringEditor;
        ChkTyp: Serenity.IntegerEditor;
        CkhtypName: Serenity.StringEditor;
        Chktrty: Serenity.IntegerEditor;
        ChktrtyName: Serenity.StringEditor;
        IsuDt: Serenity.DateEditor;
        DueDt: Serenity.DateEditor;
        Amt: Serenity.DecimalEditor;
        AmtPaid: Serenity.DecimalEditor;
        ChkExpensvl: Serenity.DecimalEditor;
        ChkTotalValue: Serenity.DecimalEditor;
        Bnkid: Serenity.StringEditor;
        BnkName: Serenity.StringEditor;
        Cbnkid: Serenity.StringEditor;
        CbnkName: Serenity.StringEditor;
        RpaccAccno: Serenity.StringEditor;
        RpaccName: Serenity.StringEditor;
        DeptBnkid: Serenity.StringEditor;
        DeptBnkname: Serenity.StringEditor;
        NotesAccno: Serenity.StringEditor;
        NotesAccname: Serenity.StringEditor;
        EndorsedAccno: Serenity.StringEditor;
        EndorsedName: Serenity.StringEditor;
        ExpensesId: Serenity.StringEditor;
        ExpensesName: Serenity.StringEditor;
        RepCd: Serenity.StringEditor;
        RepName: Serenity.StringEditor;
        RepCd2: Serenity.StringEditor;
        RepName2: Serenity.StringEditor;
        ExpenseVl: Serenity.DecimalEditor;
        CurrencyId: Serenity.StringEditor;
        CurrencyName: Serenity.StringEditor;
        Rate: Serenity.DecimalEditor;
        CurVl: Serenity.DecimalEditor;
        GlPosted: Serenity.BooleanEditor;
        CloseStatus: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }

    [
        ['Astrhid', () => Serenity.IntegerEditor],
        ['TrTy', () => Serenity.IntegerEditor],
        ['TrNo', () => Serenity.IntegerEditor],
        ['StoreId', () => Serenity.StringEditor],
        ['TrDt', () => Serenity.DateEditor],
        ['TrtyName', () => Serenity.StringEditor],
        ['TrDs', () => Serenity.IntegerEditor],
        ['AccNo', () => Serenity.StringEditor],
        ['AccName', () => Serenity.StringEditor],
        ['CashBoxId', () => Serenity.StringEditor],
        ['CashName', () => Serenity.StringEditor],
        ['StoreName', () => Serenity.StringEditor],
        ['GlHeaderId', () => Serenity.IntegerEditor],
        ['PStoreId', () => Serenity.StringEditor],
        ['PtrTy', () => Serenity.IntegerEditor],
        ['PtrNo', () => Serenity.IntegerEditor],
        ['SupervisorId', () => Serenity.StringEditor],
        ['CstCd', () => Serenity.StringEditor],
        ['CstName', () => Serenity.StringEditor],
        ['HdscrAr', () => Serenity.StringEditor],
        ['HdscrEn', () => Serenity.StringEditor],
        ['Paid', () => Serenity.DecimalEditor],
        ['TotalValue', () => Serenity.DecimalEditor],
        ['NetTotal', () => Serenity.DecimalEditor],
        ['Flag', () => Serenity.IntegerEditor],
        ['Baldb', () => Serenity.DecimalEditor],
        ['Balcr', () => Serenity.DecimalEditor],
        ['Bal', () => Serenity.DecimalEditor],
        ['SumCd', () => Serenity.StringEditor],
        ['SsumCd', () => Serenity.StringEditor],
        ['AccNo2', () => Serenity.StringEditor],
        ['AccName2', () => Serenity.StringEditor],
        ['AccNo3', () => Serenity.StringEditor],
        ['AccName3', () => Serenity.StringEditor],
        ['ChkNo', () => Serenity.StringEditor],
        ['ChkTyp', () => Serenity.IntegerEditor],
        ['CkhtypName', () => Serenity.StringEditor],
        ['Chktrty', () => Serenity.IntegerEditor],
        ['ChktrtyName', () => Serenity.StringEditor],
        ['IsuDt', () => Serenity.DateEditor],
        ['DueDt', () => Serenity.DateEditor],
        ['Amt', () => Serenity.DecimalEditor],
        ['AmtPaid', () => Serenity.DecimalEditor],
        ['ChkExpensvl', () => Serenity.DecimalEditor],
        ['ChkTotalValue', () => Serenity.DecimalEditor],
        ['Bnkid', () => Serenity.StringEditor],
        ['BnkName', () => Serenity.StringEditor],
        ['Cbnkid', () => Serenity.StringEditor],
        ['CbnkName', () => Serenity.StringEditor],
        ['RpaccAccno', () => Serenity.StringEditor],
        ['RpaccName', () => Serenity.StringEditor],
        ['DeptBnkid', () => Serenity.StringEditor],
        ['DeptBnkname', () => Serenity.StringEditor],
        ['NotesAccno', () => Serenity.StringEditor],
        ['NotesAccname', () => Serenity.StringEditor],
        ['EndorsedAccno', () => Serenity.StringEditor],
        ['EndorsedName', () => Serenity.StringEditor],
        ['ExpensesId', () => Serenity.StringEditor],
        ['ExpensesName', () => Serenity.StringEditor],
        ['RepCd', () => Serenity.StringEditor],
        ['RepName', () => Serenity.StringEditor],
        ['RepCd2', () => Serenity.StringEditor],
        ['RepName2', () => Serenity.StringEditor],
        ['ExpenseVl', () => Serenity.DecimalEditor],
        ['CurrencyId', () => Serenity.StringEditor],
        ['CurrencyName', () => Serenity.StringEditor],
        ['Rate', () => Serenity.DecimalEditor],
        ['CurVl', () => Serenity.DecimalEditor],
        ['GlPosted', () => Serenity.BooleanEditor],
        ['CloseStatus', () => Serenity.IntegerEditor],
        ['Status', () => Serenity.IntegerEditor],
        ['EnteredBy', () => Serenity.StringEditor],
        ['EntryDate', () => Serenity.DateEditor],
        ['UpdatedBy', () => Serenity.StringEditor],
        ['UpdateDate', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(CashReceiveForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}