// إنشاء رقم عشوائي بين 0 و 10000
var randomNumber = Math.floor(Math.random() * 10000);

// إضافة الرقم إلى مسار ملف script.js كمعامل query string
var scriptPath = "script.js?" + randomNumber;

// إنشاء عنصر script جديد
var script = document.createElement("script");

// تعيين سمة src للعنصر بالمسار المحدد
script.setAttribute("src", scriptPath);

// إلحاق العنصر بالمستند
document.body.appendChild(script);
