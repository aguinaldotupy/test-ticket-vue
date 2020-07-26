import { Vue, Component, Prop } from 'vue-property-decorator';

interface Auth {
  id: number,
  name: string,
}

@Component
class TicketVue extends Vue {
  @Prop({
    default: () => {
      return {}
    }
  }) private auth!: Auth

  // Vue.js component's lifecycle methods are available here as well as custom ones
  mounted() {
    console.debug(this.auth)
  }
}

export default TicketVue;
