/// <reference path="./LiteEvents.ts" />
namespace ALgorithmPro {

    export interface IPrefixedEvent {
        Details: any;
    }

    export class PrefixedEvent {

        private data = [];
        private fireEvent = new LiteEvents<PrefixedEvent, IPrefixedEvent>();

        private readonly onPrefixChanged = new LiteEvents<PrefixedEvent, IPrefixedEvent>();

        public get PrefixChanged() { return this.onPrefixChanged.expose(); }


        public OnFormChange(handler: IEventHandler<PrefixedEvent, IPrefixedEvent>) {
           
            this.fireEvent.on(handler);
            return this;
        }
        public increment() {
           
            this.fireEvent.trigger(this, {
                Details: this.data
            });
            return this;
        }
        
    }
    
}