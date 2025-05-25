import Handlebars from 'handlebars'

import template from '../pages/dashboard/dashboard.hbs?raw'
import {iconButton} from '../components/';

import '../styles/main.scss'
import '../pages/dashboard/dashboard.scss';

const render = Handlebars.compile(template);
const iconButtonTemplate = Handlebars.compile(iconButton);

const html = render({
  title: 'Главная',
  chats: [
    // Возможные значения:
    // - type (например, 0 - чужое сообщение, 1 - твое сообщение)
    {first_name: 'Андрей', time: '10:49', image: true, last_message: 'Друзья, у меня для вас особенный выпуск новостей!...', type: 1, notification: 2},
    {first_name: 'Андрей', time: '10:49', image: false, last_message: 'Друзья, у меня для вас особенный выпуск новостей!...', type: 0, notification: 2},
    {first_name: 'Андрей', time: '10:49', image: false, last_message: 'Друзья, у меня для вас особенный выпуск новостей!...', type: 0, notification: 2},
    {first_name: 'Андрей', time: '10:49', image: false, last_message: 'Друзья, у меня для вас особенный выпуск новостей!...', type: 0, notification: 2},
    {first_name: 'Андрей', time: '10:49', image: false, last_message: 'Друзья, у меня для вас особенный выпуск новостей!...', type: 1, notification: 2},
    {first_name: 'Андрей', time: '10:49', image: false, last_message: 'Друзья, у меня для вас особенный выпуск новостей!...', type: 1, notification: 2},
    {first_name: 'Андрей', time: '10:49', image: false, last_message: 'Друзья, у меня для вас особенный выпуск новостей!...', type: 1, notification: 2},
  ],
  iconButton: iconButtonTemplate,
});

document.getElementById('app').innerHTML = html;
