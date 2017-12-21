import {About} from './components/pages/About';
import {Form} from './components/pages/Form';
import {Sensor} from './components/pages/Sensor';

export const routes = [{
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: Form
}, {
    path: '/sensor/:id',
    component: Sensor
}];