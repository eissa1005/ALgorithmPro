namespace ALgorithmPro.ALgorithm {
    export namespace RestoreASTRHService {
        export const baseUrl = 'ALgorithm/RestoreASTRH';

        export declare function Create(request: Serenity.SaveRequest<RestoreASTRHRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<RestoreASTRHRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RestoreASTRHRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RestoreASTRHRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ALgorithm/RestoreASTRH/Create",
            Update = "ALgorithm/RestoreASTRH/Update",
            Delete = "ALgorithm/RestoreASTRH/Delete",
            GetNextNumber = "ALgorithm/RestoreASTRH/GetNextNumber",
            Retrieve = "ALgorithm/RestoreASTRH/Retrieve",
            List = "ALgorithm/RestoreASTRH/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'GetNextNumber', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>RestoreASTRHService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
