// ملف script.js
// مصفوفة لتخزين البيانات
var data = [];

// دالة للحصول على البيانات من العناصر HTML
function getData() {
  // الحصول على قيمة العنصر name
  var name = document.getElementById("name").value;
  // الحصول على قيمة العنصر age
  var age = document.getElementById("age").value;
  // الحصول على قيمة العنصر gender
  var gender = document.getElementById("gender").value;
  // إرجاع كائن يحوي البيانات
  return {name: name, age: age, gender: gender};
}

// دالة لإضافة البيانات إلى المصفوفة
function addData() {
  // استدعاء الدالة getData وتخزين النتيجة في متغير
  var newData = getData();
  // إضافة الكائن إلى نهاية المصفوفة
  data.push(newData);
  // طباعة المصفوفة في وحدة التحكم للتأكد
  console.log(data);
}

// مستمع لحدث النقر على الزر
document.getElementById("submit").addEventListener("click", function() {
  // استدعاء الدالتين getData و addData
  getData();
  addData();
});

// دالة لعرض البيانات
function showData() {
  // إنشاء عنصر table جديد
  var table = document.createElement("table");
  // إنشاء عنصر tr جديد للصف الأول
  var tr = document.createElement("tr");
  // إنشاء عناصر th للعناوين
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");
  // تعيين النص الظاهر للعناوين
  th1.textContent = "الاسم";
  th2.textContent = "العمر";
  th3.textContent = "الجنس";
  // إلحاق عناصر th بالعنصر tr
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  // إلحاق العنصر tr بالعنصر table
  table.appendChild(tr);
  // تكرار لكل عنصر في المصفوفة data
  for (var i = 0; i < data.length; i++) {
    // إنشاء عنصر tr جديد للصف الحالي
    var tr = document.createElement("tr");
    // إنشاء عناصر td للبيانات
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    // تعيين النص الظاهر للبيانات
    td1.textContent = data[i].name;
    td2.textContent = data[i].age;
    td3.textContent = data[i].gender;
    // إلحاق عناصر td بالعنصر tr
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    // إلحاق العنصر tr بالعنصر table
    table.appendChild(tr);
  }
  // إنشاء عنصر div جديد
  var div = document.createElement("div");
  // تعيين سمة id للعنصر div
  div.setAttribute("id", "data-div");
  // إلحاق العنصر table بالعنصر div
  div.appendChild(table);
  // إلحاق العنصر div بالمستند
  document.body.appendChild(div);
}
