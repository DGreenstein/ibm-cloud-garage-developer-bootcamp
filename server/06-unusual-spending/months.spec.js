import * as months from './months';

describe.only('months', () => {
   it('current() should return current', () => {
     const expected = {month: {year: 2017, month: 8}};
     months.current().should.deepEqual(expected);
   });
   it('prior() should return prior', () => {
     const expected = {month: {year: 2017, month: 7}};
     months.prior().should.deepEqual(expected);
   });
   it('when date is 4/1/2018, current() should return year: 2018, month: 4');
   it('when date is 4/1/2018, prior() should return year: 2018, month: 3');
   it('when date is 1/1/2018, current() should return year: 2018, month: 1', () => {
     const expected = {month: {year: 2018, month: 1}};
     months.current(new Date('1/1/2018')).should.deepEqual(expected);
   });
   it('when date is 1/1/2018, prior() should return year: 2017, month: 12', () => {
     const expected = {month: {year: 2017, month: 12}};
     months.prior(new Date('1/1/2018')).should.deepEqual(expected);
   });

});
