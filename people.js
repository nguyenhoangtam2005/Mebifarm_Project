function getAdults(users) {
  return users.filter(user => user.age >= 18)
}

module.exports = getAdults