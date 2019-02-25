## Development mode

When app runs in development mode there is light blue square in left side

### Template for this example looks like code below

```
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
```