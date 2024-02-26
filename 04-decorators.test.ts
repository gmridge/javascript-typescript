
import { describe, it, expect, vi } from 'vitest';

// Decorator Koan
describe('Decorator', () => {
  // we forgot to deal with this in the class, but here's the answer:
   it('should augment a class with new properties', () => {
    function classDecorator<T extends { new (...args: any[]): {} }>(
      constructor: T
    ) {
      return class extends constructor {
        newProperty = 'new property'
        hello = 'override'

<<<<<<< HEAD
  it('should augment a class with new properties', () => {
    @classDecorator
    class Greeter {
      property = 'property';
      hello: string;
      constructor(m: string) {
        this.hello = m;
=======
        constructor(...args: any[]) {
          super(...args)
          // Additional logic if needed
        }
>>>>>>> refs/remotes/origin/main
      }
    }

    // @classDecorator()
    const Greeter = classDecorator(
      class {
        property = 'property'
        hello: string

        constructor(m: string) {
          this.hello = m
        }
      }
    )

    const greeter = new Greeter('world');
    expect(greeter.property).toBe('property'); // This will pass
    expect(greeter.hello).toBe('override'); // This will fail initially
    expect(greeter.newProperty).toBe('new property'); // This will also fail initially
  });

  it('it should augment a method with modified behavior',
  () => {
function merryChristmasDecorator(target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  let originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
  return 'Merry Christmas ' + originalMethod.apply(this, args)
  }
}
  
    class Myclass {
      @merryChristmasDecorator
      myMethod() {
        return 'Georgia';
      }
    }
    const person = new Myclass();
    expect(person.myMethod()).toBe('Merry Christmas Georgia')
  })

  it('should augment a property with modified behavior',
  () => {

    function propertyDecorator(target: object, propertyKey: string | symbol) {
      let value: string;
      const getter = () => {
        return "Merry Christmas " + value;
      }

      const setter = (newValue: string) => {
        value = newValue;
      }

      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      })
    }

    class MyClass2 {
      @propertyDecorator
      myProperty: string = "Georgia";
    }

    const person = new MyClass2();
    expect(person.myProperty).toBe("Merry Christmas Georgia")

  })

  it("should augment the behavior of a parameter/argument", () => 
  {
    function merryChristmasParam(target: object, propertyKey: string | symbol, parameterIndex: number)
    {
  //     const originalMethodDescriptor = Object.
  //     getOwnPropertyDescriptor(target, propertyKey);
  //     const originalMethod = originalMethodDescriptor.value;

  //     const newMethod = function(...args: any[]) {
  //       return 'Merry Christmas and ' + originalMethod.apply(this, args)
  //       }

  //       Object.defineProperty(target, propertyKey, {
  //         value: newMethod,
  //         writable: true,
  //         enumerable: true,
  //         configurable: true

  //       })
        console.log(`Parameter in ${target}.${propertyKey.toString()}() at index ${parameterIndex}`)
    }

    class MyClass3 {
      sayHello(@merryChristmasParam name: string) {
        return "Hello " + name;
      }
    }

    const person = new MyClass3();
    // expect(person.sayHello("Georgia")).toBe("Merry Christmas and Hello Georgia")
  })
});

export {};