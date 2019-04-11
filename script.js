/**
 * This is a Mongo Shell script. Run it with Mongo shell on command line:
 *     mongo script.js
 * or inside Mongo shell: load('script.js')
 */

//  connect to acua database on localhost
db = connect('localhost/acua')

// delete all tickets if they exist
db.Ticket.remove({})

tickets = []
numberGen = 1
windowGen = 0


// create sample ticket data
for (i = 1; i <= 30; i++) {
  tickets.push({
    number: numberGen,
    index: numberGen++,
    name: 'User ' + i,
    phone: '(123) 456-7890',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    location: 'Downey',
    window: windowGen++ % 2,
    strikes: 0,
    isComplete: false
  })
}

// insert sample tickets to the database
db.Ticket.insertMany(tickets)
