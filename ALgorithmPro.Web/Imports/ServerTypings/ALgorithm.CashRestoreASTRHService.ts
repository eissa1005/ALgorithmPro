namespace ALgorithmPro.ALgorithm {
    export namespace CashRestoreASTRHService {
        export const baseUrl = 'ALgorithm/CashRestoreASTRH';

        export declare function Create(request: Serenity.SaveRequest<CashRestoreASTRHRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CashRestoreASTRHRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashRestoreASTRHRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashRestoreASTRHRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ALgorithm/CashRestoreASTRH/Create",
            Update = "ALgorithm/CashRestoreASTRH/Update",
            Delete = "ALgorithm/CashRestoreASTRH/Delete",
            GetNextNumber = "ALgorithm/CashRestoreASTRH/GetNextNumber",
            Retrieve = "ALgorithm/CashRestoreASTRH/Retrieve",
            List = "ALgorithm/CashRestoreASTRH/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'GetNextNumber', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CashRestoreASTRHService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
