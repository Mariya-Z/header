## Less number of icons on left side

Number of icons can be any, you are able add as many icons as you want

### Template for this example looks like code below

```
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
```
