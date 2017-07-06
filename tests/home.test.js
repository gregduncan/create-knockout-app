const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect()

import vm from '../src/viewmodels/home'

chai.use(chaiHttp);

describe('## Home ViewModel', () => {

    const viewModel = new vm()

    describe('# Add item', () => {

        it('Should add item', (done) => {

            viewModel.text('test')
            viewModel.add()
            chai.expect(viewModel.items().length).to.equal(2)
            done()
        });

        it('Should have text test', (done) => {

            viewModel.text('test')
            viewModel.add()
            const text = viewModel.items()[1]
            chai.expect(text).to.equal('test')
            done()
        });

        it('Should remove all items', (done) => {

            viewModel.remove()
            chai.expect(viewModel.items().length).to.equal(0)
            done()
        });
    });
});