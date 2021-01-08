import test from 'ava';
import rewiremock from 'rewiremock';

test( 'health push to health when failed', async t => {
    await rewiremock.module(() => import( '../src/health.js' ), r => ({
        'form-urlencoded': r.withDefault({
            post: 'stubbed post'
        })
    }) );

    t.pass();
});
