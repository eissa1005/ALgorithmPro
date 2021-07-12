namespace ALgorithmPro.ALgorithm {
    export namespace ItemsLocService {
        export const baseUrl = 'ALgorithm/ItemsLoc';

        export declare function Create(request: Serenity.SaveRequest<ItemsLocRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ItemsLocRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemsLocRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemsLocRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ValidateUniqueConstraint(request: Web.Modules.ALgorithm.ItemsLoc.ItemsValidationRequest, onSuccess?: (response: Web.Modules.ALgorithm.ItemsLoc.ItemsResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ALgorithm/ItemsLoc/Create",
            Update = "ALgorithm/ItemsLoc/Update",
            Delete = "ALgorithm/ItemsLoc/Delete",
            Retrieve = "ALgorithm/ItemsLoc/Retrieve",
            List = "ALgorithm/ItemsLoc/List",
            ValidateUniqueConstraint = "ALgorithm/ItemsLoc/ValidateUniqueConstraint"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ValidateUniqueConstraint'
        ].forEach(x => {
            (<any>ItemsLocService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
