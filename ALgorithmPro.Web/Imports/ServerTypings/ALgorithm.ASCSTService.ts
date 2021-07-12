namespace ALgorithmPro.ALgorithm {
    export namespace ASCSTService {
        export const baseUrl = 'ALgorithm/ASCST';

        export declare function Create(request: Serenity.SaveRequest<ASCSTRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ASCSTRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ASCSTRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ASCSTRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ALgorithm/ASCST/Create",
            Update = "ALgorithm/ASCST/Update",
            Delete = "ALgorithm/ASCST/Delete",
            GetNextNumber = "ALgorithm/ASCST/GetNextNumber",
            Retrieve = "ALgorithm/ASCST/Retrieve",
            List = "ALgorithm/ASCST/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'GetNextNumber', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ASCSTService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
