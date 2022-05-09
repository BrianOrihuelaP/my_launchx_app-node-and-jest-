const MissionCommander = require('./../app/missionCommander');
const Explorer = require('./../app/missionCommander');

describe("Esto es una suite de pruebas", () => 
{
  test("Caso de prueba 1", () => 
  {
    const result = 1 + 2;
    expect(result).toBe(3);
  });
});

describe("Esto es una suite de pruebas", () => 
{
  test("Caso de prueba 2 : probando clase missionComander", () => 
  {
    const myMissionCommander = new MissionCommander("Woopa")
    expect(myMissionCommander.name).toBe("Woopa");
  });
});

describe("Esto es una suite de pruebas", () => 
{
  test("Caso de prueba 3 : probando clase Explorer", () => 
  {
    const explorer = new Explorer("Ulises","22")
    expect(explorer.name).toBe("Ulises");
  });
});

describe("Esto es una suite de pruebas", () => 
{
  test("Caso de prueba 3 : probando clase Explorer", () => 
  {
    const explorer = new Explorer("Ulises","22")
    expect(explorer.name).toBe("22"); //aqui debe de tronar dado que espero el nombre no la edad
  });
});
