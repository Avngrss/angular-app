export interface Users {
  // cell: string;
  // dob: {
  //   age: number;
  //   date: string;
  // };
  // email: string;
  // gender: string;
  // id: {
  //   name: string;
  //   value: string;
  // };
  // location: {
  //   city: string;
  //   coordinates: {
  //     latitude: number;
  //     longitude: number;
  //   };
  //   country: string;
  //   postcode: number;
  //   state: string;
  //   street: {
  //     name: string;
  //     number: number;
  //   };
  //   timezone: {
  //     description: string;
  //     offset: number;
  //   };
  // };
  // login: {
  //   md5: string;
  //   password: string;
  //   salt: string;
  //   sha1: string;
  //   sha256: string;
  //   username: string;
  //   uuid: string;
  // };
  // name: {
  //   first: string;
  //   last: string;
  //   title: string;
  // };
  // nat: string;
  // phone: number;
  // picture: {
  //   large: string;
  //   medium: string;
  //   thumbnail: string;
  // };
  // registered: {
  //   age: number;
  //   date: string;
  // };

  gender: 'female';
  name: {
    title: 'Miss';
    first: 'Jennie';
    last: 'Nichols';
  };
  location: {
    street: {
      number: 8929;
      name: 'Valwood Pkwy';
    };
    city: 'Billings';
    state: 'Michigan';
    country: 'United States';
    postcode: '63104';
    coordinates: {
      latitude: '-69.8246';
      longitude: '134.8719';
    };
    timezone: {
      offset: '+9:30';
      description: 'Adelaide, Darwin';
    };
  };
  email: 'jennie.nichols@example.com';
  login: {
    uuid: '7a0eed16-9430-4d68-901f-c0d4c1c3bf00';
    username: 'yellowpeacock117';
    password: 'addison';
    salt: 'sld1yGtd';
    md5: 'ab54ac4c0be9480ae8fa5e9e2a5196a3';
    sha1: 'edcf2ce613cbdea349133c52dc2f3b83168dc51b';
    sha256: '48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d';
  };
  dob: {
    date: '1992-03-08T15:13:16.688Z';
    age: 30;
  };
  registered: {
    date: '2007-07-09T05:51:59.390Z';
    age: 14;
  };
  phone: '(272) 790-0888';
  cell: '(489) 330-2385';
  id: {
    name: 'SSN';
    value: '405-88-3636';
  };
  picture: {
    large: 'https://randomuser.me/api/portraits/men/75.jpg';
    medium: 'https://randomuser.me/api/portraits/med/men/75.jpg';
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg';
  };
  nat: 'US';
}
