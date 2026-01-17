import { evenOrOdd, greeting, welcome } from '../src/basic';

describe('Las variables en Javascript', () => {
    it('pueden contener strings', () => {
        const a = "Javascript";
        expect(a).toBe("Javascript");
    });
    it('pueden contener números', () => {
        const b = 14.64;
        expect(b).toBe(14.64);
    });
    it('pueden contener booleanos', () => {
        const c = false;
        expect(c).toBeFalsy();
    });
});

describe('Comparaciones en Javascript', () => {
    it("usando ===", () => {
        const number = 20;
        const expresion = (number === 10);
        expect(expresion).toBeFalsy();
    });
    it("usando !==", () => {
        const language = "Javascript";
        const expresion = (language !== "Javascript");
        expect(expresion).toBeFalsy();
    });
});

describe("Operaciones aritméticas", () => {
    it("Usando suma", () => {
        const a = 50;
        const b = 50;
        expect(a + b).toBe(100);
    });
    it("Usando multiplicación", () => {
        const a = 13;
        const b = 1;
        expect(a * b).toBe(13);
    });
    it("Usando división", () => {
        const a = 5;
        const b = 2;
        expect(a / b).toBe(2.5);
    });
});

describe('Algebra booleana', () => {
    it("Usando el operador AND (&&)", () => {
        const a = true;
        const b = true;
        const expression = a && b;
        expect(expression).toBeTruthy();
    });
    it("Usando el operador OR (||)", () => {
        const a = false;
        const b = false;
        const expression = a || b;
        expect(expression).toBeFalsy();
    });
});

describe("Ejemplos de funciones", () => {
    it('Función que nos dice Hello World', () => {
        expect(welcome()).toBe("Hello World");
    });
    it("Función que nos dice si un número es par (even) o impar (odd)", () => {
        expect(evenOrOdd(2)).toBe("even");
        expect(evenOrOdd(13)).toBe("odd");
    });
    it("Función que nos devuelve un saludo para cada nombre", () => {
        expect(greeting("Javi")).toBe("Hola, Javi!");
        expect(greeting("gente")).toBe("Hola, gente!");
        expect(greeting("Mary")).toBe("Hola, Mary!");
    });
});