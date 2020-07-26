import { mount } from '@vue/test-utils';
import TicketVue from '../index.vue';

test('renders correctly', () => {
  const wrapper = mount(TicketVue, {
    slots: {
      default: 'Hey, it is a child component content'
    }
  });
  expect(wrapper).toMatchSnapshot();
});
