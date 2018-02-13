describe('kittens', function() {
  it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', function() {
    expect(kittens).toEqual(["Milo", "Otis", "Garfield"])
  })
})

describe('destructivelyAppendKitten(name)', function() {
  