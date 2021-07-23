
namespace ALgorithmPro.ALgorithm/Cash {
    export interface CashReceiveRow {
        Astrhid?: number;
        HeaderId?: number;
        TrTy?: number;
        TrNo?: number;
        StoreId?: string;
        TrDt?: string;
        TrtyName?: string;
        TrDs?: number;
        AccNo?: string;
        AccName?: string;
        CashBoxId?: string;
        CashName?: string;
        StoreName?: string;
        GlHeaderId?: number;
        PStoreId?: string;
        PtrTy?: number;
        PtrNo?: number;
        SupervisorId?: string;
        CstCd?: string;
        CstName?: string;
        HdscrAr?: string;
        HdscrEn?: string;
        Paid?: number;
        TotalValue?: number;
        NetTotal?: number;
        Flag?: number;
        Baldb?: number;
        Balcr?: number;
        Bal?: number;
        SumCd?: string;
        SsumCd?: string;
        AccNo2?: string;
        AccName2?: string;
        AccNo3?: string;
        AccName3?: string;
        ChkNo?: string;
        ChkTyp?: number;
        CkhtypName?: string;
        Chktrty?: number;
        ChktrtyName?: string;
        IsuDt?: string;
        DueDt?: string;
        Amt?: number;
        AmtPaid?: number;
        ChkExpensvl?: number;
        ChkTotalValue?: number;
        Bnkid?: string;
        BnkName?: string;
        Cbnkid?: string;
        CbnkName?: string;
        RpaccAccno?: string;
        RpaccName?: string;
        DeptBnkid?: string;
        DeptBnkname?: string;
        NotesAccno?: string;
        NotesAccname?: string;
        EndorsedAccno?: string;
        EndorsedName?: string;
        ExpensesId?: string;
        ExpensesName?: string;
        RepCd?: string;
        RepName?: string;
        RepCd2?: string;
        RepName2?: string;
        ExpenseVl?: number;
        CurrencyId?: string;
        CurrencyName?: string;
        Rate?: number;
        CurVl?: number;
        GlPosted?: boolean;
        CloseStatus?: number;
        Status?: number;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        AstrhidTrTy?: number;
        AstrhidTrNo?: number;
        AstrhidTrDt?: string;
        AstrhidStoreId?: string;
        AstrhidTrDs?: number;
        AstrhidTrtyName?: string;
        AstrhidStoreName?: string;
        AstrhidDocTransNo?: string;
        AstrhidOrderNo?: string;
        AstrhidAccNo?: string;
        AstrhidAccName?: string;
        AstrhidCashBoxId?: string;
        AstrhidCashName?: string;
        AstrhidAccNo2?: string;
        AstrhidAccName2?: string;
        AstrhidAccNo3?: string;
        AstrhidAccName3?: string;
        AstrhidRepCd?: string;
        AstrhidRepName?: string;
        AstrhidRepCd2?: string;
        AstrhidRepName2?: string;
        AstrhidCstCd?: string;
        AstrhidCstName?: string;
        AstrhidSumCd?: string;
        AstrhidSumName?: string;
        AstrhidSsumCd?: string;
        AstrhidSsumName?: string;
        AstrhidSupervisorId?: string;
        AstrhidSupervisorName?: string;
        AstrhidPStoreId?: string;
        AstrhidPtrNo?: number;
        AstrhidPtrTy?: number;
        AstrhidHdscrAr?: string;
        AstrhidHdscrEn?: string;
        AstrhidPriceId?: string;
        AstrhidPriceedit?: boolean;
        AstrhidReferenceNo?: number;
        AstrhidHdisc?: number;
        AstrhidHdisc1?: number;
        AstrhidHdisc2?: number;
        AstrhidHdisc3?: number;
        AstrhidHdisc4?: number;
        AstrhidHdisc1R?: number;
        AstrhidHdisc2R?: number;
        AstrhidHdisc3R?: number;
        AstrhidHtax?: number;
        AstrhidHtax1?: number;
        AstrhidHtax2?: number;
        AstrhidHtax3?: number;
        AstrhidHtax4?: number;
        AstrhidHtax1R?: number;
        AstrhidHtax2R?: number;
        AstrhidHtax3R?: number;
        AstrhidHAddtions?: number;
        AstrhidHdrAddtionsR?: number;
        AstrhidPeriodCredit?: string;
        AstrhidExpensevl?: number;
        AstrhidNotes?: string;
        AstrhidPaid?: number;
        AstrhidTotal?: number;
        AstrhidNetTotal?: number;
        AstrhidBalance?: number;
        AstrhidNetBeforeTax?: number;
        AstrhidNetAfterTax?: number;
        AstrhidPeriodterm?: number;
        AstrhidInvStatus?: number;
        AstrhidCurrencyId?: string;
        AstrhidCurrencyName?: string;
        AstrhidRate?: number;
        AstrhidCurVl?: number;
        AstrhidPrtCnt?: number;
        AstrhidStatus?: number;
        AstrhidEnteredBy?: string;
        AstrhidEntryDate?: string;
        AstrhidUpdatedBy?: string;
        AstrhidUpdateDate?: string;
    }

    export namespace CashReceiveRow {
        export const idProperty = 'HeaderId';
        export const nameProperty = 'StoreId';
        export const localTextPrefix = 'ALgorithm/Cash.CashReceive';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Astrhid;
            export declare const HeaderId;
            export declare const TrTy;
            export declare const TrNo;
            export declare const StoreId;
            export declare const TrDt;
            export declare const TrtyName;
            export declare const TrDs;
            export declare const AccNo;
            export declare const AccName;
            export declare const CashBoxId;
            export declare const CashName;
            export declare const StoreName;
            export declare const GlHeaderId;
            export declare const PStoreId;
            export declare const PtrTy;
            export declare const PtrNo;
            export declare const SupervisorId;
            export declare const CstCd;
            export declare const CstName;
            export declare const HdscrAr;
            export declare const HdscrEn;
            export declare const Paid;
            export declare const TotalValue;
            export declare const NetTotal;
            export declare const Flag;
            export declare const Baldb;
            export declare const Balcr;
            export declare const Bal;
            export declare const SumCd;
            export declare const SsumCd;
            export declare const AccNo2;
            export declare const AccName2;
            export declare const AccNo3;
            export declare const AccName3;
            export declare const ChkNo;
            export declare const ChkTyp;
            export declare const CkhtypName;
            export declare const Chktrty;
            export declare const ChktrtyName;
            export declare const IsuDt;
            export declare const DueDt;
            export declare const Amt;
            export declare const AmtPaid;
            export declare const ChkExpensvl;
            export declare const ChkTotalValue;
            export declare const Bnkid;
            export declare const BnkName;
            export declare const Cbnkid;
            export declare const CbnkName;
            export declare const RpaccAccno;
            export declare const RpaccName;
            export declare const DeptBnkid;
            export declare const DeptBnkname;
            export declare const NotesAccno;
            export declare const NotesAccname;
            export declare const EndorsedAccno;
            export declare const EndorsedName;
            export declare const ExpensesId;
            export declare const ExpensesName;
            export declare const RepCd;
            export declare const RepName;
            export declare const RepCd2;
            export declare const RepName2;
            export declare const ExpenseVl;
            export declare const CurrencyId;
            export declare const CurrencyName;
            export declare const Rate;
            export declare const CurVl;
            export declare const GlPosted;
            export declare const CloseStatus;
            export declare const Status;
            export declare const EnteredBy;
            export declare const EntryDate;
            export declare const UpdatedBy;
            export declare const UpdateDate;
            export declare const AstrhidTrTy;
            export declare const AstrhidTrNo;
            export declare const AstrhidTrDt;
            export declare const AstrhidStoreId;
            export declare const AstrhidTrDs;
            export declare const AstrhidTrtyName;
            export declare const AstrhidStoreName;
            export declare const AstrhidDocTransNo;
            export declare const AstrhidOrderNo;
            export declare const AstrhidAccNo;
            export declare const AstrhidAccName;
            export declare const AstrhidCashBoxId;
            export declare const AstrhidCashName;
            export declare const AstrhidAccNo2;
            export declare const AstrhidAccName2;
            export declare const AstrhidAccNo3;
            export declare const AstrhidAccName3;
            export declare const AstrhidRepCd;
            export declare const AstrhidRepName;
            export declare const AstrhidRepCd2;
            export declare const AstrhidRepName2;
            export declare const AstrhidCstCd;
            export declare const AstrhidCstName;
            export declare const AstrhidSumCd;
            export declare const AstrhidSumName;
            export declare const AstrhidSsumCd;
            export declare const AstrhidSsumName;
            export declare const AstrhidSupervisorId;
            export declare const AstrhidSupervisorName;
            export declare const AstrhidPStoreId;
            export declare const AstrhidPtrNo;
            export declare const AstrhidPtrTy;
            export declare const AstrhidHdscrAr;
            export declare const AstrhidHdscrEn;
            export declare const AstrhidPriceId;
            export declare const AstrhidPriceedit;
            export declare const AstrhidReferenceNo;
            export declare const AstrhidHdisc;
            export declare const AstrhidHdisc1;
            export declare const AstrhidHdisc2;
            export declare const AstrhidHdisc3;
            export declare const AstrhidHdisc4;
            export declare const AstrhidHdisc1R;
            export declare const AstrhidHdisc2R;
            export declare const AstrhidHdisc3R;
            export declare const AstrhidHtax;
            export declare const AstrhidHtax1;
            export declare const AstrhidHtax2;
            export declare const AstrhidHtax3;
            export declare const AstrhidHtax4;
            export declare const AstrhidHtax1R;
            export declare const AstrhidHtax2R;
            export declare const AstrhidHtax3R;
            export declare const AstrhidHAddtions;
            export declare const AstrhidHdrAddtionsR;
            export declare const AstrhidPeriodCredit;
            export declare const AstrhidExpensevl;
            export declare const AstrhidNotes;
            export declare const AstrhidPaid;
            export declare const AstrhidTotal;
            export declare const AstrhidNetTotal;
            export declare const AstrhidBalance;
            export declare const AstrhidNetBeforeTax;
            export declare const AstrhidNetAfterTax;
            export declare const AstrhidPeriodterm;
            export declare const AstrhidInvStatus;
            export declare const AstrhidCurrencyId;
            export declare const AstrhidCurrencyName;
            export declare const AstrhidRate;
            export declare const AstrhidCurVl;
            export declare const AstrhidPrtCnt;
            export declare const AstrhidStatus;
            export declare const AstrhidEnteredBy;
            export declare const AstrhidEntryDate;
            export declare const AstrhidUpdatedBy;
            export declare const AstrhidUpdateDate;
        }

        [
            'Astrhid',
            'HeaderId',
            'TrTy',
            'TrNo',
            'StoreId',
            'TrDt',
            'TrtyName',
            'TrDs',
            'AccNo',
            'AccName',
            'CashBoxId',
            'CashName',
            'StoreName',
            'GlHeaderId',
            'PStoreId',
            'PtrTy',
            'PtrNo',
            'SupervisorId',
            'CstCd',
            'CstName',
            'HdscrAr',
            'HdscrEn',
            'Paid',
            'TotalValue',
            'NetTotal',
            'Flag',
            'Baldb',
            'Balcr',
            'Bal',
            'SumCd',
            'SsumCd',
            'AccNo2',
            'AccName2',
            'AccNo3',
            'AccName3',
            'ChkNo',
            'ChkTyp',
            'CkhtypName',
            'Chktrty',
            'ChktrtyName',
            'IsuDt',
            'DueDt',
            'Amt',
            'AmtPaid',
            'ChkExpensvl',
            'ChkTotalValue',
            'Bnkid',
            'BnkName',
            'Cbnkid',
            'CbnkName',
            'RpaccAccno',
            'RpaccName',
            'DeptBnkid',
            'DeptBnkname',
            'NotesAccno',
            'NotesAccname',
            'EndorsedAccno',
            'EndorsedName',
            'ExpensesId',
            'ExpensesName',
            'RepCd',
            'RepName',
            'RepCd2',
            'RepName2',
            'ExpenseVl',
            'CurrencyId',
            'CurrencyName',
            'Rate',
            'CurVl',
            'GlPosted',
            'CloseStatus',
            'Status',
            'EnteredBy',
            'EntryDate',
            'UpdatedBy',
            'UpdateDate',
            'AstrhidTrTy',
            'AstrhidTrNo',
            'AstrhidTrDt',
            'AstrhidStoreId',
            'AstrhidTrDs',
            'AstrhidTrtyName',
            'AstrhidStoreName',
            'AstrhidDocTransNo',
            'AstrhidOrderNo',
            'AstrhidAccNo',
            'AstrhidAccName',
            'AstrhidCashBoxId',
            'AstrhidCashName',
            'AstrhidAccNo2',
            'AstrhidAccName2',
            'AstrhidAccNo3',
            'AstrhidAccName3',
            'AstrhidRepCd',
            'AstrhidRepName',
            'AstrhidRepCd2',
            'AstrhidRepName2',
            'AstrhidCstCd',
            'AstrhidCstName',
            'AstrhidSumCd',
            'AstrhidSumName',
            'AstrhidSsumCd',
            'AstrhidSsumName',
            'AstrhidSupervisorId',
            'AstrhidSupervisorName',
            'AstrhidPStoreId',
            'AstrhidPtrNo',
            'AstrhidPtrTy',
            'AstrhidHdscrAr',
            'AstrhidHdscrEn',
            'AstrhidPriceId',
            'AstrhidPriceedit',
            'AstrhidReferenceNo',
            'AstrhidHdisc',
            'AstrhidHdisc1',
            'AstrhidHdisc2',
            'AstrhidHdisc3',
            'AstrhidHdisc4',
            'AstrhidHdisc1R',
            'AstrhidHdisc2R',
            'AstrhidHdisc3R',
            'AstrhidHtax',
            'AstrhidHtax1',
            'AstrhidHtax2',
            'AstrhidHtax3',
            'AstrhidHtax4',
            'AstrhidHtax1R',
            'AstrhidHtax2R',
            'AstrhidHtax3R',
            'AstrhidHAddtions',
            'AstrhidHdrAddtionsR',
            'AstrhidPeriodCredit',
            'AstrhidExpensevl',
            'AstrhidNotes',
            'AstrhidPaid',
            'AstrhidTotal',
            'AstrhidNetTotal',
            'AstrhidBalance',
            'AstrhidNetBeforeTax',
            'AstrhidNetAfterTax',
            'AstrhidPeriodterm',
            'AstrhidInvStatus',
            'AstrhidCurrencyId',
            'AstrhidCurrencyName',
            'AstrhidRate',
            'AstrhidCurVl',
            'AstrhidPrtCnt',
            'AstrhidStatus',
            'AstrhidEnteredBy',
            'AstrhidEntryDate',
            'AstrhidUpdatedBy',
            'AstrhidUpdateDate'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}