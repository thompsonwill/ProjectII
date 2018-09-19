var records = [
    {
    id: 1,
    username: "Will",
    password: "password",
    displayName: "Will",
    emails: [{ value: "will@example.com" }]
  },
    {
    id: 2,
    username: "Duane",
    password: "password123",
    displayName: "Duane",
    emails: [{ value: "duane@example.com" }]
  },
    {
    id: 3,
    username: "Julie",
    password: "password456",
    displayName: "Julie",
    emails: [{ value: "julie@example.com" }]
  },
    {
    id: 4,
    username: "Misha",
    password: "password789",
    displayName: "Misha",
    emails: [{ value: "misha@example.com" }]
  }
];

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error("User " + id + " does not exist"));
    }
  });
};;



exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
};;
