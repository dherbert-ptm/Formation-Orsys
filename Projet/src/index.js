import $ from 'jquery';
import './custom-bootstrap.js';
import './custom-bootstrap.scss';
import {Clock} from './horloge';

const spanElt = document.querySelector('.horloge');

const horloge =  new Clock(spanElt);
horloge.start();
