namespace ALgorithmPro.ALgorithm {
    export namespace RestoreASTRDService {
        export const baseUrl = 'ALgorithm/RestoreASTRD';

        export declare function Update(request: Serenity.SaveRequest<RestoreASTRDRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RestoreASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RestoreASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Update = "ALgorithm/RestoreASTRD/Update",
            Retrieve = "ALgorithm/RestoreASTRD/Retrieve",
            List = "ALgorithm/RestoreASTRD/List"
        }

        [
            'Update', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>RestoreASTRDService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
