let front_hm = document.querySelectorAll("#h1 span"); // Human front side
let front_hd = document.querySelector("#h1 p.mnhd"); // Human Part Name


// Events for Hover  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- //
for (let element of front_hm) {                                           //
    element.addEventListener("mouseover", () => {                         //
        front_hd.innerHTML = element.querySelector("p.mn").innerText;     //
    });                                                                   //
    element.addEventListener("mouseout", () => {                          //
        front_hd.innerHTML = "";                                          //
    });                                                                   //
}                                                                         //
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- //

// Same Shit Here
let back_hm = document.querySelectorAll("#h2 span");                   // Just for back side
let back_hd = document.querySelector("#h2 p.mnhd");                            //
for (let element of back_hm) {                                                 //
    element.addEventListener("mouseover", () => {                              //
        back_hd.innerHTML = element.querySelector("p.mn").innerText;           //
    });//                                                                 <|===//
    element.addEventListener("mouseout", () => {
        back_hd.innerHTML = "";
    });
}

let ae = []; // All Elements
let aeObj = {}; // Just Object for all Elements

for (let i = 1; i <= 60; i++) {
    const e = document.querySelector(`#m${i}`);
    if (e != null) {
        ae.push(e)
        aeObj[`m${i}`] = e;
    }
}



// =-=-=-=-=-=-=-=- SOME DYNAMIC STYLE -=-=-=-=-=-=-=-= \\


ae.map(part => {
    part.classList.add('body-part')
    part.addEventListener("mouseover", () => {
        for (let el of ae) {
            if (el.querySelector("p.code").innerHTML == part.querySelector("p.code").innerHTML) {
                el.style.filter = "opacity(0.4)";
            }
        }
        part.style.filter = "opacity(0.6)";
    });
    part.addEventListener("mouseout", () => {
        for (let el of ae) {
            if (el.querySelector("p.code").innerHTML == part.querySelector("p.code").innerHTML) {
                el.style.filter = "opacity(0.2)";
            }
        }
        part.style.filter = "opacity(0.2)";
    });
})

// PRICE LIST \\
let pl = [
    {
        name: "Դեմք առանց ճակատի",
        p: ["demq"],
        price: 9600,
    },
    {
        name: "Վերին շուրթ",
        p: ["v-shurt"],
        price: 1500,
    },
    {
        name: "Ճակատ",
        p: ["chakat"],
        price: 3500,
    },
    {
        name: "Այտոսկրեր",
        p: ["aytoskrer"],
        price: 5000,
    },
    {
        name: "Բակեր",
        p: ["baker"],
        price: 7000,
    },
    {
        name: "Կզակ",
        p: ["kzak"],
        price: 4000,
    },
    {
        name: "Պարանոց",
        p: ["paranoc"],
        price: 7000,
    },
    {
        name: "Ծոծրակ",
        p: ["cocrak"],
        price: 8000,
    },
    {
        name: "Ուսեր",
        p: ["user"],
        price: 7000,
    },
    {
        name: "Ձեռքեր",
        p: ["dzerqer"],
        price: 16000,
    },
    {
        name: "Բազուկներ",
        p: ["bazukner"],
        price: 7000,
    },
    {
        name: "Նախաբազուկներ",
        p: ["naxabazukner"],
        price: 12000,
    },
    {
        name: "Մատներ",
        p: ["matner"],
        price: 2000,
    },
    {
        name: "Թևատակեր",
        p: ["tevataker"],
        price: 6000,
    },
    {
        name: "Դեկոլտե",
        p: ["dekolte"],
        price: 15000,
    },
    {
        name: "Կրծքեր",
        p: ["krcqer"],
        price: 15000,
    },
    {
        name: "Կրծքավանդակ",
        p: ["krcqavandak"],
        price: 25000,
    },
    {
        name: "Մեջք",
        p: ["mejq"],
        price: 32000,
    },
    {
        name: "Մեջքի 1/3 հատված",
        p: ["mejq1/3"],
        price: 15000,
    },
    {
        name: "Փոր",
        p: ["por"],
        price: 24000,
    },
    {
        name: "Փորի 1/3 հատված",
        p: ["por1/3"],
        price: 12000,
    },
    {
        name: "Բիկինի",
        p: ["bikini"],
        price: 16000,
    },
    {
        name: "Խորը բիկինի",
        p: ["x-bikini"],
        price: 20000,
    },
    {
        name: "Նստատեղ",
        p: ["nstatex"],
        price: 20000,
    },
    {
        name: "Ազդրեր",
        p: ["azdrer"],
        price: 30000,
    },
    {
        name: "Սրունքներ",
        p: ["srunqner"],
        price: 25000,
    },
    {
        name: "Ականջներ",
        p: ["akanjner"],
        price: 5000,
    },
    {
        name: "Ոտքեր",
        p: ["votqer"],
        price: 38000,
    },
]; // Price List

let ofl = [
    {
        name: "Դեմք առանց ճակատի + պարանոց + ծոծրակ",
        p: ["demq", "paranoc", "cocrak"],
        price: 11000,
    },
    {
        name: "Դեմք + պարանոց",
        p: ["demq", "chakat", "paranoc"],
        price: 11000,
    },
    {
        name: "Դեմք + պարանոց + ծոծրակ",
        p: ["demq", "chakat", "paranoc", "cocrak"],
        price: 12000,
    },
]; // Offer List


//=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\\

let ol = []; // Order List
let fp = 0; // Final Price
let mejqC = 0;
let porC = 0;
let pfp = document.querySelector("p#finalPrice");
let cl = document.querySelector("#checkList #c");
let ofe = document.querySelector("#offers");
let ofs = []; // Offers


for (let element of ae) {
    element.addEventListener("click", () => {
        let pn = element.querySelector("p.code");
        if (element.classList.contains("active")) {
            for (let i in ol) {
                if (ol[i] == pn.innerText) {
                    ol.splice(i, 1);
                }
            }
            for (let elem of ae) {
                let pnn = elem.querySelector("p.code");
                if (pnn.innerText == pn.innerText && pn.innerText == pn.innerText.split("1/3")) {
                    elem.classList.remove("active");
                }
            }
            element.classList.remove("active");
            for (let elem of pl) {
                if (elem.p[0] == pn.innerText) {
                    fp -= elem.price;
                }
            }

            if (pn.innerText == "mejq1/3") {
                if (mejqC == 3) {
                    for (let i in ol) {
                        if (ol[i] == "mejq") {
                            ol.splice(i, 1);
                        }
                    }
                    ol.push("mejq1/3");
                    ol.push("mejq1/3");
                    fp += 13000;
                }
                mejqC--;
            }
            if (pn.innerText == "por1/3") {
                if (porC == 3) {
                    for (let i in ol) {
                        if (ol[i] == "por") {
                            ol.splice(i, 1);
                        }
                    }
                    ol.push("por1/3");
                    ol.push("por1/3");
                    fp += 12000;
                }
                porC--;
            }

        } else {
            ol.push(pn.innerText);
            for (let elem of ae) {
                let pnn = elem.querySelector("p.code");
                if (pnn.innerText == pn.innerText && pn.innerText == pn.innerText.split("1/3")) {
                    elem.classList.add("active");
                }
            }
            element.classList.add("active")
            for (let elem of pl) {
                if (elem.p[0] == pn.innerText) {
                    fp += elem.price;
                }
            }
            if (pn.innerText == "mejq1/3") {
                mejqC++;
            }
            if (pn.innerText == "por1/3") {
                porC++;
            }

            if (mejqC == 3 && pn.innerText == "mejq1/3") {
                for (let i in ol) {
                    if (ol[i] == "mejq1/3") {
                        ol.splice(i, 1);
                    }
                }
                for (let i in ol) {
                    if (ol[i] == "mejq1/3") {
                        ol.splice(i, 1);
                    }
                }
                ol.push("mejq");
                fp -= 13000;
            }
            if (porC == 3 && pn.innerText == "por1/3") {
                for (let i in ol) {
                    if (ol[i] == "por1/3") {
                        ol.splice(i, 1);
                    }
                }
                for (let i in ol) {
                    if (ol[i] == "por1/3") {
                        ol.splice(i, 1);
                    }
                }
                ol.push("por");
                fp -= 12000;
            }

        }

        // Offers \\

        ofs = [];
        for (let i in ofl) {
            let checked = 0;
            let cg = ofl[i].p.length;
            for (let k in ofl[i].p) {
                for (let j in ol) {
                    if (ofl[i].p[k] == ol[j]) {
                        checked++;
                    }
                }
            }
            if (checked == cg) {
                ofs.push(ofl[i]);
            }
        }
        if (fp >= 90000) {
            ofs.push({
                name: "Ամբողջ մարմին՝ 90000֏ (Միայն Կոմիտաս 37 և Գայի պողոտա 16 | Megamall մասնաճյուղերում)",
                price: 90000,
            })
        }
        if (fp >= 45000 && ol.length == 2) {
            ofs.push({
                name: "Երկուսը միասին 45000",
                price: 45000,
            })
        }
        else if (fp >= 55000 && ol.length == 3) {
            ofs.push({
                name: "Երեքը միասին 55000",
                price: 45000,
            })
        }
        ofe.innerHTML = "";
        for (let elem of ofs) {
            ofe.innerHTML += `
                <div class="flex aic jcb o-item">
                    <p class="o-name">
                        ${elem.name}
                    </p>
                    <p class="o-price">
                        ${elem.price}
                    </p>
                </div>
            `;


        }

        cl.innerHTML = "";
        for (let elem of ol) {
            for (prd of pl) {
                if (elem == prd.p) {
                    cl.innerHTML += `
                    <div class="flex aic jcb o-item">
                        <p class="o-name">
                            ${prd.name}
                        </p>
                        <p class="o-price">
                            ${prd.price}
                        </p>
                    </div>
                
                    `;
                }
            }
        }

        // Update Final Price \\
        pfp.innerHTML = fp;

    });
}

// =========== CLEAR ALL PARTS

document.querySelector('.clear-btn').addEventListener('click', function () {
    ae.map(el => {
        el.classList.remove('active')
    })
    ol.length = 0
    ofs.length = 0
    cl.innerHTML = ''
    fp = 0
    pfp.innerHTML = '0 '
    ofe.innerHTML = ''
})

document.querySelector('.head').addEventListener('mouseenter', () => {
    document.querySelector('.cont').style.transform = 'scale(4) translate(10px, 30%)'
})
document.querySelector('.head').addEventListener('mouseleave', () => {
    document.querySelector('.cont').style.transform = 'scale(1) translate(0)'
})

// =====================================

const plusMinus = document.querySelector('#add-remove')
const bodyParts = [...document.querySelectorAll('#h1 span'), ...document.querySelectorAll('#h2 span')]
let cursorX;
let cursorY;
let showPlusMinus = 850

window.addEventListener('mousemove', function (e) {
    if (window.innerWidth > showPlusMinus) {
        if (!e.target.classList.contains('body-part')) plusMinus.style.display = 'none'
        else if (e.target.classList.contains('active')) plusMinus.innerHTML = '<i class="fas fa-minus"></i> '
        else plusMinus.innerHTML = '<i class="fas fa-plus"></i> '
    }
})

bodyParts.map(part => {
    part.addEventListener('mousemove', function (e) {
        if (window.innerWidth > showPlusMinus) {
            cursorX = e.pageX;
            cursorY = e.pageY;
            plusMinus.style.display = 'block'
            plusMinus.style.left = cursorX + 7 + 'px'
            plusMinus.style.top = cursorY - 17 + 'px'
        }
    })
})

// =================================== DONE BUTTON

document.querySelector('.done-btn').addEventListener('click', function (e) {
    e.preventDefault()
    if (fp && ol.length) console.log([ol, ofs, fp]);
})
