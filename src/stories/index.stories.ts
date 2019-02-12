import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '@storybook/angular/demo';

// import * as longText from './long-text.md';


import { HeaderComponent } from 'header-lib';

const styles = `
  <style>
    .item \{
      cursor: pointer;
      margin: 3px;

      :hover {
          background-color: #fff;
          color: #0460A9;
      }
    }
  </style>
`;

storiesOf('Next-header', module)
  .addDecorator(
    moduleMetadata({
      declarations: [HeaderComponent],
    })
  )
  .add('Install', () => ({
    template: `
    ${styles}
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
    integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <next-header env="env" role="role" (refClicked)="onPress($event)"
      (helpSlot)="helpSlot($event)"
      (userName)="userName($event)"
      (logout)="logout($event)">
      <span helpSlot (click)="helpSlotClicked()" class="item">
          <i class="fas fa-question"></i>
      </span>
      <span userName (click)="userNameClicked()" class="item">Mariia Zubkova</span>
      <span logout (click)="logoutClicked()" class="item">
        <i class="fa fa-sign-out-alt"></i>
      </span>
    </next-header>
    `
  }))
  .add('Long page with fixed header', () => ({
    template: `
    <next-header env="env" role="role" (refClicked)="onPress($event)"
      (helpSlot)="helpSlot($event)"
      (userName)="userName($event)"
      (logout)="logout($event)">
      <span help-slot>
          <i class="fas fa-question"></i>
      </span>
      <span userName>Mariia Zubkova</span>
      <span logout>
        <i class="fa fa-sign-out-alt"></i>
      </span>
    </next-header>
    `
  }))
  .add('Long page with simple header', () => ({
    template: `
    <next-header env="env" role="role" (refClicked)="onPress($event)"
      (helpSlot)="helpSlot($event)"
      (userName)="userName($event)"
      (logout)="logout($event)">
      <span help-slot>
          <i class="fas fa-question"></i>
      </span>
      <span userName>Mariia Zubkova</span>
      <span logout>
        <i class="fa fa-sign-out-alt"></i>
      </span>
    </next-header>
    `
    // <p>${longText}</p>
  }))
  .add('Dev mode', () => ({
    template: `
    <next-header env="env" role="role" (refClicked)="onPress($event)"
      (helpSlot)="helpSlot($event)"
      (userName)="userName($event)"
      (logout)="logout($event)">
      <span help-slot>
          <i class="fas fa-question"></i>
      </span>
      <span userName>Mariia Zubkova</span>
      <span logout>
        <i class="fa fa-sign-out-alt"></i>
      </span>
    </next-header>
    `
  }))
  .add('Prod mode', () => ({
    template: `
    <next-header env="" role="role" (refClicked)="onPress($event)"
      (helpSlot)="helpSlot($event)"
      (userName)="userName($event)"
      (logout)="logout($event)">
      <span help-slot>
          <i class="fas fa-question"></i>
      </span>
      <span userName>Mariia Zubkova</span>
      <span logout>
        <i class="fa fa-sign-out-alt"></i>
      </span>
    </next-header>
    `
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

