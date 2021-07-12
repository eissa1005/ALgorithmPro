/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace ALgorithmPro.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('ALgorithmPro');
    Q.Config.rootNamespaces.push('AS');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
    Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
 
    Serenity.DataGrid.defaultPersistanceStorage = window.sessionStorage;

    if ($.fn['colorbox']) {
        $.fn['colorbox'].settings.maxWidth = "95%";
        $.fn['colorbox'].settings.maxHeight = "95%";
    }

    window.onerror = Q.ErrorHandling.runtimeErrorHandler;
}