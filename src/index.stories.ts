import { storiesOf } from '@storybook/vue';
import TicketVue from './index';

storiesOf('MyComponent', module)
  .add('Default', () => ({
    components: { TicketVue },
    template: '<ticket-vue>Hey! It is your Vue component.</ticket-vue>'
  }));
