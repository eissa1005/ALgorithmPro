namespace ALgorithmPro.ALgorithm {
    export namespace ItemsBarcodeService {
        export const baseUrl = 'ALgorithm/ItemsBarcode';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemsBarcodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemsBarcodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "ALgorithm/ItemsBarcode/Retrieve",
            List = "ALgorithm/ItemsBarcode/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ItemsBarcodeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
