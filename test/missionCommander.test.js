const MissionCommander = require('./../app/missionCommander');

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
