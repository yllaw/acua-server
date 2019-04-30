/**
 * This is a Mongo Shell script. Run it with Mongo shell on command line:
 *     mongo script.js
 * or inside Mongo shell: load('script.js')
 */

// delete all users if they exist
db.User.remove({})

users = []

// Downey
users.push({
  username: 'Luis',
  password: '123',
  location: 'Downey',
  window: 0,
  loggedIn: false
})

users.push({
  username: 'Johan',
  password: '123',
  location: 'Downey',
  window: 1,
  loggedIn: false
})

users.push({
  username: 'Roberto',
  password: '123',
  location: 'Downey',
  window: 2,
  loggedIn: false
})

users.push({
  username: 'Chief',
  password: '123',
  location: 'Downey',
  window: 3,
  loggedIn: true
})

// Agoura
for (i = 0; i < 4; i++) {
  users.push({
    username: 'user' + (i + 1),
    password: '123',
    location: 'Agoura',
    window: i,
    loggedIn: false
  })
}

// Baldwin Park
for (i = 0; i < 4; i++) {
  users.push({
    username: 'user' + (i + 1),
    password: '123',
    location: 'Baldwin Park',
    window: i,
    loggedIn: false
  })
}

// Carson/Gardena
for (i = 0; i < 4; i++) {
  users.push({
    username: 'user' + (i + 1),
    password: '123',
    location: 'Carson/Gardena',
    window: i,
    loggedIn: false
  })
}

// Castaic
for (i = 0; i < 4; i++) {
  users.push({
    username: 'user' + (i + 1),
    password: '123',
    location: 'Castaic',
    window: i,
    loggedIn: false
  })
}

// Lancaster
for (i = 0; i < 4; i++) {
  users.push({
    username: 'user' + (i + 1),
    password: '123',
    location: 'Lancaster',
    window: i,
    loggedIn: false
  })
}

// Palmdale
for (i = 0; i < 4; i++) {
  users.push({
    username: 'user' + (i + 1),
    password: '123',
    location: 'Palmdale',
    window: i,
    loggedIn: false
  })
}

// delete all tickets if they exist
db.Ticket.remove({})

tickets = []
numberGen = 1
windowGen = 0


// create sample ticket data
for (i = 1; i <= 20; i++) {
  tickets.push({
    number: numberGen,
    index: numberGen++,
    name: 'User ' + i,
    phone: '(123) 456-7890',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    location: 'Downey',
    window: windowGen++ % 4,
    strikes: 0,
    isComplete: false
  })
}

// delete all faqs if they exist
db.Faq.remove({})

// sample faqs
faqs = [
  {
    "query": "What are the adoption fees?",
    "answer": "The adoption fee for a dog or puppy is about $125 and for a cat or kitten about $115. That fee will be reduced by $50 for dogs and $40 for cats if the dog or cat was already sterilized before arriving at our animal care center. We do offer discounted adoption rates for animals that have been in our care for more than 10 days. The adoption fee includes initial vaccines, a microchip including national registration, spaying and neutering fees, and a complementary veterinary medical exam at participating veterinary offices. The Department also provides post-operative pain medication for animals that have been spayed or neutered. The cost for the pain medication is $10 and is included in the cost above. The adoption fee does not include the dog or cat license fee, which must be paid, but varies depending on the City or area you live (already on our website)"
  },
  {
    "query": "What is the protocol if the adoption does not work out at our house…can we return the dog?",
    "answer": "If an adoption does not work out and you decide to return the animal you may receive credit for a future adoption."
  },
  {
    "query": "Does the animal come with vaccinations?",
    "answer": "Yes, all animals get a complete set of vaccinations prior to being adopted."
  },
  {
    "query": "Do you have a list of dogs that you are going to “kill” soon?",
    "answer": "No, all animals on our website have an availability date and review date, however animals in our care maybe considered for humane euthanasia only if necessary."
  },
  {
    "query": "How often do you get animals in?",
    "answer": "Our Care Centers receive animals regularly, we operate 24 hours a day, 7 days a week."
  },
  {
    "query": "What cities do you service?",
    "answer": "Our seven animal care centers serve unincorporated Los Angeles County and 47 contract cities with a combined total population of over 3 million residents. We cover more than 3,400 square miles of cities, deserts, beaches, and mountains; from the Antelope Valley in the north to the Palos Verdes Peninsula in the south, as far east as the border of San Bernardino County, and west to Thousand Oaks. We provide animal control and rescue services in our service areas 24 hours a day, seven days a week. If you need future details on the exact cities contacts we serve, please contact our Communication Center at 562-940-6898."
  },
  {
    "query": "How long does it take to adopt an animal?",
    "answer": "This a front office question, but if I had to guess the adoption process may take between 20 – 40 minutes."
  },
  {
    "query": "Why don’t “you guys” write ADOPTED on the kennel cards?",
    "answer": "Unfortunately, an animal’s status may change, so we encourage our constituents to check the most current status/information with our front office staff or the Communication Center."
  },
  {
    "query": "Do you have a list of other local shelters?",
    "answer": "A list of local shelters is available in the lobby"
  },
  {
    "query": "How many animals can I adopt at once?",
    "answer": "LA County residents are allowed to own up to 4 dogs. Contract cities limits are usually between 2-3 dogs per house hold, please contact your City Hall for further details."
  },
  {
    "query": "Do you sell any supplies for the dog/cat?",
    "answer": "We do not sell any animal supplies at any of our Care Centers, please refer to your local Pet supply store in your area."
  },
  {
    "query": "Do you have a list of other local shelters?",
    "answer": "A list of local shelters is available in the lobby"
  },
  {
    "query": "How many animals can I adopt at once?",
    "answer": "LA County residents are allowed to own up to 4 dogs. Contract cities limits are usually between 2-3 dogs per house hold, please contact your City Hall for further details."
  },
  {
    "query": "Do you sell any supplies for the dog/cat?",
    "answer": "We do not sell any animal supplies at any of our Care Centers, please refer to your local Pet supply store in your area."
  },
  {
    "query": "Do you have a list of other local shelters?",
    "answer": "A list of local shelters is available in the lobby"
  },
  {
    "query": "How many animals can I adopt at once?",
    "answer": "LA County residents are allowed to own up to 4 dogs. Contract cities limits are usually between 2-3 dogs per house hold, please contact your City Hall for further details."
  },
  {
    "query": "Do you sell any supplies for the dog/cat?",
    "answer": "We do not sell any animal supplies at any of our Care Centers, please refer to your local Pet supply store in your area."
  }
]

for (i = 0; i < 17; i++) {
  faqs[i].index = i
  faqs[i].window = i % 4
  faqs[i].isComplete = false
}

// insert sample users and tickets to the database
db.Ticket.insertMany(tickets)
db.User.insertMany(users)
db.Faq.insertMany(faqs)
