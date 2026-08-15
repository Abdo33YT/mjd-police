// مؤشر تقدم القراءة
const progressBar = document.getElementById('progress-bar');

if (progressBar) {
  window.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percent = (scrollTop / docHeight) * 100;
    progressBar.style.width = percent + '%';
  });
}
// حاسبة الترقية
const promotionData = [
  { rank: "مستجد", next: "مستجد أول", hours: 0, points: 30 },
  { rank: "مستجد أول", next: "عريف", hours: 60, points: 100 },
  { rank: "عريف", next: "وكيل رقيب", hours: 150, points: 350 },
  { rank: "وكيل رقيب", next: "رقيب أول", hours: 250, points: 650 },
  { rank: "رقيب أول", next: "رئيس رقباء", hours: 400, points: 1100 },
  { rank: "رئيس رقباء", next: "ملازم", hours: 600, points: 1300 },
  { rank: "ملازم", next: "ملازم أول", hours: 850, points: 3000 },
  { rank: "ملازم أول", next: "نقيب", hours: 1150, points: 4500 },
  { rank: "نقيب", next: "رائد", hours: 1500, points: 6500 },
  { rank: "رائد", next: "مقدم", hours: 1900, points: 10000 },
  { rank: "مقدم", next: "عقيد", hours: 2600, points: null },
  { rank: "عقيد", next: "عميد", hours: 3000, points: null },
  { rank: "عميد", next: "لواء", hours: 3700, points: null },
  { rank: "لواء", next: "فريق", hours: 4500, points: null },
  { rank: "فريق", next: "فريق أول", hours: 5500, points: null }
];

const calcBtn = document.getElementById('calc-btn');

if (calcBtn) {
  calcBtn.addEventListener('click', function () {
    const currentRank = document.getElementById('calc-rank').value;
    const currentHours = Number(document.getElementById('calc-hours').value) || 0;
    const currentPoints = Number(document.getElementById('calc-points').value) || 0;

    const data = promotionData.find(item => item.rank === currentRank);
    const resultBox = document.getElementById('calc-result');

    const remainingHours = Math.max(data.hours - currentHours, 0);
    const remainingPoints = data.points !== null ? Math.max(data.points - currentPoints, 0) : null;

    let message = "رتبتك القادمة: " + data.next + "<br>الساعات المتبقية: " + remainingHours;
    if (remainingPoints !== null) {
      message += "<br>النقاط المتبقية: " + remainingPoints;
    }
    if (remainingHours === 0 && (remainingPoints === null || remainingPoints === 0)) {
      message = "🎉 أنت مستوفٍ لمتطلبات الترقية إلى " + data.next + "!";
    }

    resultBox.innerHTML = message;
  });
}