import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from '@angular/core/testing';

describe('calculatorService', () => {

  let calculator: CalculatorService
  let loggerSpy: any;

  beforeEach(() => {
    console.log('beforeEach')
    loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {provide: LoggerService, useValue: loggerSpy}
      ]
    })
    calculator = TestBed.get(CalculatorService);
  });

  it('should add two numbers together.', () => {
    console.log('Add test');
    const result = calculator.add(2, 2);

    expect(result).toBe(4, "Unexpeced addition result.");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should substract two numbers together.', () => {
    console.log('Substract test');
    const result = calculator.subtract(2, 2);

    expect(result).toBe(0, "Unexpeced sustraction result.");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
})
