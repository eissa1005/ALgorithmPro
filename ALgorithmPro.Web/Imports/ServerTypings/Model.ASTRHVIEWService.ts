namespace ALgorithmPro.Model {
    export namespace ASTRHVIEWService {
        export const baseUrl = 'Model/ASTRHVIEW';

        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ASTRHVIEWRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "Model/ASTRHVIEW/List"
        }

        [
            'List'
        ].forEach(x => {
            (<any>ASTRHVIEWService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
