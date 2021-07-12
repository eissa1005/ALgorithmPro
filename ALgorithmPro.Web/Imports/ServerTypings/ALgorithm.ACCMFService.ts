namespace ALgorithmPro.ALgorithm {
    export namespace ACCMFService {
        export const baseUrl = 'ALgorithm/ACCMF';

        export declare function Create(request: Serenity.SaveRequest<ACCMFRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ACCMFRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ACCMFRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ACCMFRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ALgorithm/ACCMF/Create",
            Update = "ALgorithm/ACCMF/Update",
            GetNextNumber = "ALgorithm/ACCMF/GetNextNumber",
            Delete = "ALgorithm/ACCMF/Delete",
            Retrieve = "ALgorithm/ACCMF/Retrieve",
            List = "ALgorithm/ACCMF/List"
        }

        [
            'Create', 
            'Update', 
            'GetNextNumber', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ACCMFService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
