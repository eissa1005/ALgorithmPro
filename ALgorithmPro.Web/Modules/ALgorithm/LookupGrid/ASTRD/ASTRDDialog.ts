
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ASTRDDialog extends Serenity.TemplatedDialog<any> {
        protected getFormKey() { return ASTRDVIEWForm.formKey; }
        protected getIdProperty() { return ASTRDVIEWRow.idProperty; }
        protected getLocalTextPrefix() { return ASTRDVIEWRow.localTextPrefix; }
        protected getNameProperty() { return ASTRDVIEWRow.nameProperty; }
        protected getService() { return ASTRDVIEWService.baseUrl; }

        protected form = new ASTRDVIEWForm(this.idPrefix);
        private ASTRDGrid: ASTRDGrid;
        public static SelectTRTY: AS.TRTYType;
        public static ReferenceNumer: number;

        constructor(SelectTRTY, ReferenceNumer) {
            super();

            ASTRDDialog.SelectTRTY = SelectTRTY;
            ASTRDDialog.ReferenceNumer = ReferenceNumer;
            this.ASTRDGrid = new ASTRDGrid(this.byId('ASTRDGrid'));
          
        }
       
    }
}


