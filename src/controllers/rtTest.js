export default class RtTest {
    constructor(tag) {
        this.tag = tag;

        let self = this;

        // public tag methods
        tag.mixin({
            derp: function () {
                console.log(this, self);
            }
        })
    }

    herp() {
        console.log('herp')
    }
}
