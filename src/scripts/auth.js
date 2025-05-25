import Handlebars from 'handlebars'

import {input, button, link} from '../components'
import {formLayout} from '../layouts';

import '../styles/main.scss'

const layout = Handlebars.compile(formLayout);
const buttonTemplate = Handlebars.compile(button);
const inputTemplate = Handlebars.compile(input);
const linkTemplate = Handlebars.compile(link);

const inputsHtml = [
  inputTemplate({ label: 'Логин', name: 'login' }),
  inputTemplate({ label: 'Пароль', name: 'password', type: 'password' }),
].join('');

const linkHtml = `${linkTemplate({href: '/register.html', text: 'Нет аккаунта?'})}`;

const buttonTemplateHtml = `${buttonTemplate({text: 'Авторизоваться', onClick: "window.location.href = '/dashboard'"})}`;

const html = layout({
  title: 'Вход',
  button: buttonTemplateHtml,
  inputs: inputsHtml,
  footerLink: linkHtml
});

document.getElementById('app').innerHTML = html;