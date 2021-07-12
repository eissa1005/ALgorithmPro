﻿/// <reference path="../Bases/DialogBase.ts" />
namespace AS {

    @Serenity.Decorators.registerClass()
    export class EditorDialogBase<TEntity> extends DialogBase<TEntity, any> {

        protected getASDialogOptions(): ExtDialogOptions { return Q.deepClone(AS.DefaultEditorDialogOptions); }

        protected getIdProperty() { return "__id"; }

        public onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>,
            callback: (response: Serenity.SaveResponse) => void) => void;

        public onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>,
            callback: (response: Serenity.DeleteResponse) => void) => void;

        public destroy() {
            this.onSave = null;
            this.onDelete = null;
            super.destroy();
        }

        protected updateInterface() {
            if (this.parentEditor && this.parentEditor.isReadOnly == true) {
                this.isReadOnly = true
            }
            super.updateInterface();
            this.saveAndCloseButton.find('.button-inner').text(this.isNew() ? (Q.tryGetText('Controls.AddButton') || 'Add') : (Q.tryGetText('Controls.ApplyButton') || 'Apply'));
            // apply changes button doesn't work properly with in-memory grids yet
            if (this.applyChangesButton) {
                this.applyChangesButton.hide();
            }

        }

        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>,
            callback: (response: Serenity.SaveResponse) => void): void {
            this.onSave && this.onSave(options, callback);
        }

        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>,
            callback: (response: Serenity.DeleteResponse) => void): void {
            this.onDelete && this.onDelete(options, callback);
        }

        parentEditor: GridEditorBase<TEntity>;

    }
}