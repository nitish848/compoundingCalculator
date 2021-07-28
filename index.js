function calculate() {
    var principal = document.getElementById("amount").value;
    var baserate = document.getElementById("percent").value;
    const answer = document.getElementById("answer");
    const percentperiod = document.getElementById("percentperiod").selectedIndex;
    const year = document.getElementById("year").value;
    const months = document.getElementById("months").value;
    const days = document.getElementById("days").value;
    const date = document.getElementById("date").value;
    const invperiod = document.getElementById("invperiod").value;
    const addDep = parseInt(document.getElementById("addDep").value);
    const addDepPeriod = document.getElementById("addDepPeriod").selectedIndex;
    const breakdown = document.getElementById("breakdown").selectedIndex;
    const ranbox = document.getElementById("box10");
    var date1 = new Date(date);
    var startyear = parseInt(date1.getFullYear());
    var startmonth = parseInt(date1.getMonth()) + 1;
    var startdate = parseInt(date1.getDate());
    var endyear = startyear + parseInt(year);
    var endmonth = startmonth + parseInt(months);
    var enddays = startdate + parseInt(days);
    var enddate = `${endmonth}/${enddays}/${endyear}`
    var date2 = new Date(enddate);
    const noOfDays = Math.ceil((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
    var rate;
    ranbox.innerHTML = `<h1>${1 + baserate / 100}</h1>`;
    var earnbreak = document.getElementById("earnbreak");
    earnbreak.style.display = 'block';
    answer.style.display = 'block';
    switch (percentperiod) {
        case 0:
            rate = (baserate / 100);
            break;
        case 1:
            rate = (baserate / 7 / 100);
            break;
        case 2:
            rate = (baserate / 30 / 100);
            break;
        case 3:
            rate = (baserate / 365 / 100);
            break;

        default:
            break;
    }
    var initialamount = principal;
    var datenow = new Date(date1);
    for (let index = 1; index <= noOfDays; index++) {
        datenow.setDate(datenow.getDate() + 1);
        var totalAmountNow = principal * (1 + rate);
        var earning = totalAmountNow - principal;
        var reinvest = (invperiod * earning) / 100;
        var cashout = earning - reinvest;
        principal = totalAmountNow - cashout;
        if (addDepPeriod == 0) {
            principal = principal + addDep;
        }


        if (addDepPeriod == 1) {
            if (index % 7 == 0) {
                principal = principal + addDep;
            }
        }

        if (addDepPeriod == 2) {
            if (index % 30 == 0) {
                principal = principal + addDep;
            }
        }

        if (addDepPeriod == 3) {
            if (index % 365 == 0) {
                principal = principal + addDep;
            }
        }
        var lastDayofmonth = new Date(datenow.getFullYear(), datenow.getMonth() + 1, 0);
        var lastDayofyear = new Date(datenow.getFullYear(), 11, 31);
        if (breakdown == 0) {
            var para = document.createElement("tr");
            para.innerHTML = `  <th>${datenow.getDate()}/${datenow.getMonth()}/${datenow.getFullYear()}</th>
                                <th>${Math.round(earning)}</th>
                                <th>${Math.round(reinvest)}</th>
                                <th>${Math.round(cashout)}</th>
                                <th>${Math.round(principal)}</th>`;
            document.getElementById("tableinside").appendChild(para);
        }
        if (breakdown == 1) {
            if (datenow.getDate() == lastDayofmonth.getDate()) {
                var para = document.createElement("tr");
                para.innerHTML = `  <th>${datenow.getMonth()}/${datenow.getFullYear()}</th>
                <th>${Math.round(earning)}</th>
                <th>${Math.round(reinvest)}</th>
                <th>${Math.round(cashout)}</th>
                <th>${Math.round(principal)}</th>`;
                document.getElementById("tableinside").appendChild(para);
            }
        }
        if (breakdown == 2) {

            if (datenow.getMonth() == 11 && datenow.getDate() == lastDayofyear.getDate()) {
                var para = document.createElement("tr");
                para.innerHTML = `  <th>${datenow.getFullYear()}</th>
                                <th>${Math.round(earning)}</th>
                                <th>${Math.round(reinvest)}</th>
                                <th>${Math.round(cashout)}</th>
                                <th>${Math.round(principal)}</th>`
                document.getElementById("tableinside").appendChild(para);
            }
        }
    }

    const total = principal;
    answer.innerHTML = ` <h1>Investment Projection</h1>
    <div class="values">
        <h6>Investment value</h6>
        <h4>${Math.round(total)}</h4>
        <h6>Total interest / earnings</h6>
        <h4>${Math.round(total - initialamount)}</h4>
        <h6>Daily interest rate</h6>
        <h4>${baserate}</h4>
        <h6>End date</h6>
        <h4>${datenow.getDate()}/${datenow.getMonth()}/${datenow.getFullYear()}</</</h4>
    </div>

</div>`;
}
function mycurr1() {
    const mycurrname = document.getElementById("currname");
    mycurrname.innerHTML = `$`;
}
function mycurr2() {
    const mycurrname = document.getElementById("currname");
    mycurrname.innerHTML = `€`;
}
function mycurr3() {
    const mycurrname = document.getElementById("currname");
    mycurrname.innerHTML = `£`;
}
function mycurr4() {
    const mycurrname = document.getElementById("currname");
    mycurrname.innerHTML = `₹`;
}
function mycurr5() {
    const mycurrname = document.getElementById("currname");
    mycurrname.innerHTML = `&nbsp;`;
}