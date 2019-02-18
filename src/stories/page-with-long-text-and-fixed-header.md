## Page with long text and fixed header

### Template for this example looks like code below

```
<style>
    .head {
        position: fixed;
        top: 0;
        width: 100%
    }
    .content {
        margin-top: 36px
    }
</style>
<div>
    <next-header class="head"
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
    <div class="content">some long text</div>
</div>
```