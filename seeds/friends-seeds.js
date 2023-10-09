const { People } = require('../models');

const peopleData = [
  {
    person_name: 'John Wayne'
  },
  {
    person_name: 'Catherine Smith'
    
  },
  {
    person_name: 'Max Rodriguez'
    
  },
  {
    person_name: 'Felipe Santiago'
   
  },
  {
    person_name: 'Suzy Johnston'
    
  },
];

const seedPeople = () => People.bulkCreate(peopleData);

module.exports = seedPeople;
