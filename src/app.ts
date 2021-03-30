abstract class Department {
  static fiscalYear = 2020;
  //private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
    
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
    
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log('Reports: ' + this.reports);
  }
}

const accounting = new AccountingDepartment('d1', []);
const it = new ITDepartment('d2', ['Kieran', 'Jon']);

accounting.mostRecentReport = 'Year end report';
console.log(accounting.mostRecentReport);
console.log(accounting.mostRecentReport);

accounting.addReport('Tuesday');
accounting.addReport('Wednesday');

console.log(accounting);

const employee1 = Department.createEmployee('Josh');
console.log(employee1);

accounting.addEmployee('Max');
accounting.addEmployee('Kieran');

accounting.describe();
it.describe();
// accounting.printReports();
// accounting.printEmployeeInformation();
