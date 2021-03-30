class Department {
  //private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = name;
  }

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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
const IT = new ITDepartment('d2', ['Kieran', 'Jon']);

accounting.mostRecentReport = 'Year end report';
console.log(accounting.mostRecentReport);
console.log(accounting.mostRecentReport);

accounting.addReport('Tuesday');
accounting.addReport('Wednesday');

accounting.printReports();

console.log(accounting);

accounting.addEmployee('Max');
accounting.addEmployee('Kieran');

accounting.describe();
accounting.printEmployeeInformation();
