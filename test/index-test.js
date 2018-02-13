

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

