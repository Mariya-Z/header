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
    .next-header__user-name \{
      display: inline-block;
      margin: 0 1.2rem;
      text-decoration: none;
      color: #fff;
      font: Arial;
      font-size: 14px;
      padding: 10px 0;
    \}

    .item \{
      cursor: pointer;
      background: none;
      background-image: none;
      color: #fff;
      border: none;
      border-radius: 0;
      height: 36px;
      width:36px;
      margin: 0;
      padding: 0;
    \}

    .item:hover, .item:active, .item:focus \{
      background-color: #fff;
      color: #0460a9;
    \}

    .item:focus \{
      outline: 0;
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
        <next-header
          [env]="'Dev'"
          [projectName]="'NEXT - NIBR'"
          [description]="'External Science'"
          (projectNameClick)="onProjectNameClick($event)">
          <div helpSlot>
            <button
              title="Menu"
              class="fa fa-th item"
            ></button>
            <button
              title="Alert"
              class="fa fa-bell item"
            ></button>
            <button
              title="Help"
              class="fa fa-question item"
            ></button>
          </div>
          <div userName>
            <a href="/" class="next-header__user-name">
              Mariia Zubkova
            </a>
          </div>
          <div logout>
            <button
              title="Logout"
              class=" fa fa-sign-out item"
            ></button>
          </div>
        </next-header>
      `
    }))
  )
  .add('Less icons on left side',
    withNotes({text: marked(lessIconsOnLeftSide)}) ( () => ({
      template: `
      ${styles}
      <next-header
        [env]="'Dev'"
        [projectName]="'NEXT - NIBR'"
        [description]="'External Science'"
        (projectNameClick)="onProjectNameClick($event)">
        <div helpSlot>
          <button
            title="Help"
            class="fa fa-question item"
          ></button>
        </div>
        <div userName>
          <a href="/" class="next-header__user-name">
            Mariia Zubkova
          </a>
        </div>
        <div logout>
          <button
            title="Logout"
            class=" fa fa-sign-out item"
          ></button>
        </div>
      </next-header>
      `
    }))
  )
  .add('Dev mode',
    withNotes({text: marked(devMode)}) (() => ({
      template: `
      ${styles}
      <next-header
        [env]="'Dev'"
        [projectName]="'NEXT - NIBR'"
        [description]="'External Science'"
        (projectNameClick)="onProjectNameClick($event)">
        <div helpSlot>
          <button
            title="Menu"
            class="fa fa-th item"
          ></button>
          <button
            title="Alert"
            class="fa fa-bell item"
          ></button>
          <button
            title="Help"
            class="fa fa-question item"
          ></button>
        </div>
        <div userName>
          <a href="/" class="next-header__user-name">
            Mariia Zubkova
          </a>
        </div>
        <div logout>
          <button
            title="Logout"
            class=" fa fa-sign-out item"
          ></button>
        </div>
      </next-header>
      `
    }))
  )
  .add('Prod mode',
    withNotes({text: marked(prodMode)}) (() => ({
      template: `
      ${styles}
      <next-header
        [env]="''"
        [projectName]="'NEXT - NIBR'"
        [description]="'External Science'"
        (projectNameClick)="onProjectNameClick($event)">
        <div helpSlot>
          <button
            title="Menu"
            class="fa fa-th item"
          ></button>
          <button
            title="Alert"
            class="fa fa-bell item"
          ></button>
          <button
            title="Help"
            class="fa fa-question item"
          ></button>
        </div>
        <div userName>
          <a href="/" class="next-header__user-name">
            Mariia Zubkova
          </a>
        </div>
        <div logout>
          <button
            title="Logout"
            class=" fa fa-sign-out item"
          ></button>
        </div>
      </next-header>
      `
    }))
  )
  .add('Page with long text',
    withNotes({text: marked(pageWithLongText)}) (() => ({
      template: `
      ${styles}
      <div>
        <next-header
          [env]="'Dev'"
          [projectName]="'NEXT - NIBR'"
          [description]="'External Science'"
          (projectNameClick)="onProjectNameClick($event)">
          <div helpSlot>
            <button
              title="Menu"
              class="fa fa-th item"
            ></button>
            <button
              title="Alert"
              class="fa fa-bell item"
            ></button>
            <button
              title="Help"
              class="fa fa-question item"
            ></button>
          </div>
          <div userName>
            <a href="/" class="next-header__user-name">
              Mariia Zubkova
            </a>
          </div>
          <div logout>
            <button
              title="Logout"
              class=" fa fa-sign-out item"
            ></button>
          </div>
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
          [env]="'Dev'"
          [projectName]="'NEXT - NIBR'"
          [description]="'External Science'"
          (projectNameClick)="onProjectNameClick($event)">
          <div helpSlot>
            <button
              title="Menu"
              class="fa fa-th item"
            ></button>
            <button
              title="Alert"
              class="fa fa-bell item"
            ></button>
            <button
              title="Help"
              class="fa fa-question item"
            ></button>
          </div>
          <div userName>
            <a href="/" class="next-header__user-name">
              Mariia Zubkova
            </a>
          </div>
          <div logout>
            <button
              title="Logout"
              class=" fa fa-sign-out item"
            ></button>
          </div>
        </next-header>
        <div class="content">${longText}</div>
      </div>
      `
    }))
  )
;
