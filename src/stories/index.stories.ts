import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';

import * as marked from 'marked';

import * as defaultText from './default.md';
import * as lessIconsOnLeftSide from './less-icons-on-left-side.md';
import * as devMode from './dev-mode.md';
import * as prodMode from './prod-mode.md';
import * as pageWithLongText from './page-with-long-text.md';
import * as pageWithLongTextAndFixedHeader from './page-with-long-text-and-fixed-header.md';
import * as longText from './long-text.md';


import { HeaderComponent } from 'header-lib';

const styles = `
  <style>
    .item \{
      cursor: pointer;
      margin: 3px;

      :hover \{
          background-color: #fff;
          color: #0460A9;
      \}
    \}
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
      <next-header env="dev" role="NEXT" descr="BioSample"
        (refClicked)="onPress($event)"
        (helpSlot)="helpSlot($event)"
        (userName)="userName($event)"
        (logout)="logout($event)">
        <span helpSlot (click)="helpSlotClicked()" class="item">
          <i class="fa fa-th"></i>
        </span>
        <span helpSlot (click)="helpSlotClicked()" class="item">
          <i class="fa fa-bell"></i>
        </span>
        <span helpSlot (click)="helpSlotClicked()" class="item">
            <i class="fa fa-question"></i>
        </span>
        <span userName (click)="userNameClicked()" class="item">Mariia Zubkova</span>
        <span logout (click)="logoutClicked()" class="item">
          <i class="fa fa-sign-out"></i>
        </span>
      </next-header>
      `
    }))
  )
  .add('Less icons on left side',
    withNotes({text: marked(lessIconsOnLeftSide)}) ( () => ({
      template: `
      ${styles}
      <next-header env="dev" role="NEXT" descr="BioSample"
          (refClicked)="onPress($event)"
          (helpSlot)="helpSlot($event)"
          (userName)="userName($event)"
          (logout)="logout($event)">
          <span helpSlot (click)="helpSlotClicked()" class="item">
              <i class="fa fa-question"></i>
          </span>
          <span userName (click)="userNameClicked()" class="item">Mariia Zubkova</span>
          <span logout (click)="logoutClicked()" class="item">
            <i class="fa fa-sign-out"></i>
          </span>
        </next-header>
      `
    }))
  )
  .add('Dev mode',
    withNotes({text: marked(devMode)}) (() => ({
      template: `
      ${styles}
      <next-header env="dev" role="NEXT" descr="BioSample"
        (refClicked)="onPress($event)"
        (helpSlot)="helpSlot($event)"
        (userName)="userName($event)"
        (logout)="logout($event)">
        <span helpSlot (click)="helpSlotClicked()" class="item">
          <i class="fa fa-th"></i>
        </span>
        <span helpSlot (click)="helpSlotClicked()" class="item">
          <i class="fa fa-bell"></i>
        </span>
        <span helpSlot (click)="helpSlotClicked()" class="item">
            <i class="fa fa-question"></i>
        </span>
        <span userName (click)="userNameClicked()" class="item">Mariia Zubkova</span>
        <span logout (click)="logoutClicked()" class="item">
          <i class="fa fa-sign-out"></i>
        </span>
      </next-header>
      `
    }))
  )
  .add('Prod mode',
    withNotes({text: marked(prodMode)}) (() => ({
      template: `
      ${styles}
      <next-header env="" role="NEXT" descr="BioSample"
        (refClicked)="onPress($event)"
        (helpSlot)="helpSlot($event)"
        (userName)="userName($event)"
        (logout)="logout($event)">
        <span helpSlot (click)="helpSlotClicked()" class="item">
          <i class="fa fa-th"></i>
        </span>
        <span helpSlot (click)="helpSlotClicked()" class="item">
          <i class="fa fa-bell"></i>
        </span>
        <span helpSlot (click)="helpSlotClicked()" class="item">
            <i class="fa fa-question"></i>
        </span>
        <span userName (click)="userNameClicked()" class="item">Mariia Zubkova</span>
        <span logout (click)="logoutClicked()" class="item">
          <i class="fa fa-sign-out"></i>
        </span>
      </next-header>
      `
    }))
  )
  .add('Page with long text',
    withNotes({text: marked(pageWithLongText)}) (() => ({
      template: `
      ${styles}
      <div>
        <next-header class="head"
          env="dev" role="NEXT" descr="BioSample"
          (refClicked)="onPress($event)"
          (helpSlot)="helpSlot($event)"
          (userName)="userName($event)"
          (logout)="logout($event)">
          <span helpSlot (click)="helpSlotClicked()" class="item">
            <i class="fa fa-th"></i>
          </span>
          <span helpSlot (click)="helpSlotClicked()" class="item">
            <i class="fa fa-bell"></i>
          </span>
          <span helpSlot (click)="helpSlotClicked()" class="item">
              <i class="fa fa-question"></i>
          </span>
          <span userName (click)="userNameClicked()" class="item">Mariia Zubkova</span>
          <span logout (click)="logoutClicked()" class="item">
            <i class="fa fa-sign-out"></i>
          </span>
        </next-header>
        <div class="content">${longText}</div>
      </div>
      `
    }))
  )
  .add('Page with long text and fixed header',
    withNotes({text: marked(pageWithLongTextAndFixedHeader)}) (() => ({
      template: `
      ${styles}
      <style>
        .head \{
          position: fixed;
          top: 0;
          width: 100%
        \}
        .content \{
          margin-top: 36px
        \}
      </style>
      <div>
        <next-header class="head"
          env="dev" role="NEXT" descr="BioSample"
          (refClicked)="onPress($event)"
          (helpSlot)="helpSlot($event)"
          (userName)="userName($event)"
          (logout)="logout($event)">
          <span helpSlot (click)="helpSlotClicked()" class="item">
            <i class="fa fa-th"></i>
          </span>
          <span helpSlot (click)="helpSlotClicked()" class="item">
            <i class="fa fa-bell"></i>
          </span>
          <span helpSlot (click)="helpSlotClicked()" class="item">
              <i class="fa fa-question"></i>
          </span>
          <span userName (click)="userNameClicked()" class="item">Mariia Zubkova</span>
          <span logout (click)="logoutClicked()" class="item">
            <i class="fa fa-sign-out"></i>
          </span>
        </next-header>
        <div class="content">${longText}</div>
      </div>
      `
    }))
  )
;
