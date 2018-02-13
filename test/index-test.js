describe('kittens', function() {
  it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', function() {
    expect(kittens).toEqual(["Milo", "Otis", "Garfield"])
  })
})

describe('destructivelyAppendKitten(name)', function() {
  it('appends a kitten to the end of the kittens array', function() {
    destructivelyAppendKitten('Ralph')
    expect(kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
  })
})

describe('destructivelyPrependKitten(name)', function() {
  it('prepends a kitten to the beginning of the kittens array', function() {
    destructivelyPrependKitten("Bob")
    expect(kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"])
  })
})

describe('destructivelyRemoveLastKitten()', function() {
  it('removes the last kitten from the kittens array', function() {
    destructivelyRemoveLastKitten()
    expect(kittens).toEqual(["Milo", "Otis"])
  })
})

describe('destructivelyRemoveFirstKitten()', function() {
  it('removes the First kitten from the kittens array', function() {
    destructivelyRemoveFirstKitten()
    expect(kittens).toEqual(["Otis", "Garfield"])
  })
})

describe('appendKitten(name)', function() {
  it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
    expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])
    expect(kittens).toEqual(["Milo", "Otis", "Garfield"])
  })
})

describe('prependKitten(name)', function() {
  