import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';

import { HeaderComponent } from 'header-lib';

// export const env = 'Si';

storiesOf('Next-header', module)
  .add('Install', () => ({
    component: HeaderComponent,
    props: {},
  }))
  .add('Long page with fixed header', () => ({
    component: HeaderComponent
  }))
  .add('Long page with simple header', () => ({
    // component: HeaderComponent
    template: `<div class="next-header"></div>`
    // <next-header env="env" role="role" (refClicked)="onPress($event)"
    //   (helpSlot)="helpSlot($event)"
    //   (userName)="userName($event)"
    //   (logout)="logout($event)">
    //   <span help-slot>
    //       <i class="fas fa-question"></i>
    //   </span>
    //   <span userName>Mariia Zubkova</span>
    //   <span logout>
    //     <i class="fa fa-sign-out-alt"></i>
    //   </span>
    // </next-header>
    // `
  }))
  .add('Dev mode', () => ({
    component: HeaderComponent
  }))
  .add('Prod mode', () => ({
    component: HeaderComponent
  }));
  // .add('Long page with simple header', () => ({}));

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }))
  )
  .add(
    'with some emoji and action',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }))
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));

