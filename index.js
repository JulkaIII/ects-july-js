class ECTS {
  constructor(score) {
    this.score = score;
  }

  static isInRange(x, min, max) {
    return x >= min && x <= max;
  }
  ectsFromScore() {
    if (
      this.score < 0 ||
      this.constructor.isInRange(this.score, Number.MIN_SAFE_INTEGER, -1) ||
      this.constructor.isInRange(this.score, 101, Number.MAX_SAFE_INTEGER) ||
      !Number.isInteger(this.score)
    ) {
      return null;
    }

    if (this.score === 0) {
      return "F";
    }

    switch (Boolean(this.score)) {
      case this.constructor.isInRange(this.score, 90, 100):
        return "A";
      case this.constructor.isInRange(this.score, 82, 89):
        return "B";
      case this.constructor.isInRange(this.score, 74, 81):
        return "C";
      case this.constructor.isInRange(this.score, 65, 73):
        return "D";
      case this.constructor.isInRange(this.score, 60, 64):
        return "E";
      default:
        return "F";
    }
  }
}

module.exports = ECTS;
