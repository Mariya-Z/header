##Development mode

### Template for this example looks like code below

```
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
```