// الكود الخاص بالدالة loadScript
function loadScript(url, callback) {
  // إنشاء طلب جديد
  var xhr = new XMLHttpRequest();
  // فتح الطلب بالطريقة GET والمسار المحدد
  xhr.open("GET", url);
  // تعيين نوع الاستجابة إلى نص
  xhr.responseType = "text";
  // عند اكتمال الطلب
  xhr.onload = function() {
    // إذا كان الحالة ناجحة
    if (xhr.status === 200) {
      // إنشاء عنصر script جديد
      var script = document.createElement("script");
      // تعيين النص الظاهر للعنصر بالاستجابة
      script.textContent = xhr.response;
      // إلحاق العنصر بالمستند
      document.body.appendChild(script);
      // استدعاء الدالة الرجعية إن وجدت
      if (callback) callback();
    }
  };
  // إرسال الطلب
  xhr.send();
}

// استخدام الدالة لتحميل ملف script.js
loadScript("script.js", function() {
  // هنا يمكنك كتابة أي كود يعتمد على ملف script.js
});
