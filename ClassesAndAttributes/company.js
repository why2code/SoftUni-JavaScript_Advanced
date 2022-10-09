class Company {

    departments = {};

    addEmployee(name, salary, position, department) {
        if ((name === "" || name === undefined || name === null)
            || (salary === "" || salary === undefined || salary === null)
            || (position === "" || position === undefined || position === null)
            || (department === "" || department === undefined || department === null)) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        //Creating the employee after inputs validated
        let currEmployee = {
            employeeName: name,
            employeeSalary: salary,
            employeePosition: position,
        }

        //Adding employee to the departments (creating new department if missing)
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
            this.departments[department].empCount = 0;
            this.departments[department].totalSalary = 0;
            this.departments[department].avgSalary = 0;
        }
        //Adding the employee to the existing department and calculating department`s avg salary
        this.departments[department].push(currEmployee);
        this.departments[department].empCount += 1;
        this.departments[department].totalSalary += salary;
        this.departments[department].avgSalary = this.departments[department].totalSalary / this.departments[department].empCount;

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        //Selecting department with best avg salary
        let sortedDeptsByAvgSalary = Object.entries(this.departments)
            .sort((first, second) => {
                if (first[1].avgSalary > second[1].avgSalary) return -1;
                if (first[1].avgSalary < second[1].avgSalary) return 1;
                return 0;
            });
        let bestDept = sortedDeptsByAvgSalary[0];

        //Sorting the best department`s employees by avg. salary and name
        bestDept[1].sort((firstName, secondName) => {
            return firstName.employeeName - secondName.employeeName || firstName.employeeName.localeCompare(secondName.employeeName)
        })
        .sort((first, second) => {
            if(first.employeeSalary > second.employeeSalary) return -1;
            if(first.employeeSalary < second.employeeSalary) return 1;
            return 0;
        });
        

        let resOutput = `Best Department is: ${bestDept[0]}\n`
        resOutput += `Average salary: ${(bestDept[1].avgSalary).toFixed(2)}\n`
        for (let i = 0; i < bestDept[1].length; i++) {
            if (i < bestDept[1].length - 1) {
                resOutput += `${bestDept[1][i].employeeName} ${bestDept[1][i].employeeSalary} ${bestDept[1][i].employeePosition}\n`
            }
            else {
                resOutput += `${bestDept[1][i].employeeName} ${bestDept[1][i].employeeSalary} ${bestDept[1][i].employeePosition}`
            }
        }

        return resOutput;
    }

}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
