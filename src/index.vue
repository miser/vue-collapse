<style lang="scss">
  .wrap-collabsible {
    input[type='checkbox'] {
      display: none;
    }
    .lbl-toggle {
      display: block;
      font-size: 15px;
      text-transform: uppercase;
      text-align: center;
      padding: 10px;
      cursor: pointer;
      color: #40a9ff;
      &::before {
        content: ' ';
        display: inline-block;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid currentColor;
        vertical-align: middle;
        margin-right: 10px;
        transform: translateY(-2px);
        transition: transform 0.25s ease-out;
      }
    }
    .collapsible-content {
      height: 0;
      overflow: hidden;
      transition: max-height 1s ease-in-out;
      .content-inner {
      }
    }
    .toggle:checked + .collapsible-content {
      height: auto;
    }
    .toggle:checked ~ .lbl-toggle::before {
      transform: rotate(-90deg);
    }
  }
</style>
<template>
	<div class="wrap-collabsible">
    <div v-for="(item, index) in displayList" class="init-item" :key="index">
      <slot v-bind="item"></slot>
    </div>
    <input :id="id" class="toggle" type="checkbox" v-model="checked" />
    <div class="collapsible-content">
      <div class="content-inner">
          <div v-for="(item, index) in moreList" class="more-item" :key="index">
            <slot v-bind="item"></slot>
          </div>
      </div>
    </div>
    <label v-if="moreList.length > 0" :for="id" class="lbl-toggle">{{ text }}</label>
  </div>
</template>
<script>
  let morecollapseId = 0
  export default {
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
        id: `morecollapse_${++morecollapseId}`,
        checked: false
      }
    },
    computed: {
      displayList: function () {
        if (!this.list) return []
        return this.list.slice(0, this.initcount)
      },
      moreList: function () {
        if (!this.list) return []
        return this.list.slice(this.initcount)
      },
      text: function () {
        if (this.checked) return 'Pack Up'
        return 'More'
      }
    }
  }
</script>