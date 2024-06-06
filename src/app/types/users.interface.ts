export interface Users {
  cell: string;
  dob: {
    age: number;
    date: string;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    city: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    country: string;
    postcode: number;
    state: string;
    street: {
      name: string;
      number: number;
    };
    timezone: {
      description: string;
      offset: number;
    };
  };
  login: {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  phone: number;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    age: number;
    date: string;
  };
}
