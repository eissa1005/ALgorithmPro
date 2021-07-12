namespace ALgorithmPro.ALgorithm {
    export namespace CashReturnASTRHService {
        export const baseUrl = 'ALgorithm/CashReturnASTRH';

        export declare function Create(request: Serenity.SaveRequest<CashReturnASTRHRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CashReturnASTRHRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashReturnASTRHRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashReturnASTRHRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ALgorithm/CashReturnASTRH/Create",
            Update = "ALgorithm/CashReturnASTRH/Update",
            Delete = "ALgorithm/CashReturnASTRH/Delete",
            GetNextNumber = "ALgorithm/CashReturnASTRH/GetNextNumber",
            Retrieve = "ALgorithm/CashReturnASTRH/Retrieve",
            List = "ALgorithm/CashReturnASTRH/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'GetNextNumber', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CashReturnASTRHService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
