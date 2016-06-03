import index from './controllers/index';

require('./tags/rt-test.tag');

riot.mixin(index);

riot.mount('rt-test');
