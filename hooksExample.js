/* eslint-disable no-useless-constructor */
import { LightningElement } from 'lwc';

export default class HooksExample extends LightningElement {
    name = 'Sameer'
    constructor(){
        super();
        console.log('Inside Constructor');
        this.name = this.name+' Syed';
    }

    connectedCallback(){
        console.log('Inside connectedCallback');
    }

    disconnectedCallback(){
        console.log('Inside disconnectedCallback');
    }

    renderedCallback(){
        console.log('Inside renderedCallback');
    }

    /*
    render(){
        return;
    }
    */
   errorCallback(error,stack){
    console.error(error);
   }
}
