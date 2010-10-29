# Guid lets you generate and validate unique identifiers.

Let's generate a new Guid instance.

    var guid = Guid.create();

We've now got an object which we can work with programmatically. Lets check the
validity of our guid using the built-in validator:

    Guid.isGuid(guid);
    // -> true
    
    Guid.value;
    // -> '6fdf6ffc-ed77-94fa-407e-a7b86ed9e59d'

A handy bit of functionality is that its `toString` method returns the string
value, so you can do handy things like this:

    var itemUrl = "http://whatever.com/items/" + guid;
    // -> 'http://whatever.com/items/6fdf6ffc-ed77-94fa-407e-a7b86ed9e59d'
    
If you need a placehold Guid, or a value to represent a non-guid, use the static
`EMPTY` property:

    Guid.EMPTY;
    // -> '00000000-0000-0000-0000-000000000000'

Once you have a `Guid` object, you can't change its value (thanks ES5!):

    guid.value = "go suck it, guid!"
    guid.value;
    // -> '6fdf6ffc-ed77-94fa-407e-a7b86ed9e59d'

To instantiate an Guid object using an existing Guid string, use the constructor:

    var guid = new Guid('6fdf6ffc-ed77-94fa-407e-a7b86ed9e59d');

You can check the equality of two different Guid objects using the `equals`
instance method.

Compare a Guid object to a guid string:

    guid.equals('6fdf6ffc-ed77-94fa-407e-a7b86ed9e59d');
    // -> true

Compare two Guid objects:
    
    guid.equals(new Guid('6fdf6ffc-ed77-94fa-407e-a7b86ed9e59d'));
    // -> true

## Installation

You can use npm to install guid: `npm install guid`