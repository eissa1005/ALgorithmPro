namespace ALgorithmPro.ALgorithm {
    export namespace TransferInASTRDService {
        export const baseUrl = 'ALgorithm/TransferInASTRD';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransferInASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransferInASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "ALgorithm/TransferInASTRD/Retrieve",
            List = "ALgorithm/TransferInASTRD/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TransferInASTRDService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
