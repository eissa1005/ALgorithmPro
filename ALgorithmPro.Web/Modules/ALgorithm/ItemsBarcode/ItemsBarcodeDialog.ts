/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ItemsBarcodeDialog extends Common.GridEditorDialog<ItemsBarcodeRow> {
        protected getFormKey() { return ItemsBarcodeForm.formKey; }
        protected getLocalTextPrefix() { return ItemsBarcodeRow.localTextPrefix; }

        protected form: ItemsBarcodeForm;
        protected Itemsform = new ItemsForm("ALgorithmPro_ALgorithm_ItemsDialog8_");

        constructor() {
            super();

            this.form = new ItemsBarcodeForm(this.idPrefix);
            
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.GetPackges();
        }

        private GetPackges() {

            this.form.PKID.changeSelect2(e => {
                var PKID = Q.toId(this.form.PKID.value);
                if (PKID != null) {
                    PackageService.List({}, response => {
                    response.Entities.filter(x => x.PKID == PKID)
                        .forEach(e => {

                            this.form.Barcode.value = this.Itemsform.Item_CD.value;
                            this.form.Item_CD.value = this.Itemsform.Item_CD.value;
                            this.form.SPRC2.value   = this.Itemsform.SPRC2.value * e.PKCNT;
                            this.form.SPRC3.value   = this.Itemsform.SPRC3.value * e.PKCNT;
                            this.form.SPRC4.value   = this.Itemsform.SPRC4.value * e.PKCNT;
                            this.form.SPRC5.value   = this.Itemsform.SPRC5.value * e.PKCNT;
                            this.form.SPRC6.value   = this.Itemsform.SPRC6.value * e.PKCNT;
                            this.form.UCST.value    = this.Itemsform.UCOST.value * e.PKCNT;
                            this.form.PKName.value = e.PK_NM_AR;
                   })
                });
                }
            
            });
        }
      
    }
}
