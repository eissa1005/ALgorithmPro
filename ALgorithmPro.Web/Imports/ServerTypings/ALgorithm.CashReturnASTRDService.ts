namespace ALgorithmPro.ALgorithm {
    export namespace CashReturnASTRDService {
        export const baseUrl = 'ALgorithm/CashReturnASTRD';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashReturnASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashReturnASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "ALgorithm/CashReturnASTRD/Retrieve",
            List = "ALgorithm/CashReturnASTRD/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CashReturnASTRDService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
