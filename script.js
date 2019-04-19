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

// insert sample users and tickets to the database
db.Ticket.insertMany(tickets)
db.User.insertMany(users)
