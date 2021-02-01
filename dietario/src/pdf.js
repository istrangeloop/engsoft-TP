import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import * as foodNutrients from "./foodNutrients.js";

const magicWord = "dietário | ";

async function loadDiet(arraybuffer) {
  const pdfDoc = await PDFDocument.load(arraybuffer);
  console.log(pdfDoc.getCreator());
  if (pdfDoc.getCreator().startsWith(magicWord)) {
    return JSON.parse(pdfDoc.getCreator().split(" | ")[1]);
  }
}

async function saveDiet(diet) {
  const doc = await PDFDocument.create();

  let logoPath =
    "m 253.52345,69.432437 v 62.027183 h -3.48882 v -7.7548 q -1.01196,1.35861 -2.21406,2.59985 -6.2396,6.2396 -15.07907,6.2396 -8.80032,0 -15.03993,-6.2396 -6.23963,-6.23963 -6.23963,-15.03995 0,-8.83948 6.23963,-15.084675 6.23961,-6.239608 15.03993,-6.239608 8.83947,0 15.07907,6.239608 1.2021,1.241212 2.21406,2.599837 V 69.432437 Z m -3.48882,45.281973 v -6.89937 q -0.97283,-5.12142 -4.84745,-8.996017 -5.15493,-5.154955 -12.44568,-5.154955 -7.28514,0 -12.44009,5.154955 -5.16055,5.154957 -5.16055,12.445697 0,7.28514 5.16055,12.4401 5.15495,5.1214 12.44009,5.1214 7.29075,0 12.44568,-5.16052 3.87462,-3.87462 4.84745,-8.95129 z m 15.88978,-21.324297 h 3.48881 v 38.069507 h -3.48881 z m 1.74442,-13.491219 q 1.4369,0 2.44328,1.011985 1.04554,1.006394 1.04554,2.437693 0,1.476038 -1.04554,2.482433 -1.00638,1.006383 -2.44328,1.006383 -1.43131,0 -2.47684,-1.006383 Q 264.18,84.82461 264.18,83.348572 q 0,-1.431299 1.01199,-2.437693 1.04553,-1.011985 2.47684,-1.011985 z m 46.21006,19.619005 -24.8075,24.807511 q 4.92012,4.50081 11.70765,4.50081 7.28517,0 12.4401,-5.16052 0.65975,-0.65976 1.24122,-1.35307 l 3.68451,1.3139 q -1.00639,1.39778 -2.28674,2.67814 -6.23961,6.2396 -15.07909,6.2396 -8.80031,0 -15.04551,-6.2396 -6.23963,-6.23963 -6.23963,-15.07909 0,-8.80034 6.23963,-15.045535 6.2452,-6.239608 15.04551,-6.239608 7.55911,0 13.21726,4.534336 0.92812,0.77716 1.86183,1.705272 0.34665,0.352239 0.65976,0.698894 z M 286.70635,121.77031 311.3238,97.152885 q -4.53994,-3.488817 -10.54476,-3.488817 -7.25159,0 -12.40654,5.154955 -5.15495,5.115837 -5.15495,12.406557 0,6.00479 3.4888,10.54473 z M 325.1225,93.390113 h 7.7548 V 77.187224 h 3.48881 v 16.202889 h 7.74922 v 3.488826 h -7.74922 V 131.45962 H 332.8773 V 96.878939 h -7.7548 z m 69.3906,0 v 38.069507 h -3.48883 v -7.7548 q -1.00638,1.35861 -2.20846,2.59985 -6.2396,6.2396 -15.07909,6.2396 -8.80031,0 -15.04551,-6.2396 -6.23962,-6.23963 -6.23962,-15.03995 0,-8.83948 6.23962,-15.084675 6.2452,-6.239608 15.04551,-6.239608 8.83949,0 15.07909,6.239608 1.20208,1.241212 2.20846,2.599837 v -5.389769 z m -3.48883,21.324297 v -6.89937 q -0.96724,-5.12142 -4.84745,-8.996017 -5.15495,-5.154955 -12.4401,-5.154955 -7.29072,0 -12.44567,5.154955 -5.15495,5.154957 -5.15495,12.445697 0,7.28514 5.15495,12.4401 5.15495,5.1214 12.44567,5.1214 7.28515,0 12.4401,-5.16052 3.88021,-3.87462 4.84745,-8.95129 z M 375.55942,77.69044 h 6.4353 l -9.49919,7.251583 h -3.25959 z m 30.58306,53.76918 V 93.390113 h 3.48882 v 6.938507 q 1.08469,-1.548738 2.52156,-2.985637 4.61264,-4.612612 9.46007,-4.84185 v 3.796328 q -3.29871,0.156595 -6.82667,3.68451 -4.95925,4.920119 -5.15496,11.825069 v 19.65258 z m 24.77398,-38.069507 h 3.48881 v 38.069507 h -3.48881 z m 1.7444,-13.491219 q 1.43132,0 2.4433,1.011985 1.04552,1.006394 1.04552,2.437693 0,1.476038 -1.04552,2.482433 -1.01198,1.006383 -2.4433,1.006383 -1.43688,0 -2.48243,-1.006383 -1.00638,-1.006395 -1.00638,-2.482433 0,-1.431299 1.00638,-2.437693 1.04555,-1.011985 2.48243,-1.011985 z m 33.10464,10.041543 q 8.83948,0 15.03997,6.239608 6.2452,6.245195 6.2452,15.084675 0,8.80032 -6.2452,15.03995 -6.20049,6.2396 -15.03997,6.2396 -8.80031,0 -15.03993,-6.2396 -6.23963,-6.23963 -6.23963,-15.03995 0,-8.83948 6.23963,-15.084675 6.23962,-6.239608 15.03993,-6.239608 z m 0,3.723631 q -7.28514,0 -12.44566,5.154955 -5.15498,5.154957 -5.15498,12.445697 0,7.28514 5.15498,12.4401 5.16052,5.1214 12.44566,5.1214 7.29075,0 12.4457,-5.1214 5.15496,-5.15496 5.15496,-12.4401 0,-7.29074 -5.15496,-12.445697 -5.15495,-5.154955 -12.4457,-5.154955 z M 169.84883,84.108101 c -4.24353,5.060175 -3.02592,16.560199 -1.03255,23.014529 -0.88638,-0.83316 -1.75266,-1.61697 -2.59313,-2.3462 -0.56068,-5.581814 -11.79059,-18.893154 -20.30328,-19.079951 0.27839,7.89373 12.47113,17.301581 18.15269,19.628001 1.44946,1.21538 3.01076,2.63924 4.63622,4.21619 -5.93029,-3.37611 -17.97976,-6.00089 -23.593,-2.38925 6.00424,4.50159 23.41268,6.39084 26.67119,5.47962 1.2342,1.2783 2.44828,2.57584 3.64177,3.89214 -0.63699,-0.22305 -15.82004,-3.62138 -20.29453,-0.11758 5.47158,4.0685 18.96932,4.48515 23.06016,3.23133 0.39522,0.45495 0.78892,0.91232 1.18073,1.37187 0.30098,0.0303 0.61222,0.0984 0.93379,0.213 1.26844,0.45214 2.05165,1.52206 2.3026,2.66321 0.0836,0.38082 0.11916,0.77096 0.11573,1.16423 1.50554,1.86647 2.9509,3.73071 4.29498,5.54743 l 1.45431,-1.07313 c -1.69171,-2.28651 -3.53107,-4.64054 -5.44789,-6.97881 3.20203,-4.16822 6.81277,-17.34414 5.53718,-22.0247 -5.22746,3.18609 -7.42838,14.00647 -7.37766,19.81283 -0.90499,-1.07081 -1.82152,-2.13184 -2.74945,-3.18287 3.14548,-4.17605 4.32843,-20.609147 0.66606,-26.622769 -5.04773,5.005702 -4.48031,18.018359 -2.80048,24.243859 -1.50113,-1.64307 -3.00173,-3.22481 -4.4731,-4.70835 2.22455,-5.21446 2.68003,-20.673044 -1.98234,-25.954629 z m 6.18749,37.820449 c -1.28421,0.16183 -2.63191,0.32615 -3.98755,0.4369 -1.2165,1.83527 -1.6695,4.65559 -0.31545,5.10332 0.39229,0.12961 0.98825,0.0202 1.67371,-0.41854 0.39521,-0.25311 0.79735,-0.60684 1.16587,-1.01576 0.23506,-1.30949 0.77455,-2.59127 1.55756,-3.53558 -0.008,-0.20967 -0.0364,-0.39869 -0.0942,-0.57034 z m -7.77549,0.55378 c -2.98324,0.71246 -5.65523,2.0026 -7.11575,3.98774 2.13161,0.18319 4.97902,0.20876 7.90469,0.0901 -0.18738,-1.25702 0.13984,-2.74689 0.80318,-4.07343 -0.53787,0.0134 -1.07041,0.0142 -1.59212,-0.005 z m 10.8379,0.31953 c -2.87694,-0.10594 -3.71952,6.93145 -1.46918,7.14604 0.4114,0.0393 0.96796,-0.19994 1.53829,-0.7802 0.57043,-0.58026 1.09807,-1.45496 1.41411,-2.36416 0.31606,-0.9092 0.41331,-1.84841 0.26321,-2.53139 -0.15019,-0.68287 -0.43983,-1.09882 -1.14426,-1.34981 -0.20946,-0.0746 -0.41029,-0.11337 -0.60207,-0.12048 z M 139.96475,82.810612 h 54.25875 c -0.0212,12.102127 0.038,24.204108 0.0805,36.306128 0.24201,4.62816 0.71787,9.23294 2.71873,13.68521 h -52.81272 c -2.30253,-1.68346 -3.96322,-4.81104 -4.13553,-11.28748 z m 56.92142,35.608658 V 67.90679 h -2.85328 -57.06585 l -6.14551,3.616392 v 70.016328 h 63.32112 v -4.68286 h 9.10857 c 0,0.10977 -6.36505,-3.86231 -6.36505,-18.43738 z m -63.81235,20.06474 V 73.824493 l 3.89322,-2.29267 v 48.119667 c 0,14.0293 6.25531,17.20516 6.25531,17.20516 h 50.9203 v 4.68286 l 0.95771,-2.27195 h -62.02654";

  const helveticaOblique = await doc.embedFont(StandardFonts.HelveticaOblique);

  console.log(diet);

  let diet_data = JSON.stringify(diet);
  doc.setCreator(magicWord + diet_data);

  let days = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  diet = diet.map((weekday) =>
    weekday.map((food) => {
      return {
        nome: foodNutrients.getFoods().filter((item) => food == item.id)[0]
          .Nome,
        quantidade: 100,
        unidade: "g",
      };
    })
  );

  console.log(diet);
  for (let d = 0; d < days.length; d++) {
    if (diet[d].length == 0) continue;

    const page = doc.addPage();

    page.drawSvgPath(logoPath, {
      x: 15,
      y: 848,
      scale: 0.5,
      color: rgb(0, 0, 0),
    });

    let top = page.getHeight() - 88;

    page.moveTo(80, top - 8);
    page.drawText(days[d], { size: 24, font: helveticaOblique });

    page.moveTo(80, top - 32);
    page.drawText("Alimento", { size: 14 });

    page.moveTo(350, top - 32);
    page.drawText("Quantidade", { size: 14 });

    page.drawRectangle({
      x: 80,
      y: top - 46,
      width: 400,
      height: 1,
      borderWidth: 0,
      color: rgb(0, 0, 0),
    });

    top -= 60;

    for (let i = 0; i < diet[d].length; i++) {
      page.moveTo(80, top);
      page.drawText(diet[d][i].nome, { size: 12 });

      page.moveTo(350, top);
      page.drawText(diet[d][i].quantidade + diet[d][i].unidade, { size: 12 });
      top -= 16;
    }
  }

  let pdfBytes = await doc.save();
  require("downloadjs")(pdfBytes, "dieta.pdf", "application/pdf");
}

export { saveDiet, loadDiet };
