## Project setup
```
npm i next-header-lib
```

## Basic usage example

### Add module into your app

```
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HeaderLibModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

```

### Header is universal and can be used for any projects

### Template for this page looks similar to the template bellow, will be explained in next stories.

### The main part here is toggler and slider

```
<next-header
  [env]="'Dev'"
  [role]="'NEXT - NIBR'"
  [descr]="'External Science'"
  (ProjectNameClickedEmmiter)="onProjectNameClick($event)">
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
