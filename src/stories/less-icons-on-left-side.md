## Less number of icons on left side

Number of icons can be any, you are able add as many icons as you want

### Template for this example looks like code below

```
<next-header env="dev" role="NEXT" descr="BioSample"
    (refClicked)="onPress($event)"
    (helpSlot)="helpSlot($event)"
    (userName)="userName($event)"
    (logout)="logout($event)"
    showLogout="true">
    <span helpSlot (click)="helpSlotClicked()" class="item">
        <i class="fa fa-question"></i>
    </span>
    <span userName (click)="userNameClicked()" class="item">Mariia Zubkova</span>
    <span logout (click)="logoutClicked()" class="item">
        <i class="fa fa-sign-out"></i>
    </span>
</next-header>
```
