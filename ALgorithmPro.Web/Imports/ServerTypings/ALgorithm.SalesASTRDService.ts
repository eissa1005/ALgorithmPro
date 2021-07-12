namespace ALgorithmPro.ALgorithm {
    export namespace SalesASTRDService {
        export const baseUrl = 'ALgorithm/SalesASTRD';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "ALgorithm/SalesASTRD/Retrieve",
            List = "ALgorithm/SalesASTRD/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SalesASTRDService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
