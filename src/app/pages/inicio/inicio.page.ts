import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Buttons',
      redirectTo: '/button'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle',
      name: 'Checks',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite-Scroll',
      redirectTo: '/infinite'
    },
    {
      icon: 'hammer',
      name: 'Input Forms',
      redirectTo: '/input'
    },
    {
      icon: 'list',
      name: 'List - Sliding',
      redirectTo: '/list'
    },
    {
      icon: 'reorder-three',
      name: 'List - Reorder',
      redirectTo: '/list-reorder'
    },
    {
      icon: 'refresh-circle',
      name: 'Loading',
      redirectTo: '/loading'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
