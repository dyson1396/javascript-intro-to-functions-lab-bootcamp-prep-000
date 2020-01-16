function shout(string) {
  return string.toUpperCase()
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }

  return "Are you eating enough?"
}
it('returns "I love you, too." if `string` is "I love you, Grandma."`', () => {
      expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
    })

    it('returns "Are you eating enough?" otherwise', () => {
      expect(sayHiToGrandma('Hello')).toEqual("Are you eating enough?")
    })
  })
})