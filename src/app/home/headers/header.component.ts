import { Component } from '@angular/core';
import { PoDialogService, PoNotificationService, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';
import { HomeService } from '../service-home/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon-news',
      label: 'PO news, stay tuned!',
      type: 'danger',
      action: (item: PoToolbarAction) => this.onClickNotification(item)
    },
    { icon: 'po-icon-message', label: 'New message', type: 'danger', action: (item: PoToolbarAction) => this.openDialog(item) }
  ];

  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: 'dev@po-ui.com.br',
    title: 'Mr. Francisco'
  };

  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: 'User data', action: (item: PoToolbarAction) => this.onClickNotification(item) },
    { icon: 'po-icon-company', label: 'Company data', action: (item: PoToolbarAction) => this.onClickNotification(item) },
    { icon: 'po-icon-settings', label: 'Settings', action: (item: PoToolbarAction) => this.onClickNotification(item) },
    { icon: 'po-icon-exit', label: 'Exit', type: 'danger', separator: true, action: (item: PoToolbarAction) => this.onClickNotification(item) }
  ];

  actions: Array<PoToolbarAction> = [
    { label: 'Start cash register', action: (item: PoToolbarAction) => this.onClickNotification(item) },
    { label: 'Finalize cash register', action: (item: PoToolbarAction) => this.onClickNotification(item) },
    { label: 'Cash register options', action: (item: PoToolbarAction) => this.onClickNotification(item) }
  ];


  constructor(private poDialog: PoDialogService, private poNotification: PoNotificationService, private homeService: HomeService) {}

  getNotificationNumber() {
    return this.notificationActions.filter(not => not.type === 'danger').length;
  }

  onClickNotification(item: PoToolbarAction) {
    window.open('https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md', '_blank');
    item.type = 'default';
  }

  openDialog(item: PoToolbarAction) {
    this.poDialog.alert({
      title: 'Welcome',
      message: `Hello Mr. Dev! Congratulations, you are a TOTVER!`,
      ok: undefined
    });
    item.type = 'default';
  }

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(`Action clicked: ${item.label}`);
  }

}
