import inject from './inject';

require('./tags/rt-test.tag');

riot.mixin(inject);

riot.mount('rt-test');
