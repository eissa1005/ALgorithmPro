/// <reference path="../LookupGrid/Items/ItemsLookupDialog.ts" />
namespace ALgorithmPro.ALgorithm {

    @Serenity.Decorators.registerClass()
    export class ItemsLocDialog extends Serenity.EntityDialog<ItemsLocRow, any> {
        protected getFormKey() { return ItemsLocForm.formKey; }
        protected getIdProperty() { return ItemsLocRow.idProperty; }
        protected getLocalTextPrefix() { return ItemsLocRow.localTextPrefix; }
        protected getNameProperty() { return ItemsLocRow.nameProperty; }
        protected getService() { return ItemsLocService.baseUrl; }
        protected getDeletePermission() { return ItemsLocRow.deletePermission; }
        protected getInsertPermission() { return ItemsLocRow.insertPermission; }
        protected getUpdatePermission() { return ItemsLocRow.updatePermission; }

        protected form = new ItemsLocForm(this.idPrefix);
        private ItemsGrid: JQuery;
        public static ValidNumbers: number = 0;

        constructor() {
            super();
           
            this.ItemsGrid = this.byId('ItemGrid');
            this.form.Item_Name_AR.change(() => {
                this.form.Item_Name_EN.value = this.form.Item_Name_AR.value;
            });

            
           
            // Event dblclick
            this.form.Item_CD.element.dblclick(() => {

                var dialog = new ItemsLookupDialog();
                dialog.dialogOpen();

            });
            // Event keydown
            this.form.Item_CD.element.keydown((e) => {
                if (e.keyCode == AS.KeyCode.F2) {
                    var dialog = new ItemsLookupDialog();
                    dialog.dialogOpen();
                }
            });


            this.form.Item_CD.addValidationRule(this.uniqueName, e => {

             
                ALgorithm.ItemsLocService.ValidateUniqueConstraint({
                    ItemCD: <any>this.form.Item_CD.value,
                    StoreID: <any>this.form.StoreID.value,
                }, response => {
                        if (response.Errors != null) {
                    return "This value has already been entered for this ItemCD."

                    }
                });
                    return null;
            });

            

            //this.form.Item_CD.change(() => {
            //    if (!Q.isEmptyOrNull(this.form.Item_CD.value))
            //    {
            //        ALgorithm.ItemsLocService.ValidateUniqueConstraint({
            //            ItemCD: <any>this.form.Item_CD.value,
            //        }, response => {
            //         if (response.Errors != null)
            //         {
            //             Q.alert("the Items is Already on Itemloc");
            //         }
            //        });
            //    }
            //});
        }
        

    }
}