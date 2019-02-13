import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';

import * as marked from 'marked';

import * as defaultText from './default.md';
import * as longText from './long-text.md';


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
  .add('Install',
    withNotes({text: marked(defaultText)}) (() => ({
      template: `
      ${styles}
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
  )
  .add('Left icons', () => ({
    template: `
    ${styles}
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
    integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <next-header env="env" role="role" (refClicked)="onPress($event)"
      (helpSlot)="helpSlot($event)"
      (userName)="userName($event)"
      (logout)="logout($event)">
      <span helpSlot (click)="helpSlotClicked()" class="item">
          <i class="fas fa-plus"></i>
      </span>
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
    <style>
      .next-header \{
        position: fixed;
      \}
    </style>
    `
  }))
  .add('Long page with simple header', () => ({
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
    <p>${longText}</p>
    `
    // <p>${longText}</p>
  }))
  .add('Dev mode', () => ({
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
  .add('Prod mode', () => ({
    template: `
    ${styles}
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
    integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <next-header env="" role="role" (refClicked)="onPress($event)"
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
  }));
  // .add('Long page with simple header', () => ({}));


