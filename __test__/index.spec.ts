import { MyClass } from '../src/index';

it('should just work', () => {
    const myClass = new MyClass();

    expect(myClass.hello()).toBe('world!');
});
