import Vue from 'vue'
import wrap from "@vue/web-component-wrapper";
import ComponentChild from './components/ComponentChild.vue'

const CustomElement = wrap(Vue, ComponentChild);
window.customElements.define("component-child", CustomElement);