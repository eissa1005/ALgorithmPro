namespace ALgorithmPro.ALgorithm {
    export namespace ItemSubGroupsService {
        export const baseUrl = 'ALgorithm/ItemSubGroups';

        export declare function Create(request: Serenity.SaveRequest<ItemSubGroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ItemSubGroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemSubGroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemSubGroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ALgorithm/ItemSubGroups/Create",
            Update = "ALgorithm/ItemSubGroups/Update",
            Delete = "ALgorithm/ItemSubGroups/Delete",
            GetNextNumber = "ALgorithm/ItemSubGroups/GetNextNumber",
            Retrieve = "ALgorithm/ItemSubGroups/Retrieve",
            List = "ALgorithm/ItemSubGroups/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'GetNextNumber', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ItemSubGroupsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
