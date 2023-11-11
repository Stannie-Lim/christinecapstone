import { faker } from '@faker-js/faker';
const { db, pgp } = require('./database'); // Replace with your own database configuration
import type { SexType } from '@faker-js/faker';



interface User {
  _id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: SexType;
  address: string
}

function createRandomUser(): User {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.helpers.unique(faker.internet.email, [
    firstName,
    lastName,
    sex
  ] );

  const address = {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),
  };




  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    address: JSON.stringify(address),
  };
}

const user = createRandomUser();
