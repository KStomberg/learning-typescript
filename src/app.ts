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

class AccountingDepartment extends Department{
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text);
        
    }

    printReports() {
        console.log('Reports: ' + this.reports);
        
    }
}

const accounting = new AccountingDepartment('d1', []);
const IT = new ITDepartment('d2', ['Kieran', 'Jon']);

accounting.addReport('Tuesday');
accounting.addReport('Wednesday');

accounting.printReports();

console.log(accounting);

accounting.addEmployee('Max');
accounting.addEmployee('Kieran');

accounting.describe();
accounting.printEmployeeInformation();
