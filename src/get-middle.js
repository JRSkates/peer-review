const getMiddle = (string) => {
  if (string.length === 1 ) {
    return string
  } else if (string.length % 2 === 0) {
    return `${string[(string.length / 2 ) - 1]}${string[(string.length / 2)]}`
  } else {
    return string[(Math.round((string.length / 2))) - 1]
  }
}

module.exports = getMiddle;
