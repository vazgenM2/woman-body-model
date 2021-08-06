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
        part.style.filter = "opacity(0.4)";
        for (let el of ae) {
            if (el.querySelector("p.code").innerHTML == part.querySelector("p.code").innerHTML) {
                el.style.filter = "opacity(0.4)";
            }
        }
    });
    part.addEventListener("mouseout", () => {
        part.style.filter = "opacity(0.2)";
        for (let el of ae) {
            if (el.querySelector("p.code").innerHTML == part.querySelector("p.code").innerHTML) {
                el.style.filter = "opacity(0.2)";
            }
        }
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
        name: "Վերին շուրթ՝ 1500֏",
        p: ["v-shurt"],
        price: 1500,
    },
    {
        name: "Ճակատ՝ 3500֏",
        p: ["chakat"],
        price: 3500,
    },
    {
        name: "Այտոսկրեր՝ 5000֏",
        p: ["aytoskrer"],
        price: 5000,
    },
    {
        name: "Բակեր՝ 7000֏",
        p: ["baker"],
        price: 7000,
    },
    {
        name: "Կզակ՝ 4000֏",
        p: ["kzak"],
        price: 4000,
    },
    {
        name: "Պարանոց՝ 7000֏",
        p: ["paranoc"],
        price: 7000,
    },
    {
        name: "Ծոծրակ՝ 8000֏",
        p: ["cocrak"],
        price: 8000,
    },
    {
        name: "Ուսեր՝ 7000֏",
        p: ["user"],
        price: 7000,
    },
    {
        name: "Ձեռքեր՝ 16000֏",
        p: ["dzerqer"],
        price: 16000,
    },
    {
        name: "Բազուկներ՝ 7000֏",
        p: ["bazukner"],
        price: 7000,
    },
    {
        name: "Նախաբազուկներ՝ 12000֏",
        p: ["naxabazukner"],
        price: 12000,
    },
    {
        name: "Մատներ՝ 2000֏",
        p: ["matner"],
        price: 2000,
    },
    {
        name: "Թևատակեր՝ 6000֏",
        p: ["tevataker"],
        price: 6000,
    },
    {
        name: "Դեկոլտե՝ 15000֏",
        p: ["dekolte"],
        price: 15000,
    },
    {
        name: "Կրծքեր՝ 15000֏",
        p: ["krcqer"],
        price: 15000,
    },
    {
        name: "Կրծքավանդակ՝ 25000֏",
        p: ["krcqavandak"],
        price: 25000,
    },
    {
        name: "Մեջք՝ 32000֏",
        p: ["mejq"],
        price: 32000,
    },
    {
        name: "Մեջքի 1/3 հատված՝ 12000֏",
        p: ["mejq1/3"],
        price: 15000,
    },
    {
        name: "Փոր՝ 24000֏",
        p: ["por"],
        price: 24000,
    },
    {
        name: "Փորի 1/3 հատված՝ 15000֏",
        p: ["por1/3"],
        price: 12000,
    },
    {
        name: "Բիկինի՝ 16000֏",
        p: ["bikini"],
        price: 16000,
    },
    {
        name: "Խորը բիկինի՝ 20000֏",
        p: ["x-bikini"],
        price: 20000,
    },
    {
        name: "Նստատեղ՝ 20000֏",
        p: ["nstatex"],
        price: 20000,
    },
    {
        name: "Ազդրեր՝ 30000֏",
        p: ["azdrer"],
        price: 30000,
    },
    {
        name: "Սրունքներ՝ 25000֏",
        p: ["srunqner"],
        price: 25000,
    },
    {
        name: "Ականջներ",
        p: ["akanjner"],
        price: 5000,
    },
    {
        name: "Ոտքեր՝ 38000֏",
        p: ["votqer"],
        price: 38000,
    },
    {
        name: "Ամբողջ մարմին՝ 90000֏ (Միայն Կոմիտաս 37 և Գայի պողոտա 16 | Megamall մասնաճյուղերում)",
        p: ["all"],
        price: 90000,
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
        name: "Դեմք + պարանոց + ծոծրակ՝ 12000֏",
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

window.addEventListener('mousemove', function (e) {
    if (!e.target.classList.contains('body-part')) plusMinus.style.display = 'none'
    else if (e.target.classList.contains('active')) plusMinus.innerHTML = '-'
    else plusMinus.innerHTML = '+'
})

bodyParts.map(part => {
    part.addEventListener('mousemove', function (e) {
        cursorX = e.pageX;
        cursorY = e.pageY;
        plusMinus.style.display = 'block'
        plusMinus.style.left = cursorX + 7 + 'px'
        plusMinus.style.top = cursorY - 17 + 'px'
    })
})

// =================================== DONE BUTTON

document.querySelector('.done-btn').addEventListener('click', function () {
    alert(fp)
})