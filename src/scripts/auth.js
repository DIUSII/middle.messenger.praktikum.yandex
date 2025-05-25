import Handlebars from 'handlebars'

import {input, button, link} from '../components'
import {formLayout} from '../layouts';

import '../styles/main.scss'

Handlebars.registerPartial('button', button);

const layout = Handlebars.compile(formLayout);
const inputTemplate = Handlebars.compile(input);
const linkTemplate = Handlebars.compile(link);

const inputsHtml = [
  inputTemplate({ label: 'Логин', name: 'login' }),
  inputTemplate({ label: 'Пароль', name: 'password', type: 'password' }),
].join('');

const linkHtml = `${linkTemplate({href: '/register.html', text: 'Нет аккаунта?'})}`;

const html = layout({
  title: 'Вход',
  buttonText: 'Авторизоваться',
  inputs: inputsHtml,
  footerLink: linkHtml
});

document.getElementById('app').innerHTML = html;