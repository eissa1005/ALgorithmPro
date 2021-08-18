namespace ALgorithmPro.ALgorithm {
    export namespace TransferToASTRDService {
        export const baseUrl = 'ALgorithm/TransferToASTRD';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransferToASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransferToASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "ALgorithm/TransferToASTRD/Retrieve",
            List = "ALgorithm/TransferToASTRD/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TransferToASTRDService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
