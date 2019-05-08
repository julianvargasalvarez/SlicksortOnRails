import Vue from 'vue/dist/vue.esm'
import { ContainerMixin, ElementMixin } from 'vue-slicksort';

const SortableList = {
  mixins: [ContainerMixin],
  template: `
    <ul class="list">
      <slot />
    </ul>
  `
};

const SortableItem = {
  mixins: [ElementMixin],
  props: ['item'],
  template: `
    <li class="list-item">{{item.title}}</li>
  `
};

const ExampleVue = {
  name: 'Example',
  template: `
    <div class="root">
      <SortableList v-model="items" axis="xy" @input=postNewOrder>
        <SortableItem v-for="(item, index) in items" :index="index" :key="index" :item="item" />
      </SortableList>
    </div>
  `,
  components: {
    SortableItem,
    SortableList
  },
  data() {
    return {
      items: gon.slides,
      postNewOrder: (list) => { console.log(list) }
    };
  }
};


document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#main',
    render: h => h(ExampleVue)
  });
})
