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

//toEqual
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
        expect(valorBoleanoTexto).toEqual("true")
        expect(obj1).toEqual(obj2);
    });
    });
    

    //toMatch

    describe("Suíte de testes do toMatch",function(){
        var textoComparar = "Curso de testes com Jasmine";
        it("deve validar o uso de matcher 'toMatch'",function(){
            expect(textoComparar).toMatch(/Jasmine/);
            expect(textoComparar).toMatch("Jasmine");
            expect(textoComparar).toMatch(/Jasmine/i);
            expect(textoComparar).not.toMatch(/JavaScript/);
             expect("16/12/2016").toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
        });
    });


    //toBeDefined

    describe("Suíte de testes do toBeDefined",function(){
        var numero = 10;
        var texto;
        var obj = {'valor': 10 };
        it("deve validar o uso do matcher 'toBeDefined'",function(){
            expect(numero).toBeDefined();
            expect(texto).not.toBeDefined();
            expect(obj.valor).toBeDefined();
            expect(obj.mensagem).not.toBeDefined();
        });
    });

    //toBeUndefined

    describe("Suíte de testes do Undefined",function(){
        var numero = 10;
        var texto;
        var obj = {'valor': 10 };
        it("deve validar o uso do matcher 'toBeUndefined'",function(){
            expect(numero).not.toBeUndefined();
            expect(texto).toBeUndefined();
            expect(obj.valor).not.toBeUndefined();
            expect(obj.mensagem).toBeUndefined();
        });
    });

    //toBeNull

    describe("Suíte de testes do toBeNull",function(){
        var numero = 10;
        var texto;
        var objeto = null;
        it("deve validar o uso do matcher 'toBeNull'",function(){
            expect(objeto).toBeNull();
            expect(numero).not.toBeNull();
            expect(texto).not.toBeNull();
            expect(objeto).not.toEqual(texto);
        });
    });

    //toBeTruthy
    describe("Suíte de testes do toBeTruthy",function(){
        var numero = 10;
        var texto;
        var objeto = {'valor' : 123 };

        it("deve validar o uso do matcher 'toBeTruthy'",function(){
            expect(objeto).toBeTruthy();
            expect(numero).toBeTruthy();
            expect(texto).not.toBeTruthy();
        });
    });


    //toBeFalsy

    describe("Suíte de testes do toBeFalsy",function(){
        var numero = 10;

        it("deve validar o uso do matcher 'toBeFalsy'",function(){
            expect(false).toBeFalsy();
            expect("").toBeFalsy();
            expect(0).toBeFalsy();
            expect(undefined).toBeFalsy();
            expect(null).toBeFalsy();
            expect(NaN).toBeFalsy();
            expect(numero).not.toBeFalsy();
            expect("false").not.toBeFalsy();
        });
    });

    //toContain
    describe("Suite de testes do toContai",function(){
        var nomes = ["falano","Ciclano","Beltrano"];
        var nomesTexto = "Fulano Cliclado Beltrano";
        it("deve validar o uso do matcher 'tocontai'",function(){
            expect(nomes).toContain("Ciclano");
            expect(nomesTexto).toContain("Fulano");
            expect(nomesTexto).toContain("Bel");
            expect(nomes).not.toContain("Maria");
            expect(nomes).not.toContain("ciclano");
        });
    });

    //toBeLessThan

    describe("Suite de testes do toBeLessThan", function(){
    const PI = 3.1415;
    var numero = 2;
    it("deve validar o uso do matcher 'toBeLessThan'", function(){
        expect(numero).toBeLessThan(PI);
        expect("1.2").toBeLessThan(PI);
        expect(5).not.toBeLessThan(PI);
        expect(PI).not.toBeLessThan(PI);
    });
    });



    //toBeGreaterThan

    describe("Suite de testes do toBeGreaterThan", function(){
        const PI = 3.1415;
        var numero = 4;
        it("deve validar o uso do matcher 'toBeGreaterThan'", function(){
            expect(numero).toBeGreaterThan(PI);
            expect("3.2").toBeGreaterThan(PI);
            expect(2).not.toBeGreaterThan(PI);
            expect(PI).not.toBeGreaterThan(PI);
    });
    });



    //toTrow

    desribe("Suite de testes para o matcher 'toTrow'", function(){
        var comErro = function(){
            return numero * 10;
        };
        var semErro = function(numero){
            return numero * 10;
        };

        it("Deve validar o uso do matcher 'toTrow'", function() {
            expect(comErro).toTrow();
            expect(semErro).not.toTrow();
        });
    });


    //toThrowError

    describe("Suite de testes do tópico 5.13", function(){
        var calcularDobro = function(numero){
            if (numero <=0){
            throw new TypeError("O número deve ser maior que 0."); 
        }
        return numero * numero;
        };
        it("deve validar o uso do matcher 'toThrowError",function(){
            expect(function(){ calcularDobro(0) }).toThrowError();
            expect(function(){ calcularDobro(0) }).toThrowError("O numero deve ser maior que 0");
            expect(function(){ calcularDobro(0) }).toThrowError(/maior que 0/);
            expect(function(){ calcularDobro(0) }).toThrowError(TypeError);
            expect(function(){ calcularDobro(0) }).toThrowError(TypeError, "O número deve ser maior que 0.");
            expect(calcularDobro).not.toThrowError();
        });
        });


    //falha manual

    describe("Testa a função 'fail' de falha manual", function(){
        var operacao = function(deveExecuar, callBack){
            if(deveExecuar){
                callBack();
            }
        };
        it("nao deve rodar a função de callback",function(){
            operacao(false, function(){
                fail("Função de callback foi executada");
            });
        });
    });


    //beForceEach

    describe("Suite de testes do beForceEach" ,function(){
        var contador = 0;
        beForceEach(function(){
            contador++
        });

        it("deve exibir o contaodr com valor 1", function(){
            expect(contador).toEqual(1);
        });
        it("Deve exibir o contador com valor 2", function(){
            expect(contaodr).toEqual(2);
        });
        });


        //afterEach


    describe("Suite de testes do afterEach" ,function(){
        var contador = 0;
        beForceEach(function(){
            contador++
        });
        afterEach(function(){
            contador = 0
        });

        it("deve exibir o contaodr com valor 1", function(){
            expect(contador).toEqual(1);
        });
        it("Deve exibir o contador com valor 2", function(){
            expect(contaodr).toEqual(2);
        });
        });


        //beforeAll

    describe("Suite de testes do afterEach" ,function(){
        var contador;
        beforeAll(function(){
            contador = 10;
        });
        beforeEach(function(){
            contador++
        });

        it("deve exibir o contaodr com valor 11", function(){
            expect(contador).toEqual(11);
        });
        it("Deve exibir o contador com valor 12", function(){
            expect(contaodr).toEqual(12);
        });
        });

        //afterAll

        describe("Suite de testes do afterEach" ,function(){
            var contador;
            beforeAll(function(){
                contador = 10;
            });
            afterAll(function(){
                contador++
            });
    
            it("deve exibir o contaodr com valor 10", function(){
                expect(contador).toEqual(10);
            });
            it("Deve exibir o contador com valor 10", function(){
                expect(contaodr).toEqual(10);
            });
            });
    

            //aninhando suites

            describe("Suite de testes aninhando suites", function(){
                var contadorExterno = 0;
                beforeEach(function(){
                    contadorExterno++;
                });
            it("deve ter ubcrementado o contador externo para 1", function(){
                expect(contadorExterno).toEqual(1);
            });
            describe("Suite aninhada á anterior", function(){
                var contadorInterno = 1;
                beforeEach(function(){
                    contadorInterno++;
                });
            it("deve conter o valor '2' para ambos contadores", function(){
                expect(contadorInterno).toEqual(contadorExterno);
            });
            });
            });