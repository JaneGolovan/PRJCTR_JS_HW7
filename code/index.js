function PSuppliers(name, country) {
  this.name = name;
  this.country = country;
}

PSuppliers.prototype.supplier = function () {
  console.log(`${this.name}`);
};

function PWanda(name, city, amount) {
  PSuppliers.call(this, name);
  this.city = city;
  this.amount = amount;
  this._personalWanda = 0.05;
}

PWanda.prototype = Object.create(PSuppliers.prototype);
PWanda.prototype.alertWanda = function () {
  alert(`pls choose the branch of the company`);
};
PWanda.prototype.discount = function () {
  console.log(`The dicount amount is ${this.amount}*${this._personalWanda}`);
};
PWanda.prototype.orderAmount = function () {
  console.log(`The order amount is ${this.amount}`);
};

function PHebeiWanda(name, city, port, branch) {
  Wanda.call(this, name, city);
  this.port = port;
  this.branch = branch;
}
PHebeiWanda.prototype.rightBranch = function () {
  if (this.branch === `hebei`) {
    console.log(`Finally! You've got a right branch company`);
  } else {
    console.log(`Pls try another time`);
  }
};

function PTianjinWanda(name, city, port, branch) {
  PWanda.call(this, name, city);
  this.port = port;
  this.branch = branch;
}
PTianjinWanda.prototype.leftBranch = function () {
  if (this.branch === `Tianjin`) {
    console.log(`Finally! You've got a left branch company`);
  } else {
    console.log(`Pls try another time`);
  }
};

function PYesfree(name, city, port) {
  PSuppliers.call(this, name);
  this.city = city;
  this.port = port;
  this.product = "Kid Bikes";
  this._personalYesfree = 0.06;
}
PYesfree.prototype.SayHelloYF = function () {
  if (this.port === "Tianjin") {
    console.log(`Hello, we represent ${this.name} a company from ${this.city}`);
  }
};
PYesfree.prototype.ifDiscountYF = function () {
  if (this._personalYesfree > 0.05) {
    console.log(`${this.name} company is your golden supplier`);
  }
};
PYesfree.prototype.run = function () {
  console.log(`${this.name} sells ${this.product}!`);
};

function PTigerbike(name, city, port) {
  PSuppliers.call(this, name);
  this.city = city;
  this.port = port;
  this._personalTigerbike = 0.05;
}
PTigerbike.prototype.SayHelloTB = function () {
  if (this.port === "Tianjin") {
    console.log(`Hello, we represent ${this.name} company from ${this.city}`);
  } else {
    console.log(`you have no any shipments from ${this.port}`);
  }
};
PTigerbike.prototype.ifDiscountTG = function () {
  if (this._personalTigerbike > 0.05) {
    console.log(`${this.name} company is your golden supplier`);
  }
};

function PKenli(name, city, port) {
  PSuppliers.call(this, name);
  this.city = city;
  this.port = port;
  this._personalKenli = 0.04;
}
PKenli.prototype.SayHelloKN = function () {
  if (this.port === "Shanhai") {
    console.log(`Hello, we represent ${this.name} company from ${this.city}`);
  } else {
    console.log(`you have to choose a different supplier.`);
  }
};
PKenli.prototype.ifDiscountKN = function () {
  if (this._personalKenli > 0.05) {
    console.log(`${this.name} company is your golden supplier`);
  }
};

const wanda = new Wanda("Wanda");
console.log(wanda);
// wanda.alertWanda();
const TGB = new PTigerbike("Tigerbike", "Xingang", "Tianjin");
TGB.SayHelloTB();
