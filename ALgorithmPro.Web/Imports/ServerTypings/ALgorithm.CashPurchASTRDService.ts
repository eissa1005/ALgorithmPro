namespace ALgorithmPro.ALgorithm {
    export namespace CashPurchASTRDService {
        export const baseUrl = 'ALgorithm/CashPurchASTRD';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashPurchASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashPurchASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "ALgorithm/CashPurchASTRD/Retrieve",
            List = "ALgorithm/CashPurchASTRD/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CashPurchASTRDService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
