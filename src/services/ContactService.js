const contacts = [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "name": "Ron",
    "email": "ochoahyde@renovize.com",
    "phone": "+1 (968) 593-3824",
    "img": "assets/img/profiles/ron.png"
  },
  {
    "_id": "5a5664025f6ae9aa24a99fde", 
    "name": "Jonatan",
    "email": "halliemclean@renovize.com",
    "phone": "+1 (948) 464-2888",
    "img": "assets/img/profiles/jonatan.png"
  },
  {
    "_id": "5a56640252d6acddd183d319", 
    "name": "Hadas",
    "email": "parsonsnorris@renovize.com",
    "phone": "+1 (958) 502-3495",
    "img": "assets/img/profiles/hadas.png"
  },
  {
    "_id": "5a566402ed1cf349f0b47b4d", 
    "name": "Yaron",
    "email": "rachellowe@renovize.com",
    "phone": "+1 (911) 475-2312",
    "img": "assets/img/profiles/yaron.png"
  },
  {
    "_id": "5a566402abce24c6bfe4699d", 
    "name": "Itamar",
    "email": "dominiquesoto@renovize.com",
    "phone": "+1 (807) 551-3258",
    "img": "assets/img/profiles/itamar.png"
  },
  {
    "_id": "5a566402a6499c1d4da9220a", 
    "name": "Shiri",
    "email": "shanapope@renovize.com",
    "phone": "+1 (970) 527-3082",
    "img": "assets/img/profiles/shiri.png"
  },
  {
    "_id": "5a566402f90ae30e97f990db", 
    "name": "Natalia",
    "email": "faulknerflores@renovize.com",
    "phone": "+1 (952) 501-2678",
    "img": "assets/img/profiles/natalia.png"
  },
  {
    "_id": "5a5664027bae84ef280ffbdf", 
    "name": "Ofir",
    "email": "holderbean@renovize.com",
    "phone": "+1 (989) 503-2663",
    "img": "assets/img/profiles/ofir.png"
  },
  {
    "_id": "5a566402e3b846c5f6aec652", 
    "name": "Alex",
    "email": "rosanneshelton@renovize.com",
    "phone": "+1 (968) 454-3851",
    "img": "assets/img/profiles/alex.png"
  },
  {
    "_id": "5a56640272c7dcdf59c3d411", 
    "name": "Olga",
    "email": "pamelanolan@renovize.com",
    "phone": "+1 (986) 545-2166",
    "img": "assets/img/profiles/olga.png"
  },
  {
    "_id": "5a5664029a8dd82a6178b15f", 
    "name": "Moshe",
    "email": "roycantu@renovize.com",
    "phone": "+1 (929) 571-2295",
    "img": "assets/img/profiles/moshe.png"
  },
  {
    "_id": "5a5664028c096d08eeb13a8a", 
    "name": "Jonatan",
    "email": "olliechristian@renovize.com",
    "phone": "+1 (977) 419-3550",
    "img": "assets/img/profiles/jonatan2.png"
  },
  {
    "_id": "5a5664026c53582bb9ebe9d1", 
    "name": "Maor",
    "email": "nguyenwalls@renovize.com",
    "phone": "+1 (963) 471-3181",
    "img": "assets/img/profiles/maor.png"
  },
  {
    "_id": "5a56640298ab77236845b82b",
    "name": "Eitan",
    "email": "glennasantana@renovize.com",
    "phone": "+1 (860) 467-2376",
    "img": "assets/img/profiles/eitan.png"
  },
  {
    "_id": "5a56640208fba3e8ecb97305", 
    "name": "Niv",
    "email": "maloneclark@renovize.com",
    "phone": "+1 (818) 565-2557",
    "img": "assets/img/profiles/niv.png"
  },
  {
    "_id": "5a566402abb3146207bc4ec5", 
    "name": "Omer",
    "email": "floydrutledge@renovize.com",
    "phone": "+1 (807) 597-3629",
    "img": "assets/img/profiles/omer.png"
  },
  {
    "_id": "5a56640298500fead8cb1ee5", 
    "name": "Sarel",
    "email": "gracejames@renovize.com",
    "phone": "+1 (959) 525-2529",
    "img": "assets/img/profiles/sarel.png"
  },
  {
    "_id": "5a56640243427b8f8445231e", 
    "name": "Tatiana",
    "email": "tannergates@renovize.com",
    "phone": "+1 (978) 591-2291",
    "img": "assets/img/profiles/tatiana.png"
  },
  {
    "_id": "5a5664025c3abdad6f5e098c", 
    "name": "Yanai",
    "email": "lillyconner@renovize.com",
    "phone": "+1 (842) 587-3812",
    "img": "assets/img/profiles/yanai.png"
  }
];

function sort(arr) {
  return arr.sort( (a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }
    return 0;
  })
}

function getContacts (filterBy = null) {
  return new Promise((resolve, reject) => { 
    var contactsToReturn = contacts;
    if (filterBy && filterBy.term) {
      contactsToReturn = filter(filterBy.term)
    }
    resolve(sort(contactsToReturn))
  })
}

function getContactById (id) {
    return new Promise((resolve, reject) => {
      const contact = contacts.find( contact => contact._id === id)
      contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
    })
}

function deleteContact(id) {
  return new Promise((resolve, reject) => { 
    const index = contacts.findIndex( contact => contact._id === id)
    if (index !== -1) {
      contacts.splice(index, 1)
    }
    resolve(contacts)
  })
}

function _updateContact(contact) {
  return new Promise((resolve, reject) => { 
    const index = contacts.findIndex( c => contact._id === c._id)
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
    name: '',
    email: '',
    phone: ''
  }
}

function filter (term) {
  term = term.toLocaleLowerCase()
  return contacts.filter( contact => {
    return contact.name.toLocaleLowerCase().includes(term) ||
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