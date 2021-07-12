namespace ALgorithmPro.ALgorithm {
    export namespace ASCURRATService {
        export const baseUrl = 'ALgorithm/ASCURRAT';

        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<Model.ASCURRATRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "ALgorithm/ASCURRAT/List"
        }

        [
            'List'
        ].forEach(x => {
            (<any>ASCURRATService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
