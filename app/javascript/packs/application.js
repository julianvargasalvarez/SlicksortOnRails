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
      postNewOrder: (list) => {
        var xhr = new XMLHttpRequest();
        var url = "http://localhost:3000";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json.email + ", " + json.password);
            }
        };
        var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
        xhr.send(data);
        console.log(list)
      }
    };
  }
};


document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#main',
    render: h => h(ExampleVue)
  });
})
