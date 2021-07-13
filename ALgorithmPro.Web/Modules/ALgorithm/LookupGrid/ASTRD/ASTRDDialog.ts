
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ASTRDDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return ALgorithmPro.Model.ASTRDVIEWForm.formKey; }
        protected getIdProperty() { return ALgorithmPro.Model.ASTRDVIEWRow.idProperty; }
        protected getLocalTextPrefix() { return ALgorithmPro.Model.ASTRDVIEWRow.localTextPrefix; }
        protected getNameProperty() { return ALgorithmPro.Model.ASTRDVIEWRow.nameProperty; }
        protected getService() { return ALgorithmPro.Model.ASTRDVIEWService.baseUrl; }

        protected form = new ALgorithmPro.Model.ASTRDVIEWForm(this.idPrefix);
        private ASTRDGrid: ALgorithmPro.Model.ASTRDVIEWGrid;
        public static SelectTRTY: AS.TRTYType;
        public static ReferenNumer: number;

        constructor(SelectTRTY,ReferenNumer) {
            super();

            ASTRDDialog.SelectTRTY = SelectTRTY;
            ASTRDDialog.ReferenNumer = ReferenNumer;
            this.ASTRDGrid = new ALgorithmPro.Model.ASTRDVIEWGrid(this.byId('ASTRDGrid'));
          
        }
       
    }
}


