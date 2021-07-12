namespace ALgorithmPro.Common {

    export class CustomSliderRevealOptions {
        grid: Serenity.DataGrid<any, any>;
        dlg: Serenity.EntityDialog<any, any>;
        onDataChangeCallback?: () => void;
        sliderWidth?: any;
        entityOrId?: any;
    }

    @Serenity.Decorators.registerClass()
    export class CustomSlider extends Serenity.TemplatedWidget<CustomSliderRevealOptions> {

        private slider: JQuery;

        constructor(container: JQuery, opt?: CustomSliderRevealOptions) {
            super(container, opt);

            let curStyle = this.options.grid.element.attr("style");

            if (Q.trimToNull(curStyle) == null) {
                this.options.grid.element.attr('style', 'display: block !important');
            }
            else {
                this.options.grid.element.attr('style', curStyle + 'display: block !important');
            }


            this.options.dlg.element.addClass("flex-layout");

            //let topHeight = $('header.main-header').height();
            this.slider = (this.byId("sliderContainer") as any).slideReveal({
                push: false,
                position: 'right',
                zIndex: 1100,
                overlay: true,
                autoEscape: true,
                //top: topHeight,
                width: Q.coalesce(this.options.sliderWidth, "50%"),
                trigger: this.byId("sliderCloseButton"),
                shown: (slider, trigger) => {
                    $(slider).css("right", "-10px");
                },
                hide: (slider, trigger) => {
                    try {
                        this.options.dlg.dialogClose();
                    } catch {

                    }
                }
            });

            this.options.dlg.element.bind('panelclose', () => {
                (this.slider as any).slideReveal('hide');
            });

            this.options.dlg.element.on("ondatachange", (x, data) => {
                this.options.onDataChangeCallback && this.options.onDataChangeCallback();
            });

            this.options.dlg.element.one('dialogclose panelclose', () => {

                let nbrRetry = 0;
                var self = this;

                (function reActiveGrid() {
                    if (nbrRetry >= 100) {
                        return;
                    }

                    setTimeout(function () {
                        nbrRetry++;

                        let grid = $(".s-DataGrid");

                        if (grid !== null && typeof grid !== 'undefined' && (grid as any).length !== 0) {

                            grid.removeClass('hidden')
                                .removeClass('panel-hidden')
                                .addClass('s-Panel')
                                .trigger('panelopen');
                        }
                        else {
                            reActiveGrid();
                        }
                    }, 100);
                })();
            });
        }

        public handleEditItem() {
            if (typeof this.options.entityOrId == "string") {
                this.loadByIdAndOpenSlider(this.options.entityOrId);
                Q.Router.dialog(this.element, this.options.dlg.element, () => 'edit/' + this.options.entityOrId.toString());
            }
            else {
                Q.Router.dialog(this.element, this.options.dlg.element, () => "new");
                this.loadNewAndOpenSlider();
            }
        }

        public loadByIdAndOpenSlider(id: any) {

            this.options.dlg.loadById(id,
                response => window.setTimeout(() => {

                    this.options.dlg.dialogOpen(true);
                    this.slider.parent().removeClass("hidden").removeClass("panel-hidden");
                    this.options.dlg.element.find(".panel-titlebar").remove();

                    this.options.dlg.element.appendTo(this.byId("panelContainer"));

                }, 0),
                () => {
                    try {
                        (this.slider as any).slideReveal('close');
                    } catch {

                    }

                    if (!this.element.is(':visible')) {
                        this.element.remove();
                    }
                });

            this.injectDialogIntoPanel(id);
        }

        public loadNewAndOpenSlider() {

            this.options.dlg.loadNewAndOpenDialog(true);
            this.slider.parent().removeClass("hidden").removeClass("panel-hidden");
            this.options.dlg.element.find(".panel-titlebar").remove();
            this.options.dlg.element.find(".apply-changes-button").hide();

            this.options.dlg.element.appendTo(this.byId("panelContainer"));

            this.injectDialogIntoPanel();
        }

        private injectDialogIntoPanel(id?: any) {
            var nbrRetry = 0;

            var self = this;
            (function appendDialogIntoPanel() {
                setTimeout(function () {
                    nbrRetry++;

                    if (nbrRetry >= 100) {
                        return;
                    }

                    if (self.slider.find(".s-TemplatedDialog").length === 1) {

                        (self.slider as any).slideReveal('toggle');

                        //self.options.grid.element.removeClass('hidden').removeClass('panel-hidden');
                    }
                    else {
                        appendDialogIntoPanel();
                    }

                }, 100);
            })();

        }

        getTemplate() {
            return `<div id="~_sliderContainer" class="slider-container" style="z-index: 9999; background-color:#fff; position:relative">
                        <div id="~_sliderCloseButton" style="width:25px; height: 25px; position: absolute; top: 10px; right: 13px;color: red; cursor: pointer">
                        <i class="fa fa-lg fa-times" aria-hidden="true"></i>
                        </div>
                        <div id="~_panelContainer">
                        </div>
                    </div>`;
        }
    }
}