//toBe

describe("Suite de testes toBe",function(){

    var valorBoleano = true;
    var valorBoleanoCopia = valorBoleano;
    var valorBoleanoTexto = "true";
    var obj1 = { 'valor' : valorBoleano};
    var obj2 = { 'valor' : valorBoleano};

    it("deve validar o uso do matcher 'toBe'",function(){
        expect(valorBoleano).toBe(true);
        expect(valorBoleanoCopia).toBe(valorBoleano);
        expect(valorBoleano).not.toBe(valorBoleanoTexto);
        expect(obj1).not.toBe(obj2);
    });
    });


describe("Suite de testes toEqual",function(){

    var valorBoleano = true;
    var valorBoleano2 = true;
    var valorBoleanoCopia = valorBoleano;
    var valorBoleanoTexto = "true";
    var obj1 = { 'valor' : valorBoleano};
    var obj2 = { 'valor' : valorBoleano};

    it("deve validar o uso do matcher 'toEqual'",function(){
        expect(valorBoleano).toEqual(true);
        expect(valorBoleano).toEqual(valorBoleano2);
        expect(valorBoleanoCopia).toEqual(valorBoleano);
        expect(valorBoleano).not.toEqual(valorBoleanoTexto);
        expect(valorBoleanoTexto).toEqual("True")
        expect(obj1).not.toEqual(obj2);
    });
    });
    