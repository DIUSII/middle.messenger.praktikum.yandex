import Handlebars from 'handlebars'

import {profile, profileInput} from '../pages/profile'
import {iconButton, link} from '../components';

import '../styles/main.scss'
import '../pages/profile/components/profile-input/profile-input.scss';
import '../pages/profile/profile.scss';

Handlebars.registerPartial('link', link);

const render = Handlebars.compile(profile);
const profileInputTemplate = Handlebars.compile(profileInput);
const iconButtonTemplate = Handlebars.compile(iconButton);

const iconButtonHtml = `${iconButtonTemplate({style: 'transform: rotate(180deg)', onClick: "window.location.href = '/dashboard'"})}`;
const inputsHtml = [
  profileInputTemplate({ label: 'Почта', name: 'email', value: 'pochta@yandex.ru', isDisabled: true }),
  profileInputTemplate({ label: 'Логин', name: 'login', type: 'password', value: 'ivanivanov', isDisabled: true }),
  profileInputTemplate({ label: 'Имя', name: 'first_name', value: 'Иван', isDisabled: true }),
  profileInputTemplate({ label: 'Фамилия', name: 'second_name', value: 'Иванов', isDisabled: true }),
  profileInputTemplate({ label: 'Имя в чате', name: 'display_name', value: 'Иван', isDisabled: true }),
  profileInputTemplate({ label: 'Телефон', name: 'phone', value: '+7 (909) 967 30 30', isDisabled: true }),
].join('');

const html = render({
  title: 'Профиль',
  iconButton: iconButtonHtml,
  inputs: inputsHtml,
});

document.getElementById('app').innerHTML = html;
