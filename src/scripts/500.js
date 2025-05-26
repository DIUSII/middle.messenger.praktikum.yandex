import Handlebars from 'handlebars'

import {link} from "../components";
import {errorLayout} from '../layouts';

import '../styles/main.scss'

const layout = Handlebars.compile(errorLayout);

const linkTemplate = Handlebars.compile(link);

const linkHtml = `${linkTemplate({href: '/dashboard.html', text: 'Назад к чатам'})}`;

const html = layout({
  title: '500',
  description: 'Мы уже фиксим',
  link: linkHtml,
});

document.getElementById('app').innerHTML = html;
