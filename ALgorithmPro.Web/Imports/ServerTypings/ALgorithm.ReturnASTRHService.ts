namespace ALgorithmPro.ALgorithm {
    export namespace ReturnASTRHService {
        export const baseUrl = 'ALgorithm/ReturnASTRH';

        export declare function Create(request: Serenity.SaveRequest<ReturnASTRHRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ReturnASTRHRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReturnASTRHRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReturnASTRHRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ALgorithm/ReturnASTRH/Create",
            Update = "ALgorithm/ReturnASTRH/Update",
            Delete = "ALgorithm/ReturnASTRH/Delete",
            GetNextNumber = "ALgorithm/ReturnASTRH/GetNextNumber",
            Retrieve = "ALgorithm/ReturnASTRH/Retrieve",
            List = "ALgorithm/ReturnASTRH/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'GetNextNumber', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ReturnASTRHService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
