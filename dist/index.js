(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueCollapse = factory());
}(this, (function () { 'use strict';

  var morecollapseId = 0;
    var index = {
  render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrap-collabsible"},[_vm._l((_vm.displayList),function(item,index){return _c('div',{key:index,staticClass:"init-item"},[_vm._t("default",null,null,item)],2)}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checked),expression:"checked"}],staticClass:"toggle",attrs:{"id":_vm.id,"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.checked)?_vm._i(_vm.checked,null)>-1:(_vm.checked)},on:{"change":function($event){var $$a=_vm.checked,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checked=$$a.concat([$$v]));}else{$$i>-1&&(_vm.checked=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.checked=$$c;}}}}),_vm._v(" "),_c('div',{staticClass:"collapsible-content"},[_c('div',{staticClass:"content-inner"},_vm._l((_vm.moreList),function(item,index){return _c('div',{key:index,staticClass:"more-item"},[_vm._t("default",null,null,item)],2)}))]),_vm._v(" "),(_vm.moreList.length > 0)?_c('label',{staticClass:"lbl-toggle",attrs:{"for":_vm.id}},[_vm._v(_vm._s(_vm.text))]):_vm._e()],2)},
  staticRenderFns: [],
      name: 'vue-collapse',
      props: {
        list: Array,
        initcount: {
          default: 6,
          type: Number
        }
      },
      data: function () {
        return {
          id: ("morecollapse_" + (++morecollapseId)),
          checked: false
        }
      },
      computed: {
        displayList: function () {
          if (!this.list) { return [] }
          return this.list.slice(0, this.initcount)
        },
        moreList: function () {
          if (!this.list) { return [] }
          return this.list.slice(this.initcount)
        },
        text: function () {
          if (this.checked) { return 'Pack Up' }
          return 'More'
        }
      }
    };

  return index;

})));
