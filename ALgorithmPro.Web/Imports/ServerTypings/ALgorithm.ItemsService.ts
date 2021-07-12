namespace ALgorithmPro.ALgorithm {
    export namespace ItemsService {
        export const baseUrl = 'ALgorithm/Items';

        export declare function Create(request: Serenity.SaveRequest<ItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ALgorithm/Items/Create",
            Update = "ALgorithm/Items/Update",
            Delete = "ALgorithm/Items/Delete",
            GetNextNumber = "ALgorithm/Items/GetNextNumber",
            Retrieve = "ALgorithm/Items/Retrieve",
            List = "ALgorithm/Items/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'GetNextNumber', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ItemsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
