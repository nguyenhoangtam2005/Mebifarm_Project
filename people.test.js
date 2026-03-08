const getAdults = require("./people")

const users = [
  { name: "Teen", age: 17 },
  { name: "Exactly 18", age: 18 },
  { name: "Adult 1", age: 25 },
  { name: "Adult 2", age: 40 }
]

test("filters users age >= 18 from mixed input", () => {
  const result = getAdults(users)

  expect(result).toEqual([
    { name: "Exactly 18", age: 18 },
    { name: "Adult 1", age: 25 },
    { name: "Adult 2", age: 40 }
  ])
})

test("keeps users with age exactly 18", () => {
  const result = getAdults([
    { name: "Under 18", age: 17 },
    { name: "Exactly 18", age: 18 },
    { name: "Over 18", age: 19 }
  ])

  expect(result).toEqual([
    { name: "Exactly 18", age: 18 },
    { name: "Over 18", age: 19 }
  ])
})

test("returns empty array when all users are under 18", () => {
  const result = getAdults([{ name: "Teen", age: 16 }])

  expect(result).toEqual([])
})
