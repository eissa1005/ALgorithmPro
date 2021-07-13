///<reference path="../../../Model/ASTRHVIEW/ASTRHVIEWDialog.ts"/>

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ASTRHDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return ALgorithmPro.Model.ASTRHVIEWForm.formKey; }
        protected getIdProperty() { return ALgorithmPro.Model.ASTRHVIEWRow.idProperty; }
        protected getLocalTextPrefix() { return ALgorithmPro.Model.ASTRHVIEWRow.localTextPrefix; }
        protected getNameProperty() { return ALgorithmPro.Model.ASTRHVIEWRow.nameProperty; }
        protected getService() { return ALgorithmPro.Model.ASTRHVIEWService.baseUrl; }

        protected form = new ALgorithmPro.Model.ASTRHVIEWForm(this.idPrefix);
        private ASTRHGrid: ASTRHGrid;
        public static SelectTRTY: AS.TRTYType;

        constructor(SelectTRTY) {
            super();

            ASTRHDialog.SelectTRTY = SelectTRTY;
            this.ASTRHGrid = new ASTRHGrid(this.byId('ASTRHGrid'));
          
        }
       
    }
}


