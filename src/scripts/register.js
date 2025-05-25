import Handlebars from 'handlebars'

import {input, button, link} from '../components'
import {formLayout} from '../layouts';

import '../styles/main.scss'

Handlebars.registerPartial('button', button);

const layout = Handlebars.compile(formLayout);
const inputTemplate = Handlebars.compile(input);
const linkTemplate = Handlebars.compile(link);

const inputsHtml = [
  inputTemplate({ label: 'Почта', name: 'email' }),
  inputTemplate({ label: 'Логин', name: 'login' }),
  inputTemplate({ label: 'Имя', name: 'first_name' }),
  inputTemplate({ label: 'Фамилия', name: 'second_name' }),
  inputTemplate({ label: 'Телефон', name: 'phone' }),
  inputTemplate({ label: 'Пароль', name: 'password', type: 'password' }),
  inputTemplate({ label: 'Повторите пароль', name: 'password_repeat', type: 'password'}),
].join('');

const linkHtml = `${linkTemplate({href: '/index.html', text: 'Войти'})}`;

const html = layout({
  title: 'Регистрация',
  buttonText: 'Зарегистрироваться',
  inputs: inputsHtml,
  bodyMarginBottom: '48px',
  footerLink: linkHtml
});

document.getElementById('app').innerHTML = html;