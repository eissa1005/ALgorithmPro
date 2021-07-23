/// <reference path="../../../Modules/ALgorithmsys/AS/AS.d.ts" />
/// <reference path="../../../typings/serenity/Serenity.CoreLib.d.ts" />
/// <reference path="../../../typings/jspdf/jspdf.autotable.d.ts" />
/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare var isPageRefreshRequired: boolean;
declare namespace AS {
    var queryString: {};
    var jsPDFHeaderImageData: string;
    var jsPDFHeaderTitle: string;
    var useSerenityInlineEditors: boolean;
    var DefaultMainGridOptions: ExtGridOptions;
    var DefaultEditorGridOptions: ExtGridOptions;
    var DefaultEntityDialogOptions: ExtDialogOptions;
    var DefaultEditorDialogOptions: ExtDialogOptions;
    var fiscalYearMonths: number[];
}
declare namespace AS {
    class GridBase<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {
        protected getRowType(): {
            idProperty?: string;
            localTextPrefix?: string;
            nameProperty?: string;
            insertPermission?: string;
            updatePermission?: string;
            deletePermission?: string;
        };
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getDeletePermission(): string;
        protected getASGridOptions(): ExtGridOptions;
        protected isPickerMode(): boolean;
        protected getGrouping(): Slick.GroupInfo<TItem>[];
        isReadOnly: boolean;
        isRequired: boolean;
        isAutosized: boolean;
        isChildGrid: boolean;
        nextRowNumber: number;
        protected nextId: number;
        autoColumnSizePlugin: any;
        rowSelection: Serenity.GridRowSelectionMixin;
        pickerDialog: GridItemPickerDialog;
        constructor(container: JQuery, options?: TOptions);
        protected markupReady(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getReportRequest(): ListReportRequest;
        protected getColumns(): Slick.Column[];
        protected createSlickGrid(): Slick.Grid;
        resetColumns(columns: Slick.Column[]): void;
        resizeAllCulumn(): void;
        protected getSlickOptions(): any;
        protected getViewOptions(): Slick.RemoteViewOptions;
        protected getPrintRowServiceMethod(): string;
        protected getNextId(): string;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected resetRowNumber(): void;
        setGrouping(groupInfo: Slick.GroupInfo<TItem>[]): void;
        protected getIncludeColumns(include: {
            [key: string]: boolean;
        }): void;
        protected getDefaultSortBy(): any[];
        protected onViewProcessData(response: Serenity.ListResponse<TItem>): Serenity.ListResponse<TItem>;
        initDialog(dialog: DialogBase<TItem, any>): void;
        get selectedItems(): TItem[];
        set selectedKeys(value: any[]);
        protected onViewSubmit(): boolean;
        protected onItemsChanged(value: TItem): void;
    }
}
declare namespace AS {
    class ReportGridBase<TItem, TOptions> extends AS.GridBase<TItem, TOptions> {
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace AS {
    class ReportPanelBase<TRequest> extends Serenity.PropertyPanel<TRequest, any> {
        protected getReportTitle(): string;
        protected getReportKey(): string;
        protected getReportRequest(): TRequest;
        constructor(container: JQuery, opt?: any);
        protected getTemplate(): string;
    }
}
declare namespace AS {
    class DialogBase<TEntity, TOptions> extends Serenity.EntityDialog<TEntity, TOptions> {
        protected getRowType(): {
            idProperty?: string;
            localTextPrefix?: string;
            nameProperty?: string;
            insertPermission?: string;
            updatePermission?: string;
            deletePermission?: string;
        };
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getDeletePermission(): string;
        protected getASDialogOptions(): ExtDialogOptions;
        private loadedState;
        isReadOnly: boolean;
        protected form: any;
        constructor(opt?: any);
        protected updateInterface(): void;
        protected onDialogOpen(): void;
        protected onDialogClose(): void;
        protected setReadOnly(value: boolean): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected onRefreshClick(): void;
        protected onSaveAndNewButtonClick(): void;
        protected getSaveState(): string;
        protected onSaveSuccess(response: any): void;
        loadResponse(data: any): void;
        maximize(): void;
        fullContentArea(): void;
        setDialogSize(width?: any, height?: any, top?: any, left?: any, $content?: any): void;
        onAfterSetDialogSize(): void;
        onAfterDialogClose(entity: TEntity): void;
        parentGrid: GridBase<TEntity, any>;
    }
}
declare namespace AS {
    class GridItemPickerDialog extends Serenity.TemplatedDialog<GridItemPickerEditorOptions> {
        getTemplate(): string;
        checkGrid: GridBase<any, GridItemPickerEditorOptions>;
        get selectedItems(): any[];
        constructor(options: GridItemPickerEditorOptions);
        onSuccess: (selectedItems: any) => void;
        getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace AS {
    class EditorDialogBase<TEntity> extends DialogBase<TEntity, any> {
        protected getASDialogOptions(): ExtDialogOptions;
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
        parentEditor: GridEditorBase<TEntity>;
    }
}
declare namespace AS {
    class GridEditorBase<TEntity> extends AS.GridBase<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly {
        protected getASGridOptions(): ExtGridOptions;
        protected getIdProperty(): string;
        isChildGrid: boolean;
        protected nextId: number;
        constructor(container: JQuery, options?: any);
        private sortGridFunction;
        protected getQuickFilters(): any[];
        protected id(entity: TEntity): any;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected addButtonClick(): void;
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        private searchText;
        protected createToolbarExtensions(): void;
        protected onViewFilter(row: any): boolean;
        private matchContains;
        protected enableFiltering(): boolean;
        protected onViewSubmit(): boolean;
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        protected getSlickOptions(): any;
        parentDialog: DialogBase<any, any>;
        onItemsChanged(): void;
        onBeforeGetValue(items: TEntity[]): void;
    }
}
declare namespace AS {
    class JsonGridEditorBase<TEntity> extends AS.GridEditorBase<TEntity> {
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface ACCMFForm {
        REC_ID: Serenity.LookupEditor;
        ACC_TY: Serenity.EnumEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NM_AR: Serenity.StringEditor;
        ACC_NM_EN: Serenity.StringEditor;
        ACC_NT: Serenity.EnumEditor;
        MAN_NO: Serenity.LookupEditor;
        BGNDB: Serenity.DecimalEditor;
        BGNCR: Serenity.DecimalEditor;
        BGNBAL: Serenity.DecimalEditor;
        CHKBAL: Serenity.DecimalEditor;
        RETBAL: Serenity.DecimalEditor;
        DB_BL: Serenity.DecimalEditor;
        CR_BL: Serenity.DecimalEditor;
        ACCBAL: Serenity.DecimalEditor;
        ACC_CLASS: Serenity.StringEditor;
        CreditLimit: Serenity.DecimalEditor;
        CreditPeriod: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        RegionID: Serenity.LookupEditor;
        CityID: Serenity.LookupEditor;
        DistrictID: Serenity.LookupEditor;
        ADDRS1: Serenity.StringEditor;
        ADDRS2: Serenity.StringEditor;
        PersonID: Serenity.StringEditor;
        SupervisorsID: Serenity.LookupEditor;
        SupplierCustomer: Serenity.BooleanEditor;
        PriceID: Serenity.LookupEditor;
        Phone1: Serenity.StringEditor;
        Phone2: Serenity.StringEditor;
        Phone3: Serenity.StringEditor;
        MOBIL1: Serenity.StringEditor;
        MOBIL2: Serenity.StringEditor;
        MOBIL3: Serenity.StringEditor;
        FAX: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        URL: Serenity.StringEditor;
        RegisterNO: Serenity.StringEditor;
        TAXFIL_NO: Serenity.StringEditor;
        TAXOffice: Serenity.StringEditor;
        TAXNO: Serenity.StringEditor;
        TAXSTATE: Serenity.IntegerEditor;
        REP_CD: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        SUM_CD: Serenity.LookupEditor;
        SSUM_CD: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        AFFINCOME: Serenity.BooleanEditor;
        PAY_BL: Serenity.DecimalEditor;
        TAXORG: Serenity.StringEditor;
        GLNO: Serenity.StringEditor;
        CreditEXP_DT: Serenity.DateEditor;
        ACC_TY1: Serenity.StringEditor;
        ACC_TY2: Serenity.StringEditor;
        CHKBNK: Serenity.StringEditor;
        CHKNAM: Serenity.StringEditor;
        CRDTLMT_END: Serenity.DateEditor;
        CRDTPRD_END: Serenity.IntegerEditor;
        ACC_SSUM_CD: Serenity.LookupEditor;
        RMRK: Serenity.TextAreaEditor;
        CurrencyID: Serenity.LookupEditor;
        Currency_NAME: Serenity.StringEditor;
        CUR_DB_VL: Serenity.DecimalEditor;
        CUR_CR_VL: Serenity.DecimalEditor;
        ACC_BANK: Serenity.LookupEditor;
        SupplierBank: Serenity.StringEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class ACCMFForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface ACCMFRow {
        ID?: number;
        REC_ID?: number;
        ACC_NO?: string;
        ACC_NM_AR?: string;
        ACC_NM_EN?: string;
        ACC_TY?: Web.Modules.Common.AccountType;
        ACC_NT?: Web.Modules.Common.AccountNature;
        MAN_NO?: string;
        AFFINCOME?: boolean;
        StoreID?: string;
        BGNDB?: number;
        BGNCR?: number;
        BGNBAL?: number;
        CHKBAL?: number;
        RETBAL?: number;
        DB_BL?: number;
        CR_BL?: number;
        ACC_CLASS?: string;
        ACCBAL?: number;
        CreditLimit?: number;
        CreditPeriod?: number;
        RegionID?: string;
        CityID?: string;
        DistrictID?: string;
        ADDRS1?: string;
        ADDRS2?: string;
        PersonID?: string;
        SupervisorsID?: string;
        SupplierCustomer?: boolean;
        PriceID?: string;
        Phone1?: string;
        Phone2?: string;
        Phone3?: string;
        MOBIL1?: string;
        MOBIL2?: string;
        MOBIL3?: string;
        FAX?: string;
        Email?: string;
        URL?: string;
        CST_CD?: string;
        SUM_CD?: string;
        SUM_DB?: string;
        PAY_BL?: number;
        TAXORG?: string;
        TAXNO?: string;
        REP_CD?: string;
        GLNO?: string;
        CreditEXP_DT?: string;
        ACC_TY1?: string;
        ACC_TY2?: string;
        RegisterNO?: string;
        TAXFIL_NO?: string;
        TAXOffice?: string;
        TAXSTATE?: number;
        CHKBNK?: string;
        CHKNAM?: string;
        CRDTLMT_END?: string;
        CRDTPRD_END?: number;
        SSUM_CD?: string;
        ACC_SSUM_CD?: number;
        RMRK?: string;
        CurrencyID?: string;
        Currency_NAME?: string;
        CUR_DB_VL?: number;
        CUR_CR_VL?: number;
        ACC_BANK?: string;
        SupplierBank?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace ACCMFRow {
        const idProperty = "ID";
        const nameProperty = "ACC_NO";
        const localTextPrefix = "ALgorithm.ACCMF";
        const lookupKey = "ALgorithm.ASACCMF";
        function getLookup(): Q.Lookup<ACCMFRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            REC_ID = "REC_ID",
            ACC_NO = "ACC_NO",
            ACC_NM_AR = "ACC_NM_AR",
            ACC_NM_EN = "ACC_NM_EN",
            ACC_TY = "ACC_TY",
            ACC_NT = "ACC_NT",
            MAN_NO = "MAN_NO",
            AFFINCOME = "AFFINCOME",
            StoreID = "StoreID",
            BGNDB = "BGNDB",
            BGNCR = "BGNCR",
            BGNBAL = "BGNBAL",
            CHKBAL = "CHKBAL",
            RETBAL = "RETBAL",
            DB_BL = "DB_BL",
            CR_BL = "CR_BL",
            ACC_CLASS = "ACC_CLASS",
            ACCBAL = "ACCBAL",
            CreditLimit = "CreditLimit",
            CreditPeriod = "CreditPeriod",
            RegionID = "RegionID",
            CityID = "CityID",
            DistrictID = "DistrictID",
            ADDRS1 = "ADDRS1",
            ADDRS2 = "ADDRS2",
            PersonID = "PersonID",
            SupervisorsID = "SupervisorsID",
            SupplierCustomer = "SupplierCustomer",
            PriceID = "PriceID",
            Phone1 = "Phone1",
            Phone2 = "Phone2",
            Phone3 = "Phone3",
            MOBIL1 = "MOBIL1",
            MOBIL2 = "MOBIL2",
            MOBIL3 = "MOBIL3",
            FAX = "FAX",
            Email = "Email",
            URL = "URL",
            CST_CD = "CST_CD",
            SUM_CD = "SUM_CD",
            SUM_DB = "SUM_DB",
            PAY_BL = "PAY_BL",
            TAXORG = "TAXORG",
            TAXNO = "TAXNO",
            REP_CD = "REP_CD",
            GLNO = "GLNO",
            CreditEXP_DT = "CreditEXP_DT",
            ACC_TY1 = "ACC_TY1",
            ACC_TY2 = "ACC_TY2",
            RegisterNO = "RegisterNO",
            TAXFIL_NO = "TAXFIL_NO",
            TAXOffice = "TAXOffice",
            TAXSTATE = "TAXSTATE",
            CHKBNK = "CHKBNK",
            CHKNAM = "CHKNAM",
            CRDTLMT_END = "CRDTLMT_END",
            CRDTPRD_END = "CRDTPRD_END",
            SSUM_CD = "SSUM_CD",
            ACC_SSUM_CD = "ACC_SSUM_CD",
            RMRK = "RMRK",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            CUR_DB_VL = "CUR_DB_VL",
            CUR_CR_VL = "CUR_CR_VL",
            ACC_BANK = "ACC_BANK",
            SupplierBank = "SupplierBank",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace ACCMFService {
        const baseUrl = "ALgorithm/ACCMF";
        function Create(request: Serenity.SaveRequest<ACCMFRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ACCMFRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ACCMFRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ACCMFRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/ACCMF/Create",
            Update = "ALgorithm/ACCMF/Update",
            GetNextNumber = "ALgorithm/ACCMF/GetNextNumber",
            Delete = "ALgorithm/ACCMF/Delete",
            Retrieve = "ALgorithm/ACCMF/Retrieve",
            List = "ALgorithm/ACCMF/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface ASCSTForm {
        CST_CD: Serenity.StringEditor;
        CST_NM_AR: Serenity.StringEditor;
        CST_NM_EN: Serenity.StringEditor;
        MCST_CD: Serenity.StringEditor;
        CST_CTG: Serenity.StringEditor;
        CST_TY: Serenity.IntegerEditor;
        SUM_CD: Serenity.LookupEditor;
        SSUM_CD: Serenity.LookupEditor;
        ACC_NO: Serenity.LookupEditor;
        ACC_NM_AR: Serenity.StringEditor;
        ACC_NM_EN: Serenity.StringEditor;
        CSTRAT: Serenity.DecimalEditor;
        DATE_IN: Serenity.DateEditor;
        Phone: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        BGNBAL: Serenity.DecimalEditor;
        INV_NO: Serenity.IntegerEditor;
        INV_DT: Serenity.DateEditor;
        ITM_DISC: Serenity.StringEditor;
        QTY: Serenity.DecimalEditor;
        BANK_CD: Serenity.StringEditor;
        ETMD_CUR: Serenity.StringEditor;
        ETMD_RATE: Serenity.DecimalEditor;
        ITM_RSV_DT: Serenity.DateEditor;
        ACT_DT: Serenity.DateEditor;
        ITM_LOC_DT: Serenity.DateEditor;
        MSTR_NM: Serenity.StringEditor;
        MSTR_ADD: Serenity.StringEditor;
        MSTR_TEL: Serenity.StringEditor;
        ACC_ADD: Serenity.StringEditor;
        POST: Serenity.StringEditor;
        Accept: Serenity.IntegerEditor;
        DISC: Serenity.DecimalEditor;
        Start_DT: Serenity.DateEditor;
        End_Dt: Serenity.DateEditor;
        Dor_NO: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_TOT: Serenity.DecimalEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class ASCSTForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface ASCSTRow {
        ID?: number;
        CST_CD?: string;
        CST_NM_AR?: string;
        CST_NM_EN?: string;
        MCST_CD?: string;
        CST_CTG?: string;
        CST_TY?: number;
        SUM_CD?: string;
        SSUM_CD?: string;
        ACC_NO?: string;
        ACC_NM_AR?: string;
        ACC_NM_EN?: string;
        CSTRAT?: number;
        DATE_IN?: string;
        Phone?: string;
        Mobile?: string;
        BGNBAL?: number;
        INV_NO?: number;
        INV_DT?: string;
        ITM_DISC?: string;
        QTY?: number;
        BANK_CD?: string;
        ETMD_CUR?: string;
        ETMD_RATE?: number;
        ITM_RSV_DT?: string;
        ACT_DT?: string;
        ITM_LOC_DT?: string;
        MSTR_NM?: string;
        MSTR_ADD?: string;
        MSTR_TEL?: string;
        ACC_ADD?: string;
        POST?: string;
        Accept?: number;
        DISC?: number;
        Start_DT?: string;
        End_Dt?: string;
        Dor_NO?: string;
        TR_NO?: number;
        TR_TOT?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace ASCSTRow {
        const idProperty = "ID";
        const nameProperty = "CST_CD";
        const localTextPrefix = "ALgorithm.ASCST";
        const lookupKey = "ALgorithm.ASCST";
        function getLookup(): Q.Lookup<ASCSTRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            CST_CD = "CST_CD",
            CST_NM_AR = "CST_NM_AR",
            CST_NM_EN = "CST_NM_EN",
            MCST_CD = "MCST_CD",
            CST_CTG = "CST_CTG",
            CST_TY = "CST_TY",
            SUM_CD = "SUM_CD",
            SSUM_CD = "SSUM_CD",
            ACC_NO = "ACC_NO",
            ACC_NM_AR = "ACC_NM_AR",
            ACC_NM_EN = "ACC_NM_EN",
            CSTRAT = "CSTRAT",
            DATE_IN = "DATE_IN",
            Phone = "Phone",
            Mobile = "Mobile",
            BGNBAL = "BGNBAL",
            INV_NO = "INV_NO",
            INV_DT = "INV_DT",
            ITM_DISC = "ITM_DISC",
            QTY = "QTY",
            BANK_CD = "BANK_CD",
            ETMD_CUR = "ETMD_CUR",
            ETMD_RATE = "ETMD_RATE",
            ITM_RSV_DT = "ITM_RSV_DT",
            ACT_DT = "ACT_DT",
            ITM_LOC_DT = "ITM_LOC_DT",
            MSTR_NM = "MSTR_NM",
            MSTR_ADD = "MSTR_ADD",
            MSTR_TEL = "MSTR_TEL",
            ACC_ADD = "ACC_ADD",
            POST = "POST",
            Accept = "Accept",
            DISC = "DISC",
            Start_DT = "Start_DT",
            End_Dt = "End_Dt",
            Dor_NO = "Dor_NO",
            TR_NO = "TR_NO",
            TR_TOT = "TR_TOT",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace ASCSTService {
        const baseUrl = "ALgorithm/ASCST";
        function Create(request: Serenity.SaveRequest<ASCSTRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ASCSTRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ASCSTRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ASCSTRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/ASCST/Create",
            Update = "ALgorithm/ASCST/Update",
            Delete = "ALgorithm/ASCST/Delete",
            GetNextNumber = "ALgorithm/ASCST/GetNextNumber",
            Retrieve = "ALgorithm/ASCST/Retrieve",
            List = "ALgorithm/ASCST/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace ASCURRATService {
        const baseUrl = "ALgorithm/ASCURRAT";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<Model.ASCURRATRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "ALgorithm/ASCURRAT/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface ASTRTYForm {
        TR_TY: Serenity.IntegerEditor;
        Dscr_AR: Serenity.StringEditor;
        Dscr_EN: Serenity.StringEditor;
        TR_DS: Serenity.IntegerEditor;
        GRP: Serenity.IntegerEditor;
        RMRK: Serenity.StringEditor;
        NOBAL: Serenity.IntegerEditor;
        DBLACT: Serenity.IntegerEditor;
        DBLTR_TY: Serenity.IntegerEditor;
        DBLCST: Serenity.IntegerEditor;
        SERGRP: Serenity.StringEditor;
        AFFCST: Serenity.IntegerEditor;
        AFFACCDB: Serenity.IntegerEditor;
        AFFACCCR: Serenity.IntegerEditor;
        AFFCSHDB: Serenity.IntegerEditor;
        AFFCSHCR: Serenity.IntegerEditor;
        APRACCDB: Serenity.IntegerEditor;
        APRACCCR: Serenity.IntegerEditor;
        APRCSHDB: Serenity.IntegerEditor;
        APRCSHCR: Serenity.IntegerEditor;
        AFFBAL: Serenity.IntegerEditor;
        APRITMCARD: Serenity.IntegerEditor;
        ADUTTRTY: Serenity.StringEditor;
        CRDLIMTCHK: Serenity.IntegerEditor;
        chkpaid: Serenity.IntegerEditor;
        PSHOW: Serenity.IntegerEditor;
        CSTSHOW: Serenity.IntegerEditor;
        AZTRAIL: Serenity.IntegerEditor;
        PRCNM: Serenity.StringEditor;
        PRCNM1: Serenity.StringEditor;
        PRCNM2: Serenity.StringEditor;
        PRCNM3: Serenity.StringEditor;
        PRCNM4: Serenity.StringEditor;
        PRCLST: Serenity.IntegerEditor;
        TAXPNL: Serenity.IntegerEditor;
        ORDFLG: Serenity.IntegerEditor;
        CMPDISC: Serenity.IntegerEditor;
        CST_CDOBLG: Serenity.IntegerEditor;
        AFFRQTY: Serenity.IntegerEditor;
        SING: Serenity.IntegerEditor;
        ORD_NOFLG: Serenity.IntegerEditor;
        REPS_FLG: Serenity.IntegerEditor;
        MLTLOC: Serenity.IntegerEditor;
        USEBARCOD: Serenity.IntegerEditor;
        ADJCST: Serenity.IntegerEditor;
        USRANK: Serenity.IntegerEditor;
        AUTONO: Serenity.IntegerEditor;
        SUMSHOW: Serenity.IntegerEditor;
        FDT: Serenity.DateEditor;
        TDT: Serenity.DateEditor;
        GL_JRN_CD: Serenity.StringEditor;
        AutoPostGL: Serenity.IntegerEditor;
        AFFDISC: Serenity.IntegerEditor;
        tr_ty_rank: Serenity.IntegerEditor;
        CSTTYP: Serenity.StringEditor;
        ACC_GRP: Serenity.StringEditor;
        TRTYORDR: Serenity.IntegerEditor;
        ADD_ACCS: Serenity.IntegerEditor;
        AFFDQTY: Serenity.IntegerEditor;
        ORDR: Serenity.IntegerEditor;
        DISC_TY: Serenity.IntegerEditor;
        TAX_TY: Serenity.IntegerEditor;
        AutoPostGL_CST: Serenity.IntegerEditor;
        MAX_QTY: Serenity.DecimalEditor;
        chksingpaid: Serenity.IntegerEditor;
        No_ItemEdit: Serenity.IntegerEditor;
        POST_CST: Serenity.StringEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class ASTRTYForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface ASTRTYRow {
        ID?: number;
        TR_TY?: number;
        Dscr_AR?: string;
        Dscr_EN?: string;
        TR_DS?: number;
        GRP?: number;
        RMRK?: string;
        NOBAL?: number;
        DBLACT?: number;
        DBLTR_TY?: number;
        DBLCST?: number;
        SERGRP?: string;
        AFFCST?: number;
        AFFACCDB?: number;
        AFFACCCR?: number;
        AFFCSHDB?: number;
        AFFCSHCR?: number;
        APRACCDB?: number;
        APRACCCR?: number;
        APRCSHDB?: number;
        APRCSHCR?: number;
        AFFBAL?: number;
        APRITMCARD?: number;
        ADUTTRTY?: string;
        CRDLIMTCHK?: number;
        chkpaid?: number;
        PSHOW?: number;
        CSTSHOW?: number;
        AZTRAIL?: number;
        PRCNM?: string;
        PRCNM1?: string;
        PRCNM2?: string;
        PRCNM3?: string;
        PRCNM4?: string;
        PRCLST?: number;
        TAXPNL?: number;
        ORDFLG?: number;
        CMPDISC?: number;
        CST_CDOBLG?: number;
        AFFRQTY?: number;
        SING?: number;
        ORD_NOFLG?: number;
        REPS_FLG?: number;
        MLTLOC?: number;
        USEBARCOD?: number;
        ADJCST?: number;
        USRANK?: number;
        AUTONO?: number;
        SUMSHOW?: number;
        FDT?: string;
        TDT?: string;
        GL_JRN_CD?: string;
        AutoPostGL?: number;
        AFFDISC?: number;
        tr_ty_rank?: number;
        CSTTYP?: string;
        ACC_GRP?: string;
        TRTYORDR?: number;
        ADD_ACCS?: number;
        AFFDQTY?: number;
        ORDR?: number;
        DISC_TY?: number;
        TAX_TY?: number;
        AutoPostGL_CST?: number;
        MAX_QTY?: number;
        chksingpaid?: number;
        No_ItemEdit?: number;
        POST_CST?: string;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace ASTRTYRow {
        const idProperty = "ID";
        const nameProperty = "Dscr_AR";
        const localTextPrefix = "ALgorithm.ASTRTY";
        const lookupKey = "ALgorithm.ASTRTY";
        function getLookup(): Q.Lookup<ASTRTYRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            TR_TY = "TR_TY",
            Dscr_AR = "Dscr_AR",
            Dscr_EN = "Dscr_EN",
            TR_DS = "TR_DS",
            GRP = "GRP",
            RMRK = "RMRK",
            NOBAL = "NOBAL",
            DBLACT = "DBLACT",
            DBLTR_TY = "DBLTR_TY",
            DBLCST = "DBLCST",
            SERGRP = "SERGRP",
            AFFCST = "AFFCST",
            AFFACCDB = "AFFACCDB",
            AFFACCCR = "AFFACCCR",
            AFFCSHDB = "AFFCSHDB",
            AFFCSHCR = "AFFCSHCR",
            APRACCDB = "APRACCDB",
            APRACCCR = "APRACCCR",
            APRCSHDB = "APRCSHDB",
            APRCSHCR = "APRCSHCR",
            AFFBAL = "AFFBAL",
            APRITMCARD = "APRITMCARD",
            ADUTTRTY = "ADUTTRTY",
            CRDLIMTCHK = "CRDLIMTCHK",
            chkpaid = "chkpaid",
            PSHOW = "PSHOW",
            CSTSHOW = "CSTSHOW",
            AZTRAIL = "AZTRAIL",
            PRCNM = "PRCNM",
            PRCNM1 = "PRCNM1",
            PRCNM2 = "PRCNM2",
            PRCNM3 = "PRCNM3",
            PRCNM4 = "PRCNM4",
            PRCLST = "PRCLST",
            TAXPNL = "TAXPNL",
            ORDFLG = "ORDFLG",
            CMPDISC = "CMPDISC",
            CST_CDOBLG = "CST_CDOBLG",
            AFFRQTY = "AFFRQTY",
            SING = "SING",
            ORD_NOFLG = "ORD_NOFLG",
            REPS_FLG = "REPS_FLG",
            MLTLOC = "MLTLOC",
            USEBARCOD = "USEBARCOD",
            ADJCST = "ADJCST",
            USRANK = "USRANK",
            AUTONO = "AUTONO",
            SUMSHOW = "SUMSHOW",
            FDT = "FDT",
            TDT = "TDT",
            GL_JRN_CD = "GL_JRN_CD",
            AutoPostGL = "AutoPostGL",
            AFFDISC = "AFFDISC",
            tr_ty_rank = "tr_ty_rank",
            CSTTYP = "CSTTYP",
            ACC_GRP = "ACC_GRP",
            TRTYORDR = "TRTYORDR",
            ADD_ACCS = "ADD_ACCS",
            AFFDQTY = "AFFDQTY",
            ORDR = "ORDR",
            DISC_TY = "DISC_TY",
            TAX_TY = "TAX_TY",
            AutoPostGL_CST = "AutoPostGL_CST",
            MAX_QTY = "MAX_QTY",
            chksingpaid = "chksingpaid",
            No_ItemEdit = "No_ItemEdit",
            POST_CST = "POST_CST",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace ASTRTYService {
        const baseUrl = "ALgorithm/ASTRTY";
        function Create(request: Serenity.SaveRequest<ASTRTYRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ASTRTYRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ASTRTYRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ASTRTYRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/ASTRTY/Create",
            Update = "ALgorithm/ASTRTY/Update",
            Delete = "ALgorithm/ASTRTY/Delete",
            Retrieve = "ALgorithm/ASTRTY/Retrieve",
            List = "ALgorithm/ASTRTY/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface AddInventoryASTRDForm {
        ID: Serenity.StringEditor;
        DetailID: Serenity.StringEditor;
        PKID: Serenity.LookupEditor;
        PK: Serenity.DecimalEditor;
        Item_CD: Serenity.StringEditor;
        ITM_NM_AR: Serenity.StringEditor;
        QTY: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        Value: Serenity.DecimalEditor;
        TAX1: Serenity.DecimalEditor;
        DISC1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        DISC2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        TAXVAL: Serenity.DecimalEditor;
        DISC: Serenity.DecimalEditor;
        DISC3: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NET: Serenity.DecimalEditor;
        PKPRC: Serenity.DecimalEditor;
        DISC4: Serenity.DecimalEditor;
        DISC1R: Serenity.DecimalEditor;
        DISC2R: Serenity.DecimalEditor;
        DISC3R: Serenity.DecimalEditor;
        STAX_VL: Serenity.DecimalEditor;
        TAX1R: Serenity.DecimalEditor;
        TAX2R: Serenity.DecimalEditor;
        TAX3R: Serenity.DecimalEditor;
        ReturnQty: Serenity.DecimalEditor;
        RestoreQty: Serenity.DecimalEditor;
        ItemBAL: Serenity.DecimalEditor;
        HeaderID: Serenity.StringEditor;
        TR_TY: Serenity.LookupEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        LN_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateEditor;
        StoreID: Serenity.LookupEditor;
        Store_NAME: Serenity.StringEditor;
        TR_DS: Serenity.IntegerEditor;
        GRP: Serenity.IntegerEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        TR_DS_AR: Serenity.StringEditor;
        TR_DS_EN: Serenity.StringEditor;
        ItemBarCode: Serenity.StringEditor;
        PKName: Serenity.StringEditor;
        PKCST: Serenity.DecimalEditor;
        PKCSTVL: Serenity.DecimalEditor;
        FIFO: Serenity.DecimalEditor;
        FIFOVL: Serenity.DecimalEditor;
        LIFO: Serenity.DecimalEditor;
        LIFOVL: Serenity.DecimalEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        EXPENSE_CNT: Serenity.DecimalEditor;
        CurrencyID: Serenity.StringEditor;
        Currency_Name: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        DetailRemark: Serenity.DecimalEditor;
        BonusID: Serenity.IntegerEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        PStoreID: Serenity.StringEditor;
        CustomerPrice: Serenity.DecimalEditor;
        PriceID: Serenity.StringEditor;
        PriceLevelId: Serenity.StringEditor;
        CashBoxID: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_CD2: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        CST_CD: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_CD: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_CD: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        Recipient: Serenity.StringEditor;
        RecipientDate: Serenity.StringEditor;
        disc_cur_val: Serenity.DecimalEditor;
        tax_cur_val: Serenity.DecimalEditor;
        GLPOST: Serenity.BooleanEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class AddInventoryASTRDForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface AddInventoryASTRDRow {
        ID?: number;
        DetailID?: number;
        HeaderID?: number;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_NO?: number;
        LN_NO?: number;
        TR_DT?: string;
        StoreID?: string;
        Store_NAME?: string;
        TR_DS?: number;
        GRP?: number;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NO3?: string;
        TR_DS_AR?: string;
        TR_DS_EN?: string;
        ItemBAL?: number;
        Item_CD?: string;
        ItemBarCode?: string;
        PKID?: string;
        PKName?: string;
        PK?: number;
        QTY?: number;
        PKPRC?: number;
        Price?: number;
        Value?: number;
        PKCST?: number;
        PKCSTVL?: number;
        FIFO?: number;
        FIFOVL?: number;
        LIFO?: number;
        LIFOVL?: number;
        DISC?: number;
        DISC1?: number;
        DISC2?: number;
        DISC3?: number;
        DISC4?: number;
        DISC1R?: number;
        DISC2R?: number;
        DISC3R?: number;
        STAX_VL?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAXVAL?: number;
        TAX1R?: number;
        TAX2R?: number;
        TAX3R?: number;
        EXPENSEVL?: number;
        EXPENSE_CNT?: number;
        CurrencyID?: string;
        Currency_Name?: string;
        RATE?: number;
        CUR_VL?: number;
        DetailRemark?: number;
        BonusID?: number;
        ReturnQty?: number;
        RestoreQty?: number;
        PTR_NO?: number;
        PTR_TY?: number;
        PStoreID?: string;
        CustomerPrice?: number;
        PriceID?: string;
        PriceLevelId?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        ITM_NM_AR?: string;
        ACC_NAME2?: string;
        ACC_NAME3?: string;
        Recipient?: string;
        RecipientDate?: string;
        disc_cur_val?: number;
        tax_cur_val?: number;
        GLPOST?: boolean;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        NET?: number;
    }
    namespace AddInventoryASTRDRow {
        const idProperty = "ID";
        const nameProperty = "HeaderID";
        const localTextPrefix = "ALgorithm.AddInventoryASTRD";
        const lookupKey = "ALgorithm.AddInventoryASTRD";
        function getLookup(): Q.Lookup<AddInventoryASTRDRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            DetailID = "DetailID",
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TRTY_NAME = "TRTY_NAME",
            TR_NO = "TR_NO",
            LN_NO = "LN_NO",
            TR_DT = "TR_DT",
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            TR_DS = "TR_DS",
            GRP = "GRP",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NO3 = "ACC_NO3",
            TR_DS_AR = "TR_DS_AR",
            TR_DS_EN = "TR_DS_EN",
            ItemBAL = "ItemBAL",
            Item_CD = "Item_CD",
            ItemBarCode = "ItemBarCode",
            PKID = "PKID",
            PKName = "PKName",
            PK = "PK",
            QTY = "QTY",
            PKPRC = "PKPRC",
            Price = "Price",
            Value = "Value",
            PKCST = "PKCST",
            PKCSTVL = "PKCSTVL",
            FIFO = "FIFO",
            FIFOVL = "FIFOVL",
            LIFO = "LIFO",
            LIFOVL = "LIFOVL",
            DISC = "DISC",
            DISC1 = "DISC1",
            DISC2 = "DISC2",
            DISC3 = "DISC3",
            DISC4 = "DISC4",
            DISC1R = "DISC1R",
            DISC2R = "DISC2R",
            DISC3R = "DISC3R",
            STAX_VL = "STAX_VL",
            TAX1 = "TAX1",
            TAX2 = "TAX2",
            TAX3 = "TAX3",
            TAXVAL = "TAXVAL",
            TAX1R = "TAX1R",
            TAX2R = "TAX2R",
            TAX3R = "TAX3R",
            EXPENSEVL = "EXPENSEVL",
            EXPENSE_CNT = "EXPENSE_CNT",
            CurrencyID = "CurrencyID",
            Currency_Name = "Currency_Name",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            DetailRemark = "DetailRemark",
            BonusID = "BonusID",
            ReturnQty = "ReturnQty",
            RestoreQty = "RestoreQty",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            PStoreID = "PStoreID",
            CustomerPrice = "CustomerPrice",
            PriceID = "PriceID",
            PriceLevelId = "PriceLevelId",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            ITM_NM_AR = "ITM_NM_AR",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NAME3 = "ACC_NAME3",
            Recipient = "Recipient",
            RecipientDate = "RecipientDate",
            disc_cur_val = "disc_cur_val",
            tax_cur_val = "tax_cur_val",
            GLPOST = "GLPOST",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            NET = "NET"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace AddInventoryASTRDService {
        const baseUrl = "ALgorithm/AddInventoryASTRD";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AddInventoryASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AddInventoryASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "ALgorithm/AddInventoryASTRD/Retrieve",
            List = "ALgorithm/AddInventoryASTRD/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface AddInventoryForm {
        TR_TY: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        DocTransNo: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateTimeEditor;
        CurrencyID: Serenity.LookupEditor;
        PriceID: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        SUM_CD: Serenity.LookupEditor;
        TR_DS: Serenity.IntegerEditor;
        CashBoxID: Serenity.LookupEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        REP_CD: Serenity.LookupEditor;
        REP_CD2: Serenity.LookupEditor;
        ReferenceNo: Serenity.IntegerEditor;
        RATE: Serenity.DecimalEditor;
        Balance: Serenity.DecimalEditor;
        Notes: Serenity.TextAreaEditor;
        HDSCR_AR: Serenity.StringEditor;
        SSUM_CD: Serenity.LookupEditor;
        Cash_NAME: Serenity.StringEditor;
        OrderNo: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        TRTY_NAME: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        SupervisorId: Serenity.StringEditor;
        Supervisor_NAME: Serenity.StringEditor;
        PStoreID: Serenity.StringEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        HDSCR_EN: Serenity.StringEditor;
        Priceedit: Serenity.BooleanEditor;
        HDISC1: Serenity.DecimalEditor;
        HDISC2: Serenity.DecimalEditor;
        HDISC3: Serenity.DecimalEditor;
        HDISC4: Serenity.DecimalEditor;
        HDISC1R: Serenity.DecimalEditor;
        HDISC2R: Serenity.DecimalEditor;
        HDISC3R: Serenity.DecimalEditor;
        HTAX1: Serenity.DecimalEditor;
        HTAX2: Serenity.DecimalEditor;
        HTAX3: Serenity.DecimalEditor;
        HTAX4: Serenity.DecimalEditor;
        HTAX1R: Serenity.DecimalEditor;
        HTAX2R: Serenity.DecimalEditor;
        HTAX3R: Serenity.DecimalEditor;
        HdrAddtionsR: Serenity.DecimalEditor;
        PeriodCredit: Serenity.StringEditor;
        Periodterm: Serenity.IntegerEditor;
        InvStatus: Serenity.IntegerEditor;
        Currency_NAME: Serenity.StringEditor;
        CUR_VL: Serenity.DecimalEditor;
        PRT_CNT: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        DetailList: AddInventoryASTRDEditor;
        SQTY: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        Paid: Serenity.DecimalEditor;
        HDISC: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        HTAX: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
    }
    class AddInventoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface AddInventoryRow {
        HeaderID?: number;
        TR_TY?: number;
        TR_NO?: number;
        TR_DT?: string;
        TR_DS?: number;
        StoreID?: string;
        TRTY_NAME?: string;
        Store_NAME?: string;
        DocTransNo?: string;
        OrderNo?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        SupervisorId?: string;
        Supervisor_NAME?: string;
        PStoreID?: string;
        PTR_NO?: number;
        PTR_TY?: number;
        HDSCR_AR?: string;
        HDSCR_EN?: string;
        PriceID?: string;
        Priceedit?: boolean;
        ReferenceNo?: number;
        HDISC?: number;
        HDISC1?: number;
        HDISC2?: number;
        HDISC3?: number;
        HDISC4?: number;
        HDISC1R?: number;
        HDISC2R?: number;
        HDISC3R?: number;
        HTAX?: number;
        HTAX1?: number;
        HTAX2?: number;
        HTAX3?: number;
        HTAX4?: number;
        HTAX1R?: number;
        HTAX2R?: number;
        HTAX3R?: number;
        HAddtions?: number;
        HdrAddtionsR?: number;
        PeriodCredit?: string;
        EXPENSEVL?: number;
        Notes?: string;
        Paid?: number;
        Total?: number;
        SQTY?: number;
        NetTotal?: number;
        Balance?: number;
        Periodterm?: number;
        InvStatus?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        CUR_VL?: number;
        PRT_CNT?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        DetailList?: AddInventoryASTRDRow[];
    }
    namespace AddInventoryRow {
        const idProperty = "HeaderID";
        const nameProperty = "StoreID";
        const localTextPrefix = "ALgorithm.AddInventory";
        const lookupKey = "ALgorithm.AddInventory";
        function getLookup(): Q.Lookup<AddInventoryRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            TR_DT = "TR_DT",
            TR_DS = "TR_DS",
            StoreID = "StoreID",
            TRTY_NAME = "TRTY_NAME",
            Store_NAME = "Store_NAME",
            DocTransNo = "DocTransNo",
            OrderNo = "OrderNo",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            SupervisorId = "SupervisorId",
            Supervisor_NAME = "Supervisor_NAME",
            PStoreID = "PStoreID",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            HDSCR_AR = "HDSCR_AR",
            HDSCR_EN = "HDSCR_EN",
            PriceID = "PriceID",
            Priceedit = "Priceedit",
            ReferenceNo = "ReferenceNo",
            HDISC = "HDISC",
            HDISC1 = "HDISC1",
            HDISC2 = "HDISC2",
            HDISC3 = "HDISC3",
            HDISC4 = "HDISC4",
            HDISC1R = "HDISC1R",
            HDISC2R = "HDISC2R",
            HDISC3R = "HDISC3R",
            HTAX = "HTAX",
            HTAX1 = "HTAX1",
            HTAX2 = "HTAX2",
            HTAX3 = "HTAX3",
            HTAX4 = "HTAX4",
            HTAX1R = "HTAX1R",
            HTAX2R = "HTAX2R",
            HTAX3R = "HTAX3R",
            HAddtions = "HAddtions",
            HdrAddtionsR = "HdrAddtionsR",
            PeriodCredit = "PeriodCredit",
            EXPENSEVL = "EXPENSEVL",
            Notes = "Notes",
            Paid = "Paid",
            Total = "Total",
            SQTY = "SQTY",
            NetTotal = "NetTotal",
            Balance = "Balance",
            Periodterm = "Periodterm",
            InvStatus = "InvStatus",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            PRT_CNT = "PRT_CNT",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            DetailList = "DetailList"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace AddInventoryService {
        const baseUrl = "ALgorithm/AddInventory";
        function Create(request: Serenity.SaveRequest<AddInventoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AddInventoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AddInventoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AddInventoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/AddInventory/Create",
            Update = "ALgorithm/AddInventory/Update",
            Delete = "ALgorithm/AddInventory/Delete",
            GetNextNumber = "ALgorithm/AddInventory/GetNextNumber",
            Retrieve = "ALgorithm/AddInventory/Retrieve",
            List = "ALgorithm/AddInventory/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface AppCodesRow {
        ID?: number;
        SEQ?: number;
        DSCR_AR?: string;
        DSCR_EN?: string;
        RMRK?: string;
        MID?: number;
        MSEQ?: number;
        Rquird?: number;
        X?: number;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
        Ssys?: string;
    }
    namespace AppCodesRow {
        const idProperty = "ID";
        const nameProperty = "DSCR_AR";
        const localTextPrefix = "ALgorithm.AppCodes";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            SEQ = "SEQ",
            DSCR_AR = "DSCR_AR",
            DSCR_EN = "DSCR_EN",
            RMRK = "RMRK",
            MID = "MID",
            MSEQ = "MSEQ",
            Rquird = "Rquird",
            X = "X",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate",
            Ssys = "Ssys"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface BranchForm {
        BranchID: Serenity.StringEditor;
        Name_AR: Serenity.StringEditor;
        Name_EN: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class BranchForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface BranchRow {
        ID?: number;
        BranchID?: string;
        Name_AR?: string;
        Name_EN?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace BranchRow {
        const idProperty = "ID";
        const nameProperty = "BranchID";
        const localTextPrefix = "ALgorithm.Branch";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            BranchID = "BranchID",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace BranchService {
        const baseUrl = "ALgorithm/Branch";
        function Create(request: Serenity.SaveRequest<BranchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BranchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BranchRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BranchRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/Branch/Create",
            Update = "ALgorithm/Branch/Update",
            Delete = "ALgorithm/Branch/Delete",
            GetNextNumber = "ALgorithm/Branch/GetNextNumber",
            Retrieve = "ALgorithm/Branch/Retrieve",
            List = "ALgorithm/Branch/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashPurchASTRDForm {
        ID: Serenity.StringEditor;
        DetailID: Serenity.StringEditor;
        PKID: Serenity.LookupEditor;
        PK: Serenity.DecimalEditor;
        Item_CD: Serenity.StringEditor;
        ITM_NM_AR: Serenity.StringEditor;
        QTY: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        Value: Serenity.DecimalEditor;
        TAX1: Serenity.DecimalEditor;
        DISC1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        DISC2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        TAXVAL: Serenity.DecimalEditor;
        DISC: Serenity.DecimalEditor;
        DISC3: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NET: Serenity.DecimalEditor;
        PKPRC: Serenity.DecimalEditor;
        DISC4: Serenity.DecimalEditor;
        DISC1R: Serenity.DecimalEditor;
        DISC2R: Serenity.DecimalEditor;
        DISC3R: Serenity.DecimalEditor;
        STAX_VL: Serenity.DecimalEditor;
        TAX1R: Serenity.DecimalEditor;
        TAX2R: Serenity.DecimalEditor;
        TAX3R: Serenity.DecimalEditor;
        ReturnQty: Serenity.DecimalEditor;
        RestoreQty: Serenity.DecimalEditor;
        ItemBAL: Serenity.DecimalEditor;
        HeaderID: Serenity.StringEditor;
        TR_TY: Serenity.LookupEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        LN_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateEditor;
        StoreID: Serenity.LookupEditor;
        Store_NAME: Serenity.StringEditor;
        TR_DS: Serenity.IntegerEditor;
        GRP: Serenity.IntegerEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        TR_DS_AR: Serenity.StringEditor;
        TR_DS_EN: Serenity.StringEditor;
        ItemBarCode: Serenity.StringEditor;
        PKName: Serenity.StringEditor;
        PKCST: Serenity.DecimalEditor;
        PKCSTVL: Serenity.DecimalEditor;
        FIFO: Serenity.DecimalEditor;
        FIFOVL: Serenity.DecimalEditor;
        LIFO: Serenity.DecimalEditor;
        LIFOVL: Serenity.DecimalEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        EXPENSE_CNT: Serenity.DecimalEditor;
        CurrencyID: Serenity.StringEditor;
        Currency_Name: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        DetailRemark: Serenity.DecimalEditor;
        BonusID: Serenity.IntegerEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        PStoreID: Serenity.StringEditor;
        CustomerPrice: Serenity.DecimalEditor;
        PriceID: Serenity.StringEditor;
        PriceLevelId: Serenity.StringEditor;
        CashBoxID: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_CD2: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        CST_CD: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_CD: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_CD: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        Recipient: Serenity.StringEditor;
        RecipientDate: Serenity.StringEditor;
        disc_cur_val: Serenity.DecimalEditor;
        tax_cur_val: Serenity.DecimalEditor;
        GLPOST: Serenity.BooleanEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class CashPurchASTRDForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashPurchASTRDRow {
        ID?: number;
        DetailID?: number;
        HeaderID?: number;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_NO?: number;
        LN_NO?: number;
        TR_DT?: string;
        StoreID?: string;
        Store_NAME?: string;
        TR_DS?: number;
        GRP?: number;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NO3?: string;
        TR_DS_AR?: string;
        TR_DS_EN?: string;
        ItemBAL?: number;
        Item_CD?: string;
        ItemBarCode?: string;
        PKID?: string;
        PKName?: string;
        PK?: number;
        QTY?: number;
        PKPRC?: number;
        Price?: number;
        Value?: number;
        PKCST?: number;
        PKCSTVL?: number;
        FIFO?: number;
        FIFOVL?: number;
        LIFO?: number;
        LIFOVL?: number;
        DISC?: number;
        DISC1?: number;
        DISC2?: number;
        DISC3?: number;
        DISC4?: number;
        DISC1R?: number;
        DISC2R?: number;
        DISC3R?: number;
        STAX_VL?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAXVAL?: number;
        TAX1R?: number;
        TAX2R?: number;
        TAX3R?: number;
        EXPENSEVL?: number;
        EXPENSE_CNT?: number;
        CurrencyID?: string;
        Currency_Name?: string;
        RATE?: number;
        CUR_VL?: number;
        DetailRemark?: number;
        BonusID?: number;
        ReturnQty?: number;
        RestoreQty?: number;
        PTR_NO?: number;
        PTR_TY?: number;
        PStoreID?: string;
        CustomerPrice?: number;
        PriceID?: string;
        PriceLevelId?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        ITM_NM_AR?: string;
        ACC_NAME2?: string;
        ACC_NAME3?: string;
        Recipient?: string;
        RecipientDate?: string;
        disc_cur_val?: number;
        tax_cur_val?: number;
        GLPOST?: boolean;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        NET?: number;
    }
    namespace CashPurchASTRDRow {
        const idProperty = "ID";
        const nameProperty = "HeaderID";
        const localTextPrefix = "ALgorithm.CashPurchASTRD";
        const lookupKey = "ALgorithm.CashPurchASTRD";
        function getLookup(): Q.Lookup<CashPurchASTRDRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            DetailID = "DetailID",
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TRTY_NAME = "TRTY_NAME",
            TR_NO = "TR_NO",
            LN_NO = "LN_NO",
            TR_DT = "TR_DT",
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            TR_DS = "TR_DS",
            GRP = "GRP",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NO3 = "ACC_NO3",
            TR_DS_AR = "TR_DS_AR",
            TR_DS_EN = "TR_DS_EN",
            ItemBAL = "ItemBAL",
            Item_CD = "Item_CD",
            ItemBarCode = "ItemBarCode",
            PKID = "PKID",
            PKName = "PKName",
            PK = "PK",
            QTY = "QTY",
            PKPRC = "PKPRC",
            Price = "Price",
            Value = "Value",
            PKCST = "PKCST",
            PKCSTVL = "PKCSTVL",
            FIFO = "FIFO",
            FIFOVL = "FIFOVL",
            LIFO = "LIFO",
            LIFOVL = "LIFOVL",
            DISC = "DISC",
            DISC1 = "DISC1",
            DISC2 = "DISC2",
            DISC3 = "DISC3",
            DISC4 = "DISC4",
            DISC1R = "DISC1R",
            DISC2R = "DISC2R",
            DISC3R = "DISC3R",
            STAX_VL = "STAX_VL",
            TAX1 = "TAX1",
            TAX2 = "TAX2",
            TAX3 = "TAX3",
            TAXVAL = "TAXVAL",
            TAX1R = "TAX1R",
            TAX2R = "TAX2R",
            TAX3R = "TAX3R",
            EXPENSEVL = "EXPENSEVL",
            EXPENSE_CNT = "EXPENSE_CNT",
            CurrencyID = "CurrencyID",
            Currency_Name = "Currency_Name",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            DetailRemark = "DetailRemark",
            BonusID = "BonusID",
            ReturnQty = "ReturnQty",
            RestoreQty = "RestoreQty",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            PStoreID = "PStoreID",
            CustomerPrice = "CustomerPrice",
            PriceID = "PriceID",
            PriceLevelId = "PriceLevelId",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            ITM_NM_AR = "ITM_NM_AR",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NAME3 = "ACC_NAME3",
            Recipient = "Recipient",
            RecipientDate = "RecipientDate",
            disc_cur_val = "disc_cur_val",
            tax_cur_val = "tax_cur_val",
            GLPOST = "GLPOST",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            NET = "NET"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace CashPurchASTRDService {
        const baseUrl = "ALgorithm/CashPurchASTRD";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashPurchASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashPurchASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "ALgorithm/CashPurchASTRD/Retrieve",
            List = "ALgorithm/CashPurchASTRD/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashPurchForm {
        TR_TY: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        CashBoxID: Serenity.LookupEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_DS: Serenity.IntegerEditor;
        TR_DT: Serenity.DateTimeEditor;
        DocTransNo: Serenity.StringEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        REP_CD: Serenity.LookupEditor;
        REP_CD2: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        CurrencyID: Serenity.LookupEditor;
        PriceID: Serenity.LookupEditor;
        ReferenceNo: Serenity.IntegerEditor;
        RATE: Serenity.DecimalEditor;
        Balance: Serenity.DecimalEditor;
        Notes: Serenity.TextAreaEditor;
        HDSCR_AR: Serenity.StringEditor;
        SSUM_CD: Serenity.LookupEditor;
        Cash_NAME: Serenity.StringEditor;
        OrderNo: Serenity.StringEditor;
        SUM_CD: Serenity.LookupEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        TRTY_NAME: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        SupervisorId: Serenity.StringEditor;
        Supervisor_NAME: Serenity.StringEditor;
        PStoreID: Serenity.StringEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        HDSCR_EN: Serenity.StringEditor;
        Priceedit: Serenity.BooleanEditor;
        HDISC1: Serenity.DecimalEditor;
        HDISC2: Serenity.DecimalEditor;
        HDISC3: Serenity.DecimalEditor;
        HDISC4: Serenity.DecimalEditor;
        HDISC1R: Serenity.DecimalEditor;
        HDISC2R: Serenity.DecimalEditor;
        HDISC3R: Serenity.DecimalEditor;
        HTAX1: Serenity.DecimalEditor;
        HTAX2: Serenity.DecimalEditor;
        HTAX3: Serenity.DecimalEditor;
        HTAX4: Serenity.DecimalEditor;
        HTAX1R: Serenity.DecimalEditor;
        HTAX2R: Serenity.DecimalEditor;
        HTAX3R: Serenity.DecimalEditor;
        HdrAddtionsR: Serenity.DecimalEditor;
        PeriodCredit: Serenity.StringEditor;
        Periodterm: Serenity.IntegerEditor;
        InvStatus: Serenity.IntegerEditor;
        Currency_NAME: Serenity.StringEditor;
        CUR_VL: Serenity.DecimalEditor;
        PRT_CNT: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        DetailList: CashPurchASTRDEditor;
        Total: Serenity.DecimalEditor;
        Paid: Serenity.DecimalEditor;
        HDISC: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        HTAX: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
    }
    class CashPurchForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashPurchRow {
        HeaderID?: number;
        TR_TY?: number;
        TR_NO?: number;
        TR_DT?: string;
        TR_DS?: number;
        StoreID?: string;
        TRTY_NAME?: string;
        Store_NAME?: string;
        DocTransNo?: string;
        OrderNo?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        SupervisorId?: string;
        Supervisor_NAME?: string;
        PStoreID?: string;
        PTR_NO?: number;
        PTR_TY?: number;
        HDSCR_AR?: string;
        HDSCR_EN?: string;
        PriceID?: string;
        Priceedit?: boolean;
        ReferenceNo?: number;
        HDISC?: number;
        HDISC1?: number;
        HDISC2?: number;
        HDISC3?: number;
        HDISC4?: number;
        HDISC1R?: number;
        HDISC2R?: number;
        HDISC3R?: number;
        HTAX?: number;
        HTAX1?: number;
        HTAX2?: number;
        HTAX3?: number;
        HTAX4?: number;
        HTAX1R?: number;
        HTAX2R?: number;
        HTAX3R?: number;
        HAddtions?: number;
        HdrAddtionsR?: number;
        PeriodCredit?: string;
        EXPENSEVL?: number;
        Notes?: string;
        Paid?: number;
        Total?: number;
        NetTotal?: number;
        Balance?: number;
        Periodterm?: number;
        InvStatus?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        CUR_VL?: number;
        PRT_CNT?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        DetailList?: CashPurchASTRDRow[];
    }
    namespace CashPurchRow {
        const idProperty = "HeaderID";
        const nameProperty = "StoreID";
        const localTextPrefix = "ALgorithm.CashPurch";
        const lookupKey = "ALgorithm.CashPurch";
        function getLookup(): Q.Lookup<CashPurchRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            TR_DT = "TR_DT",
            TR_DS = "TR_DS",
            StoreID = "StoreID",
            TRTY_NAME = "TRTY_NAME",
            Store_NAME = "Store_NAME",
            DocTransNo = "DocTransNo",
            OrderNo = "OrderNo",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            SupervisorId = "SupervisorId",
            Supervisor_NAME = "Supervisor_NAME",
            PStoreID = "PStoreID",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            HDSCR_AR = "HDSCR_AR",
            HDSCR_EN = "HDSCR_EN",
            PriceID = "PriceID",
            Priceedit = "Priceedit",
            ReferenceNo = "ReferenceNo",
            HDISC = "HDISC",
            HDISC1 = "HDISC1",
            HDISC2 = "HDISC2",
            HDISC3 = "HDISC3",
            HDISC4 = "HDISC4",
            HDISC1R = "HDISC1R",
            HDISC2R = "HDISC2R",
            HDISC3R = "HDISC3R",
            HTAX = "HTAX",
            HTAX1 = "HTAX1",
            HTAX2 = "HTAX2",
            HTAX3 = "HTAX3",
            HTAX4 = "HTAX4",
            HTAX1R = "HTAX1R",
            HTAX2R = "HTAX2R",
            HTAX3R = "HTAX3R",
            HAddtions = "HAddtions",
            HdrAddtionsR = "HdrAddtionsR",
            PeriodCredit = "PeriodCredit",
            EXPENSEVL = "EXPENSEVL",
            Notes = "Notes",
            Paid = "Paid",
            Total = "Total",
            NetTotal = "NetTotal",
            Balance = "Balance",
            Periodterm = "Periodterm",
            InvStatus = "InvStatus",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            PRT_CNT = "PRT_CNT",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            DetailList = "DetailList"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace CashPurchService {
        const baseUrl = "ALgorithm/CashPurch";
        function Create(request: Serenity.SaveRequest<CashPurchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CashPurchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashPurchRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashPurchRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/CashPurch/Create",
            Update = "ALgorithm/CashPurch/Update",
            Delete = "ALgorithm/CashPurch/Delete",
            GetNextNumber = "ALgorithm/CashPurch/GetNextNumber",
            Retrieve = "ALgorithm/CashPurch/Retrieve",
            List = "ALgorithm/CashPurch/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashRestoreASTRDForm {
        ID: Serenity.StringEditor;
        DetailID: Serenity.StringEditor;
        PKID: Serenity.LookupEditor;
        PK: Serenity.DecimalEditor;
        Item_CD: Serenity.StringEditor;
        ITM_NM_AR: Serenity.StringEditor;
        QTY: Serenity.DecimalEditor;
        RestoreQty: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        Value: Serenity.DecimalEditor;
        TAX1: Serenity.DecimalEditor;
        DISC1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        DISC2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        TAXVAL: Serenity.DecimalEditor;
        DISC: Serenity.DecimalEditor;
        DISC3: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NET: Serenity.DecimalEditor;
        PKPRC: Serenity.DecimalEditor;
        DISC4: Serenity.DecimalEditor;
        DISC1R: Serenity.DecimalEditor;
        DISC2R: Serenity.DecimalEditor;
        DISC3R: Serenity.DecimalEditor;
        STAX_VL: Serenity.DecimalEditor;
        TAX1R: Serenity.DecimalEditor;
        TAX2R: Serenity.DecimalEditor;
        TAX3R: Serenity.DecimalEditor;
        ReturnQty: Serenity.DecimalEditor;
        ItemBAL: Serenity.DecimalEditor;
        HeaderID: Serenity.StringEditor;
        TR_TY: Serenity.LookupEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        LN_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateEditor;
        StoreID: Serenity.LookupEditor;
        Store_NAME: Serenity.StringEditor;
        TR_DS: Serenity.IntegerEditor;
        GRP: Serenity.IntegerEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        TR_DS_AR: Serenity.StringEditor;
        TR_DS_EN: Serenity.StringEditor;
        ItemBarCode: Serenity.StringEditor;
        PKName: Serenity.StringEditor;
        PKCST: Serenity.DecimalEditor;
        PKCSTVL: Serenity.DecimalEditor;
        FIFO: Serenity.DecimalEditor;
        FIFOVL: Serenity.DecimalEditor;
        LIFO: Serenity.DecimalEditor;
        LIFOVL: Serenity.DecimalEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        EXPENSE_CNT: Serenity.DecimalEditor;
        CurrencyID: Serenity.StringEditor;
        Currency_Name: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        DetailRemark: Serenity.DecimalEditor;
        BonusID: Serenity.IntegerEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        PStoreID: Serenity.StringEditor;
        CustomerPrice: Serenity.DecimalEditor;
        PriceID: Serenity.StringEditor;
        PriceLevelId: Serenity.StringEditor;
        CashBoxID: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_CD2: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        CST_CD: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_CD: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_CD: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        Recipient: Serenity.StringEditor;
        RecipientDate: Serenity.StringEditor;
        disc_cur_val: Serenity.DecimalEditor;
        tax_cur_val: Serenity.DecimalEditor;
        GLPOST: Serenity.BooleanEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class CashRestoreASTRDForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashRestoreASTRDRow {
        ID?: number;
        DetailID?: number;
        HeaderID?: number;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_NO?: number;
        LN_NO?: number;
        TR_DT?: string;
        StoreID?: string;
        Store_NAME?: string;
        TR_DS?: number;
        GRP?: number;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NO3?: string;
        TR_DS_AR?: string;
        TR_DS_EN?: string;
        ItemBAL?: number;
        Item_CD?: string;
        ItemBarCode?: string;
        PKID?: string;
        PKName?: string;
        PK?: number;
        QTY?: number;
        PKPRC?: number;
        Price?: number;
        Value?: number;
        PKCST?: number;
        PKCSTVL?: number;
        FIFO?: number;
        FIFOVL?: number;
        LIFO?: number;
        LIFOVL?: number;
        DISC?: number;
        DISC1?: number;
        DISC2?: number;
        DISC3?: number;
        DISC4?: number;
        DISC1R?: number;
        DISC2R?: number;
        DISC3R?: number;
        STAX_VL?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAXVAL?: number;
        TAX1R?: number;
        TAX2R?: number;
        TAX3R?: number;
        EXPENSEVL?: number;
        EXPENSE_CNT?: number;
        CurrencyID?: string;
        Currency_Name?: string;
        RATE?: number;
        CUR_VL?: number;
        DetailRemark?: number;
        BonusID?: number;
        ReturnQty?: number;
        RestoreQty?: number;
        PTR_NO?: number;
        PTR_TY?: number;
        PStoreID?: string;
        CustomerPrice?: number;
        PriceID?: string;
        PriceLevelId?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        ITM_NM_AR?: string;
        ACC_NAME2?: string;
        ACC_NAME3?: string;
        Recipient?: string;
        RecipientDate?: string;
        disc_cur_val?: number;
        tax_cur_val?: number;
        GLPOST?: boolean;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        NET?: number;
    }
    namespace CashRestoreASTRDRow {
        const idProperty = "ID";
        const nameProperty = "HeaderID";
        const localTextPrefix = "ALgorithm.CashRestoreASTRD";
        const lookupKey = "ALgorithm.CashRestoreASTRD";
        function getLookup(): Q.Lookup<CashRestoreASTRDRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            DetailID = "DetailID",
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TRTY_NAME = "TRTY_NAME",
            TR_NO = "TR_NO",
            LN_NO = "LN_NO",
            TR_DT = "TR_DT",
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            TR_DS = "TR_DS",
            GRP = "GRP",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NO3 = "ACC_NO3",
            TR_DS_AR = "TR_DS_AR",
            TR_DS_EN = "TR_DS_EN",
            ItemBAL = "ItemBAL",
            Item_CD = "Item_CD",
            ItemBarCode = "ItemBarCode",
            PKID = "PKID",
            PKName = "PKName",
            PK = "PK",
            QTY = "QTY",
            PKPRC = "PKPRC",
            Price = "Price",
            Value = "Value",
            PKCST = "PKCST",
            PKCSTVL = "PKCSTVL",
            FIFO = "FIFO",
            FIFOVL = "FIFOVL",
            LIFO = "LIFO",
            LIFOVL = "LIFOVL",
            DISC = "DISC",
            DISC1 = "DISC1",
            DISC2 = "DISC2",
            DISC3 = "DISC3",
            DISC4 = "DISC4",
            DISC1R = "DISC1R",
            DISC2R = "DISC2R",
            DISC3R = "DISC3R",
            STAX_VL = "STAX_VL",
            TAX1 = "TAX1",
            TAX2 = "TAX2",
            TAX3 = "TAX3",
            TAXVAL = "TAXVAL",
            TAX1R = "TAX1R",
            TAX2R = "TAX2R",
            TAX3R = "TAX3R",
            EXPENSEVL = "EXPENSEVL",
            EXPENSE_CNT = "EXPENSE_CNT",
            CurrencyID = "CurrencyID",
            Currency_Name = "Currency_Name",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            DetailRemark = "DetailRemark",
            BonusID = "BonusID",
            ReturnQty = "ReturnQty",
            RestoreQty = "RestoreQty",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            PStoreID = "PStoreID",
            CustomerPrice = "CustomerPrice",
            PriceID = "PriceID",
            PriceLevelId = "PriceLevelId",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            ITM_NM_AR = "ITM_NM_AR",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NAME3 = "ACC_NAME3",
            Recipient = "Recipient",
            RecipientDate = "RecipientDate",
            disc_cur_val = "disc_cur_val",
            tax_cur_val = "tax_cur_val",
            GLPOST = "GLPOST",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            NET = "NET"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace CashRestoreASTRDService {
        const baseUrl = "ALgorithm/CashRestoreASTRD";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashRestoreASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashRestoreASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "ALgorithm/CashRestoreASTRD/Retrieve",
            List = "ALgorithm/CashRestoreASTRD/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashRestoreForm {
        TR_TY: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        CashBoxID: Serenity.LookupEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_DS: Serenity.IntegerEditor;
        TR_DT: Serenity.DateTimeEditor;
        DocTransNo: Serenity.StringEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        REP_CD: Serenity.LookupEditor;
        REP_CD2: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        CurrencyID: Serenity.LookupEditor;
        ReferenceNo: Serenity.IntegerEditor;
        PriceID: Serenity.LookupEditor;
        Balance: Serenity.DecimalEditor;
        Notes: Serenity.TextAreaEditor;
        HDSCR_AR: Serenity.StringEditor;
        SSUM_CD: Serenity.LookupEditor;
        Cash_NAME: Serenity.StringEditor;
        OrderNo: Serenity.StringEditor;
        SUM_CD: Serenity.LookupEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        TRTY_NAME: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        SupervisorId: Serenity.StringEditor;
        Supervisor_NAME: Serenity.StringEditor;
        PStoreID: Serenity.StringEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        HDSCR_EN: Serenity.StringEditor;
        Priceedit: Serenity.BooleanEditor;
        HDISC1: Serenity.DecimalEditor;
        HDISC2: Serenity.DecimalEditor;
        HDISC3: Serenity.DecimalEditor;
        HDISC4: Serenity.DecimalEditor;
        HDISC1R: Serenity.DecimalEditor;
        HDISC2R: Serenity.DecimalEditor;
        HDISC3R: Serenity.DecimalEditor;
        HTAX1: Serenity.DecimalEditor;
        HTAX2: Serenity.DecimalEditor;
        HTAX3: Serenity.DecimalEditor;
        HTAX4: Serenity.DecimalEditor;
        HTAX1R: Serenity.DecimalEditor;
        HTAX2R: Serenity.DecimalEditor;
        HTAX3R: Serenity.DecimalEditor;
        HdrAddtionsR: Serenity.DecimalEditor;
        PeriodCredit: Serenity.StringEditor;
        Periodterm: Serenity.IntegerEditor;
        InvStatus: Serenity.IntegerEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        PRT_CNT: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        DetailList: CashRestoreASTRDEditor;
        Total: Serenity.DecimalEditor;
        Paid: Serenity.DecimalEditor;
        HDISC: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        HTAX: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
    }
    class CashRestoreForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashRestoreRow {
        HeaderID?: number;
        TR_TY?: number;
        TR_NO?: number;
        TR_DT?: string;
        StoreID?: string;
        TR_DS?: number;
        TRTY_NAME?: string;
        Store_NAME?: string;
        DocTransNo?: string;
        OrderNo?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        SupervisorId?: string;
        Supervisor_NAME?: string;
        PStoreID?: string;
        PTR_NO?: number;
        PTR_TY?: number;
        HDSCR_AR?: string;
        HDSCR_EN?: string;
        PriceID?: string;
        Priceedit?: boolean;
        ReferenceNo?: number;
        HDISC?: number;
        HDISC1?: number;
        HDISC2?: number;
        HDISC3?: number;
        HDISC4?: number;
        HDISC1R?: number;
        HDISC2R?: number;
        HDISC3R?: number;
        HTAX?: number;
        HTAX1?: number;
        HTAX2?: number;
        HTAX3?: number;
        HTAX4?: number;
        HTAX1R?: number;
        HTAX2R?: number;
        HTAX3R?: number;
        HAddtions?: number;
        HdrAddtionsR?: number;
        PeriodCredit?: string;
        EXPENSEVL?: number;
        Notes?: string;
        Paid?: number;
        Total?: number;
        NetTotal?: number;
        Balance?: number;
        Periodterm?: number;
        InvStatus?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        CUR_VL?: number;
        PRT_CNT?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        DetailList?: CashRestoreASTRDRow[];
    }
    namespace CashRestoreRow {
        const idProperty = "HeaderID";
        const nameProperty = "StoreID";
        const localTextPrefix = "ALgorithm.CashRestore";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            TR_DT = "TR_DT",
            StoreID = "StoreID",
            TR_DS = "TR_DS",
            TRTY_NAME = "TRTY_NAME",
            Store_NAME = "Store_NAME",
            DocTransNo = "DocTransNo",
            OrderNo = "OrderNo",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            SupervisorId = "SupervisorId",
            Supervisor_NAME = "Supervisor_NAME",
            PStoreID = "PStoreID",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            HDSCR_AR = "HDSCR_AR",
            HDSCR_EN = "HDSCR_EN",
            PriceID = "PriceID",
            Priceedit = "Priceedit",
            ReferenceNo = "ReferenceNo",
            HDISC = "HDISC",
            HDISC1 = "HDISC1",
            HDISC2 = "HDISC2",
            HDISC3 = "HDISC3",
            HDISC4 = "HDISC4",
            HDISC1R = "HDISC1R",
            HDISC2R = "HDISC2R",
            HDISC3R = "HDISC3R",
            HTAX = "HTAX",
            HTAX1 = "HTAX1",
            HTAX2 = "HTAX2",
            HTAX3 = "HTAX3",
            HTAX4 = "HTAX4",
            HTAX1R = "HTAX1R",
            HTAX2R = "HTAX2R",
            HTAX3R = "HTAX3R",
            HAddtions = "HAddtions",
            HdrAddtionsR = "HdrAddtionsR",
            PeriodCredit = "PeriodCredit",
            EXPENSEVL = "EXPENSEVL",
            Notes = "Notes",
            Paid = "Paid",
            Total = "Total",
            NetTotal = "NetTotal",
            Balance = "Balance",
            Periodterm = "Periodterm",
            InvStatus = "InvStatus",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            PRT_CNT = "PRT_CNT",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            DetailList = "DetailList"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace CashRestoreService {
        const baseUrl = "ALgorithm/CashRestore";
        function Create(request: Serenity.SaveRequest<CashRestoreRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CashRestoreRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashRestoreRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashRestoreRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/CashRestore/Create",
            Update = "ALgorithm/CashRestore/Update",
            Delete = "ALgorithm/CashRestore/Delete",
            GetNextNumber = "ALgorithm/CashRestore/GetNextNumber",
            Retrieve = "ALgorithm/CashRestore/Retrieve",
            List = "ALgorithm/CashRestore/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashReturnASTRDForm {
        ID: Serenity.StringEditor;
        DetailID: Serenity.StringEditor;
        PKID: Serenity.LookupEditor;
        PK: Serenity.DecimalEditor;
        Item_CD: Serenity.StringEditor;
        ITM_NM_AR: Serenity.StringEditor;
        QTY: Serenity.DecimalEditor;
        ReturnQty: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        Value: Serenity.DecimalEditor;
        TAX1: Serenity.DecimalEditor;
        DISC1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        DISC2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        TAXVAL: Serenity.DecimalEditor;
        DISC: Serenity.DecimalEditor;
        DISC3: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NET: Serenity.DecimalEditor;
        PKPRC: Serenity.DecimalEditor;
        DISC4: Serenity.DecimalEditor;
        DISC1R: Serenity.DecimalEditor;
        DISC2R: Serenity.DecimalEditor;
        DISC3R: Serenity.DecimalEditor;
        STAX_VL: Serenity.DecimalEditor;
        TAX1R: Serenity.DecimalEditor;
        TAX2R: Serenity.DecimalEditor;
        TAX3R: Serenity.DecimalEditor;
        RestoreQty: Serenity.DecimalEditor;
        ItemBAL: Serenity.DecimalEditor;
        HeaderID: Serenity.StringEditor;
        TR_TY: Serenity.LookupEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        LN_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateEditor;
        StoreID: Serenity.LookupEditor;
        Store_NAME: Serenity.StringEditor;
        TR_DS: Serenity.IntegerEditor;
        GRP: Serenity.IntegerEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        TR_DS_AR: Serenity.StringEditor;
        TR_DS_EN: Serenity.StringEditor;
        ItemBarCode: Serenity.StringEditor;
        PKName: Serenity.StringEditor;
        PKCST: Serenity.DecimalEditor;
        PKCSTVL: Serenity.DecimalEditor;
        FIFO: Serenity.DecimalEditor;
        FIFOVL: Serenity.DecimalEditor;
        LIFO: Serenity.DecimalEditor;
        LIFOVL: Serenity.DecimalEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        EXPENSE_CNT: Serenity.DecimalEditor;
        CurrencyID: Serenity.StringEditor;
        Currency_Name: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        DetailRemark: Serenity.DecimalEditor;
        BonusID: Serenity.IntegerEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        PStoreID: Serenity.StringEditor;
        CustomerPrice: Serenity.DecimalEditor;
        PriceID: Serenity.StringEditor;
        PriceLevelId: Serenity.StringEditor;
        CashBoxID: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_CD2: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        CST_CD: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_CD: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_CD: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        Recipient: Serenity.StringEditor;
        RecipientDate: Serenity.StringEditor;
        disc_cur_val: Serenity.DecimalEditor;
        tax_cur_val: Serenity.DecimalEditor;
        GLPOST: Serenity.BooleanEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class CashReturnASTRDForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashReturnASTRDRow {
        ID?: number;
        DetailID?: number;
        HeaderID?: number;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_NO?: number;
        LN_NO?: number;
        TR_DT?: string;
        StoreID?: string;
        Store_NAME?: string;
        TR_DS?: number;
        GRP?: number;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NO3?: string;
        TR_DS_AR?: string;
        TR_DS_EN?: string;
        ItemBAL?: number;
        Item_CD?: string;
        ItemBarCode?: string;
        PKID?: string;
        PKName?: string;
        PK?: number;
        QTY?: number;
        PKPRC?: number;
        Price?: number;
        Value?: number;
        PKCST?: number;
        PKCSTVL?: number;
        FIFO?: number;
        FIFOVL?: number;
        LIFO?: number;
        LIFOVL?: number;
        DISC?: number;
        DISC1?: number;
        DISC2?: number;
        DISC3?: number;
        DISC4?: number;
        DISC1R?: number;
        DISC2R?: number;
        DISC3R?: number;
        STAX_VL?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAXVAL?: number;
        TAX1R?: number;
        TAX2R?: number;
        TAX3R?: number;
        EXPENSEVL?: number;
        EXPENSE_CNT?: number;
        CurrencyID?: string;
        Currency_Name?: string;
        RATE?: number;
        CUR_VL?: number;
        DetailRemark?: number;
        BonusID?: number;
        ReturnQty?: number;
        RestoreQty?: number;
        PTR_NO?: number;
        PTR_TY?: number;
        PStoreID?: string;
        CustomerPrice?: number;
        PriceID?: string;
        PriceLevelId?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        ITM_NM_AR?: string;
        ACC_NAME2?: string;
        ACC_NAME3?: string;
        Recipient?: string;
        RecipientDate?: string;
        disc_cur_val?: number;
        tax_cur_val?: number;
        GLPOST?: boolean;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        NET?: number;
    }
    namespace CashReturnASTRDRow {
        const idProperty = "ID";
        const nameProperty = "HeaderID";
        const localTextPrefix = "ALgorithm.CashReturnASTRD";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            DetailID = "DetailID",
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TRTY_NAME = "TRTY_NAME",
            TR_NO = "TR_NO",
            LN_NO = "LN_NO",
            TR_DT = "TR_DT",
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            TR_DS = "TR_DS",
            GRP = "GRP",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NO3 = "ACC_NO3",
            TR_DS_AR = "TR_DS_AR",
            TR_DS_EN = "TR_DS_EN",
            ItemBAL = "ItemBAL",
            Item_CD = "Item_CD",
            ItemBarCode = "ItemBarCode",
            PKID = "PKID",
            PKName = "PKName",
            PK = "PK",
            QTY = "QTY",
            PKPRC = "PKPRC",
            Price = "Price",
            Value = "Value",
            PKCST = "PKCST",
            PKCSTVL = "PKCSTVL",
            FIFO = "FIFO",
            FIFOVL = "FIFOVL",
            LIFO = "LIFO",
            LIFOVL = "LIFOVL",
            DISC = "DISC",
            DISC1 = "DISC1",
            DISC2 = "DISC2",
            DISC3 = "DISC3",
            DISC4 = "DISC4",
            DISC1R = "DISC1R",
            DISC2R = "DISC2R",
            DISC3R = "DISC3R",
            STAX_VL = "STAX_VL",
            TAX1 = "TAX1",
            TAX2 = "TAX2",
            TAX3 = "TAX3",
            TAXVAL = "TAXVAL",
            TAX1R = "TAX1R",
            TAX2R = "TAX2R",
            TAX3R = "TAX3R",
            EXPENSEVL = "EXPENSEVL",
            EXPENSE_CNT = "EXPENSE_CNT",
            CurrencyID = "CurrencyID",
            Currency_Name = "Currency_Name",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            DetailRemark = "DetailRemark",
            BonusID = "BonusID",
            ReturnQty = "ReturnQty",
            RestoreQty = "RestoreQty",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            PStoreID = "PStoreID",
            CustomerPrice = "CustomerPrice",
            PriceID = "PriceID",
            PriceLevelId = "PriceLevelId",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            ITM_NM_AR = "ITM_NM_AR",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NAME3 = "ACC_NAME3",
            Recipient = "Recipient",
            RecipientDate = "RecipientDate",
            disc_cur_val = "disc_cur_val",
            tax_cur_val = "tax_cur_val",
            GLPOST = "GLPOST",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            NET = "NET"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace CashReturnASTRDService {
        const baseUrl = "ALgorithm/CashReturnASTRD";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashReturnASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashReturnASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "ALgorithm/CashReturnASTRD/Retrieve",
            List = "ALgorithm/CashReturnASTRD/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashReturnForm {
        TR_TY: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        CashBoxID: Serenity.LookupEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_DS: Serenity.IntegerEditor;
        TR_DT: Serenity.DateTimeEditor;
        DocTransNo: Serenity.StringEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        REP_CD: Serenity.LookupEditor;
        REP_CD2: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        CurrencyID: Serenity.LookupEditor;
        ReferenceNo: Serenity.IntegerEditor;
        PriceID: Serenity.LookupEditor;
        Balance: Serenity.DecimalEditor;
        Notes: Serenity.TextAreaEditor;
        HDSCR_AR: Serenity.StringEditor;
        SSUM_CD: Serenity.LookupEditor;
        Cash_NAME: Serenity.StringEditor;
        OrderNo: Serenity.StringEditor;
        SUM_CD: Serenity.LookupEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        TRTY_NAME: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        SupervisorId: Serenity.StringEditor;
        Supervisor_NAME: Serenity.StringEditor;
        PStoreID: Serenity.StringEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        HDSCR_EN: Serenity.StringEditor;
        Priceedit: Serenity.BooleanEditor;
        HDISC1: Serenity.DecimalEditor;
        HDISC2: Serenity.DecimalEditor;
        HDISC3: Serenity.DecimalEditor;
        HDISC4: Serenity.DecimalEditor;
        HDISC1R: Serenity.DecimalEditor;
        HDISC2R: Serenity.DecimalEditor;
        HDISC3R: Serenity.DecimalEditor;
        HTAX1: Serenity.DecimalEditor;
        HTAX2: Serenity.DecimalEditor;
        HTAX3: Serenity.DecimalEditor;
        HTAX4: Serenity.DecimalEditor;
        HTAX1R: Serenity.DecimalEditor;
        HTAX2R: Serenity.DecimalEditor;
        HTAX3R: Serenity.DecimalEditor;
        HdrAddtionsR: Serenity.DecimalEditor;
        PeriodCredit: Serenity.StringEditor;
        Periodterm: Serenity.IntegerEditor;
        InvStatus: Serenity.IntegerEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        PRT_CNT: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        DetailList: CashReturnASTRDEditor;
        Total: Serenity.DecimalEditor;
        Paid: Serenity.DecimalEditor;
        HDISC: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        HTAX: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
    }
    class CashReturnForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashReturnRow {
        HeaderID?: number;
        TR_TY?: number;
        TR_NO?: number;
        TR_DT?: string;
        StoreID?: string;
        TR_DS?: number;
        TRTY_NAME?: string;
        Store_NAME?: string;
        DocTransNo?: string;
        OrderNo?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        SupervisorId?: string;
        Supervisor_NAME?: string;
        PStoreID?: string;
        PTR_NO?: number;
        PTR_TY?: number;
        HDSCR_AR?: string;
        HDSCR_EN?: string;
        PriceID?: string;
        Priceedit?: boolean;
        ReferenceNo?: number;
        HDISC?: number;
        HDISC1?: number;
        HDISC2?: number;
        HDISC3?: number;
        HDISC4?: number;
        HDISC1R?: number;
        HDISC2R?: number;
        HDISC3R?: number;
        HTAX?: number;
        HTAX1?: number;
        HTAX2?: number;
        HTAX3?: number;
        HTAX4?: number;
        HTAX1R?: number;
        HTAX2R?: number;
        HTAX3R?: number;
        HAddtions?: number;
        HdrAddtionsR?: number;
        PeriodCredit?: string;
        EXPENSEVL?: number;
        Notes?: string;
        Paid?: number;
        Total?: number;
        NetTotal?: number;
        Balance?: number;
        Periodterm?: number;
        InvStatus?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        CUR_VL?: number;
        PRT_CNT?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        DetailList?: CashReturnASTRDRow[];
    }
    namespace CashReturnRow {
        const idProperty = "HeaderID";
        const nameProperty = "StoreID";
        const localTextPrefix = "ALgorithm.CashReturn";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            TR_DT = "TR_DT",
            StoreID = "StoreID",
            TR_DS = "TR_DS",
            TRTY_NAME = "TRTY_NAME",
            Store_NAME = "Store_NAME",
            DocTransNo = "DocTransNo",
            OrderNo = "OrderNo",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            SupervisorId = "SupervisorId",
            Supervisor_NAME = "Supervisor_NAME",
            PStoreID = "PStoreID",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            HDSCR_AR = "HDSCR_AR",
            HDSCR_EN = "HDSCR_EN",
            PriceID = "PriceID",
            Priceedit = "Priceedit",
            ReferenceNo = "ReferenceNo",
            HDISC = "HDISC",
            HDISC1 = "HDISC1",
            HDISC2 = "HDISC2",
            HDISC3 = "HDISC3",
            HDISC4 = "HDISC4",
            HDISC1R = "HDISC1R",
            HDISC2R = "HDISC2R",
            HDISC3R = "HDISC3R",
            HTAX = "HTAX",
            HTAX1 = "HTAX1",
            HTAX2 = "HTAX2",
            HTAX3 = "HTAX3",
            HTAX4 = "HTAX4",
            HTAX1R = "HTAX1R",
            HTAX2R = "HTAX2R",
            HTAX3R = "HTAX3R",
            HAddtions = "HAddtions",
            HdrAddtionsR = "HdrAddtionsR",
            PeriodCredit = "PeriodCredit",
            EXPENSEVL = "EXPENSEVL",
            Notes = "Notes",
            Paid = "Paid",
            Total = "Total",
            NetTotal = "NetTotal",
            Balance = "Balance",
            Periodterm = "Periodterm",
            InvStatus = "InvStatus",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            PRT_CNT = "PRT_CNT",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            DetailList = "DetailList"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace CashReturnService {
        const baseUrl = "ALgorithm/CashReturn";
        function Create(request: Serenity.SaveRequest<CashReturnRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CashReturnRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashReturnRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashReturnRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/CashReturn/Create",
            Update = "ALgorithm/CashReturn/Update",
            Delete = "ALgorithm/CashReturn/Delete",
            GetNextNumber = "ALgorithm/CashReturn/GetNextNumber",
            Retrieve = "ALgorithm/CashReturn/Retrieve",
            List = "ALgorithm/CashReturn/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashSalesASTRDForm {
        ID: Serenity.StringEditor;
        DetailID: Serenity.StringEditor;
        PKID: Serenity.LookupEditor;
        PK: Serenity.DecimalEditor;
        Item_CD: Serenity.StringEditor;
        ITM_NM_AR: Serenity.StringEditor;
        QTY: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        Value: Serenity.DecimalEditor;
        TAX1: Serenity.DecimalEditor;
        DISC1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        DISC2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        TAXVAL: Serenity.DecimalEditor;
        DISC: Serenity.DecimalEditor;
        DISC3: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NET: Serenity.DecimalEditor;
        PKPRC: Serenity.DecimalEditor;
        DISC4: Serenity.DecimalEditor;
        DISC1R: Serenity.DecimalEditor;
        DISC2R: Serenity.DecimalEditor;
        DISC3R: Serenity.DecimalEditor;
        STAX_VL: Serenity.DecimalEditor;
        TAX1R: Serenity.DecimalEditor;
        TAX2R: Serenity.DecimalEditor;
        TAX3R: Serenity.DecimalEditor;
        ReturnQty: Serenity.DecimalEditor;
        RestoreQty: Serenity.DecimalEditor;
        ItemBAL: Serenity.DecimalEditor;
        HeaderID: Serenity.StringEditor;
        TR_TY: Serenity.LookupEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        LN_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateEditor;
        StoreID: Serenity.LookupEditor;
        Store_NAME: Serenity.StringEditor;
        TR_DS: Serenity.IntegerEditor;
        GRP: Serenity.IntegerEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        TR_DS_AR: Serenity.StringEditor;
        TR_DS_EN: Serenity.StringEditor;
        ItemBarCode: Serenity.StringEditor;
        PKName: Serenity.StringEditor;
        PKCST: Serenity.DecimalEditor;
        PKCSTVL: Serenity.DecimalEditor;
        FIFO: Serenity.DecimalEditor;
        FIFOVL: Serenity.DecimalEditor;
        LIFO: Serenity.DecimalEditor;
        LIFOVL: Serenity.DecimalEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        EXPENSE_CNT: Serenity.DecimalEditor;
        CurrencyID: Serenity.StringEditor;
        Currency_Name: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        DetailRemark: Serenity.DecimalEditor;
        BonusID: Serenity.IntegerEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        PStoreID: Serenity.StringEditor;
        CustomerPrice: Serenity.DecimalEditor;
        PriceID: Serenity.StringEditor;
        PriceLevelId: Serenity.StringEditor;
        CashBoxID: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_CD2: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        CST_CD: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_CD: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_CD: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        Recipient: Serenity.StringEditor;
        RecipientDate: Serenity.StringEditor;
        disc_cur_val: Serenity.DecimalEditor;
        tax_cur_val: Serenity.DecimalEditor;
        GLPOST: Serenity.BooleanEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class CashSalesASTRDForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashSalesASTRDRow {
        ID?: number;
        DetailID?: number;
        HeaderID?: number;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_NO?: number;
        LN_NO?: number;
        TR_DT?: string;
        StoreID?: string;
        Store_NAME?: string;
        TR_DS?: number;
        GRP?: number;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NO3?: string;
        TR_DS_AR?: string;
        TR_DS_EN?: string;
        ItemBAL?: number;
        Item_CD?: string;
        ItemBarCode?: string;
        PKID?: string;
        PKName?: string;
        PK?: number;
        QTY?: number;
        PKPRC?: number;
        Price?: number;
        Value?: number;
        PKCST?: number;
        PKCSTVL?: number;
        FIFO?: number;
        FIFOVL?: number;
        LIFO?: number;
        LIFOVL?: number;
        DISC?: number;
        DISC1?: number;
        DISC2?: number;
        DISC3?: number;
        DISC4?: number;
        DISC1R?: number;
        DISC2R?: number;
        DISC3R?: number;
        STAX_VL?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAXVAL?: number;
        TAX1R?: number;
        TAX2R?: number;
        TAX3R?: number;
        EXPENSEVL?: number;
        EXPENSE_CNT?: number;
        CurrencyID?: string;
        Currency_Name?: string;
        RATE?: number;
        CUR_VL?: number;
        DetailRemark?: number;
        BonusID?: number;
        ReturnQty?: number;
        RestoreQty?: number;
        PTR_NO?: number;
        PTR_TY?: number;
        PStoreID?: string;
        CustomerPrice?: number;
        PriceID?: string;
        PriceLevelId?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        ITM_NM_AR?: string;
        ACC_NAME2?: string;
        ACC_NAME3?: string;
        Recipient?: string;
        RecipientDate?: string;
        disc_cur_val?: number;
        tax_cur_val?: number;
        GLPOST?: boolean;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        NET?: number;
    }
    namespace CashSalesASTRDRow {
        const idProperty = "ID";
        const nameProperty = "HeaderID";
        const localTextPrefix = "ALgorithm.CashSalesASTRD";
        const lookupKey = "ALgorithm.CashSalesASTRD";
        function getLookup(): Q.Lookup<CashSalesASTRDRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            DetailID = "DetailID",
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TRTY_NAME = "TRTY_NAME",
            TR_NO = "TR_NO",
            LN_NO = "LN_NO",
            TR_DT = "TR_DT",
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            TR_DS = "TR_DS",
            GRP = "GRP",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NO3 = "ACC_NO3",
            TR_DS_AR = "TR_DS_AR",
            TR_DS_EN = "TR_DS_EN",
            ItemBAL = "ItemBAL",
            Item_CD = "Item_CD",
            ItemBarCode = "ItemBarCode",
            PKID = "PKID",
            PKName = "PKName",
            PK = "PK",
            QTY = "QTY",
            PKPRC = "PKPRC",
            Price = "Price",
            Value = "Value",
            PKCST = "PKCST",
            PKCSTVL = "PKCSTVL",
            FIFO = "FIFO",
            FIFOVL = "FIFOVL",
            LIFO = "LIFO",
            LIFOVL = "LIFOVL",
            DISC = "DISC",
            DISC1 = "DISC1",
            DISC2 = "DISC2",
            DISC3 = "DISC3",
            DISC4 = "DISC4",
            DISC1R = "DISC1R",
            DISC2R = "DISC2R",
            DISC3R = "DISC3R",
            STAX_VL = "STAX_VL",
            TAX1 = "TAX1",
            TAX2 = "TAX2",
            TAX3 = "TAX3",
            TAXVAL = "TAXVAL",
            TAX1R = "TAX1R",
            TAX2R = "TAX2R",
            TAX3R = "TAX3R",
            EXPENSEVL = "EXPENSEVL",
            EXPENSE_CNT = "EXPENSE_CNT",
            CurrencyID = "CurrencyID",
            Currency_Name = "Currency_Name",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            DetailRemark = "DetailRemark",
            BonusID = "BonusID",
            ReturnQty = "ReturnQty",
            RestoreQty = "RestoreQty",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            PStoreID = "PStoreID",
            CustomerPrice = "CustomerPrice",
            PriceID = "PriceID",
            PriceLevelId = "PriceLevelId",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            ITM_NM_AR = "ITM_NM_AR",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NAME3 = "ACC_NAME3",
            Recipient = "Recipient",
            RecipientDate = "RecipientDate",
            disc_cur_val = "disc_cur_val",
            tax_cur_val = "tax_cur_val",
            GLPOST = "GLPOST",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            NET = "NET"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace CashSalesASTRDService {
        const baseUrl = "ALgorithm/CashSalesASTRD";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashSalesASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashSalesASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "ALgorithm/CashSalesASTRD/Retrieve",
            List = "ALgorithm/CashSalesASTRD/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashSalesForm {
        TR_TY: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        CashBoxID: Serenity.LookupEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateTimeEditor;
        TR_DS: Serenity.IntegerEditor;
        DocTransNo: Serenity.StringEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        REP_CD: Serenity.LookupEditor;
        REP_CD2: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        CurrencyID: Serenity.LookupEditor;
        PriceID: Serenity.LookupEditor;
        Balance: Serenity.DecimalEditor;
        Notes: Serenity.TextAreaEditor;
        HDSCR_AR: Serenity.StringEditor;
        SSUM_CD: Serenity.LookupEditor;
        Cash_NAME: Serenity.StringEditor;
        OrderNo: Serenity.StringEditor;
        SUM_CD: Serenity.LookupEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        TRTY_NAME: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        SupervisorId: Serenity.StringEditor;
        Supervisor_NAME: Serenity.StringEditor;
        PStoreID: Serenity.StringEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        HDSCR_EN: Serenity.StringEditor;
        Priceedit: Serenity.BooleanEditor;
        ReferenceNo: Serenity.IntegerEditor;
        HDISC1: Serenity.DecimalEditor;
        HDISC2: Serenity.DecimalEditor;
        HDISC3: Serenity.DecimalEditor;
        HDISC4: Serenity.DecimalEditor;
        HDISC1R: Serenity.DecimalEditor;
        HDISC2R: Serenity.DecimalEditor;
        HDISC3R: Serenity.DecimalEditor;
        HTAX1: Serenity.DecimalEditor;
        HTAX2: Serenity.DecimalEditor;
        HTAX3: Serenity.DecimalEditor;
        HTAX4: Serenity.DecimalEditor;
        HTAX1R: Serenity.DecimalEditor;
        HTAX2R: Serenity.DecimalEditor;
        HTAX3R: Serenity.DecimalEditor;
        HdrAddtionsR: Serenity.DecimalEditor;
        PeriodCredit: Serenity.StringEditor;
        Periodterm: Serenity.IntegerEditor;
        InvStatus: Serenity.IntegerEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        PRT_CNT: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        DetailList: CashSalesASTRDEditor;
        Total: Serenity.DecimalEditor;
        Paid: Serenity.DecimalEditor;
        HDISC: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        HTAX: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
    }
    class CashSalesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface CashSalesRow {
        HeaderID?: number;
        TR_TY?: number;
        TR_NO?: number;
        TR_DT?: string;
        TR_DS?: number;
        StoreID?: string;
        TRTY_NAME?: string;
        Store_NAME?: string;
        DocTransNo?: string;
        OrderNo?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        SupervisorId?: string;
        Supervisor_NAME?: string;
        PStoreID?: string;
        PTR_NO?: number;
        PTR_TY?: number;
        HDSCR_AR?: string;
        HDSCR_EN?: string;
        PriceID?: string;
        Priceedit?: boolean;
        ReferenceNo?: number;
        HDISC?: number;
        HDISC1?: number;
        HDISC2?: number;
        HDISC3?: number;
        HDISC4?: number;
        HDISC1R?: number;
        HDISC2R?: number;
        HDISC3R?: number;
        HTAX?: number;
        HTAX1?: number;
        HTAX2?: number;
        HTAX3?: number;
        HTAX4?: number;
        HTAX1R?: number;
        HTAX2R?: number;
        HTAX3R?: number;
        HAddtions?: number;
        HdrAddtionsR?: number;
        PeriodCredit?: string;
        EXPENSEVL?: number;
        Notes?: string;
        Paid?: number;
        Total?: number;
        NetTotal?: number;
        Balance?: number;
        Periodterm?: number;
        InvStatus?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        CUR_VL?: number;
        PRT_CNT?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        DetailList?: CashSalesASTRDRow[];
    }
    namespace CashSalesRow {
        const idProperty = "HeaderID";
        const nameProperty = "StoreID";
        const localTextPrefix = "ALgorithm.CashSales";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            TR_DT = "TR_DT",
            TR_DS = "TR_DS",
            StoreID = "StoreID",
            TRTY_NAME = "TRTY_NAME",
            Store_NAME = "Store_NAME",
            DocTransNo = "DocTransNo",
            OrderNo = "OrderNo",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            SupervisorId = "SupervisorId",
            Supervisor_NAME = "Supervisor_NAME",
            PStoreID = "PStoreID",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            HDSCR_AR = "HDSCR_AR",
            HDSCR_EN = "HDSCR_EN",
            PriceID = "PriceID",
            Priceedit = "Priceedit",
            ReferenceNo = "ReferenceNo",
            HDISC = "HDISC",
            HDISC1 = "HDISC1",
            HDISC2 = "HDISC2",
            HDISC3 = "HDISC3",
            HDISC4 = "HDISC4",
            HDISC1R = "HDISC1R",
            HDISC2R = "HDISC2R",
            HDISC3R = "HDISC3R",
            HTAX = "HTAX",
            HTAX1 = "HTAX1",
            HTAX2 = "HTAX2",
            HTAX3 = "HTAX3",
            HTAX4 = "HTAX4",
            HTAX1R = "HTAX1R",
            HTAX2R = "HTAX2R",
            HTAX3R = "HTAX3R",
            HAddtions = "HAddtions",
            HdrAddtionsR = "HdrAddtionsR",
            PeriodCredit = "PeriodCredit",
            EXPENSEVL = "EXPENSEVL",
            Notes = "Notes",
            Paid = "Paid",
            Total = "Total",
            NetTotal = "NetTotal",
            Balance = "Balance",
            Periodterm = "Periodterm",
            InvStatus = "InvStatus",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            PRT_CNT = "PRT_CNT",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            DetailList = "DetailList"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace CashSalesService {
        const baseUrl = "ALgorithm/CashSales";
        function Create(request: Serenity.SaveRequest<CashSalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CashSalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashSalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashSalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/CashSales/Create",
            Update = "ALgorithm/CashSales/Update",
            Delete = "ALgorithm/CashSales/Delete",
            GetNextNumber = "ALgorithm/CashSales/GetNextNumber",
            Retrieve = "ALgorithm/CashSales/Retrieve",
            List = "ALgorithm/CashSales/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface CheckTRForm {
        CHK_TYP: Serenity.EnumEditor;
        CHK_NO: Serenity.StringEditor;
        TR_TY: Serenity.LookupEditor;
        TR_NO: Serenity.IntegerEditor;
        LN_NO: Serenity.IntegerEditor;
        Doc_TYP: Serenity.EnumEditor;
        TR_DT: Serenity.DateEditor;
        ACC_NO: Serenity.LookupEditor;
        ISU_DT: Serenity.DateEditor;
        DUE_DT: Serenity.DateEditor;
        BNKID: Serenity.LookupEditor;
        BNK_NAME: Serenity.LookupEditor;
        Notes_ACCID: Serenity.LookupEditor;
        Notes_ACCNAME: Serenity.StringEditor;
        Endorsed_NO: Serenity.LookupEditor;
        Endorsed_NAME: Serenity.StringEditor;
        STAT: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        Store_NAME: Serenity.StringEditor;
        TRTY_NAME: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        STAT_DT: Serenity.DateEditor;
        AMT: Serenity.DecimalEditor;
        AMT_PAID: Serenity.DecimalEditor;
        TotalValue: Serenity.DecimalEditor;
        ExpenseValue: Serenity.DecimalEditor;
        DEPT_BNKID: Serenity.LookupEditor;
        DEPT_BNKNM: Serenity.StringEditor;
        CBNKID: Serenity.LookupEditor;
        CBNK_NAME: Serenity.StringEditor;
        RPACC_NO: Serenity.LookupEditor;
        RPACC_NAME: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        DIFF_VL: Serenity.DecimalEditor;
        ACC_NO2: Serenity.LookupEditor;
        CashBoxID: Serenity.LookupEditor;
        DSCR_AR: Serenity.TextAreaEditor;
        POSTED: Serenity.BooleanEditor;
        SER_NO: Serenity.IntegerEditor;
        CRDB: Serenity.IntegerEditor;
        CHKPOST: Serenity.BooleanEditor;
        File_NO: Serenity.StringEditor;
        PAY_TYPE: Serenity.IntegerEditor;
        CUR_VL: Serenity.DecimalEditor;
        REP_CD: Serenity.LookupEditor;
        REP_NAME: Serenity.StringEditor;
        CurrencyID: Serenity.LookupEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        ACC_NO3: Serenity.LookupEditor;
        ACC_NAME3: Serenity.StringEditor;
        ACC_NO4: Serenity.LookupEditor;
        ACC_NAME4: Serenity.StringEditor;
        RMRK: Serenity.TextAreaEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class CheckTRForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface CheckTRRow {
        ID?: number;
        CHK_TYP?: Web.Modules.Common.CheckType;
        CHK_NO?: string;
        TR_TY?: number;
        TR_NO?: number;
        LN_NO?: number;
        Doc_TYP?: Web.Modules.Common.DocType;
        STAT?: number;
        StoreID?: string;
        Store_NAME?: string;
        TRTY_NAME?: string;
        TR_DT?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        BNKID?: string;
        BNK_NAME?: string;
        DEPT_BNKID?: string;
        DEPT_BNKNM?: string;
        CBNKID?: string;
        CBNK_NAME?: string;
        RPACC_NO?: string;
        RPACC_NAME?: string;
        Notes_ACCID?: string;
        Notes_ACCNAME?: string;
        Endorsed_NO?: string;
        Endorsed_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        STAT_DT?: string;
        ISU_DT?: string;
        DUE_DT?: string;
        AMT?: number;
        AMT_PAID?: number;
        TotalValue?: number;
        ExpenseValue?: number;
        DIFF_VL?: number;
        RMRK?: string;
        DSCR_AR?: string;
        POSTED?: boolean;
        SER_NO?: number;
        CRDB?: number;
        CHKPOST?: boolean;
        File_NO?: string;
        PAY_TYPE?: number;
        CUR_VL?: number;
        REP_CD?: string;
        REP_NAME?: string;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        ACC_NO4?: string;
        ACC_NAME4?: string;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace CheckTRRow {
        const idProperty = "ID";
        const nameProperty = "CHK_NO";
        const localTextPrefix = "ALgorithm.CheckTR";
        const lookupKey = "ALgorithm.ASCHKTR";
        function getLookup(): Q.Lookup<CheckTRRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            CHK_TYP = "CHK_TYP",
            CHK_NO = "CHK_NO",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            LN_NO = "LN_NO",
            Doc_TYP = "Doc_TYP",
            STAT = "STAT",
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            TRTY_NAME = "TRTY_NAME",
            TR_DT = "TR_DT",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            BNKID = "BNKID",
            BNK_NAME = "BNK_NAME",
            DEPT_BNKID = "DEPT_BNKID",
            DEPT_BNKNM = "DEPT_BNKNM",
            CBNKID = "CBNKID",
            CBNK_NAME = "CBNK_NAME",
            RPACC_NO = "RPACC_NO",
            RPACC_NAME = "RPACC_NAME",
            Notes_ACCID = "Notes_ACCID",
            Notes_ACCNAME = "Notes_ACCNAME",
            Endorsed_NO = "Endorsed_NO",
            Endorsed_NAME = "Endorsed_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            STAT_DT = "STAT_DT",
            ISU_DT = "ISU_DT",
            DUE_DT = "DUE_DT",
            AMT = "AMT",
            AMT_PAID = "AMT_PAID",
            TotalValue = "TotalValue",
            ExpenseValue = "ExpenseValue",
            DIFF_VL = "DIFF_VL",
            RMRK = "RMRK",
            DSCR_AR = "DSCR_AR",
            POSTED = "POSTED",
            SER_NO = "SER_NO",
            CRDB = "CRDB",
            CHKPOST = "CHKPOST",
            File_NO = "File_NO",
            PAY_TYPE = "PAY_TYPE",
            CUR_VL = "CUR_VL",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            ACC_NO4 = "ACC_NO4",
            ACC_NAME4 = "ACC_NAME4",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace CheckTRService {
        const baseUrl = "ALgorithm/CheckTR";
        function Create(request: Serenity.SaveRequest<CheckTRRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CheckTRRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CheckTRRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CheckTRRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/CheckTR/Create",
            Update = "ALgorithm/CheckTR/Update",
            Delete = "ALgorithm/CheckTR/Delete",
            Retrieve = "ALgorithm/CheckTR/Retrieve",
            List = "ALgorithm/CheckTR/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface ChecksForm {
        CHK_NO: Serenity.StringEditor;
        CHK_TYP: Serenity.EnumEditor;
        DOC_TYP: Serenity.EnumEditor;
        StoreID: Serenity.LookupEditor;
        TR_TY: Serenity.LookupEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        LN_NO: Serenity.IntegerEditor;
        CRDB: Serenity.IntegerEditor;
        Store_NAME: Serenity.StringEditor;
        ACC_NO: Serenity.LookupEditor;
        ACC_NAME: Serenity.StringEditor;
        BNKID: Serenity.LookupEditor;
        AMT: Serenity.DecimalEditor;
        AMT_PAID: Serenity.DecimalEditor;
        TotalValue: Serenity.DecimalEditor;
        ExpenseValue: Serenity.DecimalEditor;
        STAT: Serenity.EnumEditor;
        RPACC_NO: Serenity.LookupEditor;
        RPACC_NAME: Serenity.StringEditor;
        Notes_ACCNO: Serenity.LookupEditor;
        Notes_ACCNAME: Serenity.StringEditor;
        Endorsed_NO: Serenity.LookupEditor;
        Endorsed_NAME: Serenity.StringEditor;
        CashBoxID: Serenity.LookupEditor;
        Cash_NAME: Serenity.StringEditor;
        Currency_NAME: Serenity.StringEditor;
        CUR_VL: Serenity.DecimalEditor;
        ISU_DT: Serenity.DateEditor;
        DUE_DT: Serenity.DateEditor;
        BNK_NAME: Serenity.StringEditor;
        CBNKID: Serenity.LookupEditor;
        CBNK_NAME: Serenity.StringEditor;
        File_NO: Serenity.StringEditor;
        LAST_ACC: Serenity.StringEditor;
        STAT_DT: Serenity.DateEditor;
        DEPT_BNKID: Serenity.LookupEditor;
        DEPT_BNKNM: Serenity.StringEditor;
        ByHand: Serenity.StringEditor;
        TRNSACC: Serenity.StringEditor;
        Rep_CD: Serenity.LookupEditor;
        Rep_NAME: Serenity.StringEditor;
        Rep_CD2: Serenity.LookupEditor;
        Rep_NAME2: Serenity.StringEditor;
        POSTED: Serenity.BooleanEditor;
        SUM_CD: Serenity.LookupEditor;
        SUM_NAME: Serenity.StringEditor;
        GL_NO: Serenity.IntegerEditor;
        GL_TY: Serenity.IntegerEditor;
        DOC_NO: Serenity.StringEditor;
        RMRK2: Serenity.StringEditor;
        CurrencyID: Serenity.LookupEditor;
        RATE: Serenity.DecimalEditor;
        Status: Serenity.EnumEditor;
        RMRK: Serenity.TextAreaEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class ChecksForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface ChecksRow {
        ID?: number;
        CHK_TYP?: Web.Modules.Common.CheckType;
        CHK_NO?: string;
        DOC_TYP?: Web.Modules.Common.DocType;
        StoreID?: string;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_NO?: number;
        LN_NO?: number;
        CRDB?: number;
        Store_NAME?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        RPACC_NO?: string;
        RPACC_NAME?: string;
        Notes_ACCNO?: string;
        Notes_ACCNAME?: string;
        Endorsed_NO?: string;
        Endorsed_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        AMT?: number;
        AMT_PAID?: number;
        TotalValue?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        CUR_VL?: number;
        RATE?: number;
        ExpenseValue?: number;
        ISU_DT?: string;
        DUE_DT?: string;
        BNKID?: string;
        BNK_NAME?: string;
        CBNKID?: string;
        CBNK_NAME?: string;
        File_NO?: string;
        LAST_ACC?: string;
        STAT?: Web.Modules.Common.CheckTRTY;
        STAT_DT?: string;
        RMRK?: string;
        DEPT_BNKID?: string;
        DEPT_BNKNM?: string;
        ByHand?: string;
        TRNSACC?: string;
        Rep_CD?: string;
        Rep_NAME?: string;
        Rep_CD2?: string;
        Rep_NAME2?: string;
        POSTED?: boolean;
        SUM_CD?: string;
        SUM_NAME?: string;
        GL_NO?: number;
        GL_TY?: number;
        DOC_NO?: string;
        RMRK2?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace ChecksRow {
        const idProperty = "ID";
        const nameProperty = "CHK_NO";
        const localTextPrefix = "ALgorithm.Checks";
        const lookupKey = "ALgorithm.ASCHKS";
        function getLookup(): Q.Lookup<ChecksRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            CHK_TYP = "CHK_TYP",
            CHK_NO = "CHK_NO",
            DOC_TYP = "DOC_TYP",
            StoreID = "StoreID",
            TR_TY = "TR_TY",
            TRTY_NAME = "TRTY_NAME",
            TR_NO = "TR_NO",
            LN_NO = "LN_NO",
            CRDB = "CRDB",
            Store_NAME = "Store_NAME",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            RPACC_NO = "RPACC_NO",
            RPACC_NAME = "RPACC_NAME",
            Notes_ACCNO = "Notes_ACCNO",
            Notes_ACCNAME = "Notes_ACCNAME",
            Endorsed_NO = "Endorsed_NO",
            Endorsed_NAME = "Endorsed_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            AMT = "AMT",
            AMT_PAID = "AMT_PAID",
            TotalValue = "TotalValue",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            CUR_VL = "CUR_VL",
            RATE = "RATE",
            ExpenseValue = "ExpenseValue",
            ISU_DT = "ISU_DT",
            DUE_DT = "DUE_DT",
            BNKID = "BNKID",
            BNK_NAME = "BNK_NAME",
            CBNKID = "CBNKID",
            CBNK_NAME = "CBNK_NAME",
            File_NO = "File_NO",
            LAST_ACC = "LAST_ACC",
            STAT = "STAT",
            STAT_DT = "STAT_DT",
            RMRK = "RMRK",
            DEPT_BNKID = "DEPT_BNKID",
            DEPT_BNKNM = "DEPT_BNKNM",
            ByHand = "ByHand",
            TRNSACC = "TRNSACC",
            Rep_CD = "Rep_CD",
            Rep_NAME = "Rep_NAME",
            Rep_CD2 = "Rep_CD2",
            Rep_NAME2 = "Rep_NAME2",
            POSTED = "POSTED",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            GL_NO = "GL_NO",
            GL_TY = "GL_TY",
            DOC_NO = "DOC_NO",
            RMRK2 = "RMRK2",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace ChecksService {
        const baseUrl = "ALgorithm/Checks";
        function Create(request: Serenity.SaveRequest<ChecksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ChecksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ChecksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ChecksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/Checks/Create",
            Update = "ALgorithm/Checks/Update",
            Delete = "ALgorithm/Checks/Delete",
            Retrieve = "ALgorithm/Checks/Retrieve",
            List = "ALgorithm/Checks/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface CitiesForm {
        CityID: Serenity.StringEditor;
        Name_AR: Serenity.StringEditor;
        Name_EN: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class CitiesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface CitiesRow {
        ID?: number;
        CityID?: string;
        Name_AR?: string;
        Name_EN?: string;
        RegionID?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }
    namespace CitiesRow {
        const idProperty = "ID";
        const nameProperty = "CityID";
        const localTextPrefix = "ALgorithm.Cities";
        const lookupKey = "ALgorithm.Cities";
        function getLookup(): Q.Lookup<CitiesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            CityID = "CityID",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN",
            RegionID = "RegionID",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace CitiesService {
        const baseUrl = "ALgorithm/Cities";
        function Create(request: Serenity.SaveRequest<CitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/Cities/Create",
            Update = "ALgorithm/Cities/Update",
            Delete = "ALgorithm/Cities/Delete",
            GetNextNumber = "ALgorithm/Cities/GetNextNumber",
            Retrieve = "ALgorithm/Cities/Retrieve",
            List = "ALgorithm/Cities/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface CurrencyForm {
        CurrencyID: Serenity.StringEditor;
        Name_AR: Serenity.StringEditor;
        Name_EN: Serenity.StringEditor;
        CUR_RAT: Serenity.DecimalEditor;
        RAT_DT: Serenity.DateEditor;
        RAT_RTIO: Serenity.StringEditor;
        ICUR_RAT: Serenity.DecimalEditor;
        CUR_PRFX_AR: Serenity.StringEditor;
        CUR_PRFX_EN: Serenity.StringEditor;
        CUR_SMPL_AR: Serenity.StringEditor;
        CUR_SMPL_EN: Serenity.StringEditor;
        CUR_RNG: Serenity.DecimalEditor;
        CUR_ACCNO: Serenity.StringEditor;
        ROLL_NO: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        RMRK: Serenity.TextAreaEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class CurrencyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface CurrencyRow {
        ID?: number;
        CurrencyID?: string;
        Name_AR?: string;
        Name_EN?: string;
        CUR_RAT?: number;
        RAT_DT?: string;
        RAT_RTIO?: string;
        ICUR_RAT?: number;
        CUR_PRFX_AR?: string;
        CUR_PRFX_EN?: string;
        CUR_SMPL_AR?: string;
        CUR_SMPL_EN?: string;
        CUR_RNG?: number;
        CUR_ACCNO?: string;
        ROLL_NO?: string;
        RMRK?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace CurrencyRow {
        const idProperty = "ID";
        const nameProperty = "CurrencyID";
        const localTextPrefix = "ALgorithm.Currency";
        const lookupKey = "ALgorithm.Currency";
        function getLookup(): Q.Lookup<CurrencyRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            CurrencyID = "CurrencyID",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN",
            CUR_RAT = "CUR_RAT",
            RAT_DT = "RAT_DT",
            RAT_RTIO = "RAT_RTIO",
            ICUR_RAT = "ICUR_RAT",
            CUR_PRFX_AR = "CUR_PRFX_AR",
            CUR_PRFX_EN = "CUR_PRFX_EN",
            CUR_SMPL_AR = "CUR_SMPL_AR",
            CUR_SMPL_EN = "CUR_SMPL_EN",
            CUR_RNG = "CUR_RNG",
            CUR_ACCNO = "CUR_ACCNO",
            ROLL_NO = "ROLL_NO",
            RMRK = "RMRK",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace CurrencyService {
        const baseUrl = "ALgorithm/Currency";
        function Create(request: Serenity.SaveRequest<CurrencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CurrencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CurrencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CurrencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/Currency/Create",
            Update = "ALgorithm/Currency/Update",
            Delete = "ALgorithm/Currency/Delete",
            GetNextNumber = "ALgorithm/Currency/GetNextNumber",
            Retrieve = "ALgorithm/Currency/Retrieve",
            List = "ALgorithm/Currency/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface DefaultTableRow {
        ID?: number;
        StoreID?: string;
        Store_Name?: string;
        SupplierID?: string;
        Supplier_Name?: string;
        CustomerID?: string;
        Customer_Name?: string;
        SuperID?: string;
        Super_Name?: string;
        CST_CD?: string;
        CST_NAME?: string;
        REP_CD?: string;
        REP_NAME?: string;
        CurrencyID?: string;
        Currency_NAME?: string;
        PriceID?: string;
        PriceName?: string;
        Cash_NO?: string;
        Cash_NAME?: string;
        CashPurchase?: number;
        Purchase?: number;
        CashReturn?: number;
        ReturnSales?: number;
        TransferTO?: number;
        TransferIN?: number;
        CashSales?: number;
        Sales?: number;
        CashRestore?: number;
        RestorePurchase?: number;
        AddInventory?: number;
        RemoveInventory?: number;
        CashReceive?: number;
        CashPayed?: number;
        ChecksReceive?: number;
        ChecksPayed?: number;
        AccountingNotice?: number;
        Expenses?: number;
        Revenue?: number;
        Entry?: number;
    }
    namespace DefaultTableRow {
        const idProperty = "ID";
        const nameProperty = "StoreID";
        const localTextPrefix = "ALgorithm.DefaultTable";
        const lookupKey = "ALgorithm.DefaultTable";
        function getLookup(): Q.Lookup<DefaultTableRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            StoreID = "StoreID",
            Store_Name = "Store_Name",
            SupplierID = "SupplierID",
            Supplier_Name = "Supplier_Name",
            CustomerID = "CustomerID",
            Customer_Name = "Customer_Name",
            SuperID = "SuperID",
            Super_Name = "Super_Name",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            PriceID = "PriceID",
            PriceName = "PriceName",
            Cash_NO = "Cash_NO",
            Cash_NAME = "Cash_NAME",
            CashPurchase = "CashPurchase",
            Purchase = "Purchase",
            CashReturn = "CashReturn",
            ReturnSales = "ReturnSales",
            TransferTO = "TransferTO",
            TransferIN = "TransferIN",
            CashSales = "CashSales",
            Sales = "Sales",
            CashRestore = "CashRestore",
            RestorePurchase = "RestorePurchase",
            AddInventory = "AddInventory",
            RemoveInventory = "RemoveInventory",
            CashReceive = "CashReceive",
            CashPayed = "CashPayed",
            ChecksReceive = "ChecksReceive",
            ChecksPayed = "ChecksPayed",
            AccountingNotice = "AccountingNotice",
            Expenses = "Expenses",
            Revenue = "Revenue",
            Entry = "Entry"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace DefaultTableService {
        const baseUrl = "ALgorithm/DefaultTable";
        function Create(request: Serenity.SaveRequest<DefaultTableRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DefaultTableRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DefaultTableRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DefaultTableRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/DefaultTable/Create",
            Update = "ALgorithm/DefaultTable/Update",
            Delete = "ALgorithm/DefaultTable/Delete",
            Retrieve = "ALgorithm/DefaultTable/Retrieve",
            List = "ALgorithm/DefaultTable/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface DistrictsForm {
        DistrictsID: Serenity.StringEditor;
        Name_AR: Serenity.StringEditor;
        Name_EN: Serenity.StringEditor;
        CityID: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class DistrictsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface DistrictsRow {
        ID?: number;
        DistrictsID?: string;
        Name_AR?: string;
        Name_EN?: string;
        CityID?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }
    namespace DistrictsRow {
        const idProperty = "ID";
        const nameProperty = "DistrictsID";
        const localTextPrefix = "ALgorithm.Districts";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            DistrictsID = "DistrictsID",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN",
            CityID = "CityID",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace DistrictsService {
        const baseUrl = "ALgorithm/Districts";
        function Create(request: Serenity.SaveRequest<DistrictsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DistrictsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DistrictsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DistrictsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/Districts/Create",
            Update = "ALgorithm/Districts/Update",
            Delete = "ALgorithm/Districts/Delete",
            GetNextNumber = "ALgorithm/Districts/GetNextNumber",
            Retrieve = "ALgorithm/Districts/Retrieve",
            List = "ALgorithm/Districts/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface ItemGroupsForm {
        MITM_CD: Serenity.StringEditor;
        Name_AR: Serenity.StringEditor;
        Name_EN: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class ItemGroupsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface ItemGroupsRow {
        ID?: number;
        MITM_CD?: string;
        Name_AR?: string;
        Name_EN?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }
    namespace ItemGroupsRow {
        const idProperty = "ID";
        const nameProperty = "MITM_CD";
        const localTextPrefix = "ALgorithm.ItemGroups";
        const lookupKey = "ALgorithm.ItemGroups";
        function getLookup(): Q.Lookup<ItemGroupsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            MITM_CD = "MITM_CD",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace ItemGroupsService {
        const baseUrl = "ALgorithm/ItemGroups";
        function Create(request: Serenity.SaveRequest<ItemGroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ItemGroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemGroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemGroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/ItemGroups/Create",
            Update = "ALgorithm/ItemGroups/Update",
            Delete = "ALgorithm/ItemGroups/Delete",
            GetNextNumber = "ALgorithm/ItemGroups/GetNextNumber",
            Retrieve = "ALgorithm/ItemGroups/Retrieve",
            List = "ALgorithm/ItemGroups/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface ItemSubGroupsForm {
        CITM_CD: Serenity.StringEditor;
        Name_AR: Serenity.StringEditor;
        Name_EN: Serenity.StringEditor;
        ParentID: Serenity.LookupEditor;
        OrderBy: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        UpdatedBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class ItemSubGroupsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface ItemSubGroupsRow {
        ID?: number;
        CITM_CD?: string;
        Name_AR?: string;
        Name_EN?: string;
        ParentID?: string;
        OrderBy?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }
    namespace ItemSubGroupsRow {
        const idProperty = "ID";
        const nameProperty = "CITM_CD";
        const localTextPrefix = "ALgorithm.ItemSubGroups";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            CITM_CD = "CITM_CD",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN",
            ParentID = "ParentID",
            OrderBy = "OrderBy",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace ItemSubGroupsService {
        const baseUrl = "ALgorithm/ItemSubGroups";
        function Create(request: Serenity.SaveRequest<ItemSubGroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ItemSubGroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemSubGroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemSubGroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/ItemSubGroups/Create",
            Update = "ALgorithm/ItemSubGroups/Update",
            Delete = "ALgorithm/ItemSubGroups/Delete",
            GetNextNumber = "ALgorithm/ItemSubGroups/GetNextNumber",
            Retrieve = "ALgorithm/ItemSubGroups/Retrieve",
            List = "ALgorithm/ItemSubGroups/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface ItemTypesRow {
        Id?: number;
        ItemtypeId?: string;
        NameAr?: string;
        NameEn?: string;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }
    namespace ItemTypesRow {
        const idProperty = "Id";
        const nameProperty = "ItemtypeId";
        const localTextPrefix = "ALgorithm.ItemTypes";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            ItemtypeId = "ItemtypeId",
            NameAr = "NameAr",
            NameEn = "NameEn",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface ItemsBarcodeForm {
        ItemID: Serenity.StringEditor;
        Barcode: Serenity.StringEditor;
        Item_CD: Serenity.StringEditor;
        PKID: Serenity.LookupEditor;
        PKName: Serenity.StringEditor;
        PKRAT: Serenity.DecimalEditor;
        SPRC2: Serenity.DecimalEditor;
        SPRC3: Serenity.DecimalEditor;
        SPRC4: Serenity.DecimalEditor;
        SPRC5: Serenity.DecimalEditor;
        SPRC6: Serenity.DecimalEditor;
        BGNCST: Serenity.DecimalEditor;
        UCST: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        UpdatedBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class ItemsBarcodeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface ItemsBarcodeRow {
        ID?: number;
        ItemID?: number;
        Barcode?: string;
        Item_CD?: string;
        PKID?: string;
        PKName?: string;
        PKRAT?: number;
        SPRC2?: number;
        SPRC3?: number;
        SPRC4?: number;
        SPRC5?: number;
        SPRC6?: number;
        BGNCST?: number;
        UCST?: number;
        Price?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }
    namespace ItemsBarcodeRow {
        const idProperty = "ID";
        const nameProperty = "Barcode";
        const localTextPrefix = "ALgorithm.ItemsBarcode";
        const lookupKey = "ALgorithm.ItemsBarcode";
        function getLookup(): Q.Lookup<ItemsBarcodeRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            ItemID = "ItemID",
            Barcode = "Barcode",
            Item_CD = "Item_CD",
            PKID = "PKID",
            PKName = "PKName",
            PKRAT = "PKRAT",
            SPRC2 = "SPRC2",
            SPRC3 = "SPRC3",
            SPRC4 = "SPRC4",
            SPRC5 = "SPRC5",
            SPRC6 = "SPRC6",
            BGNCST = "BGNCST",
            UCST = "UCST",
            Price = "Price",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace ItemsBarcodeService {
        const baseUrl = "ALgorithm/ItemsBarcode";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemsBarcodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemsBarcodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "ALgorithm/ItemsBarcode/Retrieve",
            List = "ALgorithm/ItemsBarcode/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface ItemsForm {
        Item_CD: Serenity.StringEditor;
        Item_Name_AR: Serenity.StringEditor;
        Item_Name_EN: Serenity.StringEditor;
        MITM_CD: Serenity.LookupEditor;
        CITM_CD: Serenity.LookupEditor;
        ItemTypes: Serenity.LookupEditor;
        SLS_PK: Serenity.LookupEditor;
        PRCH_PK: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        ItemSupplier: Serenity.BooleanEditor;
        RMRK: Serenity.TextAreaEditor;
        DetailList: ItemBarcodeEditor;
        ItemCost: Serenity.DecimalEditor;
        PPRC2: Serenity.DecimalEditor;
        SPRC2: Serenity.DecimalEditor;
        PPRC3: Serenity.DecimalEditor;
        SPRC3: Serenity.DecimalEditor;
        PPRC4: Serenity.DecimalEditor;
        SPRC4: Serenity.DecimalEditor;
        PPRC5: Serenity.DecimalEditor;
        SPRC5: Serenity.DecimalEditor;
        PPRC6: Serenity.DecimalEditor;
        SPRC6: Serenity.DecimalEditor;
        SALDISC_TYPE: Serenity.EnumEditor;
        PURDISC_TYPE: Serenity.EnumEditor;
        SDISC1: Serenity.DecimalEditor;
        PDISC1: Serenity.DecimalEditor;
        SDISC2: Serenity.DecimalEditor;
        PDISC2: Serenity.DecimalEditor;
        SDISC3: Serenity.DecimalEditor;
        PDISC3: Serenity.DecimalEditor;
        TAX_TYPE: Serenity.EnumEditor;
        TAX1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        TAX4: Serenity.DecimalEditor;
        BGNBAL: Serenity.DecimalEditor;
        BGNCOST: Serenity.DecimalEditor;
        UCOST: Serenity.DecimalEditor;
        ItemBAL: Serenity.DecimalEditor;
        MinQty: Serenity.DecimalEditor;
        MaxQty: Serenity.DecimalEditor;
        Itemlimit: Serenity.DecimalEditor;
        MITM_NM_AR: Serenity.StringEditor;
        MITM_NM_EN: Serenity.StringEditor;
        ItemPhoto: Serenity.StringEditor;
        GLNO1: Serenity.StringEditor;
        GLNO2: Serenity.StringEditor;
        GLNO3: Serenity.StringEditor;
        EnteredBy: Serenity.StringEditor;
        UpdatedBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class ItemsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface ItemsLocForm {
        StoreID: Serenity.LookupEditor;
        Item_CD: Serenity.StringEditor;
        Item_Name_AR: Serenity.StringEditor;
        Item_Name_EN: Serenity.StringEditor;
        TR_TY: Serenity.IntegerEditor;
        BGNBAL: Serenity.DecimalEditor;
        BGNCST: Serenity.DecimalEditor;
        UCST: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        INQTY: Serenity.DecimalEditor;
        OUTQTY: Serenity.DecimalEditor;
        BAL: Serenity.DecimalEditor;
        PackageID: Serenity.LookupEditor;
        BGNBONASQTY: Serenity.DecimalEditor;
        BONASQTY: Serenity.DecimalEditor;
        MinQty: Serenity.DecimalEditor;
        MaxQty: Serenity.DecimalEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class ItemsLocForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface ItemsLocRow {
        ID?: number;
        StoreID?: string;
        Item_CD?: string;
        Item_Name_AR?: string;
        Item_Name_EN?: string;
        TR_TY?: number;
        BGNBAL?: number;
        BGNCST?: number;
        UCST?: number;
        Price?: number;
        INQTY?: number;
        OUTQTY?: number;
        BAL?: number;
        PackageID?: string;
        BGNBONASQTY?: number;
        BONASQTY?: number;
        MinQty?: number;
        MaxQty?: number;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace ItemsLocRow {
        const idProperty = "ID";
        const nameProperty = "StoreID";
        const localTextPrefix = "ALgorithm.ItemsLoc";
        const lookupKey = "ALgorithm.ASITMLOC";
        function getLookup(): Q.Lookup<ItemsLocRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            StoreID = "StoreID",
            Item_CD = "Item_CD",
            Item_Name_AR = "Item_Name_AR",
            Item_Name_EN = "Item_Name_EN",
            TR_TY = "TR_TY",
            BGNBAL = "BGNBAL",
            BGNCST = "BGNCST",
            UCST = "UCST",
            Price = "Price",
            INQTY = "INQTY",
            OUTQTY = "OUTQTY",
            BAL = "BAL",
            PackageID = "PackageID",
            BGNBONASQTY = "BGNBONASQTY",
            BONASQTY = "BONASQTY",
            MinQty = "MinQty",
            MaxQty = "MaxQty",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace ItemsLocService {
        const baseUrl = "ALgorithm/ItemsLoc";
        function Create(request: Serenity.SaveRequest<ItemsLocRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ItemsLocRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemsLocRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemsLocRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ValidateUniqueConstraint(request: Web.Modules.ALgorithm.ItemsLoc.ItemsValidationRequest, onSuccess?: (response: Web.Modules.ALgorithm.ItemsLoc.ItemsResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/ItemsLoc/Create",
            Update = "ALgorithm/ItemsLoc/Update",
            Delete = "ALgorithm/ItemsLoc/Delete",
            Retrieve = "ALgorithm/ItemsLoc/Retrieve",
            List = "ALgorithm/ItemsLoc/List",
            ValidateUniqueConstraint = "ALgorithm/ItemsLoc/ValidateUniqueConstraint"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface ItemsRow {
        ID?: number;
        Item_CD?: string;
        Item_Name_AR?: string;
        Item_Name_EN?: string;
        MITM_CD?: string;
        CITM_CD?: string;
        ItemTypes?: number;
        RMRK?: string;
        ItemSupplier?: boolean;
        SLS_PK?: string;
        PRCH_PK?: string;
        ItemCost?: number;
        SPRC2?: number;
        SPRC3?: number;
        SPRC4?: number;
        SPRC5?: number;
        SPRC6?: number;
        PPRC2?: number;
        PPRC3?: number;
        PPRC4?: number;
        PPRC5?: number;
        PPRC6?: number;
        SALDISC_TYPE?: Web.Modules.Common.DiscType;
        PURDISC_TYPE?: Web.Modules.Common.DiscType;
        TAX_TYPE?: Web.Modules.Common.DiscType;
        SDISC1?: number;
        SDISC2?: number;
        SDISC3?: number;
        PDISC1?: number;
        PDISC2?: number;
        PDISC3?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAX4?: number;
        BGNBAL?: number;
        BGNCOST?: number;
        UCOST?: number;
        ItemBAL?: number;
        MinQty?: number;
        MaxQty?: number;
        Itemlimit?: number;
        MITM_NM_AR?: string;
        MITM_NM_EN?: string;
        StoreID?: string;
        ItemPhoto?: number[];
        GLNO1?: string;
        GLNO2?: string;
        GLNO3?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
        DetailList?: ItemsBarcodeRow[];
    }
    namespace ItemsRow {
        const idProperty = "ID";
        const nameProperty = "Item_CD";
        const localTextPrefix = "ALgorithm.Items";
        const lookupKey = "ALgorithm.ASITMS";
        function getLookup(): Q.Lookup<ItemsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            Item_CD = "Item_CD",
            Item_Name_AR = "Item_Name_AR",
            Item_Name_EN = "Item_Name_EN",
            MITM_CD = "MITM_CD",
            CITM_CD = "CITM_CD",
            ItemTypes = "ItemTypes",
            RMRK = "RMRK",
            ItemSupplier = "ItemSupplier",
            SLS_PK = "SLS_PK",
            PRCH_PK = "PRCH_PK",
            ItemCost = "ItemCost",
            SPRC2 = "SPRC2",
            SPRC3 = "SPRC3",
            SPRC4 = "SPRC4",
            SPRC5 = "SPRC5",
            SPRC6 = "SPRC6",
            PPRC2 = "PPRC2",
            PPRC3 = "PPRC3",
            PPRC4 = "PPRC4",
            PPRC5 = "PPRC5",
            PPRC6 = "PPRC6",
            SALDISC_TYPE = "SALDISC_TYPE",
            PURDISC_TYPE = "PURDISC_TYPE",
            TAX_TYPE = "TAX_TYPE",
            SDISC1 = "SDISC1",
            SDISC2 = "SDISC2",
            SDISC3 = "SDISC3",
            PDISC1 = "PDISC1",
            PDISC2 = "PDISC2",
            PDISC3 = "PDISC3",
            TAX1 = "TAX1",
            TAX2 = "TAX2",
            TAX3 = "TAX3",
            TAX4 = "TAX4",
            BGNBAL = "BGNBAL",
            BGNCOST = "BGNCOST",
            UCOST = "UCOST",
            ItemBAL = "ItemBAL",
            MinQty = "MinQty",
            MaxQty = "MaxQty",
            Itemlimit = "Itemlimit",
            MITM_NM_AR = "MITM_NM_AR",
            MITM_NM_EN = "MITM_NM_EN",
            StoreID = "StoreID",
            ItemPhoto = "ItemPhoto",
            GLNO1 = "GLNO1",
            GLNO2 = "GLNO2",
            GLNO3 = "GLNO3",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate",
            DetailList = "DetailList"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace ItemsService {
        const baseUrl = "ALgorithm/Items";
        function Create(request: Serenity.SaveRequest<ItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/Items/Create",
            Update = "ALgorithm/Items/Update",
            Delete = "ALgorithm/Items/Delete",
            GetNextNumber = "ALgorithm/Items/GetNextNumber",
            Retrieve = "ALgorithm/Items/Retrieve",
            List = "ALgorithm/Items/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface MaxTableRow {
        ID?: number;
        TableID?: string;
        Table_NAME?: string;
        MAXSQL?: string;
        RMRK?: string;
        Status?: number;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace MaxTableRow {
        const idProperty = "ID";
        const nameProperty = "TableID";
        const localTextPrefix = "ALgorithm.MaxTable";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            TableID = "TableID",
            Table_NAME = "Table_NAME",
            MAXSQL = "MAXSQL",
            RMRK = "RMRK",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface NotesRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
    }
    namespace NotesRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "ALgorithm.Notes";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            NoteId = "NoteId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface PackageForm {
        PKID: Serenity.StringEditor;
        PK_NM_AR: Serenity.StringEditor;
        PK_NM_EN: Serenity.StringEditor;
        PKCNT: Serenity.DecimalEditor;
        FACT: Serenity.DecimalEditor;
        SPKID: Serenity.StringEditor;
        RMRK: Serenity.StringEditor;
        RMRK2: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class PackageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface PackageRow {
        ID?: number;
        PKID?: string;
        PK_NM_AR?: string;
        PK_NM_EN?: string;
        PKCNT?: number;
        FACT?: number;
        SPKID?: string;
        RMRK?: string;
        RMRK2?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace PackageRow {
        const idProperty = "ID";
        const nameProperty = "PKID";
        const localTextPrefix = "ALgorithm.Package";
        const lookupKey = "ALgorithm.Package";
        function getLookup(): Q.Lookup<PackageRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            PKID = "PKID",
            PK_NM_AR = "PK_NM_AR",
            PK_NM_EN = "PK_NM_EN",
            PKCNT = "PKCNT",
            FACT = "FACT",
            SPKID = "SPKID",
            RMRK = "RMRK",
            RMRK2 = "RMRK2",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace PackageService {
        const baseUrl = "ALgorithm/Package";
        function Create(request: Serenity.SaveRequest<PackageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PackageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PackageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PackageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/Package/Create",
            Update = "ALgorithm/Package/Update",
            Delete = "ALgorithm/Package/Delete",
            Retrieve = "ALgorithm/Package/Retrieve",
            List = "ALgorithm/Package/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface PriceTypesForm {
        PriceId: Serenity.StringEditor;
        NameAr: Serenity.StringEditor;
        NameEn: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        EnteredBy: Serenity.StringEditor;
        UpdatedBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class PriceTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface PriceTypesRow {
        Id?: number;
        PriceId?: string;
        NameAr?: string;
        NameEn?: string;
        Status?: number;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }
    namespace PriceTypesRow {
        const idProperty = "Id";
        const nameProperty = "PriceId";
        const localTextPrefix = "ALgorithm.PriceTypes";
        const lookupKey = "ALgorithm.PriceTypes";
        function getLookup(): Q.Lookup<PriceTypesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            PriceId = "PriceId",
            NameAr = "NameAr",
            NameEn = "NameEn",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace PriceTypesService {
        const baseUrl = "ALgorithm/PriceTypes";
        function Create(request: Serenity.SaveRequest<PriceTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PriceTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PriceTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PriceTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/PriceTypes/Create",
            Update = "ALgorithm/PriceTypes/Update",
            Delete = "ALgorithm/PriceTypes/Delete",
            Retrieve = "ALgorithm/PriceTypes/Retrieve",
            List = "ALgorithm/PriceTypes/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface PurchASTRDForm {
        ID: Serenity.StringEditor;
        DetailID: Serenity.StringEditor;
        PKID: Serenity.LookupEditor;
        PK: Serenity.DecimalEditor;
        Item_CD: Serenity.StringEditor;
        ITM_NM_AR: Serenity.StringEditor;
        QTY: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        Value: Serenity.DecimalEditor;
        TAX1: Serenity.DecimalEditor;
        DISC1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        DISC2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        TAXVAL: Serenity.DecimalEditor;
        DISC: Serenity.DecimalEditor;
        DISC3: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NET: Serenity.DecimalEditor;
        PKPRC: Serenity.DecimalEditor;
        DISC4: Serenity.DecimalEditor;
        DISC1R: Serenity.DecimalEditor;
        DISC2R: Serenity.DecimalEditor;
        DISC3R: Serenity.DecimalEditor;
        STAX_VL: Serenity.DecimalEditor;
        TAX1R: Serenity.DecimalEditor;
        TAX2R: Serenity.DecimalEditor;
        TAX3R: Serenity.DecimalEditor;
        ReturnQty: Serenity.DecimalEditor;
        RestoreQty: Serenity.DecimalEditor;
        ItemBAL: Serenity.DecimalEditor;
        HeaderID: Serenity.StringEditor;
        TR_TY: Serenity.LookupEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        LN_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateEditor;
        StoreID: Serenity.LookupEditor;
        Store_NAME: Serenity.StringEditor;
        TR_DS: Serenity.IntegerEditor;
        GRP: Serenity.IntegerEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        TR_DS_AR: Serenity.StringEditor;
        TR_DS_EN: Serenity.StringEditor;
        ItemBarCode: Serenity.StringEditor;
        PKName: Serenity.StringEditor;
        PKCST: Serenity.DecimalEditor;
        PKCSTVL: Serenity.DecimalEditor;
        FIFO: Serenity.DecimalEditor;
        FIFOVL: Serenity.DecimalEditor;
        LIFO: Serenity.DecimalEditor;
        LIFOVL: Serenity.DecimalEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        EXPENSE_CNT: Serenity.DecimalEditor;
        CurrencyID: Serenity.StringEditor;
        Currency_Name: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        DetailRemark: Serenity.DecimalEditor;
        BonusID: Serenity.IntegerEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        PStoreID: Serenity.StringEditor;
        CustomerPrice: Serenity.DecimalEditor;
        PriceID: Serenity.StringEditor;
        PriceLevelId: Serenity.StringEditor;
        CashBoxID: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_CD2: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        CST_CD: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_CD: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_CD: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        Recipient: Serenity.StringEditor;
        RecipientDate: Serenity.StringEditor;
        disc_cur_val: Serenity.DecimalEditor;
        tax_cur_val: Serenity.DecimalEditor;
        GLPOST: Serenity.BooleanEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class PurchASTRDForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface PurchASTRDRow {
        ID?: number;
        DetailID?: number;
        HeaderID?: number;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_NO?: number;
        LN_NO?: number;
        TR_DT?: string;
        StoreID?: string;
        Store_NAME?: string;
        TR_DS?: number;
        GRP?: number;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NO3?: string;
        TR_DS_AR?: string;
        TR_DS_EN?: string;
        ItemBAL?: number;
        Item_CD?: string;
        ItemBarCode?: string;
        PKID?: string;
        PKName?: string;
        PK?: number;
        QTY?: number;
        PKPRC?: number;
        Price?: number;
        Value?: number;
        PKCST?: number;
        PKCSTVL?: number;
        FIFO?: number;
        FIFOVL?: number;
        LIFO?: number;
        LIFOVL?: number;
        DISC?: number;
        DISC1?: number;
        DISC2?: number;
        DISC3?: number;
        DISC4?: number;
        DISC1R?: number;
        DISC2R?: number;
        DISC3R?: number;
        STAX_VL?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAXVAL?: number;
        TAX1R?: number;
        TAX2R?: number;
        TAX3R?: number;
        EXPENSEVL?: number;
        EXPENSE_CNT?: number;
        CurrencyID?: string;
        Currency_Name?: string;
        RATE?: number;
        CUR_VL?: number;
        DetailRemark?: number;
        BonusID?: number;
        ReturnQty?: number;
        RestoreQty?: number;
        PTR_NO?: number;
        PTR_TY?: number;
        PStoreID?: string;
        CustomerPrice?: number;
        PriceID?: string;
        PriceLevelId?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        ITM_NM_AR?: string;
        ACC_NAME2?: string;
        ACC_NAME3?: string;
        Recipient?: string;
        RecipientDate?: string;
        disc_cur_val?: number;
        tax_cur_val?: number;
        GLPOST?: boolean;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        NET?: number;
    }
    namespace PurchASTRDRow {
        const idProperty = "ID";
        const nameProperty = "HeaderID";
        const localTextPrefix = "ALgorithm.PurchASTRD";
        const lookupKey = "ALgorithm.PurchASTRD";
        function getLookup(): Q.Lookup<PurchASTRDRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            DetailID = "DetailID",
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TRTY_NAME = "TRTY_NAME",
            TR_NO = "TR_NO",
            LN_NO = "LN_NO",
            TR_DT = "TR_DT",
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            TR_DS = "TR_DS",
            GRP = "GRP",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NO3 = "ACC_NO3",
            TR_DS_AR = "TR_DS_AR",
            TR_DS_EN = "TR_DS_EN",
            ItemBAL = "ItemBAL",
            Item_CD = "Item_CD",
            ItemBarCode = "ItemBarCode",
            PKID = "PKID",
            PKName = "PKName",
            PK = "PK",
            QTY = "QTY",
            PKPRC = "PKPRC",
            Price = "Price",
            Value = "Value",
            PKCST = "PKCST",
            PKCSTVL = "PKCSTVL",
            FIFO = "FIFO",
            FIFOVL = "FIFOVL",
            LIFO = "LIFO",
            LIFOVL = "LIFOVL",
            DISC = "DISC",
            DISC1 = "DISC1",
            DISC2 = "DISC2",
            DISC3 = "DISC3",
            DISC4 = "DISC4",
            DISC1R = "DISC1R",
            DISC2R = "DISC2R",
            DISC3R = "DISC3R",
            STAX_VL = "STAX_VL",
            TAX1 = "TAX1",
            TAX2 = "TAX2",
            TAX3 = "TAX3",
            TAXVAL = "TAXVAL",
            TAX1R = "TAX1R",
            TAX2R = "TAX2R",
            TAX3R = "TAX3R",
            EXPENSEVL = "EXPENSEVL",
            EXPENSE_CNT = "EXPENSE_CNT",
            CurrencyID = "CurrencyID",
            Currency_Name = "Currency_Name",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            DetailRemark = "DetailRemark",
            BonusID = "BonusID",
            ReturnQty = "ReturnQty",
            RestoreQty = "RestoreQty",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            PStoreID = "PStoreID",
            CustomerPrice = "CustomerPrice",
            PriceID = "PriceID",
            PriceLevelId = "PriceLevelId",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            ITM_NM_AR = "ITM_NM_AR",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NAME3 = "ACC_NAME3",
            Recipient = "Recipient",
            RecipientDate = "RecipientDate",
            disc_cur_val = "disc_cur_val",
            tax_cur_val = "tax_cur_val",
            GLPOST = "GLPOST",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            NET = "NET"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace PurchASTRDService {
        const baseUrl = "ALgorithm/PurchASTRD";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetItemBAL(request: GetItemBALRequest, onSuccess?: (response: GetItemBALResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "ALgorithm/PurchASTRD/Retrieve",
            List = "ALgorithm/PurchASTRD/List",
            GetItemBAL = "ALgorithm/PurchASTRD/GetItemBAL"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface PurchaseForm {
        TR_TY: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        CashBoxID: Serenity.LookupEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_DS: Serenity.IntegerEditor;
        TR_DT: Serenity.DateTimeEditor;
        DocTransNo: Serenity.StringEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        REP_CD: Serenity.LookupEditor;
        REP_CD2: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        CurrencyID: Serenity.LookupEditor;
        PriceID: Serenity.LookupEditor;
        ReferenceNo: Serenity.IntegerEditor;
        Balance: Serenity.DecimalEditor;
        Notes: Serenity.TextAreaEditor;
        HDSCR_AR: Serenity.StringEditor;
        SSUM_CD: Serenity.LookupEditor;
        Cash_NAME: Serenity.StringEditor;
        OrderNo: Serenity.StringEditor;
        SUM_CD: Serenity.LookupEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        TRTY_NAME: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        SupervisorId: Serenity.StringEditor;
        Supervisor_NAME: Serenity.StringEditor;
        PStoreID: Serenity.StringEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        HDSCR_EN: Serenity.StringEditor;
        Priceedit: Serenity.BooleanEditor;
        HDISC1: Serenity.DecimalEditor;
        HDISC2: Serenity.DecimalEditor;
        HDISC3: Serenity.DecimalEditor;
        HDISC4: Serenity.DecimalEditor;
        HDISC1R: Serenity.DecimalEditor;
        HDISC2R: Serenity.DecimalEditor;
        HDISC3R: Serenity.DecimalEditor;
        HTAX1: Serenity.DecimalEditor;
        HTAX2: Serenity.DecimalEditor;
        HTAX3: Serenity.DecimalEditor;
        HTAX4: Serenity.DecimalEditor;
        HTAX1R: Serenity.DecimalEditor;
        HTAX2R: Serenity.DecimalEditor;
        HTAX3R: Serenity.DecimalEditor;
        HdrAddtionsR: Serenity.DecimalEditor;
        PeriodCredit: Serenity.StringEditor;
        Periodterm: Serenity.IntegerEditor;
        InvStatus: Serenity.IntegerEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        PRT_CNT: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        DetailList: PurchASTRDEditor;
        Total: Serenity.DecimalEditor;
        Paid: Serenity.DecimalEditor;
        HDISC: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        HTAX: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
    }
    class PurchaseForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface PurchaseRow {
        HeaderID?: number;
        TR_TY?: number;
        TR_NO?: number;
        TR_DT?: string;
        StoreID?: string;
        TR_DS?: number;
        TRTY_NAME?: string;
        Store_NAME?: string;
        DocTransNo?: string;
        OrderNo?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        SupervisorId?: string;
        Supervisor_NAME?: string;
        PStoreID?: string;
        PTR_NO?: number;
        PTR_TY?: number;
        HDSCR_AR?: string;
        HDSCR_EN?: string;
        PriceID?: string;
        Priceedit?: boolean;
        ReferenceNo?: number;
        HDISC?: number;
        HDISC1?: number;
        HDISC2?: number;
        HDISC3?: number;
        HDISC4?: number;
        HDISC1R?: number;
        HDISC2R?: number;
        HDISC3R?: number;
        HTAX?: number;
        HTAX1?: number;
        HTAX2?: number;
        HTAX3?: number;
        HTAX4?: number;
        HTAX1R?: number;
        HTAX2R?: number;
        HTAX3R?: number;
        HAddtions?: number;
        HdrAddtionsR?: number;
        PeriodCredit?: string;
        EXPENSEVL?: number;
        Notes?: string;
        Paid?: number;
        Total?: number;
        NetTotal?: number;
        Balance?: number;
        Periodterm?: number;
        InvStatus?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        CUR_VL?: number;
        PRT_CNT?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        DetailList?: PurchASTRDRow[];
    }
    namespace PurchaseRow {
        const idProperty = "HeaderID";
        const nameProperty = "StoreID";
        const localTextPrefix = "ALgorithm.Purchase";
        const lookupKey = "ALgorithm.Purchase";
        function getLookup(): Q.Lookup<PurchaseRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            TR_DT = "TR_DT",
            StoreID = "StoreID",
            TR_DS = "TR_DS",
            TRTY_NAME = "TRTY_NAME",
            Store_NAME = "Store_NAME",
            DocTransNo = "DocTransNo",
            OrderNo = "OrderNo",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            SupervisorId = "SupervisorId",
            Supervisor_NAME = "Supervisor_NAME",
            PStoreID = "PStoreID",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            HDSCR_AR = "HDSCR_AR",
            HDSCR_EN = "HDSCR_EN",
            PriceID = "PriceID",
            Priceedit = "Priceedit",
            ReferenceNo = "ReferenceNo",
            HDISC = "HDISC",
            HDISC1 = "HDISC1",
            HDISC2 = "HDISC2",
            HDISC3 = "HDISC3",
            HDISC4 = "HDISC4",
            HDISC1R = "HDISC1R",
            HDISC2R = "HDISC2R",
            HDISC3R = "HDISC3R",
            HTAX = "HTAX",
            HTAX1 = "HTAX1",
            HTAX2 = "HTAX2",
            HTAX3 = "HTAX3",
            HTAX4 = "HTAX4",
            HTAX1R = "HTAX1R",
            HTAX2R = "HTAX2R",
            HTAX3R = "HTAX3R",
            HAddtions = "HAddtions",
            HdrAddtionsR = "HdrAddtionsR",
            PeriodCredit = "PeriodCredit",
            EXPENSEVL = "EXPENSEVL",
            Notes = "Notes",
            Paid = "Paid",
            Total = "Total",
            NetTotal = "NetTotal",
            Balance = "Balance",
            Periodterm = "Periodterm",
            InvStatus = "InvStatus",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            PRT_CNT = "PRT_CNT",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            DetailList = "DetailList"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace PurchaseService {
        const baseUrl = "ALgorithm/Purchase";
        function Create(request: Serenity.SaveRequest<PurchaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/Purchase/Create",
            Update = "ALgorithm/Purchase/Update",
            Delete = "ALgorithm/Purchase/Delete",
            GetNextNumber = "ALgorithm/Purchase/GetNextNumber",
            Retrieve = "ALgorithm/Purchase/Retrieve",
            List = "ALgorithm/Purchase/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface REPSForm {
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_NAME_EN: Serenity.StringEditor;
        SupervisorID: Serenity.LookupEditor;
        SaleCommision: Serenity.DecimalEditor;
        CollectCommision: Serenity.DecimalEditor;
        PriceID: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class REPSForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface REPSRow {
        ID?: number;
        REP_CD?: string;
        REP_NAME?: string;
        REP_NAME_EN?: string;
        SupervisorID?: string;
        SaleCommision?: number;
        CollectCommision?: number;
        PriceID?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }
    namespace REPSRow {
        const idProperty = "ID";
        const nameProperty = "REP_CD";
        const localTextPrefix = "ALgorithm.REPS";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_NAME_EN = "REP_NAME_EN",
            SupervisorID = "SupervisorID",
            SaleCommision = "SaleCommision",
            CollectCommision = "CollectCommision",
            PriceID = "PriceID",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace REPSService {
        const baseUrl = "ALgorithm/REPS";
        function Create(request: Serenity.SaveRequest<REPSRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<REPSRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<REPSRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<REPSRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/REPS/Create",
            Update = "ALgorithm/REPS/Update",
            Delete = "ALgorithm/REPS/Delete",
            GetNextNumber = "ALgorithm/REPS/GetNextNumber",
            Retrieve = "ALgorithm/REPS/Retrieve",
            List = "ALgorithm/REPS/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface RegionsForm {
        RegionID: Serenity.StringEditor;
        Name_AR: Serenity.StringEditor;
        Name_EN: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class RegionsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface RegionsRow {
        ID?: number;
        RegionID?: string;
        Name_AR?: string;
        Name_EN?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }
    namespace RegionsRow {
        const idProperty = "ID";
        const nameProperty = "RegionID";
        const localTextPrefix = "ALgorithm.Regions";
        const lookupKey = "ALgorithm.Regions";
        function getLookup(): Q.Lookup<RegionsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            RegionID = "RegionID",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace RegionsService {
        const baseUrl = "ALgorithm/Regions";
        function Create(request: Serenity.SaveRequest<RegionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/Regions/Create",
            Update = "ALgorithm/Regions/Update",
            Delete = "ALgorithm/Regions/Delete",
            GetNextNumber = "ALgorithm/Regions/GetNextNumber",
            Retrieve = "ALgorithm/Regions/Retrieve",
            List = "ALgorithm/Regions/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface RestoreASTRDForm {
        ID: Serenity.StringEditor;
        DetailID: Serenity.StringEditor;
        PKID: Serenity.LookupEditor;
        PK: Serenity.DecimalEditor;
        Item_CD: Serenity.StringEditor;
        ITM_NM_AR: Serenity.StringEditor;
        QTY: Serenity.DecimalEditor;
        RestoreQty: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        Value: Serenity.DecimalEditor;
        TAX1: Serenity.DecimalEditor;
        DISC1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        DISC2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        TAXVAL: Serenity.DecimalEditor;
        DISC: Serenity.DecimalEditor;
        DISC3: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NET: Serenity.DecimalEditor;
        PKPRC: Serenity.DecimalEditor;
        DISC4: Serenity.DecimalEditor;
        DISC1R: Serenity.DecimalEditor;
        DISC2R: Serenity.DecimalEditor;
        DISC3R: Serenity.DecimalEditor;
        STAX_VL: Serenity.DecimalEditor;
        TAX1R: Serenity.DecimalEditor;
        TAX2R: Serenity.DecimalEditor;
        TAX3R: Serenity.DecimalEditor;
        ReturnQty: Serenity.DecimalEditor;
        ItemBAL: Serenity.DecimalEditor;
        HeaderID: Serenity.StringEditor;
        TR_TY: Serenity.LookupEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        LN_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateEditor;
        StoreID: Serenity.LookupEditor;
        Store_NAME: Serenity.StringEditor;
        TR_DS: Serenity.IntegerEditor;
        GRP: Serenity.IntegerEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        TR_DS_AR: Serenity.StringEditor;
        TR_DS_EN: Serenity.StringEditor;
        ItemBarCode: Serenity.StringEditor;
        PKName: Serenity.StringEditor;
        PKCST: Serenity.DecimalEditor;
        PKCSTVL: Serenity.DecimalEditor;
        FIFO: Serenity.DecimalEditor;
        FIFOVL: Serenity.DecimalEditor;
        LIFO: Serenity.DecimalEditor;
        LIFOVL: Serenity.DecimalEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        EXPENSE_CNT: Serenity.DecimalEditor;
        CurrencyID: Serenity.StringEditor;
        Currency_Name: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        DetailRemark: Serenity.DecimalEditor;
        BonusID: Serenity.IntegerEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        PStoreID: Serenity.StringEditor;
        CustomerPrice: Serenity.DecimalEditor;
        PriceID: Serenity.StringEditor;
        PriceLevelId: Serenity.StringEditor;
        CashBoxID: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_CD2: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        CST_CD: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_CD: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_CD: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        Recipient: Serenity.StringEditor;
        RecipientDate: Serenity.StringEditor;
        disc_cur_val: Serenity.DecimalEditor;
        tax_cur_val: Serenity.DecimalEditor;
        GLPOST: Serenity.BooleanEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class RestoreASTRDForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface RestoreASTRDRow {
        ID?: number;
        DetailID?: number;
        HeaderID?: number;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_NO?: number;
        LN_NO?: number;
        TR_DT?: string;
        StoreID?: string;
        Store_NAME?: string;
        TR_DS?: number;
        GRP?: number;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NO3?: string;
        TR_DS_AR?: string;
        TR_DS_EN?: string;
        ItemBAL?: number;
        Item_CD?: string;
        ItemBarCode?: string;
        PKID?: string;
        PKName?: string;
        PK?: number;
        QTY?: number;
        PKPRC?: number;
        Price?: number;
        Value?: number;
        PKCST?: number;
        PKCSTVL?: number;
        FIFO?: number;
        FIFOVL?: number;
        LIFO?: number;
        LIFOVL?: number;
        DISC?: number;
        DISC1?: number;
        DISC2?: number;
        DISC3?: number;
        DISC4?: number;
        DISC1R?: number;
        DISC2R?: number;
        DISC3R?: number;
        STAX_VL?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAXVAL?: number;
        TAX1R?: number;
        TAX2R?: number;
        TAX3R?: number;
        EXPENSEVL?: number;
        EXPENSE_CNT?: number;
        CurrencyID?: string;
        Currency_Name?: string;
        RATE?: number;
        CUR_VL?: number;
        DetailRemark?: number;
        BonusID?: number;
        ReturnQty?: number;
        RestoreQty?: number;
        PTR_NO?: number;
        PTR_TY?: number;
        PStoreID?: string;
        CustomerPrice?: number;
        PriceID?: string;
        PriceLevelId?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        ITM_NM_AR?: string;
        ACC_NAME2?: string;
        ACC_NAME3?: string;
        Recipient?: string;
        RecipientDate?: string;
        disc_cur_val?: number;
        tax_cur_val?: number;
        GLPOST?: boolean;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        NET?: number;
    }
    namespace RestoreASTRDRow {
        const idProperty = "ID";
        const nameProperty = "HeaderID";
        const localTextPrefix = "ALgorithm.RestoreASTRD";
        const lookupKey = "ALgorithm.RestoreASTRD";
        function getLookup(): Q.Lookup<RestoreASTRDRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            DetailID = "DetailID",
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TRTY_NAME = "TRTY_NAME",
            TR_NO = "TR_NO",
            LN_NO = "LN_NO",
            TR_DT = "TR_DT",
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            TR_DS = "TR_DS",
            GRP = "GRP",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NO3 = "ACC_NO3",
            TR_DS_AR = "TR_DS_AR",
            TR_DS_EN = "TR_DS_EN",
            ItemBAL = "ItemBAL",
            Item_CD = "Item_CD",
            ItemBarCode = "ItemBarCode",
            PKID = "PKID",
            PKName = "PKName",
            PK = "PK",
            QTY = "QTY",
            PKPRC = "PKPRC",
            Price = "Price",
            Value = "Value",
            PKCST = "PKCST",
            PKCSTVL = "PKCSTVL",
            FIFO = "FIFO",
            FIFOVL = "FIFOVL",
            LIFO = "LIFO",
            LIFOVL = "LIFOVL",
            DISC = "DISC",
            DISC1 = "DISC1",
            DISC2 = "DISC2",
            DISC3 = "DISC3",
            DISC4 = "DISC4",
            DISC1R = "DISC1R",
            DISC2R = "DISC2R",
            DISC3R = "DISC3R",
            STAX_VL = "STAX_VL",
            TAX1 = "TAX1",
            TAX2 = "TAX2",
            TAX3 = "TAX3",
            TAXVAL = "TAXVAL",
            TAX1R = "TAX1R",
            TAX2R = "TAX2R",
            TAX3R = "TAX3R",
            EXPENSEVL = "EXPENSEVL",
            EXPENSE_CNT = "EXPENSE_CNT",
            CurrencyID = "CurrencyID",
            Currency_Name = "Currency_Name",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            DetailRemark = "DetailRemark",
            BonusID = "BonusID",
            ReturnQty = "ReturnQty",
            RestoreQty = "RestoreQty",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            PStoreID = "PStoreID",
            CustomerPrice = "CustomerPrice",
            PriceID = "PriceID",
            PriceLevelId = "PriceLevelId",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            ITM_NM_AR = "ITM_NM_AR",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NAME3 = "ACC_NAME3",
            Recipient = "Recipient",
            RecipientDate = "RecipientDate",
            disc_cur_val = "disc_cur_val",
            tax_cur_val = "tax_cur_val",
            GLPOST = "GLPOST",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            NET = "NET"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace RestoreASTRDService {
        const baseUrl = "ALgorithm/RestoreASTRD";
        function Update(request: Serenity.SaveRequest<RestoreASTRDRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RestoreASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RestoreASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "ALgorithm/RestoreASTRD/Update",
            Retrieve = "ALgorithm/RestoreASTRD/Retrieve",
            List = "ALgorithm/RestoreASTRD/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface RestorePurchaseForm {
        TR_TY: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        CashBoxID: Serenity.LookupEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_DS: Serenity.IntegerEditor;
        TR_DT: Serenity.DateTimeEditor;
        DocTransNo: Serenity.StringEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        REP_CD: Serenity.LookupEditor;
        REP_CD2: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        CurrencyID: Serenity.LookupEditor;
        ReferenceNo: Serenity.IntegerEditor;
        PriceID: Serenity.LookupEditor;
        Balance: Serenity.DecimalEditor;
        Notes: Serenity.TextAreaEditor;
        HDSCR_AR: Serenity.StringEditor;
        SSUM_CD: Serenity.LookupEditor;
        Cash_NAME: Serenity.StringEditor;
        OrderNo: Serenity.StringEditor;
        SUM_CD: Serenity.LookupEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        TRTY_NAME: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        SupervisorId: Serenity.StringEditor;
        Supervisor_NAME: Serenity.StringEditor;
        PStoreID: Serenity.StringEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        HDSCR_EN: Serenity.StringEditor;
        Priceedit: Serenity.BooleanEditor;
        HDISC1: Serenity.DecimalEditor;
        HDISC2: Serenity.DecimalEditor;
        HDISC3: Serenity.DecimalEditor;
        HDISC4: Serenity.DecimalEditor;
        HDISC1R: Serenity.DecimalEditor;
        HDISC2R: Serenity.DecimalEditor;
        HDISC3R: Serenity.DecimalEditor;
        HTAX1: Serenity.DecimalEditor;
        HTAX2: Serenity.DecimalEditor;
        HTAX3: Serenity.DecimalEditor;
        HTAX4: Serenity.DecimalEditor;
        HTAX1R: Serenity.DecimalEditor;
        HTAX2R: Serenity.DecimalEditor;
        HTAX3R: Serenity.DecimalEditor;
        HdrAddtionsR: Serenity.DecimalEditor;
        PeriodCredit: Serenity.StringEditor;
        Periodterm: Serenity.IntegerEditor;
        InvStatus: Serenity.IntegerEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        PRT_CNT: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        DetailList: RestoreASTRDEditor;
        Total: Serenity.DecimalEditor;
        Paid: Serenity.DecimalEditor;
        HDISC: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        HTAX: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
    }
    class RestorePurchaseForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface RestorePurchaseRow {
        HeaderID?: number;
        TR_TY?: number;
        TR_NO?: number;
        TR_DT?: string;
        TR_DS?: number;
        StoreID?: string;
        TRTY_NAME?: string;
        Store_NAME?: string;
        DocTransNo?: string;
        OrderNo?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        SupervisorId?: string;
        Supervisor_NAME?: string;
        PStoreID?: string;
        PTR_NO?: number;
        PTR_TY?: number;
        HDSCR_AR?: string;
        HDSCR_EN?: string;
        PriceID?: string;
        Priceedit?: boolean;
        ReferenceNo?: number;
        HDISC?: number;
        HDISC1?: number;
        HDISC2?: number;
        HDISC3?: number;
        HDISC4?: number;
        HDISC1R?: number;
        HDISC2R?: number;
        HDISC3R?: number;
        HTAX?: number;
        HTAX1?: number;
        HTAX2?: number;
        HTAX3?: number;
        HTAX4?: number;
        HTAX1R?: number;
        HTAX2R?: number;
        HTAX3R?: number;
        HAddtions?: number;
        HdrAddtionsR?: number;
        PeriodCredit?: string;
        EXPENSEVL?: number;
        Notes?: string;
        Paid?: number;
        Total?: number;
        NetTotal?: number;
        Balance?: number;
        Periodterm?: number;
        InvStatus?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        CUR_VL?: number;
        PRT_CNT?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        DetailList?: RestoreASTRDRow[];
    }
    namespace RestorePurchaseRow {
        const idProperty = "HeaderID";
        const nameProperty = "StoreID";
        const localTextPrefix = "ALgorithm.RestorePurchase";
        const lookupKey = "ALgorithm.RestorePurchase";
        function getLookup(): Q.Lookup<RestorePurchaseRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            TR_DT = "TR_DT",
            TR_DS = "TR_DS",
            StoreID = "StoreID",
            TRTY_NAME = "TRTY_NAME",
            Store_NAME = "Store_NAME",
            DocTransNo = "DocTransNo",
            OrderNo = "OrderNo",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            SupervisorId = "SupervisorId",
            Supervisor_NAME = "Supervisor_NAME",
            PStoreID = "PStoreID",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            HDSCR_AR = "HDSCR_AR",
            HDSCR_EN = "HDSCR_EN",
            PriceID = "PriceID",
            Priceedit = "Priceedit",
            ReferenceNo = "ReferenceNo",
            HDISC = "HDISC",
            HDISC1 = "HDISC1",
            HDISC2 = "HDISC2",
            HDISC3 = "HDISC3",
            HDISC4 = "HDISC4",
            HDISC1R = "HDISC1R",
            HDISC2R = "HDISC2R",
            HDISC3R = "HDISC3R",
            HTAX = "HTAX",
            HTAX1 = "HTAX1",
            HTAX2 = "HTAX2",
            HTAX3 = "HTAX3",
            HTAX4 = "HTAX4",
            HTAX1R = "HTAX1R",
            HTAX2R = "HTAX2R",
            HTAX3R = "HTAX3R",
            HAddtions = "HAddtions",
            HdrAddtionsR = "HdrAddtionsR",
            PeriodCredit = "PeriodCredit",
            EXPENSEVL = "EXPENSEVL",
            Notes = "Notes",
            Paid = "Paid",
            Total = "Total",
            NetTotal = "NetTotal",
            Balance = "Balance",
            Periodterm = "Periodterm",
            InvStatus = "InvStatus",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            PRT_CNT = "PRT_CNT",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            DetailList = "DetailList"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace RestorePurchaseService {
        const baseUrl = "ALgorithm/RestorePurchase";
        function Create(request: Serenity.SaveRequest<RestorePurchaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RestorePurchaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RestorePurchaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RestorePurchaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/RestorePurchase/Create",
            Update = "ALgorithm/RestorePurchase/Update",
            Delete = "ALgorithm/RestorePurchase/Delete",
            GetNextNumber = "ALgorithm/RestorePurchase/GetNextNumber",
            Retrieve = "ALgorithm/RestorePurchase/Retrieve",
            List = "ALgorithm/RestorePurchase/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface ReturnASTRDForm {
        ID: Serenity.StringEditor;
        DetailID: Serenity.StringEditor;
        PKID: Serenity.LookupEditor;
        PK: Serenity.DecimalEditor;
        Item_CD: Serenity.StringEditor;
        ITM_NM_AR: Serenity.StringEditor;
        QTY: Serenity.DecimalEditor;
        ReturnQty: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        Value: Serenity.DecimalEditor;
        TAX1: Serenity.DecimalEditor;
        DISC1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        DISC2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        TAXVAL: Serenity.DecimalEditor;
        DISC: Serenity.DecimalEditor;
        DISC3: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NET: Serenity.DecimalEditor;
        PKPRC: Serenity.DecimalEditor;
        DISC4: Serenity.DecimalEditor;
        DISC1R: Serenity.DecimalEditor;
        DISC2R: Serenity.DecimalEditor;
        DISC3R: Serenity.DecimalEditor;
        STAX_VL: Serenity.DecimalEditor;
        TAX1R: Serenity.DecimalEditor;
        TAX2R: Serenity.DecimalEditor;
        TAX3R: Serenity.DecimalEditor;
        RestoreQty: Serenity.DecimalEditor;
        ItemBAL: Serenity.DecimalEditor;
        HeaderID: Serenity.StringEditor;
        TR_TY: Serenity.LookupEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        LN_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateEditor;
        StoreID: Serenity.LookupEditor;
        Store_NAME: Serenity.StringEditor;
        TR_DS: Serenity.IntegerEditor;
        GRP: Serenity.IntegerEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        TR_DS_AR: Serenity.StringEditor;
        TR_DS_EN: Serenity.StringEditor;
        ItemBarCode: Serenity.StringEditor;
        PKName: Serenity.StringEditor;
        PKCST: Serenity.DecimalEditor;
        PKCSTVL: Serenity.DecimalEditor;
        FIFO: Serenity.DecimalEditor;
        FIFOVL: Serenity.DecimalEditor;
        LIFO: Serenity.DecimalEditor;
        LIFOVL: Serenity.DecimalEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        EXPENSE_CNT: Serenity.DecimalEditor;
        CurrencyID: Serenity.StringEditor;
        Currency_Name: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        DetailRemark: Serenity.DecimalEditor;
        BonusID: Serenity.IntegerEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        PStoreID: Serenity.StringEditor;
        CustomerPrice: Serenity.DecimalEditor;
        PriceID: Serenity.StringEditor;
        PriceLevelId: Serenity.StringEditor;
        CashBoxID: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_CD2: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        CST_CD: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_CD: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_CD: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        Recipient: Serenity.StringEditor;
        RecipientDate: Serenity.StringEditor;
        disc_cur_val: Serenity.DecimalEditor;
        tax_cur_val: Serenity.DecimalEditor;
        GLPOST: Serenity.BooleanEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class ReturnASTRDForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface ReturnASTRDRow {
        ID?: number;
        DetailID?: number;
        HeaderID?: number;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_NO?: number;
        LN_NO?: number;
        TR_DT?: string;
        StoreID?: string;
        Store_NAME?: string;
        TR_DS?: number;
        GRP?: number;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NO3?: string;
        TR_DS_AR?: string;
        TR_DS_EN?: string;
        ItemBAL?: number;
        Item_CD?: string;
        ItemBarCode?: string;
        PKID?: string;
        PKName?: string;
        PK?: number;
        QTY?: number;
        PKPRC?: number;
        Price?: number;
        Value?: number;
        PKCST?: number;
        PKCSTVL?: number;
        FIFO?: number;
        FIFOVL?: number;
        LIFO?: number;
        LIFOVL?: number;
        DISC?: number;
        DISC1?: number;
        DISC2?: number;
        DISC3?: number;
        DISC4?: number;
        DISC1R?: number;
        DISC2R?: number;
        DISC3R?: number;
        STAX_VL?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAXVAL?: number;
        TAX1R?: number;
        TAX2R?: number;
        TAX3R?: number;
        EXPENSEVL?: number;
        EXPENSE_CNT?: number;
        CurrencyID?: string;
        Currency_Name?: string;
        RATE?: number;
        CUR_VL?: number;
        DetailRemark?: number;
        BonusID?: number;
        ReturnQty?: number;
        RestoreQty?: number;
        PTR_NO?: number;
        PTR_TY?: number;
        PStoreID?: string;
        CustomerPrice?: number;
        PriceID?: string;
        PriceLevelId?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        ITM_NM_AR?: string;
        ACC_NAME2?: string;
        ACC_NAME3?: string;
        Recipient?: string;
        RecipientDate?: string;
        disc_cur_val?: number;
        tax_cur_val?: number;
        GLPOST?: boolean;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        NET?: number;
    }
    namespace ReturnASTRDRow {
        const idProperty = "ID";
        const nameProperty = "HeaderID";
        const localTextPrefix = "ALgorithm.ReturnASTRD";
        const lookupKey = "ALgorithm.ReturnASTRD";
        function getLookup(): Q.Lookup<ReturnASTRDRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            DetailID = "DetailID",
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TRTY_NAME = "TRTY_NAME",
            TR_NO = "TR_NO",
            LN_NO = "LN_NO",
            TR_DT = "TR_DT",
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            TR_DS = "TR_DS",
            GRP = "GRP",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NO3 = "ACC_NO3",
            TR_DS_AR = "TR_DS_AR",
            TR_DS_EN = "TR_DS_EN",
            ItemBAL = "ItemBAL",
            Item_CD = "Item_CD",
            ItemBarCode = "ItemBarCode",
            PKID = "PKID",
            PKName = "PKName",
            PK = "PK",
            QTY = "QTY",
            PKPRC = "PKPRC",
            Price = "Price",
            Value = "Value",
            PKCST = "PKCST",
            PKCSTVL = "PKCSTVL",
            FIFO = "FIFO",
            FIFOVL = "FIFOVL",
            LIFO = "LIFO",
            LIFOVL = "LIFOVL",
            DISC = "DISC",
            DISC1 = "DISC1",
            DISC2 = "DISC2",
            DISC3 = "DISC3",
            DISC4 = "DISC4",
            DISC1R = "DISC1R",
            DISC2R = "DISC2R",
            DISC3R = "DISC3R",
            STAX_VL = "STAX_VL",
            TAX1 = "TAX1",
            TAX2 = "TAX2",
            TAX3 = "TAX3",
            TAXVAL = "TAXVAL",
            TAX1R = "TAX1R",
            TAX2R = "TAX2R",
            TAX3R = "TAX3R",
            EXPENSEVL = "EXPENSEVL",
            EXPENSE_CNT = "EXPENSE_CNT",
            CurrencyID = "CurrencyID",
            Currency_Name = "Currency_Name",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            DetailRemark = "DetailRemark",
            BonusID = "BonusID",
            ReturnQty = "ReturnQty",
            RestoreQty = "RestoreQty",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            PStoreID = "PStoreID",
            CustomerPrice = "CustomerPrice",
            PriceID = "PriceID",
            PriceLevelId = "PriceLevelId",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            ITM_NM_AR = "ITM_NM_AR",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NAME3 = "ACC_NAME3",
            Recipient = "Recipient",
            RecipientDate = "RecipientDate",
            disc_cur_val = "disc_cur_val",
            tax_cur_val = "tax_cur_val",
            GLPOST = "GLPOST",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            NET = "NET"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace ReturnASTRDService {
        const baseUrl = "ALgorithm/ReturnASTRD";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReturnASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReturnASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "ALgorithm/ReturnASTRD/Retrieve",
            List = "ALgorithm/ReturnASTRD/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface ReturnSalesForm {
        TR_TY: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        CashBoxID: Serenity.LookupEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_DS: Serenity.IntegerEditor;
        TR_DT: Serenity.DateTimeEditor;
        DocTransNo: Serenity.StringEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        REP_CD: Serenity.LookupEditor;
        REP_CD2: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        CurrencyID: Serenity.LookupEditor;
        ReferenceNo: Serenity.IntegerEditor;
        PriceID: Serenity.LookupEditor;
        Balance: Serenity.DecimalEditor;
        Notes: Serenity.TextAreaEditor;
        HDSCR_AR: Serenity.StringEditor;
        SSUM_CD: Serenity.LookupEditor;
        Cash_NAME: Serenity.StringEditor;
        OrderNo: Serenity.StringEditor;
        SUM_CD: Serenity.LookupEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        TRTY_NAME: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        SupervisorId: Serenity.StringEditor;
        Supervisor_NAME: Serenity.StringEditor;
        PStoreID: Serenity.StringEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        HDSCR_EN: Serenity.StringEditor;
        Priceedit: Serenity.BooleanEditor;
        HDISC1: Serenity.DecimalEditor;
        HDISC2: Serenity.DecimalEditor;
        HDISC3: Serenity.DecimalEditor;
        HDISC4: Serenity.DecimalEditor;
        HDISC1R: Serenity.DecimalEditor;
        HDISC2R: Serenity.DecimalEditor;
        HDISC3R: Serenity.DecimalEditor;
        HTAX1: Serenity.DecimalEditor;
        HTAX2: Serenity.DecimalEditor;
        HTAX3: Serenity.DecimalEditor;
        HTAX4: Serenity.DecimalEditor;
        HTAX1R: Serenity.DecimalEditor;
        HTAX2R: Serenity.DecimalEditor;
        HTAX3R: Serenity.DecimalEditor;
        HdrAddtionsR: Serenity.DecimalEditor;
        PeriodCredit: Serenity.StringEditor;
        Periodterm: Serenity.IntegerEditor;
        InvStatus: Serenity.IntegerEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        PRT_CNT: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        DetailList: ReturnASTRDEditor;
        Total: Serenity.DecimalEditor;
        Paid: Serenity.DecimalEditor;
        HDISC: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        HTAX: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
    }
    class ReturnSalesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface ReturnSalesRow {
        HeaderID?: number;
        TR_TY?: number;
        TR_NO?: number;
        TR_DT?: string;
        TR_DS?: number;
        StoreID?: string;
        TRTY_NAME?: string;
        Store_NAME?: string;
        DocTransNo?: string;
        OrderNo?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        SupervisorId?: string;
        Supervisor_NAME?: string;
        PStoreID?: string;
        PTR_NO?: number;
        PTR_TY?: number;
        HDSCR_AR?: string;
        HDSCR_EN?: string;
        PriceID?: string;
        Priceedit?: boolean;
        ReferenceNo?: number;
        HDISC?: number;
        HDISC1?: number;
        HDISC2?: number;
        HDISC3?: number;
        HDISC4?: number;
        HDISC1R?: number;
        HDISC2R?: number;
        HDISC3R?: number;
        HTAX?: number;
        HTAX1?: number;
        HTAX2?: number;
        HTAX3?: number;
        HTAX4?: number;
        HTAX1R?: number;
        HTAX2R?: number;
        HTAX3R?: number;
        HAddtions?: number;
        HdrAddtionsR?: number;
        PeriodCredit?: string;
        EXPENSEVL?: number;
        Notes?: string;
        Paid?: number;
        Total?: number;
        NetTotal?: number;
        Balance?: number;
        Periodterm?: number;
        InvStatus?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        CUR_VL?: number;
        PRT_CNT?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        DetailList?: ReturnASTRDRow[];
    }
    namespace ReturnSalesRow {
        const idProperty = "HeaderID";
        const nameProperty = "StoreID";
        const localTextPrefix = "ALgorithm.ReturnSales";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            TR_DT = "TR_DT",
            TR_DS = "TR_DS",
            StoreID = "StoreID",
            TRTY_NAME = "TRTY_NAME",
            Store_NAME = "Store_NAME",
            DocTransNo = "DocTransNo",
            OrderNo = "OrderNo",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            SupervisorId = "SupervisorId",
            Supervisor_NAME = "Supervisor_NAME",
            PStoreID = "PStoreID",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            HDSCR_AR = "HDSCR_AR",
            HDSCR_EN = "HDSCR_EN",
            PriceID = "PriceID",
            Priceedit = "Priceedit",
            ReferenceNo = "ReferenceNo",
            HDISC = "HDISC",
            HDISC1 = "HDISC1",
            HDISC2 = "HDISC2",
            HDISC3 = "HDISC3",
            HDISC4 = "HDISC4",
            HDISC1R = "HDISC1R",
            HDISC2R = "HDISC2R",
            HDISC3R = "HDISC3R",
            HTAX = "HTAX",
            HTAX1 = "HTAX1",
            HTAX2 = "HTAX2",
            HTAX3 = "HTAX3",
            HTAX4 = "HTAX4",
            HTAX1R = "HTAX1R",
            HTAX2R = "HTAX2R",
            HTAX3R = "HTAX3R",
            HAddtions = "HAddtions",
            HdrAddtionsR = "HdrAddtionsR",
            PeriodCredit = "PeriodCredit",
            EXPENSEVL = "EXPENSEVL",
            Notes = "Notes",
            Paid = "Paid",
            Total = "Total",
            NetTotal = "NetTotal",
            Balance = "Balance",
            Periodterm = "Periodterm",
            InvStatus = "InvStatus",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            PRT_CNT = "PRT_CNT",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            DetailList = "DetailList"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace ReturnSalesService {
        const baseUrl = "ALgorithm/ReturnSales";
        function Create(request: Serenity.SaveRequest<ReturnSalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReturnSalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReturnSalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReturnSalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/ReturnSales/Create",
            Update = "ALgorithm/ReturnSales/Update",
            Delete = "ALgorithm/ReturnSales/Delete",
            GetNextNumber = "ALgorithm/ReturnSales/GetNextNumber",
            Retrieve = "ALgorithm/ReturnSales/Retrieve",
            List = "ALgorithm/ReturnSales/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface SSUMSForm {
        SSUM_CD: Serenity.StringEditor;
        SSUM_NM_AR: Serenity.StringEditor;
        SSUM_NM_EN: Serenity.StringEditor;
        MSSUM_CD: Serenity.StringEditor;
        SSUM_CST_CD: Serenity.LookupEditor;
        SSUM_CTG: Serenity.StringEditor;
        ST_DT: Serenity.DateEditor;
        FMLY: Serenity.StringEditor;
        GSSUM_CD: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        ADDRS: Serenity.StringEditor;
        SUM_CD: Serenity.LookupEditor;
        FDT: Serenity.DateEditor;
        TDT: Serenity.DateEditor;
        SSUM_CATG: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class SSUMSForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface SSUMSRow {
        ID?: number;
        SSUM_CD?: string;
        SSUM_NM_AR?: string;
        SSUM_NM_EN?: string;
        MSSUM_CD?: string;
        SSUM_CST_CD?: string;
        SSUM_CTG?: string;
        ST_DT?: string;
        FMLY?: string;
        GSSUM_CD?: string;
        Phone?: string;
        ADDRS?: string;
        SUM_CD?: string;
        FDT?: string;
        TDT?: string;
        SSUM_CATG?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }
    namespace SSUMSRow {
        const idProperty = "ID";
        const nameProperty = "SSUM_CD";
        const localTextPrefix = "ALgorithm.SSUMS";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            SSUM_CD = "SSUM_CD",
            SSUM_NM_AR = "SSUM_NM_AR",
            SSUM_NM_EN = "SSUM_NM_EN",
            MSSUM_CD = "MSSUM_CD",
            SSUM_CST_CD = "SSUM_CST_CD",
            SSUM_CTG = "SSUM_CTG",
            ST_DT = "ST_DT",
            FMLY = "FMLY",
            GSSUM_CD = "GSSUM_CD",
            Phone = "Phone",
            ADDRS = "ADDRS",
            SUM_CD = "SUM_CD",
            FDT = "FDT",
            TDT = "TDT",
            SSUM_CATG = "SSUM_CATG",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace SSUMSService {
        const baseUrl = "ALgorithm/SSUMS";
        function Create(request: Serenity.SaveRequest<SSUMSRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SSUMSRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SSUMSRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SSUMSRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/SSUMS/Create",
            Update = "ALgorithm/SSUMS/Update",
            Delete = "ALgorithm/SSUMS/Delete",
            GetNextNumber = "ALgorithm/SSUMS/GetNextNumber",
            Retrieve = "ALgorithm/SSUMS/Retrieve",
            List = "ALgorithm/SSUMS/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface SUMSForm {
        SUM_CD: Serenity.StringEditor;
        SUM_NM_AR: Serenity.StringEditor;
        SUM_NM_EN: Serenity.StringEditor;
        MSUM_CD: Serenity.StringEditor;
        SUM_CATG: Serenity.StringEditor;
        SSUM_CD: Serenity.LookupEditor;
        Phone: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        ADDRS: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
        ACC_NO: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class SUMSForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface SUMSRow {
        ID?: number;
        SUM_CD?: string;
        SUM_NM_AR?: string;
        SUM_NM_EN?: string;
        MSUM_CD?: string;
        SUM_CATG?: string;
        SSUM_CD?: string;
        Phone?: string;
        Mobile?: string;
        ADDRS?: string;
        RegionID?: string;
        ACC_NO?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }
    namespace SUMSRow {
        const idProperty = "ID";
        const nameProperty = "SUM_CD";
        const localTextPrefix = "ALgorithm.SUMS";
        const lookupKey = "ALgorithm.SUMS";
        function getLookup(): Q.Lookup<SUMSRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            SUM_CD = "SUM_CD",
            SUM_NM_AR = "SUM_NM_AR",
            SUM_NM_EN = "SUM_NM_EN",
            MSUM_CD = "MSUM_CD",
            SUM_CATG = "SUM_CATG",
            SSUM_CD = "SSUM_CD",
            Phone = "Phone",
            Mobile = "Mobile",
            ADDRS = "ADDRS",
            RegionID = "RegionID",
            ACC_NO = "ACC_NO",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace SUMSService {
        const baseUrl = "ALgorithm/SUMS";
        function Create(request: Serenity.SaveRequest<SUMSRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SUMSRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SUMSRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SUMSRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/SUMS/Create",
            Update = "ALgorithm/SUMS/Update",
            Delete = "ALgorithm/SUMS/Delete",
            GetNextNumber = "ALgorithm/SUMS/GetNextNumber",
            Retrieve = "ALgorithm/SUMS/Retrieve",
            List = "ALgorithm/SUMS/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface SalesASTRDForm {
        ID: Serenity.StringEditor;
        DetailID: Serenity.StringEditor;
        PKID: Serenity.LookupEditor;
        PK: Serenity.DecimalEditor;
        Item_CD: Serenity.StringEditor;
        ITM_NM_AR: Serenity.StringEditor;
        QTY: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        Value: Serenity.DecimalEditor;
        TAX1: Serenity.DecimalEditor;
        DISC1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        DISC2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        TAXVAL: Serenity.DecimalEditor;
        DISC: Serenity.DecimalEditor;
        DISC3: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NET: Serenity.DecimalEditor;
        PKPRC: Serenity.DecimalEditor;
        DISC4: Serenity.DecimalEditor;
        DISC1R: Serenity.DecimalEditor;
        DISC2R: Serenity.DecimalEditor;
        DISC3R: Serenity.DecimalEditor;
        STAX_VL: Serenity.DecimalEditor;
        TAX1R: Serenity.DecimalEditor;
        TAX2R: Serenity.DecimalEditor;
        TAX3R: Serenity.DecimalEditor;
        ReturnQty: Serenity.DecimalEditor;
        RestoreQty: Serenity.DecimalEditor;
        ItemBAL: Serenity.DecimalEditor;
        HeaderID: Serenity.StringEditor;
        TR_TY: Serenity.LookupEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        LN_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateEditor;
        StoreID: Serenity.LookupEditor;
        Store_NAME: Serenity.StringEditor;
        TR_DS: Serenity.IntegerEditor;
        GRP: Serenity.IntegerEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        TR_DS_AR: Serenity.StringEditor;
        TR_DS_EN: Serenity.StringEditor;
        ItemBarCode: Serenity.StringEditor;
        PKName: Serenity.StringEditor;
        PKCST: Serenity.DecimalEditor;
        PKCSTVL: Serenity.DecimalEditor;
        FIFO: Serenity.DecimalEditor;
        FIFOVL: Serenity.DecimalEditor;
        LIFO: Serenity.DecimalEditor;
        LIFOVL: Serenity.DecimalEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        EXPENSE_CNT: Serenity.DecimalEditor;
        CurrencyID: Serenity.StringEditor;
        Currency_Name: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        DetailRemark: Serenity.DecimalEditor;
        BonusID: Serenity.IntegerEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        PStoreID: Serenity.StringEditor;
        CustomerPrice: Serenity.DecimalEditor;
        PriceID: Serenity.StringEditor;
        PriceLevelId: Serenity.StringEditor;
        CashBoxID: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_CD2: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        CST_CD: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_CD: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_CD: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        Recipient: Serenity.StringEditor;
        RecipientDate: Serenity.StringEditor;
        disc_cur_val: Serenity.DecimalEditor;
        tax_cur_val: Serenity.DecimalEditor;
        GLPOST: Serenity.BooleanEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class SalesASTRDForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface SalesASTRDRow {
        ID?: number;
        DetailID?: number;
        HeaderID?: number;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_NO?: number;
        LN_NO?: number;
        TR_DT?: string;
        StoreID?: string;
        Store_NAME?: string;
        TR_DS?: number;
        GRP?: number;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NO3?: string;
        TR_DS_AR?: string;
        TR_DS_EN?: string;
        ItemBAL?: number;
        Item_CD?: string;
        ItemBarCode?: string;
        PKID?: string;
        PKName?: string;
        PK?: number;
        QTY?: number;
        PKPRC?: number;
        Price?: number;
        Value?: number;
        PKCST?: number;
        PKCSTVL?: number;
        FIFO?: number;
        FIFOVL?: number;
        LIFO?: number;
        LIFOVL?: number;
        DISC?: number;
        DISC1?: number;
        DISC2?: number;
        DISC3?: number;
        DISC4?: number;
        DISC1R?: number;
        DISC2R?: number;
        DISC3R?: number;
        STAX_VL?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAXVAL?: number;
        TAX1R?: number;
        TAX2R?: number;
        TAX3R?: number;
        EXPENSEVL?: number;
        EXPENSE_CNT?: number;
        CurrencyID?: string;
        Currency_Name?: string;
        RATE?: number;
        CUR_VL?: number;
        DetailRemark?: number;
        BonusID?: number;
        ReturnQty?: number;
        RestoreQty?: number;
        PTR_NO?: number;
        PTR_TY?: number;
        PStoreID?: string;
        CustomerPrice?: number;
        PriceID?: string;
        PriceLevelId?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        ITM_NM_AR?: string;
        ACC_NAME2?: string;
        ACC_NAME3?: string;
        Recipient?: string;
        RecipientDate?: string;
        disc_cur_val?: number;
        tax_cur_val?: number;
        GLPOST?: boolean;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        NET?: number;
    }
    namespace SalesASTRDRow {
        const idProperty = "ID";
        const nameProperty = "HeaderID";
        const localTextPrefix = "ALgorithm.SalesASTRD";
        const lookupKey = "ALgorithm.SalesASTRD";
        function getLookup(): Q.Lookup<SalesASTRDRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            DetailID = "DetailID",
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TRTY_NAME = "TRTY_NAME",
            TR_NO = "TR_NO",
            LN_NO = "LN_NO",
            TR_DT = "TR_DT",
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            TR_DS = "TR_DS",
            GRP = "GRP",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NO3 = "ACC_NO3",
            TR_DS_AR = "TR_DS_AR",
            TR_DS_EN = "TR_DS_EN",
            ItemBAL = "ItemBAL",
            Item_CD = "Item_CD",
            ItemBarCode = "ItemBarCode",
            PKID = "PKID",
            PKName = "PKName",
            PK = "PK",
            QTY = "QTY",
            PKPRC = "PKPRC",
            Price = "Price",
            Value = "Value",
            PKCST = "PKCST",
            PKCSTVL = "PKCSTVL",
            FIFO = "FIFO",
            FIFOVL = "FIFOVL",
            LIFO = "LIFO",
            LIFOVL = "LIFOVL",
            DISC = "DISC",
            DISC1 = "DISC1",
            DISC2 = "DISC2",
            DISC3 = "DISC3",
            DISC4 = "DISC4",
            DISC1R = "DISC1R",
            DISC2R = "DISC2R",
            DISC3R = "DISC3R",
            STAX_VL = "STAX_VL",
            TAX1 = "TAX1",
            TAX2 = "TAX2",
            TAX3 = "TAX3",
            TAXVAL = "TAXVAL",
            TAX1R = "TAX1R",
            TAX2R = "TAX2R",
            TAX3R = "TAX3R",
            EXPENSEVL = "EXPENSEVL",
            EXPENSE_CNT = "EXPENSE_CNT",
            CurrencyID = "CurrencyID",
            Currency_Name = "Currency_Name",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            DetailRemark = "DetailRemark",
            BonusID = "BonusID",
            ReturnQty = "ReturnQty",
            RestoreQty = "RestoreQty",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            PStoreID = "PStoreID",
            CustomerPrice = "CustomerPrice",
            PriceID = "PriceID",
            PriceLevelId = "PriceLevelId",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            ITM_NM_AR = "ITM_NM_AR",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NAME3 = "ACC_NAME3",
            Recipient = "Recipient",
            RecipientDate = "RecipientDate",
            disc_cur_val = "disc_cur_val",
            tax_cur_val = "tax_cur_val",
            GLPOST = "GLPOST",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            NET = "NET"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace SalesASTRDService {
        const baseUrl = "ALgorithm/SalesASTRD";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "ALgorithm/SalesASTRD/Retrieve",
            List = "ALgorithm/SalesASTRD/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface SalesForm {
        TR_TY: Serenity.LookupEditor;
        StoreID: Serenity.LookupEditor;
        CashBoxID: Serenity.LookupEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_DT: Serenity.DateTimeEditor;
        TR_DS: Serenity.IntegerEditor;
        DocTransNo: Serenity.StringEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        REP_CD: Serenity.LookupEditor;
        REP_CD2: Serenity.LookupEditor;
        CST_CD: Serenity.LookupEditor;
        CurrencyID: Serenity.LookupEditor;
        PriceID: Serenity.LookupEditor;
        Balance: Serenity.DecimalEditor;
        Notes: Serenity.TextAreaEditor;
        HDSCR_AR: Serenity.StringEditor;
        SSUM_CD: Serenity.LookupEditor;
        Cash_NAME: Serenity.StringEditor;
        OrderNo: Serenity.StringEditor;
        SUM_CD: Serenity.LookupEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        TRTY_NAME: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        SupervisorId: Serenity.StringEditor;
        Supervisor_NAME: Serenity.StringEditor;
        PStoreID: Serenity.StringEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        HDSCR_EN: Serenity.StringEditor;
        Priceedit: Serenity.BooleanEditor;
        ReferenceNo: Serenity.IntegerEditor;
        HDISC1: Serenity.DecimalEditor;
        HDISC2: Serenity.DecimalEditor;
        HDISC3: Serenity.DecimalEditor;
        HDISC4: Serenity.DecimalEditor;
        HDISC1R: Serenity.DecimalEditor;
        HDISC2R: Serenity.DecimalEditor;
        HDISC3R: Serenity.DecimalEditor;
        HTAX1: Serenity.DecimalEditor;
        HTAX2: Serenity.DecimalEditor;
        HTAX3: Serenity.DecimalEditor;
        HTAX4: Serenity.DecimalEditor;
        HTAX1R: Serenity.DecimalEditor;
        HTAX2R: Serenity.DecimalEditor;
        HTAX3R: Serenity.DecimalEditor;
        HdrAddtionsR: Serenity.DecimalEditor;
        PeriodCredit: Serenity.StringEditor;
        Periodterm: Serenity.IntegerEditor;
        InvStatus: Serenity.IntegerEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        PRT_CNT: Serenity.IntegerEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        DetailList: SalesASTRDEditor;
        Total: Serenity.DecimalEditor;
        Paid: Serenity.DecimalEditor;
        HDISC: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        HTAX: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
    }
    class SalesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface SalesRow {
        HeaderID?: number;
        TR_TY?: number;
        TR_NO?: number;
        TR_DT?: string;
        TR_DS?: number;
        StoreID?: string;
        TRTY_NAME?: string;
        Store_NAME?: string;
        DocTransNo?: string;
        OrderNo?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        SupervisorId?: string;
        Supervisor_NAME?: string;
        PStoreID?: string;
        PTR_NO?: number;
        PTR_TY?: number;
        HDSCR_AR?: string;
        HDSCR_EN?: string;
        PriceID?: string;
        Priceedit?: boolean;
        ReferenceNo?: number;
        HDISC?: number;
        HDISC1?: number;
        HDISC2?: number;
        HDISC3?: number;
        HDISC4?: number;
        HDISC1R?: number;
        HDISC2R?: number;
        HDISC3R?: number;
        HTAX?: number;
        HTAX1?: number;
        HTAX2?: number;
        HTAX3?: number;
        HTAX4?: number;
        HTAX1R?: number;
        HTAX2R?: number;
        HTAX3R?: number;
        HAddtions?: number;
        HdrAddtionsR?: number;
        PeriodCredit?: string;
        EXPENSEVL?: number;
        Notes?: string;
        Paid?: number;
        Total?: number;
        NetTotal?: number;
        Balance?: number;
        Periodterm?: number;
        InvStatus?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        CUR_VL?: number;
        PRT_CNT?: number;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        DetailList?: SalesASTRDRow[];
    }
    namespace SalesRow {
        const idProperty = "HeaderID";
        const nameProperty = "StoreID";
        const localTextPrefix = "ALgorithm.Sales";
        const lookupKey = "ALgorithm.Sales";
        function getLookup(): Q.Lookup<SalesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            TR_DT = "TR_DT",
            TR_DS = "TR_DS",
            StoreID = "StoreID",
            TRTY_NAME = "TRTY_NAME",
            Store_NAME = "Store_NAME",
            DocTransNo = "DocTransNo",
            OrderNo = "OrderNo",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            SupervisorId = "SupervisorId",
            Supervisor_NAME = "Supervisor_NAME",
            PStoreID = "PStoreID",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            HDSCR_AR = "HDSCR_AR",
            HDSCR_EN = "HDSCR_EN",
            PriceID = "PriceID",
            Priceedit = "Priceedit",
            ReferenceNo = "ReferenceNo",
            HDISC = "HDISC",
            HDISC1 = "HDISC1",
            HDISC2 = "HDISC2",
            HDISC3 = "HDISC3",
            HDISC4 = "HDISC4",
            HDISC1R = "HDISC1R",
            HDISC2R = "HDISC2R",
            HDISC3R = "HDISC3R",
            HTAX = "HTAX",
            HTAX1 = "HTAX1",
            HTAX2 = "HTAX2",
            HTAX3 = "HTAX3",
            HTAX4 = "HTAX4",
            HTAX1R = "HTAX1R",
            HTAX2R = "HTAX2R",
            HTAX3R = "HTAX3R",
            HAddtions = "HAddtions",
            HdrAddtionsR = "HdrAddtionsR",
            PeriodCredit = "PeriodCredit",
            EXPENSEVL = "EXPENSEVL",
            Notes = "Notes",
            Paid = "Paid",
            Total = "Total",
            NetTotal = "NetTotal",
            Balance = "Balance",
            Periodterm = "Periodterm",
            InvStatus = "InvStatus",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            PRT_CNT = "PRT_CNT",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            NetBeforeTAX = "NetBeforeTAX",
            NetAfterTAX = "NetAfterTAX",
            DetailList = "DetailList"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace SalesService {
        const baseUrl = "ALgorithm/Sales";
        function Create(request: Serenity.SaveRequest<SalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/Sales/Create",
            Update = "ALgorithm/Sales/Update",
            Delete = "ALgorithm/Sales/Delete",
            GetNextNumber = "ALgorithm/Sales/GetNextNumber",
            Retrieve = "ALgorithm/Sales/Retrieve",
            List = "ALgorithm/Sales/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface StoresForm {
        StoreID: Serenity.StringEditor;
        Store_Name_AR: Serenity.StringEditor;
        Store_Name_EN: Serenity.StringEditor;
        BranchID: Serenity.IntegerEditor;
        ADDRS: Serenity.StringEditor;
        GLACCID: Serenity.IntegerEditor;
        GLCSTID: Serenity.IntegerEditor;
        CST_CD: Serenity.LookupEditor;
        SUM_CD: Serenity.LookupEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class StoresForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface StoresRow {
        ID?: number;
        StoreID?: string;
        Store_Name_AR?: string;
        Store_Name_EN?: string;
        BranchID?: number;
        ADDRS?: string;
        GLACCID?: number;
        GLCSTID?: number;
        CST_CD?: string;
        SUM_CD?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace StoresRow {
        const idProperty = "ID";
        const nameProperty = "StoreID";
        const localTextPrefix = "ALgorithm.Stores";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            StoreID = "StoreID",
            Store_Name_AR = "Store_Name_AR",
            Store_Name_EN = "Store_Name_EN",
            BranchID = "BranchID",
            ADDRS = "ADDRS",
            GLACCID = "GLACCID",
            GLCSTID = "GLCSTID",
            CST_CD = "CST_CD",
            SUM_CD = "SUM_CD",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace StoresService {
        const baseUrl = "ALgorithm/Stores";
        function Create(request: Serenity.SaveRequest<StoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/Stores/Create",
            Update = "ALgorithm/Stores/Update",
            Delete = "ALgorithm/Stores/Delete",
            GetNextNumber = "ALgorithm/Stores/GetNextNumber",
            Retrieve = "ALgorithm/Stores/Retrieve",
            List = "ALgorithm/Stores/List"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
}
declare namespace ALgorithmPro.ALgorithm {
    interface SupervisorsForm {
        SupervisorID: Serenity.StringEditor;
        Name_AR: Serenity.StringEditor;
        Name_EN: Serenity.StringEditor;
        Status: Serenity.EnumEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class SupervisorsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    interface SupervisorsRow {
        ID?: number;
        SupervisorID?: string;
        Name_AR?: string;
        Name_EN?: string;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        UpdatedBy?: string;
        EntryDate?: string;
        UpdateDate?: string;
    }
    namespace SupervisorsRow {
        const idProperty = "ID";
        const nameProperty = "SupervisorID";
        const localTextPrefix = "ALgorithm.Supervisors";
        const lookupKey = "ALgorithm.Supervisors";
        function getLookup(): Q.Lookup<SupervisorsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            SupervisorID = "SupervisorID",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN",
            Status = "Status",
            EnteredBy = "EnteredBy",
            UpdatedBy = "UpdatedBy",
            EntryDate = "EntryDate",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.ALgorithm {
    namespace SupervisorsService {
        const baseUrl = "ALgorithm/Supervisors";
        function Create(request: Serenity.SaveRequest<SupervisorsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupervisorsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupervisorsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupervisorsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ALgorithm/Supervisors/Create",
            Update = "ALgorithm/Supervisors/Update",
            Delete = "ALgorithm/Supervisors/Delete",
            GetNextNumber = "ALgorithm/Supervisors/GetNextNumber",
            Retrieve = "ALgorithm/Supervisors/Retrieve",
            List = "ALgorithm/Supervisors/List"
        }
    }
}
declare namespace ALgorithmsys {
    enum Months {
        January = 0,
        February = 1,
        March = 2,
        April = 3,
        May = 4,
        June = 5,
        July = 6,
        August = 7,
        September = 8,
        October = 9,
        November = 10,
        December = 11
    }
}
declare namespace ALgorithmsys {
    enum TimeUoM {
        Hour = 1,
        Day = 2,
        Week = 3,
        Month = 4,
        CalenderMonth = 5,
        Year = 6
    }
}
declare namespace AS {
    interface EntityReportRequest extends Serenity.RetrieveRequest {
        ReportKey?: string;
        ReportServiceMethodName?: string;
        ReportDesignPath?: string;
    }
}
declare namespace AS {
    interface ListReportRequest extends Serenity.ListRequest {
        ReportKey?: string;
        ReportServiceMethodName?: string;
        ListExcelServiceMethodName?: string;
        ReportDesignPath?: string;
        EqualityFilterWithTextValue?: {
            [key: string]: string;
        };
        CustomParameters?: {
            [key: string]: any;
        };
    }
}
declare namespace AS {
    enum Months {
        January = 0,
        February = 1,
        March = 2,
        April = 3,
        May = 4,
        June = 5,
        July = 6,
        August = 7,
        September = 8,
        October = 9,
        November = 10,
        December = 11
    }
}
declare namespace AS {
    enum TimeUoM {
        Hour = 1,
        Day = 2,
        Week = 3,
        Month = 4,
        CalenderMonth = 5,
        Year = 6
    }
}
declare namespace ALgorithmPro {
}
declare namespace ALgorithmPro {
    interface ASTRDVIEWForm {
        HeaderID: Serenity.StringEditor;
        StoreID: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_TY: Serenity.IntegerEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_DT: Serenity.DateEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        LN_NO: Serenity.IntegerEditor;
        Item_CD: Serenity.StringEditor;
        Item_Name_AR: Serenity.StringEditor;
        PKID: Serenity.StringEditor;
        QTY: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
        Value: Serenity.DecimalEditor;
        DISC1: Serenity.DecimalEditor;
        DISC2: Serenity.DecimalEditor;
        DISC3: Serenity.DecimalEditor;
        NetBeforeTAX: Serenity.DecimalEditor;
        TAX1: Serenity.DecimalEditor;
        TAX2: Serenity.DecimalEditor;
        TAX3: Serenity.DecimalEditor;
        NetAfterTAX: Serenity.DecimalEditor;
        NET: Serenity.DecimalEditor;
        ItemBAL: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        ReferenNumer: Serenity.IntegerEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        ACC_NO3: Serenity.StringEditor;
        ACC_NAME3: Serenity.StringEditor;
        HDSCR_AR: Serenity.StringEditor;
        TR_DS_AR: Serenity.StringEditor;
        SupervisorID: Serenity.StringEditor;
        Supervisor_NAME: Serenity.StringEditor;
        TR_DS_EN: Serenity.StringEditor;
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_CD2: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        CST_CD: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_CD: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_CD: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        PStoreID: Serenity.StringEditor;
        PTR_NO: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        Priceedit: Serenity.BooleanEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        HdrAddtionsR: Serenity.DecimalEditor;
        CurrencyID: Serenity.StringEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        ItemBarCode: Serenity.StringEditor;
        ITM_NM_AR: Serenity.StringEditor;
        PKName: Serenity.StringEditor;
        PK: Serenity.DecimalEditor;
        PKPRC: Serenity.DecimalEditor;
        PKCST: Serenity.DecimalEditor;
        DISC4: Serenity.DecimalEditor;
        DISCVAL: Serenity.DecimalEditor;
        TAXVAL: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        CostValue: Serenity.DecimalEditor;
        FIFOVL: Serenity.DecimalEditor;
        LIFOVL: Serenity.DecimalEditor;
        PriceID: Serenity.StringEditor;
        PriceName: Serenity.StringEditor;
        ValueAfterTAX: Serenity.DecimalEditor;
        RestoreQty: Serenity.DecimalEditor;
        ReturnQty: Serenity.DecimalEditor;
        GRP: Serenity.IntegerEditor;
        Phone1: Serenity.StringEditor;
        Phone2: Serenity.StringEditor;
        Phone3: Serenity.StringEditor;
        ADDRS1: Serenity.StringEditor;
        ADDRS2: Serenity.StringEditor;
        MOBIL1: Serenity.StringEditor;
        MOBIL2: Serenity.StringEditor;
        REC_ID: Serenity.IntegerEditor;
        HDISC1R: Serenity.DecimalEditor;
        HDISC2R: Serenity.DecimalEditor;
        HDISC3R: Serenity.DecimalEditor;
        SHDISCR: Serenity.DecimalEditor;
        DISC1R: Serenity.DecimalEditor;
        DISC2R: Serenity.DecimalEditor;
        DISC3R: Serenity.DecimalEditor;
        SDISCR: Serenity.DecimalEditor;
        TAX1R: Serenity.DecimalEditor;
        TAX2R: Serenity.DecimalEditor;
        TAX3R: Serenity.DecimalEditor;
        STAXR: Serenity.DecimalEditor;
        CUR_VL: Serenity.DecimalEditor;
        DISC_CUR_VAL: Serenity.DecimalEditor;
        TAX_CUR_VAL: Serenity.DecimalEditor;
        ACCBAL_CUR_VL: Serenity.DecimalEditor;
        SPRC6: Serenity.DecimalEditor;
        SPRC5: Serenity.DecimalEditor;
        SPRC4: Serenity.DecimalEditor;
        SPRC3: Serenity.DecimalEditor;
        SPRC2: Serenity.DecimalEditor;
        UCST: Serenity.DecimalEditor;
        Status: Serenity.IntegerEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class ASTRDVIEWForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro {
    interface ASTRDVIEWRow {
        HeaderID?: number;
        TR_NO?: number;
        TR_TY?: number;
        TR_DT?: string;
        TRTY_NAME?: string;
        StoreID?: string;
        Store_NAME?: string;
        ReferenNumer?: number;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        HDSCR_AR?: string;
        TR_DS_AR?: string;
        SupervisorID?: string;
        Supervisor_NAME?: string;
        TR_DS_EN?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        PStoreID?: string;
        PTR_NO?: number;
        PTR_TY?: number;
        Priceedit?: boolean;
        EXPENSEVL?: number;
        HAddtions?: number;
        HdrAddtionsR?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        LN_NO?: number;
        Item_CD?: string;
        Item_Name_AR?: string;
        ItemBarCode?: string;
        ITM_NM_AR?: string;
        PKID?: string;
        PKName?: string;
        PK?: number;
        ItemBAL?: number;
        QTY?: number;
        Price?: number;
        PKPRC?: number;
        PKCST?: number;
        Value?: number;
        Total?: number;
        DISC1?: number;
        DISC2?: number;
        DISC3?: number;
        DISC4?: number;
        DISCVAL?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAXVAL?: number;
        NET?: number;
        NetTotal?: number;
        CostValue?: number;
        FIFOVL?: number;
        LIFOVL?: number;
        PriceID?: string;
        PriceName?: string;
        ValueAfterTAX?: number;
        RestoreQty?: number;
        ReturnQty?: number;
        GRP?: number;
        Phone1?: string;
        Phone2?: string;
        Phone3?: string;
        ADDRS1?: string;
        ADDRS2?: string;
        MOBIL1?: string;
        MOBIL2?: string;
        REC_ID?: number;
        HDISC1R?: number;
        HDISC2R?: number;
        HDISC3R?: number;
        SHDISCR?: number;
        DISC1R?: number;
        DISC2R?: number;
        DISC3R?: number;
        SDISCR?: number;
        NetBeforeTAX?: number;
        TAX1R?: number;
        TAX2R?: number;
        TAX3R?: number;
        STAXR?: number;
        NetAfterTAX?: number;
        CUR_VL?: number;
        DISC_CUR_VAL?: number;
        TAX_CUR_VAL?: number;
        ACCBAL_CUR_VL?: number;
        SPRC6?: number;
        SPRC5?: number;
        SPRC4?: number;
        SPRC3?: number;
        SPRC2?: number;
        UCST?: number;
        Status?: number;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace ASTRDVIEWRow {
        const idProperty = "HeaderID";
        const nameProperty = "StoreID";
        const localTextPrefix = "Model.ASTRDVIEW";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            HeaderID = "HeaderID",
            TR_NO = "TR_NO",
            TR_TY = "TR_TY",
            TR_DT = "TR_DT",
            TRTY_NAME = "TRTY_NAME",
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            ReferenNumer = "ReferenNumer",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            HDSCR_AR = "HDSCR_AR",
            TR_DS_AR = "TR_DS_AR",
            SupervisorID = "SupervisorID",
            Supervisor_NAME = "Supervisor_NAME",
            TR_DS_EN = "TR_DS_EN",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            PStoreID = "PStoreID",
            PTR_NO = "PTR_NO",
            PTR_TY = "PTR_TY",
            Priceedit = "Priceedit",
            EXPENSEVL = "EXPENSEVL",
            HAddtions = "HAddtions",
            HdrAddtionsR = "HdrAddtionsR",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            LN_NO = "LN_NO",
            Item_CD = "Item_CD",
            Item_Name_AR = "Item_Name_AR",
            ItemBarCode = "ItemBarCode",
            ITM_NM_AR = "ITM_NM_AR",
            PKID = "PKID",
            PKName = "PKName",
            PK = "PK",
            ItemBAL = "ItemBAL",
            QTY = "QTY",
            Price = "Price",
            PKPRC = "PKPRC",
            PKCST = "PKCST",
            Value = "Value",
            Total = "Total",
            DISC1 = "DISC1",
            DISC2 = "DISC2",
            DISC3 = "DISC3",
            DISC4 = "DISC4",
            DISCVAL = "DISCVAL",
            TAX1 = "TAX1",
            TAX2 = "TAX2",
            TAX3 = "TAX3",
            TAXVAL = "TAXVAL",
            NET = "NET",
            NetTotal = "NetTotal",
            CostValue = "CostValue",
            FIFOVL = "FIFOVL",
            LIFOVL = "LIFOVL",
            PriceID = "PriceID",
            PriceName = "PriceName",
            ValueAfterTAX = "ValueAfterTAX",
            RestoreQty = "RestoreQty",
            ReturnQty = "ReturnQty",
            GRP = "GRP",
            Phone1 = "Phone1",
            Phone2 = "Phone2",
            Phone3 = "Phone3",
            ADDRS1 = "ADDRS1",
            ADDRS2 = "ADDRS2",
            MOBIL1 = "MOBIL1",
            MOBIL2 = "MOBIL2",
            REC_ID = "REC_ID",
            HDISC1R = "HDISC1R",
            HDISC2R = "HDISC2R",
            HDISC3R = "HDISC3R",
            SHDISCR = "SHDISCR",
            DISC1R = "DISC1R",
            DISC2R = "DISC2R",
            DISC3R = "DISC3R",
            SDISCR = "SDISCR",
            NetBeforeTAX = "NetBeforeTAX",
            TAX1R = "TAX1R",
            TAX2R = "TAX2R",
            TAX3R = "TAX3R",
            STAXR = "STAXR",
            NetAfterTAX = "NetAfterTAX",
            CUR_VL = "CUR_VL",
            DISC_CUR_VAL = "DISC_CUR_VAL",
            TAX_CUR_VAL = "TAX_CUR_VAL",
            ACCBAL_CUR_VL = "ACCBAL_CUR_VL",
            SPRC6 = "SPRC6",
            SPRC5 = "SPRC5",
            SPRC4 = "SPRC4",
            SPRC3 = "SPRC3",
            SPRC2 = "SPRC2",
            UCST = "UCST",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro {
    namespace ASTRDVIEWService {
        const baseUrl = "Model/ASTRDVIEW";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ASTRDVIEWRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Model/ASTRDVIEW/List"
        }
    }
}
declare namespace ALgorithmPro.Administration {
}
declare namespace ALgorithmPro.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace ALgorithmPro.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace ALgorithmPro.Administration {
}
declare namespace ALgorithmPro.Administration {
}
declare namespace ALgorithmPro.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace ALgorithmPro.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace ALgorithmPro.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace ALgorithmPro.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace ALgorithmPro.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace ALgorithmPro.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace ALgorithmPro.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace ALgorithmPro.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace ALgorithmPro.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace ALgorithmPro.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace ALgorithmPro.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace ALgorithmPro.Administration {
}
declare namespace ALgorithmPro.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace ALgorithmPro.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace ALgorithmPro.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace ALgorithmPro.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace ALgorithmPro.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace ALgorithmPro.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace ALgorithmPro.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace ALgorithmPro.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace ALgorithmPro.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace ALgorithmPro.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace ALgorithmPro.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace ALgorithmPro.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace ALgorithmPro.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace ALgorithmPro.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace ALgorithmPro.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace ALgorithmPro {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace ALgorithmPro {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace ALgorithmPro {
    interface GetItemBALRequest extends Serenity.ServiceRequest {
        StoreID?: string;
        Item_CD?: string;
    }
}
declare namespace ALgorithmPro {
    interface GetItemBALResponse extends Serenity.ServiceRequest {
        ItemBAL?: number;
    }
}
declare namespace ALgorithmPro {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
        StoreID?: string;
        TR_TY?: number;
    }
}
declare namespace ALgorithmPro {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: string;
        Serial?: string;
    }
}
declare namespace ALgorithmPro.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace ALgorithmPro.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace ALgorithmPro.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace ALgorithmPro.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace ALgorithmPro.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace ALgorithmPro.Model {
    interface ACCTRDRow {
        ID?: number;
        HeaderID?: number;
        TR_TY?: number;
        TR_NO?: number;
        StoreID?: string;
        TR_DT?: string;
        LN_NO?: number;
        TRTY_NAME?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        TR_DS?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        CUR_VL?: number;
        RATE?: number;
        CUR_DB_VL?: number;
        CUR_CR_VL?: number;
        Store_NAME?: string;
        GLHeaderID?: number;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        TR_DS_AR?: string;
        TR_DS_EN?: string;
        Flag?: number;
        GRP?: number;
        EXPENSVL?: number;
        TotalValue?: number;
        NetTotal?: number;
        DB?: number;
        CR?: number;
        BAL?: number;
        ACC_CUR_BAL?: number;
        SupervisorID?: string;
        Supervisor_NAME?: string;
        ExpensesID?: string;
        ExpensesName?: string;
        CHK_NO?: string;
        CHK_TYP?: number;
        CHKTYP_NAME?: string;
        CHKTRTY?: number;
        CHKTRTY_NAME?: string;
        ISU_DT?: string;
        DUE_DT?: string;
        AMT?: number;
        AMT_PAID?: number;
        CHK_EXPENSVL?: number;
        CHK_TotalValue?: number;
        BNKID?: string;
        BNK_NAME?: string;
        CBNKID?: string;
        CBNK_NAME?: string;
        RPACC_ACCNO?: string;
        RPACC_NAME?: string;
        DEPT_BNKID?: string;
        DEPT_BNKNAME?: string;
        Notes_ACCNO?: string;
        Notes_ACCNAME?: string;
        Endorsed_ACCNO?: string;
        Endorsed_NAME?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        CloseStatus?: number;
        GlPosted?: boolean;
        GLTR_NO?: number;
        GLPOST?: number;
        CreditLimt?: number;
        Status?: number;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace ACCTRDRow {
        const idProperty = "ID";
        const nameProperty = "HeaderID";
        const localTextPrefix = "Model.ACCTRD";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            StoreID = "StoreID",
            TR_DT = "TR_DT",
            LN_NO = "LN_NO",
            TRTY_NAME = "TRTY_NAME",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            TR_DS = "TR_DS",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            CUR_VL = "CUR_VL",
            RATE = "RATE",
            CUR_DB_VL = "CUR_DB_VL",
            CUR_CR_VL = "CUR_CR_VL",
            Store_NAME = "Store_NAME",
            GLHeaderID = "GLHeaderID",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            TR_DS_AR = "TR_DS_AR",
            TR_DS_EN = "TR_DS_EN",
            Flag = "Flag",
            GRP = "GRP",
            EXPENSVL = "EXPENSVL",
            TotalValue = "TotalValue",
            NetTotal = "NetTotal",
            DB = "DB",
            CR = "CR",
            BAL = "BAL",
            ACC_CUR_BAL = "ACC_CUR_BAL",
            SupervisorID = "SupervisorID",
            Supervisor_NAME = "Supervisor_NAME",
            ExpensesID = "ExpensesID",
            ExpensesName = "ExpensesName",
            CHK_NO = "CHK_NO",
            CHK_TYP = "CHK_TYP",
            CHKTYP_NAME = "CHKTYP_NAME",
            CHKTRTY = "CHKTRTY",
            CHKTRTY_NAME = "CHKTRTY_NAME",
            ISU_DT = "ISU_DT",
            DUE_DT = "DUE_DT",
            AMT = "AMT",
            AMT_PAID = "AMT_PAID",
            CHK_EXPENSVL = "CHK_EXPENSVL",
            CHK_TotalValue = "CHK_TotalValue",
            BNKID = "BNKID",
            BNK_NAME = "BNK_NAME",
            CBNKID = "CBNKID",
            CBNK_NAME = "CBNK_NAME",
            RPACC_ACCNO = "RPACC_ACCNO",
            RPACC_NAME = "RPACC_NAME",
            DEPT_BNKID = "DEPT_BNKID",
            DEPT_BNKNAME = "DEPT_BNKNAME",
            Notes_ACCNO = "Notes_ACCNO",
            Notes_ACCNAME = "Notes_ACCNAME",
            Endorsed_ACCNO = "Endorsed_ACCNO",
            Endorsed_NAME = "Endorsed_NAME",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            CloseStatus = "CloseStatus",
            GlPosted = "GlPosted",
            GLTR_NO = "GLTR_NO",
            GLPOST = "GLPOST",
            CreditLimt = "CreditLimt",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.Model {
    interface ACCTRHRow {
        ASTRHID?: number;
        HeaderID?: number;
        TR_TY?: number;
        TR_NO?: number;
        StoreID?: string;
        TR_DT?: string;
        TR_DS?: number;
        TRTY_NAME?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        Store_NAME?: string;
        GLHeaderID?: number;
        PStoreID?: string;
        PTR_TY?: number;
        PTR_NO?: number;
        SupervisorID?: string;
        CST_CD?: string;
        CST_NAME?: string;
        HDSCR_AR?: string;
        HDSCR_EN?: string;
        Paid?: number;
        TotalValue?: number;
        NetTotal?: number;
        Flag?: number;
        BALDB?: number;
        BALCR?: number;
        BAL?: number;
        SUM_CD?: string;
        SSUM_CD?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        ACC_NO3?: string;
        ACC_NAME3?: string;
        CHK_NO?: string;
        CHK_TYP?: number;
        CKHTYP_NAME?: string;
        CHKTRTY?: number;
        CHKTRTY_NAME?: string;
        ISU_DT?: string;
        DUE_DT?: string;
        AMT?: number;
        AMT_PAID?: number;
        CHK_EXPENSVL?: number;
        CHK_TotalValue?: number;
        BNKID?: string;
        BNK_NAME?: string;
        CBNKID?: string;
        CBNK_NAME?: string;
        RPACC_ACCNO?: string;
        RPACC_NAME?: string;
        DEPT_BNKID?: string;
        DEPT_BNKNAME?: string;
        Notes_ACCNO?: string;
        Notes_ACCNAME?: string;
        Endorsed_ACCNO?: string;
        Endorsed_NAME?: string;
        ExpensesID?: string;
        ExpensesName?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        EXPENSE_VL?: number;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        CUR_VL?: number;
        GlPosted?: boolean;
        CloseStatus?: number;
        Status?: number;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace ACCTRHRow {
        const idProperty = "HeaderID";
        const nameProperty = "StoreID";
        const localTextPrefix = "Model.ACCTRH";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ASTRHID = "ASTRHID",
            HeaderID = "HeaderID",
            TR_TY = "TR_TY",
            TR_NO = "TR_NO",
            StoreID = "StoreID",
            TR_DT = "TR_DT",
            TR_DS = "TR_DS",
            TRTY_NAME = "TRTY_NAME",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            Store_NAME = "Store_NAME",
            GLHeaderID = "GLHeaderID",
            PStoreID = "PStoreID",
            PTR_TY = "PTR_TY",
            PTR_NO = "PTR_NO",
            SupervisorID = "SupervisorID",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            HDSCR_AR = "HDSCR_AR",
            HDSCR_EN = "HDSCR_EN",
            Paid = "Paid",
            TotalValue = "TotalValue",
            NetTotal = "NetTotal",
            Flag = "Flag",
            BALDB = "BALDB",
            BALCR = "BALCR",
            BAL = "BAL",
            SUM_CD = "SUM_CD",
            SSUM_CD = "SSUM_CD",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            ACC_NO3 = "ACC_NO3",
            ACC_NAME3 = "ACC_NAME3",
            CHK_NO = "CHK_NO",
            CHK_TYP = "CHK_TYP",
            CKHTYP_NAME = "CKHTYP_NAME",
            CHKTRTY = "CHKTRTY",
            CHKTRTY_NAME = "CHKTRTY_NAME",
            ISU_DT = "ISU_DT",
            DUE_DT = "DUE_DT",
            AMT = "AMT",
            AMT_PAID = "AMT_PAID",
            CHK_EXPENSVL = "CHK_EXPENSVL",
            CHK_TotalValue = "CHK_TotalValue",
            BNKID = "BNKID",
            BNK_NAME = "BNK_NAME",
            CBNKID = "CBNKID",
            CBNK_NAME = "CBNK_NAME",
            RPACC_ACCNO = "RPACC_ACCNO",
            RPACC_NAME = "RPACC_NAME",
            DEPT_BNKID = "DEPT_BNKID",
            DEPT_BNKNAME = "DEPT_BNKNAME",
            Notes_ACCNO = "Notes_ACCNO",
            Notes_ACCNAME = "Notes_ACCNAME",
            Endorsed_ACCNO = "Endorsed_ACCNO",
            Endorsed_NAME = "Endorsed_NAME",
            ExpensesID = "ExpensesID",
            ExpensesName = "ExpensesName",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            EXPENSE_VL = "EXPENSE_VL",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            CUR_VL = "CUR_VL",
            GlPosted = "GlPosted",
            CloseStatus = "CloseStatus",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.Model {
    interface ASCURRATRow {
        CurrencyID1?: string;
        CurrencyID2?: string;
        CUR_RAT?: number;
        ICUR_RAT?: number;
    }
    namespace ASCURRATRow {
        const idProperty = "CurrencyID1";
        const nameProperty = "CurrencyID1";
        const localTextPrefix = "ALgorithm.ASCURRAT";
        const lookupKey = "ALgorithm:ASCURRAT";
        function getLookup(): Q.Lookup<ASCURRATRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CurrencyID1 = "CurrencyID1",
            CurrencyID2 = "CurrencyID2",
            CUR_RAT = "CUR_RAT",
            ICUR_RAT = "ICUR_RAT"
        }
    }
}
declare namespace ALgorithmPro.Model {
}
declare namespace ALgorithmPro.Model {
    interface ASTRHVIEWForm {
        StoreID: Serenity.StringEditor;
        Store_NAME: Serenity.StringEditor;
        HeaderID: Serenity.StringEditor;
        TR_NO: Serenity.IntegerEditor;
        TR_TY: Serenity.IntegerEditor;
        TRTY_NAME: Serenity.StringEditor;
        TR_DT: Serenity.DateEditor;
        ReferenceNo: Serenity.IntegerEditor;
        DocTransNo: Serenity.StringEditor;
        ACC_NO: Serenity.StringEditor;
        ACC_NAME: Serenity.StringEditor;
        ACC_NO2: Serenity.StringEditor;
        ACC_NAME2: Serenity.StringEditor;
        CashBoxID: Serenity.StringEditor;
        Cash_NAME: Serenity.StringEditor;
        REP_CD: Serenity.StringEditor;
        REP_NAME: Serenity.StringEditor;
        REP_CD2: Serenity.StringEditor;
        REP_NAME2: Serenity.StringEditor;
        CST_CD: Serenity.StringEditor;
        CST_NAME: Serenity.StringEditor;
        SUM_CD: Serenity.StringEditor;
        SUM_NAME: Serenity.StringEditor;
        SSUM_CD: Serenity.StringEditor;
        SSUM_NAME: Serenity.StringEditor;
        Phone1: Serenity.StringEditor;
        Phone2: Serenity.StringEditor;
        Phone3: Serenity.StringEditor;
        ADDRS1: Serenity.StringEditor;
        ADDRS2: Serenity.StringEditor;
        MOBIL1: Serenity.StringEditor;
        MOBIL2: Serenity.StringEditor;
        SupervisorId: Serenity.StringEditor;
        CurrencyID: Serenity.StringEditor;
        Currency_NAME: Serenity.StringEditor;
        RATE: Serenity.DecimalEditor;
        Notes: Serenity.StringEditor;
        PriceID: Serenity.StringEditor;
        HDISC: Serenity.DecimalEditor;
        HDISC1: Serenity.DecimalEditor;
        HDISC2: Serenity.DecimalEditor;
        HDISC3: Serenity.DecimalEditor;
        HDISC4: Serenity.DecimalEditor;
        HTAX: Serenity.DecimalEditor;
        HTAX1: Serenity.DecimalEditor;
        HTAX2: Serenity.DecimalEditor;
        HTAX3: Serenity.DecimalEditor;
        HDSCR_AR: Serenity.StringEditor;
        Paid: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        EXPENSEVL: Serenity.DecimalEditor;
        HAddtions: Serenity.DecimalEditor;
        PRT_CNT: Serenity.IntegerEditor;
        PTR_TY: Serenity.IntegerEditor;
        PTR_NO: Serenity.IntegerEditor;
        PStoreID: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        EnteredBy: Serenity.StringEditor;
        EntryDate: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
    }
    class ASTRHVIEWForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ALgorithmPro.Model {
    interface ASTRHVIEWRow {
        StoreID?: string;
        Store_NAME?: string;
        HeaderID?: number;
        TR_NO?: number;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_DT?: string;
        ReferenceNo?: number;
        DocTransNo?: string;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NAME2?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        Phone1?: string;
        Phone2?: string;
        Phone3?: string;
        ADDRS1?: string;
        ADDRS2?: string;
        MOBIL1?: string;
        MOBIL2?: string;
        SupervisorId?: string;
        CurrencyID?: string;
        Currency_NAME?: string;
        RATE?: number;
        Notes?: string;
        PriceID?: string;
        HDISC?: number;
        HDISC1?: number;
        HDISC2?: number;
        HDISC3?: number;
        HDISC4?: number;
        HTAX?: number;
        HTAX1?: number;
        HTAX2?: number;
        HTAX3?: number;
        HDSCR_AR?: string;
        Paid?: number;
        Total?: number;
        NetTotal?: number;
        EXPENSEVL?: number;
        HAddtions?: number;
        PRT_CNT?: number;
        PTR_TY?: number;
        PTR_NO?: number;
        PStoreID?: string;
        Status?: number;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
    }
    namespace ASTRHVIEWRow {
        const idProperty = "HeaderID";
        const nameProperty = "StoreID";
        const localTextPrefix = "Model.ASTRHVIEW";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            StoreID = "StoreID",
            Store_NAME = "Store_NAME",
            HeaderID = "HeaderID",
            TR_NO = "TR_NO",
            TR_TY = "TR_TY",
            TRTY_NAME = "TRTY_NAME",
            TR_DT = "TR_DT",
            ReferenceNo = "ReferenceNo",
            DocTransNo = "DocTransNo",
            ACC_NO = "ACC_NO",
            ACC_NAME = "ACC_NAME",
            ACC_NO2 = "ACC_NO2",
            ACC_NAME2 = "ACC_NAME2",
            CashBoxID = "CashBoxID",
            Cash_NAME = "Cash_NAME",
            REP_CD = "REP_CD",
            REP_NAME = "REP_NAME",
            REP_CD2 = "REP_CD2",
            REP_NAME2 = "REP_NAME2",
            CST_CD = "CST_CD",
            CST_NAME = "CST_NAME",
            SUM_CD = "SUM_CD",
            SUM_NAME = "SUM_NAME",
            SSUM_CD = "SSUM_CD",
            SSUM_NAME = "SSUM_NAME",
            Phone1 = "Phone1",
            Phone2 = "Phone2",
            Phone3 = "Phone3",
            ADDRS1 = "ADDRS1",
            ADDRS2 = "ADDRS2",
            MOBIL1 = "MOBIL1",
            MOBIL2 = "MOBIL2",
            SupervisorId = "SupervisorId",
            CurrencyID = "CurrencyID",
            Currency_NAME = "Currency_NAME",
            RATE = "RATE",
            Notes = "Notes",
            PriceID = "PriceID",
            HDISC = "HDISC",
            HDISC1 = "HDISC1",
            HDISC2 = "HDISC2",
            HDISC3 = "HDISC3",
            HDISC4 = "HDISC4",
            HTAX = "HTAX",
            HTAX1 = "HTAX1",
            HTAX2 = "HTAX2",
            HTAX3 = "HTAX3",
            HDSCR_AR = "HDSCR_AR",
            Paid = "Paid",
            Total = "Total",
            NetTotal = "NetTotal",
            EXPENSEVL = "EXPENSEVL",
            HAddtions = "HAddtions",
            PRT_CNT = "PRT_CNT",
            PTR_TY = "PTR_TY",
            PTR_NO = "PTR_NO",
            PStoreID = "PStoreID",
            Status = "Status",
            EnteredBy = "EnteredBy",
            EntryDate = "EntryDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ALgorithmPro.Model {
    namespace ASTRHVIEWService {
        const baseUrl = "Model/ASTRHVIEW";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ASTRHVIEWRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Model/ASTRHVIEW/List"
        }
    }
}
declare namespace ALgorithmPro.Model {
    interface CheckTRTYVIEWRow {
        ID?: number;
        TR_TY?: number;
        Name_AR?: string;
        Name_EN?: string;
    }
    namespace CheckTRTYVIEWRow {
        const idProperty = "ID";
        const nameProperty = "Name_AR";
        const localTextPrefix = "ALgorithm.CheckTRTYVIEW";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ID = "ID",
            TR_TY = "TR_TY",
            Name_AR = "Name_AR",
            Name_EN = "Name_EN"
        }
    }
}
declare namespace ALgorithmPro {
}
declare namespace ALgorithmPro {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace ALgorithmPro.Texts {
}
declare namespace ALgorithmPro.Web.Modules.ALgorithm.ItemsLoc {
    interface ItemsListRequest extends Serenity.ListRequest {
        ItemsID?: number;
    }
}
declare namespace ALgorithmPro.Web.Modules.ALgorithm.ItemsLoc {
    interface ItemsResponse extends Serenity.ServiceResponse {
        Errors?: string;
    }
}
declare namespace ALgorithmPro.Web.Modules.ALgorithm.ItemsLoc {
    interface ItemsValidationRequest extends Serenity.ServiceRequest {
        ItemCD?: string;
        StoreID?: string;
    }
}
declare namespace ALgorithmPro.Web.Modules.Common {
    enum AccountNature {
        Debit = 1,
        Credit = 2
    }
}
declare namespace ALgorithmPro.Web.Modules.Common {
    enum AccountType {
        MainAccount = 1,
        SubAccount = 2
    }
}
declare namespace ALgorithmPro.Web.Modules.Common {
    enum CheckTRTY {
        Deposit = 701,
        CASH = 702,
        PartialCASH = 703,
        Bounce = 704,
        Endorsement = 705,
        Close = 706,
        Stop = 707
    }
}
declare namespace ALgorithmPro.Web.Modules.Common {
    enum CheckType {
        ReceiveChecks = 22,
        PayChecks = 23
    }
}
declare namespace ALgorithmPro.Web.Modules.Common {
    enum DiscType {
        Value = 1,
        Percent = 2
    }
}
declare namespace ALgorithmPro.Web.Modules.Common {
    enum DocType {
        Checks = 1,
        BILLS = 2
    }
}
declare namespace ALgorithmPro.Web.Modules.Common {
    enum Status {
        DeActive = 0,
        Active = 1
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ACCMFDialog extends Serenity.EntityDialog<ACCMFRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ACCMFForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro {
    class SelectableEntityGrid<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ACCMFGrid extends SelectableEntityGrid<ACCMFRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ACCMFDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ASCSTDialog extends Serenity.EntityDialog<ASCSTRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ASCSTForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ASCSTGrid extends SelectableEntityGrid<ASCSTRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ASCSTDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ASTRTYDialog extends Serenity.EntityDialog<ASTRTYRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ASTRTYForm;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ASTRTYGrid extends Serenity.EntityGrid<ASTRTYRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ASTRTYDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class BranchDialog extends Serenity.EntityDialog<BranchRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BranchForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class BranchGrid extends SelectableEntityGrid<BranchRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BranchDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CustomChecksDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ChecksGrid;
        protected form: ChecksForm;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CheckTRDialog extends Serenity.EntityDialog<CheckTRRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CheckTRForm;
        static PrefixID: string;
        private ChecksGrid;
        ID: number;
        Checks: ChecksRow;
        constructor();
        protected initDialog(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CheckTRGrid extends Serenity.EntityGrid<CheckTRRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CheckTRDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ChecksDialog extends Serenity.EntityDialog<ChecksRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ChecksForm;
        constructor();
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ChecksGrid extends SelectableEntityGrid<ChecksRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ChecksDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CitiesDialog extends Serenity.EntityDialog<CitiesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CitiesForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CitiesGrid extends AS.GridBase<CitiesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CitiesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        static isEditedFlag: string;
        constructor(container: JQuery);
        protected getItemCssClass(item: ALgorithm.CitiesRow, index: number): string;
        protected getSlickOptions(): any;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CurrencyDialog extends Serenity.EntityDialog<CurrencyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CurrencyForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CurrencyGrid extends AS.GridBase<CurrencyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CurrencyDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        static isEditedFlag: string;
        constructor(container: JQuery);
        protected getItemCssClass(item: ALgorithm.CurrencyRow, index: number): string;
        protected getSlickOptions(): any;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class DistrictsDialog extends Serenity.EntityDialog<DistrictsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DistrictsForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class DistrictsGrid extends AS.GridBase<DistrictsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DistrictsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        static isEditedFlag: string;
        constructor(container: JQuery);
        protected getItemCssClass(item: ALgorithm.DistrictsRow, index: number): string;
        protected getSlickOptions(): any;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ALgorithmPro.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class AddInventoryASTRDDialog extends Common.GridEditorDialog<AddInventoryASTRDRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ItemGrid;
        protected form: AddInventoryASTRDForm;
        constructor();
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace AS {
    class GridBaseEditor<TEntity> extends AS.GridBase<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly {
        protected getASGridOptions(): ExtGridOptions;
        protected getIdProperty(): string;
        isChildGrid: boolean;
        constructor(container: JQuery, options?: any);
        private sortGridFunction;
        protected getQuickFilters(): any[];
        protected id(entity: any): any;
        protected setNewID(entity: TEntity): void;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected setEntities(items: TEntity[]): void;
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        private searchText;
        protected createToolbarExtensions(): void;
        protected onViewFilter(row: any): boolean;
        private matchContains;
        protected enableFiltering(): boolean;
        protected onViewSubmit(): boolean;
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        protected getSlickOptions(): any;
        protected parentDialog: DialogBase<any, any>;
        protected onItemsChanged(value: any): void;
        protected onBeforeGetValue(items: TEntity[]): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class AddInventoryASTRDEditor extends AS.GridBaseEditor<AddInventoryASTRDRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AddInventoryASTRDDialog;
        protected getLocalTextPrefix(): string;
        static GridName: Slick.Grid;
        protected form: AddInventoryForm;
        static isEditedFlag: string;
        constructor(container: JQuery);
        protected onItemsChanged(items: any): void;
        protected onBeforeGetValue(items: any): void;
        protected getItemCssClass(item: ALgorithm.AddInventoryASTRDRow, index: number): string;
        protected getSlickOptions(): any;
        protected validateEntity(row: any): boolean;
        private ClearFooter;
        private UpdateFooter;
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class AddInventoryDialog extends Serenity.EntityDialog<AddInventoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AddInventoryForm;
        static OldValue: string;
        static NewValue: string;
        static StoreID: string;
        static Grid: Slick.Grid;
        SelectTRTY: AS.TRTYType;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class AddInventoryGrid extends Serenity.EntityGrid<AddInventoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AddInventoryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ItemGroupsDialog extends Serenity.EntityDialog<ItemGroupsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ItemGroupsForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ItemGroupsGrid extends SelectableEntityGrid<ItemGroupsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ItemGroupsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ItemSubGroupsDialog extends Serenity.EntityDialog<ItemSubGroupsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ItemSubGroupsForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ItemSubGroupsGrid extends SelectableEntityGrid<ItemSubGroupsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ItemSubGroupsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ItemsDialog extends Serenity.EntityDialog<ItemsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ItemsForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ItemsGrid extends SelectableEntityGrid<ItemsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ItemsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        Prefix: string;
        constructor(container: JQuery);
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    /**
     * Our custom product editor type
     */
    class ChangingLookupTextEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, ItemsBarcodeRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItemText(item: ALgorithm.ItemsBarcodeRow, lookup: Q.Lookup<ALgorithm.ItemsBarcodeRow>): string;
    }
}
declare namespace ALgorithmPro.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ItemBarcodeEditor extends Common.GridEditorBase<ItemsBarcodeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ItemsBarcodeDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ItemsBarcodeDialog extends Common.GridEditorDialog<ItemsBarcodeRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ItemsBarcodeForm;
        protected Itemsform: ItemsForm;
        constructor();
        protected afterLoadEntity(): void;
        private GetPackges;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ItemsBarcodeGrid extends Serenity.EntityGrid<ItemsBarcodeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ItemsBarcodeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CustomDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ItemsGrid;
        protected form: ItemsForm;
        constructor();
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CustomItemsGrid extends ItemsGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ItemsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected Itemsform: ItemsForm;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ItemsLookupDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ItemsForm;
        private ItemsGrid;
        static SelectTRTY: AS.TRTYType;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ItemsLocDialog extends Serenity.EntityDialog<ItemsLocRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ItemsLocForm;
        private ItemsGrid;
        static ValidNumbers: number;
        constructor();
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ItemsLocGrid extends AS.GridBase<ItemsLocRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ItemsLocDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        static isEditedFlag: string;
        constructor(container: JQuery);
        protected getItemCssClass(item: ALgorithm.ItemsLocRow, index: number): string;
        protected getSlickOptions(): any;
        protected getButtons(): Serenity.ToolButton[];
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ASCOSTDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        static SelectTRTY: AS.TRTYType;
        private COSTGrid;
        protected form: ASCSTForm;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ASCOSTGrid extends ASCSTGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ASCSTDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        SelectTRTY: AS.TRTYType;
        protected form: any;
        IdPrefixed: string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ASREPSDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        static SelectTRTY: AS.TRTYType;
        private ASREPSGrid;
        protected form: ASCSTForm;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class REPSGrid extends AS.GridBase<REPSRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof REPSDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        static isEditedFlag: string;
        constructor(container: JQuery);
        protected getItemCssClass(item: ALgorithm.REPSRow, index: number): string;
        protected getSlickOptions(): any;
        protected getButtons(): Serenity.ToolButton[];
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ASREPSGrid extends REPSGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof REPSDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        SelectTRTY: AS.TRTYType;
        protected form: any;
        IdPrefixed: string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ASTRDDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ASTRDVIEWForm;
        private ASTRDGrid;
        static SelectTRTY: AS.TRTYType;
        static ReferenceNumer: number;
        constructor(SelectTRTY: any, ReferenceNumer: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ASTRDGrid extends SelectableEntityGrid<ASTRDVIEWRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ASTRDDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        SelectTRTY: AS.TRTYType;
        Grid: Slick.Grid;
        ReferenceNumer: number;
        protected form: any;
        IdPrefix: string;
        constructor(container: JQuery);
        private SetDataGrid;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.Model {
    class ASTRHVIEWDialog extends Serenity.EntityDialog<ASTRHVIEWRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ASTRHVIEWForm;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ASTRHDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: Model.ASTRHVIEWForm;
        private ASTRHGrid;
        static SelectTRTY: AS.TRTYType;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.Model {
    class ASTRHVIEWGrid extends SelectableEntityGrid<ASTRHVIEWRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ASTRHVIEWDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ASTRHGrid extends ALgorithmPro.Model.ASTRHVIEWGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Model.ASTRHVIEWDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        form: any;
        IdPrefixed: string;
        SelectTRTY: AS.TRTYType;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class AZSSUMSDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        static SelectTRTY: AS.TRTYType;
        private AZSSUMSGrid;
        protected form: SSUMSForm;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class SSUMSGrid extends SelectableEntityGrid<SSUMSRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SSUMSDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class AZSSUMSGrid extends SSUMSGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SSUMSDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        SelectTRTY: AS.TRTYType;
        protected form: any;
        IdPrefixed: string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class AZSUMSDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        static SelectTRTY: AS.TRTYType;
        private AZSUMSGrid;
        protected form: SUMSForm;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class SUMSGrid extends SelectableEntityGrid<SUMSRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SUMSDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class AZSUMSGrid extends SUMSGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SUMSDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        SelectTRTY: AS.TRTYType;
        protected form: any;
        IdPrefixed: string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class AZSuperDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        static SelectTRTY: AS.TRTYType;
        private AZSuperGrid;
        protected form: SupervisorsForm;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class SupervisorsGrid extends SelectableEntityGrid<SupervisorsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SupervisorsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class AZSuperGrid extends SupervisorsGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SupervisorsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        SelectTRTY: AS.TRTYType;
        protected form: any;
        IdPrefixed: string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class AccountDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ACCMFForm;
        private AccountGrid;
        static SelectTRTY: AS.TRTYType;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class AccountGrid extends ACCMFGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ACCMFDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        form: any;
        IdPrefixed: string;
        SelectTRTY: AS.TRTYType;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class BankDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        static SelectTRTY: AS.TRTYType;
        private BankGrid;
        protected form: ACCMFForm;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class BankGrid extends ACCMFGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ACCMFDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        SelectTRTY: AS.TRTYType;
        protected form: any;
        IdPrefixed: string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashBoxDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        static SelectTRTY: AS.TRTYType;
        private CashBoxGrid;
        protected form: ACCMFForm;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashBoxGrid extends ACCMFGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ACCMFDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        SelectTRTY: AS.TRTYType;
        protected form: any;
        IdPrefixed: string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CustomChecksGrid extends ChecksGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ChecksDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected Checksform: CheckTRForm;
        IdPrefixed: string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CustomerDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        static SelectTRTY: AS.TRTYType;
        private CustomerGrid;
        protected form: ACCMFForm;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CustomerGrid extends ACCMFGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ACCMFDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        SelectTRTY: AS.TRTYType;
        protected form: any;
        IdPrefixed: string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CustomerSupplierDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ACCMFForm;
        private ACCMFGrid;
        static SelectTRTY: AS.TRTYType;
        constructor(SelectTRTY: AS.TRTYType);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CustomerSupplierGrid extends SelectableEntityGrid<ACCMFRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ACCMFDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        SelectTRTY: AS.TRTYType;
        protected form: any;
        IdPrefixed: string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ExpensesDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        static SelectTRTY: AS.TRTYType;
        protected form: ACCMFForm;
        private ExpensesGrid;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ExpensesGrid extends ACCMFGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ACCMFDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        SelectTRTY: AS.TRTYType;
        protected form: any;
        IdPrefixed: string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ItemsLookupGrid extends SelectableEntityGrid<ItemsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ItemsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        SelectTRTY: AS.TRTYType;
        Grid: Slick.Grid;
        One: number;
        protected form: any;
        constructor(container: JQuery);
        private SetDataGrid;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class RevenuDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        static SelectTRTY: AS.TRTYType;
        protected form: ACCMFForm;
        private RevenuGrid;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class RevenuGrid extends ACCMFGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ACCMFDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        SelectTRTY: AS.TRTYType;
        protected form: any;
        IdPrefixed: string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class SupplierDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        static SelectTRTY: AS.TRTYType;
        private SupplierGrid;
        protected form: ACCMFForm;
        constructor(SelectTRTY: any);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class SupplierGrid extends ACCMFGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ACCMFDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        SelectTRTY: AS.TRTYType;
        protected form: any;
        IdPrefixed: string;
        constructor(container: JQuery);
        protected getInitialTitle(): any;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected onViewSubmit(): boolean;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        get text(): string;
        set text(value: string);
        okClick: () => void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        get value(): NotesRow[];
        set value(value: NotesRow[]);
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class PackageDialog extends Serenity.EntityDialog<PackageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PackageForm;
        constructor();
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class PackageGrid extends Serenity.EntityGrid<PackageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PackageDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class PriceTypesDialog extends Serenity.EntityDialog<PriceTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PriceTypesForm;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class PriceTypesGrid extends SelectableEntityGrid<PriceTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PriceTypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class REPSDialog extends Serenity.EntityDialog<REPSRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: REPSForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class RegionsDialog extends Serenity.EntityDialog<RegionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: RegionsForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class RegionsGrid extends SelectableEntityGrid<RegionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class SSUMSDialog extends Serenity.EntityDialog<SSUMSRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SSUMSForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class SUMSDialog extends Serenity.EntityDialog<SUMSRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SUMSForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class StoresDialog extends Serenity.EntityDialog<StoresRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StoresForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class StoresGrid extends SelectableEntityGrid<StoresRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StoresDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class SupervisorsDialog extends Serenity.EntityDialog<SupervisorsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SupervisorsForm;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashPurchASTRDDialog extends Common.GridEditorDialog<CashPurchASTRDRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ItemGrid;
        protected form: CashPurchASTRDForm;
        constructor();
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashPurchASTRDEditor extends AS.GridBaseEditor<CashPurchASTRDRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashPurchASTRDDialog;
        protected getLocalTextPrefix(): string;
        static GridName: Slick.Grid;
        protected form: CashPurchForm;
        static isEditedFlag: string;
        constructor(container: JQuery);
        protected onItemsChanged(items: any): void;
        protected onBeforeGetValue(items: any): void;
        protected getItemCssClass(item: ALgorithm.CashPurchASTRDRow, index: number): string;
        protected getSlickOptions(): any;
        protected validateEntity(row: any): boolean;
        private ClearFooter;
        private UpdateFooter;
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashPurchDialog extends Serenity.EntityDialog<CashPurchRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ACCNOGrid;
        protected form: CashPurchForm;
        static OldValue: string;
        static NewValue: string;
        static StoreID: string;
        static Grid: Slick.Grid;
        SelectTRTY: AS.TRTYType;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashPurchGrid extends Serenity.EntityGrid<CashPurchRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashPurchDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashRestoreASTRDDialog extends Common.GridEditorDialog<CashRestoreASTRDRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ItemGrid;
        protected form: CashRestoreASTRDForm;
        constructor();
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashRestoreASTRDEditor extends AS.GridBaseEditor<CashRestoreASTRDRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashRestoreASTRDDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        array: object[];
        static GridName: Slick.Grid;
        protected form: CashRestoreForm;
        static isEditedFlag: string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onItemsChanged(items: any): void;
        protected onBeforeGetValue(items: any): void;
        protected getItemCssClass(item: ALgorithm.CashRestoreASTRDRow, index: number): string;
        protected getSlickOptions(): any;
        protected validateEntity(row: CashRestoreASTRDRow): boolean;
        private PackageChange;
        private UpdateGrid;
        private ClearFooter;
        private UpdateFooter;
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashRestoreDialog extends Serenity.EntityDialog<CashRestoreRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ACCNOGrid;
        protected form: CashRestoreForm;
        static OldValue: string;
        static NewValue: string;
        static StoreID: string;
        static Grid: Slick.Grid;
        SelectTRTY: AS.TRTYType;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashRestoreGrid extends Serenity.EntityGrid<CashRestoreRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashRestoreDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected addButtonClick(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class PurchASTRDDialog extends Common.GridEditorDialog<PurchASTRDRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ItemGrid;
        protected form: PurchASTRDForm;
        constructor();
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class PurchASTRDEditor extends AS.GridBaseEditor<PurchASTRDRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchASTRDDialog;
        protected getLocalTextPrefix(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getService(): string;
        static GridName: Slick.Grid;
        protected form: PurchaseForm;
        static isEditedFlag: string;
        constructor(container: JQuery);
        protected onItemsChanged(items: any): void;
        protected onBeforeGetValue(items: any): void;
        protected getItemCssClass(item: ALgorithm.PurchASTRDRow, index: number): string;
        protected getSlickOptions(): any;
        protected validateEntity(row: any): boolean;
        private ClearFooter;
        private UpdateFooter;
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class PurchaseDialog extends Serenity.EntityDialog<PurchaseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PurchaseForm;
        private ACCNOGrid;
        static HeaderPrefix: string;
        static PrefixID: string;
        static OldValue: string;
        static NewValue: string;
        static StoreID: string;
        SelectTRTY: AS.TRTYType;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class PurchaseGrid extends Serenity.EntityGrid<PurchaseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class RestoreASTRDDialog extends Common.GridEditorDialog<RestoreASTRDRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ItemGrid;
        protected form: RestoreASTRDForm;
        constructor();
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class RestoreASTRDEditor extends AS.GridBaseEditor<RestoreASTRDRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RestoreASTRDDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        array: object[];
        static GridName: Slick.Grid;
        protected form: RestorePurchaseForm;
        static isEditedFlag: string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onItemsChanged(items: any): void;
        protected onBeforeGetValue(items: any): void;
        protected getItemCssClass(item: ALgorithm.RestoreASTRDRow, index: number): string;
        protected getSlickOptions(): any;
        protected validateEntity(row: RestoreASTRDRow): boolean;
        private PackageChange;
        private UpdateGrid;
        private ClearFooter;
        private UpdateFooter;
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class RestorePurchaseDialog extends Serenity.EntityDialog<RestorePurchaseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ACCNOGrid;
        protected form: RestorePurchaseForm;
        static OldValue: string;
        static NewValue: string;
        static StoreID: string;
        static Grid: Slick.Grid;
        SelectTRTY: AS.TRTYType;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class RestorePurchaseGrid extends Serenity.EntityGrid<RestorePurchaseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RestorePurchaseDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected addButtonClick(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashReturnASTRDDialog extends Common.GridEditorDialog<CashReturnASTRDRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ItemGrid;
        protected form: CashReturnASTRDForm;
        constructor();
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashReturnASTRDEditor extends AS.GridBaseEditor<CashReturnASTRDRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashReturnASTRDDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        array: object[];
        static GridName: Slick.Grid;
        protected form: CashReturnForm;
        static isEditedFlag: string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onItemsChanged(items: any): void;
        protected onBeforeGetValue(items: any): void;
        protected getItemCssClass(item: ALgorithm.CashReturnASTRDRow, index: number): string;
        protected getSlickOptions(): any;
        protected validateEntity(row: CashReturnASTRDRow): boolean;
        private PackageChange;
        private UpdateGrid;
        private ClearFooter;
        private UpdateFooter;
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashReturnDialog extends Serenity.EntityDialog<CashReturnRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ACCNOGrid;
        protected form: CashReturnForm;
        static OldValue: string;
        static NewValue: string;
        static StoreID: string;
        static Grid: Slick.Grid;
        SelectTRTY: AS.TRTYType;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashReturnGrid extends Serenity.EntityGrid<CashReturnRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashReturnDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected addButtonClick(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashSalesASTRDDialog extends Common.GridEditorDialog<CashSalesASTRDRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ItemGrid;
        protected form: CashSalesASTRDForm;
        constructor();
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashSalesASTRDEditor extends AS.GridBaseEditor<CashSalesASTRDRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashSalesASTRDDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        static GridName: Slick.Grid;
        protected form: CashSalesForm;
        static isEditedFlag: string;
        constructor(container: JQuery);
        protected onItemsChanged(items: any): void;
        protected onBeforeGetValue(items: any): void;
        protected getItemCssClass(item: ALgorithm.CashSalesASTRDRow, index: number): string;
        protected getSlickOptions(): any;
        protected validateEntity(row: any): boolean;
        private ClearFooter;
        private UpdateFooter;
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashSalesDialog extends Serenity.EntityDialog<CashSalesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CashSalesForm;
        static OldValue: string;
        static NewValue: string;
        static StoreID: string;
        SelectTRTY: AS.TRTYType;
        private ACCNOGrid;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class CashSalesGrid extends Serenity.EntityGrid<CashSalesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashSalesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class SalesASTRDDialog extends Common.GridEditorDialog<SalesASTRDRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ItemGrid;
        protected form: SalesASTRDForm;
        constructor();
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class SalesASTRDEditor extends AS.GridBaseEditor<SalesASTRDRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesASTRDDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        static GridName: Slick.Grid;
        protected form: SalesForm;
        static isEditedFlag: string;
        constructor(container: JQuery);
        protected onItemsChanged(items: any): void;
        protected onBeforeGetValue(items: any): void;
        protected getItemCssClass(item: ALgorithm.SalesASTRDRow, index: number): string;
        protected getSlickOptions(): any;
        protected validateEntity(row: SalesASTRDRow): boolean;
        private ClearFooter;
        private UpdateFooter;
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class SalesDialog extends Serenity.EntityDialog<SalesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SalesForm;
        private ACCNOGrid;
        static HeaderPrefix: string;
        static PrefixID: string;
        static OldValue: string;
        static NewValue: string;
        static StoreID: string;
        SelectTRTY: AS.TRTYType;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class SalesGrid extends Serenity.EntityGrid<SalesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ReturnASTRDDialog extends Common.GridEditorDialog<ReturnASTRDRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ItemGrid;
        protected form: ReturnASTRDForm;
        constructor();
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ReturnASTRDEditor extends AS.GridBaseEditor<ReturnASTRDRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReturnASTRDDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        array: object[];
        static GridName: Slick.Grid;
        protected form: ReturnSalesForm;
        static isEditedFlag: string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onItemsChanged(items: any): void;
        protected onBeforeGetValue(items: any): void;
        protected getItemCssClass(item: ALgorithm.ReturnASTRDRow, index: number): string;
        protected getSlickOptions(): any;
        protected validateEntity(row: ReturnASTRDRow): boolean;
        private PackageChange;
        private UpdateGrid;
        private ClearFooter;
        private UpdateFooter;
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ReturnSalesDialog extends Serenity.EntityDialog<ReturnSalesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private ACCNOGrid;
        protected form: ReturnSalesForm;
        static OldValue: string;
        static NewValue: string;
        static StoreID: string;
        static Grid: Slick.Grid;
        SelectTRTY: AS.TRTYType;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ALgorithmPro.ALgorithm {
    class ReturnSalesGrid extends Serenity.EntityGrid<ReturnSalesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReturnSalesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected addButtonClick(): void;
    }
}
declare namespace AS {
    function getEnumText(enumTypeOrKey: any, value: any): string;
    function isNumber(value: any): boolean;
    function getEnumValues(enumType: any): number[];
    function getEnumKeys(enumType: any): string[];
}
declare namespace AS {
    function text(key: string, fallback: string): string;
    function isCosmicThemeApplied(): boolean;
    function getSelectedLanguage(): string;
    function isBanglaMode(): boolean;
    function formatDecimal(value: any): string;
    function formatInt(value: any): string;
    function ToNumber(value: any): number;
    function ToFixed(value: any, fractionDigits?: number): string;
    function ToBool(value: any): boolean;
    function IsNull(value: any, defaultvalue?: number): any;
    function Trim(value: string): string;
    function IsNullValue(value: any): boolean;
    function IsNullObject(value: any): boolean;
    function getRandomColor(hexLetters: any): string;
    function deepClone<T>(target: T): T;
}
declare namespace ALgorithmPro {
    class ASTRD {
        ID?: number;
        DetailID?: number;
        HeaderID?: number;
        RowNum?: number;
        TR_TY?: number;
        TRTY_NAME?: string;
        TR_NO?: number;
        LN_NO?: number;
        TR_DT?: string;
        StoreID?: string;
        Store_NAME?: string;
        TR_DS?: number;
        GRP?: number;
        ACC_NO?: string;
        ACC_NAME?: string;
        ACC_NO2?: string;
        ACC_NO3?: string;
        TR_DS_AR?: string;
        TR_DS_EN?: string;
        ItemBAL?: number;
        Item_CD?: string;
        ItemBarCode?: string;
        PKID?: string;
        PKName?: string;
        PK?: number;
        QTY?: number;
        PKPRC?: number;
        Price?: number;
        Value?: number;
        PKCST?: number;
        PKCSTVL?: number;
        FIFO?: number;
        FIFOVL?: number;
        LIFO?: number;
        LIFOVL?: number;
        DISC?: number;
        DISC1?: number;
        DISC2?: number;
        DISC3?: number;
        DISC4?: number;
        DISC1R?: number;
        DISC2R?: number;
        DISC3R?: number;
        STAX_VL?: number;
        TAX1?: number;
        TAX2?: number;
        TAX3?: number;
        TAX1R?: number;
        TAX2R?: number;
        TAX3R?: number;
        EXPENSEVL?: number;
        EXPENSE_CNT?: number;
        CurrencyID?: string;
        Currency_Name?: string;
        RATE?: number;
        CUR_VL?: number;
        DetailRemark?: number;
        BonusID?: number;
        ReturnQty?: number;
        RestoreQty?: number;
        PTR_NO?: number;
        PTR_TY?: number;
        PStoreID?: string;
        CustomerPrice?: number;
        PriceID?: string;
        PriceLevelId?: string;
        CashBoxID?: string;
        Cash_NAME?: string;
        REP_CD?: string;
        REP_NAME?: string;
        REP_CD2?: string;
        REP_NAME2?: string;
        CST_CD?: string;
        CST_NAME?: string;
        SUM_CD?: string;
        SUM_NAME?: string;
        SSUM_CD?: string;
        SSUM_NAME?: string;
        ITM_NM_AR?: string;
        ACC_NAME2?: string;
        ACC_NAME3?: string;
        Recipient?: string;
        RecipientDate?: string;
        disc_cur_val?: number;
        tax_cur_val?: number;
        GLPOST?: boolean;
        Status?: Web.Modules.Common.Status;
        EnteredBy?: string;
        EntryDate?: string;
        UpdatedBy?: string;
        UpdateDate?: string;
        NetBeforeTAX?: number;
        NetAfterTAX?: number;
        NET?: number;
    }
}
declare namespace AS {
    function Sum(xs: any[], key: any): any;
    function ContainKey(xs: any[], key: any): boolean;
    function GroupBy(xs: any[], key: any): any;
    function SortBy<T>(xs: T[], key: any): T[];
    function SortByDesc<T>(xs: T[], key: any): T[];
}
declare namespace BS {
    function GetCurrencyRAT(OldValue: any, NewValue: any): number;
    function GetItemBAL(StoreID: any, ItemCD: any): number;
    function UpdateGrid(grid: Slick.Grid, index: any, row: any): void;
    function PackageChange(grid: Slick.Grid, Field: any, index: any, items: any): void;
    function ResetRowNumber(grd: Slick.Grid): void;
    function IsExistItem(grd: Slick.Grid, row: any): boolean;
    function GetPrefixId(formkey: any): string;
    function UpdateGRD(grid: Slick.Grid, rate: number): void;
}
declare namespace AS {
    function nextTick(date: any): Date;
    function addMinutes(date: Date, minutes: number): Date;
    function addHours(date: Date, hours: number): Date;
    function getHours(fromDate: Date, toDate: Date): number;
    function getDays24HourPulse(fromDate: Date, toDate: Date): number;
    function getDays(pFromDate: Date, pToDate: Date): number;
    function getMonths(fromDate: Date, toDate: Date): number;
    function getCalenderMonths(fromDate: Date, toDate: Date): number;
    function getCalenderMonthsCeil(fromDate: Date, toDate: Date): number;
    function addDays(date: Date, days: number): Date;
    function addMonths(date: Date, months: number): Date;
    function addYear(date: Date, years: number): Date;
    function getPeriods(fromDate: Date, toDate: Date, periodUnit: AS.TimeUoM): number;
    function addPeriod(date: Date, period: number, periodUnit: TimeUoM): Date;
    function formatISODate(date: Date): string;
    function bindDateTimeEditorChange(editor: any, handler: any): void;
    function setMinDate(editor: Serenity.DateEditor, value: Date): void;
    function setMaxDate(editor: Serenity.DateEditor, value: Date): void;
    function initDateRangeEditor(fromDateEditor: Serenity.DateEditor, toDateEditor: Serenity.DateEditor, onChangeHandler?: (e: JQueryEventObject) => void): void;
    function initDateTimeRangeEditor(fromDateTimeEditor: AS.DateTimePickerEditor, toDateTimeEditor: AS.DateTimePickerEditor, onChangeHandler?: (e: JQueryEventObject) => void): void;
    function formatDate(d: Date | string, format?: string): string;
}
declare namespace AS {
    function initDetailEditor(dialog: AS.DialogBase<any, any>, editor: GridEditorBase<any>, options?: ExtGridEditorOptions): void;
    function setGridEditorHeight(editor: JQuery, heightInPx: number): void;
    function addNotificationIcon(editor: Serenity.Widget<any>, isSuccess: boolean): void;
    function addPopoverIcon(editor: Serenity.Widget<any>, isSuccess: boolean, popoverOptions: any): void;
    function setEditorLabel(editor: Serenity.Widget<any>, value: string): void;
    function hideEditorLabel(editor: Serenity.Widget<any>): void;
    function setEditorCategoryLabel(editor: Serenity.Widget<any>, value: string): void;
    function hideEditorCategory(editor: Serenity.Widget<any>, value?: boolean): void;
    function hideCategories(containerElement: JQuery, value?: boolean): void;
    function hideFields(containerElement: JQuery, value?: boolean): void;
    function hideFieldsAndCategories(containerElement: JQuery, value?: boolean): void;
    function hideField(editor: Serenity.Widget<any>, value?: boolean): void;
    function showField(editor: Serenity.Widget<any>, value?: boolean): void;
    function showAndEnableField(editor: Serenity.Widget<any>): void;
    function showFieldAndCategory(editor: Serenity.Widget<any>, value?: boolean): void;
    function hideEditorTab(editor: Serenity.Widget<any>, value?: boolean): void;
    function disableEditorTab(editor: Serenity.Widget<any>, value?: boolean): void;
    function readOnlyEditorTab(editor: Serenity.Widget<any>, value?: boolean): void;
    function readOnlyEditorCategory(editor: Serenity.Widget<any>, value?: boolean): void;
    function readonlyEditorCategory($editor: JQuery, value?: boolean): void;
    function readOnlyEditorPropertyGrid(editor: Serenity.Widget<any>, value?: boolean): void;
    function readonlyEditorPropertyGrid($editor: JQuery, value?: boolean): void;
    function readOnlyEditor(editor: Serenity.Widget<any>, value?: boolean): void;
    function readonlyEditor($editor: JQuery, value?: boolean): void;
    function moveEditorFromTab(editor: Serenity.Widget<any>, toElement: JQuery, isPrepend?: boolean): void;
    function moveEditorCategoryFromTab(editor: Serenity.Widget<any>, toElement: JQuery, isPrepend?: boolean): void;
    function selectEditorTab(editor: Serenity.Widget<any>): void;
}
declare namespace q {
    function switchKeybordLayout($container: any, layout: any): void;
}
declare namespace AS {
    interface ILiteEvent<T> {
        on(handler: {
            (data?: T): void;
        }): void;
        off(handler: {
            (data?: T): void;
        }): void;
    }
    class LiteEvent<T> implements ILiteEvent<T> {
        private handlers;
        on(handler: {
            (data?: T): void;
        }): void;
        off(handler: {
            (data?: T): void;
        }): void;
        trigger(data?: T): void;
        expose(): ILiteEvent<T>;
    }
}
declare namespace ALgorithmPro {
    interface IEventHandler<TSender, TArgs> {
        (sender: TSender, args: TArgs): void;
        Detial?: TArgs;
    }
    interface IEvent<TSender, TArgs> {
        on(handler: IEventHandler<TSender, TArgs>): IEvent<TSender, TArgs>;
        off(handler: IEventHandler<TSender, TArgs>): IEvent<TSender, TArgs>;
        one(handler: IEventHandler<TSender, TArgs>): IEvent<TSender, TArgs>;
        trigger(sender?: TSender, args?: TArgs): IEvent<TSender, TArgs>;
        clear(handler: IEventHandler<TSender, TArgs>): IEvent<TSender, TArgs>;
    }
    class LiteEvents<TSender, TArgs> implements IEvent<TSender, TArgs> {
        private _handlers;
        one(handler: IEventHandler<TSender, TArgs>): IEvent<TSender, TArgs>;
        on(handler: IEventHandler<TSender, TArgs>): this;
        off(handler: IEventHandler<TSender, TArgs>): this;
        clear(handler: IEventHandler<TSender, TArgs>): this;
        has(handler: IEventHandler<TSender, TArgs>): boolean;
        trigger(sender?: TSender, args?: TArgs): this;
        expose(): this;
    }
}
declare namespace ALgorithmPro {
    interface IPrefixedEvent {
        Details: any;
    }
    class PrefixedEvent {
        private data;
        private fireEvent;
        private readonly onPrefixChanged;
        get PrefixChanged(): LiteEvents<PrefixedEvent, IPrefixedEvent>;
        OnFormChange(handler: IEventHandler<PrefixedEvent, IPrefixedEvent>): this;
        increment(): this;
    }
}
declare namespace AS {
    class AutoCompleteEditor extends Serenity.StringEditor {
        constructor(input: JQuery, options: AutoCompleteOptions);
        protected bindAutoComplete(input: any): void;
    }
    interface AutoCompleteOptions {
        lookupKey: string;
        sourceArray: string[];
        sourceCSV: string;
        minSearchLength: number;
    }
}
declare namespace AS {
    class ColorEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getTemplate(): string;
        constructor(container: JQuery);
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
    }
}
declare namespace AS {
    class DateTimePickerEditor extends Serenity.Widget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly {
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        constructor(container: JQuery);
        get value(): string;
        set value(val: string);
        get valueAsDate(): Date;
        set valueAsDate(val: Date);
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        set_minDate(date: Date): void;
        set_maxDate(date: Date): void;
        set_minDateTime(date: Date): void;
        set_maxDateTime(date: Date): void;
    }
}
declare namespace AS {
    class EmptyLookupEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, any> {
        setSelect2Items(items: Select2Item[]): void;
        setLookupItems(lookup: Q.Lookup<any>): void;
    }
}
declare namespace AS {
    class HardCodedLookupEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery, options: HardCodedLookupEditorOptions);
        protected getSelect2Options(): Select2Options;
    }
    interface HardCodedLookupEditorOptions {
        sourceArray: string[];
        sourceCSV: string;
        allowOtherValue: boolean;
    }
}
declare namespace AS {
    class HtmlTemplateEditor extends Serenity.HtmlContentEditor {
        constructor(textArea: JQuery, opt?: HtmlTemplateEditorOptions);
        protected getConfig(): Serenity.CKEditorConfig;
    }
    interface HtmlTemplateEditorOptions extends Serenity.HtmlContentEditorOptions {
        cols?: any;
        rows?: any;
        placeholders?: any;
    }
}
declare namespace AS {
    class JsonViewer extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        protected getTemplate(): string;
        private _value;
        set value(val: string);
        get value(): string;
    }
}
declare namespace AS {
    class MonthYearEditor extends Serenity.Widget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly {
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        constructor(container: JQuery);
        get value(): string;
        set value(val: string);
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
    }
}
declare namespace AS {
    class PrefixedStringEditor extends Serenity.Widget<PrefixedStringEditorOptions> implements Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly {
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        private prefixInput;
        constructor(container: JQuery, options: PrefixedStringEditorOptions);
        get value(): string;
        set value(val: string);
        private _prefix;
        get prefix(): string;
        set prefix(val: string);
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
    }
    interface PrefixedStringEditorOptions {
        prefixLength: number;
        inputMaxLength: number;
        prefixFormatterType?: string;
    }
}
declare namespace AS {
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private _value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
        get value(): string;
        set value(value: string);
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
        isDate: boolean;
        isDateTime: boolean;
    }
}
declare namespace AS {
    class YesNoEditor extends Serenity.Select2Editor<any, any> {
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        constructor(container: JQuery);
        get valueAsBoolean(): boolean;
        set valueAsBoolean(val: boolean);
    }
}
declare namespace AS {
    class GridItemPickerEditor extends Serenity.TemplatedWidget<GridItemPickerEditorOptions> implements Serenity.ISetEditValue, Serenity.IGetEditValue, Serenity.IStringValue, Serenity.IReadOnly, Serenity.IValidateRequired {
        options: GridItemPickerEditorOptions;
        protected getTemplate(): string;
        inplaceSearchButton: JQuery;
        inplaceViewButton: JQuery;
        clearSelectionButton: JQuery;
        constructor(container: JQuery, options: GridItemPickerEditorOptions);
        protected addInplaceButtons(): void;
        protected inplaceSearchClick(e: any): void;
        protected inplaceViewClick(e: any): void;
        private getDialogInstance;
        get value(): string;
        set value(val: string);
        get values(): string[];
        set values(val: string[]);
        get text(): string;
        set text(val: string);
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get_value(): string;
        set_value(value: string): void;
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        get_required(): boolean;
        set_required(value: boolean): void;
        private _selectedItem;
        selectedItemIncludeColumns: string[];
        get selectedItem(): any;
        selectedItems: any[];
        private _serviceUrl;
        get serviceUrl(): string;
        setValueAndText(value: any, text: any): void;
        protected getCascadeFromValue(parent: Serenity.Widget<any>): any;
        protected cascadeLink: Serenity.CascadedWidgetLink<Serenity.Widget<any>>;
        protected setCascadeFrom(value: string): void;
        protected get_cascadeFrom(): string;
        get cascadeFrom(): string;
        protected set_cascadeFrom(value: string): void;
        set cascadeFrom(value: string);
        protected get_cascadeField(): any;
        get cascadeField(): string;
        protected set_cascadeField(value: string): void;
        set cascadeField(value: string);
        protected get_cascadeValue(): any;
        get cascadeValue(): any;
        protected set_cascadeValue(value: any): void;
        set cascadeValue(value: any);
        protected get_filterField(): string;
        get filterField(): string;
        protected set_filterField(value: string): void;
        set filterField(value: string);
        protected get_filterValue(): any;
        get filterValue(): any;
        protected set_filterValue(value: any): void;
        set filterValue(value: any);
        protected updateItems(): void;
    }
    interface GridItemPickerEditorOptions extends Serenity.Select2FilterOptions {
        gridType: any;
        nameFieldInThisRow?: string;
        serviceUrl?: string;
        rowType?: string;
        idFieldInGridRow?: string;
        nameFieldInGridRow?: string;
        inplaceView?: boolean;
        multiple?: boolean;
        preSelectedKeys?: any[];
        filteringCriteria?: any;
        customPrams?: any;
        dialogType?: any;
        cascadeFrom?: string;
        cascadeField?: string;
        cascadeValue?: any;
        filterField?: string;
        filterValue?: any;
    }
}
declare namespace AS {
    class InlineImageFormatter implements Slick.Formatter, Serenity.IInitializeColumn {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
        fileProperty: string;
        thumb: boolean;
        defaultImage: string;
        maxHeight: string;
        maxWidth: string;
    }
}
declare namespace AS {
    class InlineMultipleImageFormatter implements Slick.Formatter, Serenity.IInitializeColumn {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
        fileProperty: string;
        thumb: boolean;
        inlineUpload: boolean;
        defaultImage: string;
        maxHeight: string;
        maxWidth: string;
    }
}
declare namespace AS {
    class MonthYearFormatter implements Slick.Formatter {
        static format(val: string): string;
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace AS {
    class YesNoColoredFormatter implements Slick.Formatter {
        static format(val: any): string;
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace AS {
    class YesNoFormatter implements Slick.Formatter {
        static format(val: any): string;
        format(ctx: Slick.FormatterContext): string;
    }
}
declare var Vue: any;
declare namespace AS {
    class CardViewMixin<TItem> {
        private options;
        private dataGrid;
        private getId;
        private vm;
        private cardContainer;
        viewType: ('list' | 'card');
        constructor(options: CardViewMixinOptions<TItem>);
        switchView(viewType: ('grid' | 'card')): void;
        updateCardItems(): void;
        resizeCardView(): void;
    }
    interface CardViewMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
        containerTemplate?: string;
        itemTemplate?: string;
        methods?: any;
        itemCssClass?: string;
        defaultViewType?: ('list' | 'card');
        itemsCssStyle?: string;
        itemCssStyle?: string;
    }
}
declare namespace AS {
    /**
     * A mixin that can be applied to a DataGrid for excel style filtering functionality
     */
    class HeaderFiltersMixin<TItem> {
        private options;
        private dataGrid;
        constructor(options: HeaderFiltersMixinOptions<TItem>);
    }
    interface HeaderFiltersMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
    }
}
declare namespace AS {
    /**
     * A mixin that can be applied to a DataGrid for tree functionality
     */
    class TreeGridMixin<TItem> {
        private options;
        private dataGrid;
        private getId;
        constructor(options: TreeGridMixinOptions<TItem>);
        /**
         * Expands / collapses all rows in a grid automatically
         */
        toggleAll(): void;
        expandAll(): void;
        collapsedAll(): void;
        /**
         * Reorders a set of items so that parents comes before their children.
         * This method is required for proper tree ordering, as it is not so easy to perform with SQL.
         * @param items list of items to be ordered
         * @param getId a delegate to get ID of a record (must return same ID with grid identity field)
         * @param getParentId a delegate to get parent ID of a record
         */
        static applyTreeOrdering<TItem>(items: TItem[], getId: (item: TItem) => any, getParentId: (item: TItem) => any): TItem[];
        static filterById<TItem>(item: TItem, view: Slick.RemoteView<TItem>, idProperty: any, getParentId: (x: TItem) => any): boolean;
        static treeToggle<TItem>(getView: () => Slick.RemoteView<TItem>, getId: (x: TItem) => any, formatter: Slick.Format): Slick.Format;
        static toggleClick<TItem>(e: JQueryEventObject, row: number, cell: number, view: Slick.RemoteView<TItem>, getId: (x: TItem) => any): void;
    }
    interface TreeGridMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
        idField?: string;
        getParentId: (item: TItem) => any;
        toggleField: string;
        initialCollapse?: () => boolean;
    }
}
declare namespace AS {
    class MultiEditDialog extends Serenity.TemplatedDialog<any> {
        private filterPanel;
        constructor();
        get_filterPanel(): MultiEditPanel;
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace AS {
    interface MultiEditLine {
        field?: string;
        operator?: string;
        isOr?: boolean;
        leftParen?: boolean;
        rightParen?: boolean;
        validationError?: string;
        criteria?: any[];
        displayText?: string;
        state?: any;
    }
}
declare namespace AS {
    class MultiEditWidgetBase<TOptions> extends Serenity.TemplatedWidget<TOptions> {
        private store;
        private onMultiEditStoreChanged;
        constructor(div: JQuery, opt?: TOptions);
        destroy(): void;
        protected filterStoreChanged(): void;
        get_store(): MultiEditStore;
        set_store(value: MultiEditStore): void;
    }
}
declare namespace AS {
    class MultiEditPanel extends MultiEditWidgetBase<any> {
        private rowsDiv;
        constructor(div: JQuery);
        private showInitialLine;
        get_showInitialLine(): boolean;
        set_showInitialLine(value: boolean): void;
        protected filterStoreChanged(): void;
        private updateStoreOnReset;
        get_updateStoreOnReset(): boolean;
        set_updateStoreOnReset(value: boolean): void;
        protected getTemplate(): string;
        protected initButtons(): void;
        get_hasErrors(): boolean;
        protected addButtonClick(e: JQueryEventObject): void;
        protected resetButtonClick(e: JQueryEventObject): void;
        protected findEmptyRow(): JQuery;
        protected addEmptyRow(popupField: boolean): JQuery;
        protected onRowFieldChange(e: JQueryEventObject): void;
        protected rowFieldChange(row: JQuery): void;
        protected removeMultiEditing(row: JQuery): void;
        protected getFieldFor(row: JQuery): Serenity.PropertyItem;
        protected getMultiEditingFor(row: JQuery): IMultiEditing;
        protected deleteRowClick(e: JQueryEventObject): void;
        protected updateButtons(): void;
    }
}
declare namespace AS {
    class MultiEditStore {
        constructor(fields: Serenity.PropertyItem[]);
        static getCriteriaFor(items: MultiEditLine[]): any[];
        static getDisplayTextFor(items: MultiEditLine[]): string;
        private changed;
        private displayText;
        private fields;
        private fieldByName;
        private items;
        get_fields(): Serenity.PropertyItem[];
        get_fieldByName(): Q.Dictionary<Serenity.PropertyItem>;
        get_items(): MultiEditLine[];
        raiseChanged(): void;
        add_changed(value: (e: JQueryEventObject, a: any) => void): void;
        remove_changed(value: (e: JQueryEventObject, a: any) => void): void;
        get_activeCriteria(): any[];
        get_displayText(): string;
    }
}
declare namespace AS {
    interface IMultiEditing {
        createEditor(): void;
        getCriteria(): CriteriaWithText;
        getOperators(): Serenity.FilterOperator[];
        loadState(state: any): void;
        saveState(): any;
        get_field(): Serenity.PropertyItem;
        set_field(value: Serenity.PropertyItem): void;
        get_container(): JQuery;
        set_container(value: JQuery): void;
        get_operator(): Serenity.FilterOperator;
        set_operator(value: Serenity.FilterOperator): void;
    }
    class IMultiEditing {
    }
    interface CriteriaWithText {
        criteria?: any[];
        displayText?: string;
    }
    abstract class BaseMultiEditing implements IMultiEditing, Serenity.IQuickFiltering {
        private field;
        get_field(): Serenity.PropertyItem;
        set_field(value: Serenity.PropertyItem): void;
        private container;
        get_container(): JQuery;
        set_container(value: JQuery): void;
        private operator;
        get_operator(): Serenity.FilterOperator;
        set_operator(value: Serenity.FilterOperator): void;
        abstract getOperators(): Serenity.FilterOperator[];
        protected appendNullableOperators(list: Serenity.FilterOperator[]): Serenity.FilterOperator[];
        protected appendComparisonOperators(list: Serenity.FilterOperator[]): Serenity.FilterOperator[];
        protected isNullable(): boolean;
        createEditor(): void;
        protected operatorFormat(op: Serenity.FilterOperator): any;
        protected getTitle(field: Serenity.PropertyItem): any;
        protected displayText(op: Serenity.FilterOperator, values?: any[]): string;
        protected getCriteriaField(): string;
        getCriteria(): CriteriaWithText;
        loadState(state: any): void;
        saveState(): any;
        protected argumentNull(): Q.ArgumentNullException;
        validateEditorValue(value: string): string;
        getEditorValue(): string;
        getEditorText(): any;
        initQuickFilter(filter: Serenity.QuickFilter<Serenity.Widget<any>, any>): void;
    }
    abstract class BaseEditorMultiEditing<TEditor extends Serenity.Widget<any>> extends BaseMultiEditing {
        editorType: any;
        constructor(editorType: any);
        protected useEditor(): boolean;
        protected editor: TEditor;
        createEditor(): void;
        protected useIdField(): boolean;
        getCriteriaField(): string;
        getEditorOptions(): {};
        loadState(state: any): void;
        saveState(): any;
        getEditorValue(): any;
        initQuickFilter(filter: Serenity.QuickFilter<Serenity.Widget<any>, any>): void;
    }
    class DateMultiEditing extends BaseEditorMultiEditing<Serenity.DateEditor> {
        constructor();
        getOperators(): Serenity.FilterOperator[];
    }
    class BooleanMultiEditing extends BaseMultiEditing {
        getOperators(): Serenity.FilterOperator[];
    }
    class DateTimeMultiEditing extends BaseEditorMultiEditing<Serenity.DateEditor> {
        constructor();
        getOperators(): Serenity.FilterOperator[];
        getCriteria(): CriteriaWithText;
    }
    class DecimalMultiEditing extends BaseEditorMultiEditing<Serenity.DecimalEditor> {
        constructor();
        getOperators(): Serenity.FilterOperator[];
    }
    class EditorMultiEditing extends BaseEditorMultiEditing<Serenity.Widget<any>> {
        constructor();
        editorType: string;
        useRelative: boolean;
        useLike: boolean;
        getOperators(): Serenity.FilterOperator[];
        protected useEditor(): boolean;
        getEditorOptions(): {};
        createEditor(): void;
        protected useIdField(): boolean;
        initQuickFilter(filter: Serenity.QuickFilter<Serenity.Widget<any>, any>): void;
    }
    class EnumMultiEditing extends BaseEditorMultiEditing<Serenity.EnumEditor> {
        constructor();
        getOperators(): Serenity.FilterOperator[];
    }
    class IntegerMultiEditing extends BaseEditorMultiEditing<Serenity.IntegerEditor> {
        constructor();
        getOperators(): Serenity.FilterOperator[];
    }
    class LookupMultiEditing extends BaseEditorMultiEditing<Serenity.LookupEditor> {
        constructor();
        getOperators(): Serenity.FilterOperator[];
        protected useEditor(): boolean;
        protected useIdField(): boolean;
        getEditorText(): string;
    }
    class StringMultiEditing extends BaseMultiEditing {
        getOperators(): Serenity.FilterOperator[];
        validateEditorValue(value: string): string;
    }
    namespace MultiEditingTypeRegistry {
        function get(key: string): Function;
    }
}
declare namespace AS {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace AS {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare namespace Slicks {
    interface RemoteView<TEntity> {
        getGroups(): Slick.Group<TEntity>[];
        getGrouping(): Slick.GroupInfo<TEntity>[];
    }
}
declare namespace AS {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare namespace AS.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace AS {
    enum TRTYType {
        CashPurchase = 1,
        Purchase = 2,
        TransferTO = 3,
        CashReturn = 5,
        ReturnSales = 6,
        CashSales = 11,
        Sales = 12,
        TransferIN = 13,
        InventoryCorrupted = 15,
        CashRestore = 16,
        RestorePurch = 17,
        CashPayed = 21,
        CashReceive = 22,
        AddInventory = 33,
        RemoveInventory = 42,
        BGNBAL = 100,
        Entre = 403,
        AccountNotify = 404
    }
    enum KeyCode {
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        Tab = 9,
        Enter = 13,
        Shift = 16,
        Alt = 18,
        CapsLock = 20,
        Escape = 27,
        Space = 32,
        Delete = 46,
        End = 35,
        ContextMenu = 93
    }
}
declare namespace ALgorithmPro {
    class UserLocalStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, value: string): void;
    }
}
declare function loadScriptAsync(url: any, callback: any): void;
declare function loadScript(url: any): void;
declare function usingVuejs(): void;
declare function includeBootstrapColorPickerCss(): void;
declare function usingBootstrapColorPicker(): void;
declare function includeJqueryUITimepickerAddonCss(): void;
declare function usingJqueryUITimepickerAddon(): void;
declare function usingBabylonjs(): void;
declare function usingChartjs(): void;
declare function includeCustomMarkerCss(): void;
declare function usingCustomMarker(): void;
declare function includeGoogleMap(callback?: Function, callbackFullName?: string): void;
declare function includeMarkerWithLabel(): void;
declare function includeVisCss(): void;
declare function usingVisjs(): void;
declare function usingJsonDiffPatch(): void;
declare function usingSlickGridEditors(): void;
declare function usingSlickAutoColumnSize(): void;
declare function usingSlickHeaderFilters(): void;
declare namespace ALgorithmPro.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace ALgorithmPro.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace ALgorithmPro.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ALgorithmPro.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace ALgorithmPro.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace ALgorithmPro.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace ALgorithmPro.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace ALgorithmPro.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace ALgorithmPro.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace ALgorithmPro.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace ALgorithmPro.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace ALgorithmPro.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace ALgorithmPro.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace ALgorithmPro.LanguageList {
    function getValue(): string[][];
}
declare namespace ALgorithmPro.ScriptInitialization {
}
declare namespace ALgorithmPro {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace ALgorithmPro.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace ALgorithmPro.Common {
    class CustomSliderRevealOptions {
        grid: Serenity.DataGrid<any, any>;
        dlg: Serenity.EntityDialog<any, any>;
        onDataChangeCallback?: () => void;
        sliderWidth?: any;
        entityOrId?: any;
    }
    class CustomSlider extends Serenity.TemplatedWidget<CustomSliderRevealOptions> {
        private slider;
        constructor(container: JQuery, opt?: CustomSliderRevealOptions);
        handleEditItem(): void;
        loadByIdAndOpenSlider(id: any): void;
        loadNewAndOpenSlider(): void;
        private injectDialogIntoPanel;
        getTemplate(): string;
    }
}
declare namespace ALgorithmPro.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace ALgorithmPro.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace ALgorithmPro.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace ALgorithmPro {
    class MySliderRevealOptions {
        initDialog: () => Serenity.EntityDialog<any, any>;
        onDataChangeCallback?: () => void;
        sliderWidth?: any;
        entityOrId?: any;
        grid?: Serenity.DataGrid<any, any>;
        showNextPreviousButtons?: boolean;
    }
    class MySlider extends Serenity.TemplatedWidget<MySliderRevealOptions> {
        private slider;
        private overlayDiv;
        private dlg;
        private btnPreviousRecord;
        private btnNextRecord;
        constructor(container: JQuery, opt?: MySliderRevealOptions);
        private backToPreviousPage;
        private goToNextPage;
        handleEditItem(): void;
        loadByIdAndOpenSlider(id: any): void;
        loadNewAndOpenSlider(): void;
        private convertJqueryDialogToSlider;
        private injectDialogIntoPanel;
        getTemplate(): string;
    }
}
declare namespace ALgorithmPro.Common {
    class MySliderRevealOptions {
        grid: Serenity.DataGrid<any, any>;
        dlg: Serenity.EntityDialog<any, any>;
        onDataChangeCallback?: () => void;
        sliderWidth?: any;
        entityOrId?: any;
    }
    class MySliderReveal extends Serenity.TemplatedWidget<MySliderRevealOptions> {
        private slider;
        constructor(container: JQuery, opt?: MySliderRevealOptions);
        handleEditItem(): void;
        loadByIdAndOpenSlider(id: any): void;
        loadNewAndOpenSlider(): void;
        private injectDialogIntoPanel;
        getTemplate(): string;
    }
}
declare namespace ALgorithmPro {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace ALgorithmPro.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace ALgorithmPro.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace ALgorithmPro.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace ALgorithmPro.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace ALgorithmPro.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace ALgorithmPro.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx' | 'vsrepx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
        Url: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
        Url: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
        function CreateReportButton(options: ReportButtonOptions): Serenity.ToolButton;
        function Execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace ALgorithmPro.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace ALgorithmPro.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace ALgorithmPro.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace ALgorithmPro.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ALgorithmPro {
    class ASTRDVIEWDialog extends Serenity.EntityDialog<ASTRDVIEWRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ASTRDVIEWForm;
    }
}
declare namespace ALgorithmPro {
    class ASTRDVIEWGrid extends SelectableEntityGrid<ASTRDVIEWRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ASTRDVIEWDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
