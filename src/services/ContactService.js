const contacts = [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "userName": "Ron",
    "email": "ochoahyde@renovize.com",
    "phone": "+1 (968) 593-3824",
    "img": "assets/img/profiles/ron.png",
    "coins": 100,
  },
  {
    "_id": "5a5664025f6ae9aa24a99fde",
    "userName": "Jonatan",
    "email": "halliemclean@renovize.com",
    "phone": "+1 (948) 464-2888",
    "img": "assets/img/profiles/jonatan.png",
    "coins": 100,
  },
  {
    "_id": "5a56640252d6acddd183d319",
    "userName": "Hadas",
    "email": "parsonsnorris@renovize.com",
    "phone": "+1 (958) 502-3495",
    "img": "assets/img/profiles/hadas.png",
    "coins": 100,
  },
  {
    "_id": "5a566402ed1cf349f0b47b4d",
    "userName": "Yaron",
    "email": "rachellowe@renovize.com",
    "phone": "+1 (911) 475-2312",
    "img": "assets/img/profiles/yaron.png",
    "coins": 100,
  },
  {
    "_id": "5a566402abce24c6bfe4699d",
    "userName": "Itamar",
    "email": "dominiquesoto@renovize.com",
    "phone": "+1 (807) 551-3258",
    "img": "assets/img/profiles/itamar.png",
    "coins": 100,
  },
  {
    "_id": "5a566402a6499c1d4da9220a",
    "userName": "Shiri",
    "email": "shanapope@renovize.com",
    "phone": "+1 (970) 527-3082",
    "img": "assets/img/profiles/shiri.png",
    "coins": 100,
  },
  {
    "_id": "5a566402f90ae30e97f990db",
    "userName": "Natalia",
    "email": "faulknerflores@renovize.com",
    "phone": "+1 (952) 501-2678",
    "img": "assets/img/profiles/natalia.png",
    "coins": 100,
  },
  {
    "_id": "5a5664027bae84ef280ffbdf",
    "userName": "Ofir",
    "email": "holderbean@renovize.com",
    "phone": "+1 (989) 503-2663",
    "img": "assets/img/profiles/ofir.png",
    "coins": 100,
  },
  {
    "_id": "5a566402e3b846c5f6aec652",
    "userName": "Alex",
    "email": "rosanneshelton@renovize.com",
    "phone": "+1 (968) 454-3851",
    "img": "assets/img/profiles/alex.png",
    "coins": 100,
  },
  {
    "_id": "5a56640272c7dcdf59c3d411",
    "userName": "Olga",
    "email": "pamelanolan@renovize.com",
    "phone": "+1 (986) 545-2166",
    "img": "assets/img/profiles/olga.png",
    "coins": 100,
  },
  {
    "_id": "5a5664029a8dd82a6178b15f",
    "userName": "Moshe",
    "email": "roycantu@renovize.com",
    "phone": "+1 (929) 571-2295",
    "img": "assets/img/profiles/moshe.png",
    "coins": 100,
  },
  {
    "_id": "5a5664028c096d08eeb13a8a",
    "userName": "Jonatan",
    "email": "olliechristian@renovize.com",
    "phone": "+1 (977) 419-3550",
    "img": "assets/img/profiles/jonatan2.png",
    "coins": 100,
  },
  {
    "_id": "5a5664026c53582bb9ebe9d1",
    "userName": "Maor",
    "email": "nguyenwalls@renovize.com",
    "phone": "+1 (963) 471-3181",
    "img": "assets/img/profiles/maor.png",
    "coins": 100,
  },
  {
    "_id": "5a56640298ab77236845b82b",
    "userName": "Eitan",
    "email": "glennasantana@renovize.com",
    "phone": "+1 (860) 467-2376",
    "img": "assets/img/profiles/eitan.png",
    "coins": 100,
  },
  {
    "_id": "5a56640208fba3e8ecb97305",
    "userName": "Niv",
    "email": "maloneclark@renovize.com",
    "phone": "+1 (818) 565-2557",
    "img": "assets/img/profiles/niv.png",
    "coins": 100,
  },
  {
    "_id": "5a566402abb3146207bc4ec5",
    "userName": "Omer",
    "email": "floydrutledge@renovize.com",
    "phone": "+1 (807) 597-3629",
    "img": "assets/img/profiles/omer.png",
    "coins": 100,
  },
  {
    "_id": "5a56640298500fead8cb1ee5",
    "userName": "Sarel",
    "email": "gracejames@renovize.com",
    "phone": "+1 (959) 525-2529",
    "img": "assets/img/profiles/sarel.png",
    "coins": 100,
  },
  {
    "_id": "5a56640243427b8f8445231e",
    "userName": "Tatiana",
    "email": "tannergates@renovize.com",
    "phone": "+1 (978) 591-2291",
    "img": "assets/img/profiles/tatiana.png",
    "coins": 100,
  },
  {
    "_id": "5a5664025c3abdad6f5e098c",
    "userName": "Yanai",
    "email": "lillyconner@renovize.com",
    "phone": "+1 (842) 587-3812",
    "img": "assets/img/profiles/yanai.png",
    "coins": 100,
  }
];

function sort(arr) {
  return arr.sort((a, b) => {
    if (a.userName.toLocaleLowerCase() < b.userName.toLocaleLowerCase()) {
      return -1;
    }
    if (a.userName.toLocaleLowerCase() > b.userName.toLocaleLowerCase()) {
      return 1;
    }
    return 0;
  })
}

function getContacts(filterBy = null) {
  return new Promise((resolve, reject) => {
    var contactsToReturn = contacts;
    if (filterBy && filterBy.term) {
      contactsToReturn = filter(filterBy.term)
    }
    resolve(sort(contactsToReturn))
  })
}

function getContactById(id) {
  return new Promise((resolve, reject) => {
    const contact = contacts.find(contact => contact._id === id)
    contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
  })
}

function deleteContact(id) {
  return new Promise((resolve, reject) => {
    const index = contacts.findIndex(contact => contact._id === id)
    if (index !== -1) {
      contacts.splice(index, 1)
    }
    resolve(contacts)
  })
}

function _updateContact(contact) {
  return new Promise((resolve, reject) => {
    const index = contacts.findIndex(c => contact._id === c._id)
    if (index !== -1) {
      contacts[index] = contact
    }
    resolve(contact)
  })
}

function _addContact(contact) {
  return new Promise((resolve, reject) => {
    contact._id = _makeId()
    contacts.push(contact)
    resolve(contact)
  })
}

function saveContact(contact) {
  return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
  return {
    userName: '',
    email: '',
    phone: ''
  }
}

function filter(term) {
  term = term.toLocaleLowerCase()
  return contacts.filter(contact => {
    return contact.userName.toLocaleLowerCase().includes(term) ||
      contact.phone.toLocaleLowerCase().includes(term) ||
      contact.email.toLocaleLowerCase().includes(term)
  })
}

export default {
  getContacts,
  getContactById,
  deleteContact,
  saveContact,
  getEmptyContact
}

function _makeId(length = 10) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}
