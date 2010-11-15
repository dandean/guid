var validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");

function gen(count) {
  var out = "";
  for (var i=0; i<count; i++) {
    out += (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
  return out;
}

function Guid(guid) {
  if (!guid) throw new TypeError("Invalid argument; `value` has no value.");
    
  var value = Guid.EMPTY;
  
  if (guid && guid instanceof Guid) {
    value = Guid.toString();

  } else if (guid && Object.prototype.toString.call(guid) === "[object String]" && Guid.isGuid(guid)) {
    value = guid;
  }
  
  this.equals = function(other) {
    // Comparing string `value` against provided `guid` will auto-call
    // toString on `guid` for comparison
    return Guid.isGuid(other) && value == other;
  };

  this.isEmpty = function() {
    return value === Guid.EMPTY;
  };
  
  this.toString = function() {
    return value;
  };
  
  this.toJSON = function() {
    return value;
  };
  
  Object.defineProperty(this, "value", {
    get: function() { return value; },
    enumerable: true
  });
};

Object.defineProperty(Guid, "EMPTY", {
  value: "00000000-0000-0000-0000-000000000000"
});

Guid.isGuid = function(value) {
  return value && (value instanceof Guid || validator.test(value.toString()));
};

Guid.create = function() {
  return new Guid([gen(2), gen(1), gen(1), gen(1), gen(3)].join("-"));
};

Guid.raw = function() {
  return [gen(2), gen(1), gen(1), gen(1), gen(3)].join("-");
};

module.exports = Guid;
