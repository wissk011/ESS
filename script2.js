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
